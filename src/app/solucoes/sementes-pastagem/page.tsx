import type { Metadata } from "next";
import SementesPastagemContent from "./content";

export const metadata: Metadata = {
  title: "Sementes de Pastagem | Soluções MAPSUL Distribuidora",
  description:
    "Sementes certificadas para formação e recuperação de pastagens no RS. Cultivares adaptadas ao clima gaúcho: aveia, azevém, crotalária, trevo e mais.",
  keywords:
    "sementes de pastagem, aveia preta, azevém, crotalária, trevo, pastagem RS, formação de pastagem, recuperação de pastagem",
};

export default function Page() {
  return <SementesPastagemContent />;
}
