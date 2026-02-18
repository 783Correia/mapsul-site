"use client";

import { FaBug, FaLeaf, FaShieldAlt, FaWhatsapp, FaThumbsUp, FaCheckCircle } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";
import SectionHeading from "@/components/SectionHeading";


export default function ControlePragasContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-36 md:pt-40 pb-28 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />

        <div className="container-main relative">
          <div
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
          </div>
        </div>
      </section>

      {/* Impacto das pragas */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>

            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1549420063-e382d6da5722?w=800&q=80')",
                }}
              />
            </div>
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-lime">
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <div
            className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            style={{ backgroundColor: "#0a2010", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-lime/[0.08] rounded-full translate-x-1/3 -translate-y-1/3 blur-[100px]" />
            <div className="relative">
              <FaBug className="text-lime text-3xl mx-auto mb-4" />
              <h2 className="text-heading text-white max-w-xl mx-auto">
                Solicite orientação técnica para o controle de pragas
              </h2>
              <p className="text-white/50 mt-3 max-w-md mx-auto leading-relaxed text-sm">
                Nosso consultor avalia a situação da sua propriedade e indica a
                quantidade e posicionamento ideal das armadilhas Amarillo.
              </p>
              <a
                href="https://wa.me/5554996356819?text=Ol%C3%A1!%20Quero%20orienta%C3%A7%C3%A3o%20sobre%20controle%20de%20pragas%20com%20Amarillo."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-forest font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all mt-6"
              >
                <FaWhatsapp className="text-sm" />
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
