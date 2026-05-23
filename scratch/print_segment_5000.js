const fs = require('fs');

try {
    const text = fs.readFileSync('scratch/rsc_leaderboard.txt', 'utf8');
    const startIdx = 4500;
    const length = 4000;
    console.log("=== RSC SEGMENT (4500 to 8500) ===");
    console.log(text.substring(startIdx, startIdx + length));
} catch(e) {
    console.error(e);
}
