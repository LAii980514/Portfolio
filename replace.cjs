const fs = require('fs');
let content = fs.readFileSync('src/pages/Gallery.jsx', 'utf8');

// Replace the specific filename
content = content.replace(/"KakaoTalk_20260527_225601214_04\.jpg"/, '"sad_rio.jpg"');

// Replace the title and description for i === 18
const regex = /(} else if \(i === 18\) \{\n\s*title = )"홀로라이브 등신대";(\n\s*description = )"일본 현지에서 홀로라이브 EN 이나 등신대를 찍은 사진입니다.";/;
content = content.replace(regex, '$1"슬픈 사진";$2"제 아내 리오를 데리고 오는 과정에서 사고가 난 사진을 기록했습니다.";');

fs.writeFileSync('src/pages/Gallery.jsx', content, 'utf8');
console.log('Done');
