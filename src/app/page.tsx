"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  FaHandshake,
  FaAward,
  FaMapMarkedAlt,
  FaHeadset,
  FaWhatsapp,
  FaArrowRight,
  FaArrowLeft,
  FaUsers,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaDna,
  FaAppleAlt,
  FaShieldAlt,
  FaBug,
  FaSeedling,
} from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ═══════════════════════════════════════════════
   HERO — Forest dark bg + photo opacity 0.3
   Glassmorphism floating card + parallax
   ═══════════════════════════════════════════════ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-forest"
    >
      {/* Background photo with parallax + opacity */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80')",
          }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-transparent to-forest" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/40 to-transparent" />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lime/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[100px]" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative container-main pt-36 pb-24"
      >
        <div className="grid lg:grid-cols-5 gap-16 items-center min-h-[65vh]">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2.5 glass-light rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-lime mb-8">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                19 Anos no Mercado
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2.8rem,6.5vw,4.5rem)] font-extrabold text-white leading-[1.02] tracking-[-0.04em]"
            >
              19 Anos Cuidando da{" "}
              <span className="text-lime relative">
                Saúde e Produtividade
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-lime/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 5 Q150 10 200 3" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{" "}
              do Seu Rebanho
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white/50 text-lg md:text-xl mt-8 max-w-lg leading-relaxed"
            >
              Distribuição de medicamentos veterinários, nutrição animal e
              sementes de pastagem para pecuaristas de todo o RS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="https://wa.me/5554996695509?text=Olá! Gostaria de saber mais sobre os produtos MAPSUL."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Fale no WhatsApp
              </a>
              <Link href="/solucoes/reproducao-iatf" className="btn-outline">
                Nossas Soluções
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Glassmorphism floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -3 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="glass-card p-8 space-y-6">
              {/* Avatars row */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {["bg-lime", "bg-orange", "bg-primary-light", "bg-lime-dark"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`w-9 h-9 ${bg} rounded-full border-2 border-forest/50 flex items-center justify-center`}
                      >
                        <FaUsers className="text-white text-[10px]" />
                      </div>
                    )
                  )}
                  <div className="w-9 h-9 glass rounded-full border-2 border-forest/50 flex items-center justify-center text-white/60 text-[10px] font-bold">
                    +
                  </div>
                </div>
                <div className="text-white/40 text-xs leading-tight">
                  Confiado por<br />
                  <span className="text-white font-bold">1000+ produtores</span>
                </div>
              </div>

              <div className="h-px bg-white/[0.08]" />

              {/* Big number */}
              <div>
                <div className="text-5xl font-extrabold text-white tracking-tighter">
                  <AnimatedCounter target={1000} suffix="+" className="" />
                </div>
                <p className="text-white/40 text-sm mt-1">
                  Produtores no Rio Grande do Sul
                </p>
              </div>

              <div className="h-px bg-white/[0.08]" />

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-lime">7</div>
                  <p className="text-white/30 text-[11px] mt-0.5">Marcas Líderes</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-lime">RS</div>
                  <p className="text-white/30 text-[11px] mt-0.5">Todo o Estado</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-lime text-xs" />
                ))}
                <span className="text-white/30 text-[11px] ml-2">
                  5.0 — Avaliação dos produtores
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-5 h-9 border-2 border-white/15 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-lime rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   STATS — Asymmetric with animated counters
   ═══════════════════════════════════════════════ */
