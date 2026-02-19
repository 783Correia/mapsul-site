"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";
import { FaWhatsapp, FaCalendarAlt, FaArrowLeft, FaTag } from "react-icons/fa";
import Link from "next/link";

export default function ArtigoNutricaoContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest" />

        <div className="container-main relative">
          <div
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
              {["Nutrição", "Bezerras", "Manejo"].map((tag) => (
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
              Nutrição de Bezerras: Como Garantir o Melhor Desenvolvimento nos Primeiros Meses
            </h1>

            <div className="flex items-center gap-4 mt-6 text-white/40 text-sm">
              <FaCalendarAlt className="text-xs" />
              3 de fevereiro de 2026
              <span className="text-white/20">•</span>
              10 min de leitura
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <article
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Os primeiros meses de vida de uma bezerra são determinantes para todo o seu
                futuro produtivo. Uma nutrição adequada nessa fase impacta diretamente no
                desenvolvimento do rúmen, no ganho de peso, na idade ao primeiro serviço e,
                no caso de leiteiras, na produção de leite na primeira lactação.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                A importância do colostro
              </h2>
              <p>
                O colostro é o primeiro e mais importante alimento da bezerra. Ele deve ser
                fornecido nas <strong className="text-dark">primeiras 6 horas de vida</strong>,
                preferencialmente nas primeiras 2 horas, quando a capacidade de absorção
                de imunoglobulinas pelo intestino é máxima.
              </p>
              <p>
                A recomendação é fornecer pelo menos <strong className="text-dark">4 litros de
                  colostro de boa qualidade</strong> (acima de 50 g/L de IgG) logo após o
                nascimento. A falha na transferência de imunidade passiva é a principal causa
                de mortalidade e morbidade em bezerras nos primeiros meses de vida.
              </p>
              <p>
                Use um colostrômetro ou refratômetro Brix para avaliar a qualidade do colostro
                antes do fornecimento. Colostro com Brix acima de 22% é considerado de boa
                qualidade.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                Fase de aleitamento: leite ou sucedâneo?
              </h2>
              <p>
                Durante a fase de aleitamento, que geralmente vai do nascimento até 60–90 dias
                de vida, a bezerra depende do leite (ou sucedâneo) como principal fonte de
                nutrientes. O volume e a frequência de fornecimento devem ser ajustados conforme
                a idade e o peso da bezerra.
              </p>
              <p>
                O <strong className="text-dark">sistema Milk Bar</strong>, desenvolvido na Nova
                Zelândia e distribuído pela VetSulVet, simula a amamentação natural da mãe. Os bicos
                com fluxo controlado fazem a bezerra sugar com força, o que:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Estimula a produção de saliva, que auxilia na digestão</li>
                <li>Ativa o reflexo da goteira esofagiana, direcionando o leite ao abomaso</li>
                <li>Reduz a incidência de timpanismo e diarreias</li>
                <li>Melhora o bem-estar animal e reduz comportamentos estereotipados</li>
              </ul>

              <div className="bg-lime/10 rounded-2xl p-6 my-8 border border-lime/20">
                <p className="text-sm font-medium text-dark">
                  Recomendação: 4 a 6 litros de leite por dia, divididos em 2 fornecimentos,
                  durante todo o período de aleitamento. Mantenha consistência nos horários e
                  na temperatura do leite (38–40°C).
                </p>
              </div>

              <h2 className="text-heading-sm text-dark mt-12">
                Concentrado inicial: o motor do desenvolvimento ruminal
              </h2>
              <p>
                A introdução precoce de concentrado (a partir da primeira semana de vida) é
                fundamental para o desenvolvimento das papilas ruminais. São os ácidos graxos
                voláteis (AGVs) produzidos pela fermentação do concentrado no rúmen que
                estimulam o crescimento das papilas, transformando a bezerra de um animal
                monogástrico em ruminante funcional.
              </p>
              <p>
                O concentrado inicial deve ter:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>18 a 22% de proteína bruta</li>
                <li>Alta palatabilidade para estimular o consumo precoce</li>
                <li>Boa fonte de energia (milho, farelo de soja, farelo de trigo)</li>
                <li>Sem finos excessivos que prejudiquem a ingestão</li>
              </ul>

              <h2 className="text-heading-sm text-dark mt-12">
                Água: o nutriente esquecido
              </h2>
              <p>
                Água limpa e fresca deve estar disponível <strong className="text-dark">desde o
                  primeiro dia de vida</strong>. Muitos produtores não fornecem água para bezerras
                em aleitamento, mas isso é um erro grave. A água é essencial para o consumo de
                concentrado e para o desenvolvimento ruminal. Sem água, a bezerra consome menos
                concentrado e o desenvolvimento do rúmen é prejudicado.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                Desmame: quando e como fazer
              </h2>
              <p>
                O desmame deve ser feito com base no <strong className="text-dark">consumo de
                  concentrado</strong>, não apenas pela idade. A bezerra está pronta para ser
                desmamada quando consome de forma consistente pelo menos 800g a 1 kg de
                concentrado por dia, durante 3 dias consecutivos.
              </p>
              <p>
                O desmame gradual (redução progressiva do leite ao longo de 7–10 dias) é
                menos estressante e resulta em menor queda de desempenho no período pós-desmame
                em comparação ao desmame abrupto.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                Impacto na produção futura
              </h2>
              <p>
                Pesquisas demonstram que bezerras que dobram o peso de nascimento até 60 dias
                de vida produzem até <strong className="text-dark">1.500 kg a mais de leite na
                  primeira lactação</strong> em comparação a bezerras com crescimento deficiente.
                Além disso, atingem a puberdade mais cedo, podendo entrar em reprodução com
                14–15 meses em raças leiteiras.
              </p>
              <p>
                Investir na nutrição de bezerras é investir no futuro do rebanho. O custo de
                uma boa nutrição na fase de cria é rapidamente recuperado com a produtividade
                superior na vida adulta.
              </p>

              <h2 className="text-heading-sm text-dark mt-12">
                O papel da VetSulVet na nutrição de bezerras
              </h2>
              <p>
                A VetSulVet trabalha em parceria com a <strong className="text-dark">Agrifirm</strong> e
                distribui o <strong className="text-dark">sistema Milk Bar</strong>, oferecendo
                soluções completas para a fase de cria. Nossos consultores técnicos visitam
                propriedades para avaliar o sistema de criação e recomendar ajustes nutricionais
                que façam diferença nos resultados.
              </p>
              <p>
                Periodicamente, realizamos o seminário <strong className="text-dark">&quot;Criação
                  de Bezerras — O melhor começo para um futuro produtivo&quot;</strong>, onde
                especialistas compartilham as melhores práticas e pesquisas mais recentes sobre
                o tema.
              </p>

              {/* CTA */}
              <div className="bg-forest rounded-2xl p-8 md:p-10 text-center mt-12">
                <p className="text-white text-lg font-bold mb-2">
                  Quer orientação técnica personalizada?
                </p>
                <p className="text-white/50 text-sm mb-6">
                  Fale com um consultor VetSulVet da sua região.
                </p>
                <a
                  href={getWhatsAppLink("Olá! Li o artigo sobre nutrição de bezerras e gostaria de consultoria.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime"
                >
                  <FaWhatsapp className="text-lg" />
                  Falar com Consultor
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
