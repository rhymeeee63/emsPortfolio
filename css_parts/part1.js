module.exports = `/* ===================================================================
   BOOTHPOINT MASTER STYLESHEET — RHYME TECH SYSTEMS
   Full responsive layout, interactive components, dark/light theme,
   viewfinder hero, preview stage, ROI calculator, and AI assistant.
   =================================================================== */

/* ========== CSS RESET & BASE ========== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== CSS CUSTOM PROPERTIES ========== */
:root {
  /* Light Theme Palette */
  --bg: #f6f5f0;
  --surface: #ffffff;
  --surface-2: #edeae1;
  --surface-3: #e2ddd0;
  --ink: #141310;
  --muted: #6a6358;
  --border: #ded8ca;
  --accent: #1a43f5;
  --accent-2: #7b2ff7;
  --flash: #c9601a;
  --good: #15803d;
  --shadow: 0 20px 48px -24px rgba(20, 20, 15, 0.28);
  --shadow-lg: 0 28px 64px -28px rgba(20, 20, 15, 0.38);
  --grain-opacity: 0.035;

  /* Layout Variables */
  --nav-height: 72px;
  --section-padding: 5.2rem;
  --container-max: 1140px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-medium: 0.3s cubic-bezier(0.16, 0.84, 0.44, 1);
  --transition-slow: 0.7s cubic-bezier(0.16, 0.84, 0.44, 1);
}

/* Dark Theme (Automatic OS) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0b0a08;
    --surface: #15140e;
    --surface-2: #1f1d15;
    --surface-3: #2a271c;
    --ink: #f4f1e8;
    --muted: #a39c8e;
    --border: #312d22;
    --accent: #6683ff;
    --accent-2: #b184ff;
    --flash: #e8a355;
    --good: #4ade80;
    --shadow: 0 24px 54px -24px rgba(0, 0, 0, 0.7);
    --shadow-lg: 0 32px 72px -28px rgba(0, 0, 0, 0.85);
    --grain-opacity: 0.06;
  }
}

/* Dark Theme (Explicit Attribute) */
:root[data-theme="dark"] {
  --bg: #0b0a08;
  --surface: #15140e;
  --surface-2: #1f1d15;
  --surface-3: #2a271c;
  --ink: #f4f1e8;
  --muted: #a39c8e;
  --border: #312d22;
  --accent: #6683ff;
  --accent-2: #b184ff;
  --flash: #e8a355;
  --good: #4ade80;
  --shadow: 0 24px 54px -24px rgba(0, 0, 0, 0.7);
  --shadow-lg: 0 32px 72px -28px rgba(0, 0, 0, 0.85);
  --grain-opacity: 0.06;
}

/* Light Theme (Explicit Attribute) */
:root[data-theme="light"] {
  --bg: #f6f5f0;
  --surface: #ffffff;
  --surface-2: #edeae1;
  --surface-3: #e2ddd0;
  --ink: #141310;
  --muted: #6a6358;
  --border: #ded8ca;
  --accent: #1a43f5;
  --accent-2: #7b2ff7;
  --flash: #c9601a;
  --good: #15803d;
  --shadow: 0 20px 48px -24px rgba(20, 20, 15, 0.28);
  --shadow-lg: 0 28px 64px -28px rgba(20, 20, 15, 0.38);
  --grain-opacity: 0.035;
}

/* ========== BASE ELEMENTS ========== */
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 15.5px;
  line-height: 1.62;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Fraunces', Georgia, serif;
  text-wrap: balance;
  margin: 0;
  font-weight: 600;
  color: var(--ink);
}

h1 { font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-size: clamp(1.75rem, 3.6vw, 2.4rem); line-height: 1.18; letter-spacing: -0.015em; font-weight: 700; }
h3 { font-size: 1.18rem; line-height: 1.3; }

p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

img, svg, video {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ========== UTILITY CLASSES ========== */
.mono {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
}

.wrap {
  max-width: var(--container-max);
  margin: 0 auto;
  padding-inline: 24px;
}

section {
  padding-block: var(--section-padding);
  position: relative;
}

.tag {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.85rem;
}

.section-head {
  max-width: 640px;
  margin-bottom: 2.8rem;
}

.section-head h2 {
  font-size: clamp(1.75rem, 3.6vw, 2.4rem);
  letter-spacing: -0.015em;
}

.section-head p {
  margin-top: 0.85rem;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.62;
  max-width: 54ch;
}

/* ========== REVEAL ON SCROLL ANIMATIONS ========== */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity var(--transition-slow), transform var(--transition-slow);
  will-change: opacity, transform;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.stagger .reveal:nth-child(1) { transition-delay: 0ms; }
.stagger .reveal:nth-child(2) { transition-delay: 90ms; }
.stagger .reveal:nth-child(3) { transition-delay: 180ms; }
.stagger .reveal:nth-child(4) { transition-delay: 270ms; }
.stagger .reveal:nth-child(5) { transition-delay: 360ms; }
.stagger .reveal:nth-child(6) { transition-delay: 450ms; }

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: opacity 0.3s ease;
    transform: none !important;
  }
}

/* Film grain photographic texture */
.grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 2;
  opacity: var(--grain-opacity);
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}
`;
