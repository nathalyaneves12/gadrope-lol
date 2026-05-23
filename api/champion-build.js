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

function getOpggChampSlug(name) {
    let slug = name.toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric (spaces, apostrophes)
    if (slug === 'monkeyking') slug = 'wukong';
    return slug;
}

const STYLE_COLOR_MAP = {
    'precision': 'gold',
    'precisao': 'gold',
    'domination': 'domination',
    'dominacao': 'domination',
    'sorcery': 'sorcery',
    'feiticaria': 'sorcery',
    'resolve': 'resolve',
    'determinacao': 'resolve',
    'inspiration': 'inspiration',
    'inspiracao': 'inspiration'
};

const STYLE_NAME_MAP = {
    'Precision': 'Precisão',
    'Domination': 'Dominação',
    'Sorcery': 'Feitiçaria',
    'Resolve': 'Determinação',
    'Inspiration': 'Inspiração'
};

const ITEM_COST_MAP = {
    "1055": 450, "1056": 400, "1054": 450, "2003": 50,
    "3850": 400, "3854": 400, "3858": 400, "3862": 400, "1086": 450,
    "3006": 1100, "3047": 1100, "3111": 1100, "3158": 900, "3009": 900, "3020": 1100, "3117": 1000,
    "6672": 3000, "3031": 3400, "3046": 3000, "3085": 2800, "3036": 3000, "3072": 3400, "3094": 3000,
    "6675": 3200, "6673": 3000, "3508": 3200, "3153": 3200, "6676": 3400, "3026": 3200, "3814": 2900,
    "3156": 3100, "6333": 3100, "3074": 3300, "3071": 3100, "3053": 3000, "6692": 2900, "6698": 3100,
    "6694": 3200, "6695": 3000, "3142": 2700, "6696": 2800, "6701": 3100
};

