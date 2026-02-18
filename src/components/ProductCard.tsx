"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Product } from "@/data/products";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface ProductCardProps {
    product: Product;
    index?: number;
}

function ProductCard({ product, index = 0 }: ProductCardProps) {
    const whatsappMessage = `Olá! Tenho interesse no produto ${product.name} que vi no site.`;
    const whatsappLink = getWhatsAppLink(whatsappMessage);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-lg transition-all duration-300 hover:border-lime/50 hover:shadow-[0_20px_50px_rgba(180,209,46,0.15)] flex flex-col h-full w-full"
            style={{ backgroundColor: "#1a3c2a" }}
        >
            {/* Imagem */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-6 flex items-center justify-center">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="z-10 object-contain group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-red-500 transition-colors shadow-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                </div>
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
        </motion.div>
    );
}

export default memo(ProductCard, (prev, next) => prev.product.id === next.product.id && prev.index === next.index);
