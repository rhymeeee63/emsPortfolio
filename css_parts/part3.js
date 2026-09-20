module.exports = `/* ========== BUTTONS ========== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.92rem;
  padding: 0.82rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-fast), background var(--transition-fast);
  white-space: nowrap;
}

.btn-primary {
  color: #fff;
  background: linear-gradient(120deg, var(--accent), var(--accent-2));
  box-shadow: 0 10px 26px -12px rgba(26, 67, 245, 0.6);
  position: relative;
  overflow: hidden;
}

.btn-primary::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 65%);
  opacity: 0;
  transform: scale(0.3);
  transition: opacity 0.45s ease, transform var(--transition-medium);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px -12px rgba(26, 67, 245, 0.75);
}

.btn-primary:hover::after {
  opacity: 0.35;
  transform: scale(1.6);
}

.btn-secondary {
  color: var(--ink);
  background: var(--surface);
  border-color: var(--border);
}

.btn-secondary:hover {
  border-color: var(--ink);
  background: var(--surface-2);
  transform: translateY(-2px);
}

.btn-sm {
  padding: 0.55rem 1.1rem;
  font-size: 0.82rem;
  border-radius: 7px;
}

/* ========== HERO SECTION ========== */
.hero {
  position: relative;
  padding-block: 4.8rem 5.4rem;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  width: 85vw;
  max-width: 1100px;
  height: 520px;
  background: radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 18%, transparent) 0%, color-mix(in srgb, var(--accent-2) 10%, transparent) 45%, transparent 72%);
  filter: blur(65px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.85;
}

.hero .wrap {
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3.5rem;
  align-items: center;
}

.hero h1 {
  font-size: clamp(2.2rem, 4.8vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.hero h1 em {
  font-style: italic;
  color: var(--accent);
  font-weight: 600;
}

.hero-sub {
  margin: 1.3rem 0 0;
  max-width: 48ch;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.65;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-trust {
  margin-top: 1.6rem;
  font-size: 0.82rem;
  color: var(--muted);
}

.hero-trust .mono {
  color: var(--ink);
  font-weight: 600;
}

.hero-trust .dot {
  margin-inline: 0.5rem;
  opacity: 0.5;
}

/* Viewfinder Graphic */
.viewfinder {
  position: relative;
  aspect-ratio: 4/3;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  background:
    repeating-linear-gradient(to right, transparent 0 calc(33.333% - 0.5px), color-mix(in srgb, var(--border) 60%, transparent) calc(33.333% - 0.5px) calc(33.333% + 0.5px)),
    repeating-linear-gradient(to bottom, transparent 0 calc(33.333% - 0.5px), color-mix(in srgb, var(--border) 60%, transparent) calc(33.333% - 0.5px) calc(33.333% + 0.5px)),
    var(--surface);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.vf-corner {
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: var(--accent);
  opacity: 0;
  animation: afLock 0.9s 0.2s cubic-bezier(0.16, 0.84, 0.44, 1) forwards;
}

.vf-corner.tl { top: 14px; left: 14px; border-top: 2.5px solid; border-left: 2.5px solid; }
.vf-corner.tr { top: 14px; right: 14px; border-top: 2.5px solid; border-right: 2.5px solid; }
.vf-corner.bl { bottom: 14px; left: 14px; border-bottom: 2.5px solid; border-left: 2.5px solid; }
.vf-corner.br { bottom: 14px; right: 14px; border-bottom: 2.5px solid; border-right: 2.5px solid; }

@keyframes afLock {
  0% { opacity: 0; transform: scale(1.35); }
  60% { opacity: 1; }
  100% { opacity: 1; transform: scale(1); }
}

.vf-flash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48%;
  height: 48%;
  margin: -24% 0 0 -24%;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--flash) 75%, transparent) 0%, transparent 70%);
  animation: vfPulse 6.5s ease-in-out 0.9s infinite;
  filter: blur(8px);
}

@keyframes vfPulse {
  0%, 100% { opacity: 0.16; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.15); }
}

@media (prefers-reduced-motion: reduce) {
  .vf-corner { animation: none; opacity: 1; }
  .vf-flash { animation: none; opacity: 0.3; }
}

.vf-readout {
  position: absolute;
  left: 14px;
  bottom: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--muted);
}

.vf-readout span {
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  backdrop-filter: blur(4px);
}

#vfSetting {
  transition: opacity 0.3s ease;
}
`;
