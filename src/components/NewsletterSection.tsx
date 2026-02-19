"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

export default function NewsletterSection() {
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
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-forest/70">Desde 2007 · Passo Fundo, RS</span>
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
    );
}
