import type { Metadata } from "next";
import ProdutosContent from "./content";

export const metadata: Metadata = {
  title: "Produtos Veterinários para Pecuária | Catálogo VetSulVet",
  description:
    "Catálogo completo de produtos veterinários, nutrição animal, sementes de pastagem e controle de pragas. Ivomec Gold, Kalvolac, Amarillo e mais. Entrega em todo o RS.",
  keywords:
    "produtos veterinários, catálogo pecuária, Ivomec Gold, Kalvolac, nutrição animal, sementes pastagem, RS, comprar produtos veterinários",
  openGraph: {
    title: "Catálogo de Produtos | VetSulVet Distribuidora",
    description:
      "Encontre medicamentos, suplementos, sementes e equipamentos para pecuária. Distribuidora oficial Boehringer Ingelheim, Agrifirm e Milk Bar no RS.",
  },
};

export default function Page() {
  return <ProdutosContent />;
}
