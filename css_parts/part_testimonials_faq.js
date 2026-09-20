module.exports = `/* ========== TESTIMONIALS SECTION ========== */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.35rem;
}

.test-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform var(--transition-medium), border-color var(--transition-medium), box-shadow var(--transition-medium);
}

.test-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
  box-shadow: var(--shadow);
}

.test-stars {
  color: #f59e0b;
  font-size: 0.92rem;
  margin-bottom: 0.9rem;
  letter-spacing: 2px;
}

.test-quote {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.test-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  border-top: 1px solid var(--border);
  padding-top: 1.1rem;
}

.test-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.82rem;
  font-weight: 700;
  flex-shrink: 0;
}

.test-meta strong {
  display: block;
  font-size: 0.88rem;
  color: var(--ink);
}

.test-meta span {
  font-size: 0.74rem;
  color: var(--muted);
}

/* ========== FAQ ACCORDION ========== */
.faq-wrap {
  max-width: 820px;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color var(--transition-medium), box-shadow var(--transition-medium);
}

.faq-item:hover {
  border-color: color-mix(in srgb, var(--accent) 35%, var(--border));
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}

.faq-item.active {
  border-color: color-mix(in srgb, var(--accent) 60%, var(--border));
  background: color-mix(in srgb, var(--accent) 3%, var(--surface));
  box-shadow: 0 4px 18px color-mix(in srgb, var(--accent) 15%, transparent);
}

.faq-trigger {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.4rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  color: var(--ink);
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.06rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color var(--transition-fast);
}

.faq-trigger span:first-child {
  flex: 1;
}

.faq-trigger:hover {
  color: var(--accent);
}

.faq-item.active .faq-trigger {
  color: var(--accent);
  padding-bottom: 0.85rem;
}

.faq-icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--muted);
  font-size: 1.3rem;
  background: color-mix(in srgb, var(--ink) 5%, transparent);
  border-radius: 6px;
  transition: transform 0.35s cubic-bezier(0.16, 0.84, 0.44, 1), background 0.3s ease, color 0.3s ease;
}

.faq-trigger:hover .faq-icon {
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 15%, transparent);
}

.faq-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 0.84, 0.44, 1), padding 0.35s ease;
  padding: 0 1.6rem;
}

.faq-item.active .faq-panel {
  max-height: 500px;
  padding-bottom: 1.5rem;
}

.faq-panel p {
  font-size: 0.94rem;
  line-height: 1.68;
  color: var(--muted);
  font-family: 'Plus Jakarta Sans', sans-serif;
}
`;
