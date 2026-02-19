"use client";

import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaDna, FaAppleAlt, FaShieldAlt, FaFileAlt } from "react-icons/fa";

const artigos = [
  {
    slug: "protocolo-iatf-guia-completo",
    titulo: "Protocolo IATF: Guia Completo para Maximizar a Taxa de Prenhez do seu Rebanho",
    resumo:
      "Entenda o funcionamento da IATF, os principais protocolos utilizados no Brasil e como a qualidade dos hormônios impacta diretamente na taxa de concepção.",
    data: "10 de fevereiro de 2026",
    tags: ["Reprodução", "IATF", "Bovinos"],
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
  },
  {
    slug: "nutricao-bezerras-desenvolvimento",
    titulo: "Nutrição de Bezerras: Como Garantir o Melhor Desenvolvimento nos Primeiros Meses",
    resumo:
      "Os primeiros meses de vida definem o futuro produtivo da bezerra. Saiba como a nutrição adequada impacta no desenvolvimento e na produção futura.",
    data: "3 de fevereiro de 2026",
    tags: ["Nutrição", "Bezerras", "Manejo"],
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
  },
  {
    slug: "calendario-sanitario-bovino-rs-2026",
    titulo: "Calendário Sanitário Bovino RS 2026: O Que Vacinar e Quando",
    resumo:
      "Guia completo com tabela mensal de vacinações e ações sanitárias para bovinos no Rio Grande do Sul. Mantenha seu rebanho protegido o ano inteiro.",
    data: "27 de janeiro de 2026",
    tags: ["Sanidade", "Vacinação", "RS"],
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800&q=80",
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Reprodução": FaDna,
  "Nutrição": FaAppleAlt,
  "Sanidade": FaShieldAlt,
};

const categoryColors: Record<string, string> = {
  "Reprodução": "from-pink-500/20 to-pink-900/40",
  "Nutrição": "from-amber-500/20 to-amber-900/40",
  "Sanidade": "from-emerald-500/20 to-emerald-900/40",
};

export default function BlogListContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime rounded-full translate-y-1/2 translate-x-1/3 blur-3xl" />
        </div>
        <div className="container-main relative text-center">
          <div
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-display-sm text-white">
              Conteúdo Técnico para Pecuaristas
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
              Artigos, guias e dicas para melhorar a produtividade e a saúde do
              seu rebanho.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <article
                key={artigo.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <Link href={`/blog/${artigo.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[artigo.tags[0]] || "from-gray-500/20 to-gray-900/40"} transition-transform duration-700 group-hover:scale-105 flex items-center justify-center`}>
                      {(() => {
                        const Icon = categoryIcons[artigo.tags[0]] || FaFileAlt;
                        return <Icon className="text-lime text-5xl opacity-50" />;
                      })()}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {artigo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-lime text-forest text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <FaCalendarAlt className="text-[10px]" />
                      {artigo.data}
                    </div>
                    <h2 className="font-bold text-dark text-lg tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {artigo.titulo}
                    </h2>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-3">
                      {artigo.resumo}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-lime text-xs font-bold">
                      Ler artigo
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
