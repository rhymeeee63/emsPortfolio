module.exports = `/* --- Tab 3: Invoicing UI --- */
.invoice-mock-box {
  max-width: 600px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.8rem;
  box-shadow: var(--shadow);
}

.inv-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.2rem;
}

.inv-brand strong {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: 1.1rem;
  color: var(--ink);
}

.inv-brand span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  color: var(--muted);
}

.inv-meta {
  text-align: right;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  color: var(--muted);
}

.inv-items {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.4rem;
}

.inv-items th {
  text-align: left;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
}

.inv-items th:last-child {
  text-align: right;
}

.inv-items td {
  padding: 0.65rem 0;
  font-size: 0.82rem;
  border-bottom: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
}

.inv-items td:last-child {
  text-align: right;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
}

.inv-totals {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.inv-qr-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
}

/* --- Tab 4: Public Client Tracker UI --- */
.tracker-preview-box {
  max-width: 620px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.8rem;
  box-shadow: var(--shadow);
}

.tracker-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.4rem;
}

.tracker-title h4 {
  font-size: 1.05rem;
  font-family: 'Fraunces', serif;
  color: var(--ink);
}

.tracker-title p {
  font-size: 0.72rem;
  color: var(--muted);
  font-family: 'IBM Plex Mono', monospace;
  margin-top: 0.15rem;
}

.tracker-timeline {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.tracker-step-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.tracker-step-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--muted);
  font-family: 'IBM Plex Mono', monospace;
}

.tracker-step-row.completed .tracker-step-icon {
  background: var(--good);
  color: #fff;
  border-color: var(--good);
}

.tracker-step-row.active .tracker-step-icon {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--accent);
}

.tracker-step-info strong {
  font-size: 0.86rem;
  color: var(--ink);
  display: block;
}

.tracker-step-info span {
  font-size: 0.74rem;
  color: var(--muted);
}
`;
