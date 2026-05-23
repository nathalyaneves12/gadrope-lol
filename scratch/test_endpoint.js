const http = require('http');

function getJson(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    reject(new Error(`HTTP ${res.statusCode}: ${body}`));
                } else {
                    resolve(JSON.parse(body));
                }
            });
        }).on('error', reject);
    });
}

async function run() {
    try {
        console.log("=== TESTANDO SUMMONER SCRAPER PROXY ===");
        const summoner = await getJson('http://localhost:8080/api/summoner-opgg?region=br&name=K%C3%B3k%C3%B3%20%E7%97%9B%E3%81%BF&tag=red');
        console.log(`Sucesso! Nome: ${summoner.name}#${summoner.tag}`);
        console.log(`Nível: ${summoner.level}, Rank: ${summoner.tier}`);
        console.log(`Role detectada: ${summoner.role}`);
        console.log(`Primeira partida champion: ${summoner.matches[0].champ}`);
        console.log(`Primeira partida items:`, summoner.matches[0].items);

        console.log("\n=== TESTANDO CHAMPION BUILD SCRAPER PROXY ===");
        const build = await getJson('http://localhost:8080/api/champion-build?champion=Yasuo&source=KR');
        console.log(`Sucesso! Yasuo build (KR):`);
        console.log(`Runa Principal: ${build.runes.keystone}`);
        console.log(`Max ordem: ${build.skills.maxOrder}`);
        console.log(`Itens Iniciais:`, build.items.starting.map(i => i.name));
        console.log(`Itens Core:`, build.items.core.map(i => i.name));
        
        console.log("\n=== TODOS OS TESTES PASSARAM COM SUCESSO! ===");
    } catch (e) {
        console.error("ERRO NO TESTE:", e);
    }
}

run();
