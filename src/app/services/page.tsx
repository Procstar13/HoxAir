import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Callout } from "@/components/site-chrome";
import { services } from "@/lib/site";

const serviceStages = ["Restore", "Upgrade", "Protect", "Urgent help"];

export const metadata: Metadata = {
  title: "Air Conditioning Services in Phoenix, AZ",
  description: "Explore HoxAir AC repair, installation, maintenance, and urgent HVAC services for Phoenix-area homeowners.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">HoxAir services</span>
          <h1>Cooling service built around your home.</h1>
          <p className="lead">Explore straightforward HVAC options for repairs, replacement planning, preventive care, and urgent breakdowns.</p>
        </div>
      </header>
      <section className="section service-directory-section">
        <div className="shell service-directory">
          {services.map((service, index) => (
            <Link className="service-row" key={service.slug} href={`/services/${service.slug}`}>
              <div className="service-row-marker">
                <span>0{index + 1}</span>
                <small>{serviceStages[index]}</small>
              </div>
              <div className="service-row-copy">
                <h2>{service.name}</h2>
                <p>{service.short}</p>
              </div>
              <ul className="service-row-benefits">
                {service.benefits.slice(0, 2).map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
              <span className="service-row-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
      <Callout title="Not sure which service you need?" />
    </>
  );
}
