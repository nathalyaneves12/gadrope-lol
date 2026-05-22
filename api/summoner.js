const { fetchJson, getRouting, handleCors } = require('./_utils');

module.exports = async (req, res) => {
    if (handleCors(req, res)) return;

    const apiKey = req.headers['x-riot-token'];
    const region = req.query.region || 'BR';
    const name = req.query.name;
    const tag = req.query.tag;

    if (!name || !tag) {
        return res.status(400).json({ error: 'Faltando nome ou tag' });
    }
    if (!apiKey) {
        return res.status(401).json({ error: 'Riot API Key ausente nos headers (x-riot-token)' });
    }

    try {
        const { platform, regional } = getRouting(region);
        const accountUrl = `https://${regional}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`;

        const accountRes = await fetchJson(accountUrl, { 'X-Riot-Token': apiKey });
        if (accountRes.status !== 200) {
            return res.status(accountRes.status).json(accountRes.data || { error: 'Invocador não encontrado' });
        }

        const puuid = accountRes.data.puuid;
        const summonerUrl = `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;

        const sumRes = await fetchJson(summonerUrl, { 'X-Riot-Token': apiKey });
        if (sumRes.status !== 200) {
            return res.status(sumRes.status).json(sumRes.data || { error: 'Erro ao buscar invocador por PUUID' });
        }

        const merged = {
            puuid: puuid,
            gameName: accountRes.data.gameName,
            tagLine: accountRes.data.tagLine,
            id: sumRes.data.id,
            summonerLevel: sumRes.data.summonerLevel,
            profileIconId: sumRes.data.profileIconId
        };
        return res.status(200).json(merged);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
