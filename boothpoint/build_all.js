const fs = require('fs');
const path = require('path');

// The compiled files are hand-edited directly now; these "parts" just
// read them back so this script stays a safe no-op instead of reverting
// to stale fragments. See css_parts/part_full_current.js and
// js_parts/part_full_current.js.
const fullCss = require('./css_parts/part_full_current.js');
fs.writeFileSync(path.join(__dirname, 'boothpoint.css'), fullCss, 'utf8');
fs.writeFileSync(path.join(__dirname, 'boothpoint-consolidated.css'), fullCss, 'utf8');
console.log('Generated boothpoint.css and boothpoint-consolidated.css! Size:', fullCss.length);

const fullJs = require('./js_parts/part_full_current.js');
fs.writeFileSync(path.join(__dirname, 'boothpoint.js'), fullJs, 'utf8');
console.log('Generated boothpoint.js! Size:', fullJs.length);
