import type { Metadata } from "next";
import ProdutosContent from "./content";

export const metadata: Metadata = {
  title: "Nossa Frota de Máquinas Pesadas | Jacó Locação",
  description:
    "Catálogo completo de retroescavadeiras, escavadeiras hidráulicas, pás carregadeiras, plataformas elevatórias e rolos compactadores para locação. Marcas como Bobcat, Case e Cat.",
  keywords:
    "locação de máquinas, jaco locacao, retroescavadeira, escavadeira hidráulica, plataformas elevatórias, rolo compactador",
  openGraph: {
    title: "Catálogo de Frota | Jacó Locação",
    description:
      "A melhor e mais moderna frota de máquinas pesadas para locação. Bobcat, Case, Caterpillar e muito mais.",
  },
};

export default function Page() {
  return <ProdutosContent />;
}
