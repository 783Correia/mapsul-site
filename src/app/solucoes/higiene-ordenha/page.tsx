import type { Metadata } from "next";
import HigieneOrdenhaContent from "./content";

export const metadata: Metadata = {
    title: "Higiene de Ordenha | Produtos para Qualidade do Leite",
    description:
        "Produtos Kersia para higiene de ordenha: pré-dipping, pós-dipping, Dermisan e soluções para qualidade do leite. Proteção do úbere e prevenção de mastite para produtores de leite do RS.",
    keywords:
        "higiene ordenha, pré-dipping, pós-dipping, Dermisan, Kersia, qualidade do leite, mastite, pecuária leiteira RS",
    openGraph: {
        title: "Higiene de Ordenha | MAPSUL Distribuidora",
        description:
            "Soluções completas para higiene de ordenha e qualidade do leite. Produtos Kersia com entrega em todo o RS.",
    },
};

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow">
                <HigieneOrdenhaContent />
            </div>
        </div>
    );
}
