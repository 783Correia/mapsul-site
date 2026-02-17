import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const whatsappMessage = `Olá! Tenho interesse no produto ${product.name} que vi no site.`;
    const whatsappLink = `https://wa.me/5554996356819?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <div className="group relative bg-neutral-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 hover:border-lime/30 flex flex-col h-full">
            {/* Gradient Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            {/* Imagem */}
            <div className="relative aspect-[4/3] overflow-hidden p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/90 z-10" />
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lime/20 rounded-full blur-[50px]" />

                <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />

                {/* Heart Icon (Decorative) */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white/50 group-hover:text-lime transition-colors">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-20 p-6 flex flex-col flex-grow -mt-4">
                <div className="mb-2">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                        {product.brand}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-lime transition-colors">
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

                    {/* CTA Pill Button (Sony Style) */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-neutral-900 px-5 py-2 rounded-full font-bold text-xs hover:bg-lime hover:scale-105 transition-all duration-300"
                    >
                        Solicitar
                        <FaArrowRight className="text-[10px]" />
                    </a>
                </div>
            </div>
        </div>
    );
}
