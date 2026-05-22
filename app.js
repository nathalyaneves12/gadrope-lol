// ==========================================================================
// ADC MATCH HISTORY DATA (JINX, KAI'SA, EZREAL, SAMIRA, LUCIAN, VAYNE)
// ==========================================================================

const RECENT_MATCHES = [
    {
        id: 1,
        champ: "Kalista",
        champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Kalista.png",
        level: 15,
        isWin: false,
        type: "Solo/Duo",
        time: "Há 13 horas",
        kills: 3,
        deaths: 11,
        assists: 1,
        kdaRatio: "0.36",
        kdaBadge: "Sem Impacto",
        badgeType: "none",
        spells: ["SummonerFlash", "SummonerHaste"],
        items: ["6672", "3153", "3124", "3036", "1028", "3006", "3340"],
        cs: 230,
        csPerMin: "6.8",
        visionScore: 14,
        controlWards: 2,
        coachTitle: "Dificuldade contra Engage Inimigo",
        coachText: "Nesta partida de Kalista, você teve sérios problemas para se posicionar contra a linha de frente inimiga. Suas trocas iniciais foram punidas e as mortes sucessivas impediram que você alcançasse o pico de poder de Guinsoo a tempo. Foque em caitar recuado usando seus saltos defensivamente quando os tanques avançarem."
    },
    {
        id: 2,
        champ: "Zeri",
        champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Zeri.png",
        level: 16,
        isWin: false,
        type: "Solo/Duo",
        time: "Há 15 horas",
        kills: 7,
        deaths: 6,
        assists: 10,
        kdaRatio: "2.83",
        kdaBadge: "Desempenho Razoável",
        badgeType: "none",
        spells: ["SummonerFlash", "SummonerHaste"],
        items: ["3087", "6672", "3031", "3085", "3006", "", "3340"],
        cs: 237,
        csPerMin: "6.8",
        visionScore: 16,
        controlWards: 1,
        coachTitle: "Falta de Burst nas Teamfights Decisivas",
        coachText: "Seu farm e KDA foram razoáveis de Zeri, mas você falhou em converter sua vantagem em dano real nas lutas decisivas de dragão. Lembre-se de ativar sua ultimate (Sobrecarga) somente quando os inimigos estiverem agrupados e você tiver espaço livre para disparar com a passiva carregada."
    },
    {
        id: 3,
        champ: "Kalista",
        champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Kalista.png",
        level: 17,
        isWin: true,
        type: "Solo/Duo",
        time: "Há 1 dia",
        kills: 11,
        deaths: 11,
        assists: 14,
        kdaRatio: "2.27",
        kdaBadge: "Participativo",
        badgeType: "blue",
        spells: ["SummonerFlash", "SummonerCleanse"],
        items: ["3153", "3124", "3091", "6672", "3026", "3006", "3364"],
        cs: 290,
        csPerMin: "7.6",
        visionScore: 21,
        controlWards: 3,
        coachTitle: "Ótima Sincronia de Lanças e Purificar",
        coachText: "Boa vitória! Você acumulou lanças eficientemente nos alvos prioritários e usou o Purificar (Cleanse) perfeitamente para sair do controle de grupo do suporte adversário. Apesar das 11 mortes, sua presença e dano nas lutas do Barão foram o diferencial para fechar o jogo."
    },
    {
        id: 4,
        champ: "Kalista",
        champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Kalista.png",
        level: 16,
        isWin: true,
        type: "Solo/Duo",
        time: "Há 2 dias",
        kills: 17,
        deaths: 2,
        assists: 7,
        kdaRatio: "12.00",
        kdaBadge: "MVP do Jogo",
        badgeType: "gold",
        spells: ["SummonerFlash", "SummonerCleanse"],
        items: ["3153", "3124", "6672", "3091", "3026", "3006", "3340"],
        cs: 263,
        csPerMin: "8.3",
        visionScore: 19,
        controlWards: 4,
        coachTitle: "Domínio Absoluto de Rota e Snowball",
        coachText: "Desempenho espetacular de Kalista! Conseguiu abates iniciais com o suporte jogando agressivo. Sua transição para o mid game foi perfeita, mantendo o farm alto (8.3 CS/min) e garantindo abates solo. Um verdadeiro exemplo de como carregar como atirador."
    },
    {
        id: 5,
        champ: "Zeri",
        champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Zeri.png",
        level: 18,
        isWin: true,
        type: "Solo/Duo",
        time: "Há 2 dias",
        kills: 21,
        deaths: 8,
        assists: 28,
        kdaRatio: "6.12",
        kdaBadge: "MVP da Partida",
        badgeType: "gold",
        spells: ["SummonerFlash", "SummonerHaste"],
        items: ["3087", "3031", "3085", "3072", "3036", "3006", "3340"],
        cs: 286,
        csPerMin: "8.0",
        visionScore: 28,
        controlWards: 5,
        coachTitle: "Hypercarry Zeri Ativada!",
        coachText: "Um jogo caótico com 49 participações em abates! Você soube se posicionar de forma impecável nas lutas na rota do meio, usando a parede para deslizar (E) de forma segura quando flanqueado e derretendo a equipe adversária sob o efeito da ultimate. Excelente jogo!"
    }
];

const SPELL_MAP = {
    SummonerFlash: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerFlash.png",
    SummonerDot: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerDot.png",
    SummonerHeal: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerHeal.png",
    SummonerExhaust: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerExhaust.png",
    SummonerBarrier: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerBarrier.png",
    SummonerTeleport: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerTeleport.png",
    SummonerCleanse: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerBoost.png",
    SummonerHaste: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerHaste.png"
};

const SPELL_ID_MAP = {
    1: "SummonerBoost",
    3: "SummonerExhaust",
    4: "SummonerFlash",
    6: "SummonerHaste",
    7: "SummonerHeal",
    11: "SummonerSmite",
    12: "SummonerTeleport",
    14: "SummonerDot",
    21: "SummonerBarrier"
};

const CHAMP_ID_MAP = {
    266: "Aatrox", 103: "Ahri", 84: "Akali", 166: "Akshan", 12: "Alistar", 32: "Amumu", 34: "Anivia", 1: "Annie", 523: "Aphelios", 22: "Ashe", 136: "AurelionSol", 268: "Azir", 432: "Bard", 200: "Belveth", 53: "Blitzcrank", 63: "Brand", 201: "Braum", 233: "Briar", 51: "Caitlyn", 164: "Camille", 187: "Rell", 110: "Varus", 29: "Twitch", 119: "Draven", 222: "Jinx", 145: "Kaisa", 81: "Ezreal", 360: "Samira", 236: "Lucian", 67: "Vayne", 202: "Jhin", 210: "Zeri", 429: "Kalista", 96: "KogMaw", 18: "Tristana", 498: "Xayah", 21: "MissFortune", 15: "Sivir", 412: "Thresh", 89: "Leona", 117: "Lulu", 350: "Yuumi", 43: "Karma", 111: "Nautilus", 497: "Rakan", 121: "KhaZix", 56: "Nocturne", 141: "Kayn", 238: "Zed", 120: "Hecarim", 64: "LeeSin", 13: "Ryze", 7: "LeBlanc", 157: "Yasuo", 246: "Yone", 86: "Garen", 516: "Ornn", 75: "Nasus", 58: "Renekton", 114: "Fiora", 39: "Irelia", 24: "Jax", 104: "Graves", 76: "Nidalee", 60: "Elise", 102: "Shyvana", 421: "RekSai", 254: "Vi", 62: "Wukong", 79: "Gragas", 107: "Rengar", 245: "Ekko", 203: "Kindred", 57: "Maokai", 54: "Malphite", 112: "Viktor", 134: "Syndra", 115: "Ziggs", 4: "TwistedFate", 25: "Morgana", 50: "Swain", 91: "Talon", 55: "Katarina", 82: "Mordekaiser", 875: "Sett", 235: "Senna", 147: "Seraphine", 143: "Zyra", 267: "Nami", 40: "Janna", 37: "Sona", 99: "Lux", 26: "Zilean", 20: "Nunu", 35: "Shaco", 113: "Sejuani", 33: "Rammus", 19: "Warwick", 223: "TahmKench", 14: "Sion"
};

const LEADERBOARDS_DATABASE = {
    KR: [
        { rank: 1, name: "Hide on bush", tag: "KR1", lp: "1856 LP", winrate: "61.2%", champs: ["Ryze", "LeBlanc", "Azir"] },
        { rank: 2, name: "Canyon", tag: "KR2", lp: "1720 LP", winrate: "59.8%", champs: ["LeeSin", "Graves", "Nidalee"] },
        { rank: 3, name: "Chovy", tag: "KR3", lp: "1680 LP", winrate: "60.5%", champs: ["Yone", "Yasuo", "Sett"] },
        { rank: 4, name: "ShowMaker", tag: "KR4", lp: "1610 LP", winrate: "58.7%", champs: ["Syndra", "Talon", "Ahri"] },
        { rank: 5, name: "Ruler", tag: "KR5", lp: "1590 LP", winrate: "57.9%", champs: ["Zeri", "Jinx", "Ezreal"] },
        { rank: 6, name: "Gumayusi", tag: "KR6", lp: "1550 LP", winrate: "58.1%", champs: ["Jhin", "Aphelios", "Caitlyn"] },
        { rank: 7, name: "Viper", tag: "KR7", lp: "1530 LP", winrate: "59.0%", champs: ["Kaisa", "Xayah", "Aphelios"] },
        { rank: 8, name: "Keria", tag: "KR8", lp: "1510 LP", winrate: "56.8%", champs: ["Thresh", "Bard", "Lux"] },
        { rank: 9, name: "Oner", tag: "KR9", lp: "1490 LP", winrate: "55.9%", champs: ["Sejuani", "LeeSin", "Graves"] },
        { rank: 10, name: "Zeus", tag: "KR10", lp: "1480 LP", winrate: "56.0%", champs: ["Aatrox", "Jayce", "Yone"] }
    ],
    BR: [
        { rank: 1, name: "Kókó 痛み", tag: "red", lp: "1230 LP", winrate: "56.4%", champs: ["Jinx", "Kaisa", "Ezreal"] },
        { rank: 2, name: "Cariok", tag: "BR1", lp: "1190 LP", winrate: "58.0%", champs: ["LeeSin", "Graves", "Vi"] },
        { rank: 3, name: "tinowns", tag: "BR2", lp: "1150 LP", winrate: "57.5%", champs: ["Azir", "Ahri", "Viktor"] },
        { rank: 4, name: "Route", tag: "BR3", lp: "1120 LP", winrate: "59.1%", champs: ["Aphelios", "Kalista", "Varus"] },
        { rank: 5, name: "Brance", tag: "BR4", lp: "1090 LP", winrate: "56.8%", champs: ["Zeri", "Lucian", "Samira"] },
        { rank: 6, name: "Aegis", tag: "BR5", lp: "1050 LP", winrate: "55.4%", champs: ["Wukong", "Vi", "Sejuani"] },
        { rank: 7, name: "Robo", tag: "BR6", lp: "1030 LP", winrate: "54.9%", champs: ["Renekton", "Jax", "Garen"] },
        { rank: 8, name: "Ceos", tag: "BR7", lp: "1015 LP", winrate: "55.0%", champs: ["Nautilus", "Rakan", "Lulu"] },
        { rank: 9, name: "TitaN", tag: "BR8", lp: "990 LP", winrate: "54.2%", champs: ["Jinx", "Caitlyn", "Sivir"] },
        { rank: 10, name: "shini", tag: "BR9", lp: "980 LP", winrate: "53.8%", champs: ["Shaco", "Karthus", "Graves"] }
    ],
    NA: [
        { rank: 1, name: "Doublelift", tag: "NA1", lp: "1420 LP", winrate: "58.2%", champs: ["Lucian", "Jinx", "Kaisa"] },
        { rank: 2, name: "Blaber", tag: "NA2", lp: "1380 LP", winrate: "57.9%", champs: ["LeeSin", "Graves", "Elise"] },
        { rank: 3, name: "Jojopyun", tag: "NA3", lp: "1350 LP", winrate: "58.4%", champs: ["Azir", "Ahri", "Syndra"] },
        { rank: 4, name: "Berserker", tag: "NA4", lp: "1310 LP", winrate: "59.0%", champs: ["Zeri", "Aphelios", "Kalista"] },
        { rank: 5, name: "CoreJJ", tag: "NA5", lp: "1280 LP", winrate: "56.5%", champs: ["Braum", "Rakan", "Thresh"] },
        { rank: 6, name: "Impact", tag: "NA6", lp: "1250 LP", winrate: "55.9%", champs: ["Gnar", "Renekton", "Jax"] },
        { rank: 7, name: "Spica", tag: "NA7", lp: "1220 LP", winrate: "56.0%", champs: ["Viego", "Sejuani", "Maokai"] },
        { rank: 8, name: "VicLa", tag: "NA8", lp: "1190 LP", winrate: "54.8%", champs: ["Yone", "Akali", "Syndra"] },
        { rank: 9, name: "Prince", tag: "NA9", lp: "1170 LP", winrate: "55.2%", champs: ["Aphelios", "Zeri", "Jinx"] },
        { rank: 10, name: "Busi", tag: "NA10", lp: "1150 LP", winrate: "53.9%", champs: ["Fiora", "Jax", "Aatrox"] }
    ]
};

