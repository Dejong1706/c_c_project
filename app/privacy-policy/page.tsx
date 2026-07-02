import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BuildCalc",
  description:
    "Privacy policy for BuildCalc. Learn how we collect and use information, including cookies from Google Analytics and Google AdSense.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const h1Style: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: 1.3,
  margin: "10px 0 24px",
  color: "var(--text-1)",
};

const h2Style: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  color: "var(--text-1)",
  margin: "32px 0 12px",
  paddingBottom: "8px",
  borderBottom: "0.5px solid #dddbd2",
};

const p: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const ul: React.CSSProperties = {
  paddingLeft: "20px",
  marginBottom: "14px",
};

const li: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "6px",
};

const noteBox: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-3)",
  lineHeight: 1.7,
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "12px 16px",
  margin: "0 0 20px",
};

const crumbPill: React.CSSProperties = {
  fontSize: "12px",
  color: "var(--text-2)",
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "20px",
  padding: "4px 12px",
  textDecoration: "none",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildcalczone.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://buildcalczone.com/privacy-policy" },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div style={{ maxWidth: "680px", paddingBottom: "60px" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
          <Link href="/" style={crumbPill}>Home</Link>
          <span style={{ color: "var(--text-3)", fontSize: "12px" }}>/</span>
          <span style={{ ...crumbPill, color: "var(--accent-text)", background: "var(--accent-light)", border: "1px solid var(--accent-light)" }}>
            Privacy Policy
          </span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: "8px" }}>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--accent)", background: "var(--accent-light)", padding: "2px 8px", borderRadius: "20px" }}>
            Legal
          </span>
          <h1 style={h1Style}>Privacy Policy</h1>
          <p style={noteBox}>Last updated: July 2, 2026</p>
        </header>

        <p style={p}>
          BuildCalc ("we", "us", or "our") operates the website{" "}
          <strong>buildcalczone.com</strong> (the "Site"). This Privacy Policy
          explains what information we collect when you visit the Site, how we
          use it, and your choices regarding that information. By using the
          Site, you agree to the practices described in this policy.
        </p>

        {/* 1 */}
        <h2 style={h2Style}>1. Information we collect</h2>
        <p style={p}>
          The Site itself does not collect or store any personally identifiable
          information. All calculator inputs you enter are processed entirely
          in your browser and are never sent to our servers.
        </p>
        <p style={p}>
          However, we use third-party services that may collect certain
          information automatically when you visit the Site:
        </p>
        <ul style={ul}>
          <li style={li}>
            <strong>Usage data</strong> — pages visited, time spent on each
            page, referring URL, browser type, device type, and approximate
            geographic location (country/city level). This data is collected
            in aggregate and cannot be used to identify individual users.
          </li>
          <li style={li}>
            <strong>Cookies and similar technologies</strong> — small text
            files stored in your browser by Google Analytics and Google
            AdSense for analytics and advertising purposes.
          </li>
        </ul>

        {/* 2 */}
        <h2 style={h2Style}>2. How we use the information</h2>
        <p style={p}>The information collected via third-party services is used to:</p>
        <ul style={ul}>
          <li style={li}>Understand how visitors use the Site and which pages are most useful</li>
          <li style={li}>Improve the content and performance of the Site</li>
          <li style={li}>Display relevant advertisements through Google AdSense</li>
        </ul>
        <p style={p}>
          We do not sell, rent, or share any user data with third parties
          beyond what is described in this policy.
        </p>

        {/* 3 */}
        <h2 style={h2Style}>3. Google Analytics</h2>
        <p style={p}>
          We use Google Analytics 4 (GA4) to collect anonymized usage
          statistics. Google Analytics places cookies in your browser to
          identify unique visits and track behavior across sessions. The data
          collected is anonymized — IP addresses are truncated before storage
          and individual users cannot be identified.
        </p>
        <p style={p}>
          You can opt out of Google Analytics tracking by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
        <p style={p}>
          For more information on how Google uses data collected via Analytics,
          visit{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>

        {/* 4 */}
        <h2 style={h2Style}>4. Google AdSense and advertising</h2>
        <p style={p}>
          We use Google AdSense to display advertisements on the Site. Google
          AdSense uses cookies to serve ads based on your prior visits to this
          and other websites. The use of advertising cookies allows Google and
          its partners to serve ads based on your visit to our Site and/or
          other sites on the internet.
        </p>
        <p style={p}>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            Google&apos;s Ads Settings
          </a>
          . You can also opt out of third-party vendor cookies for
          personalized advertising by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            www.aboutads.info
          </a>
          .
        </p>

        {/* 5 */}
        <h2 style={h2Style}>5. Cookies</h2>
        <p style={p}>
          Cookies are small text files stored on your device by your browser.
          We do not set any first-party cookies directly. The cookies on this
          Site are set solely by Google Analytics and Google AdSense for the
          purposes described above.
        </p>
        <p style={p}>
          You can control or disable cookies through your browser settings.
          Note that disabling cookies may affect the functionality of some
          parts of the Site or the ads you see.
        </p>

        {/* 6 */}
        <h2 style={h2Style}>6. Third-party links</h2>
        <p style={p}>
          The Site may contain links to external websites. We are not
          responsible for the privacy practices or content of those sites. We
          encourage you to review the privacy policies of any third-party
          sites you visit.
        </p>

        {/* 7 */}
        <h2 style={h2Style}>7. Children&apos;s privacy</h2>
        <p style={p}>
          The Site is not directed at children under the age of 13. We do not
          knowingly collect any personal information from children. If you
          believe a child has provided personal information through the Site,
          please contact us so we can remove it.
        </p>

        {/* 8 */}
        <h2 style={h2Style}>8. Changes to this policy</h2>
        <p style={p}>
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with an updated "Last updated" date. We
          encourage you to review this page periodically. Continued use of the
          Site after any changes constitutes acceptance of the updated policy.
        </p>

        {/* 9 */}
        <h2 style={h2Style}>9. Contact us</h2>
        <p style={p}>
          If you have any questions about this Privacy Policy, please contact
          us at:{" "}
          <a
            href="mailto:ppk0320@gmail.com"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            ppk0320@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}
