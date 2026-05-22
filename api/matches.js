const { fetchJson, getRouting, handleCors } = require('./_utils');

module.exports = async (req, res) => {
    if (handleCors(req, res)) return;

    const apiKey = req.headers['x-riot-token'];
    const region = req.query.region || 'BR';
    const puuid = req.query.puuid;

    if (!puuid) {
        return res.status(400).json({ error: 'Faltando puuid' });
    }
    if (!apiKey) {
        return res.status(401).json({ error: 'Riot API Key ausente nos headers (x-riot-token)' });
    }

    try {
        const { regional } = getRouting(region);
        const matchesUrl = `https://${regional}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`;

        const matchesRes = await fetchJson(matchesUrl, { 'X-Riot-Token': apiKey });
        return res.status(matchesRes.status).json(matchesRes.data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
