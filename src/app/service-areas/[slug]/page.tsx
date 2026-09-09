import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Callout } from "@/components/site-chrome";
import { getLocation, locations, services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocation((await params).slug);
  if (!location) return {};
  return {
    title: `AC Repair & HVAC Service in ${location.label}`,
    description: `Request AC repair, installation, maintenance, and urgent HVAC service in ${location.label} from HoxAir Heating & Cooling.`,
    alternates: { canonical: `/service-areas/${location.slug}` },
    openGraph: {
      title: `HVAC Service in ${location.label}`,
      description: `Cooling service for homeowners in ${location.label}.`,
      url: `/service-areas/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const location = getLocation((await params).slug);
  if (!location) notFound();
  const nearby = location.nearby.map(getLocation).filter((item) => item !== undefined);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `HVAC Service in ${location.label}`,
    serviceType: "Heating and cooling service",
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": location.slug === "ahwatukee" ? "AdministrativeArea" : "City", name: location.label },
    url: `${site.url}/service-areas/${location.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: location.label }]} />
      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">HoxAir local service</span>
          <h1>AC repair &amp; HVAC service in {location.label}</h1>
          <p className="lead">Straightforward cooling help for {location.intro}.</p>
          <div className="button-row">
            <a className="button" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
            <Link className="button button-outline" href="/contact">Request service</Link>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="shell content-grid">
          <article>
            <h2>Home cooling help in {location.name}</h2>
            <p className="lead">{location.localContext}</p>
            <p>HoxAir helps homeowners identify AC problems, understand available options, and plan service around the needs of the home. Whether the system has stopped cooling, struggles in peak heat, or is due for preventive care, the first step is a clear look at what is happening.</p>

            <h2>HVAC services available in {location.name}</h2>
            <div className="card-grid two-card-grid">
              {services.map((service) => (
                <Link className="card" key={service.slug} href={`/services/${service.slug}`}>
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <span className="card-link">Learn more</span>
                </Link>
              ))}
            </div>

            <h2>When to call for cooling service</h2>
            <p>Cooling concerns are often easier to address before they become complete breakdowns. Consider requesting service when you notice:</p>
            <ul className="check-list">
              <li>Warm or weak airflow from the vents</li>
              <li>Frequent cycling or unusually long run times</li>
              <li>New noises, odors, or moisture near the equipment</li>
              <li>Uneven temperatures between rooms</li>
              <li>An unexplained change in cooling performance</li>
            </ul>

            <h2>Nearby service areas</h2>
            <p>HoxAir also provides heating and cooling service information for nearby Valley communities.</p>
            <ul className="link-list">
              {nearby.map((area) => <li key={area.slug}><Link href={`/service-areas/${area.slug}`}>HVAC service in {area.label}</Link></li>)}
              <li><Link href="/service-areas">See every HoxAir service area</Link></li>
            </ul>

            <h2>Common questions from {location.name} homeowners</h2>
            <div className="faq">
              <details><summary>How can I request AC service in {location.name}?</summary><p>Call HoxAir at {site.phoneDisplay} or complete the demo service request form. Current scheduling and availability must be confirmed by phone.</p></details>
              <details><summary>Can HoxAir help if my AC is still running but not cooling well?</summary><p>Yes. Reduced cooling, weak airflow, and unusually long cycles are all useful reasons to request a system evaluation.</p></details>
              <details><summary>Does HoxAir offer urgent HVAC help?</summary><p>Call HoxAir to explain the situation and ask about current emergency service availability. If you smell gas, see smoke, or face an immediate safety risk, leave the area and contact emergency services first.</p></details>
            </div>
          </article>
          <aside className="sidebar-card">
            <span className="eyebrow light">{location.label}</span>
            <h2>Request local service</h2>
            <p>Talk through your cooling issue and ask about appointment availability in {location.name}.</p>
            <a className="button" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <Link className="button button-outline-light" href="/contact">Online request</Link>
          </aside>
        </div>
      </section>
      <Callout title={`Looking for HVAC help in ${location.name}?`} />
    </>
  );
}
