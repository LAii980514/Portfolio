import { readFileSync } from 'fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const data = new Uint8Array(readFileSync('c:\\Users\\User\\Desktop\\MyPortfolio\\1. 포트폴리오 개요_김용언.pdf'));
const doc = await getDocument({ data }).promise;

console.log('Total Pages:', doc.numPages);

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const textContent = await page.getTextContent();
  const text = textContent.items.map(item => item.str).join(' ');
  console.log(`\n=== PAGE ${i} ===`);
  console.log(text);
}
