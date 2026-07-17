export const LANDING_HTML = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Principium Technology's product portfolio and consulting practice — real, live products across real estate, small business tools, 50+ lifestyle content, data & risk, and consumer marketplaces." />
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
    max-width: 680px;
  }
  h2 {
    font-size: 22px;
    margin: 56px 0 16px;
    color: var(--text);
  }
  p { color: var(--text-dim); font-size: 16px; margin: 0 0 12px; }
  .category-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    margin: 40px 0 4px;
  }
  .category-blurb {
    font-size: 14px;
    color: var(--text-dim);
    margin: 0 0 4px;
    max-width: 640px;
  }
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
  .consulting-tag {
    color: var(--accent-light);
    font-weight: 600;
    font-size: 15px;
    margin: 0 0 16px;
  }
  .consulting-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 16px;
  }
  .consulting-pillar-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
  }
  .pillar-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--accent-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 12px;
  }
  .consulting-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .consulting-list li {
    font-size: 14px;
    color: var(--text-dim);
    padding-left: 18px;
    position: relative;
    margin-bottom: 8px;
  }
  .consulting-list li:last-child { margin-bottom: 0; }
  .consulting-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent-light);
  }
  .consulting-link {
    display: inline-block;
    margin-top: 20px;
    color: var(--accent-light);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
    padding-bottom: 2px;
  }
  .consulting-link:hover { color: var(--text); border-color: var(--text); }
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
    <span class="eyebrow">Principium Technology · Portfolio Overview</span>
    <h1>PI<span>AX</span></h1>
    <p class="subtitle">
      Principium Technology builds and operates a portfolio of applied-AI
      products — spanning real estate, small business tools, 50+ lifestyle
      content, data &amp; risk, and consumer marketplaces — alongside a
      Fortune 500-grade enterprise consulting practice. This page is a live
      look at what we've built and how to access it.
    </p>

    <h2>What we do</h2>
    <p>
      Principium Technology is a builder and operator, not just an idea.
      Our consulting practice delivers enterprise-grade AI, transformation,
      and risk engagements — informing and funding a growing portfolio of
      real, live products, each solving a specific problem for a specific
      customer, from contractors and landlords to solo consultants and
      families.
    </p>

    <h2>Consulting</h2>
    <p class="consulting-tag">Principium Technology &amp; Partners — Comprehensive Digital Transformation &amp; Security Solutions</p>
    <p>
      Principium Technology &amp; Partners runs a boutique consulting
      practice that combines proprietary SaaS platforms with deep expertise
      across data, AI, enterprise platforms, and security — 25+ years of
      combined enterprise experience, serving clients from growing teams to
      Fortune 500 organizations. Fractional and project-based arrangements
      available.
    </p>
    <div class="consulting-grid">
      <div class="consulting-pillar-card">
        <h4 class="pillar-title">Proprietary Products &amp; SaaS</h4>
        <ul class="consulting-list">
          <li>Messaging &amp; communication platform — bulk/transactional SMS, WhatsApp Business, voice SMS, OTP &amp; alerts</li>
          <li>ERP / CRM SaaS platform — sales &amp; CRM, inventory, HR &amp; payroll, accounting, reporting</li>
          <li>Capital markets platform — investor CRM, portfolio management, trade operations, investor self-service portal</li>
          <li>Security &amp; fraud risk management — VendorVault, SecurityAware, BEC Defense &amp; Monitoring Suite</li>
        </ul>
      </div>

      <div class="consulting-pillar-card">
        <h4 class="pillar-title">Data, Analytics &amp; Integration</h4>
        <ul class="consulting-list">
          <li>BI &amp; conversational analytics — Qlik Sense, Power BI, predictive analytics, natural-language insight discovery</li>
          <li>Data integration &amp; replication — Qlik CDC-based replication, real-time multi-source pipelines</li>
          <li>Data engineering — Talend ETL/ELT, data quality &amp; governance, API integration</li>
        </ul>
      </div>

      <div class="consulting-pillar-card">
        <h4 class="pillar-title">AI, IoT &amp; Engineering</h4>
        <ul class="consulting-list">
          <li>AI &amp; intelligent automation — machine learning, NLP, chatbots, computer vision</li>
          <li>IoT solutions — device integration, remote monitoring, sensor analytics, smart dashboards</li>
          <li>Custom software engineering — web, mobile, API development, cloud-native, modernization</li>
          <li>Cloud, DevOps &amp; platform engineering — infrastructure, CI/CD, deployment automation</li>
        </ul>
      </div>

      <div class="consulting-pillar-card">
        <h4 class="pillar-title">Enterprise Platforms &amp; Cybersecurity</h4>
        <ul class="consulting-list">
          <li>ServiceNow &amp; enterprise service management — ITSM, CMDB, workflow automation</li>
          <li>Atlassian &amp; Jira transformation — cloud migration, Jira Service Management, Confluence</li>
          <li>Cybersecurity, IAM &amp; Zero Trust — identity governance, MFA, conditional access, endpoint security</li>
          <li>Vendor risk &amp; security governance — audits, BEC/fraud risk assessment, continuous compliance monitoring</li>
          <li>Managed services &amp; resource augmentation — 24×7 support, platform administration, staffing</li>
        </ul>
      </div>

      <div class="consulting-pillar-card">
        <h4 class="pillar-title">Engagement Models</h4>
        <ul class="consulting-list">
          <li>Project-based consulting — scoped from focused strategic assessments through full-scale platform implementations</li>
          <li>Managed services &amp; retainers — ongoing monitoring, platform administration, and staffing support, sized to fit</li>
          <li>SaaS subscriptions — VendorVault and SecurityAware available as flexible, self-serve subscriptions, plus custom enterprise pricing</li>
        </ul>
      </div>

      <div class="consulting-pillar-card">
        <h4 class="pillar-title">Why Principium &amp; Partners</h4>
        <ul class="consulting-list">
          <li>End-to-end — strategy, implementation, and ongoing managed services</li>
          <li>Proprietary technology paired with deep consulting expertise</li>
          <li>Boutique responsiveness with enterprise-grade capability — from growing teams to Fortune 500 clients</li>
          <li>Security-first in every engagement, not an afterthought</li>
          <li>Ground-truth expertise — $73B+ in transactions protected, 5,000+ domains secured at scale</li>
          <li>Scalable — from a single assessment to a multi-year strategic partnership</li>
        </ul>
      </div>
    </div>
    <a class="consulting-link" href="https://principiumtechnology.com" target="_blank" rel="noopener">Visit Principium Technology →</a>

    <h2>What we're building</h2>
    <p>
      Every product below is real and reachable today — click through and
      sign up, start a trial, or explore exactly as any customer would. Some
      are established and monetizing, others are in active beta or early
      development.
    </p>

    <h3 class="category-title">PropTech &amp; Real Estate</h3>
    <p class="category-blurb">Software for the people who build, own, manage, and rent real estate.</p>
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
      <a class="product-card" href="https://www.getrentfast.com" target="_blank" rel="noopener">
        <span class="product-logo">RF</span>
        <span class="badge live">Live</span>
        <span class="product-name">RentFast</span>
        <p class="product-desc">Fast, transparent rent collection for independent property managers — no subscription, just faster payouts.</p>
      </a>
    </div>

    <h3 class="category-title">Founder &amp; Small Business Tools</h3>
    <p class="category-blurb">Practical, revenue-ready tools for coaches, consultants, freelancers, and early-stage founders.</p>
    <div class="products">
      <a class="product-card" href="https://www.onboardstudio.app" target="_blank" rel="noopener">
        <span class="product-logo">OS</span>
        <span class="badge live">Live</span>
        <span class="product-name">OnboardStudio</span>
        <p class="product-desc">Generate a polished client onboarding kit — welcome messages, questionnaires, and checklists.</p>
      </a>
      <a class="product-card" href="https://www.pricedwise.com" target="_blank" rel="noopener">
        <span class="product-logo">PW</span>
        <span class="badge live">Live</span>
        <span class="product-name">PricedWise</span>
        <p class="product-desc">Calculate a sustainable freelance or consulting rate based on your real income goals and capacity.</p>
      </a>
      <a class="product-card" href="https://www.zerosalesreps.com" target="_blank" rel="noopener">
        <span class="product-logo">ZS</span>
        <span class="badge live">Live</span>
        <span class="product-name">ZeroSalesReps</span>
        <p class="product-desc">Autonomous customer acquisition for early-stage SaaS — finds, nurtures, and converts leads automatically.</p>
      </a>
      <a class="product-card" href="https://www.theaiaesthetician.com" target="_blank" rel="noopener">
        <span class="product-logo">AI</span>
        <span class="badge live">Live</span>
        <span class="product-name">AI Aesthetician</span>
        <p class="product-desc">An AI front desk for med spas that answers missed calls and books consultations 24/7.</p>
      </a>
    </div>

    <h3 class="category-title">Data, Risk &amp; Business Intelligence</h3>
    <p class="category-blurb">Turning messy information and third-party relationships into structured, manageable risk.</p>
    <div class="products">
      <a class="product-card" href="https://www.poradata.com" target="_blank" rel="noopener">
        <span class="product-logo">PC</span>
        <span class="badge soon">Beta</span>
        <span class="product-name">Pora Cloud</span>
        <p class="product-desc">AI-powered data intelligence — turning messy information into usable, structured intelligence. Development ongoing, open for testing.</p>
      </a>
      <div class="product-card disabled">
        <span class="product-logo">VV</span>
        <span class="badge soon">In development</span>
        <span class="product-name">Vendor Vault</span>
        <p class="product-desc">A free, cloud-based vendor risk management platform that enables organizations to efficiently discover, classify, and manage third-party vendor risk.</p>
      </div>
    </div>

    <h3 class="category-title">50+ Lifestyle &amp; Content</h3>
    <p class="category-blurb">A content-led ecosystem serving one of the fastest-growing, highest-spending demographics in the US.</p>
    <div class="products">
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
      <a class="product-card" href="https://www.coachedbybukky.com" target="_blank" rel="noopener">
        <span class="product-logo">CB</span>
        <span class="badge live">Live</span>
        <span class="product-name">Coached by Bukky</span>
        <p class="product-desc">Business coaching for women professionals 45+ turning experience into a service-based business.</p>
      </a>
    </div>

    <h3 class="category-title">Family &amp; Life Transitions</h3>
    <p class="category-blurb">Tools for the parts of life that don't come with a manual.</p>
    <div class="products">
      <a class="product-card" href="https://www.monpora.com" target="_blank" rel="noopener">
        <span class="product-logo">LH</span>
        <span class="badge live">Live</span>
        <span class="product-name">LegacyHub</span>
        <p class="product-desc">One calm, shared workspace for families coordinating tasks, documents, and planning after a loss.</p>
      </a>
    </div>

    <h3 class="category-title">Consumer Marketplace</h3>
    <p class="category-blurb">Direct-to-consumer products serving underserved communities.</p>
    <div class="products">
      <a class="product-card" href="https://www.naijapacks.com" target="_blank" rel="noopener">
        <span class="product-logo">NP</span>
        <span class="badge live">Live</span>
        <span class="product-name">NaijaPacks</span>
        <p class="product-desc">Authentic West African food from local caterers, delivered fast across US cities.</p>
      </a>
    </div>

    <footer>
      PIAX · Principium Technology — a live look at our product portfolio and consulting practice.
    </footer>
  </div>
</body>
</html>
`;
