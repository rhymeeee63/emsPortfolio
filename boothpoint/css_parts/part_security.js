module.exports = `/* ========== SECURITY / BUILT-IN PROTECTION SECTION ========== */
.security-section {
  position: relative;
  padding-block: 5rem;
  background: var(--surface-2);
  border-block: 1px solid var(--border);
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.sec-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.6rem 1.4rem;
  transition: transform var(--transition-medium), border-color var(--transition-medium);
}

.sec-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

/* The figure is the headline of each card -- it is the part a skimming
   buyer reads, so it carries the same serif/accent treatment as the
   trust metrics rather than inventing a second visual language. */
.sec-num {
  font-family: 'Fraunces', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.7rem;
}

.sec-num small {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.75;
  margin-left: 0.1em;
}

.sec-card h3 {
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.45rem;
  color: var(--ink);
}

.sec-card p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.55;
  margin: 0;
}

.sec-card em {
  font-style: normal;
  color: var(--ink);
  font-weight: 600;
}

@media (max-width: 900px) {
  .security-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .security-section { padding-block: 3.5rem; }
  .security-grid { grid-template-columns: 1fr; gap: 1rem; }
  .sec-num { font-size: 1.75rem; }
}
`;
