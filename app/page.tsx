import Image from "next/image";
import Link from "next/link";

import { CHECKOUT_URL } from "@/app/config/checkout";

const checkoutUrl = CHECKOUT_URL;
const privacyUrl = process.env.NEXT_PUBLIC_PRIVACY_URL?.trim() || "/privacy";
const termsUrl = process.env.NEXT_PUBLIC_TERMS_URL?.trim() || "/terms";
const refundUrl = process.env.NEXT_PUBLIC_REFUND_URL?.trim() || "/refund-policy";
const supportUrl =
  process.env.NEXT_PUBLIC_SUPPORT_URL?.trim() || "mailto:support@prodxstore.com";

const included = [
  {
    number: "01",
    format: "PDF GUIDE",
    title: "AI Meta Ads Blueprint",
    stat: "89 pages • 36 chapters",
    copy: "Strategy, setup, tracking, creative development, execution, measurement, and optimization.",
  },
  {
    number: "02",
    format: "PDF PROMPT VAULT",
    title: "205-Prompt Vault",
    stat: "226 pages • 18 categories",
    copy: "Reusable AI instructions for research, positioning, copy, creative briefs, analysis, and campaign decisions.",
  },
  {
    number: "03",
    format: "EXCEL + SHEETS",
    title: "Campaign Planner & Tracker",
    stat: "Editable .XLSX workbook",
    copy: "Plan economics, budgets, hypotheses, and structure—then record daily inputs and review KPIs.",
  },
  {
    number: "04",
    format: "PDF CHECKLIST",
    title: "Meta Ads Launch Checklist",
    stat: "12-page QA system",
    copy: "Check setup, tracking, customer journey, campaign build, creative, launch, and the first 30 days.",
  },
  {
    number: "05",
    format: "PDF ACTION PLAN",
    title: "Quick Start Guide",
    stat: "60-minute starting path",
    copy: "Follow a focused first hour, seven-day implementation plan, operating rules, and final launch check.",
  },
  {
    number: "06",
    format: "PDF LICENCE",
    title: "Licence & Terms",
    stat: "Clear commercial-use rules",
    copy: "Use the tools internally and create finished client work while protecting the original source files.",
  },
];

const stages = [
  [
    "Plan",
    "Define the customer, offer, economics, objective, and test limits.",
  ],
  [
    "Create",
    "Turn verified inputs into distinct copy and creative hypotheses.",
  ],
  [
    "Launch",
    "Check the journey, tracking, links, settings, and placements.",
  ],
  [
    "Measure",
    "Record real campaign inputs and review meaningful KPIs.",
  ],
  [
    "Improve",
    "Separate facts from hypotheses and make controlled changes.",
  ],
];

const samplePrompts = [
  {
    category: "STAGE 01 • OFFER & UNIT ECONOMICS",
    title: "Pre-Spend Target CPA & Test Budget Stress-Test",
    prompt:
      "Act as a direct-response media planner. Using [PRODUCT/OFFER], [SELLING PRICE: ₹___], [COGS/DELIVERY COST: ₹___], and [LANDING PAGE CONVERSION RATE ASSUMPTION: ___%], calculate: (1) break-even CPA and target ROAS, (2) maximum affordable link CPC, and (3) a 7-day validation budget cap before any scaling decision is allowed. Flag any unverified assumptions I must check first.",
    output:
      "Outputs documented break-even thresholds, stop-loss rules, and test budget limits to enter directly into the Campaign Planner workbook.",
  },
  {
    category: "STAGE 02 • CREATIVE HYPOTHESIS DESIGN",
    title: "3 Distinct Angle Hypotheses (Not Cosmetic Variations)",
    prompt:
      "Using verified customer pain points [PAIN POINTS 1–3] and proof elements [ACTUAL PRODUCT DELIVERABLES], build 3 structurally distinct Meta ad hypotheses for [AUDIENCE SEGMENT]: (1) Problem-Mechanism-System angle, (2) Cost-of-Mistake / Risk-Reduction angle, and (3) Concrete-Deliverable Walkthrough angle. For each, define the single hypothesis being tested, 3-second visual hook, primary text, headline, and pass/fail metric.",
    output:
      "Produces testable ad briefs where each creative isolates a real buyer motivation instead of rewriting the same hook.",
  },
  {
    category: "STAGE 04–05 • DIAGNOSTIC KPI REVIEW",
    title: "7-Day Funnel Bottleneck Separator (Facts vs. Hypotheses)",
    prompt:
      "Analyze these 7-day Meta campaign numbers from my tracker: [SPEND], [IMPRESSIONS], [LINK CTR], [LANDING PAGE VIEWS], [INITIATE CHECKOUTS], and [PURCHASES]. Separate confirmed metric bottlenecks (creative hook, click-to-landing-page drop-off, offer/checkout conversion, or frequency fatigue) from unverified guesses, and recommend one controlled variable change for the next test cycle.",
    output:
      "Prevents knee-jerk campaign resets by pinpointing whether the bottleneck is in the ad, the landing page load, or the offer.",
  },
];

