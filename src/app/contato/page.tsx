import type { Metadata } from "next";
import ContatoContent from "./content";

export const metadata: Metadata = {
  title: "Contato | Jacó Locação — Fale Conosco",
  description:
    "Entre em contato com a Jacó Locação. WhatsApp, formulário de contato e localização. Atendimento para construtoras em todo o Brasil.",
  keywords:
    "contato jaco locacao, WhatsApp jaco locacao, locacao retroescavadeira contato, SP",
};

export default function Page() {
  return <ContatoContent />;
}
