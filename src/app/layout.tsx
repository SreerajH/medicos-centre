import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { clinic } from "@/lib/clinic";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: "Medicos Centre | Diagnostic Lab & Medical Testing, Chandigarh",
  description:
    "North India's trusted diagnostic lab since 1984. Blood tests, ultrasound, ECG, PFT, cardiac stress test and home sample collection across Chandigarh, Punjab, Haryana and Himachal Pradesh. 10,000 sq ft lab. 100+ specialists.",
  keywords: [
    "diagnostic lab Chandigarh",
    "blood tests Chandigarh",
    "ultrasound Chandigarh",
    "ECG Chandigarh",
    "PFT Chandigarh",
    "TMT stress test Chandigarh",
    "home sample collection Chandigarh",
    "Medicos Centre since 1984",
  ],
  openGraph: {
    title: "Medicos Centre | Trusted diagnostics since 1984",
    description:
      "40 years of trusted diagnostics across Chandigarh, Punjab, Haryana and Himachal Pradesh. Book a test or access your report online.",
    url: clinic.url,
    siteName: clinic.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: clinic.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DiagnosticLab",
  name: clinic.name,
  url: clinic.url,
  telephone: clinic.helpline,
  email: clinic.email,
  foundingDate: `${clinic.foundedYear}`,
  areaServed: ["Chandigarh", "Punjab", "Haryana", "Himachal Pradesh"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.zip,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.geo.lat,
    longitude: clinic.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  availableService: [
    "Clinical Lab Testing",
    "Pathology & Molecular Testing",
    "Ultrasonography",
    "ECG",
    "Pulmonary Function Test",
    "Cardiac Stress Test (TMT)",
    "Home Sample Collection",
  ].map((s) => ({ "@type": "MedicalTest", name: s })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: clinic.helpline,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "pa"],
    },
    {
      "@type": "ContactPoint",
      telephone: clinic.appointments,
      contactType: "reservations",
    },
    {
      "@type": "ContactPoint",
      telephone: clinic.homeVisits,
      contactType: "home sample collection",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
