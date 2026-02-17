"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
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
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-forest/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/60" />

        <div className="relative container-main py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter */}
            <div>
              <span className="inline-flex items-center gap-2.5 glass-light rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime mb-6">
                <FaPaperPlane className="text-[10px]" />
                Newsletter
              </span>
              <h2 className="text-display-sm text-white">
                Fique por Dentro das Novidades
              </h2>
              <p className="text-white/50 mt-4 max-w-md leading-relaxed">
                Receba dicas, novos produtos e ofertas exclusivas diretamente no
                seu e-mail.
              </p>

              {subscribed ? (
                <div className="mt-8 glass-light rounded-full px-6 py-4 inline-flex items-center gap-3 text-lime font-medium text-sm">
                  <FaPaperPlane />
                  Obrigado! Você será notificado.
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="mt-8 flex gap-3 max-w-md"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="flex-1 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-full px-6 py-4 text-white text-sm placeholder:text-white/30 outline-none focus:border-lime/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-lime text-forest font-bold px-6 py-4 rounded-full hover:shadow-glow-lime hover:scale-[1.03] transition-all duration-300 shrink-0"
                  >
                    <FaArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* CTA */}
            <div className="text-right hidden md:block">
              <a
                href="https://wa.me/5554996356819?text=Olá! Gostaria de saber mais sobre os produtos MAPSUL."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Fale Conosco
                <FaArrowRight className="text-xs" />
              </a>
              <p className="text-white/30 text-sm mt-4">
                Atendimento Seg–Sex, 8h às 18h
              </p>
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
                <Image src="/logos/mapsul.png" alt="MAP Sul" width={140} height={100} className="h-16 w-auto brightness-0 invert" />
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
