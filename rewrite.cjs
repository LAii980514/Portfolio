const fs = require('fs');
const filePath = 'src/pages/Gallery.jsx';

let content = fs.readFileSync(filePath, 'utf8');

// 1. Update animationPhotos array
const arrayMatch = content.match(/const animationPhotos = \[([\s\S]*?)\];/);
if (arrayMatch) {
    const itemsStr = arrayMatch[1];
    let items = [];
    const regex = /"([^"]+)"/g;
    let match;
    while ((match = regex.exec(itemsStr)) !== null) {
        items.push(match[1]);
    }
    
    // items[36] is the target. Move it to items[3]
    const itemToMove = items.splice(36, 1)[0];
    items.splice(3, 0, itemToMove);
    
    let lines = [];
    for (let i = 0; i < items.length; i += 3) {
        const chunk = items.slice(i, i + 3);
        lines.push('    ' + chunk.map(x => `"${x}"`).join(', '));
    }
    
    const newArrayStr = lines.join(',\n');
    const newArrayBlock = `const animationPhotos = [\n${newArrayStr}\n  ];`;
    content = content.replace(/const animationPhotos = \[([\s\S]*?)\];/, newArrayBlock);
}

// 2. Update the `if (i === X)` indices
const fanartsMatch = content.match(/(const fanarts = animationPhotos\.map\(\(filename, i\) => \{[\s\S]*?\n    return \{)/);
if (fanartsMatch) {
    const fanartsBlock = fanartsMatch[1];
    
    const newFanartsBlock = fanartsBlock.replace(/(if \(i === |else if \(i === )(\d+)/g, (match, prefix, numStr) => {
        let num = parseInt(numStr, 10);
        if (num >= 3 && num <= 35) {
            num += 1;
        }
        return `${prefix}${num}`;
    });
    
    content = content.replace(/(const fanarts = animationPhotos\.map\(\(filename, i\) => \{[\s\S]*?\n    return \{)/, newFanartsBlock);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
