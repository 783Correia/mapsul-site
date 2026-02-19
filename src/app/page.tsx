"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import NewsletterSection from "@/components/NewsletterSection";
import {
  FaHandshake,
  FaAward,
  FaMapMarkedAlt,
  FaHeadset,
  FaWhatsapp,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaDna,
  FaAppleAlt,
  FaShieldAlt,
  FaBug,
  FaSeedling,
  FaHandSparkles,
} from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { AgrifirmLogo, BiscayartLogo, KersiaLogo, BoehringerLogo, MilkBarLogo } from "@/components/Logos";
/* ═══════════════════════════════════════════════
   HERO — Rutivo Style (Wide/Clean/Centered)
   ═══════════════════════════════════════════════ */
const heroBrands = [
  { name: "Agrifirm", component: AgrifirmLogo },
  { name: "Biscayart", component: BiscayartLogo },
  { name: "Kersia", component: KersiaLogo },
  { name: "Boehringer Ingelheim", component: BoehringerLogo },
  { name: "Milk Bar", component: MilkBarLogo },
  { name: "ATTO", component: ({ className }: { className?: string }) => <span className={`font-extrabold text-forest tracking-tight text-2xl ${className || ""}`}>ATTO</span> },
  { name: "Luxembourg", component: ({ className }: { className?: string }) => <span className={`font-extrabold text-forest tracking-tight text-xl ${className || ""}`}>Luxembourg</span> },
];
const carouselBrands = [...heroBrands, ...heroBrands];

