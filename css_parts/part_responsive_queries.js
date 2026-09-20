module.exports = `/* ========== RESPONSIVE MEDIA QUERIES ========== */

/* Laptop / Medium Desktop: 1024px */
@media (max-width: 1024px) {
  :root {
    --section-padding: 4.4rem;
  }
  
  .workflow-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .pricing-grid, .tiers {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .tier {
    padding: 1.8rem 1.3rem;
  }
}

/* Tablet: 900px */
@media (max-width: 900px) {
  .nav-hamburger {
    display: flex;
  }
  
  .nav-ai-btn {
    display: none;
  }
  
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 1.4rem 24px 1.8rem;
    flex-direction: column;
    gap: 1.1rem;
    z-index: 999;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }
  
  .nav-links.active {
    display: flex;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.8rem;
  }

  .viewfinder {
    max-width: 580px;
    margin: 0 auto;
    width: 100%;
  }

  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-full {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.6rem;
  }

  .feature-full-main {
    flex-direction: column;
    gap: 0.8rem;
  }

  .dash-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dash-main-cols {
    grid-template-columns: 1fr;
  }

  .cal-stage-grid {
    grid-template-columns: 1fr;
  }

  .brand-engine-grid {
    grid-template-columns: 1fr;
  }

  .ai-tab-grid {
    grid-template-columns: 1fr;
  }

  .trust-box {
    grid-template-columns: 1fr;
    padding: 2.2rem 1.8rem;
    gap: 2rem;
  }

  .calc-card {
    grid-template-columns: 1fr;
    padding: 2.2rem 1.8rem;
    gap: 2rem;
  }

  .tiers {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin-inline: auto;
  }

  .tier-for {
    min-height: auto;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 540px;
    margin-inline: auto;
  }

  .final-cta {
    grid-template-columns: 1fr;
    padding: 2.4rem 1.8rem;
    gap: 2rem;
  }
}

/* Mobile: 640px */
@media (max-width: 640px) {
  :root {
    --section-padding: 3.5rem;
  }
  
  body {
    font-size: 15px;
  }
  
  .wrap {
    padding-inline: 18px;
  }
  
  .nav {
    padding: 0.8rem 18px;
  }

  .hero {
    padding-block: 3.2rem 3.8rem;
  }

  .hero h1 {
    font-size: clamp(1.9rem, 8vw, 2.5rem);
  }

  .hero-sub {
    font-size: 0.98rem;
  }

  .hero-ctas {
    flex-direction: column;
    width: 100%;
  }

  .hero-ctas .btn {
    width: 100%;
  }

  .workflow-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .dash-grid {
    grid-template-columns: 1fr;
  }

  .trust-metrics {
    grid-template-columns: 1fr;
  }

  .addons {
    grid-template-columns: 1fr;
  }

  .addon {
    flex-direction: column;
    gap: 0.6rem;
  }

  .stage-content {
    padding: 1.2rem;
  }

  .chart-bars {
    gap: 0.4rem;
  }

  .cal-cell {
    font-size: 0.72rem;
  }

  .cal-grid-days {
    gap: 0.25rem;
  }

  .contact-fab {
    right: auto;
    left: calc(14px + env(safe-area-inset-left, 0px));
    bottom: calc(18px + env(safe-area-inset-bottom, 0px));
    flex-direction: row;
    gap: 0.55rem;
  }

  .contact-fab a {
    width: 40px;
    height: 40px;
  }
}

/* Small Mobile: 480px */
@media (max-width: 480px) {
  .bp-ai-dock {
    right: 8px;
    left: 8px;
    bottom: 10px;
    width: auto;
    max-width: none;
    height: 88vh;
    border-radius: 18px;
  }

  .bp-ai-trigger {
    right: 14px;
    bottom: 14px;
    padding: 0.65rem 1.1rem 0.65rem 0.75rem;
    font-size: 0.82rem;
  }

  .cal-month-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .invoice-mock-box, .tracker-preview-box {
    padding: 1.2rem;
  }

  .calc-card {
    padding: 1.5rem 1.2rem;
  }

  .calc-savings-number {
    font-size: 2.2rem;
  }
}
`;
