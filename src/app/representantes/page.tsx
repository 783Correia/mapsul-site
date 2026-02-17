import type { Metadata } from "next";
import RepresentantesContent from "./content";

export const metadata: Metadata = {
  title: "Representantes no RS | Atendimento em Todo o Estado",
  description:
    "Encontre o representante MAPSUL mais próximo da sua região. Atendemos pecuaristas em todo o Rio Grande do Sul: Serra Gaúcha, Campos de Cima da Serra, Campanha, Noroeste e região metropolitana.",
  keywords:
    "representantes pecuária RS, distribuidora veterinária Lagoa Vermelha, atendimento pecuaristas Rio Grande do Sul, comprar produtos veterinários RS",
  openGraph: {
    title: "Representantes MAPSUL no Rio Grande do Sul",
    description:
      "Atendemos pecuaristas em todas as regiões do RS. Entre em contato com nosso representante mais próximo.",
  },
};

export default function Page() {
  return <RepresentantesContent />;
}