function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col justify-center overflow-hidden bg-forest"
    >
      {/* Background — static, no parallax for performance */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=70')",
          }}
        />
        <div className="absolute inset-0 bg-forest/30 bg-gradient-to-t from-forest via-transparent to-forest/20" />
      </div>

      {/* Decorative Orbs — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-20 w-96 h-96 bg-lime/20 rounded-full blur-[100px] z-10 opacity-60" />
      <div className="hidden md:block absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] z-10 opacity-50" />

      <div className="container-main relative z-20 text-center pt-24 md:pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white">Distribuidora referência no RS desde 2007</span>
          </motion.div>

          {/* Headline — staggered words */}
          <h1 className="text-[clamp(1.8rem,5vw,3.8rem)] font-bold text-white leading-[1.1] tracking-tight mb-4">
            {["Produtos", "veterinários", "e"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lime inline-block relative"
            >
              nutrição animal no RS.
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute w-full h-2 -bottom-0.5 left-0 text-lime"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </motion.svg>
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs md:text-base text-white/80 max-w-lg mx-auto leading-relaxed mb-6 font-normal px-2"
          >
            Medicamentos, sementes de pastagem e suplementação para pecuaristas de todo o Rio Grande do Sul. Consultoria técnica especializada e entrega em todas as regiões.
          </motion.p>

          {/* CTA — buttons enter from below with spring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 150 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com um veterinário da VetSulVet.")}
              target="_blank"
              className="group bg-lime text-forest-dark px-5 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 hover:bg-lime/90 flex items-center gap-2 shadow-xl shadow-lime/20"
            >
              Fale com nosso Veterinário
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/produtos"
              className="px-5 py-3 rounded-full font-bold text-sm md:text-base text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              Ver todos os Produtos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Light Indicator — desktop only */}
      <div className="absolute left-10 top-[55%] bottom-20 z-30 hidden lg:flex flex-col items-center gap-3">
        <div className="w-[2px] h-full bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-lime animate-scroll-light rounded-full shadow-[0_0_8px_2px_rgba(180,209,46,0.6)]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium mt-1 [writing-mode:vertical-rl] rotate-180">scroll</span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   STATS BAR — Between Hero and Soluções
   ═══════════════════════════════════════════════ */
function StatsBar() {
  return (
    <div className="relative z-40 -mt-20 md:-mt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-main"
      >
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-4 md:gap-8 shadow-2xl mx-auto max-w-5xl">
          {[
            { target: 19, suffix: "+", label: "Anos de Experiência" },
            { target: 1000, suffix: "+", label: "Produtores Atendidos" },
            { target: 100, suffix: "%", label: "Cobertura no RS" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 text-center md:text-left md:border-r last:border-0 border-gray-200 md:pr-8 last:pr-0">
              <div className="text-xl md:text-2xl font-extrabold text-primary mb-0.5">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1800 + i * 400} />
              </div>
              <div className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}

          {/* Brand Carousel — hidden on mobile */}
          <div className="hidden md:flex flex-[1.5] md:w-80 overflow-hidden relative group h-20 items-center">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex animate-infinite-scroll w-max hover:[animation-play-state:paused] items-center">
              {carouselBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex items-center justify-center mx-8 shrink-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <brand.component className="h-10 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ... Rest of the file (Solucoes, ProdutosDestaque, Diferenciais, etc.)
// Note: Removed the "Stats" function entirely as requested to avoid duplication.

/* ═══════════════════════════════════════════════
   SOLUÇÕES — Carrossel infinito (6 cards)
   ═══════════════════════════════════════════════ */
function SolucaoCard({ sol }: { sol: { type: string; title: string; subtitle: string; href: string; bg?: string; icon?: React.ElementType; iconColor?: string; tags?: string[] } }) {
  const Icon = sol.icon;

  /* ── Solid color card with tags ── */
  if (sol.type === "tags") {
    return (
      <Link href={sol.href} className="block h-full group">
        <div className="p-7 pt-8">
          <h3 className="text-xl md:text-[28px] font-extrabold tracking-tight leading-tight" style={{ color: "#1a3c2a" }}>
            {sol.title}
          </h3>
        </div>
        {sol.tags && (
          <div className="px-7 flex flex-wrap gap-2">
            {sol.tags.map((tag) => (
              <span key={tag} className="inline-block text-xs font-semibold px-4 py-2 rounded-full border" style={{ borderColor: "#1a3c2a", color: "#1a3c2a" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    );
  }

  /* ── Solid color card with icon ── */
  if (sol.type === "icon") {
    return (
      <Link href={sol.href} className="block h-full group">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {Icon && <Icon size={56} className={`${sol.iconColor || "text-forest"} mb-4 group-hover:scale-110 transition-transform duration-300`} />}
          <h3 className="text-[22px] font-bold tracking-tight leading-tight" style={{ color: sol.bg === "#1a3c2a" ? "#fff" : "#1a3c2a" }}>
            {sol.title}
          </h3>
          <p className="text-sm mt-1.5" style={{ color: sol.bg === "#1a3c2a" ? "rgba(255,255,255,0.6)" : "rgba(26,60,42,0.5)" }}>
            {sol.subtitle}
          </p>
        </div>
      </Link>
    );
  }

  return null;
}

function Solucoes() {
  const cards = [
    {
      type: "icon",
      title: "Reprodução e IATF",
      subtitle: "Boehringer Ingelheim",
      href: "/solucoes/reproducao-iatf",
      bg: "#1a3c2a",
      icon: FaDna,
      iconColor: "text-pink-400",
    },
    {
      type: "icon",
      title: "Nutrição Animal",
      subtitle: "Milk Bar + Agrifirm",
      href: "/solucoes/nutricao-animal",
      bg: "#2d1b00",
      icon: FaAppleAlt,
      iconColor: "text-amber-400",
    },
    {
      type: "tags",
      title: "Sanidade e\nVacinação",
      subtitle: "",
      href: "/solucoes/sanidade-vacinacao",
      bg: "#e8f5e9",
      tags: ["Ivomec® Gold", "J-VAC®", "Metacam®"],
    },
    {
      type: "icon",
      title: "Controle de Pragas",
      subtitle: "Amarillo",
      href: "/solucoes/controle-pragas",
      bg: "#fff8e1",
      icon: FaBug,
      iconColor: "text-yellow-700",
    },
    {
      type: "icon",
      title: "Sementes de Pastagem",
      subtitle: "Biscayart + ATTO",
      href: "/solucoes/sementes-pastagem",
      bg: "#1a3c2a",
      icon: FaSeedling,
      iconColor: "text-green-400",
    },
    {
      type: "icon",
      title: "Higiene de Ordenha",
      subtitle: "Soluções Kersia",
      href: "/solucoes/higiene-ordenha",
      bg: "#1a3c2a",
      icon: FaHandSparkles,
      iconColor: "text-lime",
    },
  ];

  // Duplicate for seamless loop
  const allCards = [...cards, ...cards];

  return (
    <section style={{ backgroundColor: "#0f1f0f" }} className="pt-10 md:pt-14 pb-20 md:pb-28 relative">
      <StatsBar />
      <div className="container-main relative pt-10 md:pt-14">
        <SectionHeading
          tag="Soluções para Pecuária"
          title="Medicamentos, nutrição e sementes para o seu rebanho"
          description="Distribuímos as melhores marcas do mercado veterinário no RS: Boehringer Ingelheim, Agrifirm, Milk Bar, ATTO e mais."
          light
        />
      </div>

      {/* ── Carousel container ── */}
      <div className="relative overflow-hidden group/carousel">

        {/* Scrolling track */}
        <div className="flex w-max animate-solucoes-scroll group-hover/carousel:[animation-play-state:paused] items-stretch">
          {allCards.map((sol, i) => (
            <div
              key={`${sol.title}-${i}`}
              className="relative overflow-hidden cursor-pointer shrink-0 w-[240px] md:w-[340px] h-[320px] md:h-[420px] mx-2 hover:scale-[1.02] transition-transform duration-300"
              style={{
                borderRadius: 20,
                backgroundColor: sol.bg || "transparent",
              }}
            >
              <SolucaoCard sol={sol} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12"
        >
          <Link href="/produtos" className="btn-lime">
            Explorar Catálogo Completo
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRODUTOS DESTAQUE — Locked
   ═══════════════════════════════════════════════ */
function ProdutosDestaque() {
  const [active, setActive] = useState(0);
  const destaques = [
    {
      name: "Ivomec® Gold",
      brand: "Boehringer Ingelheim",
      description:
        "O padrão ouro em controle parasitário. Formulação tixotrópica com Ivermectina 3,15%. Proteção por até 12 semanas contra berne e carrapatos, garantindo maior ganho de peso e pastos limpos.",
      icon: FaShieldAlt,
      color: "from-emerald-900 to-forest-dark",
      badge: "Líder de Mercado",
    },
    {
      name: "Kalvolac Quick",
      brand: "Agrifirm",
      description:
        "Substituto de leite premium para bezerras. Digestão rápida, excelente desenvolvimento ruminal e crescimento juvenil acelerado. Tecnologia holandesa para sua recria.",
      icon: FaAppleAlt,
      color: "from-amber-900 to-forest-dark",
      badge: "Alta Performance",
    },
    {
      name: "Milk Bar Individual",
      brand: "Milk Bar",
      description:
        "Alimentador individual com bico de fluxo controlado. Promove sucção lenta e natural, melhorando a digestão e reduzindo problemas respiratórios em bezerros.",
      icon: FaAppleAlt,
      color: "from-cyan-900 to-forest-dark",
      badge: "Nutrição",
    },
    {
      name: "Dermisan",
      brand: "Kersia",
      description:
        "Solução premium para higiene e proteção do úbere. Pré e pós-dipping de alta eficácia, garantindo qualidade do leite e saúde do rebanho.",
      icon: FaHandSparkles,
      color: "from-sky-900 to-forest-dark",
      badge: "Higiene",
    },
    {
      name: "Amarillo",
      brand: "Luxembourg",
      description:
        "Armadilha adesiva ecológica para controle de moscas. Não tóxico, ideal para instalações pecuárias. Captura eficaz sem uso de venenos.",
      icon: FaBug,
      color: "from-yellow-900 to-forest-dark",
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
                className={`absolute inset-0 bg-gradient-to-br ${current.color} flex flex-col items-center justify-center gap-4`}
              >
                <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <current.icon className="text-lime text-5xl" />
                </div>
                <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{current.name}</span>
              </div>

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
              href={`https://wa.me/5551990000000?text=Olá! Tenho interesse no produto ${current.name} da ${current.brand}. Gostaria de saber preço e disponibilidade.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime mt-8"
            >
              <FaWhatsapp className="text-lg" />
              Pedir Orçamento via WhatsApp
            </a>

            <div className="flex gap-2 mt-8">
              {destaques.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-lime w-10" : "bg-gray-200 w-3"
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
   DIFERENCIAIS — Locked
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
    <section style={{ backgroundColor: "#0f1f0f" }} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

      <div className="container-main relative">
        <SectionHeading
          tag="Por que a VetSulVet"
          title="Diferenciais que fazem a diferença no campo"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 120 }}
              className="glass-card glass-card-hover p-7 text-center group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 glass rounded-2xl flex items-center justify-center mx-auto mb-5 text-lime group-hover:bg-lime group-hover:text-forest transition-all duration-400"
              >
                <item.icon size={22} />
              </motion.div>
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
   MISSÃO VISÃO VALORES — Locked
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
    <section style={{ backgroundColor: "#0f1f0f" }} className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-lime/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[150px]" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                Institucional
              </span>
              <h2 className="text-heading text-white">
                Missão, Visão & Valores
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="mt-10 space-y-8"
            >
              <div className="border-l-4 border-lime pl-6">
                <h3 className="font-bold text-white text-lg mb-2">Missão</h3>
                <p className="text-white/50 leading-relaxed">
                  Atuar com responsabilidade e excelência na distribuição de
                  produtos e na prestação de serviços, promovendo o conhecimento
                  e inovação no Agronegócio.
                </p>
              </div>
              <div className="border-l-4 border-white/20 pl-6">
                <h3 className="font-bold text-white text-lg mb-2">Visão</h3>
                <p className="text-white/50 leading-relaxed">
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10"
          >
            <h3 className="font-bold text-white text-lg mb-8">Nossos Valores</h3>
            <div className="space-y-3">
              {valores.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 bg-white/[0.06] border border-white/[0.08] rounded-2xl p-4 hover:bg-white/[0.1] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-lime/15 rounded-xl flex items-center justify-center text-lime font-extrabold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="font-medium text-white">{v}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   DEPOIMENTOS — Locked
   ═══════════════════════════════════════════════ */
function Depoimentos() {
  const [active, setActive] = useState(0);
  const depoimentos = [
    {
      name: "Carlos Mendes",
      role: "Pecuarista — Vacaria, RS",
      text: "A VetSulVet sempre nos atendeu com agilidade e produtos de qualidade. A consultoria técnica faz toda a diferença na escolha dos melhores tratamentos para o rebanho.",
    },
    {
      name: "Ana Paula Silva",
      role: "Produtora de Leite — Passo Fundo, RS",
      text: "Trabalhamos com a VetSulVet há mais de 10 anos. A confiança na qualidade dos produtos e no atendimento da equipe é o que nos mantém parceiros.",
    },
    {
      name: "Roberto Ferreira",
      role: "Fazenda Boa Vista — Passo Fundo, RS",
      text: "As sementes que compramos pela VetSulVet transformaram nossas pastagens. O suporte técnico é excepcional e os resultados falam por si.",
    },
  ];

  const next = () => setActive((a) => (a + 1) % depoimentos.length);
  const prev = () =>
    setActive((a) => (a - 1 + depoimentos.length) % depoimentos.length);

  return (
    <section style={{ backgroundColor: "#0f1f0f" }} className="section-padding relative overflow-hidden">
      <div className="container-main">
        <SectionHeading tag="Depoimentos de Pecuaristas" title="Quem confia na VetSulVet recomenda" light />

        <div className="max-w-3xl mx-auto relative">
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <FaQuoteLeft className="text-lime/10 text-6xl absolute top-6 left-6" />

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed italic">
                &quot;{depoimentos[active].text}&quot;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <motion.div
                  key={`avatar-${active}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 bg-lime rounded-full flex items-center justify-center text-forest font-extrabold"
                >
                  {depoimentos[active].name[0]}
                </motion.div>
                <div>
                  <p className="font-bold text-white">{depoimentos[active].name}</p>
                  <p className="text-white/40 text-sm">{depoimentos[active].role}</p>
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
              className="w-11 h-11 bg-white/[0.08] border border-white/[0.1] rounded-full flex items-center justify-center text-white/60 hover:bg-lime hover:text-forest hover:border-lime transition-all hover:scale-105"
            >
              <FaChevronLeft size={12} />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-lime w-8" : "bg-white/20 w-2"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 bg-white/[0.08] border border-white/[0.1] rounded-full flex items-center justify-center text-white/60 hover:bg-lime hover:text-forest hover:border-lime transition-all hover:scale-105"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="font-sans antialiased text-dark">
      <Hero />
      <Solucoes />
      <ProdutosDestaque />
      <Diferenciais />
      <MissaoVisaoValores />
      <Depoimentos />
      <NewsletterSection />
    </main>
  );
}
