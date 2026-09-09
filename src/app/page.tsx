import Link from "next/link";
import { Callout } from "@/components/site-chrome";
import { locations, services, site } from "@/lib/site";

const serviceStages = ["Restore", "Upgrade", "Protect", "Urgent help"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Phoenix-area heating &amp; cooling</span>
            <h1>Stay cool when the <span>desert heats up.</span></h1>
            <p className="lead">
              Straightforward AC service for Phoenix-area homeowners—from urgent repairs to planned replacements and seasonal tune-ups.
            </p>
            <ul className="hero-points">
              <li>Local service</li>
              <li>Clear options</li>
              <li>Home-focused care</li>
            </ul>
            <div className="button-row">
              <a className="button" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
              <Link className="button button-outline" href="/contact">Request service</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-band">
        <div className="shell trust-row" aria-label="Service highlights">
          <div className="trust-item"><strong>Phoenix-area service</strong><span>Across the Valley</span></div>
          <div className="trust-item"><strong>Cooling focused</strong><span>Built for Arizona homes</span></div>
          <div className="trust-item"><strong>Easy to reach</strong><span>Call or request service online</span></div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">Cooling services</span><h2>Help for every stage of your AC system.</h2></div>
            <p>From the first unusual sound to a complete system replacement, HoxAir helps you understand your options.</p>
          </div>
          <div className="service-showcase">
            {services.map((service, index) => (
              <Link className={`service-tile service-tile-${index + 1}`} key={service.slug} href={`/services/${service.slug}`}>
                <div className="service-tile-top">
                  <span className="service-stage">{serviceStages[index]}</span>
                  <span className="service-number" aria-hidden="true">0{index + 1}</span>
                </div>
                <div className="service-tile-copy">
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                </div>
                <span className="service-action">Explore service <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell split">
          <div className="feature-art" role="img" aria-label="HoxAir Heating and Cooling logo">
            <div className="feature-badge"><strong>Comfort made clear.</strong><span>Practical recommendations for your home.</span></div>
          </div>
          <div>
            <span className="eyebrow">A better service experience</span>
            <h2>HVAC decisions should not feel complicated.</h2>
            <p className="lead">HoxAir’s approach centers on careful diagnosis, plain-language recommendations, and respect for your home.</p>
            <ul className="check-list">
              <li>Explain what the system is doing</li>
              <li>Review practical repair or replacement paths</li>
              <li>Keep you informed from request to completion</li>
            </ul>
            <Link className="button button-outline" href="/about">Get to know HoxAir</Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">Local service areas</span><h2>Serving communities across the Valley.</h2></div>
            <Link className="card-link" href="/service-areas">View all service areas</Link>
          </div>
          <div className="areas-grid">
            {locations.map((location) => (
              <Link className="area-link" key={location.slug} href={`/service-areas/${location.slug}`}>
                {location.name}<span>Heating &amp; cooling service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Callout />
    </>
  );
}
