import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site-chrome";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Demo privacy policy for the HoxAir Heating & Cooling website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <header className="page-hero">
        <div className="shell"><span className="eyebrow">Website information</span><h1>Privacy policy</h1></div>
      </header>
      <section className="section">
        <article className="shell narrow">
          <p className="lead"><strong>Demo notice:</strong> This policy is placeholder content and requires legal review before the website goes live.</p>
          <h2>Information submitted</h2>
          <p>The current demonstration form does not transmit or store information. A production form must disclose what information is collected, why it is collected, where it is processed, and how long it is retained.</p>
          <h2>Analytics and cookies</h2>
          <p>This demo does not include advertising trackers or third-party analytics. Any production analytics or embedded services should be documented here and configured with appropriate consent controls.</p>
          <h2>Security</h2>
          <p>Reasonable technical measures should be used to protect information, but no internet transmission or storage method can be guaranteed completely secure.</p>
          <h2>Contact</h2>
          <p>Questions about this policy may be sent to <a className="card-link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </article>
      </section>
    </>
  );
}