module.exports = async (req, res) => {
    if (handleCors(req, res)) return;

    const champion = req.query.champion || 'Jinx';
    const source = (req.query.source || 'KR').toUpperCase();

    // Map source to region query parameter
    let region = 'kr';
    if (source === 'BR') region = 'br';
    if (source === 'NA') region = 'na';

    const slug = getOpggChampSlug(champion);
    const opggUrl = `https://www.op.gg/lol/champions/${slug}/build?region=${region}`;

    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    };

    try {
        const { res: response, url: finalUrl } = await fetchWithRedirect(opggUrl, options);
        
        if (response.statusCode === 404) {
            return res.status(404).json({ error: `Campeão ${champion} não encontrado no OP.GG` });
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

        // Extract Next.js RSC chunks
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

        // Runes Parsing
        const primaryStyleMatch = rscText.match(/"primary_perk_style":\{"id":\d+,"name":"([^"]+)"/);
        const secondaryStyleMatch = rscText.match(/"perk_sub_style":\{"id":\d+,"name":"([^"]+)"/);
        const keystoneMatch = rscText.match(/"primary_rune":\{"id":\d+,"name":"([^"]+)","image_url":"([^"]+)"/);

        const primaryNameRaw = primaryStyleMatch ? primaryStyleMatch[1] : 'Precision';
        const secondaryNameRaw = secondaryStyleMatch ? secondaryStyleMatch[1] : 'Inspiration';

        const primary = STYLE_NAME_MAP[primaryNameRaw] || primaryNameRaw;
        const primaryColor = STYLE_COLOR_MAP[primaryNameRaw.toLowerCase()] || 'gold';
        const secondary = STYLE_NAME_MAP[secondaryNameRaw] || secondaryNameRaw;
        const secondaryColor = STYLE_COLOR_MAP[secondaryNameRaw.toLowerCase()] || 'inspiration';

        const keystone = keystoneMatch ? keystoneMatch[1] : 'Ritmo Letal';
        const keystoneImg = keystoneMatch ? keystoneMatch[2] : 'https://raw.githubusercontent.com/Marv1n4/lol-runes/main/Precision/LethalTempo/LethalTempo.png';

        // Active runes
        const activeRuneRegex = /\{"id":(\d+),"name":"([^"]+)","image_url":"([^"]+)","isActive":true/g;
        let runeMatch;
        const activeRunesRaw = [];
        while ((runeMatch = activeRuneRegex.exec(rscText)) !== null) {
            activeRunesRaw.push({ id: runeMatch[1], name: runeMatch[2], img: runeMatch[3] });
        }

        // Separate active runes into primary slots and secondary slots based on index/heuristics
        // Generally, the primary tree has 3 active runes, secondary has 2, then shards are 3
        const slots = [];
        const secondarySlots = [];
        const shards = [];
        const shardNames = [];

        // Distribute runes
        activeRunesRaw.forEach((rune, index) => {
            // First 3 are typically primary tree slots (after keystone)
            if (index < 3) {
                slots.push({ name: rune.name, active: true });
            } else if (index < 5) {
                secondarySlots.push({ name: rune.name, active: true });
            } else {
                shards.push("offense"); // dummy shard key
                shardNames.push(rune.name);
            }
        });

        // Fallbacks for slots
        if (slots.length === 0) {
            slots.push({ name: 'Presença de Espírito', active: true }, { name: 'Lenda: Linhagem', active: true }, { name: 'Dilacerar', active: true });
        }
        if (secondarySlots.length === 0) {
            secondarySlots.push({ name: 'Calçados Mágicos', active: true }, { name: 'Entrega de Biscoitos', active: true });
        }
        if (shardNames.length === 0) {
            shardNames.push("+10% Vel. Ataque", "+9 Força Adaptativa", "+6 Armadura");
        }

        // Items parsing helper
        function extractItemsForRow(rowKey) {
            const idx = rscText.indexOf(rowKey);
            if (idx === -1) return [];
            const sub = rscText.substring(idx, idx + 2000);
            const itemRegex = /"metaType":"item","metaId":(\d+),"children":\[.*?,"alt":"([^"]+)"/g;
            const itemsList = [];
            let itemMatch;
            while ((itemMatch = itemRegex.exec(sub)) !== null) {
                // Map item details
                const id = itemMatch[1];
                const name = itemMatch[2];
                let cost = ITEM_COST_MAP[id];
                if (!cost) {
                    if (id.startsWith('1')) cost = 450;
                    else if (id.startsWith('300') || id.startsWith('304') || id.startsWith('311')) cost = 1100;
                    else if (id === '2003') cost = 50;
                    else cost = 3000;
                }
                itemsList.push({ name, cost: cost.toString(), id });
            }
            return itemsList;
        }

        const starting = extractItemsForRow('starter_items_0');
        let core = extractItemsForRow('core_builds_0');
        if (core.length === 0) {
            core = extractItemsForRow('core_items_0');
        }
        const boots = extractItemsForRow('boots_0');

        // Let's create final item slots
        // Starting items: starting
        // Core items: core + boots
        // Situational items: let's fetch last_items_0 or provide some nice defaults
        let situational = extractItemsForRow('last_items_0');
        if (situational.length === 0) {
            situational = extractItemsForRow('last_items_1');
        }
        if (situational.length === 0) {
            // fallback generic items based on champion
            situational = [
                { name: "Sedenta por Sangue", cost: "3400", id: "3072" },
                { name: "Lembranças do Lorde Dominik", cost: "3000", id: "3036" },
                { name: "Anjo Guardião", cost: "3000", id: "3026" }
            ];
        }

        if (starting.length === 0) {
            starting.push(
                { name: "Lâmina de Doran", cost: "450", id: "1055" },
                { name: "Poção de Vida", cost: "50", id: "2003" }
            );
        }
        if (core.length === 0) {
            core.push(
                { name: "Mata-Cráquens", cost: "3000", id: "6672" },
                { name: "Gume da Infinito", cost: "3400", id: "3031" }
            );
        }
        if (boots.length > 0) {
            // Add boots to the core list at the beginning or end if not already there
            core.unshift(boots[0]);
        } else {
            core.unshift({ name: "Grevas do Berserker", cost: "1100", id: "3006" });
        }

        // Skills parsing from HTML
        const tableMatch = html.match(/<caption>SkillOrder Table<\/caption>([\s\S]*?)<\/table>/);
        const grid = [
            Array(18).fill(0),
            Array(18).fill(0),
            Array(18).fill(0),
            Array(18).fill(0)
        ];
        const skillMap = { 'Q': 0, 'W': 1, 'E': 2, 'R': 3 };
        let maxOrder = ["Q", "W", "E"];

        if (tableMatch) {
            const tableHtml = tableMatch[1];
            
            const maxOrderMatch = tableHtml.match(/<strong[^>]*class="[^"]*absolute[^"]*bottom-0[^"]*">([QWER])<\/strong>/g);
            if (maxOrderMatch) {
                maxOrder = maxOrderMatch.map(s => s.match(/>([QWER])<\/strong>/)[1]);
            }
            
            const progressionMatch = tableHtml.match(/<strong[^>]*class="[^"]*inline-flex[^"]*h-\[18px\][^"]*">([QWER])<\/strong>/g);
            if (progressionMatch) {
                const levelSkills = progressionMatch.map(s => s.match(/>([QWER])<\/strong>/)[1]);
                for (let lvl = 0; lvl < 18; lvl++) {
                    const skill = levelSkills[lvl];
                    const idx = skillMap[skill];
                    if (idx !== undefined) {
                        grid[idx][lvl] = 1;
                    }
                }
            } else {
                // Procedural grid generator based on maxOrder
                const fallbackOrder = [
                    maxOrder[0] || 'Q',
                    maxOrder[1] || 'W',
                    maxOrder[2] || 'E'
                ];
                // levels: 1-18
                let lvlCounts = { 'Q': 0, 'W': 0, 'E': 0, 'R': 0 };
                for (let lvl = 0; lvl < 18; lvl++) {
                    let skillToLevel = 'Q';
                    if (lvl === 5 || lvl === 10 || lvl === 15) {
                        skillToLevel = 'R';
                    } else {
                        // Level up priority: max first, then second, then third
                        if (lvlCounts[fallbackOrder[0]] < 5) {
                            skillToLevel = fallbackOrder[0];
                        } else if (lvlCounts[fallbackOrder[1]] < 5) {
                            skillToLevel = fallbackOrder[1];
                        } else {
                            skillToLevel = fallbackOrder[2];
                        }
                    }
                    lvlCounts[skillToLevel]++;
                    const idx = skillMap[skillToLevel];
                    grid[idx][lvl] = 1;
                }
            }
        } else {
            // Procedural grid generator if no table found
            for (let lvl = 0; lvl < 18; lvl++) {
                let skillToLevel = 'Q';
                if (lvl === 5 || lvl === 10 || lvl === 15) skillToLevel = 'R';
                else if (lvl < 9) {
                    if (lvl % 2 === 0) skillToLevel = 'Q';
                    else skillToLevel = 'W';
                } else {
                    if (lvl % 2 === 0) skillToLevel = 'W';
                    else skillToLevel = 'E';
                }
                const idx = skillMap[skillToLevel];
                grid[idx][lvl] = 1;
            }
        }

        const buildData = {
            runes: {
                primary,
                primaryColor,
                keystone,
                keystoneImg,
                slots,
                secondary,
                secondaryColor,
                secondarySlots,
                shards: ["offense", "flex", "defense"],
                shardNames
            },
            skills: {
                maxOrder,
                grid
            },
            items: {
                starting,
                core,
                situational
            }
        };

        res.status(200).json(buildData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
