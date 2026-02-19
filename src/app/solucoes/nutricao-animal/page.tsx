import type { Metadata } from "next";
import NutricaoAnimalContent from "./content";

export const metadata: Metadata = {
  title: "Nutrição Animal | Soluções VetSulVet Distribuidora",
  description:
    "Suplementação mineral, sistemas de alimentação para bezerras e rações de alta performance. Parceria Agrifirm e Milk Bar para nutrição completa do rebanho.",
  keywords:
    "nutrição animal, suplementação mineral, bezerras, Agrifirm, Milk Bar, nutrição bovina, criação de bezerras, RS",
};

export default function Page() {
  return <NutricaoAnimalContent />;
}
