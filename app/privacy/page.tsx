import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PRODXSTORE AI Meta Ads Launch Kit",
  description: "Privacy Policy for PRODXSTORE AI Meta Ads Launch Kit.",
  alternates: { canonical: "/privacy" },
};

const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:support@prodxstore.com";

export default function PrivacyPage() {
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
        <div className="sectionLabel">LEGAL &amp; COMPLIANCE</div>
        <h1>
          Privacy <em>Policy</em>
        </h1>
        <p className="legalUpdated">Last updated: October 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            PRODXSTORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains what information is collected when you visit our website or purchase the <strong>PRODXSTORE AI Meta Ads Launch Kit</strong> and how that information is used.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>
              <strong>Purchase &amp; Delivery Information:</strong> When you complete a purchase through our hosted checkout partner (such as SuperProfile / Razorpay), you provide your name, email address, phone number, and billing details required to process payment and deliver your digital download link.
            </li>
            <li>
              <strong>Payment Data:</strong> Payment card, UPI, or banking credentials are processed directly by the encrypted checkout provider. We do not store your credit/debit card numbers or banking passwords on our servers.
            </li>
            <li>
              <strong>Analytics &amp; Advertising Data:</strong> When configured, we may use standard analytics and advertising measurement tools (such as Meta Pixel) to measure page views, checkout clicks, and ad campaign effectiveness using cookies or browser identifiers.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To deliver your purchased digital files, receipts, and access instructions.</li>
            <li>To respond to customer support requests, technical questions, or billing inquiries.</li>
            <li>To measure website performance, troubleshoot technical issues, and evaluate advertising campaigns.</li>
            <li>To comply with applicable tax, accounting, and legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing &amp; Third-Party Services</h2>
          <p>
            We do not sell or rent your personal contact information. Data is shared only with trusted infrastructure providers necessary to operate this service (such as our hosting provider Vercel, checkout and delivery platform SuperProfile, payment gateways, and advertising measurement platforms where applicable).
          </p>
        </section>

        <section>
          <h2>5. Cookies &amp; Tracking Controls</h2>
          <p>
            You can control or disable cookies at any time through your browser settings or mobile device privacy preferences. Disabling cookies does not restrict your ability to view this landing page.
          </p>
        </section>

        <section>
          <h2>6. Contact &amp; Support</h2>
          <p>
            If you have questions about this Privacy Policy or wish to request access, correction, or deletion of your support records, please contact us at{" "}
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
