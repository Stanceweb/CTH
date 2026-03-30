import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ZohoWidget from "@/components/ZohoWidget";

const BASE_URL = "https://continentaltrustonline.online";
const BRAND = "Continental Trust Hosting";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Managed Web Hosting for Businesses | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description: "Fast, secure managed hosting with SSL, backups, monitoring, and responsive support for growing businesses.",
  openGraph: {
    type: "website",
    siteName: BRAND,
    title: `Managed Web Hosting for Businesses | ${BRAND}`,
    description: "Fast, secure managed hosting with SSL, backups, monitoring, and responsive support for growing businesses.",
    url: BASE_URL,
    images: [
      {
        url: "https://continentaltrustonline.online/images/hero/banner-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Managed Web Hosting for Businesses | ${BRAND}`,
    description: "Fast, secure managed hosting with SSL, backups, monitoring, and responsive support for growing businesses.",
    images: ["https://continentaltrustonline.online/images/hero/banner-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ZohoWidget />
      </body>
    </html>
  );
}
