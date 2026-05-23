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
                console.log("Redirecting to:", redirectUrl);
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
        console.log("Fetching:", url);
        const { res, finalUrl } = await fetchWithRedirect(url, options);
        console.log("Final Status Code:", res.statusCode);
        console.log("Final URL:", finalUrl);
        let html = '';
        res.on('data', chunk => html += chunk);
        res.on('end', () => {
            console.log("HTML Length:", html.length);
            if (html.length > 500) {
                console.log("Snippet:", html.substring(0, 1000));
            }
        });
    } catch(e) {
        console.error(e);
    }
}

run();
