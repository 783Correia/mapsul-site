"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";
import { FaWhatsapp, FaCalendarAlt, FaArrowLeft, FaTag } from "react-icons/fa";
import Link from "next/link";

const calendario = [
  {
    mes: "Janeiro",
    vacinacao: "Raiva (áreas endêmicas — reforço anual)",
    parasitas: "Controle estratégico de ectoparasitas (carrapatos, moscas)",
    outros: "Monitoramento de animais em pastejo — estresse térmico",
  },
  {
    mes: "Fevereiro",
    vacinacao: "Clostridioses (reforço em categorias jovens)",
    parasitas: "Vermifugação de bezerros desmamados, controle de mosca-dos-chifres",
    outros: "Avaliação do ECC das matrizes pré-estação de monta",
  },
  {
    mes: "Março",
    vacinacao: "IBR/BVD (30 dias antes da estação de monta)",
    parasitas: "Controle de carrapatos (tratamento estratégico)",
    outros: "Coleta de sangue para diagnóstico de brucelose e tuberculose",
  },
  {
    mes: "Abril",
    vacinacao: "Brucelose (fêmeas 3–8 meses, vacina B19), Leptospirose",
    parasitas: "Vermifugação estratégica — período de queda da infestação",
    outros: "Início da vacinação pré-estação de monta",
  },
  {
    mes: "Maio",
    vacinacao: "Febre Aftosa (1ª campanha estadual), Carbúnculo Sintomático",
    parasitas: "Tratamento carrapaticida estratégico de outono",
    outros: "Atenção ao calendário oficial da SEAPI/RS",
  },
  {
    mes: "Junho",
    vacinacao: "Clostridioses (primovacinação de bezerros)",
    parasitas: "Controle de carrapatos — período crítico de inverno",
    outros: "Suplementação mineral de inverno, monitoramento de ECC",
  },
  {
    mes: "Julho",
    vacinacao: "IBR/BVD (reforço), Leptospirose (reforço)",
    parasitas: "Vermifugação — pico de helmintos gastrointestinais no inverno",
    outros: "Exames pré-estação de monta (andrológico em touros)",
  },
  {
    mes: "Agosto",
    vacinacao: "Clostridioses (reforço 30 dias após primovacinação)",
    parasitas: "Tratamento antiparasitário pré-estação de monta",
    outros: "Seleção de matrizes para estação de monta",
  },
  {
    mes: "Setembro",
    vacinacao: "Raiva (reforço anual — regiões endêmicas)",
    parasitas: "Controle de carrapatos (início da primavera — aumento de infestação)",
    outros: "Início da estação de monta em muitas propriedades",
  },
  {
    mes: "Outubro",
    vacinacao: "Clostridioses (bezerros nascidos na primavera)",
    parasitas: "Desverminação de bezerros, controle de mosca-dos-chifres",
    outros: "Diagnóstico de gestação (30–60 dias pós-IATF)",
  },
  {
    mes: "Novembro",
    vacinacao: "Febre Aftosa (2ª campanha estadual), Carbúnculo",
    parasitas: "Controle de moscas (aumento populacional no verão)",
    outros: "Atenção ao calendário oficial da SEAPI/RS",
  },
  {
    mes: "Dezembro",
    vacinacao: "Brucelose (fêmeas 3–8 meses nascidas no 1º semestre)",
    parasitas: "Vermifugação pós-desmame, controle de ectoparasitas",
    outros: "Avaliação sanitária geral do rebanho, planejamento do próximo ano",
  },
];

