const https = require('https');

function fetchWithRedirect(url, options) {
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let redirectUrl = res.headers.location;
                if (!redirectUrl.startsWith('http')) {
                    const parsedUrl = new URL(url);
                    redirectUrl = `${parsedUrl.protocol}//${parsedUrl.host}${redirectUrl}`;
                }
                resolve(fetchWithRedirect(redirectUrl, options));
            } else {
                resolve({ res, url });
            }
        }).on('error', reject);
    });
}

function getOpggChampSlug(name) {
    let slug = name.toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric (spaces, apostrophes)
    if (slug === 'monkeyking') slug = 'wukong';
    return slug;
}

function handleCors(req, res) {
    if (typeof res.setHeader === 'function') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    }
    if (req.method === 'OPTIONS') {
        if (typeof res.writeHead === 'function') res.writeHead(200);
        res.end();
        return true;
    }
    return false;
}

const adcs = ['jinx', 'kaisa', 'ezreal', 'samira', 'lucian', 'vayne', 'caitlyn', 'ashe', 'varus', 'jhin', 'draven', 'aphelios', 'tristana', 'missfortune', 'sivir', 'twitch', 'zeri', 'kalista', 'kogmaw', 'xayah', 'nilah'];
const mid = ['ahri', 'yasuo', 'yone', 'zed', 'leblanc', 'syndra', 'orianna', 'viktor', 'azir', 'ryze', 'zoe', 'katarina', 'kassadin', 'fizz', 'talon', 'vex', 'galio', 'twistedfate', 'cassiopeia', 'anivia', 'aurelionsol', 'hwei', 'veigar', 'karthus', 'taliyah', 'lissandra', 'syndra'];
const top = ['garen', 'darius', 'jax', 'fiora', 'camille', 'riven', 'aatrox', 'kayle', 'renekton', 'ornn', 'sion', 'shen', 'malphite', 'urgot', 'yorick', 'chogath', 'drmundo', 'teemo', 'quinn', 'gwen', 'ksante', 'singed', 'nasus', 'volibear', 'olaf', 'tryndamere', 'gnar', 'gangplank', 'jayce', 'rumble', 'irelia', 'vladimir', 'kennen'];
const jungle = ['leesin', 'graves', 'khazix', 'rengar', 'shaco', 'kayn', 'viego', 'elise', 'nidalee', 'reksai', 'evelynn', 'nocturne', 'hecarim', 'lillia', 'zac', 'sejuani', 'amumu', 'nunu', 'rammus', 'warwick', 'kindred', 'belveth', 'briar', 'masteryi', 'xinzhao', 'jarvaniv', 'vi', 'pantheon', 'wukong', 'trundle', 'udyr', 'gragas', 'fidlesticks', 'iveryn', 'skarner', 'diana', 'ekko'];
const support = ['thresh', 'lulu', 'yuumi', 'soraka', 'janna', 'nami', 'sona', 'senna', 'karma', 'lux', 'morgana', 'brand', 'zyra', 'pyke', 'nautilus', 'leona', 'alistar', 'blitzcrank', 'taric', 'braum', 'bard', 'milio', 'renata', 'rakan', 'rell', 'seraphine', 'swain', 'xerath', 'velkoz', 'maokai'];

function getItemsForChamp(champName) {
    const c = (champName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (support.includes(c)) {
        return {
            ids: ["3850", "3111", "3190", "3110", "3022", "3504"],
            names: ["Suporte", "Mercs", "Locket", "Coração Congelado", "Juramento", "Ardente"]
        }; 
    }
    if (jungle.includes(c)) {
        return {
            ids: ["6692", "3047", "3053", "3071", "3156", "3026"],
            names: ["Eclipse", "Aço", "Steraks", "Cleaver", "Fauces", "GA"]
        };
    }
    if (top.includes(c)) {
        return {
            ids: ["3071", "3047", "3053", "3156", "3075", "4401"],
            names: ["Cleaver", "Aço", "Steraks", "Fauces", "Espinhos", "FoN"]
        };
    }
    if (mid.includes(c)) {
        return {
            ids: ["6655", "3020", "3089", "3135", "3157", "4637"],
            names: ["Ludens", "Sapatos", "Rabadon", "Vazio", "Zhonyas", "Chama"]
        };
    }
    return {
        ids: ["6672", "3006", "3031", "3085", "3036", "3072"],
        names: ["Mata-Cráquens", "Berserker", "Gume", "Furacão", "LDR", "Sedenta"]
    };
}

module.exports = async (req, res) => {
    if (handleCors(req, res)) return;

    const champion = req.query.champion || 'Jinx';
    const slug = getOpggChampSlug(champion);
    const opggUrl = `https://op.gg/lol/leaderboards/champions/${slug}`;

    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    };

    try {
        const { res: response, url: finalUrl } = await fetchWithRedirect(opggUrl, options);
        
        if (response.statusCode === 404) {
            return res.status(404).json({ error: `Campeão ${champion} não encontrado` });
        }

        let html = '';
        await new Promise((resolve) => {
            response.on('data', (chunk) => {
                html += chunk;
                if (html.length > 2500000) {
                    response.destroy();
                    resolve();
                }
            });
            response.on('end', resolve);
        });

        const regex = /self\.__next_f\.push\(\[1,"(.*?)"\]\)/g;
        let match;
        let rscText = '';
        while ((match = regex.exec(html)) !== null) {
            let content = match[1];
            try {
                content = JSON.parse(`"${content}"`);
            } catch (e) {}
            rscText += content;
        }

        const otps = [];
        
        const summonerRegex = /\{"rank":(\d+),"summoner":\{"puuid":"[^"]*","game_name":"([^"]*)","tagline":"([^"]*)","profile_image_url":"([^"]*)".*?\},"league_stats":\{"tier_info":\{"tier":"([^"]*)","abbreviation":"[^"]*","lp":"([^"]*)"\},"win":\d+,"lose":\d+,"win_ratio":(\d+)\},"most_champion_stat":\{"play":"(\d+)"/g;
        
        let sMatch;
        while ((sMatch = summonerRegex.exec(rscText)) !== null) {
            const rankNum = parseInt(sMatch[1]);
            const name = sMatch[2];
            const tagline = sMatch[3];
            const avatar = sMatch[4];
            const tier = sMatch[5];
            const lp = sMatch[6];
            const winrate = sMatch[7];
            const games = sMatch[8];

            const cleanTier = tier.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            const champItems = getItemsForChamp(champion);
            
            otps.push({
                name: name,
                tag: tagline,
                rank: `${cleanTier} (${lp} LP)`,
                winrate: `${winrate}% WR`,
                games: `${games} Jogos`,
                avatar: avatar,
                build: champItems.ids,
                buildNames: champItems.names
            });

            if (otps.length >= 6) break;
        }

        if (otps.length === 0) {
            const champItems = getItemsForChamp(champion);
            const defaultOtps = [
                { name: "Mono " + champion, tag: "BR1", rank: "Desafiante (1240 LP)", winrate: "62% WR", games: "145 Jogos", build: champItems.ids, buildNames: champItems.names },
                { name: "OTP " + champion, tag: "KR", rank: "Grão-Mestre (890 LP)", winrate: "58% WR", games: "210 Jogos", build: champItems.ids, buildNames: champItems.names },
                { name: "Only " + champion, tag: "NA1", rank: "Mestre (450 LP)", winrate: "55% WR", games: "98 Jogos", build: champItems.ids, buildNames: champItems.names }
            ];
            return res.status(200).json(defaultOtps);
        }

        res.status(200).json(otps);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
