module.exports = `  function generateAiResponse(input) {
    var raw = input.toLowerCase();

    // 1. Pricing / Tiers / Cost
    if (raw.indexOf('tier') !== -1 || raw.indexOf('price') !== -1 || raw.indexOf('pricing') !== -1 || raw.indexOf('magkano') !== -1 || raw.indexOf('cost') !== -1 || raw.indexOf('starter') !== -1 || raw.indexOf('pro') !== -1 || raw.indexOf('business') !== -1 || raw.indexOf('bayad') !== -1) {
      return {
        html: '<p><strong>BoothPoint Perpetual License Tiers (One-Time Payment):</strong></p>' +
          '<ul>' +
          '<li><strong>Starter (₱7,000):</strong> Perfect for solo operators. Includes booking calendar, payments & balance tracking, auto PDF invoices, and public tracking links. (1 admin)</li>' +
          '<li><strong>Professional (₱13,000):</strong> Most chosen! Adds staff assignment & payouts, equipment inventory, activity audit logs, auto reminder emails, and customer reviews. (Up to 3 admins)</li>' +
          '<li><strong>Business (₱22,000):</strong> For multi-crew operations. Adds Google Calendar 2-way sync, custom hex brand colors, unlimited admins, 1-on-1 guided install, and 1 year of updates.</li>' +
          '</ul>' +
          '<p><em>Zero monthly subscriptions. The software is installed on your hosting and belongs to you forever!</em></p>' +
          '<a href="#pricing" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 View Pricing Section</a>' +
          '<a href="#calculator" class="bp-ai-action-link" onclick="closeAiAssistant()">⚡ Compute Studio ROI</a>',
        chips: [
          { label: '🔒 Paano ang Self-Hosting?', prompt: 'Paano nagwo-work ang self-hosting sa hosting ko?' },
          { label: '🛡️ Multi-Crew Calendar Shield', prompt: 'Paano nagpe-prevent ng double-booking sa events?' },
          { label: '🚀 Schedule RTS Live Demo', prompt: 'Paano mag-book ng live demo?' }
        ]
      };
    }

    // 2. Self-hosting / Requirements / cPanel / Server
    if (raw.indexOf('host') !== -1 || raw.indexOf('server') !== -1 || raw.indexOf('cpanel') !== -1 || raw.indexOf('install') !== -1 || raw.indexOf('setup') !== -1 || raw.indexOf('require') !== -1 || raw.indexOf('domain') !== -1 || raw.indexOf('mysql') !== -1 || raw.indexOf('php') !== -1) {
      return {
        html: '<p><strong>Self-Hosting &amp; Technical Requirements 🔒</strong></p>' +
          '<p>BoothPoint runs on any standard, inexpensive web hosting you already own:</p>' +
          '<ul>' +
          '<li><strong>Server Stack:</strong> Standard PHP 8.0+ and MySQL / MariaDB (works on Hostinger, Namecheap, SiteGround, cPanel, CyberPanel, VPS, etc.)</li>' +
          '<li><strong>Data Sovereignty:</strong> 100% of your client database, booking records, revenue stats, and contracts remain on your private database.</li>' +
          '<li><strong>Guided Setup:</strong> Included free in the Business tier, or available as an add-on (₱2,500) where RTS handles the complete installation for you.</li>' +
          '</ul>' +
          '<a href="#architecture" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 Inspect Architecture</a>',
        chips: [
          { label: '💰 License Pricing Tiers', prompt: 'Magkano ang Starter at Pro tier?' },
          { label: '🛡️ Calendar Shield & Multi-Crew', prompt: 'Pano yung calendar double booking prevention?' },
          { label: '🧾 Auto PDF Invoices & GCash', prompt: 'Paano ang PDF invoices at GCash QR?' }
        ]
      };
    }

    // 3. Double booking / Calendar / Multi-crew / Availability
    if (raw.indexOf('calendar') !== -1 || raw.indexOf('double') !== -1 || raw.indexOf('conflict') !== -1 || raw.indexOf('schedule') !== -1 || raw.indexOf('overlap') !== -1 || raw.indexOf('shield') !== -1) {
      return {
        html: '<p><strong>Conflict-Free Multi-Crew Calendar Shield 🛡️</strong></p>' +
          '<p>BoothPoint tracks event start/end times and multi-photobooth unit availability automatically:</p>' +
          '<ul>' +
          '<li><strong>Real-time Slot Lock:</strong> Once a date/time is confirmed or locked, the slot is reserved instantly.</li>' +
          '<li><strong>Multi-Crew Management:</strong> If you run 2 or 3 photobooth units, BoothPoint verifies active operator capacity before accepting overlapping bookings.</li>' +
          '<li><strong>Optional Google Calendar Sync:</strong> Real-time two-way synchronization in the Business tier.</li>' +
          '</ul>' +
          '<a href="#preview" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 Preview Calendar UI</a>',
        chips: [
          { label: '📱 Public Client Tracker Link', prompt: 'Paano gumagana ang Client Tracker Link?' },
          { label: '🧾 Auto PDF Invoices & GCash', prompt: 'Paano ang PDF invoices at GCash QR?' }
        ]
      };
    }
`;
