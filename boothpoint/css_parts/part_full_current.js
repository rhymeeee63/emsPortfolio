// Source of truth for the compiled stylesheet: reads the live, hand-edited
// boothpoint-consolidated.css directly, instead of a stale set of fragments.
const fs = require('fs');
const path = require('path');

module.exports = fs.readFileSync(path.join(__dirname, '..', 'boothpoint-consolidated.css'), 'utf8');
