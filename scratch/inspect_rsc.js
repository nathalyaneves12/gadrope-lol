const fs = require('fs');

try {
    const text = fs.readFileSync('scratch/rsc_leaderboard.txt', 'utf8');
    console.log("RSC text read successfully. Length:", text.length);
    
    // Check for some keywords
    const keywords = ['gameName', 'tagLine', 'tier', 'summoner', 'winRate', 'mostPlayed', 'playStyle', 'ranking', 'ladder', 'points', 'win_rate'];
    keywords.forEach(kw => {
        const idx = text.indexOf('"' + kw + '"');
        const idxNoQuote = text.indexOf(kw);
        console.log(`Keyword "${kw}": with quotes index = ${idx}, without quotes index = ${idxNoQuote}`);
    });

    // Let's print some JSON-like blocks or double quote snippets
    // Find where the first array or object appears
    const match = text.match(/\{"[a-zA-Z0-9_]+":/g);
    console.log("JSON object keys matched count:", match ? match.length : 0);
    if (match) {
        console.log("Some key matches:", match.slice(0, 10));
    }
} catch(e) {
    console.error(e);
}
