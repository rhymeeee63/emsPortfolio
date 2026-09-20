module.exports = `  // ========== INTERACTIVE PREVIEW TABS SWITCHER ==========
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanes = document.querySelectorAll('.tab-pane');
  var stageUrl = document.getElementById('stageUrl');
  var stageBadge = document.getElementById('stageBadge');

  var tabMeta = {
    'dashboard': { url: 'yourstudio.com/admin/dashboard', badge: 'Live Sync • v2.4' },
    'calendar': { url: 'yourstudio.com/admin/calendar', badge: 'Conflict Shield Active' },
    'invoices': { url: 'yourstudio.com/invoices/INV-2026-0894', badge: 'Auto-PDF Ready' },
    'tracker': { url: 'yourstudio.com/track/BK-2026-0142', badge: 'Client View' },
    'brand': { url: 'yourstudio.com/admin/brand-engine', badge: 'White-Label' },
    'ai': { url: 'yourstudio.com/admin/ai-copilot', badge: 'Autonomous Agent' }
  };

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabKey = this.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanes.forEach(function (p) { p.classList.remove('active'); });

      this.classList.add('active');
      var targetPane = document.getElementById('pane-' + tabKey);
      if (targetPane) targetPane.classList.add('active');

      if (tabMeta[tabKey] && stageUrl && stageBadge) {
        stageUrl.textContent = tabMeta[tabKey].url;
        stageBadge.textContent = tabMeta[tabKey].badge;
      }
    });
  });

  // Interactive Color Swatch Customizer for Preview
  var brandSwatches = document.querySelectorAll('#brandSwatches i');
  var previewStudioName = document.getElementById('previewStudioName');
  var previewBtnAccent = document.getElementById('previewBtnAccent');
  if (brandSwatches.length && previewStudioName && previewBtnAccent) {
    brandSwatches.forEach(function (swatch) {
      swatch.addEventListener('click', function () {
        var color = this.getAttribute('data-color');
        previewStudioName.style.color = color;
        previewBtnAccent.style.backgroundColor = color;
        brandSwatches.forEach(function (s) { s.style.outline = 'none'; });
        this.style.outline = '2px solid var(--ink)';
      });
    });
  }

  // Interactive Studio ROI / Savings Calculator
  var bookingRange = document.getElementById('calcBookingRange');
  var priceRange = document.getElementById('calcPriceRange');
  var yearsRange = document.getElementById('calcYearsRange');

  var bookingVal = document.getElementById('calcBookingVal');
  var priceVal = document.getElementById('calcPriceVal');
  var yearsVal = document.getElementById('calcYearsVal');
  var savingsTotal = document.getElementById('calcSavingsTotal');
  var calcSaasCost = document.getElementById('calcSaasCost');
  var calcBpCost = document.getElementById('calcBpCost');

  function updateRoi() {
    if (!bookingRange || !priceRange || !yearsRange) return;
    var bookings = parseInt(bookingRange.value, 10);
    var price = parseInt(priceRange.value, 10);
    var years = parseInt(yearsRange.value, 10);

    bookingVal.textContent = bookings + ' events / mo';
    priceVal.textContent = '₱' + price.toLocaleString() + ' / event';
    yearsVal.textContent = years + (years === 1 ? ' Year' : ' Years');

    // Typical SaaS subscription: ~$79/mo (~₱4,400/mo) + 1.5% take rate on volume
    var totalMonths = years * 12;
    var monthlySaaS = 4400;
    var totalGross = bookings * price * totalMonths;
    var saasFees = (monthlySaaS * totalMonths) + (totalGross * 0.015);
    var bpCost = 13000; // Professional one-time tier

    var netSavings = Math.max(0, saasFees - bpCost);

    if (savingsTotal) savingsTotal.textContent = '₱' + Math.round(netSavings).toLocaleString();
    if (calcSaasCost) calcSaasCost.textContent = '₱' + Math.round(saasFees).toLocaleString() + '+';
    if (calcBpCost) calcBpCost.textContent = '₱13,000 once';
  }

  if (bookingRange && priceRange && yearsRange) {
    bookingRange.addEventListener('input', updateRoi);
    priceRange.addEventListener('input', updateRoi);
    yearsRange.addEventListener('input', updateRoi);
    updateRoi();
  }

  // Interactive FAQ Accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('active');
        faqItems.forEach(function (other) { other.classList.remove('active'); });
        if (!isOpen) item.classList.add('active');
      });
    }
  });
`;
