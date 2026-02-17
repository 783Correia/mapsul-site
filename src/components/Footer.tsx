import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Footer() {
  return (
    <footer>

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
                  href={getWhatsAppLink()}
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
                    href={getWhatsAppLink()}
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
