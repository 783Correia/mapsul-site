import type { Metadata } from "next";
import ArtigoNutricaoContent from "./content";

export const metadata: Metadata = {
  title: "Nutrição de Bezerras: Como Garantir o Melhor Desenvolvimento | Blog VetSulVet",
  description:
    "Guia completo sobre nutrição de bezerras nos primeiros meses de vida. Aleitamento, desmame, concentrado e manejo nutricional para máximo desempenho futuro.",
  keywords:
    "nutrição bezerras, criação de bezerras, aleitamento, desmame, concentrado bezerras, Milk Bar, manejo nutricional",
};

export default function Page() {
  return <ArtigoNutricaoContent />;
}
