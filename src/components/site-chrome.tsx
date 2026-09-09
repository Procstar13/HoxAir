import Image from "next/image";
import Link from "next/link";
import { locations, services, site } from "@/lib/site";

export function Brand() {
  return (
    <Link className="brand image-brand" href="/" aria-label="HoxAir home">
      <Image
        src="/hoxair-logo.png"
        alt="HoxAir Heating & Cooling"
        width={1024}
        height={704}
      />
    </Link>
  );
}

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Serving Phoenix and surrounding Valley communities</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <header className="header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/services">Services</Link>
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="button button-small header-call" href={`tel:${site.phone}`}>
            Call {site.phoneDisplay}
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <Link href="/services">Services</Link>
              <Link href="/service-areas">Service Areas</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p>Practical heating and cooling help for homeowners across the Phoenix metro area.</p>
          <a className="footer-phone" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div>
          <h2>Cooling Services</h2>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>
          ))}
        </div>
        <div>
          <h2>Popular Areas</h2>
          {locations.slice(0, 6).map((location) => (
            <Link key={location.slug} href={`/service-areas/${location.slug}`}>{location.label}</Link>
          ))}
          <Link href="/service-areas">View all service areas</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about">About HoxAir</Link>
          <Link href="/contact">Request Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} HoxAir Heating &amp; Cooling LLC</span>
        <span>Demo website · Business details to be verified before launch</span>
      </div>
      <div className="mobile-cta" aria-label="Quick actions">
        <a href={`tel:${site.phone}`}>Call now</a>
        <Link href="/contact">Request service</Link>
      </div>
    </footer>
  );
}

export function Callout({ title = "Ready for a more comfortable home?" }: { title?: string }) {
  return (
    <section className="callout">
      <div className="shell callout-inner">
        <div>
          <span className="eyebrow light">Local HVAC help</span>
          <h2>{title}</h2>
          <p>Tell HoxAir what your system is doing and request a convenient appointment.</p>
        </div>
        <div className="button-row">
          <a className="button button-white" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          <Link className="button button-outline-light" href="/contact">Request service</Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs shell" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label}>
          <span aria-hidden="true">/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