const OTPS_DATABASE = {
    Jinx: [
        { name: "Jinx OTP KR", rank: "Challenger 1320 LP", winrate: "64.2%", games: "354 partidas", build: ["6672", "3085", "3031"], buildNames: ["Kraken", "Runaan", "Gume"] },
        { name: "Jinx God BR", rank: "Grão-Mestre 840 LP", winrate: "61.8%", games: "240 partidas", build: ["6672", "3031", "3072"], buildNames: ["Kraken", "Gume", "Sedenta"] },
        { name: "ShootFast NA", rank: "Mestre 420 LP", winrate: "58.5%", games: "189 partidas", build: ["6672", "3046", "3031"], buildNames: ["Kraken", "Dançarina", "Gume"] }
    ],
    Kaisa: [
        { name: "Kai'Sa Mono KR", rank: "Challenger 1510 LP", winrate: "63.0%", games: "412 partidas", build: ["3087", "3124", "3115"], buildNames: ["Statikk", "Guinsoo", "Nashor"] },
        { name: "VoidAdapt BR", rank: "Grão-Mestre 790 LP", winrate: "59.5%", games: "298 partidas", build: ["6672", "3124", "3115"], buildNames: ["Kraken", "Guinsoo", "Nashor"] },
        { name: "Kaisa Enjoyer NA", rank: "Mestre 310 LP", winrate: "57.8%", games: "220 partidas", build: ["6672", "3156", "3036"], buildNames: ["Kraken", "Navori", "LDR"] }
    ],
    Ezreal: [
        { name: "Q Precision KR", rank: "Challenger 1410 LP", winrate: "60.4%", games: "532 partidas", build: ["3078", "3004", "3035"], buildNames: ["Trindade", "Muramana", "Serylda"] },
        { name: "Pai do Poke BR", rank: "Grão-Mestre 910 LP", winrate: "58.2%", games: "340 partidas", build: ["3508", "3156", "3036"], buildNames: ["Essence Reaver", "Navori", "LDR"] },
        { name: "Ezreal God NA", rank: "Mestre 280 LP", winrate: "56.4%", games: "210 partidas", build: ["3078", "3004", "3053"], buildNames: ["Trindade", "Muramana", "Sterak"] }
    ],
    Samira: [
        { name: "Rata-Tat KR", rank: "Challenger 1120 LP", winrate: "62.8%", games: "284 partidas", build: ["6676", "6673", "3031"], buildNames: ["Coletor", "Arco-Escudo", "Gume"] },
        { name: "GiraGira BR", rank: "Grão-Mestre 810 LP", winrate: "60.1%", games: "205 partidas", build: ["6676", "6673", "3036"], buildNames: ["Coletor", "Arco-Escudo", "LDR"] },
        { name: "TriggerHappy NA", rank: "Mestre 380 LP", winrate: "58.0%", games: "145 partidas", build: ["6673", "3031", "3036"], buildNames: ["Arco-Escudo", "Gume", "LDR"] }
    ],
    Kalista: [
        { name: "Kalista Mono KR", rank: "Challenger 1420 LP", winrate: "65.4%", games: "310 partidas", build: ["3153", "3124", "6672"], buildNames: ["Espada do Rei", "Guinsoo", "Kraken"] },
        { name: "SaltaLança BR", rank: "Grão-Mestre 890 LP", winrate: "62.1%", games: "215 partidas", build: ["3153", "3124", "3091"], buildNames: ["Espada do Rei", "Guinsoo", "Wit's End"] }
    ],
    Zeri: [
        { name: "Zeri Spark KR", rank: "Challenger 1560 LP", winrate: "64.0%", games: "420 partidas", build: ["3087", "3031", "3085"], buildNames: ["Statikk", "Gume da Infinito", "Runaan"] },
        { name: "Zeri Mono BR", rank: "Grão-Mestre 820 LP", winrate: "61.3%", games: "278 partidas", build: ["3087", "6672", "3031"], buildNames: ["Statikk", "Kraken", "Gume da Infinito"] }
    ]
};

const MOCK_PROFILES = {
    "Kókó 痛み #red": {
        name: "Kókó 痛み",
        tag: "red",
        region: "BR",
        level: 976,
        role: "Atirador Principal (ADC)",
        icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/6700.png",
        tier: "Platina I",
        lp: 17,
        wins: 243,
        losses: 241,
        matches: RECENT_MATCHES,
        lpHistory: [10, 25, 40, 15, 30, 45, 60, 40, 55, 70, 85, 95, 15, 30, 45, 60, 45, 30, 45, 60, 75, 90, 8, 24, 10, 27, 17],
        farmDuration: [8.3, 8.0, 7.6, 6.8, 6.8],
        coachTip: "Sua **Kalista (67% WR)** e sua **Zeri (50% WR)** são ótimos campeões de hypercarry! Mantenha o foco em caitar e evite morrer antes de fechar seus itens principais de pico de poder."
    },
    "Hide on bush #KR1": {
        name: "Hide on bush",
        tag: "KR1",
        region: "KR",
        level: 852,
        role: "Mid Laner Principal",
        icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ryze.png",
        tier: "Desafiante",
        lp: 1856,
        wins: 480,
        losses: 395,
        matches: [
            {
                id: 101,
                champ: "Ryze",
                champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ryze.png",
                level: 18,
                isWin: true,
                type: "Solo/Duo",
                time: "Há 12 min",
                kills: 9,
                deaths: 1,
                assists: 14,
                kdaRatio: "23.00",
                kdaBadge: "MVP",
                badgeType: "gold",
                spells: ["SummonerFlash", "SummonerTeleport"],
                items: ["3003", "3040", "3157", "3089", "3135", "3006"],
                cs: 312,
                csPerMin: "9.2",
                visionScore: 32,
                controlWards: 6,
                coachTitle: "Controle de Wave e Macro de Alto Nível",
                coachText: "Show de macro! Você usou sua ultimate (Portal de Reinos) para rotacionar rapidamente do Mid para o Bot no tempo correto de colisão da wave, garantindo uma eliminação dupla e a primeira torre lateral. Farm impecável acima de 9 CS/min."
            },
            {
                id: 102,
                champ: "LeBlanc",
                champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/LeBlanc.png",
                level: 17,
                isWin: true,
                type: "Solo/Duo",
                time: "Há 1 hora",
                kills: 11,
                deaths: 3,
                assists: 5,
                kdaRatio: "5.33",
                kdaBadge: "Carry",
                badgeType: "blue",
                spells: ["SummonerFlash", "SummonerDot"],
                items: ["6652", "3135", "3089", "3157", "3006"],
                cs: 220,
                csPerMin: "7.8",
                visionScore: 24,
                controlWards: 4,
                coachTitle: "Flanco Explosivo e Eliminação de Alvos Prioritários",
                coachText: "Desempenho assustador de LeBlanc. Você flanqueou a Jinx inimiga no arbusto do dragão e a eliminou em menos de 0.8 segundos usando o combo com o W-Distorsão. Isso garantiu a alma do dragão para seu time de graça."
            },
            {
                id: 103,
                champ: "Azir",
                champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Azir.png",
                level: 16,
                isWin: false,
                type: "Solo/Duo",
                time: "Há 4 horas",
                kills: 4,
                deaths: 4,
                assists: 8,
                kdaRatio: "3.00",
                kdaBadge: "Consistente",
                badgeType: "none",
                spells: ["SummonerFlash", "SummonerTeleport"],
                items: ["3087", "3089", "3135", "3115", "3006"],
                cs: 254,
                csPerMin: "8.4",
                visionScore: 19,
                controlWards: 2,
                coachTitle: "Dano Massivo de Poke nas Lutas Iniciais",
                coachText: "Seu dano e farm foram ótimos, mas a linha de frente inimiga estava muito forte (Ornn + Nautilus). Sem um iniciador no seu time para segurar os all-ins deles, seu time foi forçado a recuar e ceder o Barão."
            }
        ],
        lpHistory: [1810, 1825, 1840, 1820, 1835, 1850, 1830, 1845, 1860, 1850, 1865, 1880, 1870, 1885, 1898, 1840, 1855, 1870, 1860, 1875, 1890, 1880, 1895, 1899, 1850, 1860, 1856],
        farmDuration: [8.8, 8.9, 9.1, 8.8, 8.5, 8.4, 8.2],
        coachTip: "Seu **Ryze (68%)** e sua **LeBlanc (65%)** estão destruindo as filas coreanas. O seu farm médio no late-game se mantém em incríveis 8.5 CS/min. Mantenha essa pool e você pegará Top 1 Coreia logo!"
    },
    "Doublelift #NA1": {
        name: "Doublelift",
        tag: "NA1",
        region: "NA",
        level: 542,
        role: "Atirador Principal (ADC)",
        icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Lucian.png",
        tier: "Grão-Mestre",
        lp: 1420,
        wins: 340,
        losses: 302,
        matches: [
            {
                id: 201,
                champ: "Lucian",
                champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Lucian.png",
                level: 16,
                isWin: true,
                type: "Solo/Duo",
                time: "Há 1 hora",
                kills: 14,
                deaths: 2,
                assists: 6,
                kdaRatio: "10.00",
                kdaBadge: "MVP do Lobby",
                badgeType: "gold",
                spells: ["SummonerFlash", "SummonerHeal"],
                items: ["6676", "3508", "3031", "3036", "3006"],
                cs: 250,
                csPerMin: "8.2",
                visionScore: 15,
                controlWards: 3,
                coachTitle: "Pressão de Rota Perfeita com Nami",
                coachText: "Laning phase de livro didático! Você e sua Nami abusaram da passiva e da cura para punir a Zeri inimiga toda vez que ela tentava dar o last hit. Conseguiram o First Blood aos 3 minutos e terminaram a partida em 26 minutos."
            },
            {
                id: 202,
                champ: "Jinx",
                champImg: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Jinx.png",
                level: 15,
                isWin: false,
                type: "Solo/Duo",
                time: "Há 3 horas",
                kills: 3,
                deaths: 5,
                assists: 4,
                kdaRatio: "1.40",
                kdaBadge: "Falta de Peel",
                badgeType: "none",
                spells: ["SummonerFlash", "SummonerCleanse"],
                items: ["6672", "3085", "3006", "3031"],
                cs: 232,
                csPerMin: "7.5",
                visionScore: 11,
                controlWards: 1,
                coachTitle: "Alvo Fácil de Flancos Sem Sentinelamento Principal",
                coachText: "O Nocturne inimigo ultou em você 3 vezes seguidas sem que seu time tivesse visão de onde ele estava iniciando. Sentinelas de controle nos arbustos da selva aliada teriam evitado essas mortes precoces."
            }
        ],
        lpHistory: [1380, 1395, 1410, 1390, 1405, 1420, 1400, 1415, 1430, 1420, 1435, 1450, 1440, 1455, 1468, 1410, 1425, 1440, 1430, 1445, 1460, 1450, 1465, 1470, 1415, 1430, 1420],
        farmDuration: [8.2, 8.0, 7.8, 7.5, 7.0, 6.8, 6.8],
        coachTip: "Sua mecânica de **Lucian (60%)** e **Jinx (58%)** continua afiada no topo do servidor NA. Apenas certifique-se de wardar as entradas da selva lateral no mid-game para evitar o hard engage do Nocturne."
    }
};

// Global variables to track the active selection state
let currentBuildChamp = "Jinx";
let currentBuildSource = "KR";
let currentMatrixChamp = "Jinx";

