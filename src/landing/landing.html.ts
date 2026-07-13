export const LANDING_HTML = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PIAX — Principium Identity, Access &amp; Experience Platform</title>
<style>
  :root {
    --green: #2d6a4f;
    --green-light: #40916c;
    --green-dim: rgba(45, 106, 79, 0.15);
    --bg: #0b0f0d;
    --bg-card: #121713;
    --border: #1f2a22;
    --text: #eef2ef;
    --text-dim: #9fb3a6;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: radial-gradient(circle at 20% 0%, #0f1712 0%, var(--bg) 55%);
    color: var(--text);
    line-height: 1.6;
  }
  .wrap { max-width: 960px; margin: 0 auto; padding: 72px 24px 96px; }
  .eyebrow {
    display: inline-block;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--green-light);
    background: var(--green-dim);
    border: 1px solid var(--green);
    border-radius: 999px;
    padding: 4px 14px;
    margin-bottom: 24px;
  }
  h1 {
    font-size: 44px;
    margin: 0 0 8px;
    letter-spacing: -0.02em;
  }
  h1 span { color: var(--green-light); }
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
    color: var(--green-light);
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
    border-color: var(--green);
    transform: translateY(-2px);
  }
  .product-card.disabled {
    opacity: 0.55;
    cursor: default;
  }
  .product-name { font-size: 20px; font-weight: 600; }
  .product-desc { font-size: 14px; color: var(--text-dim); margin: 0; }
  .badge {
    align-self: flex-start;
    font-size: 12px;
    padding: 3px 10px;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .badge.live {
    background: var(--green-dim);
    color: var(--green-light);
    border: 1px solid var(--green);
  }
  .badge.soon {
    background: rgba(159, 179, 166, 0.1);
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
      Principium Identity, Access &amp; Experience Platform — a single, centralized
      way for leadership, business development, and investors to get into every
      Principium product, without individual signups, credit cards, or trial limits.
    </p>

    <h2>What PIAX does</h2>
    <p>
      Each Principium product — QuickEstimate, Home360, Pora Cloud, and whatever
      comes next — manages its own users and its own rules. PIAX doesn't replace
      that. Instead, it sits alongside each product as a small, trusted internal
      integration: one place to grant someone real, working access to all three
      platforms, and one place to revoke it later.
    </p>
    <p>
      No 7-day trial windows. No credit card prompts. No juggling separate
      logins per product. Just a single hub that knows who should have access
      to what, and can prove it with a live, working link.
    </p>

    <h2>How it's built</h2>
    <div class="grid">
      <div class="infra-item">
        <h3>Per-product connectors</h3>
        <p>Each product exposes its own small internal API (grant, magic-link, revoke), authenticated with a shared secret — PIAX never touches another product's database directly.</p>
      </div>
      <div class="infra-item">
        <h3>Magic links</h3>
        <p>Access is delivered as a real, working sign-in link generated through each product's own authentication system — better-auth or Clerk — not a separate password to manage.</p>
      </div>
      <div class="infra-item">
        <h3>Centralized people &amp; grants</h3>
        <p>One record per person, with a clear history of what they've been granted, when, and by whom — auditable from a single place.</p>
      </div>
      <div class="infra-item">
        <h3>Reversible by design</h3>
        <p>Every grant can be revoked independently, per product, without affecting a person's access anywhere else.</p>
      </div>
    </div>

    <h2>Products</h2>
    <div class="products">
      <a class="product-card" href="https://www.quickestimate.ai" target="_blank" rel="noopener">
        <span class="badge live">Live</span>
        <span class="product-name">QuickEstimate</span>
        <p class="product-desc">AI-powered job estimates for contractors — talk or type a job, get a professional estimate in seconds.</p>
      </a>
      <a class="product-card" href="https://www.myhomethreesixty.com" target="_blank" rel="noopener">
        <span class="badge live">Live</span>
        <span class="product-name">Home360</span>
        <p class="product-desc">An intelligent home ownership platform for tracking, maintaining, and understanding your home.</p>
      </a>
      <div class="product-card disabled">
        <span class="badge soon">Coming soon</span>
        <span class="product-name">Pora Cloud</span>
        <p class="product-desc">AI-powered data intelligence — turning messy information into usable, structured intelligence.</p>
      </div>
    </div>

    <footer>
      PIAX · Principium Technology — internal access hub, not a public product.
    </footer>
  </div>
</body>
</html>
`;
