const fs = require('fs');
const txt = fs.readFileSync('C:\\Users\\SSD480\\.gemini\\antigravity\\brain\\1f973024-27a6-4522-9544-bafb4dc7d149\\scratch\\rsc_full_text.txt', 'utf8');

const idx = txt.indexOf('skill_0');
console.log('RSC snippet around skill_0:', txt.substring(idx - 200, idx + 4000));
