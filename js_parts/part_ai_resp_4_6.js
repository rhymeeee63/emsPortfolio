module.exports = `    // 4. Invoices / PDF / GCash / Maya / Payments
    if (raw.indexOf('invoice') !== -1 || raw.indexOf('pdf') !== -1 || raw.indexOf('gcash') !== -1 || raw.indexOf('maya') !== -1 || raw.indexOf('receipt') !== -1 || raw.indexOf('downpayment') !== -1 || raw.indexOf('deposit') !== -1) {
      return {
        html: '<p><strong>Automated PDF Invoices &amp; Payment Receipts 📄</strong></p>' +
          '<p>Stop designing manual invoices in Canva or Word!</p>' +
          '<ul>' +
          '<li><strong>1-Click PDF Generation:</strong> Creates professional, branded quotations, balance statements, and official e-receipts with itemized packages and add-ons.</li>' +
          '<li><strong>GCash / Maya QR Code Integration:</strong> Attach your studio QR directly onto the PDF invoice for instant client mobile payments.</li>' +
          '<li><strong>Deposit &amp; Balance Tracking:</strong> Automatically tracks 30%/50% downpayments and alerts you when remaining event balances are due.</li>' +
          '</ul>' +
          '<a href="#preview" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 View Sample PDF Invoice</a>',
        chips: [
          { label: '💰 Pricing & Packages', prompt: 'Magkano ang Starter at Pro tier?' },
          { label: '📱 Client Tracker Portal', prompt: 'Pano yung tracking link para sa client?' }
        ]
      };
    }

    // 5. Client Tracker Link / Live Status
    if (raw.indexOf('tracker') !== -1 || raw.indexOf('track') !== -1 || raw.indexOf('status') !== -1 || raw.indexOf('link') !== -1 || raw.indexOf('subaybay') !== -1 || raw.indexOf('portal') !== -1) {
      return {
        html: '<p><strong>Public Client Live Tracking Portal 📱</strong></p>' +
          '<p>Each booking generates a dedicated, secure tracking URL for your client with <strong>zero login or account creation required</strong>:</p>' +
          '<ul>' +
          '<li><strong>Milestone Progress:</strong> Inquiry Received &rarr; Deposit Verified &rarr; Print Template Approved &rarr; Event Shoot &rarr; Online Gallery Delivered.</li>' +
          '<li><strong>Eliminates Repetitive DMs:</strong> Clients see live payment confirmations and schedule status anytime, saving your team hours of chat support.</li>' +
          '</ul>' +
          '<a href="#preview" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 Inspect Client Tracker</a>',
        chips: [
          { label: '🎨 Custom Studio Branding', prompt: 'Pwede ba sariling logo at brand colors?' },
          { label: '👥 Staff & Crew Management', prompt: 'Pano mag-assign ng staff at gamit?' }
        ]
      };
    }

    // 6. White-labeling / Branding / Custom Logo
    if (raw.indexOf('white') !== -1 || raw.indexOf('label') !== -1 || raw.indexOf('brand') !== -1 || raw.indexOf('logo') !== -1 || raw.indexOf('color') !== -1 || raw.indexOf('kulay') !== -1 || raw.indexOf('rebrand') !== -1) {
      return {
        html: '<p><strong>100% White-Label &amp; Studio Branding 🎨</strong></p>' +
          '<ul>' +
          '<li><strong>Your Brand, Not Ours:</strong> Upload your studio logo, set custom theme accent colors, and load your own package catalog.</li>' +
          '<li><strong>No Vendor Badges:</strong> Client-facing booking forms, tracker pages, and PDF invoices are 100% branded to your business without "Powered by RTS" watermarks.</li>' +
          '<li><strong>Custom White-Label Rebrand Add-on:</strong> Available if you want us to completely replace every internal system mention with your studio name (₱3,000).</li>' +
          '</ul>' +
          '<a href="#preview" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 Test Interactive Brand Customizer</a>',
        chips: [
          { label: '💰 Check Software Tiers', prompt: 'Magkano ang mga tiers at ano ang pinagkaiba?' },
          { label: '🚀 Contact Rhyme Tech', prompt: 'Paano mag-order o mag-book ng demo?' }
        ]
      };
    }
`;
