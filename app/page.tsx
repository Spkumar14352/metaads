const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#checkout";
const privacyUrl = process.env.NEXT_PUBLIC_PRIVACY_URL || "#";
const termsUrl = process.env.NEXT_PUBLIC_TERMS_URL || "#";
const refundUrl = process.env.NEXT_PUBLIC_REFUND_URL || "#";
const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:support@prodxstore.com";

const included = [
  ["01", "AI Meta Ads Blueprint", "89 pages • 36 chapters", "Strategy, setup, tracking, creative development, execution, measurement, and optimization."],
  ["02", "205-Prompt Vault", "226 pages • 18 categories", "Reusable AI instructions for research, positioning, copy, creative briefs, analysis, and campaign decisions."],
  ["03", "Campaign Planner & Tracker", "Editable Excel workbook", "Plan economics, budgets, hypotheses, and structure—then record daily inputs and review KPIs."],
  ["04", "Meta Ads Launch Checklist", "12-page QA system", "Check setup, tracking, customer journey, campaign build, creative, launch, and the first 30 days."],
  ["05", "Quick Start Guide", "60-minute starting path", "Follow a focused first hour, seven-day implementation plan, operating rules, and final launch check."],
  ["06", "Licence & Terms", "Clear commercial-use rules", "Use the tools internally and create finished client work while protecting the original source files."],
];

const stages = [
  ["Plan", "Define the customer, offer, economics, objective, and test limits."],
  ["Create", "Turn verified inputs into distinct copy and creative hypotheses."],
  ["Launch", "Check the journey, tracking, links, settings, and placements."],
  ["Measure", "Record real campaign inputs and review meaningful KPIs."],
  ["Improve", "Separate facts from hypotheses and make controlled changes."],
];

