const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = 8080;
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

function getRouting(region) {
    const r = region.toUpperCase();
    let platform = 'br1';
    let regional = 'americas';
    
    if (r === 'KR') {
        platform = 'kr';
        regional = 'asia';
    } else if (r === 'NA') {
        platform = 'na1';
        regional = 'americas';
    } else {
        platform = 'br1';
        regional = 'americas';
    }
    
    return { platform, regional };
}

function fetchJson(url, headers = {}) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve({ status: res.statusCode, data: JSON.parse(data) });
                    } catch (e) {
                        reject(new Error('Resposta JSON inválida'));
                    }
                } else {
                    try {
                        resolve({ status: res.statusCode, data: JSON.parse(data) });
                    } catch (e) {
                        resolve({ status: res.statusCode, error: data });
                    }
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

http.createServer((req, res) => {
    // Check if it is an API call
    if (req.url.startsWith('/api/')) {
        const myUrl = new URL(req.url, 'http://localhost');
        const pathname = myUrl.pathname;
        const params = myUrl.searchParams;
        const apiKey = req.headers['x-riot-token'];

        // Common headers for proxy responses
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'x-riot-token, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

        if (req.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
            return;
        }

        if (pathname === '/api/summoner-opgg') {
            const summonerOpgg = require('./api/summoner-opgg.js');
            const mockReq = {
                query: {
                    region: params.get('region'),
                    name: params.get('name'),
                    tag: params.get('tag')
                },
                method: req.method
            };
            const mockRes = {
                statusCode: 200,
                status(code) {
                    this.statusCode = code;
                    return this;
                },
                json(data) {
                    res.writeHead(this.statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(data));
                }
            };
            summonerOpgg(mockReq, mockRes);
            return;
        }

        if (pathname === '/api/champion-build') {
            const championBuild = require('./api/champion-build.js');
            const mockReq = {
                query: {
                    champion: params.get('champion'),
                    source: params.get('source')
                },
                method: req.method
            };
            const mockRes = {
                statusCode: 200,
                status(code) {
                    this.statusCode = code;
                    return this;
                },
                json(data) {
                    res.writeHead(this.statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(data));
                }
            };
            championBuild(mockReq, mockRes);
            return;
        }

        if (pathname === '/api/summoner') {
            const region = params.get('region') || 'BR';
            const name = params.get('name');
            const tag = params.get('tag');

            if (!name || !tag) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Faltando nome ou tag' }));
                return;
            }
            if (!apiKey) {
                res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Riot API Key ausente nos headers (x-riot-token)' }));
                return;
            }

            const { platform, regional } = getRouting(region);
            const accountUrl = `https://${regional}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`;

            fetchJson(accountUrl, { 'X-Riot-Token': apiKey })
                .then(accountRes => {
                    if (accountRes.status !== 200) {
                        res.writeHead(accountRes.status, { 'Content-Type': 'application/json; charset=utf-8' });
                        res.end(JSON.stringify(accountRes.data || { error: 'Invocador não encontrado' }));
                        return;
                    }
                    const puuid = accountRes.data.puuid;
                    const summonerUrl = `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;

                    return fetchJson(summonerUrl, { 'X-Riot-Token': apiKey })
                        .then(sumRes => {
                            if (sumRes.status !== 200) {
                                res.writeHead(sumRes.status, { 'Content-Type': 'application/json; charset=utf-8' });
                                res.end(JSON.stringify(sumRes.data || { error: 'Erro ao buscar invocador por PUUID' }));
                                return;
                            }
                            const merged = {
                                puuid: puuid,
                                gameName: accountRes.data.gameName,
                                tagLine: accountRes.data.tagLine,
                                id: sumRes.data.id,
                                summonerLevel: sumRes.data.summonerLevel,
                                profileIconId: sumRes.data.profileIconId
                            };
                            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                            res.end(JSON.stringify(merged));
                        });
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ error: err.message }));
                });
            return;
        }

        if (pathname === '/api/league') {
            const region = params.get('region') || 'BR';
            const summonerId = params.get('summonerId');

            if (!summonerId) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Faltando summonerId' }));
                return;
            }
            if (!apiKey) {
                res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Riot API Key ausente' }));
                return;
            }

            const { platform } = getRouting(region);
            const leagueUrl = `https://${platform}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`;

            fetchJson(leagueUrl, { 'X-Riot-Token': apiKey })
                .then(leagueRes => {
                    res.writeHead(leagueRes.status, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(leagueRes.data));
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ error: err.message }));
                });
            return;
        }

        if (pathname === '/api/matches') {
            const region = params.get('region') || 'BR';
            const puuid = params.get('puuid');

            if (!puuid) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Faltando puuid' }));
                return;
            }
            if (!apiKey) {
                res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Riot API Key ausente' }));
                return;
            }

            const { regional } = getRouting(region);
            const matchesUrl = `https://${regional}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`;

            fetchJson(matchesUrl, { 'X-Riot-Token': apiKey })
                .then(matchesRes => {
                    res.writeHead(matchesRes.status, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(matchesRes.data));
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ error: err.message }));
                });
            return;
        }

        if (pathname === '/api/match') {
            const region = params.get('region') || 'BR';
            const matchId = params.get('matchId');

            if (!matchId) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Faltando matchId' }));
                return;
            }
            if (!apiKey) {
                res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Riot API Key ausente' }));
                return;
            }

            const { regional } = getRouting(region);
            const matchUrl = `https://${regional}.api.riotgames.com/lol/match/v5/matches/${matchId}`;

            fetchJson(matchUrl, { 'X-Riot-Token': apiKey })
                .then(matchRes => {
                    res.writeHead(matchRes.status, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(matchRes.data));
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ error: err.message }));
                });
            return;
        }

        if (pathname === '/api/spectator') {
            const region = params.get('region') || 'BR';
            const puuid = params.get('puuid');

            if (!puuid) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Faltando puuid' }));
                return;
            }
            if (!apiKey) {
                res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Riot API Key ausente' }));
                return;
            }

            const { platform } = getRouting(region);
            const spectatorUrl = `https://${platform}.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}`;

            fetchJson(spectatorUrl, { 'X-Riot-Token': apiKey })
                .then(specRes => {
                    res.writeHead(specRes.status, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(specRes.data));
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ error: err.message }));
                });
            return;
        }

        res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: 'Rota de API não encontrada' }));
        return;
    }

    // Static files serving
    let safeUrl = req.url.split('?')[0];
    if (safeUrl === '/') safeUrl = '/index.html';
    
    const filePath = path.join(__dirname, safeUrl);
    
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Arquivo não encontrado');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`Erro no servidor: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(PORT, () => {
    console.log(`LoL Dashboard server running at http://localhost:${PORT}/`);
});
