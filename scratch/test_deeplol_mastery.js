const https = require('https');

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
            }
        };
        https.get(url, options, (res) => {
            console.log("Status Code:", res.statusCode);
            console.log("Headers:", res.headers);
            let html = '';
            res.on('data', chunk => {
                html += chunk;
                if (html.length > 1000000) {
                    res.destroy();
                    resolve(html);
                }
            });
            res.on('end', () => resolve(html));
        }).on('error', reject);
    });
}

async function run() {
    try {
        const html = await fetchHtml('https://www.deeplol.gg/mastery');
        console.log("HTML Length:", html.length);
        if (html.length > 500) {
            console.log("HTML Snippet (first 500 chars):", html.substring(0, 500));
            console.log("HTML Snippet (last 500 chars):", html.substring(html.length - 500));
        }
    } catch(e) {
        console.error(e);
    }
}

run();