// ==========================================================================
// CHAMPION DETAILS: BUILDS, RUNES & SKILL ORDERS (DEEPLOL / CHAMPION.GG)
// ==========================================================================
const CHAMP_BUILDS_DATABASE = {
    Jinx: {
        KR: { // KR OTP (DeepLoL ITPK - Top 100 Monos Coreanos)
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal (Lethal Tempo)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Dilacerar (Cut Down)", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "W", "E"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" }
                ],
                situational: [
                    { name: "Furacão de Runaan", cost: "2800", id: "3085" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" }
                ]
            }
        },
        BR: { // BR Challenger (Top 100 SoloQ Brasil)
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Espontaneidade", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Feitiçaria",
                secondaryColor: "sorcery",
                secondarySlots: [
                    { name: "Foco Absoluto", active: true },
                    { name: "Tempestade Crescente", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "W", "E"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" }
                ],
                situational: [
                    { name: "Furacão de Runaan", cost: "2800", id: "3085" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" }
                ]
            }
        },
        NA: { // NA SoloQ Stats (Champion.gg)
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "W", "E"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Abafador de Doran", cost: "450", id: "1054" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" },
                    { name: "Dançarina Fantasma", cost: "2600", id: "3046" }
                ],
                situational: [
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" },
                    { name: "Freada de Fauces", cost: "2800", id: "3156" }
                ]
            }
        },
        synergy: [
            { name: "Thresh", winrate: "65.0%", strength: "excelent", label: "Excelente", desc: "A lanterna protege a Jinx imóvel. A sentença do Thresh alinha a mordequinha (E) da Jinx para um CC encadeado mortal." },
            { name: "Lulu", winrate: "61.2%", strength: "excelent", label: "Excelente", desc: "O escudo, o aumento de velocidade de ataque e a ultimate protetora transformam a Jinx em uma metralhadora indestrutível." },
            { name: "Leona", winrate: "53.5%", strength: "good", label: "Bom Duo", desc: "Fornece muito controle de grupo. Contudo, se a Leona forçar uma luta ruim, ela não tem como desengajar para proteger a Jinx." }
        ]
    },
    Kaisa: {
        KR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Dilacerar (Cut Down)", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Faca de Statikk", cost: "3000", id: "3087" },
                    { name: "Lâmina da Fúria de Guinsoo", cost: "3200", id: "3124" },
                    { name: "Dente de Nashor", cost: "3000", id: "3115" }
                ],
                situational: [
                    { name: "Ampulheta de Zhonya", cost: "3000", id: "3157" },
                    { name: "Capuz da Morte de Rabadon", cost: "3600", id: "3089" },
                    { name: "Cajado do Vazio", cost: "2800", id: "3135" }
                ]
            }
        },
        BR: {
            runes: {
                primary: "Dominação",
                primaryColor: "domination",
                keystone: "Chuva de Lâminas (Hail of Blades)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Domination/HailOfBlades/HailOfBlades.png",
                slots: [
                    { name: "Gosto de Sangue", active: true },
                    { name: "Globos Oculares", active: true },
                    { name: "Caçador de Tesouros", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Lâmina da Fúria de Guinsoo", cost: "3200", id: "3124" },
                    { name: "Dente de Nashor", cost: "3000", id: "3115" }
                ],
                situational: [
                    { name: "Ampulheta de Zhonya", cost: "3000", id: "3157" },
                    { name: "Sombras de Chama", cost: "3000", id: "3137" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" }
                ]
            }
        },
        NA: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Adaga Navori", cost: "3400", id: "3156" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" }
                ],
                situational: [
                    { name: "Arco-Escudo Imortal", cost: "3000", id: "6673" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" }
                ]
            }
        },
        synergy: [
            { name: "Nautilus", winrate: "59.5%", strength: "excelent", label: "Excelente", desc: "Cada controle de grupo (passiva, Q, R) do Nautilus adiciona marcas à passiva da Kai'Sa. Combate all-in perfeito." },
            { name: "Rell", winrate: "56.0%", strength: "good", label: "Bom Duo", desc: "A agrupação rápida e atordoamentos em área da Rell facilitam a ultimate explosiva da Kai'Sa." },
            { name: "Milio", winrate: "51.2%", strength: "good", label: "Bom Duo", desc: "Aumenta o alcance curto da Kai'Sa nas lutas e fornece cura constante, mas falta controle de grupo pesado." }
        ]
    },
    Ezreal: {
        KR: {
            runes: {
                primary: "Inspiração",
                primaryColor: "inspiration",
                keystone: "Primeiro Ataque (First Strike)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Inspiration/FirstStrike/FirstStrike.png",
                slots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true },
                    { name: "Perspicácia Cósmica", active: true }
                ],
                secondary: "Precisão",
                secondaryColor: "gold",
                secondarySlots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Aceleração", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+8 Aceleração Habilidade", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Força da Trindade", cost: "3333", id: "3078" },
                    { name: "Manamune", cost: "2900", id: "3004" },
                    { name: "Rancor de Serylda", cost: "3200", id: "3035" }
                ],
                situational: [
                    { name: "Espada do Rei Destruído", cost: "3200", id: "3153" },
                    { name: "Freada de Fauces", cost: "2800", id: "3156" },
                    { name: "Coração Congelado", cost: "2600", id: "3110" }
                ]
            }
        },
        BR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Pressione o Ataque (Press the Attack)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/PressTheAttack/PressTheAttack.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Perspicácia Cósmica", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+8 Aceleração Habilidade", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Colhedor de Essência", cost: "2900", id: "3508" },
                    { name: "Adaga Navori", cost: "3400", id: "3156" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" }
                ],
                situational: [
                    { name: "Espada do Rei Destruído", cost: "3200", id: "3153" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" }
                ]
            }
        },
        NA: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Conquistador (Conqueror)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/Conqueror/Conqueror.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+8 Aceleração Habilidade", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Força da Trindade", cost: "3333", id: "3078" },
                    { name: "Manamune", cost: "2900", id: "3004" },
                    { name: "Sinal de Sterak", cost: "3000", id: "3053" }
                ],
                situational: [
                    { name: "Rancor de Serylda", cost: "3200", id: "3035" },
                    { name: "Espada do Rei Destruído", cost: "3200", id: "3153" },
                    { name: "Coração Congelado", cost: "2600", id: "3110" }
                ]
            }
        },
        synergy: [
            { name: "Karma", winrate: "57.4%", strength: "excelent", label: "Excelente", desc: "A dupla de poke mais insuportável. Karma dá lentidão e velocidade de escudo, facilitando o Ezreal a acertar todos os seus Disparos Místicos (Q)." },
            { name: "Bard", winrate: "53.0%", strength: "good", label: "Bom Duo", desc: "O Ezreal consegue farmar solo de forma muito segura no bot, permitindo ao Bardo rotacionar livremente pelo mapa." },
            { name: "Yuumi", winrate: "46.2%", strength: "weak", label: "Incompatível", desc: "Fase de rotas extremamente fraca e sem pressão. Facilmente pressionados contra a própria torre por campeões de engage." }
        ]
    },
    Samira: {
        KR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Conquistador (Conqueror)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/Conqueror/Conqueror.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Último Suspiro", active: true }
                ],
                secondary: "Dominação",
                secondaryColor: "domination",
                secondarySlots: [
                    { name: "Impacto Repentino", active: true },
                    { name: "Caçador de Tesouros", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+9 Força Adaptativa", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Coletor (The Collector)", cost: "3000", id: "6676" },
                    { name: "Arco-Escudo Imortal", cost: "3000", id: "6673" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" }
                ],
                situational: [
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Dança da Morte", cost: "3200", id: "6333" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" }
                ]
            }
        },
        BR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Conquistador (Conqueror)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/Conqueror/Conqueror.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Perspicácia Cósmica", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+9 Força Adaptativa", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Coletor", cost: "3000", id: "6676" },
                    { name: "Arco-Escudo Imortal", cost: "3000", id: "6673" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" }
                ],
                situational: [
                    { name: "Gume da Infinito", cost: "3400", id: "3031" },
                    { name: "Dança da Morte", cost: "3200", id: "6333" },
                    { name: "Mandíbula de Malmortius", cost: "2800", id: "3156" }
                ]
            }
        },
        NA: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Conquistador (Conqueror)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/Conqueror/Conqueror.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Último Suspiro", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+9 Força Adaptativa", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Arco-Escudo Imortal", cost: "3000", id: "6673" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" }
                ],
                situational: [
                    { name: "Coletor", cost: "3000", id: "6676" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" }
                ]
            }
        },
        synergy: [
            { name: "Leona", winrate: "63.0%", strength: "excelent", label: "Excelente", desc: "Iniciação rápida e controle pesado sob o qual Samira pode combar. Rota altamente agressiva que decide o jogo no nível 2." },
            { name: "Alistar", winrate: "58.2%", strength: "excelent", label: "Excelente", desc: "O combo do Alistar (W+Q) ergue múltiplos inimigos, ativando instantaneamente a passiva de salto da Samira." },
            { name: "Janna", winrate: "43.5%", strength: "weak", label: "Incompatível", desc: "Janna quer afastar os inimigos (peel de desengajamento), enquanto a Samira precisa pular de cabeça no meio do time deles." }
        ]
    },
    Kalista: {
        KR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal (Lethal Tempo)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Espontaneidade", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Dominação",
                secondaryColor: "domination",
                secondarySlots: [
                    { name: "Gosto de Sangue", active: true },
                    { name: "Caçador de Tesouros", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["E", "Q", "W"],
                grid: [
                    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Espada do Rei Destruído", cost: "3200", id: "3153" },
                    { name: "Lâmina da Fúria de Guinsoo", cost: "3200", id: "3124" },
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" }
                ],
                situational: [
                    { name: "Limite da Razão", cost: "2900", id: "3091" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" },
                    { name: "Sinal de Sterak", cost: "3000", id: "3053" }
                ]
            }
        },
        BR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Dilacerar (Cut Down)", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Entrega de Biscoitos", active: true },
                    { name: "Perspicácia Cósmica", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["E", "Q", "W"],
                grid: [
                    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Espada do Rei Destruído", cost: "3200", id: "3153" },
                    { name: "Lâmina da Fúria de Guinsoo", cost: "3200", id: "3124" },
                    { name: "Limite da Razão", cost: "2900", id: "3091" }
                ],
                situational: [
                    { name: "Arco-Escudo Imortal", cost: "3000", id: "6673" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" }
                ]
            }
        },
        NA: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Pressione o Ataque (PTA)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/PressTheAttack/PressTheAttack.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Dominação",
                secondaryColor: "domination",
                secondarySlots: [
                    { name: "Caçador de Tesouros", active: true },
                    { name: "Gosto de Sangue", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["E", "Q", "W"],
                grid: [
                    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Espada do Rei Destruído", cost: "3200", id: "3153" },
                    { name: "Lâmina da Fúria de Guinsoo", cost: "3200", id: "3124" },
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" }
                ],
                situational: [
                    { name: "Anjo Guardião", cost: "3000", id: "3026" },
                    { name: "Sinal de Sterak", cost: "3000", id: "3053" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" }
                ]
            }
        },
        synergy: [
            { name: "Thresh", winrate: "64.5%", strength: "excelent", label: "Excelente", desc: "A lanterna do Thresh adiciona uma camada extra de segurança para a Kalista, e ele pode facilmente acompanhar seu engage com a Ultimate (Chamado do Destino)." },
            { name: "Nautilus", winrate: "62.0%", strength: "excelent", label: "Excelente", desc: "Controle de grupo em cadeia massivo. O ultimate da Kalista jogando o Nautilus no meio dos inimigos garante uma iniciação devastadora." },
            { name: "Lulu", winrate: "48.2%", strength: "weak", label: "Incompatível", desc: "Lulu funciona melhor com hipercarries de longo alcance de auto-ataques parados, enquanto a Kalista se move constantemente e prefere engages explosivos." }
        ]
    },
    Zeri: {
        KR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal (Lethal Tempo)",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Triunfo", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Entrega de Biscoitos", active: true },
                    { name: "Calçados Mágicos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Faca de Statikk", cost: "2900", id: "3087" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" },
                    { name: "Furacão de Runaan", cost: "2800", id: "3085" }
                ],
                situational: [
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" },
                    { name: "Arco-Escudo Imortal", cost: "3000", id: "6673" }
                ]
            }
        },
        BR: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Dilacerar", active: true }
                ],
                secondary: "Determinação",
                secondaryColor: "resolve",
                secondarySlots: [
                    { name: "Condicionamento", active: true },
                    { name: "Crescimento Excessivo", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Faca de Statikk", cost: "2900", id: "3087" },
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" }
                ],
                situational: [
                    { name: "Furacão de Runaan", cost: "2800", id: "3085" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" },
                    { name: "Sedenta por Sangue", cost: "3400", id: "3072" }
                ]
            }
        },
        NA: {
            runes: {
                primary: "Precisão",
                primaryColor: "gold",
                keystone: "Ritmo Letal",
                keystoneImg: "https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png",
                slots: [
                    { name: "Presença de Espírito", active: true },
                    { name: "Lenda: Linhagem", active: true },
                    { name: "Golpe de Misericórdia", active: true }
                ],
                secondary: "Inspiração",
                secondaryColor: "inspiration",
                secondarySlots: [
                    { name: "Calçados Mágicos", active: true },
                    { name: "Entrega de Biscoitos", active: true }
                ],
                shards: ["offense", "flex", "defense"],
                shardNames: ["+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura"]
            },
            skills: {
                maxOrder: ["Q", "E", "W"],
                grid: [
                    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1]
                ]
            },
            items: {
                starting: [
                    { name: "Lâmina de Doran", cost: "450", id: "1055" },
                    { name: "Poção de Vida", cost: "50", id: "2003" }
                ],
                core: [
                    { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                    { name: "Gume da Infinito", cost: "3400", id: "3031" },
                    { name: "Furacão de Runaan", cost: "2800", id: "3085" }
                ],
                situational: [
                    { name: "Limite da Razão", cost: "2900", id: "3091" },
                    { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                    { name: "Anjo Guardião", cost: "3000", id: "3026" }
                ]
            }
        },
        synergy: [
            { name: "Lulu", winrate: "60.4%", strength: "excelent", label: "Excelente", desc: "Aumenta a velocidade de ataque e de movimento da Zeri, permitindo um caiting extremamente veloz nas lutas de equipe." },
            { name: "Yuumi", winrate: "57.8%", strength: "excelent", label: "Excelente", desc: "Yuumi concede cura, velocidade e escudo constantes enquanto a Zeri se move agressivamente com sua mobilidade alta." },
            { name: "Nautilus", winrate: "45.1%", strength: "weak", label: "Incompatível", desc: "Nautilus quer iniciar lutas imediatas e curtas (burst), enquanto a Zeri prefere lutas estendidas de alta mobilidade e kite." }
        ]
    }
};

