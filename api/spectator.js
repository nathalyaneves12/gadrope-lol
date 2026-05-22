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
        const { platform } = getRouting(region);
        const spectatorUrl = `https://${platform}.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}`;

        const specRes = await fetchJson(spectatorUrl, { 'X-Riot-Token': apiKey });
        return res.status(specRes.status).json(specRes.data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