export default function ArtigoCalendarioContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1920&q=80')",
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
              {["Sanidade", "Vacinação", "RS"].map((tag) => (
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
              Calendário Sanitário Bovino RS 2026: O Que Vacinar e Quando
            </h1>

            <div className="flex items-center gap-4 mt-6 text-white/40 text-sm">
              <FaCalendarAlt className="text-xs" />
              27 de janeiro de 2026
              <span className="text-white/20">•</span>
              15 min de leitura
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <article
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Manter o calendário sanitário em dia é uma das ações mais importantes para
                garantir a saúde, a produtividade e a rentabilidade do rebanho bovino. Neste
                guia, apresentamos um calendário mensal completo com as principais vacinações,
                vermifugações e ações sanitárias para bovinos no Rio Grande do Sul em 2026.
              </p>

              <div className="bg-lime/10 rounded-2xl p-6 my-8 border border-lime/20">
                <p className="text-sm font-medium text-dark">
                  Importante: este calendário é uma referência geral. As datas das campanhas
                  de vacinação contra febre aftosa e brucelose são definidas pela SEAPI/RS e
                  podem variar. Consulte sempre o órgão oficial e o médico veterinário
                  responsável pela sua propriedade.
                </p>
              </div>

              <h2 className="text-heading-sm text-dark mt-12">
                Calendário Mensal Completo
              </h2>

              {/* Tabela */}
              <div className="overflow-x-auto -mx-5 sm:mx-0">
                <table className="w-full text-sm border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-forest text-white">
                      <th className="text-left p-4 rounded-tl-xl font-bold">Mês</th>
                      <th className="text-left p-4 font-bold">Vacinação</th>
                      <th className="text-left p-4 font-bold">Controle Parasitário</th>
                      <th className="text-left p-4 rounded-tr-xl font-bold">Outros</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendario.map((item, i) => (
                      <tr
                        key={item.mes}
                        className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }`}
                      >
                        <td className="p-4 font-bold text-dark whitespace-nowrap">
                          {item.mes}
                        </td>
                        <td className="p-4 text-gray-600">{item.vacinacao}</td>
                        <td className="p-4 text-gray-600">{item.parasitas}</td>
                        <td className="p-4 text-gray-600">{item.outros}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-heading-sm text-dark mt-12">
                Vacinas obrigatórias no RS
              </h2>
              <p>
                No Rio Grande do Sul, as vacinas obrigatórias por legislação são:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-dark">Febre Aftosa:</strong> vacinação semestral
                  conforme calendário da SEAPI/RS. Obrigatória para todos os bovinos e bubalinos.
                  O RS caminha para o status de zona livre de aftosa sem vacinação — acompanhe as
                  atualizações oficiais.
                </li>
                <li>
                  <strong className="text-dark">Brucelose:</strong> vacinação obrigatória de
                  fêmeas entre 3 e 8 meses de idade com vacina B19. Deve ser realizada por
                  médico veterinário cadastrado.
                </li>
              </ul>

              <h2 className="text-heading-sm text-dark mt-12">
                Vacinas recomendadas
              </h2>
              <p>
                Além das obrigatórias, as seguintes vacinas são altamente recomendadas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-dark">Clostridioses:</strong> vacinas polivalentes
                  (como a J-VAC) protegem contra carbúnculo sintomático, gangrena gasosa,
                  enterotoxemia e outros clostrídios. Primovacinação aos 3–4 meses com reforço
                  30 dias após, e revacinação anual.
                </li>
                <li>
                  <strong className="text-dark">Raiva:</strong> obrigatória em áreas endêmicas.
                  Primovacinação a partir dos 3 meses e reforço anual.
                </li>
                <li>
                  <strong className="text-dark">IBR/BVD:</strong> doenças reprodutivas que
                  causam abortos e perdas embrionárias. Vacinação 30 dias antes da estação de
                  monta com reforço.
                </li>
                <li>
                  <strong className="text-dark">Leptospirose:</strong> causa abortos, natimortos
                  e queda na produção de leite. Vacinação semestral recomendada.
                </li>
              </ul>

              <h2 className="text-heading-sm text-dark mt-12">
                Controle parasitário estratégico
              </h2>
              <p>
                O controle de parasitas internos e externos deve ser feito de forma
                estratégica, nos momentos de maior eficácia:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-dark">Vermes gastrointestinais:</strong> vermifugação
                  estratégica no início do inverno e no pós-desmame. Usar OPG (ovos por grama
                  de fezes) para monitorar a necessidade de tratamento.
                </li>
                <li>
                  <strong className="text-dark">Carrapatos:</strong> tratamento estratégico no
                  outono (abril–maio) e na primavera (setembro–outubro). O Ivomec Gold oferece
                  proteção prolongada.
                </li>
                <li>
                  <strong className="text-dark">Moscas-dos-chifres:</strong> controle quando a
                  infestação atinge mais de 200 moscas por animal, geralmente no verão.
                </li>
              </ul>

              <h2 className="text-heading-sm text-dark mt-12">
                Dicas para um programa sanitário eficiente
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mantenha um registro detalhado de todas as vacinações e tratamentos</li>
                <li>Armazene vacinas em geladeira entre 2°C e 8°C — nunca congele</li>
                <li>Use agulhas novas e esterilizadas para cada lote de animais</li>
                <li>Respeite os períodos de carência dos antiparasitários antes do abate</li>
                <li>Trabalhe com um médico veterinário para personalizar o programa</li>
                <li>Compre vacinas e medicamentos de distribuidores confiáveis com cadeia de frio</li>
              </ul>

              {/* CTA */}
              <div className="bg-forest rounded-2xl p-8 md:p-10 text-center mt-12">
                <p className="text-white text-lg font-bold mb-2">
                  Quer orientação técnica personalizada?
                </p>
                <p className="text-white/50 text-sm mb-6">
                  Fale com um consultor VetSulVet da sua região.
                </p>
                <a
                  href={getWhatsAppLink("Olá! Li o calendário sanitário no blog e gostaria de montar o programa da minha propriedade.")}
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
