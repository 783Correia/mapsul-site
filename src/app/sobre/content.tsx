"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaShieldAlt,
  FaSeedling,
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const timeline = [
  {
    year: "2006",
    title: "Início da Jornada",
    description:
      "Primeiros passos no mercado de distribuição de produtos veterinários na região dos Campos de Cima da Serra.",
  },
  {
    year: "2007",
    title: "Fundação Oficial",
    description:
      "MAPSUL Distribuidora é formalmente constituída em Lagoa Vermelha, RS, com foco em medicamentos veterinários.",
  },
  {
    year: "2010",
    title: "Expansão Regional",
    description:
      "Ampliação do atendimento para toda a região norte do Rio Grande do Sul, conquistando novos produtores.",
  },
  {
    year: "2013",
    title: "Parceria Boehringer",
    description:
      "Consolidação como distribuidor da linha Boehringer Ingelheim, incluindo a linha hormonal para IATF.",
  },
  {
    year: "2015",
    title: "Novas Marcas Líderes",
    description:
      "Incorporação de ATTO, Kersia e outras marcas líderes ao portfólio de distribuição.",
  },
  {
    year: "2018",
    title: "Nutrição Animal",
    description:
      "Entrada no segmento de nutrição animal com parceria Agrifirm e distribuição do sistema Milk Bar.",
  },
  {
    year: "2020",
    title: "Sementes de Pastagem",
    description:
      "Diversificação com sementes certificadas de pastagem, atendendo a demanda dos pecuaristas gaúchos.",
  },
  {
    year: "2022",
    title: "Cobertura Estadual",
    description:
      "Rede de ATCs atinge cobertura em todas as regiões do Rio Grande do Sul.",
  },
  {
    year: "2025",
    title: "19 Anos de Mercado",
    description:
      "Referência na distribuição de produtos pecuários no RS, com mais de 1000 produtores atendidos.",
  },
];

const equipe = [
  { nome: "Consultor Técnico", regiao: "Campos de Cima da Serra", iniciais: "CS" },
  { nome: "Consultor Técnico", regiao: "Serra Gaúcha", iniciais: "SG" },
  { nome: "Consultor Técnico", regiao: "Noroeste Gaúcho", iniciais: "NG" },
  { nome: "Consultor Técnico", regiao: "Região Central", iniciais: "RC" },
  { nome: "Consultor Técnico", regiao: "Campanha Gaúcha", iniciais: "CG" },
  { nome: "Consultor Técnico", regiao: "Região Metropolitana", iniciais: "RM" },
];

const valores = [
  { icon: FaShieldAlt, label: "Ética", desc: "Compromisso inegociável com a verdade e integridade." },
  { icon: FaTrophy, label: "Credibilidade", desc: "Confiança construída através de resultados consistentes." },
  { icon: FaUsers, label: "Transparência", desc: "Clareza em todas as relações comerciais e parcerias." },
  { icon: FaSeedling, label: "Sustentabilidade", desc: "Respeito ao meio ambiente e futuro do campo." },
  { icon: FaHandshake, label: "Valorização Humana", desc: "Respeito e desenvolvimento contínuo das pessoas." },
];

