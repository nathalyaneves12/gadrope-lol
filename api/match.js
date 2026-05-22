const { fetchJson, getRouting, handleCors } = require('./_utils');

module.exports = async (req, res) => {
    if (handleCors(req, res)) return;

    const apiKey = req.headers['x-riot-token'];
    const region = req.query.region || 'BR';
    const matchId = req.query.matchId;

    if (!matchId) {
        return res.status(400).json({ error: 'Faltando matchId' });
    }
    if (!apiKey) {
        return res.status(401).json({ error: 'Riot API Key ausente nos headers (x-riot-token)' });
    }

    try {
        const { regional } = getRouting(region);
        const matchUrl = `https://${regional}.api.riotgames.com/lol/match/v5/matches/${matchId}`;

        const matchRes = await fetchJson(matchUrl, { 'X-Riot-Token': apiKey });
        return res.status(matchRes.status).json(matchRes.data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
