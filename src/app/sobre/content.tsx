"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaShieldAlt,
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaStore,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const timeline = [
  {
    year: "2010",
    title: "Fundação",
    description: "Início das atividades focadas em locação de equipamentos menores para construção civil.",
  },
  {
    year: "2015",
    title: "Expansão da Frota",
    description: "Aquisição das primeiras escavadeiras hidráulicas de grande porte das marcas Caterpillar e JCB.",
  },
  {
    year: "2018",
    title: "Novas Instalações",
    description: "Inauguração da nova sede com pátio amplo e oficina de manutenção especializada própria.",
  },
  {
    year: "2021",
    title: "Parcerias Globais",
    description: "Consolidação de parcerias com Bobcat e Case, renovando 100% da frota de retroescavadeiras.",
  },
  {
    year: "Hoje",
    title: "Referência no Mercado",
    description: "Atendendo dezenas de construtoras com agilidade, equipamentos revisados e suporte 24h.",
  },
];

const equipe = [
  { nome: "Carlos Eduardo", regiao: "Consultor Técnico Comercial", iniciais: "CE" },
  { nome: "Roberto Almeida", regiao: "Especialista em Frota", iniciais: "RA" },
  { nome: "Fernanda Silva", regiao: "Gerente de Atendimento", iniciais: "FS" },
  { nome: "João Paulo", regiao: "Engenheiro Mecânico", iniciais: "JP" },
];

const valores = [
  { icon: FaShieldAlt, label: "Segurança" },
  { icon: FaTrophy, label: "Excelência" },
  { icon: FaUsers, label: "Parceria" },
  { icon: FaHandshake, label: "Compromisso com Prazos" },
];

const galeria = [
  { label: "Obras de Infraestrutura", icon: FaMapMarkerAlt, color: "from-amber-500/20 to-amber-900/40" },
  { label: "Manutenção Preventiva", icon: FaStore, color: "from-blue-500/20 to-blue-900/40" },
  { label: "Operações Pesadas", icon: FaGraduationCap, color: "from-emerald-500/20 to-emerald-900/40" },
];

export default function SobreContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
        </div>
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
              Institucional
            </span>
            <h1 className="text-display-sm text-white">Sobre a Jacó Locação</h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
              Conheça nossa história, missão e os valores que nos guiam para ser a maior locadora do Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="bg-forest-dark section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Nossa História
              </span>
              <h2 className="text-heading text-white">
                Excelência em Locação de Máquinas Pesadas
              </h2>
              <div className="mt-8 space-y-4 text-white/60 leading-relaxed">
                <p>
                  A Jacó Locação nasceu do compromisso de levar os melhores equipamentos pesados e serviços
                  para as construtoras e empreiteiras de todo o país.
                </p>
                <p>
                  Ao longo dos anos, construímos parcerias sólidas
                  com marcas mundiais como Caterpillar, Hyundai, JCB, Case e Bobcat,
                  garantindo uma frota extremamente moderna.
                </p>
                <p>
                  Hoje, atendemos obras de todos os portes focando sempre em
                  manutenção revisada, segurança operacional e soluções com agilidade e eficiência.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-lime/20 to-lime/40 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <FaStore className="text-lime text-5xl" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-lime text-primary rounded-2xl p-6 shadow-float">
                <div className="text-4xl font-extrabold tracking-tight">19+</div>
                <p className="text-sm font-bold">Anos de mercado</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-forest section-padding">
        <div className="container-main max-w-4xl">
          <SectionHeading tag="Trajetória" title="Nossa Linha do Tempo" light />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6 items-start md:pl-0"
                >
                  <div className="shrink-0 w-16 h-16 bg-lime/10 rounded-2xl flex items-center justify-center relative z-10">
                    <span className="text-lime font-extrabold text-sm">
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 flex-1">
                    <h3 className="font-bold text-white text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão & Visão */}
      <section className="bg-forest-dark section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <SectionHeading
                tag="Institucional"
                title="Missão, Visão & Valores"
                align="left"
                light
              />
              <div className="space-y-8">
                <div className="border-l-4 border-lime pl-6">
                  <h3 className="font-bold text-white text-lg mb-2">Missão</h3>
                  <p className="text-white/60 leading-relaxed">
                    Oferecer máquinas pesadas modernas e seguras, aliados a um suporte técnico impecável, garantindo o sucesso das obras de nossos parceiros comerciais.
                  </p>
                </div>
                <div className="border-l-4 border-white/20 pl-6">
                  <h3 className="font-bold text-white text-lg mb-2">Visão</h3>
                  <p className="text-white/60 leading-relaxed">
                    Ser referência nacional em locação de equipamentos pesados, reconhecida pela qualidade da frota, agilidade no atendimento e compromisso inegociável com a segurança.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-white/[0.05] border border-white/[0.08] rounded-3xl p-10"
            >
              <h3 className="font-bold text-white text-lg mb-8">
                Nossos Valores
              </h3>
              <div className="space-y-4">
                {valores.map((v) => (
                  <div
                    key={v.label}
                    className="flex items-center gap-4 bg-white/[0.06] border border-white/[0.06] rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-lime/10 rounded-xl flex items-center justify-center text-lime shrink-0">
                      <v.icon size={18} />
                    </div>
                    <span className="font-medium text-white/80">{v.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Equipe"
            title="Nossos Consultores Técnicos"
            description="ATCs (Assessores Técnicos Comerciais) espalhados por todo o RS, prontos para visitar sua propriedade."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipe.map((membro, i) => (
              <motion.div
                key={membro.regiao}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-20 h-20 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-4 text-lime font-extrabold text-2xl group-hover:bg-lime group-hover:text-forest transition-all duration-400">
                  {membro.iniciais}
                </div>
                <h3 className="font-bold text-white tracking-tight">
                  {membro.nome}
                </h3>
                <div className="flex items-center justify-center gap-1.5 mt-1 text-white/40 text-sm">
                  <FaMapMarkerAlt className="text-lime text-[10px]" />
                  {membro.regiao}
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lime text-xs font-bold mt-4 hover:underline"
                >
                  <FaWhatsapp />
                  Entrar em contato
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-forest-dark section-padding">
        <div className="container-main">
          <SectionHeading
            tag="Galeria"
            title="Momentos Jacó Locação"
            description="Equipamentos em ação nas obras e visitas técnicas com nossos parceiros comerciais."
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeria.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <item.icon className="text-lime text-3xl" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-bold">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Removido */}
    </>
  );
}
