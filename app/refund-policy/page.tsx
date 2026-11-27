import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Delivery Policy | PRODXSTORE AI Meta Ads Launch Kit",
  description: "Digital delivery and refund policy for the PRODXSTORE AI Meta Ads Launch Kit.",
  alternates: { canonical: "/refund-policy" },
};

const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:support@prodxstore.com";

export default function RefundPolicyPage() {
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
        <div className="sectionLabel">DELIVERY &amp; REFUNDS</div>
        <h1>
          Refund &amp; Delivery <em>Policy</em>
        </h1>
        <p className="legalUpdated">Last updated: November 2026</p>

        <section>
          <h2>1. Instant Digital Delivery</h2>
          <p>
            The <strong>PRODXSTORE AI Meta Ads Launch Kit</strong> is delivered digitally immediately after your payment is confirmed. Our secure checkout (pay.prodxstore.com, processed by Razorpay) takes you straight to your download page, where you can download the complete ZIP file.
          </p>
        </section>

        <section>
          <h2>2. Digital Product Refund Policy</h2>
          <p>
            Because the toolkit consists of immediately downloadable, unencrypted digital files (PDF guides, 205 prompts, checklists, and editable Excel templates) that cannot be &ldquo;returned&rdquo; once accessed or downloaded, <strong>all sales are final once the digital files are delivered or downloaded</strong>.
          </p>
          <p>
            We encourage you to review the complete list of included deliverables, file formats, and sample previews on our landing page before completing your purchase.
          </p>
        </section>

        <section>
          <h2>3. Exceptions &amp; Billing Resolution</h2>
          <p>
            We will promptly issue a full refund or replacement delivery in the following situations:
          </p>
          <ul>
            <li>
              <strong>Duplicate Charge:</strong> If you were accidentally billed more than once for the same order.
            </li>
            <li>
              <strong>Non-Delivery / Corrupted File:</strong> If payment was deducted from your account and our support team is unable to deliver a working copy of the toolkit within 48 hours of your support request.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. How to Request Delivery Help or Billing Support</h2>
          <p>
            If you could not download the files after payment, or if you experienced a duplicate payment, email us at{" "}
            <a href={supportUrl} className="inlineLink">
              {supportUrl.replace(/^mailto:/i, "")}
            </a>{" "}
            with the email address or phone number used at checkout and your payment receipt/UTR reference.
          </p>
        </section>
      </article>
    </main>
  );
}
