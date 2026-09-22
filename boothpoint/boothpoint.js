(function () {
  'use strict';
  
  var root = document.documentElement;
  
  // ========== THEME TOGGLE ==========
  try {
    var saved = localStorage.getItem('bp-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('bp-theme', next); } catch (e) {}
    });
  }

  // ========== MOBILE HAMBURGER MENU ==========
  var hamburger = document.getElementById('navHamburger');
  var navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      var isExpanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking nav links
    var navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ========== NAV SCROLL-SPY ==========
  var navLinksForSpy = document.querySelectorAll('.nav-links a');
  var navMap = {};
  navLinksForSpy.forEach(function (a) {
    var id = a.getAttribute('href');
    var target = id && id.charAt(0) === '#' ? document.querySelector(id) : null;
    if (target) navMap[id] = a;
  });
  var navTargets = Object.keys(navMap).map(function (id) { return document.querySelector(id); }).filter(Boolean);
  if ('IntersectionObserver' in window && navTargets.length) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = navMap['#' + entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinksForSpy.forEach(function (a) { a.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    navTargets.forEach(function (el) { navIo.observe(el); });
  }

  // ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== REVEAL ANIMATIONS ON SCROLL ==========
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ========== HERO VIEWFINDER CAMERA SETTINGS TICKER ==========
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var settingEl = document.getElementById('vfSetting');
  if (settingEl && !reduceMotion) {
    var settings = ['f/2.8 · 1/125 · ISO 200', 'f/4 · 1/250 · ISO 100', 'f/2 · 1/160 · ISO 400', 'f/1.8 · 1/200 · ISO 640'];
    var idx = 0;
    setInterval(function () {
      idx = (idx + 1) % settings.length;
      settingEl.style.opacity = '0';
      setTimeout(function () {
        settingEl.textContent = settings[idx];
        settingEl.style.opacity = '1';
      }, 300);
    }, 3200);
  }

  // ========== SCROLL TO HERO / TOP BUTTON ==========
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    function checkScrollTop() {
      if (window.pageYOffset > 280) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    checkScrollTop();

    scrollTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var hero = document.getElementById('hero') || document.querySelector('.hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  // ========== INTERACTIVE PREVIEW TABS SWITCHER ==========
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanes = document.querySelectorAll('.tab-pane');
  var stageUrl = document.getElementById('stageUrl');
  var stageBadge = document.getElementById('stageBadge');
  var tabsNav = document.querySelector('.preview-tabs-nav');

  // One-time nudge so the row's horizontal scrollability is obvious on
  // first load, since the scrollbar itself is hidden — without this it
  // just looks like the last tab is cut off rather than scrollable.
  if (tabsNav && tabsNav.scrollWidth > tabsNav.clientWidth
      && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    setTimeout(function () {
      tabsNav.scrollTo({ left: 46, behavior: 'smooth' });
      setTimeout(function () {
        tabsNav.scrollTo({ left: 0, behavior: 'smooth' });
      }, 550);
    }, 700);
  }

  var tabMeta = {
    'dashboard': { url: 'yourstudio.com/admin/dashboard', badge: 'Live Sync • v2.4' },
    'calendar': { url: 'yourstudio.com/admin/calendar', badge: 'Conflict Shield Active' },
    'invoices': { url: 'yourstudio.com/invoices/INV-2026-0894', badge: 'Auto-PDF Ready' },
    'tracker': { url: 'yourstudio.com/track/BK-2026-0142', badge: 'Client View' },
    'brand': { url: 'yourstudio.com/admin/brand-engine', badge: 'White-Label' },
    'activity': { url: 'yourstudio.com/admin/activity-log', badge: 'Full Audit Trail' },
    'contract': { url: 'yourstudio.com/booking-details?id=78', badge: 'E-Signed' },
    'twofa': { url: 'yourstudio.com/admin/users', badge: 'Optional Per Account' },
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
  var calcSavingsFx = document.getElementById('calcSavingsFx');
  var calcBpCostFx = document.getElementById('calcBpCostFx');
  var calcSaasCostFx = document.getElementById('calcSaasCostFx');

  function setFxNote(el, php) {
    if (!el) return;
    var fx = window.bpFx;
    if (!fx || !fx.code || !fx.fmt || !php) {
      el.hidden = true;
      return;
    }
    el.textContent = '≈ ' + fx.fmt.format(php / fx.rate);
    el.hidden = false;
  }

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
    var roundedSavings = Math.round(netSavings);
    var roundedSaas = Math.round(saasFees);

    if (savingsTotal) savingsTotal.textContent = '₱' + roundedSavings.toLocaleString();
    if (calcSaasCost) calcSaasCost.textContent = '₱' + roundedSaas.toLocaleString() + '+';
    if (calcBpCost) calcBpCost.textContent = '₱13,000 once';

    setFxNote(calcSavingsFx, roundedSavings);
    setFxNote(calcBpCostFx, bpCost);
    setFxNote(calcSaasCostFx, roundedSaas);
  }

  // The currency-reference module (further down this file) calls this
  // once it knows the visitor's currency, so the calculator's
  // already-rendered numbers get their approximate conversion too
  // instead of only the static pricing cards.
  window.bpUpdateRoi = updateRoi;

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


  // ================= BoothPoint AI Assistant Engine =================
  var aiTrigger = document.getElementById('bpAiTrigger');
  var aiDock = document.getElementById('bpAiDock');
  var aiCloseBtn = document.getElementById('bpAiCloseBtn');
  var aiBackBtn = document.getElementById('bpAiBackBtn');
  var aiMenuBtn = document.getElementById('bpAiMenuBtn');
  var aiDropdown = document.getElementById('bpAiDropdown');
  var aiDropRestart = document.getElementById('bpAiDropRestart');
  var aiDropClear = document.getElementById('bpAiDropClear');
  var aiHomeView = document.getElementById('bpAiHomeView');
  var aiChatView = document.getElementById('bpAiChatView');
  var aiForm = document.getElementById('bpAiForm');
  var aiInput = document.getElementById('bpAiInput');
  var aiMessages = document.getElementById('bpAiMessages');
  var aiTyping = document.getElementById('bpAiTyping');
  var aiEmojiBtn = document.getElementById('bpAiEmojiBtn');
  var aiEmojiTray = document.getElementById('bpAiEmojiTray');
  var aiMicBtn = document.getElementById('bpAiMicBtn');
  var navAiBtn = document.getElementById('navAiBtn');
  var tabLaunchAiBtn = document.getElementById('tabLaunchAiBtn');

  var currentAiView = 'home';
  var isAiTyping = false;
  var isRecording = false;

  function switchAiView(view) {
    currentAiView = view;
    if (view === 'chat') {
      if (aiHomeView) aiHomeView.style.display = 'none';
      if (aiChatView) aiChatView.style.display = 'flex';
      if (aiBackBtn) aiBackBtn.style.display = 'flex';
    } else {
      if (aiHomeView) aiHomeView.style.display = 'flex';
      if (aiChatView) aiChatView.style.display = 'none';
      if (aiBackBtn) aiBackBtn.style.display = 'none';
    }
  }

  function openAiAssistant(initialPrompt) {
    if (!aiDock) return;
    aiDock.classList.add('open');
    aiDock.setAttribute('aria-hidden', 'false');
    if (initialPrompt) {
      switchAiView('chat');
      handleUserSubmit(initialPrompt);
    } else if (aiInput) {
      setTimeout(function () { aiInput.focus(); }, 200);
    }
  }

  function closeAiAssistant() {
    if (!aiDock) return;
    aiDock.classList.remove('open');
    aiDock.setAttribute('aria-hidden', 'true');
    if (aiDropdown) aiDropdown.style.display = 'none';
    if (aiEmojiTray) aiEmojiTray.style.display = 'none';
  }

  if (aiTrigger) aiTrigger.addEventListener('click', function () {
    if (aiDock && aiDock.classList.contains('open')) closeAiAssistant();
    else openAiAssistant();
  });
  if (aiCloseBtn) aiCloseBtn.addEventListener('click', closeAiAssistant);
  if (navAiBtn) navAiBtn.addEventListener('click', function () { openAiAssistant(); });
  if (tabLaunchAiBtn) tabLaunchAiBtn.addEventListener('click', function () { openAiAssistant('Tell me more about how BoothPoint AI works for photobooths!'); });

  // Escape key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && aiDock && aiDock.classList.contains('open')) {
      closeAiAssistant();
    }
  });

  window.openBoothPointAI = openAiAssistant;
  window.closeAiAssistant = closeAiAssistant;


  // AI Prompt Cards on Home View
  var aiCards = document.querySelectorAll('.bp-ai-card');
  aiCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var prompt = this.getAttribute('data-prompt');
      if (!prompt) {
        var labelEl = this.querySelector('.bp-ai-card-label');
        prompt = labelEl ? labelEl.textContent.trim() : 'Tell me more about BoothPoint';
      }
      switchAiView('chat');
      handleUserSubmit(prompt);
    });
  });

  // AI Back Button
  if (aiBackBtn) {
    aiBackBtn.addEventListener('click', function () {
      switchAiView('home');
    });
  }

  // AI Menu Dropdown
  if (aiMenuBtn && aiDropdown) {
    aiMenuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      aiDropdown.style.display = (aiDropdown.style.display === 'none' || !aiDropdown.style.display) ? 'block' : 'none';
    });
    document.addEventListener('click', function (e) {
      if (aiDropdown && !aiDropdown.contains(e.target) && e.target !== aiMenuBtn) {
        aiDropdown.style.display = 'none';
      }
    });
  }

  // AI Restart Chat
  if (aiDropRestart) {
    aiDropRestart.addEventListener('click', function () {
      if (aiMessages) aiMessages.innerHTML = '';
      if (aiDropdown) aiDropdown.style.display = 'none';
      switchAiView('home');
    });
  }

  // AI Clear History
  if (aiDropClear) {
    aiDropClear.addEventListener('click', function () {
      if (aiMessages) aiMessages.innerHTML = '';
      if (aiDropdown) aiDropdown.style.display = 'none';
      appendBotBubble(
        '<p><strong>Conversation cleared! ✨</strong></p><p>Kumusta! Ask me anything about BoothPoint\'s self-hosted perpetual licenses, features, or deployment specs:</p>',
        [
          { label: '💰 Starter vs Pro vs Business?', prompt: 'Magkano ang mga tiers at ano ang pinagkaiba?' },
          { label: '🔒 Paano ang Self-Hosting?', prompt: 'Paano nagwo-work ang self-hosting sa sarili kong hosting?' },
          { label: '⚡ Studio Savings ROI', prompt: 'Magkano matitipid ko compared sa monthly SaaS subscription?' }
        ]
      );
    });
  }

  // Emoji Tray & Insertion
  if (aiEmojiBtn && aiEmojiTray) {
    aiEmojiBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      aiEmojiTray.style.display = (aiEmojiTray.style.display === 'none' || !aiEmojiTray.style.display) ? 'flex' : 'none';
    });
    document.addEventListener('click', function (e) {
      if (aiEmojiTray && !aiEmojiTray.contains(e.target) && e.target !== aiEmojiBtn) {
        aiEmojiTray.style.display = 'none';
      }
    });
  }

  var emojiPicks = document.querySelectorAll('.bp-emoji-pick');
  emojiPicks.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (aiInput) {
        aiInput.value += this.textContent;
        aiInput.focus();
      }
    });
  });

  // Voice Input Speech Recognition
  if (aiMicBtn) {
    var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      var recognition = new SpeechRec();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.onstart = function () {
        isRecording = true;
        aiMicBtn.classList.add('listening');
      };
      recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        if (aiInput) {
          aiInput.value = transcript;
          switchAiView('chat');
          handleUserSubmit(transcript);
        }
      };
      recognition.onerror = recognition.onend = function () {
        isRecording = false;
        aiMicBtn.classList.remove('listening');
      };
      aiMicBtn.addEventListener('click', function () {
        if (isRecording) {
          recognition.stop();
        } else {
          try { recognition.start(); } catch (err) {}
        }
      });
    } else {
      aiMicBtn.title = 'Voice input not supported in this browser';
      aiMicBtn.style.opacity = '0.5';
    }
  }

  // Textarea Auto-Resize
  if (aiInput) {
    aiInput.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(80, this.scrollHeight) + 'px';
    });
  }


  function appendUserBubble(text) {
    if (!aiMessages) return;
    var row = document.createElement('div');
    row.className = 'bp-ai-msg user';
    row.innerHTML = '<div class="bp-ai-msg-bubble"><p>' + escapeHtml(text) + '</p></div>';
    aiMessages.appendChild(row);
    scrollToBottom();
  }

  function appendBotBubble(htmlContent, quickChips) {
    if (!aiMessages) return;
    var row = document.createElement('div');
    row.className = 'bp-ai-msg bot';
    var chipsHtml = '';
    if (quickChips && quickChips.length) {
      chipsHtml = '<div class="bp-ai-quick-suggestions">' +
        quickChips.map(function (c) {
          return '<button type="button" class="bp-ai-chip" data-prompt="' + escapeAttr(c.prompt || c.label) + '">' + escapeHtml(c.label) + '</button>';
        }).join('') +
        '</div>';
    }
    row.innerHTML = '<div class="bp-ai-msg-avatar">✨</div><div class="bp-ai-msg-bubble">' + htmlContent + chipsHtml + '</div>';
    aiMessages.appendChild(row);
    scrollToBottom();
    bindChipEvents(row);
  }

  function scrollToBottom() {
    if (aiMessages) {
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;');
  }

  function bindChipEvents(container) {
    var chips = (container || document).querySelectorAll('.bp-ai-chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var prompt = this.getAttribute('data-prompt');
        if (prompt && !isAiTyping) {
          handleUserSubmit(prompt);
        }
      });
    });
  }
  bindChipEvents();

  if (aiForm && aiInput) {
    aiForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = aiInput.value.trim();
      if (!q || isAiTyping) return;
      aiInput.value = '';
      aiInput.style.height = 'auto';
      handleUserSubmit(q);
    });
  }

  function handleUserSubmit(userText) {
    if (!userText || isAiTyping) return;
    appendUserBubble(userText);
    isAiTyping = true;
    if (aiTyping) aiTyping.style.display = 'flex';
    scrollToBottom();

    var delay = 400 + Math.random() * 250;
    setTimeout(function () {
      var botResponse = generateAiResponse(userText);
      if (aiTyping) aiTyping.style.display = 'none';
      isAiTyping = false;
      appendBotBubble(botResponse.html, botResponse.chips);
    }, delay);
  }


  function generateAiResponse(input) {
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


    // 4. Invoices / PDF / GCash / Maya / Payments
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


    // 7. Staff / Equipment / Team Payouts
    if (raw.indexOf('staff') !== -1 || raw.indexOf('crew') !== -1 || raw.indexOf('payout') !== -1 || raw.indexOf('operator') !== -1 || raw.indexOf('equipment') !== -1 || raw.indexOf('gear') !== -1 || raw.indexOf('gamit') !== -1) {
      return {
        html: '<p><strong>Staff Assignments &amp; Equipment Inventory 👥</strong></p>' +
          '<p>Available starting on the <strong>Professional Tier (₱13,000)</strong>:</p>' +
          '<ul>' +
          '<li><strong>Crew Dispatching:</strong> Assign lead photographers, photobooth operators, and assistants to specific dates.</li>' +
          '<li><strong>Payout Calculation:</strong> Automatically log event-based staff fees, commission splits, and payment status.</li>' +
          '<li><strong>Gear &amp; Inventory Check:</strong> Reserve cameras, sub-dyes, thermal printers, and backdrops to ensure equipment isn\'t double-assigned.</li>' +
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
        html: '<p><strong>Ready to Upgrade Your Studio? Let\'s Connect! 🚀</strong></p>' +
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
        '<p>BoothPoint is Rhyme Tech Systems\' <strong>self-hosted studio &amp; photobooth management platform</strong> that replaces costly monthly SaaS subscriptions.</p>' +
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

// ========== SCREENSHOT LIGHTBOX (click a preview tab image to zoom) ==========
(function () {
  var lightbox = document.getElementById('imgLightbox');
  var lightboxImg = document.getElementById('imgLightboxPic');
  var lightboxClose = document.getElementById('imgLightboxClose');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lightboxImg) lightboxImg.src = '';
  }

  document.querySelectorAll('.tab-shot').forEach(function (img) {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Zoom image: ' + (img.alt || ''));
    img.addEventListener('click', function () { openLightbox(img.src, img.alt); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img.src, img.alt); }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();

// ========== CURRENCY REFERENCE (approximate, PHP stays the billed currency) ==========
(function () {
  var RATES = { // PHP per 1 unit of currency, approximate
    USD: 58, EUR: 62, GBP: 73, AUD: 37, CAD: 41, SGD: 43,
    AED: 15.8, INR: 0.70, JPY: 0.39, HKD: 7.4, NZD: 34, CNY: 8.0
  };
  var COUNTRY_CURRENCY = {
    US: 'USD', GB: 'GBP', CA: 'CAD', AU: 'AUD', SG: 'SGD', AE: 'AED',
    IN: 'INR', JP: 'JPY', HK: 'HKD', NZ: 'NZD', CN: 'CNY',
    DE: 'EUR', FR: 'EUR', ES: 'EUR', IT: 'EUR', NL: 'EUR', IE: 'EUR',
    PT: 'EUR', AT: 'EUR', BE: 'EUR', FI: 'EUR', GR: 'EUR'
  };

  function applyCurrency(code) {
    if (!code || code === 'PHP' || !RATES[code]) return;
    var fmt;
    try {
      fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: code, maximumFractionDigits: 0 });
    } catch (e) { return; }
    document.querySelectorAll('.fx-note[data-price]').forEach(function (el) {
      var php = parseFloat(el.getAttribute('data-price'));
      if (!php) return;
      el.textContent = '≈ ' + fmt.format(php / RATES[code]);
      el.hidden = false;
    });

    // Shared with the ROI calculator (see part_tabs_calc_faq above),
    // whose numbers are computed live from slider input rather than
    // fixed data-price attributes, so it converts itself on every
    // recompute instead of a one-time scan.
    window.bpFx = { code: code, rate: RATES[code], fmt: fmt };
    if (typeof window.bpUpdateRoi === 'function') window.bpUpdateRoi();
  }

  function applyByCountry(countryCode) {
    if (!countryCode) return false;
    var currency = COUNTRY_CURRENCY[countryCode.toUpperCase()];
    if (!currency) return false;
    applyCurrency(currency);
    return true;
  }

  function fallbackByLocale() {
    try {
      var region = (navigator.language || '').split('-')[1];
      applyByCountry(region);
    } catch (e) {}
  }

  if ('fetch' in window) {
    var controller = ('AbortController' in window) ? new AbortController() : null;
    var timeout = setTimeout(function () { if (controller) controller.abort(); }, 3000);
    // ipwho.is returns country_code (e.g. "US"), not a currency field --
    // map it through COUNTRY_CURRENCY ourselves.
    fetch('https://ipwho.is/', controller ? { signal: controller.signal } : {})
      .then(function (r) { return r.json(); })
      .then(function (data) {
        clearTimeout(timeout);
        if (!data || !data.success || !applyByCountry(data.country_code)) {
          fallbackByLocale();
        }
      })
      .catch(function () {
        clearTimeout(timeout);
        fallbackByLocale();
      });
  } else {
    fallbackByLocale();
  }
})();

})();
