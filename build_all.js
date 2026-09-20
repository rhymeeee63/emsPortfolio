const fs = require('fs');
const path = require('path');

// CSS Parts
const p1 = require('./css_parts/part1.js');
const p2 = require('./css_parts/part2.js');
const p3 = require('./css_parts/part3.js');
const p_wf = require('./css_parts/part_workflow_features.js');
const p_pnav = require('./css_parts/part_preview_nav.js');
const p_pdash = require('./css_parts/part_preview_dash_cal.js');
const p_ptrack = require('./css_parts/part_invoicing_tracker.js');
const p_pbrand = require('./css_parts/part_brand_ai_tab.js');
const p_trust = require('./css_parts/part_trust_calc.js');
const p_price = require('./css_parts/part_pricing_compare.js');
const p_test = require('./css_parts/part_testimonials_faq.js');
const p_cta = require('./css_parts/part_cta_footer_fab.js');
const p_ai_dock = require('./css_parts/part_ai_dock_head.js');
const p_ai_chat = require('./css_parts/part_ai_chat_view.js');
const p_ai_inp = require('./css_parts/part_ai_input_bar.js');
const p_resp = require('./css_parts/part_responsive_queries.js');

const fullCss = [
  p1, p2, p3, p_wf, p_pnav, p_pdash, p_ptrack, p_pbrand,
  p_trust, p_price, p_test, p_cta, p_ai_dock, p_ai_chat, p_ai_inp, p_resp
].join('\n\n');

fs.writeFileSync(path.join(__dirname, 'boothpoint.css'), fullCss, 'utf8');
fs.writeFileSync(path.join(__dirname, 'boothpoint-consolidated.css'), fullCss, 'utf8');
console.log('Generated boothpoint.css and boothpoint-consolidated.css! Size:', fullCss.length);

// JS Parts
const js_core = require('./js_parts/part_core.js');
const js_tabs = require('./js_parts/part_tabs_calc_faq.js');
const js_dock = require('./js_parts/part_ai_dock_controls.js');
const js_interact = require('./js_parts/part_ai_interaction.js');
const js_bubbles = require('./js_parts/part_ai_bubbles.js');
const js_resp1 = require('./js_parts/part_ai_resp_1_3.js');
const js_resp2 = require('./js_parts/part_ai_resp_4_6.js');
const js_resp3 = require('./js_parts/part_ai_resp_7_10.js');

const fullJs = [
  js_core,
  js_tabs,
  js_dock,
  js_interact,
  js_bubbles,
  js_resp1,
  js_resp2,
  js_resp3
].join('\n\n');

fs.writeFileSync(path.join(__dirname, 'boothpoint.js'), fullJs, 'utf8');
console.log('Generated boothpoint.js! Size:', fullJs.length);

