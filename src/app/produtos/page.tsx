"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaFilter } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProdutosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todos",
    "Sanidade",
    "Nutrição",
    "Sementes",
    "Pragas",
    "Higiene",
    "Reprodução",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col font-sans selection:bg-lime selection:text-forest">

      {/* Hero Simplificado - Dark & Green */}
      <section className="bg-forest pt-32 pb-16 relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595856942838-8ca080e729a9?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest to-forest/80" />

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <span className="text-lime font-bold tracking-wider text-xs uppercase mb-2 block">
                Catálogo Digital
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Nossas Soluções
              </h1>
            </div>
            <p className="text-white/70 max-w-md text-right md:text-left text-sm md:text-base hidden md:block border-l border-lime/30 pl-6">
              Encontre o produto ideal para maximizar a produtividade do seu rebanho com as melhores tecnologias do mercado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="flex-grow py-12 relative z-10">
        <div className="container-main">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar de Filtros (Esquerda) */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Busca */}
              <div className="sticky top-24">
                <div className="relative mb-8 group">
                  <div className="absolute -inset-0.5 bg-lime/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                  <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-lime/50 transition-colors">
                    <FaSearch className="ml-4 text-white/30 group-focus-within:text-lime" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-white/20 px-3 py-3 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Categorias - Vertical */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <FaFilter className="text-lime text-sm" /> Categorias
                  </h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent ${activeCategory === cat
                          ? "bg-lime text-forest-dark font-bold shadow-lg shadow-lime/10"
                          : "text-white/60 hover:bg-white/5 hover:text-white hover:border-white/10"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid de Produtos (Direita) */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold text-white">
                  {activeCategory === "Todos" ? "Todos os Produtos" : activeCategory}
                </h2>
                <span className="text-white/40 text-sm">
                  {filteredProducts.length} resultado(s)
                </span>
              </div>

              <AnimatePresence mode="popLayout">
                {filteredProducts.length > 0 ? (
                  <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredProducts.map((product) => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-32 bg-white/5 rounded-3xl border border-white/5"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                      <FaSearch className="text-white/20 text-2xl" />
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2">Sem resultados</h3>
                    <p className="text-white/40 mb-6 max-w-xs text-center">
                      Não encontramos produtos para esta busca.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory("Todos");
                        setSearchTerm("");
                      }}
                      className="px-6 py-2 rounded-full border border-lime/30 text-lime hover:bg-lime hover:text-forest transition-all text-sm font-bold"
                    >
                      Limpar Filtros
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
