import type { Metadata } from "next";
import BlogListContent from "./content";

export const metadata: Metadata = {
  title: "Blog | MAPSUL Distribuidora — Dicas e Conteúdo Técnico para Pecuaristas",
  description:
    "Artigos técnicos sobre reprodução bovina, nutrição animal, sanidade, vacinação e manejo de pastagens. Conteúdo para pecuaristas do Rio Grande do Sul.",
  keywords:
    "blog pecuária, IATF, nutrição bovina, calendário sanitário, pastagem, pecuária RS, manejo bovino",
};

export default function Page() {
  return <BlogListContent />;
}
