const fs = require('fs');
const https = require('https');

const icons = {
  'unrealengine': 'FFFFFF',
  'microsoftpowerpoint': 'B7472A',
  'microsoftword': '2B579A',
  'microsoftexcel': '217346',
  'adobephotoshop': '31A8FF'
};

if (!fs.existsSync('./public/svgs')) {
  fs.mkdirSync('./public/svgs');
}

Object.entries(icons).forEach(([slug, color]) => {
  https.get(`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Inject fill color into svg tag
      data = data.replace('<svg ', `<svg fill="#${color}" `);
      fs.writeFileSync(`./public/svgs/${slug}.svg`, data);
      console.log(`Saved ${slug}.svg`);
    });
  });
});
