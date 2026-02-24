"use client";

import { memo } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/frota/${product.slug}`}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full w-full"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {product.brand}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {product.name}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mt-2 mb-4 flex-grow line-clamp-2">
                    {product.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        {product.category}
                    </span>
                    <span className="inline-flex items-center justify-center gap-2 bg-primary text-white w-full py-2.5 rounded-xl font-bold text-xs group-hover:bg-primary-dark transition-all duration-300 text-center">
                        Ver Detalhes
                        <FaArrowRight className="text-[10px]" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default memo(ProductCard, (prev, next) => prev.product.id === next.product.id);
