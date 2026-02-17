"use client";

import { motion } from "framer-motion";
import { FaBug, FaLeaf, FaShieldAlt, FaWhatsapp, FaThumbsUp, FaCheckCircle } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";
import SectionHeading from "@/components/SectionHeading";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ControlePragasContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime mb-6">
              <FaBug className="text-[10px]" />
              Controle de Pragas
            </span>
            <h1 className="text-display-sm text-white">
              Controle Ecológico de Moscas e Insetos na Pecuária
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
              Armadilhas adesivas ecológicas Amarillo: solução prática, sem veneno e
              altamente eficiente para o controle de moscas em instalações pecuárias.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={getWhatsAppLink("Olá! Gostaria de saber mais sobre o controle de pragas Amarillo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime"
              >
                <FaWhatsapp className="text-lg" />
                Solicitar Orientação Técnica
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impacto das pragas */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                O Problema
              </span>
              <h2 className="text-heading text-dark">
                O Impacto das Pragas nas Criações
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Moscas domésticas, moscas-dos-estábulos (<em>Stomoxys calcitrans</em>) e
                  moscas-dos-chifres causam prejuízos significativos em propriedades rurais.
                  Esses insetos transmitem doenças, causam estresse nos animais, reduzem a
                  produção de leite e prejudicam o ganho de peso.
                </p>
                <p>
                  Estima-se que a presença de moscas em alta infestação pode reduzir a
                  produção de leite em até <strong className="text-dark">15%</strong> e o
                  ganho de peso em até <strong className="text-dark">20%</strong>. Além disso,
                  moscas são vetores de mastite, ceratoconjuntivite e outras enfermidades.
                </p>
                <p>
                  O uso indiscriminado de inseticidas químicos pode gerar resistência nas
                  populações de moscas e deixar resíduos em produtos de origem animal.
                  Por isso, métodos alternativos e ecológicos são cada vez mais valorizados.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1549420063-e382d6da5722?w=800&q=80')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amarillo (Padrão Sementes: Fundo Forest) */}
      <section className="bg-forest section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

        <div className="container-main relative">
          <SectionHeading
            tag="Solução"
            title="Amarillo: Armadilha Adesiva Ecológica"
            description="Tecnologia simples, eficaz e sem veneno para o controle de moscas em instalações pecuárias."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: FaLeaf,
                title: "100% Ecológico",
                description: "Sem inseticidas, sem veneno, sem resíduos. Seguro para animais, pessoas e meio ambiente.",
              },
              {
                icon: FaShieldAlt,
                title: "Alta Eficiência",
                description: "Superfície adesiva de alta aderência que captura moscas por atração visual, sem resistência.",
              },
              {
                icon: FaThumbsUp,
                title: "Fácil Aplicação",
                description: "Instalação simples em estábulos, sala de ordenha, bezerreiro e qualquer instalação rural.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-lime">
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 max-w-2xl mx-auto">
            <h3 className="font-bold text-white text-lg mb-4">Onde utilizar o Amarillo:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Sala de ordenha",
                "Estábulos e galpões",
                "Bezerreiros",
                "Sala de espera",
                "Depósitos de ração",
                "Áreas de manejo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <motion.div
            {...fadeUp}
            className="bg-forest rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-lime/[0.06] rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
            <div className="relative">
              <FaBug className="text-lime text-4xl mx-auto mb-6" />
              <h2 className="text-display-sm text-white max-w-2xl mx-auto">
                Solicite orientação técnica para o controle de pragas
              </h2>
              <p className="text-white/50 mt-4 max-w-lg mx-auto leading-relaxed">
                Nosso consultor avalia a situação da sua propriedade e indica a
                quantidade e posicionamento ideal das armadilhas Amarillo.
              </p>
              <a
                href="https://wa.me/5554996356819?text=Olá! Quero orientação sobre controle de pragas com Amarillo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime shadow-glow-lime mt-8"
              >
                <FaWhatsapp className="text-lg" />
                Falar com Consultor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
