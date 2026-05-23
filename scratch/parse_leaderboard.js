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

async function run() {
    try {
        const url = 'https://www.op.gg/lol/leaderboards/champions/jinx';
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        };
        const { res } = await fetchWithRedirect(url, options);
        let html = '';
        res.on('data', chunk => html += chunk);
        res.on('end', () => {
            console.log("HTML downloaded successfully. Size:", html.length);
            
            // Extract next.js data chunks
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
            
            console.log("RSC Text length:", rscText.length);
            fs.writeFileSync('scratch/rsc_leaderboard.txt', rscText);
            
            // Search for some potential strings
            // We want to see if player names or tags appear
            const idx = rscText.indexOf('"ranking"');
            if (idx !== -1) {
                console.log("Found 'ranking' keyword at index:", idx);
                console.log("RSC segment around 'ranking':", rscText.substring(idx - 100, idx + 500));
            } else {
                console.log("'ranking' keyword not found.");
            }
        });
    } catch(e) {
        console.error(e);
    }
}

run();
