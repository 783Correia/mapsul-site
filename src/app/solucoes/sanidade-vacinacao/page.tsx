import type { Metadata } from "next";
import SanidadeVacinacaoContent from "./content";

export const metadata: Metadata = {
  title: "Sanidade e Vacinação | Soluções VetSulVet Distribuidora",
  description:
    "Vacinas, antiparasitários e calendário sanitário completo para bovinos no RS. J-VAC, Ivomec Gold e mais. Consultoria para montar o calendário sanitário da sua propriedade.",
  keywords:
    "sanidade bovina, vacinação bovina, calendário sanitário, J-VAC, Ivomec Gold, antiparasitário, vacinas bovinas, RS",
};

export default function Page() {
  return <SanidadeVacinacaoContent />;
}
