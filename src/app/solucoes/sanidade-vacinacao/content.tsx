"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaCalendarCheck,
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

const calendario = [
  { mes: "Janeiro", acoes: "Vacinação contra raiva (áreas de risco), controle de ectoparasitas" },
  { mes: "Fevereiro", acoes: "Vermifugação de categorias jovens, controle de moscas-dos-chifres" },
  { mes: "Março", acoes: "Vacinação contra clostridioses (reforço), coleta de exames reprodutivos" },
  { mes: "Abril", acoes: "Vacinação contra brucelose (fêmeas 3–8 meses), vermifugação estratégica" },
  { mes: "Maio", acoes: "Vacinação contra febre aftosa (campanha estadual), carbúnculo sintomático" },
  { mes: "Junho", acoes: "Controle de carrapatos (tratamento estratégico), reforço clostridioses" },
  { mes: "Julho", acoes: "Vermifugação (período crítico de helmintos), vacinação contra IBR/BVD" },
  { mes: "Agosto", acoes: "Vacinação contra leptospirose, exames pré-estação de monta" },
  { mes: "Setembro", acoes: "Vacinação contra clostridioses em bezerros, controle de carrapatos" },
  { mes: "Outubro", acoes: "Vacinação contra raiva (reforço), desverminação de bezerros" },
  { mes: "Novembro", acoes: "Vacinação contra febre aftosa (2ª campanha), controle de moscas" },
  { mes: "Dezembro", acoes: "Vermifugação pós-desmame, avaliação sanitária do rebanho" },
];

export default function SanidadeVacinacaoContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1704221191316-168a25edbc59?w=1920&q=80')",
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
              <FaShieldAlt className="text-[10px]" />
              Sanidade e Vacinação
            </span>
            <h1 className="text-display-sm text-white">
              Proteja Seu Rebanho com o Calendário Sanitário Completo
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
              Vacinas, antiparasitários e produtos de sanidade das melhores marcas.
              Nossos consultores ajudam a montar o calendário sanitário ideal para
              sua propriedade.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/5554996356819?text=Olá! Quero montar o calendário sanitário da minha propriedade."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Montar Meu Calendário
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
                Prevenção
              </span>
              <h2 className="text-heading text-dark">
                Vacinação Preventiva: O Melhor Investimento
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  A vacinação preventiva é o pilar da sanidade do rebanho. Doenças como
                  clostridioses, brucelose, raiva, IBR, BVD e leptospirose causam perdas
                  econômicas significativas que podem ser evitadas com um programa
                  vacinal bem estruturado.
                </p>
                <p>
                  Além das vacinas, o controle parasitário com antiparasitários de
                  qualidade comprovada — como o <strong className="text-dark">Ivomec Gold</strong> e
                  a linha da Boehringer Ingelheim — garante que seus animais estejam livres
                  de vermes, carrapatos e berne, otimizando a conversão alimentar e o
                  ganho de peso.
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
                    "url('https://images.unsplash.com/photo-1704221191316-168a25edbc59?w=800&q=80')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produtos (Padrão Sementes: Fundo Forest) */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Catálogo"
            title="Produtos em Destaque"
            description="Soluções completas para a sanidade do seu rebanho."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => p.category === "Sanidade")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      {/* Calendário */}
      <section className="bg-forest section-padding relative overflow-hidden" >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Referência"
            title="Calendário Sanitário Bovino — RS"
            description="Guia mensal com as principais ações sanitárias para bovinos no Rio Grande do Sul. Consulte nosso técnico para personalizar conforme sua região."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {calendario.map((item, i) => (
              <motion.div
                key={item.mes}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaCalendarCheck className="text-lime" />
                  <h3 className="font-bold text-white text-sm">{item.mes}</h3>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{item.acoes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

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
              <FaShieldAlt className="text-lime text-3xl mx-auto mb-4" />
              <h2 className="text-heading text-white max-w-xl mx-auto">
                Monte o calendário sanitário da sua propriedade
              </h2>
              <p className="text-white/50 mt-3 max-w-md mx-auto leading-relaxed text-sm">
                Nosso consultor técnico avalia a situação sanitária do seu rebanho
                e monta um programa personalizado de vacinação e controle parasitário.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a
                  href={getWhatsAppLink("Olá! Quero montar o calendário sanitário da minha propriedade.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime text-forest font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all"
                >
                  <FaWhatsapp className="text-sm" />
                  Falar com Consultor
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
