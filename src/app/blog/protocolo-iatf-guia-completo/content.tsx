"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaCalendarAlt, FaArrowLeft, FaTag } from "react-icons/fa";
import Link from "next/link";

export default function ArtigoIATFContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest" />

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-lime transition-colors mb-6"
            >
              <FaArrowLeft className="text-xs" />
              Voltar ao Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Reprodução", "IATF", "Bovinos"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 glass-light rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime"
                >
                  <FaTag className="text-[8px]" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-display-sm text-white leading-tight">
              Protocolo IATF: Guia Completo para Maximizar a Taxa de Prenhez do seu Rebanho
            </h1>

            <div className="flex items-center gap-4 mt-6 text-white/40 text-sm">
              <FaCalendarAlt className="text-xs" />
              10 de fevereiro de 2026
              <span className="text-white/20">•</span>
              12 min de leitura
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose-custom"
          >
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                A Inseminação Artificial em Tempo Fixo (IATF) revolucionou a reprodução bovina
                no Brasil. Neste guia, vamos detalhar como funciona a técnica, quais são os
                principais protocolos, como escolher os hormônios certos e o que fazer para
                obter as melhores taxas de prenhez na sua propriedade.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">O que é a IATF?</h2>
              <p>
                A IATF é uma biotecnologia reprodutiva que permite sincronizar a ovulação de
                um grupo de fêmeas bovinas por meio de um protocolo hormonal, eliminando a
                necessidade de observação de cio. Isso significa que todas as vacas de um lote
                podem ser inseminadas em um único dia, em horário pré-determinado.
              </p>
              <p>
                No Brasil, a IATF é a principal ferramenta de inseminação artificial em gado de
                corte, sendo responsável por mais de 85% das inseminações realizadas. Em propriedades
                leiteiras, a técnica também ganha espaço pela praticidade e pelos resultados
                consistentes.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">Como funciona um protocolo IATF?</h2>
              <p>
                Um protocolo de IATF típico dura entre 8 e 11 dias e envolve uma sequência
                de aplicações hormonais que controlam o ciclo estral da vaca. O objetivo é
                fazer com que todas as fêmeas ovulem em um momento sincronizado. As etapas
                fundamentais são:
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8">
                <h3 className="font-bold text-dark text-lg mb-4">Dia 0 — Início do Protocolo</h3>
                <p className="text-sm">
                  Inserção do dispositivo intravaginal de progesterona + aplicação de benzoato
                  de estradiol (BE). A progesterona bloqueia a ovulação e o estradiol faz a
                  regressão de qualquer folículo dominante presente, &quot;zerando&quot; o ciclo
                  de todas as fêmeas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 my-8">
                <h3 className="font-bold text-dark text-lg mb-4">Dia 8 — Retirada do Dispositivo</h3>
                <p className="text-sm">
                  Retirada do dispositivo de progesterona + aplicação de prostaglandina (PGF2α) +
                  eCG (gonadotrofina coriônica equina). A queda na progesterona sinaliza ao organismo
                  que é hora de ovular. A prostaglandina regride o corpo lúteo e o eCG estimula o
                  crescimento folicular final.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 my-8">
                <h3 className="font-bold text-dark text-lg mb-4">Dia 9 — Indutor de Ovulação</h3>
                <p className="text-sm">
                  Aplicação de cipionato de estradiol (CE) ou GnRH como indutor de ovulação.
                  Esse hormônio sincroniza o momento exato da ovulação para que a inseminação
                  seja realizada no momento ideal.
                </p>
              </div>

              <div className="bg-lime/10 rounded-2xl p-6 my-8 border border-lime/20">
                <h3 className="font-bold text-dark text-lg mb-4">Dia 10 — Inseminação Artificial</h3>
                <p className="text-sm">
                  Inseminação de todo o lote em horário pré-determinado (geralmente 48–54h após
                  a retirada do dispositivo). Todas as vacas são inseminadas independentemente
                  de demonstrar ou não sinais de cio.
                </p>
              </div>

              <h2 className="text-heading-sm text-dark mt-12">
                A importância da qualidade dos hormônios
              </h2>
              <p>
                O sucesso da IATF está diretamente ligado à qualidade dos hormônios utilizados.
                Produtos de procedência duvidosa, mal armazenados ou com formulação inconsistente
                podem comprometer todo o protocolo, resultando em baixas taxas de concepção e
                prejuízo financeiro.
              </p>
              <p>
                A MAPSUL distribui a <strong className="text-dark">linha hormonal completa da
                Boehringer Ingelheim</strong>, líder mundial em saúde animal reprodutiva. Todos
                os produtos são armazenados e transportados em condições ideais de temperatura,
                garantindo a máxima eficácia no campo.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                Fatores que influenciam a taxa de prenhez
              </h2>
              <p>
                Além da qualidade dos hormônios, outros fatores são determinantes para o sucesso
                da IATF:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong className="text-dark">Escore de Condição Corporal (ECC):</strong> vacas
                  com ECC abaixo de 2,5 (escala 1–5) apresentam taxas de concepção significativamente
                  menores. A nutrição adequada antes e durante a estação de monta é fundamental.
                </li>
                <li>
                  <strong className="text-dark">Qualidade do sêmen:</strong> utilize sêmen de
                  centrais confiáveis, com provas de fertilidade e armazenamento adequado em
                  nitrogênio líquido.
                </li>
                <li>
                  <strong className="text-dark">Técnica do inseminador:</strong> a habilidade do
                  inseminador na manipulação do trato reprodutivo e na deposição do sêmen é
                  crítica. Treinamento e prática constante fazem a diferença.
                </li>
                <li>
                  <strong className="text-dark">Manejo no curral:</strong> o estresse durante o
                  manejo reduz drasticamente as chances de prenhez. Instalações adequadas, manejo
                  calmo e eficiente são essenciais.
                </li>
                <li>
                  <strong className="text-dark">Sanidade do rebanho:</strong> doenças reprodutivas
                  como IBR, BVD, leptospirose e brucelose impactam diretamente na fertilidade.
                  O programa vacinal deve estar em dia.
                </li>
              </ul>

              <h2 className="text-heading-sm text-dark mt-12">
                Resultados esperados com IATF
              </h2>
              <p>
                Com um protocolo bem executado, é possível esperar:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Taxas de concepção de 50 a 60% por protocolo</li>
                <li>Redução do intervalo entre partos para 12–13 meses</li>
                <li>Concentração de nascimentos em estação de monta definida</li>
                <li>Lotes de bezerros uniformes e com maior valor de mercado</li>
                <li>Ganho genético acelerado pelo uso de touros provados</li>
              </ul>
              <p>
                Propriedades que utilizam IATF de forma consistente, aliada a repasse de touro,
                podem atingir taxas de prenhez finais acima de 90% na estação de monta.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                O papel do consultor técnico
              </h2>
              <p>
                Cada propriedade tem suas particularidades: raça, sistema de criação, época de
                monta, condição nutricional das fêmeas. Por isso, a orientação de um consultor
                técnico que conheça a realidade do campo é essencial para definir o melhor
                protocolo e ajustar as variáveis que influenciam o resultado.
              </p>
              <p>
                Os ATCs (Assessores Técnicos Comerciais) da MAPSUL visitam propriedades em todo
                o Rio Grande do Sul, auxiliando pecuaristas na escolha do protocolo ideal,
                na logística dos hormônios e no acompanhamento dos resultados.
              </p>

              {/* CTA */}
              <div className="bg-forest rounded-2xl p-8 md:p-10 text-center mt-12">
                <p className="text-white text-lg font-bold mb-2">
                  Quer orientação técnica personalizada?
                </p>
                <p className="text-white/50 text-sm mb-6">
                  Fale com um consultor MAPSUL da sua região.
                </p>
                <a
                  href="https://wa.me/5554996695509?text=Olá! Li o guia de IATF no blog e gostaria de consultoria para meu rebanho."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime"
                >
                  <FaWhatsapp className="text-lg" />
                  Falar com Consultor
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
