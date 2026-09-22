// Source of truth for the compiled script: reads the live, hand-edited
// boothpoint.js directly, instead of a stale set of fragments.
const fs = require('fs');
const path = require('path');

module.exports = fs.readFileSync(path.join(__dirname, '..', 'boothpoint.js'), 'utf8');
