const fs = require('fs');

try {
    const text = fs.readFileSync('scratch/rsc_leaderboard.txt', 'utf8');
    const allObjKeys = new Set();
    const keyRegex = /"([a-zA-Z0-9_]+)":/g;
    let match;
    while ((match = keyRegex.exec(text)) !== null) {
        allObjKeys.add(match[1]);
    }
    console.log("All unique keys in RSC:", Array.from(allObjKeys).sort().join(', '));
} catch(e) {
    console.error(e);
}
