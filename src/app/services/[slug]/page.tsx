import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Callout } from "@/components/site-chrome";
import { getService, locations, services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.name} in Phoenix, AZ`,
    description: `${service.short} Request ${service.name.toLowerCase()} from HoxAir Heating & Cooling in Phoenix and nearby Arizona communities.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${site.url}/#business` },
    areaServed: locations.map((location) => location.label),
    url: `${site.url}/services/${service.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">Phoenix-area HVAC service</span>
          <h1>{service.name} for Arizona homes.</h1>
          <p className="lead">{service.short}</p>
          <div className="button-row">
            <a className="button" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
            <Link className="button button-outline" href="/contact">Request service</Link>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="shell content-grid">
          <article>
            <h2>Comfort-focused {service.name.toLowerCase()}</h2>
            <p className="lead">{service.description}</p>
            <h2>What to expect</h2>
            <ul className="check-list">
              {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
            <h2>Service across the Phoenix metro area</h2>
            <p>HoxAir serves homeowners across Phoenix and surrounding Valley communities. Explore your local page for area-specific service information.</p>
            <ul className="link-list">
              {locations.map((location) => (
                <li key={location.slug}><Link href={`/service-areas/${location.slug}`}>{service.name} in {location.label}</Link></li>
              ))}
            </ul>
            <h2>Frequently asked questions</h2>
            <div className="faq">
              <details><summary>How do I request {service.name.toLowerCase()}?</summary><p>Call {site.phoneDisplay} or use the demo request form. HoxAir can discuss the issue and current scheduling availability.</p></details>
              <details><summary>Does HoxAir serve my part of the Valley?</summary><p>HoxAir’s listed service area includes Phoenix, Ahwatukee, Sun City, Surprise, Mesa, Tempe, Scottsdale, Buckeye, Gilbert, and Avondale.</p></details>
              <details><summary>What information should I have ready?</summary><p>Share the system type, approximate age if known, symptoms, when the issue began, and any unusual sounds or smells.</p></details>
            </div>
          </article>
          <aside className="sidebar-card">
            <span className="eyebrow light">Talk with HoxAir</span>
            <h2>Request service</h2>
            <p>Call to discuss your home, system, and current availability.</p>
            <a className="button" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <Link className="button button-outline-light" href="/contact">Online request</Link>
          </aside>
        </div>
      </section>
      <Callout title={`Need ${service.name.toLowerCase()}?`} />
    </>
  );
}