// ==========================================================================
// MATCHUP PERFORMANCE MATRIX DATA (YOUR WR VS ENEMY BOTLANERS)
// ==========================================================================
const MATCHUP_MATRIX = {
    Jinx: [
        { enemy: "Zeri", winrate: "68.5%", difficulty: "easy", tip: "A Zeri demora para escalar e você tem mais alcance no Q (Metralhadora/Míssil). Pressione-a na fase de rotas com disparos de lança-mísseis." },
        { enemy: "Aphelios", winrate: "64.0%", difficulty: "easy", tip: "Jogue em volta das armas dele. Desengaje quando ele estiver de Severum/Crescendum, e abuse da falta de mobilidade dele com seu W/E." },
        { enemy: "Caitlyn", winrate: "45.0%", difficulty: "hard", tip: "Ela tem mais alcance base e te pressiona embaixo da torre. Comece de Escudo de Doran, evite pisar nas armadilhas e espere ganks ou lutas de equipe." },
        { enemy: "Draven", winrate: "35.0%", difficulty: "hard", tip: "O dano dele no early game é colossal. Não troque auto-ataques 1v1. Recue e espere o suporte iniciar, ou farme seguro até fechar seu primeiro item." }
    ],
    Kaisa: [
        { enemy: "Ezreal", winrate: "61.2%", difficulty: "easy", tip: "Você pode desviar do Q dele com o E (Vel. de Movimento) ou pular com o R para trás dele, anulando o poke. Ganha fácil no all-in." },
        { enemy: "Zeri", winrate: "58.0%", difficulty: "easy", tip: "Seu isolamento com o Q nas lutas na selva é devastador contra ela. Acompanhe os engages do seu suporte e use seu R para explodi-la." },
        { enemy: "Samira", winrate: "42.0%", difficulty: "hard", tip: "A Parede de Vento (W) dela bloqueia todo o seu Q (Chuva Icathiana) e W. Espere ela gastar o W antes de usar suas habilidades principais." },
        { enemy: "Draven", winrate: "38.0%", difficulty: "hard", tip: "A pressão inicial do Draven não te deixa farmar para evoluir o Q. Jogue recuado e peça ajuda do caçador. Foque em coletar XP." }
    ],
    Ezreal: [
        { enemy: "Zeri", winrate: "59.0%", difficulty: "easy", tip: "Você consegue aplicar poke nela constantemente sem entrar no alcance dela. Use o E ofensivamente apenas se tiver visão completa do caçador inimigo." },
        { enemy: "Aphelios", winrate: "55.0%", difficulty: "easy", tip: "Sua mobilidade com o E te deixa seguro contra a ultimate do Aphelios. Mantenha o poke de longe com o Q." },
        { enemy: "Caitlyn", winrate: "48.0%", difficulty: "medium", tip: "Ela empurra a rota rapidamente. Tente manter o farm embaixo da torre e use o Q para coletar minions distantes de forma segura." },
        { enemy: "Draven", winrate: "41.0%", difficulty: "hard", tip: "Ele consegue bloquear seu caminho e punir seu E se você usar de forma errada. Mantenha distância máxima e foque no poke." }
    ],
    Samira: [
        { enemy: "Aphelios", winrate: "62.4%", difficulty: "easy", tip: "Você pode bloquear a ultimate dele e os projéteis de Calibrum com seu W. Dê all-in assim que ele gastar as armas defensivas." },
        { enemy: "Zeri", winrate: "59.0%", difficulty: "easy", tip: "Zeri tem dificuldade em lidar com engage explosivo no início. Dê engage junto com seu suporte nível 2 ou 3 para matá-la." },
        { enemy: "Caitlyn", winrate: "46.0%", difficulty: "hard", tip: "O poke dela dificulta você manter a vida alta para dar o all-in. Use o W para bloquear o Headshot dela se necessário. Farme seguro." },
        { enemy: "Draven", winrate: "35.0%", difficulty: "hard", tip: "O dano dele é maior que o seu em trocas curtas e ele cancela seu avanço (E) com o W/E dele. Evite lutar sem controle de grupo pesado do suporte." }
    ],
    Kalista: [
        { enemy: "Ezreal", winrate: "58.2%", difficulty: "easy", tip: "Você consegue desviar dos disparos de Q dele facilmente saltando na rota. Pressione o all-in assim que ele usar o E agressivamente." },
        { enemy: "Zeri", winrate: "56.0%", difficulty: "easy", tip: "Seu early game é muito mais forte. Pressione e abuse das lanças para negar o farm dela no início." },
        { enemy: "Caitlyn", winrate: "44.0%", difficulty: "hard", tip: "O maior alcance dela dificulta acumular lanças e abusar do E. Jogue recuado e aguarde iniciações do suporte." },
        { enemy: "Draven", winrate: "38.0%", difficulty: "hard", tip: "O dano de troca dele com machados é maior que o seu. Evite trocas longas sem ajuda." }
    ],
    Zeri: [
        { enemy: "Aphelios", winrate: "54.8%", difficulty: "easy", tip: "Você escala melhor no late game. Mantenha o farm e abuse das paredes com o E para surpreendê-lo." },
        { enemy: "Jinx", winrate: "52.0%", difficulty: "medium", tip: "Ambos escalam muito bem. Tente desviar do W e E da Jinx com seu E e busque lutas estendidas." },
        { enemy: "Caitlyn", winrate: "43.5%", difficulty: "hard", tip: "Pressão de alcance no início. Farme sob a torre usando seu clique com passiva carregada para garantir minions." },
        { enemy: "Draven", winrate: "40.0%", difficulty: "hard", tip: "Ele pode interromper seu avanço e te explodir. Aguarde itens de velocidade de movimento e controle de grupo aliado." }
    ]
};

// ==========================================================================
// APPLICATION INITIALIZATION & CORE FUNCTIONALITY
// ==========================================================================

// Global chart instances
let lpChart = null;
let farmChart = null;
let gpiChart = null;

// Global profile reference
let currentProfile = MOCK_PROFILES["Kókó 痛み #red"];

document.addEventListener("DOMContentLoaded", () => {
    // Render Lucide Icons
    lucide.createIcons();

    // Render components
    renderMatchHistory();
    setupTabNavigation();
    setupAccordions();
    setupBuildInspector();
    setupMatchupMatrix();
    renderCharts();
    setupUpdateSimulation();
    setupSidebarNavigation();
    setupSettingsModal();
    setupSearchForm();
    setupLeaderboardsAndOtps();
    
    // Initial best champions list update
    updateBestChampionsList(RECENT_MATCHES);
    
    // Initial build & matrix tabs update
    const initialChamps = Array.from(new Set(RECENT_MATCHES.map(m => m.champ)));
    updateBuildChampTabs(initialChamps);
    updateMatrixChampTabs(initialChamps);
    
    if (initialChamps.length > 0) {
        currentBuildChamp = initialChamps[0];
        currentMatrixChamp = initialChamps[0];
        renderChampionBuildDetails(currentBuildChamp, currentBuildSource);
        renderMatchupMatrix(currentMatrixChamp);
    }
});

// Render Match History Feed
function renderMatchHistory() {
    const feed = document.getElementById("match-feed");
    if (!feed) return;
    feed.innerHTML = "";

    RECENT_MATCHES.forEach(match => {
        const winLossClass = match.isWin ? "match-win" : "match-loss";
        const barClass = match.isWin ? "match-win-bar" : "match-loss-bar";
        const badgeMarkup = match.kdaBadge !== "none" ? `<span class="match-kda-badge badge-${match.badgeType}">${match.kdaBadge}</span>` : "";

        // Build item icons
        let itemsMarkup = "";
        for (let i = 0; i < 7; i++) {
            const itemId = match.items[i];
            if (itemId && itemId !== "3363" && itemId !== "3364") {
                itemsMarkup += `<div class="item-box" title="Item ID ${itemId}"><img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${itemId}.png" alt="item"></div>`;
            } else if (i === 6) { // Trinket slot
                const trinketId = match.items.find(id => id === "3363" || id === "3364") || "3363";
                itemsMarkup += `<div class="item-box ward-slot" title="Sentinela Alt."><img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${trinketId}.png" alt="trinket"></div>`;
            } else {
                itemsMarkup += `<div class="item-box empty-item"></div>`;
            }
        }

        const card = document.createElement("div");
        card.className = `match-card ${winLossClass}`;
        card.innerHTML = `
            <div class="${barClass}"></div>
            
            <div class="match-meta">
                <span class="match-type">${match.type}</span>
                <span class="match-time">${match.time}</span>
                <span class="match-result-text">${match.isWin ? "Vitória" : "Derrota"}</span>
            </div>

            <div class="match-champ-block">
                <div class="match-champ-img-container">
                    <img src="${match.champImg}" alt="${match.champ}" class="match-champ-icon">
                    <span class="match-champ-level">${match.level}</span>
                </div>
                <div class="match-spells">
                    <img src="${SPELL_MAP[match.spells[0]]}" class="spell-icon" title="Flash">
                    <img src="${SPELL_MAP[match.spells[1]]}" class="spell-icon" title="Spells">
                </div>
            </div>

            <div class="match-kda-block">
                <span class="match-kda-nums">${match.kills} <span class="slash">/</span> <span class="text-loss">${match.deaths}</span> <span class="slash">/</span> <span class="text-win">${match.assists}</span></span>
                <span class="match-kda-ratio">${match.kdaRatio}:1 KDA</span>
                ${badgeMarkup}
            </div>

            <div class="match-items">
                ${itemsMarkup}
            </div>

            <div class="match-stats-extra">
                <div class="stat-item-row" title="Farm">
                    <i data-lucide="leaf"></i>
                    <span><strong>${match.cs}</strong> (${match.csPerMin}/m) CS</span>
                </div>
                <div class="stat-item-row" title="Sentinelas Compradas">
                    <i data-lucide="eye"></i>
                    <span><strong>${match.visionScore}</strong> (VS) Placar</span>
                </div>
            </div>

            <button class="match-expand-btn" data-match-id="${match.id}">
                <i data-lucide="chevron-down"></i>
            </button>

            <!-- Expanded Coach Area -->
            <div class="match-coach-details" id="coach-details-${match.id}">
                <div class="coach-insight-layout">
                    <div class="coach-badge">Crítica do Coach</div>
                    <div class="coach-insight-text">
                        <h5>${match.coachTitle}</h5>
                        <p>${match.coachText}</p>
                    </div>
                </div>
            </div>
        `;
        feed.appendChild(card);
    });

    lucide.createIcons();

    // Bind Expand buttons
    const expandButtons = feed.querySelectorAll(".match-expand-btn");
    expandButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-match-id");
            const detailBox = document.getElementById(`coach-details-${id}`);
            if (detailBox) {
                const isOpen = detailBox.classList.contains("active");
                if (isOpen) {
                    detailBox.classList.remove("active");
                    btn.classList.remove("rotated");
                } else {
                    detailBox.classList.add("active");
                    btn.classList.add("rotated");
                }
            }
        });
    });
}

// Tab navigation handler
function setupTabNavigation() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            const targetId = tab.getAttribute("data-tab");
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }

            window.dispatchEvent(new Event('resize'));
        });
    });
}

// Accordions handler (Tab 3: Diagnosis)
function setupAccordions() {
    const accordions = document.querySelectorAll(".diag-accordion-item");
    
    accordions.forEach(acc => {
        const header = acc.querySelector(".diag-header");
        header.addEventListener("click", () => {
            const isActive = acc.classList.contains("active-diag");
            accordions.forEach(item => item.classList.remove("active-diag"));
            if (!isActive) {
                acc.classList.add("active-diag");
            }
        });
    });
}

// Builds & Runes Inspector Tab Logic
function setupBuildInspector() {
    const champTabs = document.querySelectorAll("#build-champ-tabs .champ-tab-btn");
    const sourceTabs = document.querySelectorAll("#build-source-tabs .source-tab-btn");

    champTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            champTabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentBuildChamp = btn.getAttribute("data-champ");
            renderChampionBuildDetails(currentBuildChamp, currentBuildSource);
        });
    });

    sourceTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            sourceTabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentBuildSource = btn.getAttribute("data-source");
            renderChampionBuildDetails(currentBuildChamp, currentBuildSource);
        });
    });

    // Load initial
    renderChampionBuildDetails(currentBuildChamp, currentBuildSource);
}

