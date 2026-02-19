"use client";

import { memo, useState } from "react";
import { FaArrowRight, FaShieldAlt, FaAppleAlt, FaSeedling, FaBug, FaHandSparkles, FaDna } from "react-icons/fa";
import Image from "next/image";
import { Product } from "@/data/products";
import { getWhatsAppLink } from "@/utils/whatsapp";

const categoryIcons: Record<string, React.ElementType> = {
    Sanidade: FaShieldAlt,
    Nutrição: FaAppleAlt,
    Sementes: FaSeedling,
    Pragas: FaBug,
    Higiene: FaHandSparkles,
    Reprodução: FaDna,
};

const categoryColors: Record<string, string> = {
    Sanidade: "from-emerald-500/20 to-emerald-900/40",
    Nutrição: "from-amber-500/20 to-amber-900/40",
    Sementes: "from-green-500/20 to-green-900/40",
    Pragas: "from-yellow-500/20 to-yellow-900/40",
    Higiene: "from-cyan-500/20 to-cyan-900/40",
    Reprodução: "from-pink-500/20 to-pink-900/40",
};

function PlaceholderImage({ category, name }: { category: string; name: string }) {
    const Icon = categoryIcons[category] || FaShieldAlt;
    const gradient = categoryColors[category] || "from-gray-500/20 to-gray-900/40";

    return (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3`}>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Icon className="text-lime text-2xl" />
            </div>
            <span className="text-white/50 text-xs font-bold uppercase tracking-wider text-center px-4 line-clamp-1">
                {name}
            </span>
        </div>
    );
}

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const whatsappMessage = `Olá! Tenho interesse no produto ${product.name} que vi no site.`;
    const whatsappLink = getWhatsAppLink(whatsappMessage);
    const [imgError, setImgError] = useState(false);

    const isLocalImage = product.image.startsWith("/images/");

    return (
        <div
            className="group relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-lg transition-all duration-300 hover:border-lime/50 hover:shadow-[0_20px_50px_rgba(180,209,46,0.15)] hover:-translate-y-2 flex flex-col h-full w-full"
            style={{ backgroundColor: "#1a3c2a" }}
        >
            {/* Imagem */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-dark flex items-center justify-center">
                {isLocalImage && !imgError ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="z-10 object-contain group-hover:scale-110 transition-transform duration-700 bg-white p-6"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <PlaceholderImage category={product.category} name={product.name} />
                )}
            </div>

            {/* Conteúdo */}
            <div className="relative z-20 p-5 flex flex-col flex-grow" style={{ backgroundColor: "#1a3c2a" }}>
                <div className="mb-2">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                        {product.brand}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-lime transition-colors duration-300 line-clamp-2">
                        {product.name}
                    </h3>
                </div>

                <p className="text-white/60 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-lime font-bold uppercase tracking-wider">
                            {product.category}
                        </span>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-forest-dark px-5 py-2 rounded-full font-bold text-xs hover:bg-lime hover:scale-105 transition-all duration-300"
                    >
                        Solicitar
                        <FaArrowRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCard, (prev, next) => prev.product.id === next.product.id);
