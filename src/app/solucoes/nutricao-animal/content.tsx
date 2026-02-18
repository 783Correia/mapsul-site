"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaWhatsapp,
  FaArrowRight,
  FaAppleAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";



const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function NutricaoAnimalContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-36 md:pt-40 pb-28 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549420063-e382d6da5722?w=1920&q=80')",
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
              <FaAppleAlt className="text-[10px]" />
              Nutrição Animal
            </span>
            <h1 className="text-display-sm text-white">
              Nutrição de Alta Performance para Seu Rebanho
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
              Suplementação mineral, sistemas de alimentação para bezerras e rações
              formuladas para máxima produtividade. Parceria com Agrifirm e Milk Bar.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={getWhatsAppLink("Olá! Gostaria de consultoria sobre nutrição animal.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Consultoria Nutricional
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Criação de Bezerras */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Destaque
              </span>
              <h2 className="text-heading text-dark">
                Criação de Bezerras: O Melhor Começo para um Futuro Produtivo
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Os primeiros meses de vida de uma bezerra definem todo o seu potencial
                  produtivo. Uma nutrição adequada nessa fase impacta diretamente no
                  desenvolvimento ruminal, ganho de peso, idade ao primeiro serviço e
                  produção de leite na vida adulta.
                </p>
                <p>
                  A MAPSUL promove eventos e capacitações sobre criação de bezerras, como
                  o seminário <strong className="text-dark">&quot;Criação de Bezerras — O melhor
                    começo para um futuro produtivo&quot;</strong>, onde especialistas compartilham
                  as melhores práticas de manejo nutricional desde o nascimento.
                </p>
                <p>
                  Trabalhamos com o <strong className="text-dark">sistema Milk Bar</strong>,
                  desenvolvido na Nova Zelândia, que simula a amamentação natural e promove
                  alimentação controlada, reduzindo problemas digestivos e melhorando o
                  desempenho das bezerras.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative overflow-hidden aspect-[4/3]"
              style={{
                borderRadius: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/images/mapsul-nutri-animal.png"
                alt="Nutrição Animal MAPSUL"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agrifirm */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeUp}
              className="order-2 lg:order-1 bg-forest rounded-3xl p-10 flex items-center justify-center aspect-[4/3]"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-lime mb-2">
                  Agrifirm
                </div>
                <p className="text-white/30 text-sm mt-2">Nutrição Animal de Precisão</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Parceria
              </span>
              <h2 className="text-heading text-dark">
                Agrifirm: Nutrição de Precisão
              </h2>
              <p className="text-gray-500 leading-relaxed mt-6">
                Em parceria com a Agrifirm, oferecemos soluções nutricionais baseadas
                em ciência e formulações de alto desempenho para todas as fases de criação:
              </p>

              <div className="mt-8">
                <a
                  href="https://www.agrifirm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Conhecer a Agrifirm
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catálogo Nutrição (Padrão Sementes: Fundo Forest) */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Catálogo"
            title="Produtos em Destaque"
            description="Nutrição de precisão para alta performance."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => p.category === "Nutrição")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      {/* Evento */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <motion.div
            {...fadeUp}
            className="glass-card p-10 md:p-14 max-w-3xl mx-auto text-center"
          >
            <FaCalendarAlt className="text-lime text-3xl mx-auto mb-4" />
            <h2 className="text-heading-sm text-white">
              Eventos e Capacitações
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              A MAPSUL realiza periodicamente eventos técnicos sobre nutrição animal,
              incluindo o seminário &quot;Criação de Bezerras — O melhor começo para
              um futuro produtivo&quot;. Fique atento às próximas datas e participe!
            </p>
            <a
              href={getWhatsAppLink("Olá! Quero saber sobre os próximos eventos de nutrição animal da MAPSUL.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime mt-8"
            >
              <FaWhatsapp className="text-lg" />
              Saber dos Próximos Eventos
            </a>
          </motion.div>
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
              <FaAppleAlt className="text-lime text-3xl mx-auto mb-4" />
              <h2 className="text-heading text-white max-w-xl mx-auto">
                Solicite uma consultoria nutricional para sua propriedade
              </h2>
              <p className="text-white/50 mt-3 max-w-md mx-auto leading-relaxed text-sm">
                Nossos consultores avaliam as necessidades nutricionais do seu rebanho
                e recomendam o programa ideal para cada fase de produção.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a
                  href={getWhatsAppLink("Olá! Quero consultoria nutricional para meu rebanho.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime text-forest font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all"
                >
                  <FaWhatsapp className="text-sm" />
                  Falar com Consultor
                </a>
                <Link href="/blog/nutricao-bezerras-desenvolvimento" className="border border-white/20 text-white font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:bg-white/10 transition-all">
                  Ler sobre Nutrição de Bezerras
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
