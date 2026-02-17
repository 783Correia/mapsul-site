"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";

const representantes = [
  {
    name: "Campos de Cima da Serra",
    contact: "Equipe MAPSUL",
    phone: "(54) 3358-1151",
    email: "contato@mapsul.com.br",
    cities: "Lagoa Vermelha, Vacaria, São José dos Ausentes, Bom Jesus, Esmeralda",
  },
  {
    name: "Serra Gaúcha",
    contact: "Equipe MAPSUL",
    phone: "(54) 3358-1151",
    email: "contato@mapsul.com.br",
    cities: "Caxias do Sul, Farroupilha, Bento Gonçalves, Flores da Cunha",
  },
  {
    name: "Região Noroeste",
    contact: "Equipe MAPSUL",
    phone: "(54) 3358-1151",
    email: "contato@mapsul.com.br",
    cities: "Passo Fundo, Erechim, Marau, Carazinho, Getúlio Vargas",
  },
  {
    name: "Região Central",
    contact: "Equipe MAPSUL",
    phone: "(54) 3358-1151",
    email: "contato@mapsul.com.br",
    cities: "Santa Maria, Cruz Alta, Tupanciretã, Júlio de Castilhos",
  },
  {
    name: "Campanha Gaúcha",
    contact: "Equipe MAPSUL",
    phone: "(54) 3358-1151",
    email: "contato@mapsul.com.br",
    cities: "Pelotas, Bagé, Santana do Livramento, Dom Pedrito, Alegrete",
  },
  {
    name: "Região Metropolitana",
    contact: "Equipe MAPSUL",
    phone: "(54) 3358-1151",
    email: "contato@mapsul.com.br",
    cities: "Porto Alegre, Canoas, Viamão, Gravataí, São Leopoldo",
  },
];

export default function RepresentantesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        </div>
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
              Atendimento
            </span>
            <h1 className="text-display-sm text-white">Representantes</h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
              Atuamos em todo o Rio Grande do Sul. Encontre o contato mais
              próximo da sua região.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {representantes.map((rep, i) => (
              <motion.div
                key={rep.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-lime/10 rounded-2xl flex items-center justify-center text-lime">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <h3 className="font-extrabold text-dark text-lg tracking-tight leading-tight">
                    {rep.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <FaPhone className="text-lime text-xs shrink-0" />
                    {rep.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <FaEnvelope className="text-lime text-xs shrink-0" />
                    {rep.email}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-5">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">
                    Cidades atendidas
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">{rep.cities}</p>
                </div>

                <a
                  href={getWhatsAppLink(`Olá! Sou da região ${rep.name} e gostaria de falar com um representante.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime w-full justify-center !py-3 !text-[11px]"
                >
                  <FaWhatsapp />
                  Falar com Representante
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark section-padding">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-white">
              Não encontrou sua região?
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              Entre em contato diretamente com nossa central e direcionaremos
              você ao representante mais próximo.
            </p>
            <a
              href="https://wa.me/555433581151"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime mt-8"
            >
              <FaWhatsapp className="text-lg" />
              (54) 3358-1151
              <FaArrowRight className="text-xs" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
