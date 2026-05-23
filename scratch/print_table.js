const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\SSD480\\.gemini\\antigravity\\brain\\1f973024-27a6-4522-9544-bafb4dc7d149\\scratch\\champ_page.html', 'utf8');

const regex = /<caption>SkillOrder Table<\/caption>([\s\S]*?)<\/table>/;
const match = html.match(regex);
if (match) {
    fs.writeFileSync('C:\\Users\\SSD480\\.gemini\\antigravity\\brain\\1f973024-27a6-4522-9544-bafb4dc7d149\\scratch\\skill_table.html', match[1]);
    console.log('Saved skill_table.html, size:', match[1].length);
} else {
    console.log('SkillOrder Table not found');
}
