import type { Metadata } from "next";
import Link from "next/link";
import { DOWNLOAD_URL } from "@/app/config/checkout";

// Post-purchase page. pay.prodxstore.com redirects here after a verified payment.
export const metadata: Metadata = {
  title: "Thank You - Download Your Kit | PRODXSTORE AI Meta Ads Launch Kit",
  description: "Download the PRODXSTORE AI Meta Ads Launch Kit.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:support@prodxstore.com";

export default function ThankYouPage() {
  return (
    <main className="legalPage shell">
      <nav className="nav" aria-label="Thank you navigation">
        <Link className="brand" href="/" aria-label="PRODXSTORE home">
          <span>PRODX</span>STORE
        </Link>
        <Link className="navCta" href="/">
          ← Back to Launch Kit
        </Link>
      </nav>

      <article className="legalContent">
        <div className="sectionLabel">PAYMENT CONFIRMED</div>
        <h1>
          Thank you for your <em>purchase</em>
        </h1>
        <p className="legalUpdated">PRODXSTORE AI Meta Ads Launch Kit • Version 1.1 (November 2026)</p>

        <section>
          <p>Your files are ready. Download the complete kit below and keep a copy safe.</p>
          <p>
            <a
              className="button primary"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the Launch Kit (ZIP) <span aria-hidden="true">→</span>
            </a>
          </p>
          <p>Bookmark this page so you can download the files again later.</p>
        </section>

        <section>
          <h2>Getting started</h2>
          <ul>
            <li>
              Google Drive opens a preview of the ZIP file. Click the <strong>Download</strong> icon
              (top right) to save it.
            </li>
            <li>Unzip the file on your computer and open <strong>README_FIRST.txt</strong>.</li>
            <li>
              Start with <strong>05_Quick_Start_Guide.pdf</strong>, then follow the recommended order:
              Blueprint → Prompt Vault → Campaign Planner → Launch Checklist.
            </li>
          </ul>
        </section>

        <section>
          <h2>What&rsquo;s inside</h2>
          <ul>
            <li>89-page AI Meta Ads Blueprint (PDF)</li>
            <li>205-Prompt Vault (PDF)</li>
            <li>Campaign Planner &amp; Performance Tracker (editable Excel)</li>
            <li>12-page Meta Ads Launch Checklist (PDF)</li>
            <li>60-Minute Quick Start Guide (PDF)</li>
            <li>Licence &amp; Terms (PDF)</li>
          </ul>
        </section>

        <section>
          <h2>Need help?</h2>
          <p>
            If the download does not work, email{" "}
            <a href={supportUrl} className="inlineLink">
              {supportUrl.replace(/^mailto:/i, "")}
            </a>{" "}
            with the email address used at checkout and your payment reference. Please remember the
            files are for your own use under the{" "}
            <Link href="/terms" className="inlineLink">
              single-purchaser licence
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
