import type { Metadata } from "next";
import SobreContent from "./content";

export const metadata: Metadata = {
  title: "Sobre a VetSulVet | 19 Anos de Dedicação à Pecuária Gaúcha",
  description:
    "Conheça a história, missão, visão e valores da VetSulVet Distribuidora. 19 anos distribuindo produtos veterinários, nutrição animal e sementes de pastagem no RS.",
  keywords:
    "sobre VetSulVet, história VetSulVet, distribuidora veterinária RS, Passo Fundo, pecuária gaúcha, equipe VetSulVet",
};

export default function Page() {
  return <SobreContent />;
}
