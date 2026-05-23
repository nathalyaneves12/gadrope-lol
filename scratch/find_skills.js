const fs = require('fs');
const txt = fs.readFileSync('C:\\Users\\SSD480\\.gemini\\antigravity\\brain\\1f973024-27a6-4522-9544-bafb4dc7d149\\scratch\\rsc_full_text.txt', 'utf8');

// Let's search for strings containing Q, W, E or skill patterns
// Check for "skill" case-insensitively
let idx = 0;
while ((idx = txt.indexOf('"skill', idx)) !== -1) {
    console.log(`Context at index ${idx}:`, txt.substring(idx, idx + 500));
    idx += 5;
}
