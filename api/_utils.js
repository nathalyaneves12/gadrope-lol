const https = require('https');

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

function handleCors(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'x-riot-token, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return true;
    }
    return false;
}

module.exports = {
    getRouting,
    fetchJson,
    handleCors
};
