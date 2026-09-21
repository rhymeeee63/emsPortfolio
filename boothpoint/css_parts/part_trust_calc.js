module.exports = `/* ========== TRUST & ARCHITECTURE SECTION ========== */
.trust-section {
  position: relative;
  padding-block: 5rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.trust-box {
  background: radial-gradient(ellipse at 15% 30%, color-mix(in srgb, var(--accent) 9%, var(--surface)), var(--surface));
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 3rem 2.6rem;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 2.8rem;
  align-items: center;
  box-shadow: var(--shadow);
}

.trust-header h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.45rem, 2.8vw, 2rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0.85rem;
}

.trust-header p {
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.58;
}

.trust-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.trust-metric-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.35rem 1.2rem;
  transition: transform var(--transition-medium), border-color var(--transition-medium);
}

.trust-metric-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.trust-metric-val {
  font-family: 'Fraunces', serif;
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.trust-metric-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.trust-metric-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.45;
}

/* ========== INTERACTIVE ROI / SAVINGS CALCULATOR ========== */
.calc-section {
  padding: 5.2rem 0;
  background: var(--surface-2);
  border-block: 1px solid var(--border);
}

.calc-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 2.8rem;
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.8rem;
  align-items: center;
}

.calc-control {
  margin-bottom: 1.6rem;
}

.calc-control:last-child {
  margin-bottom: 0;
}

.calc-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}

.calc-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink);
}

.calc-value-pill {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
}

.calc-range {
  width: 100%;
  height: 8px;
  border-radius: 6px;
  background: var(--surface-2);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.calc-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(26, 67, 245, 0.6);
  border: 2.5px solid #fff;
  transition: transform 0.15s ease;
}

.calc-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.calc-range::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(26, 67, 245, 0.6);
  border: 2.5px solid #fff;
}

.calc-result-box {
  background: linear-gradient(145deg, color-mix(in srgb, var(--accent) 14%, var(--surface-2)), var(--surface-2));
  border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--border));
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.calc-result-lbl {
  font-family: 'Fraunces', serif;
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.4rem;
}

.calc-savings-number {
  font-family: 'IBM Plex Mono', monospace;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.15;
}

.calc-result-sub {
  font-size: 0.84rem;
  color: var(--muted);
  margin-top: 0.45rem;
  line-height: 1.45;
}

.calc-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 1.3rem;
  padding-top: 1.3rem;
  border-top: 1px solid var(--border);
}

.calc-breakdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.84rem;
}

.calc-breakdown-item span {
  color: var(--muted);
}

.calc-breakdown-item strong {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  color: var(--ink);
}
`;
