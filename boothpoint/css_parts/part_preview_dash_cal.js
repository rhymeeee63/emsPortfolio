module.exports = `/* --- Tab 1: Dashboard UI --- */
.dash-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1rem;
  margin-bottom: 1.6rem;
}

.dash-stat {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.15rem 1.1rem;
}

.dash-stat-lbl {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
}

.dash-stat-val {
  font-family: 'Fraunces', serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.2;
}

.dash-stat-trend {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--good);
  margin-top: 0.3rem;
}

.dash-main-cols {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.25rem;
}

.dash-chart-card, .dash-recent-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.3rem;
}

.dash-card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 1.2rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.8rem;
  height: 140px;
  padding-top: 1rem;
}

.chart-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
}

.chart-bar-fill {
  width: 100%;
  max-width: 32px;
  background: linear-gradient(to top, var(--accent), var(--accent-2));
  border-radius: 4px 4px 0 0;
  min-height: 12px;
  transition: height 0.6s ease;
}

.chart-bar-lbl {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  color: var(--muted);
  margin-top: 0.5rem;
}

.recent-event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--border);
}

.recent-event-item:last-child {
  border-bottom: none;
}

.event-info strong {
  display: block;
  font-size: 0.84rem;
  color: var(--ink);
}

.event-info span {
  font-size: 0.72rem;
  color: var(--muted);
}

.event-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.event-badge.paid {
  background: color-mix(in srgb, var(--good) 15%, transparent);
  color: var(--good);
}

.event-badge.pending {
  background: color-mix(in srgb, #f59e0b 15%, transparent);
  color: #f59e0b;
}

/* --- Tab 2: Calendar UI --- */
.cal-stage-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.35rem;
  align-items: stretch;
}

.cal-matrix {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.3rem;
}

.cal-month-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 1rem;
}

.cal-grid-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.4rem;
  text-align: center;
}

.cal-day-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--muted);
  padding-bottom: 0.4rem;
}

.cal-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  position: relative;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.cal-cell:hover {
  border-color: var(--accent);
  transform: scale(1.05);
}

.cal-cell.has-event {
  background: color-mix(in srgb, var(--accent) 15%, var(--surface));
  border-color: var(--accent);
  color: var(--accent);
  font-weight: 700;
}

.cal-cell.has-event::after {
  content: "";
  position: absolute;
  top: 3px;
  right: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.cal-cell.conflict-shield {
  background: color-mix(in srgb, var(--good) 15%, var(--surface));
  border-color: var(--good);
  color: var(--good);
  font-weight: 700;
}

.cal-cell.conflict-shield::after {
  content: "";
  position: absolute;
  top: 3px;
  right: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--good);
}

.cal-event-detail {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cal-shield-banner {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 0.95rem;
  background: color-mix(in srgb, var(--good) 12%, var(--surface));
  border: 1px solid color-mix(in srgb, var(--good) 30%, transparent);
  border-radius: 6px;
  font-size: 0.78rem;
  color: var(--good);
  font-weight: 600;
  margin-bottom: 1.1rem;
}

.mock-pill {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--good);
  background: color-mix(in srgb, var(--good) 12%, transparent);
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
}
`;
