import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site-chrome";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request HVAC Service",
  description: "Contact HoxAir Heating & Cooling to request AC service in Phoenix or a surrounding Arizona community.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">Contact HoxAir</span>
          <h1>Tell us how we can help.</h1>
          <p className="lead">Call for the quickest connection or use the demo form to preview the service-request experience.</p>
        </div>
      </header>
      <section className="section section-soft">
        <div className="shell contact-layout">
          <div>
            <span className="eyebrow">Reach HoxAir</span>
            <h2>Request heating or cooling service.</h2>
            <p>Have basic system details ready if available, including what you are noticing, when it started, and the city where service is needed.</p>
            <div className="contact-list">
              <div><small>Phone</small><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div>
              <div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div>
              <div><small>Service area</small><strong>Phoenix metro area, Arizona</strong></div>
              <div><small>Business hours</small><strong>Demo placeholder — verify before launch</strong></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
