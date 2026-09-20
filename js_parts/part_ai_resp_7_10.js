module.exports = `    // 7. Staff / Equipment / Team Payouts
    if (raw.indexOf('staff') !== -1 || raw.indexOf('crew') !== -1 || raw.indexOf('payout') !== -1 || raw.indexOf('operator') !== -1 || raw.indexOf('equipment') !== -1 || raw.indexOf('gear') !== -1 || raw.indexOf('gamit') !== -1) {
      return {
        html: '<p><strong>Staff Assignments &amp; Equipment Inventory 👥</strong></p>' +
          '<p>Available starting on the <strong>Professional Tier (₱13,000)</strong>:</p>' +
          '<ul>' +
          '<li><strong>Crew Dispatching:</strong> Assign lead photographers, photobooth operators, and assistants to specific dates.</li>' +
          '<li><strong>Payout Calculation:</strong> Automatically log event-based staff fees, commission splits, and payment status.</li>' +
          '<li><strong>Gear &amp; Inventory Check:</strong> Reserve cameras, sub-dyes, thermal printers, and backdrops to ensure equipment isn\\'t double-assigned.</li>' +
          '</ul>',
        chips: [
          { label: '💰 Professional Tier Features', prompt: 'Ano ang kasama sa Professional tier?' },
          { label: '⚡ Calculate Savings vs SaaS', prompt: 'Magkano matitipid ko compared sa SaaS?' }
        ]
      };
    }

    // 8. ROI / Savings vs Cloud SaaS
    if (raw.indexOf('saving') !== -1 || raw.indexOf('roi') !== -1 || raw.indexOf('saas') !== -1 || raw.indexOf('monthly') !== -1 || raw.indexOf('buwanan') !== -1 || raw.indexOf('tipid') !== -1 || raw.indexOf('calculator') !== -1) {
      return {
        html: '<p><strong>Why Self-Hosted Beats Monthly SaaS Subscriptions ⚡</strong></p>' +
          '<ul>' +
          '<li><strong>Typical SaaS Trap:</strong> $49–$149/mo (approx. ₱35,000–₱100,000/yr) + 1.5% take rate on all your booking transactions. Over 3 years, you spend <strong>₱150,000+</strong> on rentals!</li>' +
          '<li><strong>BoothPoint Model:</strong> Pay once (₱7k or ₱13k), host on your existing domain, keep 100% of your earnings forever.</li>' +
          '</ul>' +
          '<a href="#calculator" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 Open Interactive ROI Calculator</a>',
        chips: [
          { label: '💰 Starter vs Pro vs Business', prompt: 'Magkano ang mga tiers at ano ang pinagkaiba?' },
          { label: '🚀 Schedule a Live Demo', prompt: 'Paano mag-book ng live demo?' }
        ]
      };
    }

    // 9. Demo / Contact / Order / Facebook / WhatsApp
    if (raw.indexOf('demo') !== -1 || raw.indexOf('contact') !== -1 || raw.indexOf('order') !== -1 || raw.indexOf('bili') !== -1 || raw.indexOf('avail') !== -1 || raw.indexOf('facebook') !== -1 || raw.indexOf('messenger') !== -1 || raw.indexOf('whatsapp') !== -1 || raw.indexOf('call') !== -1 || raw.indexOf('email') !== -1) {
      return {
        html: '<p><strong>Ready to Upgrade Your Studio? Let\\'s Connect! 🚀</strong></p>' +
          '<p>We can walk you through a live 1-on-1 demo with your studio packages and branding loaded:</p>' +
          '<ul>' +
          '<li><strong>Facebook Messenger:</strong> Fast direct chat via <a href="https://www.facebook.com/rimenomis63/" target="_blank" style="color:var(--accent); text-decoration:underline;">fb.com/rimenomis63</a></li>' +
          '<li><strong>WhatsApp / Call:</strong> +971 52 259 6095</li>' +
          '<li><strong>Email RTS Direct:</strong> rhymetechsystems@gmail.com</li>' +
          '</ul>' +
          '<a href="#contact" class="bp-ai-action-link" onclick="closeAiAssistant()">👉 Go to Contact Channels</a>',
        chips: [
          { label: '💰 Review License Pricing', prompt: 'Magkano ang Starter at Pro tier?' },
          { label: '🔒 Server Requirements', prompt: 'Paano nagwo-work ang self-hosting sa server?' }
        ]
      };
    }

    // 10. Greetings & General Tagalog Chat
    if (raw.indexOf('hi') === 0 || raw.indexOf('hello') === 0 || raw.indexOf('kumusta') !== -1 || raw.indexOf('kamusta') !== -1 || raw.indexOf('salamat') !== -1 || raw.indexOf('thanks') !== -1 || raw.indexOf('good') !== -1) {
      return {
        html: '<p><strong>Kumusta! 👋 Welcome to BoothPoint AI Concierge by Rhyme Tech Systems.</strong></p>' +
          '<p>How can I help power up your photography or photobooth business today?</p>' +
          '<p>You can ask me anything about our one-time licenses, self-hosting on your domain, multi-crew double-booking shields, or client portals.</p>',
        chips: [
          { label: '💰 Starter vs Pro vs Business?', prompt: 'Magkano ang mga tiers at ano ang pinagkaiba?' },
          { label: '🔒 Paano ang Self-Hosting?', prompt: 'Paano nagwo-work ang self-hosting sa sarili kong cPanel / domain?' },
          { label: '⚡ Compute My ROI Savings', prompt: 'Magkano matitipid ko compared sa monthly SaaS subscription?' }
        ]
      };
    }

    // Default Fallback
    return {
      html: '<p><strong>Got it! Here is how BoothPoint can help:</strong></p>' +
        '<p>BoothPoint is Rhyme Tech Systems\\' <strong>self-hosted studio &amp; photobooth management platform</strong> that replaces costly monthly SaaS subscriptions.</p>' +
        '<ul>' +
        '<li>One-time perpetual license (<strong>₱7,000 / ₱13,000 / ₱22,000</strong>)</li>' +
        '<li>Runs on your own PHP/MySQL web hosting with 100% data privacy</li>' +
        '<li>Multi-crew booking conflict shield, automated PDF invoices with GCash/Maya QR, and client tracking portals</li>' +
        '</ul>' +
        '<p>Would you like to explore any of these topics?</p>',
      chips: [
        { label: '💰 View License Pricing', prompt: 'Magkano ang mga tiers at ano ang pinagkaiba?' },
        { label: '🔒 Self-Hosting Specs', prompt: 'Paano nagwo-work ang self-hosting sa sarili kong hosting?' },
        { label: '⚡ Studio Savings ROI', prompt: 'Magkano matitipid ko compared sa SaaS?' },
        { label: '🚀 Connect with Rhyme Tech', prompt: 'Paano mag-schedule ng live demo kasama ang RTS team?' }
      ]
    };
  }

})();
`;