function renderChampionBuildDetails(champName, sourceName = "KR") {
    const detailsContainer = document.getElementById("build-details-container");
    const synergyContainer = document.getElementById("synergy-supports-container");
    
    if (!detailsContainer || !synergyContainer) return;

    const champData = CHAMP_BUILDS_DATABASE[champName];
    if (!champData) return;

    const data = champData[sourceName];
    if (!data) return;

    const sourceLabelMap = {
        KR: "KR OTP (DeepLoL ITPK)",
        BR: "BR Challenger (Top 100)",
        NA: "NA SoloQ (Champion.gg)"
    };
    const regionText = sourceLabelMap[sourceName];

    // 1. Runes HTML
    let runeSlotsHTML = "";
    data.runes.slots.forEach(r => {
        runeSlotsHTML += `
            <div class="rune-item-row">
                <i data-lucide="check-circle-2" class="text-gold" style="width:14px; height:14px;"></i>
                <span>${r.name}</span>
            </div>
        `;
    });
    let secRuneSlotsHTML = "";
    data.runes.secondarySlots.forEach(r => {
        secRuneSlotsHTML += `
            <div class="rune-item-row">
                <i data-lucide="check-circle-2" class="text-vision" style="width:14px; height:14px;"></i>
                <span>${r.name}</span>
            </div>
        `;
    });

    // 2. Skill Grid HTML
    const skillLetters = ["Q", "W", "E", "R"];
    let skillGridHTML = "";
    for (let r = 0; r < 4; r++) {
        let blocks = "";
        for (let lvl = 0; lvl < 18; lvl++) {
            const isActive = data.skills.grid[r][lvl] === 1;
            const activeClass = isActive ? "active-level" : "";
            const content = isActive ? (lvl + 1) : "";
            blocks += `<div class="skill-box-num ${activeClass}">${content}</div>`;
        }
        skillGridHTML += `
            <div class="skill-row-container ${skillLetters[r].toLowerCase()}-row">
                <span class="skill-letter">${skillLetters[r]}</span>
                <div class="skill-blocks">${blocks}</div>
            </div>
        `;
    }

    // 3. Items HTML
    let startingItemsHTML = "";
    data.items.starting.forEach(item => {
        startingItemsHTML += `
            <div class="stage-item-card">
                <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${item.id}.png" alt="item">
                <div class="stage-item-info">
                    <span class="stage-item-name">${item.name}</span>
                    <span class="stage-item-cost">${item.cost} Ouro</span>
                </div>
            </div>
        `;
    });

    let coreItemsHTML = "";
    data.items.core.forEach(item => {
        coreItemsHTML += `
            <div class="stage-item-card">
                <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${item.id}.png" alt="item">
                <div class="stage-item-info">
                    <span class="stage-item-name">${item.name}</span>
                    <span class="stage-item-cost">${item.cost} Ouro</span>
                </div>
            </div>
        `;
    });

    let situationalItemsHTML = "";
    data.items.situational.forEach(item => {
        situationalItemsHTML += `
            <div class="stage-item-card">
                <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${item.id}.png" alt="item">
                <div class="stage-item-info">
                    <span class="stage-item-name">${item.name}</span>
                    <span class="stage-item-cost">${item.cost} Ouro</span>
                </div>
            </div>
        `;
    });

    // Populate Master Inspector Grid
    detailsContainer.innerHTML = `
        <!-- Left: Runes & Skills -->
        <div class="card build-runes-skills-card">
            <h4 class="chart-title"><i data-lucide="shield-check"></i> Runas Recomendadas [${regionText}]</h4>
            <div class="rune-tree-wrapper">
                ${sourceName === "KR" ? `
                <div class="itpk-tooltip-box" style="grid-column: 1 / 3; background: rgba(99, 102, 241, 0.05); border: 1px solid var(--border-glow); border-radius: 6px; padding: 0.5rem 0.75rem; margin-bottom: 0.75rem; font-size: 0.78rem; display: flex; gap: 0.5rem; align-items: start;">
                    <i data-lucide="info" style="color: var(--primary); flex-shrink: 0; width: 14px; height: 14px; margin-top: 2px;"></i>
                    <span><strong>Foco ITPK (DeepLoL):</strong> Dados consolidados dos Top OTPs Monos Coreanos. Esta build prioriza as escolhas de nicho de altíssima taxa de vitória e agressividade na SoloQ da Coreia do Sul (Grão-Mestre+).</span>
                </div>
                ` : ""}
                <div class="rune-primary-column">
                    <div class="rune-tree-title">${data.runes.primary}</div>
                    <div class="rune-item-row keystone">
                        <img src="${data.runes.keystoneImg}" alt="keystone">
                        <strong>${data.runes.keystone}</strong>
                    </div>
                    ${runeSlotsHTML}
                </div>
                <div class="rune-primary-column">
                    <div class="rune-tree-title ${data.runes.secondaryColor}">${data.runes.secondary}</div>
                    ${secRuneSlotsHTML}
                </div>
                <div class="shards-row">
                    <span class="shard-item"><span class="shard-circle offense"></span> ${data.runes.shardNames[0]}</span>
                    <span class="shard-item"><span class="shard-circle flex"></span> ${data.runes.shardNames[1]}</span>
                    <span class="shard-item"><span class="shard-circle defense"></span> ${data.runes.shardNames[2]}</span>
                </div>
            </div>

            <h4 class="chart-title" style="margin-top: 1.5rem;"><i data-lucide="sparkles"></i> Ordem de Evolução de Habilidades</h4>
            <div class="skills-max-sequence" style="margin-top: 0.5rem;">
                <span class="skill-badge q">${data.skills.maxOrder[0]}</span>
                <span class="skill-arrow">&gt;</span>
                <span class="skill-badge e">${data.skills.maxOrder[1]}</span>
                <span class="skill-arrow">&gt;</span>
                <span class="skill-badge w">${data.skills.maxOrder[2]}</span>
                <span class="skill-badge" style="margin-left:auto; font-size:0.75rem; width:fit-content; padding: 0 0.5rem;">Ordem de Maximização</span>
            </div>
            
            <div class="skill-grid-display">
                ${skillGridHTML}
            </div>
        </div>

        <!-- Right: Build Path -->
        <div class="card build-items-card">
            <h4 class="chart-title"><i data-lucide="bag"></i> Caminho de Itens Recomendados [${regionText}]</h4>
            <p class="chart-desc">Focado em fechar picos de poder eficientemente.</p>
            
            <div class="item-build-paths">
                <!-- Starting -->
                <div class="item-build-stage">
                    <span class="stage-title">Itens Iniciais</span>
                    <div class="stage-items">${startingItemsHTML}</div>
                </div>
                
                <!-- Core Build -->
                <div class="item-build-stage">
                    <span class="stage-title">Núcleo da Build (Core Build)</span>
                    <div class="stage-items" style="flex-direction: column;">${coreItemsHTML}</div>
                </div>
                
                <!-- Situational -->
                <div class="item-build-stage">
                    <span class="stage-title">Itens Situacionais Comuns</span>
                    <div class="stage-items" style="flex-direction: column;">${situationalItemsHTML}</div>
                </div>
            </div>
        </div>
    `;

    // 4. Support Synergy Cards (uses champ level synergy)
    let synergyHTML = "";
    champData.synergy.forEach(sup => {
        let badgeColor = sup.strength === "excelent" ? "strength-excelent" : "strength-good";
        if (sup.strength === "weak") badgeColor = "strength-weak";

        synergyHTML += `
            <div class="synergy-support-card">
                <div class="sup-card-header">
                    <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${sup.name}.png" class="sup-card-avatar" alt="${sup.name}">
                    <div class="sup-card-meta">
                        <span class="sup-card-name">${sup.name}</span>
                        <span class="sup-card-wr">${sup.winrate} Winrate</span>
                    </div>
                    <span class="sup-card-strength ${badgeColor}" style="margin-left: auto;">${sup.label}</span>
                </div>
                <p class="sup-card-desc">${sup.desc}</p>
            </div>
        `;
    });
    synergyContainer.innerHTML = synergyHTML;

    lucide.createIcons();
}

// Matchup Matrix Tab Handling
function setupMatchupMatrix() {
    const matrixTabs = document.querySelectorAll("#matrix-champ-tabs .matrix-tab-btn");
    
    matrixTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            matrixTabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMatrixChamp = btn.getAttribute("data-matrix-champ");
            renderMatchupMatrix(currentMatrixChamp);
        });
    });

    // Load initial matrix for Jinx
    renderMatchupMatrix(currentMatrixChamp);
}

function renderMatchupMatrix(champName) {
    const tbody = document.getElementById("matrix-table-body");
    if (!tbody) return;

    const data = MATCHUP_MATRIX[champName];
    if (!data) return;

    tbody.innerHTML = "";

    const difficultyLabels = {
        easy: "Fácil",
        medium: "Médio",
        hard: "Difícil"
    };

    data.forEach(item => {
        const wrNum = parseFloat(item.winrate);
        const wrClass = wrNum >= 50 ? "text-win" : "text-loss";
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="matrix-enemy-cell">
                    <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${item.enemy}.png" class="matrix-enemy-icon" alt="${item.enemy}">
                    <span>${item.enemy}</span>
                </div>
            </td>
            <td><span class="${wrClass}" style="font-weight: 700;">${item.winrate}</span></td>
            <td><span class="matrix-difficulty-badge diff-${item.difficulty}">${difficultyLabels[item.difficulty]}</span></td>
            <td>${item.tip}</td>
        `;
        tbody.appendChild(row);
    });
}

// Bind left sidebar clicking to open build inspector
function setupSidebarNavigation() {
    const sidebarRows = document.querySelectorAll(".champ-row");
    const buildTabBtn = document.querySelector(".tab-btn[data-tab='tab-builds']");
    const champTabs = document.querySelectorAll("#build-champ-tabs .champ-tab-btn");

    sidebarRows.forEach(row => {
        row.addEventListener("click", () => {
            // Remove active classes in sidebar
            sidebarRows.forEach(r => r.classList.remove("active-champ"));
            row.classList.add("active-champ");

            const selectedChamp = row.getAttribute("data-champ-select");
            currentBuildChamp = selectedChamp;
            
            // 1. Swap active tab to builds
            if (buildTabBtn) {
                buildTabBtn.click();
            }

            // 2. Select champion inside build inspector
            champTabs.forEach(btn => {
                btn.classList.remove("active");
                if (btn.getAttribute("data-champ") === selectedChamp) {
                    btn.classList.add("active");
                }
            });

            // 3. Render
            renderChampionBuildDetails(currentBuildChamp, currentBuildSource);
        });
    });
}

// Render ApexCharts inside Tab 3: Coach
function renderCharts() {
    // LP (PDL) Progress Line Chart
    const lpOptions = {
        series: [{
            name: "PDL (SoloQ)",
            data: [15, 30, 45, 10, 25, 45, 60, 75, 90, 8, 20, 35, 55, 70, 85, 98, 12, 28, 45, 55, 30, 15, 35, 45, 65, 80, 45]
        }],
        chart: {
            type: "area",
            height: 250,
            toolbar: { show: false },
            zoom: { enabled: false },
            background: "transparent",
            foreColor: "#9CA3AF"
        },
        colors: ["#6366F1"],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 3 },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.35,
                opacityTo: 0.02,
                stops: [0, 90, 100]
            }
        },
        grid: {
            borderColor: "#263147",
            strokeDashArray: 4,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } }
        },
        xaxis: {
            categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24", "D25", "D26", "Hoje"],
            labels: { style: { fontFamily: "Inter, sans-serif" } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: {
                formatter: function (value) {
                    if (value === 0) return "Plat III";
                    if (value === 50) return "Plat II";
                    if (value === 100) return "Plat I";
                    return value + " LP";
                },
                style: { fontFamily: "Inter, sans-serif" }
            }
        },
        tooltip: {
            theme: "dark",
            x: { show: true },
            y: {
                formatter: function (val) {
                    return val + " LP";
                }
            }
        }
    };

    // CS/Min vs Match Duration Line Chart
    const farmOptions = {
        series: [
            {
                name: "Kókó 痛み (Média ADC)",
                data: [7.8, 7.6, 7.3, 6.7, 5.2, 4.8, 4.5]
            },
            {
                name: "Alvo Diamante IV+",
                data: [8.0, 8.1, 7.8, 7.5, 7.3, 7.0, 7.0]
            }
        ],
        chart: {
            type: "line",
            height: 250,
            toolbar: { show: false },
            zoom: { enabled: false },
            background: "transparent",
            foreColor: "#9CA3AF"
        },
        colors: ["#EF4444", "#10B981"],
        dataLabels: { enabled: false },
        stroke: { curve: "straight", width: [3, 2], dashArray: [0, 5] },
        grid: {
            borderColor: "#263147",
            strokeDashArray: 4
        },
        xaxis: {
            categories: ["5 min", "10 min", "15 min", "20 min", "25 min", "30 min", "35+ min"],
            labels: { style: { fontFamily: "Inter, sans-serif" } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            min: 3,
            max: 10,
            tickAmount: 7,
            labels: {
                formatter: function (val) {
                    return val.toFixed(1) + " CS/m";
                },
                style: { fontFamily: "Inter, sans-serif" }
            }
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            fontFamily: "Outfit, sans-serif",
            markers: { radius: 12 }
        },
        tooltip: {
            theme: "dark"
        }
    };

    // Render Charts
    lpChart = new ApexCharts(document.getElementById("lp-chart"), lpOptions);
    farmChart = new ApexCharts(document.getElementById("farm-chart"), farmOptions);

    const initialGpi = calculateRealGpi(RECENT_MATCHES);
    const gpiOptions = {
        series: [{
            name: "Seu Índice",
            data: initialGpi
        }],
        chart: {
            type: "radar",
            height: 250,
            toolbar: { show: false },
            background: "transparent",
            foreColor: "#9CA3AF"
        },
        colors: ["#6366F1"],
        stroke: { width: 2 },
        fill: {
            opacity: 0.2
        },
        markers: { size: 4 },
        xaxis: {
            categories: ["Farm", "Combate", "Visão", "Sobrevivência", "Consistência", "Versatilidade"],
            labels: {
                style: { fontFamily: "Outfit, sans-serif", colors: ["#9CA3AF", "#9CA3AF", "#9CA3AF", "#9CA3AF", "#9CA3AF", "#9CA3AF"] }
            }
        },
        yaxis: {
            show: false,
            min: 0,
            max: 100,
            tickAmount: 5
        },
        tooltip: {
            theme: "dark"
        }
    };
    gpiChart = new ApexCharts(document.getElementById("gpi-radar-chart"), gpiOptions);

    lpChart.render();
    farmChart.render();
    gpiChart.render();
}

// Update simulation button (API Sincronizar)
function setupUpdateSimulation() {
    const updateBtn = document.getElementById("update-btn");
    if (!updateBtn) return;

    updateBtn.addEventListener("click", () => {
        updateBtn.disabled = true;
        updateBtn.classList.add("updating");
        updateBtn.innerHTML = `<i data-lucide="refresh-cw" class="icon-spin"></i> Sincronizando...`;
        lucide.createIcons();

        const searchInput = document.getElementById("search-input");
        const query = searchInput ? searchInput.value.trim() : "Kókó 痛み#red";
        const region = document.getElementById("search-region") ? document.getElementById("search-region").value : "BR";

        handleSearch(query, region).then(() => {
            showToast("Dados atualizados com sucesso!");
        }).catch(err => {
            showToast("Erro ao sincronizar: " + err.message);
        }).finally(() => {
            updateBtn.disabled = false;
            updateBtn.classList.remove("updating");
            updateBtn.innerHTML = `<i data-lucide="refresh-cw"></i> Sincronizar API`;
            lucide.createIcons();
        });
    });
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = `<i data-lucide="check-circle" class="text-win"></i> <span>${message}</span>`;
    
    Object.assign(toast.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#151B26",
        border: "1px solid #10B981",
        color: "#F3F4F6",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontFamily: "Outfit, sans-serif",
        fontSize: "0.9rem",
        zIndex: 9999,
        animation: "slideUpToast 0.3s ease-out"
    });

    document.body.appendChild(toast);
    lucide.createIcons();

    if (!document.getElementById("toast-animation-style")) {
        const style = document.createElement("style");
        style.id = "toast-animation-style";
        style.innerHTML = `
            @keyframes slideUpToast {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        toast.style.transition = "all 0.3s ease-out";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Settings Modal Logic
function setupSettingsModal() {
    const modal = document.getElementById("api-modal");
    const openBtn = document.getElementById("api-settings-btn");
    const closeBtn = document.getElementById("api-modal-close");
    const saveBtn = document.getElementById("api-modal-save");
    const keyInput = document.getElementById("api-key-input");

    if (!modal || !openBtn || !closeBtn || !saveBtn || !keyInput) return;

    // Load saved key
    const savedKey = localStorage.getItem("riot-api-key");
    if (savedKey) {
        keyInput.value = savedKey;
    }

    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    saveBtn.addEventListener("click", () => {
        const key = keyInput.value.trim();
        if (key) {
            localStorage.setItem("riot-api-key", key);
            showToast("Chave API salva com sucesso!");
        } else {
            localStorage.removeItem("riot-api-key");
            showToast("Chave API removida.");
        }
        modal.classList.remove("active");
    });
}

// Search Form Logic
function setupSearchForm() {
    const form = document.getElementById("summoner-search-form");
    if (!form) return;

    const searchInput = document.getElementById("search-input");
    const regionSelect = document.getElementById("search-region");
    const autocompleteContainer = document.getElementById("search-autocomplete");

    if (regionSelect && searchInput) {
        const updatePlaceholder = () => {
            const region = regionSelect.value;
            searchInput.placeholder = `Nome do jogo + #${region}1`;
        };
        updatePlaceholder();
        regionSelect.addEventListener("change", updatePlaceholder);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (!searchInput || !regionSelect) return;

        let query = searchInput.value.trim();
        const region = regionSelect.value;

        if (!query) {
            showToast("Digite o Riot ID no formato Nome#TAG");
            return;
        }

        // Auto append tag if missing to avoid rejection
        if (!query.includes("#")) {
            query = `${query}#${region}1`;
            searchInput.value = query;
        }

        // Close dropdown
        if (autocompleteContainer) {
            autocompleteContainer.style.display = "none";
        }

        // Show updating status
        const submitBtn = form.querySelector("button[type='submit']");
        if (submitBtn) submitBtn.disabled = true;

        handleSearch(query, region).then(() => {
            showToast(`Perfil ${query} carregado!`);
        }).catch(err => {
            showToast(`Falha: ${err.message}`);
        }).finally(() => {
            if (submitBtn) submitBtn.disabled = false;
        });
    });

    if (searchInput && autocompleteContainer) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim();
            if (!query) {
                autocompleteContainer.style.display = "none";
                autocompleteContainer.innerHTML = "";
                return;
            }

            autocompleteContainer.innerHTML = "";

            // Find matching mock profiles
            const matches = Object.keys(MOCK_PROFILES).filter(key => 
                key.toLowerCase().includes(query.toLowerCase())
            );

            // Add matched items
            if (matches.length > 0) {
                matches.forEach(key => {
                    const profile = MOCK_PROFILES[key];
                    const item = document.createElement("div");
                    item.className = "autocomplete-item";
                    item.innerHTML = `
                        <img src="${profile.icon}" class="autocomplete-avatar" alt="Avatar">
                        <div class="autocomplete-info">
                            <span class="autocomplete-name">${profile.name} <span style="color:var(--text-muted); font-size:0.75rem;">#${profile.tag}</span></span>
                            <span class="autocomplete-meta">${profile.tier} - ${profile.lp} LP</span>
                        </div>
                        <span class="autocomplete-region">${profile.region}</span>
                    `;
                    item.addEventListener("click", () => {
                        searchInput.value = `${profile.name}#${profile.tag}`;
                        regionSelect.value = profile.region;
                        autocompleteContainer.style.display = "none";
                        form.dispatchEvent(new Event("submit"));
                    });
                    autocompleteContainer.appendChild(item);
                });
            }

            // Always add a "search new summoner" option
            const parts = query.split("#");
            const name = parts[0] ? parts[0].trim() : "";
            const tag = parts[1] ? parts[1].trim() : "";
            
            const newSummonerItem = document.createElement("div");
            newSummonerItem.className = "autocomplete-item";
            newSummonerItem.style.borderTop = "1px solid rgba(255,255,255,0.05)";
            newSummonerItem.innerHTML = `
                <div class="autocomplete-info">
                    <span class="autocomplete-name" style="color:var(--primary);"><i data-lucide="search" style="width:14px; height:14px; vertical-align:middle; margin-right:4px;"></i> Buscar invocador: <strong>${name}</strong>${tag ? ` #<strong>${tag}</strong>` : ''}</span>
                    <span class="autocomplete-meta">Gera perfil de treinamento instantâneo</span>
                </div>
                <span class="autocomplete-region">${regionSelect.value}</span>
            `;
            
            newSummonerItem.addEventListener("click", () => {
                let finalSearch = query;
                if (!tag) {
                    finalSearch = `${name}#${regionSelect.value}1`;
                }
                searchInput.value = finalSearch;
                autocompleteContainer.style.display = "none";
                form.dispatchEvent(new Event("submit"));
            });
            autocompleteContainer.appendChild(newSummonerItem);

            lucide.createIcons();
            autocompleteContainer.style.display = "block";
        });

        // Dismiss dropdown on clicking outside
        document.addEventListener("click", (e) => {
            if (!form.contains(e.target)) {
                autocompleteContainer.style.display = "none";
            }
        });

        // Show dropdown on focus if not empty
        searchInput.addEventListener("focus", () => {
            if (searchInput.value.trim()) {
                searchInput.dispatchEvent(new Event("input"));
            }
        });
    }
}

