import type { Metadata } from "next";
import ContatoContent from "./content";

export const metadata: Metadata = {
  title: "Contato | VetSulVet Distribuidora — Fale Conosco",
  description:
    "Entre em contato com a VetSulVet Distribuidora. WhatsApp (51) 99000-0000, formulário de contato, localização em Passo Fundo/RS. Atendimento para pecuaristas de todo o RS.",
  keywords:
    "contato VetSulVet, WhatsApp VetSulVet, Passo Fundo RS, distribuidora veterinária contato, pecuária RS",
};

export default function Page() {
  return <ContatoContent />;
}
