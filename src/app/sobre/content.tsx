"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaShieldAlt,
  FaSeedling,
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

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
  { icon: FaShieldAlt, label: "Ética" },
  { icon: FaTrophy, label: "Credibilidade" },
  { icon: FaUsers, label: "Transparência" },
  { icon: FaSeedling, label: "Respeito ao Meio Ambiente" },
  { icon: FaHandshake, label: "Valorização e Respeito às Pessoas" },
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
            <h1 className="text-display-sm text-white">Sobre a MAPSUL</h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
              Conheça nossa história, missão e os valores que nos guiam há 19
              anos.
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
                19 Anos de Dedicação à Pecuária Gaúcha
              </h2>
              <div className="mt-8 space-y-4 text-white/60 leading-relaxed">
                <p>
                  Fundada em 2007 em Lagoa Vermelha, a MAPSUL Distribuidora
                  nasceu do compromisso de levar os melhores produtos e serviços
                  para os pecuaristas do Rio Grande do Sul.
                </p>
                <p>
                  Ao longo de quase duas décadas, construímos parcerias sólidas
                  com marcas líderes como Boehringer Ingelheim, ATTO, Milk Bar,
                  Kersia, Agrifirm, Biscayart e Luxembourg.
                </p>
                <p>
                  Hoje, atendemos mais de 1000 produtores em todo o estado, oferecendo
                  produtos de qualidade, consultoria técnica especializada e
                  acompanhamento contínuo para maximizar resultados no campo.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80')",
                  }}
                />
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
                    Atuar com responsabilidade e excelência na distribuição de
                    produtos e na prestação de serviços, promovendo o
                    conhecimento e inovação no Agronegócio.
                  </p>
                </div>
                <div className="border-l-4 border-white/20 pl-6">
                  <h3 className="font-bold text-white text-lg mb-2">Visão</h3>
                  <p className="text-white/60 leading-relaxed">
                    Ser referência na distribuição de produtos e consultoria
                    técnica no Agronegócio, entregando inovação e
                    conscientizando para o uso eficiente e sustentável dos
                    produtos, prezando pela saúde e bem estar dos animais e das
                    pessoas.
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
            title="Momentos MAPSUL"
            description="Eventos, capacitações e visitas técnicas com nossos parceiros produtores."
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
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-bold">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa de Atuação */}
      <section className="bg-forest section-padding">
        <div className="container-main">
          <SectionHeading
            tag="Cobertura"
            title="Atuação em Todo o RS"
            description="Nossos consultores atendem propriedades em todas as regiões do Rio Grande do Sul."
            light
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="space-y-4">
                {[
                  { regiao: "Campos de Cima da Serra", cidades: "Vacaria, Bom Jesus, São José dos Ausentes" },
                  { regiao: "Serra Gaúcha", cidades: "Caxias do Sul, Bento Gonçalves, Farroupilha" },
                  { regiao: "Noroeste Gaúcho", cidades: "Ijuí, Santa Rosa, Três Passos" },
                  { regiao: "Região Central", cidades: "Santa Maria, Cruz Alta, Soledade" },
                  { regiao: "Campanha Gaúcha", cidades: "Bagé, Dom Pedrito, Alegrete" },
                  { regiao: "Metropolitana / Litoral", cidades: "Porto Alegre, Viamão, Osório" },
                ].map((item, i) => (
                  <motion.div
                    key={item.regiao}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.1] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-lime shrink-0" />
                      <div>
                        <h3 className="font-bold text-white text-sm">{item.regiao}</h3>
                        <p className="text-white/40 text-xs mt-0.5">{item.cidades}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-forest-dark rounded-3xl p-10 text-center aspect-square flex items-center justify-center"
            >
              <div>
                <div className="text-[8rem] font-extrabold text-lime/20 leading-none">RS</div>
                <p className="text-white/40 text-sm mt-4">Cobertura em todo o estado</p>
                <div className="flex items-center justify-center gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-lime">6</div>
                    <p className="text-white/30 text-xs">Regiões</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-lime">1000+</div>
                    <p className="text-white/30 text-xs">Produtores</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