// Handle dynamic profile loading (API or procedural mock)
function handleSearch(query, region) {
    const apiKey = localStorage.getItem("riot-api-key");
    
    // Check if query exists in mock database
    const exactMockKey = Object.keys(MOCK_PROFILES).find(k => k.toLowerCase() === query.toLowerCase());
    
    if (exactMockKey) {
        currentProfile = MOCK_PROFILES[exactMockKey];
        renderProfile(currentProfile);
        return Promise.resolve(currentProfile);
    }

    // Split Name and Tag
    const parts = query.split("#");
    const name = parts[0] ? parts[0].trim() : "";
    const tag = parts[1] ? parts[1].trim() : "";

    if (!tag) {
        return Promise.reject(new Error("Formato inválido. Use Nome#TAG. Ex: Kókó 痛み#red"));
    }

    if (!apiKey) {
        // Procedural generator
        const profile = generateProceduralProfile(name, tag, region);
        currentProfile = profile;
        renderProfile(profile);
        return Promise.resolve(profile);
    }

    // Call API proxy
    return fetchRealSummonerData(name, tag, region, apiKey);
}

// Fetch summoner data from local server proxy
function fetchRealSummonerData(name, tag, region, apiKey) {
    const endpointSummoner = `/api/summoner?name=${encodeURIComponent(name)}&tag=${encodeURIComponent(tag)}&region=${region}`;
    
    return fetch(endpointSummoner, {
        headers: { "x-riot-token": apiKey }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Invocador não encontrado (${res.status})`);
        }
        return res.json();
    })
    .then(summoner => {
        const puuid = summoner.puuid;
        const summonerId = summoner.id;
        
        // Fetch League info and matches in parallel
        const endpointLeague = `/api/league?summonerId=${summonerId}&region=${region}`;
        const endpointMatches = `/api/matches?puuid=${puuid}&region=${region}`;

        const fetchLeague = fetch(endpointLeague, { headers: { "x-riot-token": apiKey } }).then(r => r.json());
        const fetchMatches = fetch(endpointMatches, { headers: { "x-riot-token": apiKey } }).then(r => r.json());

        return Promise.all([fetchLeague, fetchMatches]).then(([leagues, matchIds]) => {
            // Find Solo/Duo rank
            let soloRank = leagues.find(l => l.queueType === "RANKED_SOLO_5x5");
            let tier = soloRank ? `${soloRank.tier} ${soloRank.rank}` : "Unranked";
            let lp = soloRank ? soloRank.leaguePoints : 0;
            let wins = soloRank ? soloRank.wins : 0;
            let losses = soloRank ? soloRank.losses : 0;

            if (matchIds.error || !Array.isArray(matchIds)) {
                throw new Error("Erro ao listar histórico de partidas");
            }

            // Fetch details of last 10 matches in parallel
            const matchPromises = matchIds.slice(0, 10).map(id => {
                const endpointMatch = `/api/match?matchId=${id}&region=${region}`;
                return fetch(endpointMatch, { headers: { "x-riot-token": apiKey } })
                    .then(res => res.json())
                    .catch(() => null);
            });

            return Promise.all(matchPromises).then(matchesRaw => {
                const matchesParsed = matchesRaw
                    .filter(m => m && m.info)
                    .map(m => {
                        const participant = m.info.participants.find(p => p.puuid === puuid);
                        if (!participant) return null;

                        const champName = participant.championName;
                        const isWin = participant.win;
                        const durationMin = m.info.gameDuration / 60;
                        const totalCs = participant.totalMinionsKilled + participant.neutralMinionsKilled;
                        const csPerMin = (totalCs / durationMin).toFixed(1);

                        const items = [
                            participant.item0.toString(),
                            participant.item1.toString(),
                            participant.item2.toString(),
                            participant.item3.toString(),
                            participant.item4.toString(),
                            participant.item5.toString(),
                            participant.item6.toString()
                        ];

                        const spell1 = SPELL_ID_MAP[participant.summoner1Id] || "SummonerFlash";
                        const spell2 = SPELL_ID_MAP[participant.summoner2Id] || "SummonerHeal";
                        const kda = ((participant.kills + participant.assists) / (participant.deaths || 1)).toFixed(2);

                        const timeAgo = formatTimeAgo(m.info.gameEndTimestamp || m.info.gameCreation);

                        const matchObj = {
                            id: m.metadata.matchId,
                            champ: champName,
                            champImg: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champName}.png`,
                            level: participant.champLevel,
                            isWin: isWin,
                            type: m.info.queueId === 420 ? "Solo/Duo" : "Normal Game",
                            time: timeAgo,
                            kills: participant.kills,
                            deaths: participant.deaths,
                            assists: participant.assists,
                            kdaRatio: kda,
                            kdaBadge: kda >= 4 ? "MVP" : "none",
                            badgeType: kda >= 4 ? "gold" : "none",
                            spells: [spell1, spell2],
                            items: items,
                            cs: totalCs,
                            csPerMin: csPerMin,
                            visionScore: participant.visionScore,
                            controlWards: participant.detectorWardsPlaced || 0,
                            coachTitle: "",
                            coachText: ""
                        };
                        generateDynamicCoachInsight(matchObj);
                        return matchObj;
                    })
                    .filter(m => m !== null);

                // Build dynamic profile
                const totalGames = wins + losses;
                const winrate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(1) : "0.0";

                const lpHistory = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
                lpHistory.push(lp);

                const farmDuration = matchesParsed.slice(0, 7).map(m => parseFloat(m.csPerMin));
                while (farmDuration.length < 7) farmDuration.push(6.0);

                const profile = {
                    name: summoner.gameName,
                    tag: summoner.tagLine,
                    region: region,
                    level: summoner.summonerLevel,
                    role: "Atirador Principal (ADC)",
                    icon: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${summoner.profileIconId}.png`,
                    tier: tier,
                    lp: lp,
                    wins: wins,
                    losses: losses,
                    matches: matchesParsed,
                    lpHistory: lpHistory,
                    farmDuration: farmDuration,
                    coachTip: "Sua taxa de farm está consistente. Foque em não morrer nas lutas de dragão para manter a vantagem."
                };

                currentProfile = profile;
                renderProfile(profile);
                return profile;
            });
        });
    });
}

function formatTimeAgo(timestamp) {
    const diff = Date.now() - timestamp;
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `Há ${mins} min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `Há ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    const days = Math.floor(hours / 24);
    return `Há ${days} ${days === 1 ? 'dia' : 'dias'}`;
}

// Generate Coach insights dynamically
function generateDynamicCoachInsight(match) {
    const champName = match.champ;
    const isWin = match.isWin;
    const csPerMin = parseFloat(match.csPerMin);
    const deaths = match.deaths;
    
    let title = "";
    let text = "";
    
    const champBuildData = CHAMP_BUILDS_DATABASE[champName] ? CHAMP_BUILDS_DATABASE[champName].KR : null;
    let coreMissed = [];
    if (champBuildData && champBuildData.items && champBuildData.items.core) {
        champBuildData.items.core.forEach(coreItem => {
            if (!match.items.includes(coreItem.id)) {
                coreMissed.push(coreItem.name);
            }
        });
    }

    if (csPerMin < 6.5) {
        title = "Abandono de Farm e Perda de Waves Laterais";
        text = `Seu farm médio foi de apenas ${csPerMin} CS/min. Como atirador (${champName}), você precisa priorizar a coleta de recursos nas rotas laterais no mid-game. Evite ficar muito tempo no 'Aramzão' do mid dividindo XP.`;
        if (coreMissed.length > 0) {
            text += ` Além disso, você não fechou itens fundamentais como ${coreMissed.join(', ')} na ordem correta, atrasando seu pico de poder.`;
        }
    } else if (deaths >= 7) {
        title = "Vulnerabilidade e Posicionamento Exposto nas Lutas";
        text = `Você morreu ${deaths} vezes nesta partida. O time inimigo conseguiu te focar facilmente nas lutas de equipe. Tente esperar os cooldowns das principais ameaças (como controles de grupo e assassinos) antes de se expor para bater.`;
    } else if (coreMissed.length > 1) {
        title = "Desvio Crítico do Caminho de Itens Eficiente";
        text = `Sua build divergiu bastante do padrão recomendado para ${champName}. Você deixou de comprar itens vitais (${coreMissed.join(', ')}). Isso reduziu drasticamente sua taxa de dano por segundo nas lutas mais importantes.`;
    } else {
        if (isWin) {
            title = "Posicionamento Sólido e Excelente Execução";
            text = `Ótima partida de ${champName}! Você manteve uma boa taxa de farm (${csPerMin} CS/min) e limitou suas mortes. Seu posicionamento defensivo nas lutas de equipe garantiu a vitória para o seu time. Continue assim!`;
        } else {
            title = "Boa Performance Individual, Mas Falta de Macro";
            text = `Apesar da derrota, você jogou bem individualmente. Manteve um bom farm (${csPerMin} CS/min) e KDA. A derrota provavelmente ocorreu por decisões de macro da equipe ou lutas desfavoráveis pelo Barão/Dragão. Foque em direcionar seu time nas próximas chamadas.`;
        }
    }
    
    match.coachTitle = title;
    match.coachText = text;
}

// Render profile to all DOM parts
function renderProfile(profile) {
    // 1. Update header banner
    const profileImg = document.querySelector(".profile-avatar");
    if (profileImg) profileImg.src = profile.icon;

    const levelBadge = document.querySelector(".level-badge");
    if (levelBadge) levelBadge.textContent = profile.level;

    const nameH1 = document.querySelector(".summoner-name-row h1");
    if (nameH1) nameH1.textContent = profile.name;

    const taglineSpan = document.querySelector(".summoner-name-row .tagline");
    if (taglineSpan) taglineSpan.textContent = `#${profile.tag}`;

    const serverSpan = document.querySelector(".summoner-name-row .server-tag");
    if (serverSpan) serverSpan.textContent = profile.region;

    const roleSubtitle = document.querySelector(".role-subtitle");
    if (roleSubtitle) roleSubtitle.innerHTML = `<i data-lucide="crosshair"></i> ${profile.role}`;

    // 2. Update rank card
    const rankTier = document.querySelector(".rank-tier");
    if (rankTier) rankTier.textContent = profile.tier;

    const totalGames = profile.wins + profile.losses;
    const wr = totalGames > 0 ? ((profile.wins / totalGames) * 100).toFixed(1) : "0.0";

    const rankLp = document.querySelector(".rank-lp");
    if (rankLp) rankLp.textContent = `${profile.lp} LP / ${profile.wins}V ${profile.losses}D`;

    const wrHighlight = document.querySelector(".winrate-highlight");
    if (wrHighlight) wrHighlight.textContent = `${wr}%`;

    const shieldContainer = document.querySelector(".rank-emblem-container");
    if (shieldContainer) {
        shieldContainer.innerHTML = getRankShieldHTML(profile.tier);
    }

    // 3. Update coach tips panel
    const coachTipText = document.querySelector(".coach-banner-tip p");
    if (coachTipText && profile.coachTip) {
        coachTipText.innerHTML = profile.coachTip;
    }

    // 4. Match history
    // Replace RECENT_MATCHES globally so renderMatchHistory renders the new matches
    RECENT_MATCHES.length = 0;
    profile.matches.forEach(m => RECENT_MATCHES.push(m));
    renderMatchHistory();

    // 5. Update best champions sidebar list
    updateBestChampionsList(profile.matches);

    // Dynamic Tabs Update
    const champNames = Array.from(new Set(profile.matches.map(m => m.champ)));
    updateBuildChampTabs(champNames);
    updateMatrixChampTabs(champNames);

    // Select first champ in builds and matrix
    if (champNames.length > 0) {
        currentBuildChamp = champNames[0];
        currentMatrixChamp = champNames[0];
        renderChampionBuildDetails(currentBuildChamp, currentBuildSource);
        renderMatchupMatrix(currentMatrixChamp);
    }

    // 6. Update charts
    updateChartsData(profile);

    lucide.createIcons();
}

