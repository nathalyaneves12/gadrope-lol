const fs = require('fs');

try {
    const text = fs.readFileSync('scratch/rsc_leaderboard.txt', 'utf8');
    const startIdx = Math.max(0, 85000);
    const length = 4000;
    console.log("=== RSC SEGMENT (85000 to 89000) ===");
    console.log(text.substring(startIdx, startIdx + length));
} catch(e) {
    console.error(e);
}
