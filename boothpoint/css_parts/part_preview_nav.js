module.exports = `/* ========== INTERACTIVE PREVIEW TOUR ========== */
.preview-tabs-nav {
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  padding-bottom: 0.8rem;
  margin-bottom: 1.8rem;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.preview-tabs-nav::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--muted);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--transition-medium);
}

.tab-btn:hover {
  color: var(--ink);
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
  background: color-mix(in srgb, var(--accent) 6%, var(--surface));
}

.tab-btn.active {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  border-color: transparent;
  box-shadow: 0 8px 20px -6px rgba(26, 67, 245, 0.55);
}

.preview-stage {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.preview-stage:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.stage-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.3rem;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
  gap: 1rem;
}

.frame-dots {
  display: flex;
  gap: 0.4rem;
}

.frame-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--border);
}

.frame-dots span:nth-child(1) { background: #ff5f56; }
.frame-dots span:nth-child(2) { background: #ffbd2e; }
.frame-dots span:nth-child(3) { background: #27c93f; }

.stage-url {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.74rem;
  color: var(--muted);
  background: var(--surface);
  padding: 0.3rem 0.9rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  max-width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.frame-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.66rem;
  font-weight: 600;
  background: color-mix(in srgb, var(--good) 15%, transparent);
  color: var(--good);
  border: 1px solid color-mix(in srgb, var(--good) 30%, transparent);
  padding: 0.2rem 0.55rem;
  border-radius: 100px;
  white-space: nowrap;
}

.stage-content {
  padding: 2rem;
  min-height: 380px;
}

.tab-pane {
  display: none;
  animation: tabFadeIn 0.35s cubic-bezier(0.16, 0.84, 0.44, 1) forwards;
}

.tab-pane.active {
  display: block;
}

@keyframes tabFadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
