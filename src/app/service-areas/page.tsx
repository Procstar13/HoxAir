import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Callout } from "@/components/site-chrome";
import { locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "HVAC Service Areas Near Phoenix, AZ",
  description: "Find HoxAir heating and cooling service information for Phoenix, Ahwatukee, Sun City, Surprise, Mesa, Tempe, Scottsdale, Buckeye, Gilbert, and Avondale.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Service Areas" }]} />
      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">Phoenix metro service area</span>
          <h1>Local HVAC help across the Valley.</h1>
          <p className="lead">Explore AC repair, installation, maintenance, and urgent service information for your Arizona community.</p>
        </div>
      </header>
      <section className="section section-cream">
        <div className="shell">
          <div className="areas-grid">
            {locations.map((location) => (
              <Link className="area-link" key={location.slug} href={`/service-areas/${location.slug}`}>
                {location.label}<span>View local HVAC services</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Callout />
    </>
  );
}
