const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\SSD480\\.gemini\\antigravity\\brain\\1f973024-27a6-4522-9544-bafb4dc7d149\\scratch\\champ_page.html', 'utf8');

// Let's find occurrences of Q, W, E, R in the HTML
// Specifically look for patterns of level tables
// Let's search for classes like "skill" or tables
const regex = /<table[^>]*>([\s\S]*?)<\/table>/g;
let match;
let tableIndex = 0;
while ((match = regex.exec(html)) !== null) {
    const tableHtml = match[1];
    if (tableHtml.includes('skill') || tableHtml.includes('Skill')) {
        console.log(`Table ${tableIndex} contains skill. Length:`, tableHtml.length);
        // Write the first 500 chars of this table
        console.log(tableHtml.substring(0, 500));
    }
    tableIndex++;
}
