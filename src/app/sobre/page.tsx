import type { Metadata } from "next";
import SobreContent from "./content";

export const metadata: Metadata = {
  title: "Sobre a MAPSUL | 19 Anos de Dedicação à Pecuária Gaúcha",
  description:
    "Conheça a história, missão, visão e valores da MAPSUL Distribuidora. 19 anos distribuindo produtos veterinários, nutrição animal e sementes de pastagem no RS.",
  keywords:
    "sobre MAPSUL, história MAPSUL, distribuidora veterinária RS, Lagoa Vermelha, pecuária gaúcha, equipe MAPSUL",
};

export default function Page() {
  return <SobreContent />;
}
