import fs from 'fs';
import path from 'path';

function getJpegDimensions(filepath) {
    const buffer = fs.readFileSync(filepath);
    let offset = 2;
    while (offset < buffer.length) {
        if (buffer[offset] === 0xFF) {
            const marker = buffer[offset + 1];
            if (marker === 0xC0 || marker === 0xC2) {
                const height = buffer.readUInt16BE(offset + 5);
                const width = buffer.readUInt16BE(offset + 7);
                return { width, height };
            }
            const length = buffer.readUInt16BE(offset + 2);
            offset += length + 2;
        } else {
            break;
        }
    }
    return { width: 1, height: 1 };
}

const pictureDir = path.join(process.cwd(), 'public', 'picture');
const files = fs.readdirSync(pictureDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

let photosData = [];
let idCounter = 1;

files.forEach(file => {
    const filePath = path.join(pictureDir, file);
    const { width, height } = getJpegDimensions(filePath);
    const ratio = width / height;
    
    let bentoClass = 'bento-small';
    if (ratio > 1.2) bentoClass = 'bento-wide';
    else if (ratio < 0.8) bentoClass = 'bento-tall';
    else {
        if (idCounter % 5 === 0) bentoClass = 'bento-large';
        else bentoClass = 'bento-small';
    }
    
    photosData.push({
        id: idCounter++,
        title: `풍경 ${idCounter - 1}`,
        src: `/picture/${file}`,
        bentoClass
    });
});

for (let i = 0; i < 10; i++) {
    photosData.push({
        id: idCounter++,
        title: '추가 예정',
        src: '',
        isPlaceholder: true,
        bentoClass: 'bento-small'
    });
}

const output = `  const photos = [\n    ${photosData.map(p => `{ id: ${p.id}, title: '${p.title}', src: '${p.src}', bentoClass: '${p.bentoClass}'${p.isPlaceholder ? ', isPlaceholder: true' : ''} }`).join(',\n    ')}\n  ];`;
fs.writeFileSync('photos_output.txt', output);
console.log('Success');
