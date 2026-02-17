"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer>
      {/* ─── Newsletter Section ─── */}
      <section className="bg-[#fafaf9] py-28 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-lime/[0.06] rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-forest/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
        </div>

        <div className="container-main relative">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

            {/* Left Image */}
            <div className="hidden md:flex flex-col gap-4 w-60 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-3 bg-lime/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04]">
                  <Image
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                    alt="Pastagem sustentável"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <p className="text-[11px] text-gray-400 text-center tracking-wide uppercase font-medium">Pastagem sustentável</p>
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center relative z-10 max-w-xl mx-auto">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-forest/[0.06] rounded-full px-5 py-2 mb-8">
                <div className="w-1.5 h-1.5 bg-lime rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-forest/70">Desde 2007 · Lagoa Vermelha, RS</span>
              </div>

              <h2 className="text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-bold text-dark tracking-tight">
                Inovação e confiança<br />
                <span className="text-forest">para o campo.</span>
              </h2>

              <p className="text-gray-500 mt-6 max-w-md mx-auto leading-relaxed">
                Receba novidades, dicas técnicas e ofertas exclusivas diretamente no seu e-mail.
              </p>

              {subscribed ? (
                <div className="mt-10 bg-lime/10 border border-lime/20 rounded-2xl px-8 py-5 inline-flex items-center gap-3 text-forest font-semibold">
                  <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center">
                    <FaPaperPlane className="text-forest text-xs" />
                  </div>
                  Inscrição confirmada!
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <div className="flex-1 relative">
                    <FaPaperPlane className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-5 py-4 text-dark text-sm placeholder:text-gray-400 outline-none focus:border-forest focus:ring-4 focus:ring-forest/[0.06] transition-all shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-forest text-white font-bold px-8 py-4 rounded-2xl hover:bg-forest/90 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Inscrever-se
                    <span className="text-lime text-lg">→</span>
                  </button>
                </form>
              )}

              {/* Social proof */}
              <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
                <span className="text-xs">Sem spam. Cancele quando quiser.</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex flex-col gap-4 w-64 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-3 bg-forest/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04]">
                  <Image
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80"
                    alt="Pecuária gaúcha"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <p className="text-[11px] text-gray-400 text-center tracking-wide uppercase font-medium">Pecuária gaúcha</p>
            </div>

          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* ─── Main Footer ─── */}
      <div className="bg-dark">
        <div className="container-main py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-6">
                <Image src="/logos/mapsul.png" alt="MAP Sul" width={140} height={100} className="h-16 w-auto" />
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                Há 19 anos levando saúde e produtividade para a pecuária gaúcha.
              </p>
              <div className="flex gap-2.5 mt-6">
                <a
                  href="https://instagram.com/mapsul_distribuidora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.05] hover:bg-lime hover:text-forest rounded-xl flex items-center justify-center text-white/30 transition-all duration-300"
                >
                  <FaInstagram size={15} />
                </a>
                <a
                  href="https://wa.me/5554996356819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.05] hover:bg-lime hover:text-forest rounded-xl flex items-center justify-center text-white/30 transition-all duration-300"
                >
                  <FaWhatsapp size={15} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/", label: "Início" },
                  { href: "/sobre", label: "Sobre" },
                  { href: "/blog", label: "Blog" },
                  { href: "/produtos", label: "Produtos" },
                  { href: "/contato", label: "Contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-lime text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluções */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
                Soluções
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/solucoes/reproducao-iatf", label: "Reprodução e IATF" },
                  { href: "/solucoes/nutricao-animal", label: "Nutrição Animal" },
                  { href: "/solucoes/sanidade-vacinacao", label: "Sanidade e Vacinação" },
                  { href: "/solucoes/controle-pragas", label: "Controle de Pragas" },
                  { href: "/solucoes/sementes-pastagem", label: "Sementes de Pastagem" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/40 hover:text-lime text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <FaMapMarkerAlt className="mt-1 text-lime shrink-0 text-xs" />
                  <span className="text-white/40 text-sm">
                    Rua Buarque de Macedo, 189
                    <br />
                    Centro, Lagoa Vermelha - RS
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+555433581151"
                    className="flex items-center gap-2.5 text-white/40 hover:text-lime text-sm transition-colors"
                  >
                    <FaPhoneAlt className="text-lime text-xs" />
                    (54) 3358-1151
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5554996356819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/40 hover:text-lime text-sm transition-colors"
                  >
                    <FaWhatsapp className="text-lime text-xs" />
                    (54) 99635-6819
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05]">
          <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/15 text-xs">
              &copy; {new Date().getFullYear()} MAPSUL Distribuidora. Todos os
              direitos reservados.
            </p>
            <p className="text-white/15 text-xs">
              Lagoa Vermelha, RS — Desde 2007
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
