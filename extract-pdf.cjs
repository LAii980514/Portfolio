const fs = require('fs');
const { PDFParse } = require('pdf-parse');
const buf = fs.readFileSync('c:\\Users\\User\\Desktop\\MyPortfolio\\1. 포트폴리오 개요_김용언.pdf');
const parser = new PDFParse();
parser.loadPDF(buf).then(() => {
  console.log('PAGES:', parser.getAllPages().length);
  const pages = parser.getAllPages();
  pages.forEach((page, i) => {
    console.log(`\n=== PAGE ${i+1} ===`);
    const lines = page.getAllTextLines();
    lines.forEach(line => {
      console.log(line.text);
    });
  });
}).catch(err => console.error('Error:', err.message));