function Stats() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Nossos Números
            </span>
            <div className="text-[5.5rem] md:text-[7rem] font-extrabold text-dark leading-none tracking-tighter mt-2">
              <AnimatedCounter target={19} className="" />
            </div>
            <p className="text-gray-400 text-lg -mt-1">Anos de mercado</p>
          </motion.div>

          <div className="md:col-span-8 grid grid-cols-3 gap-6">
            {[
              { number: 1000, suffix: "+", label: "Produtores atendidos", sublabel: "em todo o RS" },
              { number: 7, suffix: "", label: "Marcas líderes", sublabel: "do agronegócio" },
              { number: 100, suffix: "%", label: "Cobertura RS", sublabel: "todas as regiões" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-gray-100 pl-6"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-800 text-sm font-medium mt-1">{stat.label}</p>
                <p className="text-gray-400 text-xs">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SOLUÇÕES — 5 categorias com ícones
   ═══════════════════════════════════════════════ */
function Solucoes() {
  const solucoes = [
    {
      icon: FaDna,
      title: "Reprodução e IATF",
      description: "Hormônios, protocolos e insumos para inseminação artificial em tempo fixo. Linha completa Boehringer Ingelheim.",
      href: "/solucoes/reproducao-iatf",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    },
    {
      icon: FaAppleAlt,
      title: "Nutrição Animal",
      description: "Suplementação mineral, sistemas de alimentação para bezerras e rações de alta performance. Parceria Agrifirm.",
      href: "/solucoes/nutricao-animal",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
    },
    {
      icon: FaShieldAlt,
      title: "Sanidade e Vacinação",
      description: "Vacinas, antiparasitários e produtos para o calendário sanitário completo do seu rebanho.",
      href: "/solucoes/sanidade-vacinacao",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=900&q=80",
    },
    {
      icon: FaBug,
      title: "Controle de Pragas",
      description: "Soluções ecológicas para controle de moscas e insetos em instalações pecuárias. Produto Amarillo.",
      href: "/solucoes/controle-pragas",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80",
    },
    {
      icon: FaSeedling,
      title: "Sementes de Pastagem",
      description: "Sementes certificadas para formação e recuperação de pastagens. Cultivares adaptadas ao RS.",
      href: "/solucoes/sementes-pastagem",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    },
  ];

  return (
    <section className="bg-forest section-padding relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lime/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />

      <div className="container-main relative">
        <SectionHeading
          tag="Nossas Soluções"
          title="Soluções completas para a pecuária gaúcha"
          description="Trabalhamos com as melhores marcas do mercado para garantir saúde, produtividade e sustentabilidade."
          light
        />

        {/* Grid 5 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer glass-card-hover ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <Link href={sol.href} className="block">
                <div className="relative aspect-[16/10]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${sol.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/20" />

                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-4 text-lime group-hover:bg-lime group-hover:text-forest transition-all duration-400">
                      <sol.icon size={20} />
                    </div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {sol.title}
                    </h3>
                    <p className="text-white/50 text-xs mt-2 leading-relaxed line-clamp-2">
                      {sol.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-lime text-xs font-bold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span>Saiba mais</span>
                      <FaArrowRight className="text-[10px]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/produtos" className="btn-lime">
            Ver Catálogo Completo
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRODUTOS DESTAQUE — Rultivo carousel 60/40
   ═══════════════════════════════════════════════ */
function ProdutosDestaque() {
  const [active, setActive] = useState(0);
  const destaques = [
    {
      name: "Ivomec Gold",
      brand: "Boehringer Ingelheim",
      description:
        "Antiparasitário de longa ação para bovinos. Proteção prolongada contra vermes, carrapatos e berne. Referência no mercado veterinário.",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=900&q=80",
      badge: "Mais Vendido",
    },
    {
      name: "Milk Bar",
      brand: "Milk Bar NZ",
      description:
        "Sistema de amamentação para bezerros desenvolvido na Nova Zelândia. Alimentação natural que melhora saúde, ganho de peso e bem-estar.",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=900&q=80",
      badge: "Inovação",
    },
    {
      name: "Crotalária",
      brand: "Biscayart",
      description:
        "Sementes de alta pureza para adubação verde e recuperação de solos degradados. Solução sustentável e certificada.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80",
      badge: "Sustentável",
    },
  ];

  const next = useCallback(
    () => setActive((a) => (a + 1) % destaques.length),
    [destaques.length]
  );
  const prev = () =>
    setActive((a) => (a - 1 + destaques.length) % destaques.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const current = destaques[active];

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image — 60% (3 cols) */}
          <div className="lg:col-span-3 relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${current.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="text-white/20 text-[6rem] font-extrabold leading-none tracking-tighter">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute top-6 right-6">
                <span className="bg-lime text-forest text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {current.badge}
                </span>
              </div>
            </motion.div>

            <div className="absolute -bottom-5 right-8 flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white rounded-full shadow-float flex items-center justify-center text-dark hover:bg-lime hover:text-forest transition-all duration-300 hover:scale-105"
              >
                <FaArrowLeft size={14} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 bg-lime rounded-full shadow-glow-lime flex items-center justify-center text-forest hover:bg-lime-dark transition-all duration-300 hover:scale-105"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Content — 40% (2 cols) */}
          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-6">
              Destaques
            </span>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                {current.brand}
              </p>
              <h3 className="text-heading text-dark mt-1">{current.name}</h3>
              <p className="text-gray-500 mt-4 leading-relaxed">
                {current.description}
              </p>
            </motion.div>

            <a
              href={`https://wa.me/5554996695509?text=Olá! Tenho interesse no produto ${current.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime mt-8"
            >
              <FaWhatsapp className="text-lg" />
              Solicitar Orçamento
            </a>

            <div className="flex gap-2 mt-8">
              {destaques.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    active === i ? "bg-lime w-10" : "bg-gray-200 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   DIFERENCIAIS — dark bg + glass cards (4 novos)
   ═══════════════════════════════════════════════ */
function Diferenciais() {
  const items = [
    {
      icon: FaHandshake,
      title: "Consultoria Técnica Especializada",
      description: "Nossos ATCs (Assessores Técnicos Comerciais) visitam sua propriedade para orientar sobre os melhores produtos e protocolos.",
    },
    {
      icon: FaAward,
      title: "Marcas Premium",
      description: "Distribuidor oficial das maiores marcas do mercado veterinário: Boehringer Ingelheim, Agrifirm, ATTO, Milk Bar e mais.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Cobertura Estadual",
      description: "Atendemos pecuaristas em todas as regiões do Rio Grande do Sul, dos Campos de Cima da Serra à Campanha Gaúcha.",
    },
    {
      icon: FaHeadset,
      title: "Suporte Pós-Venda",
      description: "Acompanhamento técnico contínuo após a compra: monitoramento de resultados, ajuste de protocolos e suporte completo.",
    },
  ];

  return (
    <section className="bg-forest section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

      <div className="container-main relative">
        <SectionHeading
          tag="Diferenciais"
          title="Por que escolher a MAPSUL?"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
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
  );
}

/* ═══════════════════════════════════════════════
   MISSÃO VISÃO VALORES
   ═══════════════════════════════════════════════ */
function MissaoVisaoValores() {
  const valores = [
    "Ética",
    "Credibilidade",
    "Transparência",
    "Respeito ao Meio Ambiente",
    "Valorização das Pessoas",
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Institucional
              </span>
              <h2 className="text-heading text-dark">
                Missão, Visão & Valores
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-10 space-y-8"
            >
              <div className="border-l-4 border-lime pl-6">
                <h3 className="font-bold text-dark text-lg mb-2">Missão</h3>
                <p className="text-gray-500 leading-relaxed">
                  Atuar com responsabilidade e excelência na distribuição de
                  produtos e na prestação de serviços, promovendo o conhecimento
                  e inovação no Agronegócio.
                </p>
              </div>
              <div className="border-l-4 border-forest pl-6">
                <h3 className="font-bold text-dark text-lg mb-2">Visão</h3>
                <p className="text-gray-500 leading-relaxed">
                  Ser referência na distribuição de produtos e consultoria
                  técnica no Agronegócio, entregando inovação e conscientizando
                  para o uso eficiente e sustentável dos produtos.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-10"
          >
            <h3 className="font-bold text-dark text-lg mb-8">Nossos Valores</h3>
            <div className="space-y-3">
              {valores.map((v, i) => (
                <div
                  key={v}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-lime/10 rounded-xl flex items-center justify-center text-lime font-extrabold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="font-medium text-dark">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   DEPOIMENTOS — Carousel with glass
   ═══════════════════════════════════════════════ */
function Depoimentos() {
  const [active, setActive] = useState(0);
  const depoimentos = [
    {
      name: "Carlos Mendes",
      role: "Pecuarista — Vacaria, RS",
      text: "A MAPSUL sempre nos atendeu com agilidade e produtos de qualidade. A consultoria técnica faz toda a diferença na escolha dos melhores tratamentos para o rebanho.",
    },
    {
      name: "Ana Paula Silva",
      role: "Produtora de Leite — Lagoa Vermelha, RS",
      text: "Trabalhamos com a MAPSUL há mais de 10 anos. A confiança na qualidade dos produtos e no atendimento da equipe é o que nos mantém parceiros.",
    },
    {
      name: "Roberto Ferreira",
      role: "Fazenda Boa Vista — Passo Fundo, RS",
      text: "As sementes que compramos pela MAPSUL transformaram nossas pastagens. O suporte técnico é excepcional e os resultados falam por si.",
    },
  ];

  const next = () => setActive((a) => (a + 1) % depoimentos.length);
  const prev = () =>
    setActive((a) => (a - 1 + depoimentos.length) % depoimentos.length);

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-main">
        <SectionHeading tag="Depoimentos" title="O que nossos parceiros dizem" />

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-card relative overflow-hidden">
            <FaQuoteLeft className="text-lime/10 text-6xl absolute top-6 left-6" />

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic">
                &quot;{depoimentos[active].text}&quot;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center text-lime font-extrabold">
                  {depoimentos[active].name[0]}
                </div>
                <div>
                  <p className="font-bold text-dark">{depoimentos[active].name}</p>
                  <p className="text-gray-400 text-sm">{depoimentos[active].role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lime text-xs" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 bg-white rounded-full shadow-card flex items-center justify-center text-dark hover:bg-lime hover:text-forest transition-all hover:scale-105"
            >
              <FaChevronLeft size={12} />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    active === i ? "bg-lime w-8" : "bg-gray-200 w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 bg-white rounded-full shadow-card flex items-center justify-center text-dark hover:bg-lime hover:text-forest transition-all hover:scale-105"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARCAS PARCEIRAS — Logo strip com placeholders
   ═══════════════════════════════════════════════ */
function MarcasParceiras() {
  const marcas = [
    { name: "Boehringer Ingelheim", destaque: true },
    { name: "Agrifirm", destaque: true },
    { name: "ATTO", destaque: false },
    { name: "Milk Bar", destaque: false },
    { name: "Kersia", destaque: false },
    { name: "Biscayart", destaque: false },
    { name: "Luxembourg", destaque: false },
  ];

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
            Parceiros
          </span>
          <h2 className="text-heading-sm text-dark">Marcas Parceiras</h2>
          <p className="text-gray-400 mt-2 text-sm">Distribuidor oficial das marcas líderes do agronegócio</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {marcas.map((marca, i) => (
            <motion.div
              key={marca.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group flex items-center justify-center rounded-2xl border px-8 py-5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                marca.destaque
                  ? "border-lime/30 bg-lime/5 hover:border-lime"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <span className={`font-extrabold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                marca.destaque
                  ? "text-forest group-hover:text-forest"
                  : "text-gray-300 group-hover:text-forest"
              }`}>
                {marca.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Solucoes />
      <ProdutosDestaque />
      <Diferenciais />
      <MissaoVisaoValores />
      <Depoimentos />
      <MarcasParceiras />
    </>
  );
}