function calculateRealGpi(matches) {
    if (!matches || matches.length === 0) return [50, 50, 50, 50, 50, 50];
    
    let totalCsPerMin = 0;
    let totalKda = 0;
    let totalVision = 0;
    let totalDeaths = 0;
    let wins = 0;
    
    const uniqueChamps = new Set();

    matches.forEach(m => {
        totalCsPerMin += parseFloat(m.csPerMin) || 0;
        totalKda += parseFloat(m.kdaRatio) || 0;
        totalVision += m.visionScore || 0;
        totalDeaths += m.deaths;
        if (m.isWin) wins++;
        uniqueChamps.add(m.champ);
    });

    const len = matches.length;
    const farmGpi = Math.min(100, Math.max(0, Math.round((totalCsPerMin / len) * 10)));
    const combatGpi = Math.min(100, Math.max(0, Math.round((totalKda / len) * 15)));
    const visionGpi = Math.min(100, Math.max(0, Math.round((totalVision / len) * 3)));
    const survivalGpi = Math.min(100, Math.max(0, Math.round(100 - (totalDeaths / len) * 10)));
    const consistencyGpi = Math.round((wins / len) * 100);
    const versatilityGpi = Math.min(100, uniqueChamps.size * 25);

    return [farmGpi, combatGpi, visionGpi, survivalGpi, consistencyGpi, versatilityGpi];
}

function updateChartsData(profile) {
    if (lpChart) {
        lpChart.updateSeries([{
            name: "PDL (SoloQ)",
            data: profile.lpHistory || [15, 30, 45, 10, 25, 45, 60, 75, 90, 8, 20, 35, 55, 70, 85, 98, 12, 28, 45, 55, 30, 15, 35, 45, 65, 80, 45]
        }]);
    }
    if (farmChart) {
        farmChart.updateSeries([
            {
                name: `${profile.name} (Média)`,
                data: profile.farmDuration || [7.8, 7.6, 7.3, 6.7, 5.2, 4.8, 4.5]
            },
            {
                name: "Alvo Diamante IV+",
                data: [8.0, 8.1, 7.8, 7.5, 7.3, 7.0, 7.0]
            }
        ]);
    }
    
    const gpi = calculateRealGpi(profile.matches);
    if (gpiChart) {
        gpiChart.updateSeries([{
            name: "Seu Índice",
            data: gpi
        }]);
    }
    
    const explanation = document.getElementById("gpi-explanation-text");
    if (explanation) {
        let bestGpi = "";
        let worstGpi = "";
        const categories = ["Farm", "Combate", "Visão", "Sobrevivência", "Consistência", "Versatilidade"];
        let maxVal = -1;
        let minVal = 101;
        for (let i = 0; i < 6; i++) {
            if (gpi[i] > maxVal) { maxVal = gpi[i]; bestGpi = categories[i]; }
            if (gpi[i] < minVal) { minVal = gpi[i]; worstGpi = categories[i]; }
        }
        explanation.innerHTML = `Seu foco em **${bestGpi}** é o seu maior ponto forte com pontuação de **${maxVal}**. A sua maior oportunidade de melhoria é em **${worstGpi}** (pontuação: **${minVal}**), onde você está desempenhando abaixo da média dos ADCs do Diamante.`;
    }
}

function getRankShieldHTML(tier) {
    const t = (tier || "").toUpperCase();
    let label = "Un";
    let grad = "linear-gradient(135deg, #7b7b7b 0%, #d1d1d1 50%, #404040 100%)";
    let color = "#d1d1d1";
    
    if (t.includes("IRON") || t.includes("FERRO")) {
        label = "Fe";
        grad = "linear-gradient(135deg, #4b3d3d 0%, #8b7d7d 50%, #201a1a 100%)";
        color = "#8b7d7d";
    } else if (t.includes("BRONZE")) {
        label = "Br";
        grad = "linear-gradient(135deg, #8c5230 0%, #d98d57 50%, #593118 100%)";
        color = "#d98d57";
    } else if (t.includes("SILVER") || t.includes("PRATA")) {
        label = "Si";
        grad = "linear-gradient(135deg, #7d929e 0%, #bcccd4 50%, #4a5c66 100%)";
        color = "#bcccd4";
    } else if (t.includes("GOLD") || t.includes("OURO")) {
        label = "Au";
        grad = "linear-gradient(135deg, #c59b27 0%, #f9e282 50%, #87650f 100%)";
        color = "#f9e282";
    } else if (t.includes("PLATINUM") || t.includes("PLATINA")) {
        label = "Pt";
        grad = "linear-gradient(135deg, #44a5b8 0%, #a3e3ed 50%, #206b7a 100%)";
        color = "#a3e3ed";
    } else if (t.includes("EMERALD") || t.includes("ESMERALDA")) {
        label = "Em";
        grad = "linear-gradient(135deg, #2ca867 0%, #76e1a4 50%, #15663b 100%)";
        color = "#76e1a4";
    } else if (t.includes("DIAMOND") || t.includes("DIAMANTE")) {
        label = "Di";
        grad = "linear-gradient(135deg, #5b87e6 0%, #b8d2fa 50%, #345bb3 100%)";
        color = "#b8d2fa";
    } else if (t.includes("MASTER") || t.includes("MESTRE")) {
        label = "Ms";
        grad = "linear-gradient(135deg, #9d3bbf 0%, #e2a6f5 50%, #581870 100%)";
        color = "#e2a6f5";
    } else if (t.includes("GRANDMASTER") || t.includes("GRÃO")) {
        label = "Gm";
        grad = "linear-gradient(135deg, #c41c3e 0%, #f78d9b 50%, #7d0a22 100%)";
        color = "#f78d9b";
    } else if (t.includes("CHALLENGER") || t.includes("DESAFIANTE")) {
        label = "Ch";
        grad = "linear-gradient(135deg, #d48c00 0%, #ffdf7a 50%, #8c5b00 100%)";
        color = "#ffdf7a";
    }
    
    return `
        <div class="platinum-shield" style="background: ${grad}; box-shadow: 0 0 15px rgba(255,255,255,0.1);">
            <div class="shield-inner">
                <span style="font-family: var(--font-heading); font-weight: 800; font-size: 1.3rem; color: ${color}; text-shadow: 0 0 8px ${color};">${label}</span>
            </div>
        </div>
    `;
}

// Live game checking and simulator
let telemetryInterval = null;
const liveTabBtn = document.getElementById("live-match-tab-btn");

if (liveTabBtn) {
    liveTabBtn.addEventListener("click", () => {
        checkActiveGame();
    });
}

function checkActiveGame() {
    const apiKey = localStorage.getItem("riot-api-key");
    const name = currentProfile.name;
    const tag = currentProfile.tag;
    const region = currentProfile.region;
    const champ = currentProfile.matches && currentProfile.matches[0] ? currentProfile.matches[0].champ : "Jinx";
    
    if (telemetryInterval) clearInterval(telemetryInterval);
    
    const liveTimer = document.getElementById("live-game-timer");
    if (liveTimer) liveTimer.textContent = "00:00";
    
    if (!apiKey) {
        // Run simulator
        simulateLiveMatch(champ, name);
        startLiveGameTimer(champ, false, 0);
        return;
    }
    
    // Check real spectator endpoint
    const endpointSpectator = `/api/spectator?puuid=${currentProfile.puuid || "dummy"}&region=${region}`;
    
    fetch(endpointSpectator, { headers: { "x-riot-token": apiKey } })
    .then(res => {
        if (!res.ok) {
            // Player not in active game
            showToast("Invocador não está em jogo ativo. Iniciando simulação...");
            simulateLiveMatch(champ, name);
            startLiveGameTimer(champ, false, 0);
            return;
        }
        return res.json();
    })
    .then(spectatorData => {
        if (spectatorData && !spectatorData.error) {
            renderRealSpectator(spectatorData, currentProfile.puuid, region);
            startLiveGameTimer(champ, true, spectatorData.gameLength || 0);
        }
    })
    .catch(() => {
        // Fallback to simulator
        simulateLiveMatch(champ, name);
        startLiveGameTimer(champ, false, 0);
    });
}

function startLiveGameTimer(summonerChamp, isRealMatch, startSecs) {
    let elapsed = startSecs;
    const liveTimer = document.getElementById("live-game-timer");
    const livePlayerCs = document.getElementById("live-player-cs");
    const livePlayerCsMin = document.getElementById("live-player-cs-per-min");
    const liveTargetCs = document.getElementById("live-target-cs");
    const liveCsBar = document.getElementById("live-cs-progress");
    const liveFeedback = document.getElementById("live-cs-status-feedback");
    
    if (!liveTimer) return;
    
    telemetryInterval = setInterval(() => {
        elapsed++;
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        liveTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        // Dynamic CS Telemetry
        const timeFraction = elapsed / 60;
        
        // target CS is 8.0/min
        const targetCs = Math.round(8.0 * timeFraction);
        if (liveTargetCs) liveTargetCs.textContent = targetCs;
        
        // Player CS increases dynamically in simulation
        let playerCs = 0;
        if (!isRealMatch) {
            // Simulate 7.4 CS/min
            playerCs = Math.round(7.4 * timeFraction);
        } else {
            // Real spectator has active CS, let's keep it steady or increase it
            playerCs = Math.round(7.6 * timeFraction);
        }
        
        if (livePlayerCs) livePlayerCs.textContent = playerCs;
        
        const csMin = timeFraction > 0 ? (playerCs / timeFraction).toFixed(1) : "0.0";
        if (livePlayerCsMin) livePlayerCsMin.textContent = csMin;
        
        // Progress bar comparing player CS vs target CS
        const percentage = targetCs > 0 ? Math.min(100, Math.round((playerCs / targetCs) * 100)) : 100;
        if (liveCsBar) {
            liveCsBar.style.width = `${percentage}%`;
            // Change bar color according to performance
            if (percentage >= 95) {
                liveCsBar.style.background = "#10B981"; // green
            } else if (percentage >= 80) {
                liveCsBar.style.background = "#F59E0B"; // yellow/orange
            } else {
                liveCsBar.style.background = "#EF4444"; // red
            }
        }
        
        // Feedback
        if (liveFeedback) {
            if (percentage >= 95) {
                liveFeedback.innerHTML = `<span class="lolsumo-badge badge-cs">Perfeito</span> Farm excelente, você está no ritmo de carregar o jogo!`;
            } else if (percentage >= 80) {
                liveFeedback.innerHTML = `<span class="lolsumo-badge badge-aggro">Aceitável</span> Cuidado, algumas waves laterais foram perdidas. Rotacione no tempo certo!`;
            } else {
                liveFeedback.innerHTML = `<span class="lolsumo-badge badge-tilt">Perigo</span> Você está muito atrás no farm! Agrupar no mid e parar de farmar vai te custar a vitória.`;
            }
        }
    }, 1000);
}

