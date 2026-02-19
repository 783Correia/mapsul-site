"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";
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

export default function ReproducaoIATFContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-36 md:pt-40 pb-28 md:pb-32 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime/[0.06] rounded-full translate-y-1/2 translate-x-1/3 blur-[100px]" />

        <div className="container-main relative">
          <div
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
                href={getWhatsAppLink("Olá! Gostaria de consultoria sobre protocolo IATF para meu rebanho.")}
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
          </div>
        </div>
      </section>

      {/* O que é IATF */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>

            <div
              className="relative overflow-hidden aspect-[4/3]"
              style={{
                borderRadius: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-900/40 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <FaDna className="text-lime text-5xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boehringer Ingelheim */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
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
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Parceria Estratégica
              </span>
              <h2 className="text-heading text-dark">
                Linha Hormonal Boehringer Ingelheim
              </h2>
              <p className="text-gray-500 leading-relaxed mt-6">
                A VetSulVet é distribuidora oficial da linha reprodutiva da Boehringer
                Ingelheim, líder mundial em saúde animal. Trabalhamos com toda a linha
                de hormônios para IATF, incluindo:
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Dispositivos de Progesterona (P4)",
                  "Benzoato de Estradiol",
                  "Cipionato de Estradiol",
                  "Prostaglandina (PGF2α)",
                  "GnRH e eCG",
                  "Protocolos completos para TETF e IATF",
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
            </div>
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
            ].map((item) => (
              <div
                key={item.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <div
            className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            style={{ backgroundColor: "#0a2010", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-lime/[0.08] rounded-full translate-x-1/3 -translate-y-1/3 blur-[100px]" />
            <div className="relative">
              <FaDna className="text-lime text-3xl mx-auto mb-4" />
              <h2 className="text-heading text-white max-w-xl mx-auto">
                Fale com nosso consultor técnico sobre o melhor protocolo pro seu rebanho
              </h2>
              <p className="text-white/50 mt-3 max-w-md mx-auto leading-relaxed text-sm">
                Nossos ATCs conhecem a realidade do campo gaúcho e podem
                orientar sobre o protocolo ideal para o seu sistema de produção.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a
                  href={getWhatsAppLink("Olá! Quero consultoria sobre protocolo IATF para meu rebanho.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime text-forest font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all"
                >
                  <FaWhatsapp className="text-sm" />
                  Falar com Consultor
                </a>
                <Link href="/blog/protocolo-iatf-guia-completo" className="border border-white/20 text-white font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:bg-white/10 transition-all">
                  Ler Guia Completo
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
