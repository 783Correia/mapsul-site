"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowRight,
  FaDna,
  FaChartLine,
  FaCalendarCheck,
  FaMedal,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ReproducaoIATFContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime/[0.06] rounded-full translate-y-1/2 translate-x-1/3 blur-[100px]" />

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime mb-6">
              <FaDna className="text-[10px]" />
              Reprodução e IATF
            </span>
            <h1 className="text-display-sm text-white">
              Maximize a Taxa de Prenhez do Seu Rebanho com IATF
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
              Distribuímos a linha hormonal completa da Boehringer Ingelheim para
              protocolos de IATF. Nossos consultores técnicos auxiliam na escolha
              do melhor protocolo para a realidade da sua propriedade.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/5554996695509?text=Olá! Gostaria de consultoria sobre protocolo IATF para meu rebanho."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Falar com Consultor Técnico
              </a>
              <Link href="/contato" className="btn-outline">
                Solicitar Orçamento
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O que é IATF */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Entenda a Técnica
              </span>
              <h2 className="text-heading text-dark">
                O que é a IATF e por que ela é tão importante?
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  A <strong className="text-dark">Inseminação Artificial em Tempo Fixo (IATF)</strong> é
                  uma biotecnologia reprodutiva que permite inseminar todas as fêmeas de um lote em um
                  momento pré-determinado, sem necessidade de observação de cio. Por meio de um protocolo
                  hormonal que sincroniza a ovulação, é possível programar a inseminação de todo o lote
                  em um único dia.
                </p>
                <p>
                  No Brasil, a IATF é responsável por mais de 85% das inseminações realizadas em gado
                  de corte. A técnica revolucionou a pecuária ao permitir o uso de genética superior de
                  forma acessível, aumentar a eficiência reprodutiva e reduzir o intervalo entre partos.
                </p>
                <p>
                  O sucesso da IATF depende diretamente da <strong className="text-dark">qualidade
                  dos hormônios</strong> utilizados no protocolo. Hormônios de procedência confiável,
                  armazenados e manipulados corretamente, garantem a sincronização precisa do ciclo
                  estral e, consequentemente, melhores taxas de concepção.
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
                    "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boehringer Ingelheim */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeUp}
              className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] bg-forest"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-lime mb-2">
                    Boehringer
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white/60">
                    Ingelheim
                  </div>
                  <p className="text-white/30 text-sm mt-4">Linha Hormonal Completa</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Parceria Estratégica
              </span>
              <h2 className="text-heading text-dark">
                Linha Hormonal Boehringer Ingelheim
              </h2>
              <p className="text-gray-500 leading-relaxed mt-6">
                A MAPSUL é distribuidora oficial da linha reprodutiva da Boehringer
                Ingelheim, líder mundial em saúde animal. Trabalhamos com toda a linha
                de hormônios para IATF, incluindo:
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Dispositivos intravaginais de progesterona",
                  "Benzoato de estradiol",
                  "Cipionato de estradiol",
                  "Prostaglandina (PGF2α)",
                  "eCG (Gonadotrofina Coriônica Equina)",
                  "GnRH (Hormônio Liberador de Gonadotrofina)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-lime shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 leading-relaxed mt-6">
                Todos os produtos com procedência garantida, rastreabilidade e
                condições ideais de armazenamento para máxima eficácia no campo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Benefícios"
            title="Por que investir em IATF?"
            description="A IATF traz resultados mensuráveis para a produtividade e rentabilidade da sua propriedade."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaChartLine,
                title: "Aumento da Taxa de Prenhez",
                description:
                  "Taxas de concepção de 50 a 60% por protocolo, emprenhar mais vacas em menos tempo.",
              },
              {
                icon: FaCalendarCheck,
                title: "Menor Intervalo entre Partos",
                description:
                  "Concentração dos nascimentos em uma estação de monta definida, otimizando manejo e desmame.",
              },
              {
                icon: FaDna,
                title: "Melhoramento Genético",
                description:
                  "Acesso a genética superior de touros provados via inseminação, acelerando o ganho genético do rebanho.",
              },
              {
                icon: FaMedal,
                title: "Padronização do Rebanho",
                description:
                  "Lotes uniformes de bezerros com maior peso à desmama e melhor preço de venda no mercado.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover p-7 text-center group"
              >
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mx-auto mb-5 text-lime group-hover:bg-lime group-hover:text-forest transition-all duration-400">
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <motion.div
            {...fadeUp}
            className="bg-forest rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-lime/[0.06] rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
            <div className="relative">
              <FaDna className="text-lime text-4xl mx-auto mb-6" />
              <h2 className="text-display-sm text-white max-w-2xl mx-auto">
                Fale com nosso consultor técnico sobre o melhor protocolo pro seu rebanho
              </h2>
              <p className="text-white/50 mt-4 max-w-lg mx-auto leading-relaxed">
                Nossos ATCs conhecem a realidade do campo gaúcho e podem
                orientar sobre o protocolo ideal para o seu sistema de produção.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="https://wa.me/5554996695509?text=Olá! Quero consultoria sobre protocolo IATF para meu rebanho."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime shadow-glow-lime"
                >
                  <FaWhatsapp className="text-lg" />
                  Falar com Consultor
                </a>
                <Link href="/blog/protocolo-iatf-guia-completo" className="btn-outline">
                  Ler Guia Completo
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
