module.exports = `/* ========== NAVIGATION BAR ========== */
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 24px;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.brand {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  font-size: 1.32rem;
  color: var(--ink);
  letter-spacing: -0.02em;
  display: inline-flex;
  align-items: center;
}

.brand em {
  font-style: italic;
  color: var(--accent);
  margin-left: 1px;
}

.brand .by {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.62rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.08em;
  margin-left: 0.5rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  vertical-align: middle;
}

.nav-links {
  display: flex;
  gap: 1.7rem;
  font-size: 0.88rem;
  font-weight: 500;
}

.nav-links a {
  position: relative;
  color: var(--muted);
  padding: 0.35rem 0;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--ink);
}

.nav-links a.active {
  color: var(--ink);
  font-weight: 600;
}

.nav-links a.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-ai-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.5rem 0.95rem;
  border-radius: 8px;
  background: color-mix(in srgb, var(--accent) 12%, var(--surface));
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  color: var(--ink);
  cursor: pointer;
  transition: all var(--transition-medium);
}

.nav-ai-btn .sparkle {
  color: var(--flash);
  transition: transform 0.25s ease;
}

.nav-ai-btn:hover {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  border-color: transparent;
  transform: translateY(-1px);
  box-shadow: 0 6px 18px -4px rgba(26, 67, 245, 0.45);
}

.nav-ai-btn:hover .sparkle {
  color: #fff;
  transform: scale(1.2);
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color var(--transition-fast), transform var(--transition-fast), background var(--transition-fast);
}

.theme-toggle:hover {
  border-color: var(--accent);
  background: var(--surface-2);
}

.theme-toggle:active {
  transform: scale(0.92);
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
}

/* Theme Icon Visibility */
.icon-moon { display: none; }
.icon-sun { display: block; }

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .icon-sun { display: none; }
  :root:not([data-theme="light"]) .icon-moon { display: block; }
}
:root[data-theme="dark"] .icon-sun { display: none; }
:root[data-theme="dark"] .icon-moon { display: block; }
:root[data-theme="light"] .icon-sun { display: block; }
:root[data-theme="light"] .icon-moon { display: none; }

/* Hamburger Menu Button */
.nav-hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 38px;
  height: 38px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: border-color var(--transition-fast), background var(--transition-fast);
}

.nav-hamburger:hover {
  border-color: var(--accent);
}

.nav-hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: all 0.28s cubic-bezier(0.16, 0.84, 0.44, 1);
}

.nav-hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nav-hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
`;