const galeria = [
  { label: "Evento Criação de Bezerras", image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&q=80" },
  { label: "Dia de Campo — IATF", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80" },
  { label: "Capacitação Técnica", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&q=80" },
  { label: "Visita a Propriedade", image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80" },
  { label: "Feira Agropecuária", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
  { label: "Seminário Nutrição", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80" },
];

export default function SobreContent() {
  return (
    <div className="bg-[#0A0F0D] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-forest/30 rounded-full blur-[150px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-lime">Institucional</span>
            </div>

            <h1 className="text-display-lg font-bold tracking-tight mb-8">
              Inovação que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                Transforma o Campo
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
              Há 19 anos conectando tecnologia de ponta, conhecimento técnico e
              resultados reais para pecuaristas em todo o Rio Grande do Sul.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Descubra</span>
          <div className="w-px h-12 bg-gradient-to-b from-lime/50 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="py-20 relative z-20 -mt-20">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Anos de Mercado", value: "19+" },
              { label: "Produtores Atendidos", value: "1000+" },
              { label: "Marcas Parceiras", value: "8+" },
              { label: "Cobertura no RS", value: "100%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 text-center hover:bg-white/[0.08] transition-all duration-300 border border-white/5"
              >
                <div className="text-3xl md:text-5xl font-bold text-lime mb-2">{stat.value}</div>
                <div className="text-sm text-white/40 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Bento Grid */}
      <section className="py-24 relative bg-zinc-950/50">
        <div className="container-main">
          <SectionHeading tag="Essência" title="Nosso Propósito" align="left" light />

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {/* Mission Card - Large */}
            <motion.div
              {...fadeUp}
              className="lg:col-span-2 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 rounded-full blur-[80px] group-hover:bg-lime/20 transition-all duration-500" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaTrophy className="text-lime" />
                Missão
              </h3>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Atuar com responsabilidade e excelência na distribuição de produtos e na prestação de serviços,
                promovendo o conhecimento e a inovação no Agronegócio para impulsionar a produtividade sustentável.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              {...fadeUp}
              className="bg-forest-light/30 border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-lime/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaSeedling className="text-lime" />
                Visão
              </h3>
              <p className="text-white/70 leading-relaxed">
                Ser referência em distribuição e consultoria técnica, entregando inovação e conscientizando para o uso eficiente dos recursos.
              </p>
            </motion.div>

            {/* Values - Grid */}
            <motion.div
              {...fadeUp}
              className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {valores.map((v) => (
                <div
                  key={v.label}
                  className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] transition-all hover:-translate-y-1 group"
                >
                  <v.icon className="text-2xl text-white/30 group-hover:text-lime transition-colors mb-4" />
                  <h4 className="font-bold text-white mb-2">{v.label}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Futuristic */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-lime/[0.02]" />
        <div className="container-main max-w-5xl relative">
          <SectionHeading tag="Trajetória" title="Nossa Evolução" light />

          <div className="relative mt-20">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-lime rounded-full shadow-[0_0_20px_rgba(180,209,46,0.6)] z-10">
                    <div className="absolute inset-0 bg-lime animate-ping opacity-50 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}>
                    <div className="text-4xl font-extrabold text-white/5 mb-[-1.5rem] relative z-0">{item.year}</div>
                    <div className="relative z-10 glass-card p-6 border border-white/10 hover:border-lime/30 transition-colors group">
                      <h3 className="text-xl font-bold text-white group-hover:text-lime transition-colors">{item.title}</h3>
                      <p className="text-white/50 text-sm mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alternating standard */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative bg-black/20">
        <div className="container-main">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-lime font-bold uppercase tracking-widest text-sm mb-2 block">Nosso Time</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Especialistas em Campo</h2>
            </div>
            <a href={getWhatsAppLink()} className="btn-lime">
              Falar com um Consultor
              <FaArrowRight />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipe.map((membro, i) => (
              <motion.div
                key={membro.regiao}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#151A18] rounded-2xl overflow-hidden border border-white/5 hover:border-lime/50 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-lime/10 rounded-xl flex items-center justify-center text-lime font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {membro.iniciais}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{membro.nome}</h3>
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
                    <FaMapMarkerAlt className="text-lime" />
                    {membro.regiao}
                  </div>
                  <div className="w-full h-px bg-white/5 group-hover:bg-lime/20 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Style */}
      <section className="py-24">
        <div className="container-main">
          <SectionHeading tag="Galeria" title="Mapsul em Ação" light />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {galeria.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl overflow-hidden group ${i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-lime text-xs font-bold uppercase tracking-wider mb-1 block">Evento</span>
                  <h4 className="text-white font-bold text-lg">{item.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
