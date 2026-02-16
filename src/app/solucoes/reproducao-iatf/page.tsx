import type { Metadata } from "next";
import ReproducaoIATFContent from "./content";

export const metadata: Metadata = {
  title: "Reprodução e IATF | Soluções MAPSUL Distribuidora",
  description:
    "Soluções completas para IATF (Inseminação Artificial em Tempo Fixo). Linha hormonal Boehringer Ingelheim, protocolos e consultoria técnica para maximizar a taxa de prenhez do seu rebanho.",
  keywords:
    "IATF, inseminação artificial, reprodução bovina, hormônios bovinos, Boehringer Ingelheim, taxa de prenhez, protocolo IATF, RS",
};

export default function Page() {
  return <ReproducaoIATFContent />;
}
