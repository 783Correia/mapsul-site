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
import Image from "next/image";

import SectionHeading from "@/components/SectionHeading";

import { AgrifirmLogo, BiscayartLogo, KersiaLogo, BoehringerLogo, MilkBarLogo } from "@/components/Logos";

/* ═══════════════════════════════════════════════
   HERO — Rutivo Style (Wide/Clean/Centered)
   ═══════════════════════════════════════════════ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Local brands for the floating bar carousel
  const heroBrands = [
    { name: "Agrifirm", component: AgrifirmLogo },
    { name: "Biscayart", component: BiscayartLogo },
    { name: "Kersia", component: KersiaLogo },
    { name: "Boehringer Ingelheim", component: BoehringerLogo },
    { name: "Milk Bar", component: MilkBarLogo },
    { name: "ATTO", logo: "/logos/atto.png" },
    { name: "Luxembourg", logo: "/logos/luxembourg.jpg" },
  ];
  // Duplicate for infinite scroll
  const carouselBrands = [...heroBrands, ...heroBrands, ...heroBrands, ...heroBrands];

  return (
    <section
      ref={ref}
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-forest"
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
        <div className="absolute inset-0 bg-forest/30 bg-gradient-to-t from-forest via-transparent to-forest/20" />
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-lime/20 rounded-full blur-[100px] z-10 opacity-60 mix-blend-screen" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] z-10 opacity-50 mix-blend-screen" />

      <div className="container-main relative z-20 text-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">Plataforma Líder em Nutrição Animal</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(3.5rem,6vw,6rem)] font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
            Leve o campo para o <br />
            <span className="text-lime inline-block relative">
              próximo nível.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal shadow-black/10 drop-shadow-md">
            Soluções completas em medicamentos, nutrição e sementes para maximizar a produtividade do seu rebanho com tecnologia de ponta.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5554996356819"
              target="_blank"
              className="group bg-lime text-forest-dark px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:bg-lime/90 flex items-center gap-3 shadow-xl shadow-lime/20"
            >
              Fale com um Especialista
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/produtos"
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Ver Catálogo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 left-0 right-0 z-30 px-4"
      >
        <div className="container-main">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-8 shadow-2xl border border-white/20 mx-auto max-w-5xl">
            {[
              { number: "19+", label: "Anos de Experiência" },
              { number: "1000+", label: "Produtores Atendidos" },
              { number: "100%", label: "Cobertura no RS" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 text-center md:text-left border-r last:border-0 border-gray-200 pr-8 last:pr-0">
                <div className="text-3xl font-extrabold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}

            {/* Brand Carousel in the 4th Slot */}
            <div className="flex-[1.5] md:w-80 overflow-hidden relative group h-20 flex items-center">
              {/* Gradient Masks for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

              <div className="flex animate-infinite-scroll w-max hover:[animation-play-state:paused] items-center">
                {carouselBrands.map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex items-center justify-center mx-8 shrink-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    {brand.component ? (
                      <brand.component className="h-10 w-auto" />
                    ) : (
                      <Image
                        src={brand.logo ?? ""}
                        alt={brand.name}
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain mix-blend-multiply"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ... Rest of the file (Solucoes, ProdutosDestaque, Diferenciais, etc.)
// Note: Removed the "Stats" function entirely as requested to avoid duplication.

/* ═══════════════════════════════════════════════
   SOLUÇÕES — 6 categorias com ícones
   ═══════════════════════════════════════════════ */
function Solucoes() {
  const solucoes = [
    {
      icon: FaDna,
      title: "Reprodução e IATF",
      description: "Linha hormonal completa Boehringer Ingelheim. Protocolos para máxima eficiência reprodutiva.",
      href: "/solucoes/reproducao-iatf",
      image: "https://images.unsplash.com/photo-1545465175-9c5957385e05?w=800&q=80", // Black calf / cattle
    },
    {
      icon: FaHandSparkles,
      title: "Higiene de Ordenha",
      description: "Soluções Kersia para qualidade do leite. Detergentes, desinfetantes e pós-dipping.",
      href: "/solucoes/higiene-ordenha",
      image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&q=80", // Milking machine / parlor
    },
    {
      icon: FaAppleAlt,
      title: "Nutrição Animal",
      description: "Sucedâneos lácteos premium e sistemas de alimentação Milk Bar.",
      href: "/solucoes/nutricao-animal",
      image: "https://images.unsplash.com/photo-1595304958316-56be3175ac25?w=800&q=80", // Cattle / Calf feeding context
    },
    {
      icon: FaShieldAlt,
      title: "Sanidade e Vacinação",
      description: "Ivomec® Gold e linha completa de vacinas para saúde do rebanho.",
      href: "/solucoes/sanidade-vacinacao",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80", // Herd in field
    },
    {
      icon: FaBug,
      title: "Controle de Pragas",
      description: "Amarillo: Solução ecológica para controle definitivo de moscas.",
      href: "/solucoes/controle-pragas",
      image: "https://images.unsplash.com/photo-1534431713063-f93806be95fe?w=900&q=80", // Cow close up
    },
    {
      icon: FaSeedling,
      title: "Sementes de Pastagem",
      description: "Sementes certificadas Biscayart e Atto. Alta conversão em carne e leite.",
      href: "/solucoes/sementes-pastagem",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", // Green field
    },
  ];

  return (
    <section className="bg-forest section-padding relative overflow-hidden !pt-32">
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lime/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />

      <div className="container-main relative">
        <SectionHeading
          tag="Nossas Soluções"
          title="Soluções completas para a pecuária gaúcha"
          description="Trabalhamos com as melhores marcas do mercado para garantir saúde, produtividade e sustentabilidade."
          light
        />

        {/* Grid 3-column cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer glass-card-hover"
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
      image: "https://images.unsplash.com/photo-1704221191316-168a25edbc59?auto=format&fit=crop&q=80",
      badge: "Líder de Mercado",
    },
    {
      name: "Kalvolac Quick",
      brand: "Agrifirm",
      description:
        "Substituto de leite premium para bezerras. Digestão rápida, excelente desenvolvimento ruminal e crescimento juvenil acelerado. Tecnologia holandesa para sua recria.",
      image: "https://images.unsplash.com/photo-1549420063-e382d6da5722?auto=format&fit=crop&q=80",
      badge: "Alta Performance",
    },
    {
      name: "Topline® Spray",
      brand: "Boehringer Ingelheim",
      description:
        "Antiparasitário externo de aplicação tópica. Eficácia comprovada no tratamento e prevenção de bicheiras (miíases) e infecções de umbigo.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      badge: "Sanidade",
    },
    {
      name: "Azevém Baqueano",
      brand: "Biscayart",
      description:
        "Azevém tetraplóide de ciclo médio/longo. Genética europeia com alto potencial de produção de massa verde. Ideal para pré-secado e pastejo direto até seis meses.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
      badge: "Produtividade",
    },
    {
      name: "Amarillo",
      brand: "Luxembourg",
      description:
        "Armadilha adesiva ecológica para controle de moscas. Não tóxico, ideal para instalações pecuárias. Captura eficaz sem uso de venenos.",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80",
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
              href={`https://wa.me/5554996356819?text=Olá! Tenho interesse no produto ${current.name}.`}
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
    </main>
  );
}
