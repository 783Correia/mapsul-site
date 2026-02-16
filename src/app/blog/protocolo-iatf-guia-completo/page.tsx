import type { Metadata } from "next";
import ArtigoIATFContent from "./content";

export const metadata: Metadata = {
  title: "Protocolo IATF: Guia Completo para Maximizar a Taxa de Prenhez | Blog MAPSUL",
  description:
    "Guia técnico completo sobre IATF (Inseminação Artificial em Tempo Fixo). Entenda os protocolos, hormônios utilizados e como maximizar a taxa de prenhez do seu rebanho bovino.",
  keywords:
    "protocolo IATF, inseminação artificial tempo fixo, taxa de prenhez, hormônios IATF, reprodução bovina, Boehringer Ingelheim",
};

export default function Page() {
  return <ArtigoIATFContent />;
}
