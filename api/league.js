const { fetchJson, getRouting, handleCors } = require('./_utils');

module.exports = async (req, res) => {
    if (handleCors(req, res)) return;

    const apiKey = req.headers['x-riot-token'];
    const region = req.query.region || 'BR';
    const summonerId = req.query.summonerId;

    if (!summonerId) {
        return res.status(400).json({ error: 'Faltando summonerId' });
    }
    if (!apiKey) {
        return res.status(401).json({ error: 'Riot API Key ausente nos headers (x-riot-token)' });
    }

    try {
        const { platform } = getRouting(region);
        const leagueUrl = `https://${platform}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`;

        const leagueRes = await fetchJson(leagueUrl, { 'X-Riot-Token': apiKey });
        return res.status(leagueRes.status).json(leagueRes.data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
