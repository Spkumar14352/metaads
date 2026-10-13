import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Licence | PRODXSTORE AI Meta Ads Launch Kit",
  description: "Terms of Use and Commercial Licence Rules for PRODXSTORE AI Meta Ads Launch Kit.",
  alternates: { canonical: "/terms" },
};

const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:support@prodxstore.com";

export default function TermsPage() {
  return (
    <main className="legalPage shell">
      <nav className="nav" aria-label="Legal navigation">
        <Link className="brand" href="/" aria-label="PRODXSTORE home">
          <span>PRODX</span>STORE
        </Link>
        <Link className="navCta" href="/">
          ← Back to Launch Kit
        </Link>
      </nav>

      <article className="legalContent">
        <div className="sectionLabel">LEGAL &amp; LICENCE</div>
        <h1>
          Terms &amp; <em>Conditions</em>
        </h1>
        <p className="legalUpdated">Last updated: October 2026</p>

        <section>
          <h2>1. Product Description</h2>
          <p>
            The <strong>PRODXSTORE AI Meta Ads Launch Kit</strong> is a downloadable digital implementation toolkit containing six resources: the 89-page AI Meta Ads Blueprint (PDF), the 205-Prompt Vault (PDF), the Campaign Planner &amp; Tracker (editable Excel workbook), the 12-page Meta Ads Launch Checklist (PDF), the 60-Minute Quick Start Guide (PDF), and the Licence &amp; Terms documentation. It is not a live coaching program, software subscription, or managed advertising service.
          </p>
        </section>

        <section>
          <h2>2. Single-Purchaser &amp; Commercial Client-Work Licence</h2>
          <ul>
            <li>
              <strong>Permitted Use:</strong> Upon purchase, you are granted a non-exclusive, non-transferable, single-purchaser licence to use the templates, prompts, checklists, and guides for your own business operations and to produce <em>finished, customized campaign deliverables</em> (such as ad copy, creative briefs, and campaign plans) for your clients.
            </li>
            <li>
              <strong>Prohibited Use:</strong> You may not resell, share, redistribute, sublicense, upload to public repositories or shared drives, bundle into competing digital products, or hand over the raw source files, unmodified templates, or complete prompt vault to clients or third parties.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Third-Party Costs Not Included</h2>
          <p>
            Your one-time purchase covers the digital toolkit files only. Advertising spend, AI tool subscriptions (such as ChatGPT, Claude, or Gemini), spreadsheet software licences, domain hosting, and third-party APIs or payment processing fees are your separate responsibility.
          </p>
        </section>

        <section>
          <h2>4. No Earnings or Performance Guarantee</h2>
          <p>
            All examples, formulas, and sample numbers in the toolkit and on this website are strictly educational and illustrative. Advertising performance depends on your specific offer, market demand, pricing, creative execution, website conversion rate, tracking setup, budget, and platform rules. PRODXSTORE does not guarantee any specific ROAS, CPA, lead volume, or revenue outcome.
          </p>
        </section>

        <section>
          <h2>5. Independent Product Disclaimer</h2>
          <p>
            This independent educational product is not affiliated with, sponsored by, or endorsed by Meta Platforms, Inc. You remain solely responsible for verifying all AI-generated outputs, tracking implementations, and compliance with Meta Advertising Standards and applicable laws before launching campaigns.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            For licensing or product questions, contact{" "}
            <a href={supportUrl} className="inlineLink">
              {supportUrl.replace(/^mailto:/i, "")}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
