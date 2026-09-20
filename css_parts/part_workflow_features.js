module.exports = `/* ========== WORKFLOW PIPELINE ========== */
.workflow-section {
  position: relative;
  background: color-mix(in srgb, var(--surface) 65%, var(--bg));
  border-bottom: 1px solid var(--border);
  padding-block: 5rem;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.workflow-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.8rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.3rem;
  transition: transform var(--transition-medium), border-color var(--transition-medium), box-shadow var(--transition-medium);
  overflow: hidden;
}

.workflow-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, color-mix(in srgb, var(--accent) 12%, transparent), transparent 65%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.workflow-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 55%, var(--border));
  box-shadow: 0 18px 36px -18px color-mix(in srgb, var(--accent) 25%, transparent);
}

.workflow-card:hover::before {
  opacity: 1;
}

.workflow-step-num {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1;
  color: var(--accent);
  opacity: 0.9;
  letter-spacing: -0.04em;
}

.workflow-content h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.45rem;
}

.workflow-content p {
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.52;
}

.workflow-pill {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--muted);
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.35rem 0.65rem;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.workflow-pill span {
  color: var(--muted);
}

/* ========== FEATURES BENTO GRID ========== */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.8rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: transform var(--transition-medium), border-color var(--transition-medium), box-shadow var(--transition-medium);
}

.feature:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
  box-shadow: var(--shadow);
}

.feature-icon {
  width: 26px;
  height: 26px;
  color: var(--accent);
}

.feature h3 {
  font-size: 1.12rem;
  font-weight: 600;
}

.feature p {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

/* Full-width audit log bento card */
.feature-full {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2.2rem;
}

.feature-full-main {
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;
  max-width: 680px;
}

.feature-full-main h3 {
  font-size: 1.18rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.feature-full-main p {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  align-items: center;
}

.feature-pill {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, var(--surface-2));
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
}
`;
