const fs = require('fs');
const css = fs.readFileSync('C:/xampp/htdocs/emsPortfolio/emsPortfolio/boothpoint-consolidated.css','utf8');
const html = fs.readFileSync('C:/xampp/htdocs/emsPortfolio/emsPortfolio/boothpoint.html','utf8');

const classRe = /class="([^"]+)"/g;
let m;
const htmlClasses = new Set();
while((m = classRe.exec(html)) !== null) {
  m[1].split(/\s+/).forEach(c => c && htmlClasses.add(c));
}

const missing = [];
htmlClasses.forEach(c => {
  const inCSS = css.includes('.' + c + ' ') || 
                css.includes('.' + c + '{') || 
                css.includes('.' + c + '.') || 
                css.includes('.' + c + ':') ||
                css.includes('.' + c + '\n') ||
                css.includes('.' + c + ',') ||
                css.includes('.' + c + ')');
  if (!inCSS) {
    missing.push(c);
  }
});

console.log('Total HTML classes:', htmlClasses.size);
console.log('Missing from CSS:', missing.length);
if (missing.length) {
  console.log('Missing classes:');
  missing.sort().forEach(c => console.log('  -', c));
}

// Also check for layout issues - find all section/container CSS rules
console.log('\n--- Key layout rules ---');
const keyRules = ['.tiers', '.tier', '.tier.featured', '.section-head', '.section', 'section', '.wrap'];
keyRules.forEach(r => {
  const idx = css.indexOf(r);
  console.log(r + ': line ~' + (css.slice(0, idx).split('\n').length));
});
