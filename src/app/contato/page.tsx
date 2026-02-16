import type { Metadata } from "next";
import ContatoContent from "./content";

export const metadata: Metadata = {
  title: "Contato | MAPSUL Distribuidora — Fale Conosco",
  description:
    "Entre em contato com a MAPSUL Distribuidora. WhatsApp (54) 99669-5509, formulário de contato, localização em Lagoa Vermelha/RS. Atendimento para pecuaristas de todo o RS.",
  keywords:
    "contato MAPSUL, WhatsApp MAPSUL, Lagoa Vermelha RS, distribuidora veterinária contato, pecuária RS",
};

export default function Page() {
  return <ContatoContent />;
}
