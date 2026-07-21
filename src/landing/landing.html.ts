export const LANDING_HTML = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Principium Technology's product portfolio and consulting practice — real, live products and a Fortune 500-grade consulting practice." />
<title>PIAX — Principium Identity, Access &amp; Experience Platform</title>
<style>
  :root {
    --accent: #ffaa48;
    --accent-light: #ffc182;
    --accent-dim: rgba(255, 170, 72, 0.15);
    --bg: #000000;
    --bg-alt: #0a0a0a;
    --bg-card: #141414;
    --border: #262626;
    --text: #f2f2f0;
    --text-dim: #a3a3a0;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
  }
  a { color: inherit; }
  .section { padding: 88px 24px; }
  .section-hero {
    text-align: center;
    padding-top: 120px;
    background: radial-gradient(circle at 50% 0%, #161616 0%, #000 60%);
  }
  .section-alt { background: var(--bg-alt); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .inner { max-width: 1140px; margin: 0 auto; }
  .eyebrow {
    display: inline-block;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent-light);
    background: var(--accent-dim);
    border: 1px solid var(--accent);
    border-radius: 999px;
    padding: 4px 14px;
    margin-bottom: 24px;
  }
  h1 {
    font-size: clamp(40px, 6vw, 64px);
    margin: 0 0 16px;
    letter-spacing: -0.02em;
  }
  h1 span { color: var(--accent-light); }
  .subtitle {
    font-size: clamp(16px, 2vw, 19px);
    color: var(--text-dim);
    max-width: 620px;
    margin: 0 auto 32px;
  }
  .btn-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn {
    display: inline-block;
    padding: 14px 30px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .btn-primary { background: var(--accent); color: #000; }
  .btn-primary:hover { background: var(--accent-light); }
  .btn-secondary { border: 1px solid var(--accent); color: var(--accent-light); }
  .btn-secondary:hover { background: var(--accent-dim); }
  h2 {
    font-size: clamp(24px, 3vw, 32px);
    margin: 0 0 8px;
    text-align: center;
  }
  .section-lead {
    font-size: 16px;
    color: var(--text-dim);
    text-align: center;
    max-width: 620px;
    margin: 0 auto 40px;
  }
  .consulting-tag {
    color: var(--accent-light);
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 8px;
  }
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 0 0 48px;
  }
  .pillar-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
  }
  .pillar-title { font-size: 15px; font-weight: 700; color: var(--text); margin: 0 0 8px; }
  .pillar-desc { font-size: 14px; color: var(--text-dim); margin: 0; }
  .stat-row {
    display: flex;
    justify-content: center;
    gap: 56px;
    flex-wrap: wrap;
    padding-top: 32px;
    border-top: 1px solid var(--border);
    margin-bottom: 40px;
  }
  .stat { text-align: center; }
  .stat-num { font-size: 24px; font-weight: 700; color: var(--accent-light); }
  .stat-label { font-size: 12px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; }
  .center { text-align: center; }
  .category-title { font-size: 17px; font-weight: 600; color: var(--text); margin: 44px 0 4px; }
  .category-title:first-of-type { margin-top: 0; }
  .category-blurb { font-size: 14px; color: var(--text-dim); margin: 0 0 4px; }
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 16px;
  }
  .product-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 26px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none;
    color: var(--text);
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .product-card:not(.disabled):hover { border-color: var(--accent); transform: translateY(-2px); }
  .product-card.disabled { opacity: 0.55; cursor: default; }
  .product-name { font-size: 19px; font-weight: 600; }
  .product-desc { font-size: 13px; color: var(--text-dim); margin: 0; }
  .product-logo {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: var(--accent-dim);
    border: 1px solid var(--accent);
    color: var(--accent-light);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .badge {
    align-self: flex-start;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .badge.live { background: var(--accent-dim); color: var(--accent-light); border: 1px solid var(--accent); }
  .badge.soon { background: rgba(163, 163, 160, 0.1); color: var(--text-dim); border: 1px solid var(--border); }
  .footer-cta { text-align: center; }
  .footer-cta h2 { margin-bottom: 12px; }
  .footer-cta p { margin-bottom: 32px; }
  .copyright {
    text-align: center;
    font-size: 13px;
    color: var(--text-dim);
    padding: 32px 24px;
  }
</style>
</head>
<body>

  <section class="section section-hero">
    <div class="inner">
      <span class="eyebrow">Principium Technology</span>
      <h1>PI<span>AX</span></h1>
      <p class="subtitle">
        A portfolio of live AI products and a Fortune 500-grade consulting
        practice, built by Principium Technology.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#products">Explore products</a>
        <a class="btn btn-secondary" href="https://calendly.com/aonifade/principium-call" target="_blank" rel="noopener">Partner with us</a>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="inner">
      <p class="consulting-tag">Principium Technology &amp; Partners</p>
      <h2>Consulting</h2>
      <p class="section-lead">
        Enterprise AI, data, security, and transformation consulting — from
        a single assessment to a multi-year partnership, for teams from
        early-stage to Fortune 500.
      </p>

      <div class="pillars-grid">
        <div class="pillar-card">
          <h3 class="pillar-title">Products &amp; SaaS</h3>
          <p class="pillar-desc">Messaging, ERP/CRM, capital markets, and security platforms.</p>
        </div>
        <div class="pillar-card">
          <h3 class="pillar-title">Data &amp; Analytics</h3>
          <p class="pillar-desc">BI, real-time integration, and data engineering.</p>
        </div>
        <div class="pillar-card">
          <h3 class="pillar-title">AI &amp; Engineering</h3>
          <p class="pillar-desc">Automation, IoT, custom software, cloud and DevOps.</p>
        </div>
        <div class="pillar-card">
          <h3 class="pillar-title">Enterprise &amp; Security</h3>
          <p class="pillar-desc">ServiceNow, Atlassian, IAM, vendor risk, managed services.</p>
        </div>
      </div>

      <div class="stat-row">
        <div class="stat">
          <div class="stat-num">$73B+</div>
          <div class="stat-label">Transactions protected</div>
        </div>
        <div class="stat">
          <div class="stat-num">$59B+</div>
          <div class="stat-label">Mergers &amp; divestitures</div>
        </div>
        <div class="stat">
          <div class="stat-num">25+</div>
          <div class="stat-label">Years experience</div>
        </div>
      </div>

      <div class="center">
        <a class="btn btn-primary" href="https://principiumtechnology.com" target="_blank" rel="noopener">Visit Principium Technology</a>
      </div>
    </div>
  </section>

  <section class="section" id="products">
    <div class="inner">
      <h2>What we're building</h2>
      <p class="section-lead">Real products, live today — sign up or start a trial like any other user.</p>

      <h3 class="category-title">PropTech &amp; Real Estate</h3>
      <p class="category-blurb">For builders, owners, and landlords.</p>
      <div class="products">
        <a class="product-card" href="https://www.quickestimate.ai" target="_blank" rel="noopener">
          <span class="product-logo">QE</span>
          <span class="badge live">Live</span>
          <span class="product-name">QuickEstimate</span>
          <p class="product-desc">AI job estimates for contractors, in seconds.</p>
        </a>
        <a class="product-card" href="https://www.myhomethreesixty.com" target="_blank" rel="noopener">
          <span class="product-logo">H3</span>
          <span class="badge live">Live</span>
          <span class="product-name">Home360</span>
          <p class="product-desc">Track and understand your home, intelligently.</p>
        </a>
        <a class="product-card" href="https://www.getrentfast.com" target="_blank" rel="noopener">
          <span class="product-logo">RF</span>
          <span class="badge live">Live</span>
          <span class="product-name">RentFast</span>
          <p class="product-desc">Fast rent collection, no subscription.</p>
        </a>
      </div>

      <h3 class="category-title">Founder &amp; Small Business Tools</h3>
      <p class="category-blurb">For coaches, consultants, and founders.</p>
      <div class="products">
        <a class="product-card" href="https://www.onboardstudio.app" target="_blank" rel="noopener">
          <span class="product-logo">OS</span>
          <span class="badge live">Live</span>
          <span class="product-name">OnboardStudio</span>
          <p class="product-desc">Client onboarding kits in minutes.</p>
        </a>
        <a class="product-card" href="https://www.pricedwise.com" target="_blank" rel="noopener">
          <span class="product-logo">PW</span>
          <span class="badge live">Live</span>
          <span class="product-name">PricedWise</span>
          <p class="product-desc">Calculate your sustainable freelance rate.</p>
        </a>
        <a class="product-card" href="https://www.zerosalesreps.com" target="_blank" rel="noopener">
          <span class="product-logo">ZS</span>
          <span class="badge live">Live</span>
          <span class="product-name">ZeroSalesReps</span>
          <p class="product-desc">Automated customer acquisition for early SaaS.</p>
        </a>
        <a class="product-card" href="https://www.theaiaesthetician.com" target="_blank" rel="noopener">
          <span class="product-logo">AI</span>
          <span class="badge live">Live</span>
          <span class="product-name">AI Aesthetician</span>
          <p class="product-desc">AI front desk for med spas, 24/7.</p>
        </a>
      </div>

      <h3 class="category-title">Data, Risk &amp; Business Intelligence</h3>
      <p class="category-blurb">Turning messy data into decisions.</p>
      <div class="products">
        <a class="product-card" href="https://www.poradata.com" target="_blank" rel="noopener">
          <span class="product-logo">PC</span>
          <span class="badge soon">Beta</span>
          <span class="product-name">Pora Cloud</span>
          <p class="product-desc">Turn messy data into structured intelligence.</p>
        </a>
        <div class="product-card disabled">
          <span class="product-logo">VV</span>
          <span class="badge soon">In development</span>
          <span class="product-name">Vendor Vault</span>
          <p class="product-desc">Discover, classify, and monitor vendor risk — free.</p>
        </div>
      </div>

      <h3 class="category-title">50+ Lifestyle &amp; Content</h3>
      <p class="category-blurb">For thriving after 50.</p>
      <div class="products">
        <a class="product-card" href="https://www.seasoneds.com" target="_blank" rel="noopener">
          <span class="product-logo">SE</span>
          <span class="badge live">Live</span>
          <span class="product-name">Seasoneds</span>
          <p class="product-desc">The authority content platform for 50+ professionals.</p>
        </a>
        <a class="product-card" href="https://www.tripsnearby.com" target="_blank" rel="noopener">
          <span class="product-logo">TN</span>
          <span class="badge live">Live</span>
          <span class="product-name">TripsNearby</span>
          <p class="product-desc">Road trips and getaways, personalized.</p>
        </a>
        <a class="product-card" href="https://www.coachedbybukky.com" target="_blank" rel="noopener">
          <span class="product-logo">CB</span>
          <span class="badge live">Live</span>
          <span class="product-name">Coached by Bukky</span>
          <p class="product-desc">Business coaching for women 45+.</p>
        </a>
      </div>

      <h3 class="category-title">Family &amp; Life Transitions</h3>
      <p class="category-blurb">Support when it matters most.</p>
      <div class="products">
        <a class="product-card" href="https://www.monpora.com" target="_blank" rel="noopener">
          <span class="product-logo">LH</span>
          <span class="badge live">Live</span>
          <span class="product-name">LegacyHub</span>
          <p class="product-desc">A shared workspace for families coordinating after a loss.</p>
        </a>
      </div>

      <h3 class="category-title">Consumer Marketplace</h3>
      <p class="category-blurb">Delivered to your door.</p>
      <div class="products">
        <a class="product-card" href="https://www.naijapacks.com" target="_blank" rel="noopener">
          <span class="product-logo">NP</span>
          <span class="badge live">Live</span>
          <span class="product-name">NaijaPacks</span>
          <p class="product-desc">Authentic West African food, delivered fast.</p>
        </a>
      </div>
    </div>
  </section>

  <section class="section section-alt footer-cta">
    <div class="inner">
      <h2>Let's talk</h2>
      <p class="section-lead">Investor, partner, or just curious what we're building? We'd love to hear from you.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://calendly.com/aonifade/principium-call" target="_blank" rel="noopener">Book a call</a>
        <a class="btn btn-secondary" href="mailto:principiumtechnology@gmail.com">Email us</a>
      </div>
    </div>
  </section>

  <p class="copyright">PIAX · Principium Technology</p>

</body>
</html>
`;
