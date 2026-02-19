import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const anosAtuacao = new Date().getFullYear() - 2007;

export const metadata: Metadata = {
  title: {
    default: "VetSulVet Distribuidora | Produtos Veterinários e Nutrição Animal no RS",
    template: "%s | VetSulVet Distribuidora",
  },
  description:
    `Há ${anosAtuacao} anos distribuindo produtos veterinários, nutrição animal e sementes de pastagem para pecuaristas do Rio Grande do Sul. Distribuidora oficial Boehringer Ingelheim, Agrifirm e Milk Bar em Passo Fundo, RS. Consultoria técnica especializada.`,
  keywords:
    "produtos veterinários RS, nutrição animal bovinos, sementes pastagem Rio Grande do Sul, distribuidora pecuária Passo Fundo, Ivomec Gold comprar, Kalvolac preço, IATF bovinos, sanidade animal RS, Boehringer Ingelheim RS, VetSulVet distribuidora",
  metadataBase: new URL("https://vetsulvet.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "VetSulVet Distribuidora",
    title: "VetSulVet Distribuidora | Produtos Veterinários e Nutrição Animal no RS",
    description:
      `Há ${anosAtuacao} anos distribuindo produtos veterinários, nutrição animal e sementes de pastagem para pecuaristas do Rio Grande do Sul. Consultoria técnica e entrega em todas as regiões.`,
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
  name: "VetSulVet Distribuidora",
  url: "https://vetsulvet.com.br",
  logo: "https://vetsulvet.com.br/logo.png",
  description:
    "Distribuição de produtos veterinários, nutrição animal e sementes de pastagem para pecuaristas do Rio Grande do Sul.",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Buarque de Macedo, 189",
    addressLocality: "Passo Fundo",
    addressRegion: "RS",
    postalCode: "99010-000",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-51-99000-0000",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://instagram.com/vetsulvet_distribuidora"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VetSulVet Distribuidora",
  image: "https://vetsulvet.com.br/logo.png",
  url: "https://vetsulvet.com.br",
  telephone: "+55-51-3333-0000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Buarque de Macedo, 189",
    addressLocality: "Passo Fundo",
    addressRegion: "RS",
    postalCode: "99010-000",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Produtos em Destaque — VetSulVet Distribuidora",
  description: "Principais produtos veterinários e de nutrição animal distribuídos pela VetSulVet no RS.",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Ivomec® Gold",
        description: "Formulação tixotrópica com Ivermectina 3,15%. Proteção por até 12 semanas contra berne e carrapatos.",
        brand: { "@type": "Brand", name: "Boehringer Ingelheim" },
        category: "Sanidade Animal",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Kalvolac Quick",
        description: "Substituto de leite premium para bezerras. Tecnologia holandesa para recria de alta performance.",
        brand: { "@type": "Brand", name: "Agrifirm" },
        category: "Nutrição Animal",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Milk Bar Individual",
        description: "Alimentador individual com bico de fluxo controlado para bezerros.",
        brand: { "@type": "Brand", name: "Milk Bar" },
        category: "Nutrição Animal",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Dermisan",
        description: "Solução premium para higiene e proteção do úbere. Pré e pós-dipping de alta eficácia.",
        brand: { "@type": "Brand", name: "Kersia" },
        category: "Higiene de Ordenha",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Amarillo",
        description: "Armadilha adesiva ecológica para controle de moscas em instalações pecuárias.",
        brand: { "@type": "Brand", name: "Luxembourg" },
        category: "Controle de Pragas",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VetSulVet Distribuidora",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "3",
    reviewCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Carlos Mendes" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "A VetSulVet sempre nos atendeu com agilidade e produtos de qualidade. A consultoria técnica faz toda a diferença.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ana Paula Silva" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Trabalhamos com a VetSulVet há mais de 10 anos. A confiança na qualidade dos produtos é o que nos mantém parceiros.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Roberto Ferreira" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "As sementes que compramos pela VetSulVet transformaram nossas pastagens. O suporte técnico é excepcional.",
    },
  ],
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
        <Script
          id="schema-products"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <Script
          id="schema-reviews"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
