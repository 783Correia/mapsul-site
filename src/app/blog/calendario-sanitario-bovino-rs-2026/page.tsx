import type { Metadata } from "next";
import ArtigoCalendarioContent from "./content";

export const metadata: Metadata = {
  title: "Calendário Sanitário Bovino RS 2026: O Que Vacinar e Quando | Blog MAPSUL",
  description:
    "Calendário sanitário completo para bovinos no Rio Grande do Sul em 2026. Tabela mensal com vacinações, vermifugações e ações sanitárias essenciais.",
  keywords:
    "calendário sanitário bovino, vacinação bovina RS, vermifugação bovinos, aftosa RS 2026, clostridioses, brucelose, calendário vacinal",
};

export default function Page() {
  return <ArtigoCalendarioContent />;
}
