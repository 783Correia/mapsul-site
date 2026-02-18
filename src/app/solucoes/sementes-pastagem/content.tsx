"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaWhatsapp,
  FaSeedling,
  FaSun,
  FaCloudRain,
  FaSnowflake,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cultivares = [
  {
    nome: "Aveia Preta (Biscayart)",
    epoca: "Outono/Inverno",
    icon: FaSnowflake,
    descricao: "Alta produção de massa verde. Ideal para pastejo direto e cobertura de solo no inverno gaúcho.",
  },
  {
    nome: "Azevém Baqueano (Biscayart)",
    epoca: "Outono/Inverno",
    icon: FaSnowflake,
    descricao: "Ciclo longo e alta qualidade nutricional. Genética europeia selecionada com alta produção.",
  },
  {
    nome: "Crotalária",
    epoca: "Primavera/Verão",
    icon: FaSun,
    descricao: "Leguminosa para adubação verde e fixação de nitrogênio. Recupera solos degradados e quebra ciclo de nematoides.",
  },
  {
    nome: "Trevo Branco",
    epoca: "Outono/Inverno",
    icon: FaCloudRain,
    descricao: "Leguminosa perene de alta digestibilidade. Ideal para consórcio com gramíneas, fixando nitrogênio no solo.",
  },
  {
    nome: "Milheto ADR 300 (Atto)",
    epoca: "Primavera/Verão",
    icon: FaSun,
    descricao: "Gramínea de verão com alto potencial forrageiro. Rápido estabelecimento e tolerância à seca.",
  },
  {
    nome: "Capim Sudão",
    epoca: "Primavera/Verão",
    icon: FaSun,
    descricao: "Forrageira anual de verão com excelente produção de massa. Ideal para pastejo rotacionado intensivo.",
  },
];

export default function SementesPastagemContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime mb-6">
              <FaSeedling className="text-[10px]" />
              Sementes de Pastagem
            </span>
            <h1 className="text-display-sm text-white">
              Formação e Recuperação de Pastagens de Alta Qualidade
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
              Sementes certificadas e cultivares adaptadas ao clima do Rio Grande do Sul.
              Consultoria técnica para escolher a cultivar certa para cada situação.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={getWhatsAppLink("Olá! Gostaria de consultoria sobre sementes de pastagem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Consultoria de Pastagem
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importância */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Fundamento
              </span>
              <h2 className="text-heading text-dark">
                A Pastagem é a Base da Pecuária Rentável
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  No Rio Grande do Sul, onde a pecuária a pasto é predominante, a qualidade
                  da pastagem define diretamente a produtividade do rebanho. Uma pastagem
                  bem formada e manejada fornece nutrientes a baixo custo, reduz a
                  dependência de suplementação e melhora a eficiência produtiva.
                </p>
                <p>
                  A <strong className="text-dark">escolha da cultivar correta</strong> deve
                  considerar o tipo de solo, o clima da região, a época de plantio, o sistema
                  de produção (corte ou leite) e a categoria animal que irá pastorejar.
                  Cultivares mal adaptadas resultam em baixa produtividade, falhas no
                  estabelecimento e desperdício de investimento.
                </p>
                <p>
                  A MAPSUL trabalha com sementes de <strong className="text-dark">alta pureza
                    e germinação comprovada</strong>, de fornecedores certificados como Biscayart
                  e outras marcas líderes, garantindo o melhor resultado no campo.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultivares */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Catálogo"
            title="Cultivares Disponíveis"
            description="Sementes para todas as estações, adaptadas ao clima gaúcho."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products
              .filter((p) => p.category === "Sementes")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cultivares.map((cv, i) => (
              <motion.div
                key={cv.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover p-7 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-forest transition-all duration-400">
                    <cv.icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white tracking-tight">{cv.nome}</h3>
                    <p className="text-lime/60 text-xs">{cv.epoca}</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{cv.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main max-w-3xl">
          <SectionHeading
            tag="Orientação"
            title="Dicas para uma Pastagem de Sucesso"
          />

          <div className="space-y-4">
            {[
              "Faça análise de solo antes do plantio — a correção adequada do pH e fertilidade é fundamental",
              "Respeite a época ideal de plantio de cada cultivar — consulte nosso técnico",
              "Use taxa de semeadura recomendada — nem mais, nem menos",
              "Considere o consórcio de gramíneas com leguminosas para fixação biológica de nitrogênio",
              "Implante pastejo rotacionado para maior longevidade e produtividade da pastagem",
              "Evite pastejo excessivo — respeite a altura de entrada e saída dos piquetes",
            ].map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card"
              >
                <div className="w-8 h-8 bg-lime/10 rounded-lg flex items-center justify-center text-lime font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <motion.div
            {...fadeUp}
            className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            style={{ backgroundColor: "#0a2010", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-lime/[0.08] rounded-full translate-x-1/3 -translate-y-1/3 blur-[100px]" />
            <div className="relative">
              <FaSeedling className="text-lime text-3xl mx-auto mb-4" />
              <h2 className="text-heading text-white max-w-xl mx-auto">
                Consultoria para escolha da cultivar certa
              </h2>
              <p className="text-white/50 mt-3 max-w-md mx-auto leading-relaxed text-sm">
                Nosso consultor avalia o solo, clima e sistema de produção da sua
                propriedade para recomendar as melhores cultivares e o manejo ideal.
              </p>
              <a
                href={getWhatsAppLink("Olá! Preciso de consultoria para escolher as melhores sementes de pastagem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-forest font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all mt-6"
              >
                <FaWhatsapp className="text-sm" />
                Falar com Consultor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
