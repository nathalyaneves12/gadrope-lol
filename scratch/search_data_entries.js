const fs = require('fs');

try {
    const text = fs.readFileSync('scratch/rsc_leaderboard.txt', 'utf8');
    
    function searchAll(pattern) {
        let indices = [];
        let idx = text.indexOf(pattern);
        while (idx !== -1) {
            indices.push(idx);
            idx = text.indexOf(pattern, idx + 1);
        }
        return indices;
    }

    console.log("Occurrences of '\"win_rate\"':", searchAll('"win_rate"'));
    console.log("Occurrences of '\"win_ratio\"':", searchAll('"win_ratio"'));
    console.log("Occurrences of '\"lp\"':", searchAll('"lp"'));
    
    // Print around the first occurrence of "win_ratio" if any, or subsequent "win_rate"
    const winRatioIndices = searchAll('"win_ratio"');
    if (winRatioIndices.length > 0) {
        console.log("\n=== CONTEXT AROUND FIRST 'win_ratio' ===");
        const start = Math.max(0, winRatioIndices[0] - 200);
        console.log(text.substring(start, start + 1000));
    } else {
        const winRateIndices = searchAll('"win_rate"');
        if (winRateIndices.length > 1) {
            console.log("\n=== CONTEXT AROUND SECOND 'win_rate' ===");
            const start = Math.max(0, winRateIndices[1] - 200);
            console.log(text.substring(start, start + 1000));
        }
    }
} catch(e) {
    console.error(e);
}
