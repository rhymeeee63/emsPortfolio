module.exports = `/* ========== FINAL CTA & CHANNELS ========== */
.final-cta {
  border-radius: 14px;
  padding: 3.4rem 2.8rem;
  background: radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--accent) 12%, var(--surface-2)), var(--surface-2));
  border: 1px solid var(--border);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.8rem;
  align-items: center;
  box-shadow: var(--shadow);
}

.final-cta h2 {
  font-size: clamp(1.7rem, 3.4vw, 2.3rem);
  line-height: 1.15;
}

.final-cta p {
  margin: 0.85rem 0 0;
  max-width: 52ch;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.62;
}

.cta-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  background-size: 200% 200%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 100px;
  padding: 0.42rem 0.95rem;
  margin-top: 1.3rem;
  box-shadow: 0 4px 18px -2px rgba(26, 67, 245, 0.45);
  animation: ctaColorPulse 3s ease-in-out infinite;
  z-index: 1;
}

.cta-badge::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  opacity: 0.4;
  filter: blur(6px);
  z-index: -1;
  animation: ctaGlowPulse 3s ease-in-out infinite;
  pointer-events: none;
}

.cta-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
  display: inline-block;
  flex-shrink: 0;
}

@keyframes ctaColorPulse {
  0%, 100% {
    background-position: 0% 50%;
    box-shadow: 0 4px 16px -2px rgba(26, 67, 245, 0.45);
    filter: brightness(1);
  }
  50% {
    background-position: 100% 50%;
    box-shadow: 0 6px 26px 4px rgba(123, 47, 247, 0.65);
    filter: brightness(1.2);
  }
}

@keyframes ctaGlowPulse {
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.75;
  }
}

.final-cta-channels {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.channel-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  text-decoration: none;
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all var(--transition-medium);
}

.channel-btn:hover {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 6%, var(--surface));
  transform: translateX(4px);
}

.channel-btn.primary-channel {
  background: linear-gradient(120deg, var(--accent), var(--accent-2));
  color: #fff;
  border-color: transparent;
  box-shadow: 0 10px 24px -12px rgba(26, 67, 245, 0.6);
}

.channel-btn.primary-channel .channel-tag {
  color: rgba(255, 255, 255, 0.88);
}

.channel-btn.primary-channel .channel-left svg {
  color: #fff;
}

.channel-btn.primary-channel:hover {
  transform: translateX(4px) translateY(-2px);
  box-shadow: 0 16px 30px -12px rgba(26, 67, 245, 0.75);
}

.channel-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.channel-left svg {
  width: 20px;
  height: 20px;
  color: var(--accent);
  flex-shrink: 0;
}

.channel-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  color: var(--muted);
  font-weight: 500;
}

/* ========== FOOTER ========== */
footer {
  padding: 2.6rem 24px 3rem;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.foot-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.84rem;
  color: var(--muted);
}

.foot-inner strong {
  color: var(--ink);
  font-family: 'Fraunces', serif;
}

/* ========== FLOATING CONTACT FAB (LEFT SIDE) ========== */
.contact-fab {
  position: fixed;
  z-index: 900;
  left: calc(20px + env(safe-area-inset-left, 0px));
  right: auto;
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.contact-fab a {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--ink);
  box-shadow: 0 8px 22px -6px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  transition: transform var(--transition-medium), border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-medium);
}

.contact-fab a:hover {
  transform: translateY(-3px) scale(1.08);
  border-color: var(--accent);
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  box-shadow: 0 12px 28px -6px rgba(26, 67, 245, 0.65);
}

.contact-fab a:active {
  transform: scale(0.92);
}

.contact-fab svg {
  width: 19px;
  height: 19px;
}

/* ========== FLOATING SCROLL-TO-TOP BUTTON (RIGHT SIDE) ========== */
.scroll-top-btn {
  position: fixed;
  z-index: 900;
  right: calc(20px + env(safe-area-inset-right, 0px));
  bottom: calc(84px + env(safe-area-inset-bottom, 0px));
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--ink);
  box-shadow: 0 8px 22px -6px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.92);
  transition: opacity var(--transition-medium), visibility var(--transition-medium), transform var(--transition-medium), border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-medium);
}

.scroll-top-btn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.scroll-top-btn:hover {
  transform: translateY(-3px) scale(1.08);
  border-color: var(--accent);
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  box-shadow: 0 12px 28px -6px rgba(26, 67, 245, 0.65);
}

.scroll-top-btn:active {
  transform: scale(0.92);
}

.scroll-top-btn svg {
  width: 20px;
  height: 20px;
}
`;
