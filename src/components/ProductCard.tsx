import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

// ProductCard.tsx - White Theme
export default function ProductCard({ product }: ProductCardProps) {
    const whatsappMessage = `Olá! Tenho interesse no produto ${product.name} que vi no site.`;
    const whatsappLink = `https://wa.me/5554996356819?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full">
            {/* Imagem */}
            <div className="relative aspect-[4/3] overflow-hidden p-8 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="z-10 object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-sm mix-blend-multiply"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Heart Icon (Decorative) */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-300 group-hover:text-red-500 transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-20 p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {product.brand}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-forest transition-colors">
                        {product.name}
                    </h3>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-lime-dark font-bold uppercase tracking-wider bg-lime/20 px-2 py-1 rounded">
                            {product.category}
                        </span>
                    </div>

                    {/* CTA Pill Button */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-forest text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-lime hover:text-forest hover:scale-105 transition-all duration-300 shadow-md"
                    >
                        Solicitar
                        <FaArrowRight className="text-[10px]" />
                    </a>
                </div>
            </div>
        </div>
    );
}
