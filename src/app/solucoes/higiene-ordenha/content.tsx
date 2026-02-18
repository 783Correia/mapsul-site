"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";
import {
    FaWhatsapp,
    FaCheckCircle,
    FaHandSparkles,
    FaFlask,
    FaShieldAlt,
} from "react-icons/fa";

import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function HigieneOrdenhaContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-forest pt-36 md:pt-40 pb-28 md:pb-32 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1596733430284-f74377bc21a6?w=1920&q=80')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />

                <div className="container-main relative">
                    <div
                        className="max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime mb-6">
                            <FaHandSparkles className="text-[10px]" />
                            Higiene de Ordenha
                        </span>
                        <h1 className="text-display-sm text-white">
                            Qualidade do Leite Começa na Higiene
                        </h1>
                        <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
                            Soluções completas Kersia para higiene de ordenha, limpeza de equipamentos
                            e saúde do úbere. Garanta um leite de alta qualidade e reduza a CCS.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href={getWhatsAppLink("Olá! Gostaria de consultoria sobre produtos de higiene de ordenha.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-lime shadow-glow-lime"
                            >
                                <FaWhatsapp className="text-lg" />
                                Falar com Especialista
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kersia Partnership */}
            <section className="bg-white section-padding">
                <div className="container-main">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                                Parceria Kersia
                            </span>
                            <h2 className="text-heading text-dark">
                                Líder Mundial em Biossegurança
                            </h2>
                            <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                                <p>
                                    A MAPSUL traz para a sua propriedade a tecnologia da <strong className="text-dark">Kersia</strong>,
                                    referência global em segurança alimentar e biossegurança. Oferecemos uma linha completa
                                    de detergentes, desinfetantes e produtos para pré e pós-dipping.
                                </p>
                                <p>
                                    A higiene inadequada é a principal causa de mastite e contagem bacteriana elevada no leite.
                                    Com os produtos e protocolos corretos, você protege a saúde do úbere, garante a
                                    qualidade do leite e aumenta a rentabilidade.
                                </p>
                            </div>

                            <div className="mt-8 space-y-3">
                                {[
                                    "Detergentes alcalinos e ácidos de alta performance",
                                    "Pré e Pós-Dipping com ação hidratante e germicida",
                                    "Desinfetantes para instalações",
                                    "Protocolos de limpeza personalizados",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-lime shrink-0" />
                                        <span className="text-gray-600 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100"
                        >
                            {/* Using a placeholder if Kersia generic image isn't available, but we have Dermisan below */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=800&q=80')",
                                }}
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-forest shadow-lg">
                                Tecnologia Kersia
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produtos (Padrão Sementes: Fundo Forest) */}
            <section className="bg-forest section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

                <div className="container-main relative">
                    <SectionHeading
                        tag="Catálogo"
                        title="Produtos em Destaque"
                        description="Soluções eficientes para cada etapa da ordenha e limpeza."
                        light
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products
                            .filter((p) => p.category === "Higiene")
                            .map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </div>
                </div>
            </section>

            {/* Importância */}
            <section className="bg-forest section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[150px]" />

                <div className="container-main relative">
                    <div className="grid sm:grid-cols-3 gap-8 text-center">
                        <div className="glass-card p-8">
                            <FaFlask className="text-lime text-3xl mx-auto mb-4" />
                            <h3 className="text-white font-bold text-lg mb-2">Qualidade do Leite</h3>
                            <p className="text-white/50 text-sm">Redução de CBT e CCS, garantindo melhor remuneração pelo leite.</p>
                        </div>
                        <div className="glass-card p-8">
                            <FaShieldAlt className="text-lime text-3xl mx-auto mb-4" />
                            <h3 className="text-white font-bold text-lg mb-2">Saúde do Rebanho</h3>
                            <p className="text-white/50 text-sm">Prevenção de mastites e lesões de teto, aumentando a vida útil das vacas.</p>
                        </div>
                        <div className="glass-card p-8">
                            <FaHandSparkles className="text-lime text-3xl mx-auto mb-4" />
                            <h3 className="text-white font-bold text-lg mb-2">Biossegurança</h3>
                            <p className="text-white/50 text-sm">Proteção contra patógenos e contaminação cruzada na sala de ordenha.</p>
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
                            <FaHandSparkles className="text-lime text-3xl mx-auto mb-4" />
                            <h2 className="text-heading text-white max-w-xl mx-auto">
                                Melhore a qualidade do seu leite hoje mesmo
                            </h2>
                            <p className="text-white/50 mt-3 max-w-md mx-auto leading-relaxed text-sm">
                                Solicite uma visita técnica. Nossos consultores realizam diagnóstico
                                completo da higiene de ordenha e limpeza de equipamentos.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mt-6">
                                <a
                                    href={getWhatsAppLink("Olá! Quero melhorar a qualidade do leite com produtos Kersia.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime text-forest font-bold px-5 py-2.5 rounded-full text-xs tracking-wide uppercase inline-flex items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all"
                                >
                                    <FaWhatsapp className="text-sm" />
                                    Solicitar Visita Técnica
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