const faqs = [
  ["Is this a course?", "No. It is a downloadable implementation kit containing PDF guides, a prompt vault, an Excel planner and tracker, a checklist, and licence terms."],
  ["Is advertising spend included?", "No. Advertising spend, AI subscriptions, payment fees, APIs, and other third-party services are not included."],
  ["Do I need Meta ads experience?", "The kit includes a beginner-friendly quick-start path. You remain responsible for campaign settings, compliance, business decisions, and spending."],
  ["Can freelancers and agencies use it?", "Yes. You may use the toolkit internally to create finished customized work for clients. You may not give clients the original files, substantially unchanged templates, or complete prompt collection."],
  ["Can I resell or share the files?", "No. The source files use a single-purchaser, non-transferable licence and cannot be shared, redistributed, uploaded, sublicensed, or resold."],
  ["Are campaign results guaranteed?", "No. Results depend on the offer, market, pricing, creative, website, tracking, budget, execution, competition, and customer experience."],
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="PRODXSTORE home"><span>PRODX</span>STORE</a>
      <div className="navLinks"><a href="#included">What’s included</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div>
      <a className="navCta" href={checkoutUrl}>Get the kit</a>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy">
        <div className="eyebrow"><span /> AI-POWERED CAMPAIGN SYSTEM</div>
        <h1>Stop guessing.<br /><em>Build smarter</em><br />Meta ads.</h1>
        <p className="heroLead">A practical toolkit for planning, creating, launching, measuring, and improving campaigns with AI—without treating AI output as automatically correct.</p>
        <div className="heroActions"><a className="button primary" href={checkoutUrl}>Get instant access <span>→</span></a><a className="textLink" href="#included">See everything included ↓</a></div>
        <div className="trustRow"><span>✓ One-time payment</span><span>✓ Instant digital delivery</span><span>✓ No recurring fee</span></div>
      </div>
      <div className="heroVisual"><div className="heroGlow" /><img src="/product-hero.png" alt="PRODXSTORE AI Meta Ads Launch Kit bundle" /><div className="floatStat left"><strong>205</strong><span>READY-TO-ADAPT<br />AI PROMPTS</span></div><div className="floatStat right"><strong>6</strong><span>PRACTICAL<br />DELIVERABLES</span></div></div>
    </section>

    <div className="metricBar"><div className="shell metrics"><div><strong>89</strong><span>PAGE BLUEPRINT</span></div><div><strong>205</strong><span>AI PROMPTS</span></div><div><strong>18</strong><span>PROMPT CATEGORIES</span></div><div><strong>30</strong><span>DAY LAUNCH SYSTEM</span></div></div></div>

    <section className="problem section shell">
      <div className="sectionLabel">THE REAL PROBLEM</div>
      <div className="splitHeading"><h2>Ads fail when the<br /><em>system is missing.</em></h2><div><p>Jumping straight into Ads Manager can leave the offer, economics, tracking, creative hypothesis, and decision rules undocumented.</p><p>This kit gives those moving parts one clear workflow—before and after you spend.</p></div></div>
      <div className="painGrid"><article><span>01</span><h3>Unclear economics</h3><p>No documented target CPA, test budget, or maximum exposure.</p></article><article><span>02</span><h3>Random creative</h3><p>Cosmetic variations instead of genuinely different test hypotheses.</p></article><article><span>03</span><h3>Broken measurement</h3><p>Unverified tracking, disconnected data, and decisions based on CTR alone.</p></article></div>
    </section>

    <section className="included section" id="included"><div className="shell">
      <div className="sectionLabel">THE COMPLETE TOOLKIT</div>
      <div className="splitHeading compact"><h2>Everything you need.<br /><em>Nothing you don’t.</em></h2><p>Six connected resources take you from campaign idea to documented post-launch review.</p></div>
      <div className="includedGrid">{included.map(([number,title,stat,copy])=><article className="kitCard" key={number}><div className="kitTop"><span>{number}</span><i>↗</i></div><h3>{title}</h3><strong>{stat}</strong><p>{copy}</p></article>)}</div>
    </div></section>

    <section className="workflow section shell" id="how"><div className="workflowCopy"><div className="sectionLabel">ONE CONNECTED WORKFLOW</div><h2>From idea to<br /><em>measured campaign.</em></h2><p>The kit keeps planning, production, QA, measurement, and improvement connected instead of scattered across unrelated files.</p><a className="button secondary" href={checkoutUrl}>Start building smarter <span>→</span></a></div><div className="steps">{stages.map(([title,copy],index)=><div className="step" key={title}><b>{String(index+1).padStart(2,"0")}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>

    <section className="tracker section"><div className="shell trackerInner"><div><div className="sectionLabel">PLAN WITH REAL NUMBERS</div><h2>Turn assumptions into<br /><em>documented targets.</em></h2><p>Use the included workbook to organize economics, budgets, test hypotheses, daily inputs, and performance indicators.</p></div><div className="dashboardFrame"><img src="/tracker-dashboard.png" alt="Campaign planner and performance tracker dashboard" /></div></div></section>

    <section className="audience section shell"><div className="sectionLabel">BUILT FOR PRACTICAL OPERATORS</div><h2>One toolkit. <em>Multiple use cases.</em></h2><div className="audienceGrid">{["Small-business owners","Ecommerce sellers","Digital-product creators","Lead-generation teams","Local-service businesses","Freelancers & agencies"].map(name=><div key={name}><span>✓</span>{name}</div>)}</div></section>

    <section className="offer section" id="checkout"><div className="offerGlow"/><div className="shell offerInner"><div className="offerCopy"><div className="sectionLabel">LAUNCH OFFER</div><h2>The complete system.<br /><em>One download.</em></h2><p>Get the blueprint, prompt vault, planner, tracker, checklist, quick-start guide, and licence in one organized ZIP.</p><ul>{["89-page blueprint with 36 chapters","205 prompts across 18 categories","Editable campaign planner and tracker","12-page launch and 30-day QA checklist","60-minute Quick Start Guide","Commercial client-output permissions"].map(x=><li key={x}>✓ <span>{x}</span></li>)}</ul></div><div className="priceCard"><div className="priceTag">RECOMMENDED LAUNCH PRICE</div><div className="price"><small>₹</small>499</div><p>One-time payment</p><a className="button primary full" href={checkoutUrl}>Get instant access <span>→</span></a><div className="secureNotes"><span>Instant download</span><span>Single-purchaser licence</span><span>No subscription</span></div><small className="setupNote">Checkout link will be connected before launch.</small></div></div></section>

    <section className="faq section shell" id="faq"><div className="faqHeading"><div className="sectionLabel">FREQUENTLY ASKED QUESTIONS</div><h2>Before you<br /><em>get started.</em></h2></div><div className="faqList">{faqs.map(([q,a],index)=><details key={q}><summary><span>{String(index+1).padStart(2,"0")}</span>{q}<i>+</i></summary><p>{a}</p></details>)}</div></section>

    <section className="finalCta"><div className="shell"><div className="sectionLabel">READY WHEN YOU ARE</div><h2>Stop guessing.<br /><em>Start building smarter.</em></h2><a className="button primary" href={checkoutUrl}>Get the complete kit <span>→</span></a></div></section>
    <footer className="footer shell"><div className="footerTop"><a className="brand" href="#top"><span>PRODX</span>STORE</a><p>Practical digital tools for smarter work.</p></div><div className="legal">This independent educational product is not affiliated with or endorsed by Meta. Examples and calculations are illustrative. Verify all claims, inputs, outputs, tracking, permissions, and settings. Advertising results are not guaranteed.</div><div className="footerBottom"><span>© 2026 PRODXSTORE. All rights reserved.</span><div><a href={privacyUrl}>Privacy</a><a href={termsUrl}>Terms</a><a href={refundUrl}>Refunds</a><a href={supportUrl}>Support</a></div></div></footer>
    <div className="mobileBar"><div><small>LAUNCH PRICE</small><strong>₹499</strong></div><a href={checkoutUrl}>Get instant access →</a></div>
  </main>;
}
