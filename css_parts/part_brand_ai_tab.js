module.exports = `/* --- Tab 5: Brand Engine UI --- */
.brand-engine-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  align-items: center;
}

.brand-live-preview {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 2.2rem 1.8rem;
  text-align: center;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.live-studio-logo {
  font-family: 'Fraunces', serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: #1a43f5;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
  transition: color 0.3s ease;
}

.live-studio-tagline {
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 1.5rem;
}

.live-demo-btn {
  display: inline-block;
  padding: 0.75rem 1.6rem;
  background-color: #1a43f5;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.live-demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.4);
}

.mock-swatches {
  display: flex;
  gap: 0.65rem;
  align-items: center;
}

.mock-swatches i {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--surface), 0 0 0 3px var(--border);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mock-swatches i:hover {
  transform: scale(1.18);
}

/* --- Tab 6: AI Studio Copilot UI --- */
.ai-tab-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

.ai-tab-mock {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.ai-mock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.2rem;
  background: color-mix(in srgb, var(--surface) 60%, var(--surface-2));
  border-bottom: 1px solid var(--border);
}

.ai-mock-bot-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ai-mock-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  box-shadow: 0 0 10px rgba(26, 67, 245, 0.4);
}

.ai-mock-chat {
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ai-mock-msg {
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  font-size: 0.84rem;
  line-height: 1.52;
}

.ai-mock-msg.user {
  background: var(--surface);
  border: 1px solid var(--border);
  align-self: flex-start;
  max-width: 92%;
}

.ai-msg-tag {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  color: var(--flash);
  font-weight: 600;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
}

.ai-mock-msg.bot {
  background: color-mix(in srgb, var(--accent) 8%, var(--surface));
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  align-self: flex-end;
  width: 100%;
}

.ai-pill-action {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--good);
  background: color-mix(in srgb, var(--good) 12%, transparent);
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  margin-bottom: 0.6rem;
  width: fit-content;
}

.ai-mock-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

.ai-mock-btn-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent);
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
}

.ai-tab-sidebar {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ai-feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.ai-feature-item {
  font-size: 0.84rem;
  color: var(--ink);
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  line-height: 1.45;
}

.ai-check {
  color: var(--good);
  font-weight: 700;
  font-family: 'IBM Plex Mono', monospace;
}
`;
