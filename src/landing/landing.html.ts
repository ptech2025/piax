export const LANDING_HTML = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PIAX — Principium Identity, Access &amp; Experience Platform</title>
<style>
  :root {
    --accent: #ffaa48;
    --accent-light: #ffc182;
    --accent-dim: rgba(255, 170, 72, 0.15);
    --bg: #000000;
    --bg-card: #121212;
    --border: #262626;
    --text: #f2f2f0;
    --text-dim: #a3a3a0;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: radial-gradient(circle at 20% 0%, #0d0d0d 0%, var(--bg) 55%);
    color: var(--text);
    line-height: 1.6;
  }
  .wrap { max-width: 960px; margin: 0 auto; padding: 72px 24px 96px; }
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
    font-size: 44px;
    margin: 0 0 8px;
    letter-spacing: -0.02em;
  }
  h1 span { color: var(--accent-light); }
  .subtitle {
    font-size: 18px;
    color: var(--text-dim);
    margin: 0 0 40px;
    max-width: 640px;
  }
  h2 {
    font-size: 22px;
    margin: 56px 0 16px;
    color: var(--text);
  }
  p { color: var(--text-dim); font-size: 16px; margin: 0 0 12px; }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 20px;
  }
  .infra-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
  }
  .infra-item h3 {
    margin: 0 0 8px;
    font-size: 15px;
    color: var(--accent-light);
  }
  .infra-item p { font-size: 14px; margin: 0; }
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  .product-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-decoration: none;
    color: var(--text);
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .product-card:not(.disabled):hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
  .product-card.disabled {
    opacity: 0.55;
    cursor: default;
  }
  .product-name { font-size: 20px; font-weight: 600; }
  .product-desc { font-size: 14px; color: var(--text-dim); margin: 0; }
  .product-logo {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--accent-dim);
    border: 1px solid var(--accent);
    color: var(--accent-light);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .badge {
    align-self: flex-start;
    font-size: 12px;
    padding: 3px 10px;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .badge.live {
    background: var(--accent-dim);
    color: var(--accent-light);
    border: 1px solid var(--accent);
  }
  .badge.soon {
    background: rgba(163, 163, 160, 0.1);
    color: var(--text-dim);
    border: 1px solid var(--border);
  }
  footer {
    margin-top: 72px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    font-size: 13px;
    color: var(--text-dim);
  }
</style>
</head>
<body>
  <div class="wrap">
    <span class="eyebrow">Principium Technology · Internal</span>
    <h1>PI<span>AX</span></h1>
    <p class="subtitle">
      Principium Identity, Access &amp; Experience Platform — a single directory
      of every product Principium Technology has built. Pick a tool below and
      sign in, sign up, or start a trial the normal way — same as any other user.
    </p>

    <h2>What PIAX is</h2>
    <p>
      Each Principium product manages its own accounts, trials, and billing,
      exactly like it does for any other customer. PIAX doesn't change or
      bypass that — it's just one page with a link to everything we've built,
      so you don't have to remember a dozen different URLs.
    </p>

    <h2>Products</h2>
    <div class="products">
      <a class="product-card" href="https://www.quickestimate.ai" target="_blank" rel="noopener">
        <span class="product-logo">QE</span>
        <span class="badge live">Live</span>
        <span class="product-name">QuickEstimate</span>
        <p class="product-desc">AI-powered job estimates for contractors — talk or type a job, get a professional estimate in seconds.</p>
      </a>
      <a class="product-card" href="https://www.myhomethreesixty.com" target="_blank" rel="noopener">
        <span class="product-logo">H3</span>
        <span class="badge live">Live</span>
        <span class="product-name">Home360</span>
        <p class="product-desc">An intelligent home ownership platform for tracking, maintaining, and understanding your home.</p>
      </a>
      <div class="product-card disabled">
        <span class="product-logo">PC</span>
        <span class="badge soon">Coming soon</span>
        <span class="product-name">Pora Cloud</span>
        <p class="product-desc">AI-powered data intelligence — turning messy information into usable, structured intelligence.</p>
      </div>
      <a class="product-card" href="https://www.getrentfast.com" target="_blank" rel="noopener">
        <span class="product-logo">RF</span>
        <span class="badge live">Live</span>
        <span class="product-name">RentFast</span>
        <p class="product-desc">Fast, transparent rent collection for independent property managers — no subscription, just faster payouts.</p>
      </a>
      <div class="product-card disabled">
        <span class="product-logo">VV</span>
        <span class="badge soon">In development</span>
        <span class="product-name">Vendor Vault</span>
        <p class="product-desc">Details coming soon.</p>
      </div>
      <a class="product-card" href="https://www.monpora.com" target="_blank" rel="noopener">
        <span class="product-logo">LH</span>
        <span class="badge live">Live</span>
        <span class="product-name">LegacyHub</span>
        <p class="product-desc">One calm, shared workspace for families coordinating tasks, documents, and planning after a loss.</p>
      </a>
      <a class="product-card" href="https://www.seasoneds.com" target="_blank" rel="noopener">
        <span class="product-logo">SE</span>
        <span class="badge live">Live</span>
        <span class="product-name">Seasoneds</span>
        <p class="product-desc">The authority content platform for 50+ professionals — travel, finance, wellness, business, and more.</p>
      </a>
      <a class="product-card" href="https://www.tripsnearby.com" target="_blank" rel="noopener">
        <span class="product-logo">TN</span>
        <span class="badge live">Live</span>
        <span class="product-name">TripsNearby</span>
        <p class="product-desc">Personalized US road trips and weekend getaways within your chosen driving time and budget.</p>
      </a>
      <a class="product-card" href="https://www.pricedwise.com" target="_blank" rel="noopener">
        <span class="product-logo">PW</span>
        <span class="badge live">Live</span>
        <span class="product-name">PricedWise</span>
        <p class="product-desc">Calculate a sustainable freelance or consulting rate based on your real income goals and capacity.</p>
      </a>
      <a class="product-card" href="https://www.onboardstudio.app" target="_blank" rel="noopener">
        <span class="product-logo">OS</span>
        <span class="badge live">Live</span>
        <span class="product-name">OnboardStudio</span>
        <p class="product-desc">Generate a polished client onboarding kit — welcome messages, questionnaires, and checklists.</p>
      </a>
      <a class="product-card" href="https://www.zerosalesreps.com" target="_blank" rel="noopener">
        <span class="product-logo">ZS</span>
        <span class="badge live">Live</span>
        <span class="product-name">ZeroSalesReps</span>
        <p class="product-desc">Autonomous customer acquisition for early-stage SaaS — finds, nurtures, and converts leads automatically.</p>
      </a>
      <a class="product-card" href="https://www.naijapacks.com" target="_blank" rel="noopener">
        <span class="product-logo">NP</span>
        <span class="badge live">Live</span>
        <span class="product-name">NaijaPacks</span>
        <p class="product-desc">Authentic Nigerian food from local caterers, delivered fast across US cities.</p>
      </a>
      <a class="product-card" href="https://www.theaiaesthetician.com" target="_blank" rel="noopener">
        <span class="product-logo">AI</span>
        <span class="badge live">Live</span>
        <span class="product-name">AI Aesthetician</span>
        <p class="product-desc">An AI front desk for med spas that answers missed calls and books consultations 24/7.</p>
      </a>
      <a class="product-card" href="https://www.coachedbybukky.com" target="_blank" rel="noopener">
        <span class="product-logo">CB</span>
        <span class="badge live">Live</span>
        <span class="product-name">Coached by Bukky</span>
        <p class="product-desc">Business coaching for women professionals 45+ turning experience into a service-based business.</p>
      </a>
    </div>

    <footer>
      PIAX · Principium Technology — internal tools directory.
    </footer>
  </div>
</body>
</html>
`;