const vaultBreakdown = [
  {
    stage: "Stage 01 — Plan (Chapters 1–8)",
    items:
      "Offer & Economics • Customer Research • Positioning • Funnel Math • Campaign Objective & Budget Rules",
  },
  {
    stage: "Stage 02 — Create (Chapters 9–16)",
    items:
      "Angle Matrix • Ad Copy Frameworks • Static & Video Creative Briefs • Hook Testing • Compliance Self-Check",
  },
  {
    stage: "Stage 03 — Launch (Chapters 17–24)",
    items:
      "Pixel & Event QA • Account Structure • Audience & Placement Setup • UTM & Link Verification • Pre-Flight Checklist",
  },
  {
    stage: "Stage 04–05 — Measure & Improve (Chapters 25–36)",
    items:
      "Daily KPI Logging • Bottleneck Diagnosis • Creative Iteration • Controlled Scaling • 30-Day Post-Launch Review",
  },
];

const faqs = [
  [
    "Is this a course?",
    "No. It is a downloadable implementation kit containing PDF guides, a 205-prompt vault, an editable Excel planner and tracker, a 12-page QA checklist, a quick-start guide, and licence terms.",
  ],
  [
    "How do I receive the files after payment?",
    "Immediately after completing your ₹499 payment on SuperProfile, you get instant download access to the complete organized ZIP file on the confirmation screen, plus an automated backup access link sent to your email.",
  ],
  [
    "Which AI tools and spreadsheet apps work with this kit?",
    "The 205 prompts work with any major AI assistant including ChatGPT (Free or Plus), Claude, and Google Gemini. The Campaign Planner & Tracker is provided as an editable .XLSX file that works in Microsoft Excel and Google Sheets.",
  ],
  [
    "Is advertising spend included?",
    "No. Advertising spend, AI subscriptions, payment fees, APIs, and other third-party services are not included.",
  ],
  [
    "Do I need Meta ads experience?",
    "The kit includes a beginner-friendly 60-minute quick-start path and 7-day implementation plan. You remain responsible for campaign settings, compliance, business decisions, and spending.",
  ],
  [
    "Can freelancers and agencies use it?",
    "Yes. You may use the toolkit internally to create finished customized work for clients. You may not give clients the original files, substantially unchanged templates, or complete prompt collection.",
  ],
  [
    "Can I resell or share the files?",
    "No. The source files use a single-purchaser, non-transferable licence and cannot be shared, redistributed, uploaded, sublicensed, or resold.",
  ],
  [
    "What is the refund policy?",
    "Because all PDF guides, 205 prompts, and editable Excel files are delivered as an instant digital download immediately after purchase, sales are final once delivered. Duplicate charges or verified delivery issues are promptly resolved or refunded by support.",
  ],
  [
    "Are campaign results guaranteed?",
    "No. Results depend on the offer, market, pricing, creative, website, tracking, budget, execution, competition, and customer experience.",
  ],
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PRODXSTORE AI Meta Ads Launch Kit",
  description:
    "Downloadable Meta ads implementation kit including an 89-page Blueprint, 205-Prompt Vault across 18 categories, editable Excel Campaign Planner & Tracker, 12-page Launch Checklist, and 60-minute Quick Start Guide.",
  brand: {
    "@type": "Brand",
    name: "PRODXSTORE",
  },
  image: "/product-hero.png",
  offers: {
    "@type": "Offer",
    price: "499",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="PRODXSTORE home">
          <span>PRODX</span>STORE
        </a>
        <div className="navLinks">
          <a href="#included">What’s included</a>
          <a href="#inside">Sample preview</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
        </div>
        <a
          className="navCta"
          href={checkoutUrl}
          data-checkout-cta="true"
        >
          Get the kit — ₹499
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow">
            <span aria-hidden="true" /> AI-POWERED CAMPAIGN SYSTEM
          </div>
          <h1>
            Stop guessing.
            <br />
            <em>Build smarter</em>
            <br />
            Meta ads.
          </h1>
          <p className="heroLead">
            A practical toolkit for planning, creating, launching, measuring,
            and improving campaigns with AI—without treating AI output as
            automatically correct.
          </p>
          <div className="heroActions">
            <a
              className="button primary"
              href={checkoutUrl}
              data-checkout-cta="true"
            >
              Get instant access — ₹499 <span aria-hidden="true">→</span>
            </a>
            <a className="textLink" href="#inside">
              See sample prompts &amp; inside preview ↓
            </a>
          </div>
          <div className="trustRow">
            <span>✓ ₹499 one-time payment</span>
            <span>✓ Instant ZIP download via SuperProfile</span>
            <span>✓ PDF + Excel / Google Sheets</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroGlow" aria-hidden="true" />
          <Image
            src="/product-hero.png"
            alt="PRODXSTORE AI Meta Ads Launch Kit — 89-page Blueprint, 205 AI Prompts, Planner, and Launch Checklist"
            width={896}
            height={1200}
            priority
            sizes="(max-width: 900px) 92vw, 46vw"
          />
          <div className="floatStat left">
            <strong>205</strong>
            <span>
              READY-TO-ADAPT
              <br />
              AI PROMPTS
            </span>
          </div>
          <div className="floatStat right">
            <strong>6</strong>
            <span>
              PRACTICAL
              <br />
              DELIVERABLES
            </span>
          </div>
        </div>
      </section>

      <div className="metricBar">
        <div className="shell metrics">
          <div>
            <strong>89</strong>
            <span>PAGE BLUEPRINT</span>
          </div>
          <div>
            <strong>205</strong>
            <span>AI PROMPTS</span>
          </div>
          <div>
            <strong>18</strong>
            <span>PROMPT CATEGORIES</span>
          </div>
          <div>
            <strong>30</strong>
            <span>DAY LAUNCH SYSTEM</span>
          </div>
        </div>
      </div>

      <section className="problem section shell">
        <div className="sectionLabel">THE REAL PROBLEM</div>
        <div className="splitHeading">
          <h2>
            Ads fail when the
            <br />
            <em>system is missing.</em>
          </h2>
          <div>
            <p>
              Jumping straight into Ads Manager can leave the offer, economics,
              tracking, creative hypothesis, and decision rules undocumented.
            </p>
            <p>
              This kit gives those moving parts one clear workflow—before and
              after you spend.
            </p>
          </div>
        </div>
        <div className="painGrid">
          <article>
            <span>01</span>
            <h3>Unclear economics</h3>
            <p>No documented target CPA, test budget, or maximum exposure.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Random creative</h3>
            <p>
              Cosmetic variations instead of genuinely different test
              hypotheses.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Broken measurement</h3>
            <p>
              Unverified tracking, disconnected data, and decisions based on CTR
              alone.
            </p>
          </article>
        </div>
      </section>

      <section className="included section" id="included">
        <div className="shell">
          <div className="sectionLabel">THE COMPLETE TOOLKIT</div>
          <div className="splitHeading compact">
            <h2>
              Everything you need.
              <br />
              <em>Nothing you don’t.</em>
            </h2>
            <p>
              Six connected resources take you from campaign idea to documented
              post-launch review. Delivered immediately in one organized ZIP.
            </p>
          </div>
          <div className="includedGrid">
            {included.map((item) => (
              <article className="kitCard" key={item.number}>
                <div className="kitTop">
                  <span>{item.number}</span>
                  <small className="formatBadge">{item.format}</small>
                </div>
                <h3>{item.title}</h3>
                <strong>{item.stat}</strong>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="preview section shell" id="inside">
        <div className="sectionLabel">LOOK INSIDE THE KIT</div>
        <div className="splitHeading compact">
          <h2>
            Built on structured inputs.
            <br />
            <em>Not generic one-liners.</em>
          </h2>
          <p>
            Every prompt in the 226-page vault uses bracketed business inputs
            and explicit verification checks—mapped directly to the 36-chapter
            Blueprint and Excel tracker.
          </p>
        </div>

        <div className="previewGrid">
          {samplePrompts.map((sample) => (
            <article className="promptCard" key={sample.title}>
              <div className="promptCategory">{sample.category}</div>
              <h3>{sample.title}</h3>
              <div className="promptBox">
                <span className="promptTag">SAMPLE PROMPT STRUCTURE</span>
                <p>“{sample.prompt}”</p>
              </div>
              <p className="promptOutcome">
                <strong>Why it works:</strong> {sample.output}
              </p>
            </article>
          ))}
        </div>

        <div className="curriculumBox">
          <div className="curriculumHeader">
            <div>
              <div className="sectionLabel">36 CHAPTERS + 18 PROMPT CATEGORIES</div>
              <h3>How the Blueprint &amp; Prompt Vault are organized</h3>
            </div>
            <span className="compatPill">
              Works with ChatGPT • Claude • Gemini • Excel &amp; Google Sheets
            </span>
          </div>
          <div className="curriculumGrid">
            {vaultBreakdown.map((group) => (
              <div className="curriculumItem" key={group.stage}>
                <strong>{group.stage}</strong>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow section shell" id="how">
        <div className="workflowCopy">
          <div className="sectionLabel">ONE CONNECTED WORKFLOW</div>
          <h2>
            From idea to
            <br />
            <em>measured campaign.</em>
          </h2>
          <p>
            The kit keeps planning, production, QA, measurement, and improvement
            connected instead of scattered across unrelated files.
          </p>
          <a
            className="button secondary"
            href={checkoutUrl}
            data-checkout-cta="true"
          >
            Get the complete kit — ₹499 <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="steps">
          {stages.map(([title, copy], index) => (
            <div className="step" key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tracker section">
        <div className="shell trackerInner">
          <div>
            <div className="sectionLabel">PLAN WITH REAL NUMBERS</div>
            <h2>
              Turn assumptions into
              <br />
              <em>documented targets.</em>
            </h2>
            <p>
              Use the included editable workbook to organize unit economics,
              budgets, test hypotheses, daily campaign inputs, and automatic
              performance indicators in Excel or Google Sheets.
            </p>
          </div>
          <div className="dashboardFrame">
            <Image
              src="/tracker-dashboard.png"
              alt="Campaign planner and performance tracker Excel dashboard showing Spend, Revenue, ROAS, CPA, and daily charts"
              width={1450}
              height={732}
              sizes="(max-width: 900px) 94vw, 56vw"
            />
          </div>
        </div>
      </section>

      <section className="audience section shell">
        <div className="sectionLabel">BUILT FOR PRACTICAL OPERATORS</div>
        <h2>
          One toolkit. <em>Multiple use cases.</em>
        </h2>
        <div className="audienceGrid">
          {[
            "Small-business owners",
            "Ecommerce sellers",
            "Digital-product creators",
            "Lead-generation teams",
            "Local-service businesses",
            "Freelancers & agencies",
          ].map((name) => (
            <div key={name}>
              <span aria-hidden="true">✓</span>
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="offer section" id="checkout">
        <div className="offerGlow" aria-hidden="true" />
        <div className="shell offerInner">
          <div className="offerCopy">
            <div className="sectionLabel">LAUNCH OFFER</div>
            <h2>
              The complete system.
              <br />
              <em>One download.</em>
            </h2>
            <p>
              Get the blueprint, prompt vault, planner, tracker, checklist,
              quick-start guide, and licence in one organized ZIP.
            </p>
            <ul>
              {[
                "89-page blueprint with 36 chapters (PDF)",
                "205 prompts across 18 categories (PDF)",
                "Editable campaign planner & tracker (.XLSX)",
                "12-page launch and 30-day QA checklist (PDF)",
                "60-minute Quick Start Guide (PDF)",
                "Commercial client-output permissions",
              ].map((x) => (
                <li key={x}>
                  <span aria-hidden="true">✓</span> <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="priceCard">
            <div className="priceTag">ONE-TIME LAUNCH PRICE</div>
            <div className="price">
              <small>₹</small>499
            </div>
            <p>One-time payment • Instant digital access</p>
            <a
              className="button primary full"
              href={checkoutUrl}
              data-checkout-cta="true"
            >
              Get instant access <span aria-hidden="true">→</span>
            </a>
            <div className="secureNotes">
              <span>Instant ZIP download via SuperProfile</span>
              <span>Single-purchaser &amp; client-output licence</span>
              <span>No recurring subscription or hidden fees</span>
            </div>
            <small className="deliveryNote">
              Immediate access on confirmation screen + backup download link via
              email.
            </small>
          </div>
        </div>
      </section>

      <section className="faq section shell" id="faq">
        <div className="faqHeading">
          <div className="sectionLabel">FREQUENTLY ASKED QUESTIONS</div>
          <h2>
            Before you
            <br />
            <em>get started.</em>
          </h2>
        </div>
        <div className="faqList">
          {faqs.map(([q, a], index) => (
            <details key={q}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {q}
                <i aria-hidden="true">+</i>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <div className="shell">
          <div className="sectionLabel">READY WHEN YOU ARE</div>
          <h2>
            Stop guessing.
            <br />
            <em>Start building smarter.</em>
          </h2>
          <a
            className="button primary"
            href={checkoutUrl}
            data-checkout-cta="true"
          >
            Get the complete kit — ₹499 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footerTop">
          <a className="brand" href="#top" aria-label="PRODXSTORE back to top">
            <span>PRODX</span>STORE
          </a>
          <p>Practical digital tools for smarter work.</p>
        </div>
        <div className="legal">
          This independent educational product is not affiliated with or
          endorsed by Meta. Examples and calculations are illustrative. Verify
          all claims, inputs, outputs, tracking, permissions, and settings.
          Advertising results are not guaranteed.
        </div>
        <div className="footerBottom">
          <span>© 2026 PRODXSTORE. All rights reserved.</span>
          <div>
            <Link href={privacyUrl}>Privacy Policy</Link>
            <Link href={termsUrl}>Terms &amp; Licence</Link>
            <Link href={refundUrl}>Refund &amp; Delivery</Link>
            <a href={supportUrl}>Support</a>
          </div>
        </div>
      </footer>

      <div className="mobileBar" role="region" aria-label="Quick purchase bar">
        <div>
          <small>ONE-TIME LAUNCH PRICE</small>
          <strong>₹499</strong>
        </div>
        <a href={checkoutUrl} data-checkout-cta="true">
          Get instant access →
        </a>
      </div>
    </main>
  );
}
