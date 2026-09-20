module.exports = `/* ========== PRICING TIERS ========== */
.tiers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.35rem;
}

.tier {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  position: relative;
  transition: transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-medium);
}

.tier:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
}

.tier.featured {
  border: 2px solid var(--accent);
  background: linear-gradient(to bottom, color-mix(in srgb, var(--accent) 4%, var(--surface)), var(--surface));
  box-shadow: 0 16px 40px -16px rgba(26, 67, 245, 0.25);
}

.tier-pick {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  padding: 0.35rem 1.1rem;
  border-radius: 100px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.tier-name {
  font-size: 1.28rem;
  font-weight: 600;
  font-family: 'Fraunces', serif;
}

.tier-for {
  font-size: 0.84rem;
  color: var(--muted);
  margin-top: 0.15rem;
  min-height: 38px;
}

.tier-price {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 2.35rem;
  font-variant-numeric: tabular-nums;
  color: var(--ink);
  line-height: 1;
}

.tier-price sup {
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 0.15rem;
}

.tier-price small {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--muted);
  text-transform: uppercase;
}

.tier ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-size: 0.88rem;
}

.tier li {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  line-height: 1.45;
}

.tier li::before {
  content: "+";
  color: var(--good);
  font-weight: 700;
  flex-shrink: 0;
  font-family: 'IBM Plex Mono', monospace;
}

.tier-foot {
  margin-top: auto;
  font-size: 0.78rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
  padding-top: 1rem;
}

.pricing-note {
  margin-top: 2.4rem;
  font-size: 0.88rem;
  color: var(--muted);
  max-width: 64ch;
  line-height: 1.55;
}

/* ========== COMPARISON MATRIX TABLE ========== */
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: var(--shadow);
  -webkit-overflow-scrolling: touch;
}

table.compare {
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
}

table.compare thead th {
  text-align: left;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.95rem 1.2rem;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
}

table.compare thead th:not(:first-child) {
  text-align: center;
}

table.compare tbody td {
  padding: 0.78rem 1.2rem;
  font-size: 0.88rem;
  border-bottom: 1px solid var(--border);
}

table.compare tbody tr:last-child td {
  border-bottom: none;
}

table.compare tbody td:not(:first-child) {
  text-align: center;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.84rem;
}

table.compare tbody td:first-child {
  color: var(--ink);
}

table.compare .yes {
  color: var(--good);
  font-weight: 700;
  font-size: 1rem;
}

table.compare .no {
  color: var(--muted);
  opacity: 0.5;
}

table.compare .group-row td {
  background: var(--surface-2);
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  padding: 0.65rem 1.2rem;
}

/* ========== ADD-ONS GRID ========== */
.addons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.addon {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.4rem 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
  align-items: flex-start;
  transition: transform var(--transition-medium), border-color var(--transition-medium);
}

.addon:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.addon h3 {
  font-size: 1.02rem;
  font-weight: 600;
  font-family: 'Fraunces', serif;
}

.addon p {
  margin-top: 0.45rem;
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.5;
}

.addon-price {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 1.15rem;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  color: var(--accent);
}

.addon-price small {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  color: var(--muted);
  font-weight: 500;
}
`;
