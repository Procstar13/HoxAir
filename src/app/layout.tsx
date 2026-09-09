import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer, Header } from "@/components/site-chrome";
import { locations, services, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HoxAir Heating & Cooling | Phoenix, AZ HVAC Service",
    template: "%s | HoxAir Heating & Cooling",
  },
  description:
    "Request AC repair, air conditioning installation, AC maintenance, and urgent HVAC help from HoxAir in Phoenix and surrounding Arizona communities.",
  applicationName: site.name,
  icons: {
    icon: "/hoxair-logo.png",
    apple: "/hoxair-logo.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "HoxAir Heating & Cooling",
    description: "Reliable cooling help for Phoenix-area homes.",
    url: site.url,
    images: [{ url: "/hoxair-logo.png", width: 1024, height: 704, alt: "HoxAir Heating & Cooling" }],
  },
  twitter: {
    card: "summary",
    title: "HoxAir Heating & Cooling",
    description: "Reliable cooling help for Phoenix-area homes.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#112b4a",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: locations.map((location) => ({
    "@type": "City",
    name: location.label,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
