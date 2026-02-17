export interface Product {
    id: string;
    name: string;
    brand: string;
    category: "Sanidade" | "Nutrição" | "Sementes" | "Pragas" | "Higiene" | "Reprodução";
    description: string;
    image: string;
    slug: string;
}

export const products: Product[] = [
    // SANIDADE (Boehringer)
    {
        id: "ivomec-gold",
        name: "Ivomec® Gold",
        brand: "Boehringer Ingelheim",
        category: "Sanidade",
        description: "Ivermectina 3,15% tixotrópica. O padrão ouro no controle de parasitas internos e externos.",
        image: "https://mapsul.com.br/wp-content/uploads/2019/07/Ivomec-Gold-1.jpg",
        slug: "ivomec-gold",
    },
    {
        id: "j-vac",
        name: "J-VAC®",
        brand: "Boehringer Ingelheim",
        category: "Sanidade",
        description: "Vacina contra mastite ambiental. Proteção contra E. coli e Salmonella.",
        image: "https://mapsul.com.br/wp-content/uploads/2019/07/J-Vac.jpg",
        slug: "j-vac",
    },
    {
        id: "topline-pour-on",
        name: "Topline® Pour-on",
        brand: "Boehringer Ingelheim",
        category: "Sanidade",
        description: "Fipronil de alta concentração. Controle de carrapatos, berne e bicheiras.",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80", // Fallback (real image not found in scrape, using placeholder temporarily or generic boehringer if exists)
        slug: "topline-pour-on",
    },
    // NUTRIÇÃO (Agrifirm / Milk Bar)
    {
        id: "kalvolac-quick",
        name: "Kalvolac Quick",
        brand: "Agrifirm",
        category: "Nutrição",
        description: "Sucedâneo lácteo premium. Tecnologia holandesa para máximo desenvolvimento de bezerras.",
        image: "https://mapsul.com.br/wp-content/uploads/2025/05/Sem-titulo-1-2.png",
        slug: "kalvolac-quick",
    },
    {
        id: "milk-bar-1",
        name: "Milk Bar 1",
        brand: "Milk Bar",
        category: "Nutrição",
        description: "Alimentador individual com bico de fluxo controlado. Melhora a digestão e saúde.",
        image: "https://mapsul.com.br/wp-content/uploads/2019/07/Alimentador-Indivudual-Milk-Bar-1.jpg",
        slug: "milk-bar-1",
    },
    // PRAGAS (Luxembourg)
    {
        id: "amarillo",
        name: "Amarillo",
        brand: "Luxembourg",
        category: "Pragas",
        description: "Armadilha adesiva ecológica. Controle eficaz de moscas sem veneno.",
        image: "https://mapsul.com.br/wp-content/uploads/2019/07/Herbicida-Amarillo.jpg",
        slug: "amarillo",
    },
    // SEMENTES (Biscayart / Atto)
    {
        id: "azevem-baqueano",
        name: "Azevém Baqueano",
        brand: "Biscayart",
        category: "Sementes",
        description: "Tetraplóide de ciclo longo. Alta produção de massa verde e resistência.",
        image: "https://mapsul.com.br/wp-content/uploads/2019/07/Azeve%CC%81m-Baqueano-Vetorizado.png",
        slug: "azevem-baqueano",
    },
    // HIGIENE (Kersia)
    {
        id: "dermisan",
        name: "Dermisan",
        brand: "Kersia",
        category: "Higiene",
        description: "Solução para higiene de ordenha. Proteção e cuidado para o úbere.",
        image: "https://mapsul.com.br/wp-content/uploads/2025/05/Sem-titulo-1-3.png",
        slug: "dermisan",
    },
    // SEMENTES (ATTO)
    {
        id: "atto-adr-300",
        name: "ATTO ADR 300",
        brand: "ATTO Sementes",
        category: "Sementes",
        description: "Milheto híbrido de alta produção de massa verde e excelente palatabilidade. Alta resistência e vigor.",
        image: "/images/products/atto_adr300.jpg",
        slug: "atto-adr-300",
    },
    // ACESSÓRIOS
    {
        id: "bomba-dosadora",
        name: "Bomba Dosadora",
        brand: "Kersia",
        category: "Higiene",
        description: "Equipamento preciso para dosagem de produtos químicos na ordenha. Garante economia e eficiência.",
        image: "/images/products/hygiene_pump.jpg",
        slug: "bomba-dosadora",
    },
    {
        id: "caneca-dipping",
        name: "Caneca de Dipping",
        brand: "Kersia",
        category: "Higiene",
        description: "Caneca aplicadora para pós-dipping sem retorno. Evita contaminação cruzada e desperdício.",
        image: "/images/products/hygiene_cup.jpg",
        slug: "caneca-dipping",
    },
];
