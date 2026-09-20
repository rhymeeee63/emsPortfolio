const fs = require('fs');
const html = fs.readFileSync(__dirname + '/boothpoint.html', 'utf8');
const css = fs.readFileSync(__dirname + '/boothpoint.css', 'utf8');

const classRegex = /class=["']([^"']+)["']/g;
const classes = new Set();
let match;
while ((match = classRegex.exec(html)) !== null) {
  match[1].split(/\s+/).forEach(c => c && classes.add(c));
}

console.log('Total unique classes in HTML:', classes.size);
const missingClasses = [];
classes.forEach(c => {
  if (!css.includes('.' + c)) {
    missingClasses.push(c);
  }
});

console.log('Classes not found with exact dot prefix in CSS:', missingClasses);
