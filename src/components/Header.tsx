"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaChevronDown,
  FaDna,
  FaAppleAlt,
  FaShieldAlt,
  FaBug,
  FaSeedling,
} from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";

const solucoes = [
  { href: "/solucoes/reproducao-iatf", label: "Reprodução e IATF", icon: FaDna },
  { href: "/solucoes/nutricao-animal", label: "Nutrição Animal", icon: FaAppleAlt },
  { href: "/solucoes/sanidade-vacinacao", label: "Sanidade e Vacinação", icon: FaShieldAlt },
  { href: "/solucoes/controle-pragas", label: "Controle de Pragas", icon: FaBug },
  { href: "/solucoes/sementes-pastagem", label: "Sementes de Pastagem", icon: FaSeedling },
];

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const isSolucoesActive = pathname.startsWith("/solucoes");

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "top-4 md:top-5" : "top-7 md:top-8"
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between px-6 md:px-10 h-16 md:h-[68px] max-w-[1120px] mx-auto rounded-full transition-all duration-500 ${scrolled
            ? "bg-forest-dark/85 backdrop-blur-2xl shadow-float border border-white/[0.08]"
            : "bg-forest/50 backdrop-blur-xl border border-white/[0.1]"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logos/mapsul-alt.png" alt="MAP Sul" width={110} height={36} className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Início */}
            <Link
              href="/"
              className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 group"
            >
              <span className={`relative z-10 ${pathname === "/" ? "text-lime" : "text-white/60 group-hover:text-white"}`}>
                Início
              </span>
              {pathname === "/" && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-lime rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>

            {/* Soluções Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 group flex items-center gap-1"
              >
                <span className={`relative z-10 ${isSolucoesActive ? "text-lime" : "text-white/60 group-hover:text-white"}`}>
                  Soluções
                </span>
                <FaChevronDown className={`text-[8px] transition-transform duration-300 ${isSolucoesActive ? "text-lime" : "text-white/40 group-hover:text-white"} ${dropdownOpen ? "rotate-180" : ""}`} />
                {isSolucoesActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-lime rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-full left-0 mt-3 w-72 bg-forest-dark/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-3 shadow-float"
                  >
                    {solucoes.map((sol) => {
                      const isActive = pathname === sol.href;
                      return (
                        <Link
                          key={sol.href}
                          href={sol.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? "bg-lime/10 text-lime"
                            : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                            }`}
                        >
                          <sol.icon size={14} className={isActive ? "text-lime" : "text-white/30"} />
                          <span className="text-[13px] font-medium">{sol.label}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 group"
                >
                  <span
                    className={`relative z-10 ${isActive ? "text-lime" : "text-white/60 group-hover:text-white"
                      }`}
                  >
                    {link.label}
                  </span>
                  {isActive ? (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-lime rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-lime/0 rounded-full group-hover:bg-white/20 transition-colors duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contato"
            className="hidden lg:inline-flex bg-lime text-forest font-bold px-5 py-2 rounded-full text-xs tracking-wide uppercase items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all duration-300"
          >
            <FaWhatsapp className="text-sm" />
            Fale Conosco
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-5 sm:mx-8 lg:mx-12"
          >
            <div className="bg-forest-dark/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-5 mt-2 shadow-float">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${pathname === "/"
                  ? "text-lime bg-white/[0.06]"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                  }`}
              >
                Início
              </Link>

              {/* Mobile Soluções accordion */}
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isSolucoesActive
                  ? "text-lime bg-white/[0.06]"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                  }`}
              >
                Soluções
                <FaChevronDown className={`text-[10px] transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-0.5 pb-2">
                      {solucoes.map((sol) => (
                        <Link
                          key={sol.href}
                          href={sol.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${pathname === sol.href
                            ? "text-lime bg-white/[0.06]"
                            : "text-white/40 hover:text-white hover:bg-white/[0.04]"
                            }`}
                        >
                          <sol.icon size={12} />
                          {sol.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(1).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive
                      ? "text-lime bg-white/[0.06]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime w-full justify-center mt-3 !py-3"
              >
                <FaWhatsapp className="text-base" />
                Fale no WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
