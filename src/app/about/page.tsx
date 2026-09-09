import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Callout } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About HoxAir",
  description: "Learn about HoxAir Heating & Cooling LLC and its straightforward approach to Phoenix-area home comfort.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">About HoxAir</span>
          <h1>Clear guidance. Comfortable homes.</h1>
          <p className="lead">HoxAir Heating &amp; Cooling LLC is presented as a Phoenix-area HVAC company focused on practical service and easy communication.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split">
          <div>
            <span className="eyebrow">The HoxAir approach</span>
            <h2>A straightforward path from problem to solution.</h2>
            <p>Home comfort problems are stressful enough without vague explanations or confusing options. The HoxAir service experience is designed around listening first, evaluating the system, and explaining sensible next steps.</p>
            <p>This is a demonstration website. Company history, team biographies, licenses, certifications, warranties, financing details, and customer reviews should be added only after they are verified with the business.</p>
            <Link className="button button-outline" href="/services">Explore services</Link>
          </div>
          <div className="feature-art" aria-hidden="true">
            <div className="feature-badge"><strong>Built for the Valley.</strong><span>Cooling support for Arizona conditions.</span></div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><span className="eyebrow">Service principles</span><h2>What homeowners should expect.</h2></div></div>
          <div className="card-grid">
            <div className="card"><span className="card-icon">01</span><h3>Listen carefully</h3><p>Start with the comfort concern, system symptoms, and priorities for the home.</p></div>
            <div className="card"><span className="card-icon">02</span><h3>Evaluate thoroughly</h3><p>Look for the cause of the issue and the factors affecting system performance.</p></div>
            <div className="card"><span className="card-icon">03</span><h3>Explain clearly</h3><p>Present the findings and practical options in straightforward language.</p></div>
            <div className="card"><span className="card-icon">04</span><h3>Respect the home</h3><p>Communicate well and keep the homeowner informed throughout the visit.</p></div>
          </div>
        </div>
      </section>
      <Callout />
    </>
  );
}
