import type { Metadata } from "next";
import ControlePragasContent from "./content";

export const metadata: Metadata = {
  title: "Controle de Pragas | Soluções MAPSUL Distribuidora",
  description:
    "Armadilha adesiva ecológica Amarillo para controle de moscas em instalações pecuárias. Solução prática, sem veneno e eficiente para o manejo de pragas.",
  keywords:
    "controle de pragas, Amarillo, armadilha adesiva, moscas, pecuária, controle ecológico, moscas-dos-chifres, RS",
};

export default function Page() {
  return <ControlePragasContent />;
}
