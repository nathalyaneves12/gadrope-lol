const https = require('https');
const fs = require('fs');

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

const slug = 'jinx';
const region = 'kr';
const opggUrl = `https://www.op.gg/lol/champions/${slug}/build?region=${region}`;
const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
    }
};

fetchWithRedirect(opggUrl, options).then(async ({ res: response, url: finalUrl }) => {
    let html = '';
    response.on('data', (chunk) => {
        html += chunk;
    });
    response.on('end', () => {
        console.log('HTML length fetched:', html.length);
        
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
        console.log('RSC text length:', rscText.length);

        // Runes parsing
        const primaryStyleMatch = rscText.match(/"primary_perk_style":\{"id":\d+,"name":"([^"]+)"/);
        const secondaryStyleMatch = rscText.match(/"perk_sub_style":\{"id":\d+,"name":"([^"]+)"/);
        const keystoneMatch = rscText.match(/"primary_rune":\{"id":\d+,"name":"([^"]+)","image_url":"([^"]+)"/);
        
        console.log('Primary Tree:', primaryStyleMatch ? primaryStyleMatch[1] : 'Not found');
        console.log('Secondary Tree:', secondaryStyleMatch ? secondaryStyleMatch[1] : 'Not found');
        console.log('Keystone:', keystoneMatch ? keystoneMatch[1] : 'Not found');

        // Active runes
        const activeRuneRegex = /\{"id":(\d+),"name":"([^"]+)","image_url":"([^"]+)","isActive":true/g;
        let runeMatch;
        let activeRunes = [];
        while ((runeMatch = activeRuneRegex.exec(rscText)) !== null) {
            activeRunes.push({ id: runeMatch[1], name: runeMatch[2], img: runeMatch[3] });
        }
        console.log('Active Runes:', activeRunes);

        // Item parsing helper
        function extractItemsForRow(rowKey) {
            const idx = rscText.indexOf(rowKey);
            if (idx === -1) return [];
            const sub = rscText.substring(idx, idx + 2000);
            const itemRegex = /"metaType":"item","metaId":(\d+),"children":\[.*?,"alt":"([^"]+)"/g;
            const items = [];
            let itemMatch;
            while ((itemMatch = itemRegex.exec(sub)) !== null) {
                items.push({ id: itemMatch[1], name: itemMatch[2] });
            }
            return items;
        }

        const starting = extractItemsForRow('starter_items_0');
        let core = extractItemsForRow('core_builds_0');
        if (core.length === 0) {
            core = extractItemsForRow('core_items_0');
        }
        const boots = extractItemsForRow('boots_0');

        console.log('Starter:', starting);
        console.log('Core:', core);
        console.log('Boots:', boots);

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
            
            // Fix: parse maxOrder using absolute bottom-0 right-0 class
            const maxOrderMatch = tableHtml.match(/<strong[^>]*class="[^"]*absolute[^"]*bottom-0[^"]*">([QWER])<\/strong>/g);
            if (maxOrderMatch) {
                maxOrder = maxOrderMatch.map(s => s.match(/>([QWER])<\/strong>/)[1]);
            }
            
            // Fix: parse progression using inline-flex h- or similar class
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
            }
        }

        console.log('Max Order:', maxOrder);
        console.log('Skills Q:', grid[0].join(','));
        console.log('Skills W:', grid[1].join(','));
        console.log('Skills E:', grid[2].join(','));
        console.log('Skills R:', grid[3].join(','));
    });
}).catch(err => {
    console.error('Fetch error:', err);
});
