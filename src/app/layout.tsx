import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MAPSUL Distribuidora | Produtos para Pecuária no RS",
    template: "%s | MAPSUL Distribuidora",
  },
  description:
    "Há 19 anos distribuindo produtos veterinários, nutrição animal e sementes de pastagem para pecuaristas do Rio Grande do Sul. Consultoria técnica especializada.",
  keywords:
    "pecuária, produtos veterinários, nutrição animal, sementes pastagem, RS, MAPSUL, IATF, Boehringer Ingelheim, Agrifirm",
  metadataBase: new URL("https://mapsul.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MAPSUL Distribuidora",
    title: "MAPSUL Distribuidora | Produtos para Pecuária no RS",
    description:
      "Há 19 anos distribuindo produtos veterinários, nutrição animal e sementes de pastagem para pecuaristas do Rio Grande do Sul.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAPSUL Distribuidora",
  url: "https://mapsul.com.br",
  logo: "https://mapsul.com.br/logo.png",
  description:
    "Distribuição de produtos veterinários, nutrição animal e sementes de pastagem para pecuaristas do Rio Grande do Sul.",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Buarque de Macedo, 189",
    addressLocality: "Lagoa Vermelha",
    addressRegion: "RS",
    postalCode: "95300-000",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-54-99635-6819",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://instagram.com/mapsul_distribuidora"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MAPSUL Distribuidora",
  image: "https://mapsul.com.br/logo.png",
  url: "https://mapsul.com.br",
  telephone: "+55-54-3358-1151",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Buarque de Macedo, 189",
    addressLocality: "Lagoa Vermelha",
    addressRegion: "RS",
    postalCode: "95300-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -28.2094,
    longitude: -51.5264,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
