"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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
  FaBug,
  FaSeedling,
  FaHandSparkles,
  FaTruck,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
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
  { name: "ATTO", logo: "/logos/atto.png" },
  { name: "Luxembourg", logo: "/logos/luxembourg.jpg" },
];


function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest"
    >
      {/* Background Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/30" />
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-lime/15 rounded-full blur-[150px] z-[1]" />
      <div className="absolute bottom-40 right-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] z-[1]" />

      <div className="container-main relative z-20 pt-28 lg:pt-36 pb-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Distribuidora referência no RS desde 2007</span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.8rem,5vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg">
              Produtos veterinários e{" "}
              <span className="text-lime inline-block relative">
                nutrição animal
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>{" "}
              no RS.
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Medicamentos, sementes de pastagem e suplementação para pecuaristas de todo o Rio Grande do Sul. Consultoria técnica especializada e entrega em todas as regiões.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/5554996356819"
                target="_blank"
                className="group bg-lime text-forest-dark px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:bg-lime/90 flex items-center gap-3 shadow-xl shadow-lime/20"
              >
                Fale com nosso Veterinário
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/produtos"
                className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Ver todos os Produtos
              </Link>
            </div>

            {/* Stats — inline */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { number: `${new Date().getFullYear() - 2007}+`, label: "Anos no Mercado" },
                { number: "1000+", label: "Produtores Atendidos" },
                { number: "100%", label: "Cobertura do RS" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-lime mb-0.5">{stat.number}</div>
                  <div className="text-[11px] text-white/50 font-medium uppercase tracking-wider leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Brand Grid + Highlights (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Brands glass card */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/[0.12] p-8 shadow-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Marcas que distribuímos</p>
              <div className="grid grid-cols-3 gap-4">
                {heroBrands.map((brand) => (
                  <div key={brand.name} className="bg-white/[0.07] rounded-2xl p-4 flex items-center justify-center hover:bg-white/[0.14] transition-all duration-300 group aspect-[2.5/1]">
                    {brand.component ? (
                      <brand.component className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity invert brightness-200" />
                    ) : (
                      <Image
                        src={brand.logo ?? ""}
                        alt={brand.name}
                        width={100}
                        height={36}
                        className="h-8 w-auto object-contain invert brightness-200 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl border border-white/[0.1] p-5">
                <FaHandshake className="text-lime text-xl mb-3" />
                <p className="text-white font-bold text-sm">Consultoria técnica</p>
                <p className="text-white/40 text-xs mt-1">ATCs visitam sua propriedade</p>
              </div>
              <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl border border-white/[0.1] p-5">
                <FaTruck className="text-lime text-xl mb-3" />
                <p className="text-white font-bold text-sm">Entrega em todo RS</p>
                <p className="text-white/40 text-xs mt-1">Campos de Cima à Campanha</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1f0f] to-transparent z-20 pointer-events-none" />
    </section>
  );
}

// ... Rest of the file (Solucoes, ProdutosDestaque, Diferenciais, etc.)
// Note: Removed the "Stats" function entirely as requested to avoid duplication.

/* ═══════════════════════════════════════════════
   SOLUÇÕES — Carrossel infinito (6 cards)
   ═══════════════════════════════════════════════ */
function SolucaoCard({ sol }: { sol: { type: string; title: string; subtitle: string; href: string; bg?: string; image?: string; icon?: React.ElementType; iconColor?: string; tags?: string[] } }) {
  const Icon = sol.icon;

  /* ── Image card ── */
  if (sol.type === "image") {
    return (
      <Link href={sol.href} className="block h-full group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${sol.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {Icon && (
          <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-lime/90 flex items-center justify-center text-forest">
            <Icon size={16} />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <h3 className="text-[24px] font-bold text-white tracking-tight leading-tight" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {sol.title}
          </h3>
          <p className="text-white/60 text-sm mt-1.5">{sol.subtitle}</p>
        </div>
      </Link>
    );
  }

  /* ── Solid color card with tags ── */
  if (sol.type === "tags") {
    return (
      <Link href={sol.href} className="block h-full group">
        <div className="p-7 pt-8">
          <h3 className="text-[28px] font-extrabold tracking-tight leading-tight" style={{ color: "#1a3c2a" }}>
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
      type: "image",
      title: "Reprodução e IATF",
      subtitle: "Boehringer Ingelheim",
      href: "/solucoes/reproducao-iatf",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
      icon: FaDna,
    },
    {
      type: "image",
      title: "Nutrição Animal",
      subtitle: "Milk Bar + Agrifirm",
      href: "/solucoes/nutricao-animal",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      icon: FaAppleAlt,
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
      type: "image",
      title: "Sementes de Pastagem",
      subtitle: "Biscayart + ATTO",
      href: "/solucoes/sementes-pastagem",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      icon: FaSeedling,
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
    <section style={{ backgroundColor: "#0f1f0f" }} className="py-20 md:py-28 relative overflow-hidden">
      <div className="container-main relative">
        <SectionHeading
          tag="Soluções para Pecuária"
          title="Medicamentos, nutrição e sementes para o seu rebanho"
          description="Distribuímos as melhores marcas do mercado veterinário no RS: Boehringer Ingelheim, Agrifirm, Milk Bar, ATTO e mais."
          light
        />
      </div>

      {/* ── Carousel container ── */}
      <div className="relative overflow-hidden group/carousel">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0f1f0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0f1f0f] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex w-max animate-solucoes-scroll group-hover/carousel:[animation-play-state:paused] items-stretch">
          {allCards.map((sol, i) => (
            <div
              key={`${sol.title}-${i}`}
              className="relative overflow-hidden cursor-pointer shrink-0 w-[300px] md:w-[340px] h-[380px] md:h-[420px] mx-2 hover:scale-[1.02] transition-transform duration-300"
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
          viewport={{ once: true }}
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
      image: "https://mapsul.com.br/wp-content/uploads/2019/07/Ivomec-Gold-1.jpg",
      badge: "Líder de Mercado",
    },
    {
      name: "Kalvolac Quick",
      brand: "Agrifirm",
      description:
        "Substituto de leite premium para bezerras. Digestão rápida, excelente desenvolvimento ruminal e crescimento juvenil acelerado. Tecnologia holandesa para sua recria.",
      image: "https://mapsul.com.br/wp-content/uploads/2025/05/Sem-titulo-1-2.png",
      badge: "Alta Performance",
    },
    {
      name: "Milk Bar Individual",
      brand: "Milk Bar",
      description:
        "Alimentador individual com bico de fluxo controlado. Promove sucção lenta e natural, melhorando a digestão e reduzindo problemas respiratórios em bezerros.",
      image: "/images/products/milkbar/balde-individual.jpg",
      badge: "Nutrição",
    },
    {
      name: "Dermisan",
      brand: "Kersia",
      description:
        "Solução premium para higiene e proteção do úbere. Pré e pós-dipping de alta eficácia, garantindo qualidade do leite e saúde do rebanho.",
      image: "/images/products/higiene/dermisan.jpg",
      badge: "Higiene",
    },
    {
      name: "Amarillo",
      brand: "Luxembourg",
      description:
        "Armadilha adesiva ecológica para controle de moscas. Não tóxico, ideal para instalações pecuárias. Captura eficaz sem uso de venenos.",
      image: "/images/products/pragas/amarillo.jpg",
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
              href={`https://wa.me/5554996356819?text=Olá! Tenho interesse no produto ${current.name} da ${current.brand}. Gostaria de saber preço e disponibilidade.`}
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
    <section className="bg-forest section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

      <div className="container-main relative">
        <SectionHeading
          tag="Por que a MAPSUL"
          title="Diferenciais que fazem a diferença no campo"
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
   DEPOIMENTOS — Locked
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
        <SectionHeading tag="Depoimentos de Pecuaristas" title="Quem confia na MAPSUL recomenda" />

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
                  className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-lime w-8" : "bg-gray-200 w-2"
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
