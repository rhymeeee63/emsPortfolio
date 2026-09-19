(function () {
  var root = document.documentElement;
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

  // Nav scroll-spy: highlights the link for whichever section is
  // currently in view, so clicking a nav link has a visible, lasting
  // effect instead of just jumping with no feedback.
  var navLinks = document.querySelectorAll('.nav-links a');
  var navMap = {};
  navLinks.forEach(function (a) {
    var id = a.getAttribute('href');
    var target = id && id.charAt(0) === '#' ? document.querySelector(id) : null;
    if (target) navMap[id] = a;
  });
  var navTargets = Object.keys(navMap).map(function (id) { return document.querySelector(id); });
  if ('IntersectionObserver' in window && navTargets.length) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = navMap['#' + entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    navTargets.forEach(function (el) { navIo.observe(el); });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Exposure readout ticker inside the hero viewfinder -- cycles through
  // plausible camera settings, a literal detail from this subject's own
  // world rather than decorative motion for its own sake.
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var settingEl = document.getElementById('vfSetting');
  if (settingEl && !reduceMotion) {
    var settings = ['f/2.8 · 1/125 · ISO 200', 'f/4 · 1/250 · ISO 100', 'f/2 · 1/160 · ISO 400'];
    var idx = 0;
    setInterval(function () {
      idx = (idx + 1) % settings.length;
      settingEl.style.opacity = 0;
      setTimeout(function () {
        settingEl.textContent = settings[idx];
        settingEl.style.opacity = 1;
      }, 300);
    }, 3200);
  }
})();
