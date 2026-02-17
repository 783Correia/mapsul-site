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
      {/* ─── Hero CTA with background image ─── */}
      {/* ─── Newsletter / Mission Style (Redesign) ─── */}
      <section className="bg-white py-24 border-b border-gray-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-lime/10 rounded-full blur-[80px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-forest/5 rounded-full blur-[80px] -translate-y-1/2" />
        </div>

        <div className="container-main relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Image (Small Pill) - Agora visível em MD+ */}
            <div className="hidden md:block w-56 shrink-0 relative">
              <div className="absolute inset-0 bg-lime/20 rounded-[3rem] blur-xl transform translate-x-4 translate-y-4"></div>
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden relative shadow-2xl rotate-[-3deg] hover:rotate-0 transition-all duration-500 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                  alt="Pastagem"
                  width={400}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-lime/20 blur-xl rounded-full"></div>
                  <Image src="/logos/mapsul.png" alt="Mapsul" width={120} height={70} className="h-14 w-auto relative" />
                </div>
              </div>

              <h2 className="text-display-sm text-dark max-w-2xl mx-auto tracking-tight">
                Tecnologia de ponta para o campo.
              </h2>
              <p className="text-gray-500 mt-6 max-w-lg mx-auto leading-relaxed text-lg">
                Receba novidades, dicas técnicas e ofertas exclusivas da Mapsul diretamente no seu e-mail.
              </p>

              {subscribed ? (
                <div className="mt-8 bg-lime/10 rounded-full px-8 py-4 inline-flex items-center gap-3 text-forest font-bold mx-auto border border-lime/20">
                  <FaPaperPlane />
                  Inscrição confirmada!
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu endereço de e-mail"
                    className="flex-1 bg-white border border-gray-200 rounded-full px-6 py-4 text-dark text-sm placeholder:text-gray-400 outline-none focus:border-lime focus:ring-4 focus:ring-lime/10 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="bg-forest text-white font-bold px-8 py-4 rounded-full hover:bg-lime hover:text-forest hover:shadow-glow-lime hover:scale-[1.03] transition-all duration-300 shadow-lg"
                  >
                    Inscrever
                  </button>
                </form>
              )}
            </div>

            {/* Right Image (Large Pill) */}
            <div className="hidden md:block w-72 shrink-0 relative">
              <div className="absolute inset-0 bg-forest/10 rounded-[3.5rem] blur-xl transform -translate-x-4 translate-y-4"></div>
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden relative shadow-2xl rotate-[3deg] hover:rotate-0 transition-all duration-500 transform translate-y-8 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1596733430284-f74377bc21a6?w=600&q=80"
                  alt="Tecnologia"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
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