function simulateLiveMatch(summonerChamp, selfName) {
    const blueList = document.getElementById("blue-team-players");
    const redList = document.getElementById("red-team-players");
    
    if (!blueList || !redList) return;
    
    const blueChamps = [summonerChamp, "Thresh", "Ryze", "LeeSin", "Aatrox"];
    const redChamps = ["Zeri", "Lulu", "Zed", "Hecarim", "Malphite"];
    
    const blueNames = [selfName, "OTP Thresh BR", "tinowns", "Cariok", "Robo"];
    const redNames = ["Doublelift", "CoreJJ", "ShowMaker", "Canyon", "Impact"];
    
    const ranks = ["Platina II", "Platina I", "Desafiante", "Desafiante", "Desafiante"];
    const wrs = ["52%", "58%", "57%", "56%", "54%"];
    const kdas = ["3.10", "3.40", "4.20", "3.60", "2.80"];
    
    // Render Blue Team
    blueList.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const isSelf = i === 0;
        const selfClass = isSelf ? "is-self" : "";
        const badges = isSelf 
            ? `<span class="lolsumo-badge badge-cs">Máquina de Farm</span>`
            : (i === 1 ? `<span class="lolsumo-badge badge-otp">OTP</span>` : `<span class="lolsumo-badge badge-aggro">Agressivo</span>`);
            
        const card = document.createElement("div");
        card.className = "live-player-row";
        card.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${blueChamps[i]}.png" class="live-player-champ" alt="${blueChamps[i]}">
            <div class="live-player-spells">
                <img src="${SPELL_MAP.SummonerFlash}" alt="flash">
                <img src="${i === 0 || i === 4 ? SPELL_MAP.SummonerHeal : SPELL_MAP.SummonerDot}" alt="spell">
            </div>
            <div class="live-player-name-wrapper">
                <span class="live-player-name ${selfClass}">${blueNames[i]}</span>
                <span class="live-player-rank">${ranks[i]}</span>
            </div>
            <div class="live-player-badges">${badges}</div>
            <div class="live-player-stats">
                <span class="wr">${wrs[i]} WR</span>
                <span class="kda">${kdas[i]} KDA</span>
            </div>
        `;
        blueList.appendChild(card);
    }
    
    // Render Red Team
    redList.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const badges = i === 0 
            ? `<span class="lolsumo-badge badge-cs">Máquina de Farm</span>`
            : (i === 2 ? `<span class="lolsumo-badge badge-tilt">Tiltado</span>` : `<span class="lolsumo-badge badge-aggro">Agressivo</span>`);
            
        const card = document.createElement("div");
        card.className = "live-player-row";
        card.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${redChamps[i]}.png" class="live-player-champ" alt="${redChamps[i]}">
            <div class="live-player-spells">
                <img src="${SPELL_MAP.SummonerFlash}" alt="flash">
                <img src="${i === 0 ? SPELL_MAP.SummonerBarrier : SPELL_MAP.SummonerDot}" alt="spell">
            </div>
            <div class="live-player-name-wrapper">
                <span class="live-player-name">${redNames[i]}</span>
                <span class="live-player-rank">${i === 0 ? "Grão-Mestre" : ranks[i]}</span>
            </div>
            <div class="live-player-badges">${badges}</div>
            <div class="live-player-stats">
                <span class="wr">${i === 0 ? "58%" : wrs[i]} WR</span>
                <span class="kda">${i === 0 ? "3.20" : kdas[i]} KDA</span>
            </div>
        `;
        redList.appendChild(card);
    }
}

function renderRealSpectator(spectatorData, selfPuuid, region) {
    const blueList = document.getElementById("blue-team-players");
    const redList = document.getElementById("red-team-players");
    
    if (!blueList || !redList) return;
    
    blueList.innerHTML = "";
    redList.innerHTML = "";
    
    const participants = spectatorData.participants || [];
    
    participants.forEach(p => {
        const isBlue = p.teamId === 100;
        const isSelf = p.puuid === selfPuuid;
        const selfClass = isSelf ? "is-self" : "";
        
        const champName = CHAMP_ID_MAP[p.championId] || "Jinx";
        const spell1 = SPELL_ID_MAP[p.spell1Id] || "SummonerFlash";
        const spell2 = SPELL_ID_MAP[p.spell2Id] || "SummonerHeal";
        
        // Random stats for spectator simulation
        const wr = 48 + Math.floor(Math.random() * 15);
        const kda = (2 + Math.random() * 2.5).toFixed(2);
        
        const badgeHTML = isSelf 
            ? `<span class="lolsumo-badge badge-cs">Você</span>` 
            : (wr >= 57 ? `<span class="lolsumo-badge badge-otp">OTP</span>` : `<span class="lolsumo-badge badge-aggro">Guerreiro</span>`);

        const card = document.createElement("div");
        card.className = "live-player-row";
        card.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champName}.png" class="live-player-champ" alt="${champName}">
            <div class="live-player-spells">
                <img src="${SPELL_MAP[spell1] || SPELL_MAP.SummonerFlash}" alt="spell1">
                <img src="${SPELL_MAP[spell2] || SPELL_MAP.SummonerHeal}" alt="spell2">
            </div>
            <div class="live-player-name-wrapper">
                <span class="live-player-name ${selfClass}">${p.riotIdGameName || p.summonerName}</span>
                <span class="live-player-rank">SoloQ Level ${p.summonerId ? 'GM' : 'Challenger'}</span>
            </div>
            <div class="live-player-badges">${badgeHTML}</div>
            <div class="live-player-stats">
                <span class="wr">${wr}% WR</span>
                <span class="kda">${kda} KDA</span>
            </div>
        `;
        
        if (isBlue) {
            blueList.appendChild(card);
        } else {
            redList.appendChild(card);
        }
    });
}

// Leaderboards & OTP Explorer Tab Handler
function setupLeaderboardsAndOtps() {
    const leadRegionTabs = document.querySelectorAll("#leaderboard-region-tabs .lead-tab-btn");
    const otpTabs = document.querySelectorAll("#otp-champ-tabs .otp-tab-btn");
    
    leadRegionTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            leadRegionTabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const reg = btn.getAttribute("data-lead-region");
            renderLeaderboard(reg);
        });
    });
    
    otpTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            otpTabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const champ = btn.getAttribute("data-otp-champ");
            renderOtps(champ);
        });
    });
    
    // Initial renders
    renderLeaderboard("KR");
    renderOtps("Jinx");
}

function renderLeaderboard(region) {
    const tbody = document.getElementById("leaderboard-table-body");
    if (!tbody) return;
    
    const data = LEADERBOARDS_DATABASE[region] || LEADERBOARDS_DATABASE.KR;
    tbody.innerHTML = "";
    
    data.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${p.rank}</strong></td>
            <td>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="font-weight:700;">${p.name}</span>
                    <span style="color:var(--text-muted); font-size:0.75rem;">#${p.tag}</span>
                </div>
            </td>
            <td><span class="text-gold" style="font-weight:700;">${p.lp}</span></td>
            <td>${p.winrate}</td>
            <td>
                <div style="display:flex; gap:4px;">
                    ${p.champs.map(c => `
                        <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${c}.png" 
                             style="width:20px; height:20px; border-radius:50%; border:1px solid var(--border-color);" 
                             title="${c}">
                    `).join('')}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderOtps(champName) {
    const container = document.getElementById("otp-results-container");
    if (!container) return;
    
    const data = OTPS_DATABASE[champName] || [];
    container.innerHTML = "";
    
    if (data.length === 0) {
        container.innerHTML = `<div style="padding:2rem; text-align:center; color:var(--text-muted);">Nenhum OTP listado para este campeão.</div>`;
        return;
    }
    
    data.forEach(otp => {
        const card = document.createElement("div");
        card.className = "card otp-card-item";
        
        let buildItemsHTML = "";
        otp.build.forEach((id, idx) => {
            buildItemsHTML += `
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px;">
                    <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${id}.png" 
                         style="width:28px; height:28px; border-radius:6px;" 
                         title="${otp.buildNames[idx]}">
                    <span style="font-size:0.6rem; color:var(--text-muted);">${otp.buildNames[idx]}</span>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div class="sup-card-header" style="align-items: flex-start;">
                <div class="sup-card-meta">
                    <span class="sup-card-name" style="font-size:1rem; font-weight:700;">${otp.name}</span>
                    <span class="otp-rank-badge" style="background:rgba(99, 102, 241, 0.1); color:var(--primary); font-size:0.75rem; padding:0.1rem 0.4rem; border-radius:4px; margin-top:4px; display:inline-block; font-weight:600;">${otp.rank}</span>
                </div>
                <div style="text-align:right; margin-left:auto;">
                    <span style="font-size:1.1rem; font-weight:800; color:var(--win-color); block;">${otp.winrate}</span>
                    <span style="font-size:0.7rem; color:var(--text-muted); block;">${otp.games}</span>
                </div>
            </div>
            
            <div style="margin-top:1rem; border-top:1px solid var(--border-color); padding-top:0.75rem;">
                <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; font-weight:700; display:block; margin-bottom:0.5rem;">Build Preferida</span>
                <div style="display:flex; gap:0.5rem;">
                    ${buildItemsHTML}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Added helper functions
function updateBestChampionsList(matches) {
    const listContainer = document.querySelector(".champion-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    // Group matches by champion
    const champStats = {};
    matches.forEach(match => {
        const champ = match.champ;
        if (!champStats[champ]) {
            champStats[champ] = {
                name: champ,
                icon: match.champImg || `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champ}.png`,
                games: 0,
                wins: 0,
                kills: 0,
                deaths: 0,
                assists: 0
            };
        }
        const stats = champStats[champ];
        stats.games++;
        if (match.isWin) stats.wins++;
        stats.kills += match.kills;
        stats.deaths += match.deaths;
        stats.assists += match.assists;
    });

    // Convert to array and sort by games desc, then winrate desc
    const sortedChamps = Object.values(champStats).sort((a, b) => {
        if (b.games !== a.games) return b.games - a.games;
        const wrA = a.wins / a.games;
        const wrB = b.wins / b.games;
        return wrB - wrA;
    });

    sortedChamps.forEach((champ, idx) => {
        const winrate = ((champ.wins / champ.games) * 100).toFixed(0);
        const kdaVal = ((champ.kills + champ.assists) / Math.max(1, champ.deaths)).toFixed(2);
        
        const row = document.createElement("div");
        row.className = `champ-row ${idx === 0 ? 'active-champ' : ''}`;
        row.setAttribute("data-champ-select", champ.name);
        
        const winRateClass = parseFloat(winrate) >= 55 ? "text-win" : (parseFloat(winrate) < 48 ? "text-loss" : "");
        
        row.innerHTML = `
            <img src="${champ.icon}" alt="${champ.name}" class="champ-icon">
            <div class="champ-info">
                <span class="champ-name">${champ.name}</span>
                <span class="champ-games">${champ.games} ${champ.games === 1 ? 'Jogo' : 'Jogos'}</span>
            </div>
            <div class="champ-stats">
                <span class="champ-winrate ${winRateClass}">${winrate}% WR</span>
                <span class="champ-kda">${kdaVal} KDA</span>
            </div>
        `;
        listContainer.appendChild(row);
    });

    // Rebind clicking events
    setupSidebarNavigation();
}

function updateBuildChampTabs(champNames) {
    const container = document.getElementById("build-champ-tabs");
    if (!container) return;
    container.innerHTML = "";
    
    champNames.forEach((champ, idx) => {
        const btn = document.createElement("button");
        btn.className = `champ-tab-btn ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute("data-champ", champ);
        btn.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champ}.png" alt="${champ}"> ${champ}
        `;
        container.appendChild(btn);
    });
    
    // Re-bind build inspector selectors
    setupBuildInspector();
}

function updateMatrixChampTabs(champNames) {
    const container = document.getElementById("matrix-champ-tabs");
    if (!container) return;
    container.innerHTML = "";
    
    champNames.forEach((champ, idx) => {
        const btn = document.createElement("button");
        btn.className = `matrix-tab-btn ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute("data-matrix-champ", champ);
        btn.textContent = champ;
        container.appendChild(btn);
    });
    
    // Re-bind matchup matrix selectors
    setupMatchupMatrix();
}

function generateProceduralProfile(name, tag, region) {
    const champs = ["Kalista", "Zeri", "Jinx", "Kaisa", "Ezreal", "Samira"];
    
    // Generate 5 random matches
    const matches = [];
    for (let i = 1; i <= 5; i++) {
        const champ = champs[Math.floor(Math.random() * champs.length)];
        const isWin = Math.random() > 0.45;
        const kills = Math.floor(Math.random() * 12) + 2;
        const deaths = Math.floor(Math.random() * 8) + 1;
        const assists = Math.floor(Math.random() * 15) + 3;
        const kda = ((kills + assists) / deaths).toFixed(2);
        
        matches.push({
            id: 200 + i,
            champ: champ,
            champImg: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champ}.png`,
            level: Math.floor(Math.random() * 5) + 13,
            isWin: isWin,
            type: "Solo/Duo",
            time: `Há ${i} ${i === 1 ? 'dia' : 'dias'}`,
            kills: kills,
            deaths: deaths,
            assists: assists,
            kdaRatio: kda,
            kdaBadge: isWin ? (kda > 4 ? "MVP do Jogo" : "Ótimo KDA") : "Derrota Honrada",
            badgeType: isWin ? (kda > 4 ? "gold" : "blue") : "none",
            spells: ["SummonerFlash", "SummonerHaste"],
            items: ["3153", "6672", "3124", "3006", "3085", "3036", "3340"],
            cs: Math.floor(Math.random() * 100) + 180,
            csPerMin: (6.5 + Math.random() * 2).toFixed(1),
            visionScore: Math.floor(Math.random() * 15) + 8,
            controlWards: Math.floor(Math.random() * 4),
            coachTitle: "Feedback Procedural",
            coachText: `Partida de ${champ}. Posicionamento geral aceitável, mas há espaço para otimizar suas rotas de farm no mid-game e evitar ser pego nas transições.`
        });
    }

    const tiers = ["Ferro I", "Bronze II", "Prata III", "Ouro I", "Platina II", "Esmeralda III", "Diamante IV", "Mestre"];
    const tier = tiers[Math.floor(Math.random() * tiers.length)];
    
    return {
        name: name,
        tag: tag,
        region: region,
        level: Math.floor(Math.random() * 500) + 30,
        role: "Atirador Principal (ADC)",
        icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/" + (Math.floor(Math.random() * 20) + 1) + ".png",
        tier: tier,
        lp: Math.floor(Math.random() * 100),
        wins: Math.floor(Math.random() * 120) + 80,
        losses: Math.floor(Math.random() * 120) + 80,
        matches: matches,
        lpHistory: Array.from({length: 15}, () => Math.floor(Math.random() * 100)),
        farmDuration: Array.from({length: 5}, () => parseFloat((6.5 + Math.random() * 2.2).toFixed(1))),
        coachTip: `Perfil gerado proceduralmente para <strong>${name}#${tag}</strong> no servidor <strong>${region}</strong>. Foco em melhorar a consistência de abates e diminuir as mortes desnecessárias nas lutas de dragão.`
    };
}


