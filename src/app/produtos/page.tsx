"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaWhatsapp, FaArrowRight } from "react-icons/fa";

type Product = {
  name: string;
  category: string;
  brand: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    name: "ADR 300",
    category: "Medicamentos Veterinários",
    brand: "ATTO",
    description:
      "Antiparasitário injetável de amplo espectro para bovinos. Controle eficaz de endo e ectoparasitas.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
  },
  {
    name: "ADR 500",
    category: "Medicamentos Veterinários",
    brand: "ATTO",
    description:
      "Versão concentrada do ADR para tratamento de grandes rebanhos com alta eficácia.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
  },
  {
    name: "Ivomec Gold",
    category: "Medicamentos Veterinários",
    brand: "Boehringer Ingelheim",
    description:
      "Antiparasitário de longa ação para bovinos. Proteção prolongada contra vermes e carrapatos.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&q=80",
  },
  {
    name: "Eqvalan",
    category: "Medicamentos Veterinários",
    brand: "Boehringer Ingelheim",
    description:
      "Antiparasitário oral para equinos. Tratamento e controle de parasitas internos.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
  },
  {
    name: "Milk Bar",
    category: "Nutrição Animal",
    brand: "Milk Bar",
    description:
      "Sistema de amamentação para bezerros. Alimentação natural que melhora a saúde e o desenvolvimento.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&q=80",
  },
  {
    name: "Dairy-Net",
    category: "Nutrição Animal",
    brand: "Kersia",
    description:
      "Solução para higiene e sanidade na ordenha. Limpeza e desinfecção de equipamentos.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
  },
  {
    name: "Suplemento Mineral Bovinos",
    category: "Nutrição Animal",
    brand: "Agrifirm",
    description:
      "Suplementação mineral completa para bovinos de corte e leite.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&q=80",
  },
  {
    name: "Crotalária",
    category: "Sementes de Pastagem",
    brand: "Biscayart",
    description:
      "Sementes de alta pureza para adubação verde e recuperação de solos degradados.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
  },
  {
    name: "Aveia Preta",
    category: "Sementes de Pastagem",
    brand: "Biscayart",
    description:
      "Forrageira de inverno de alta qualidade para pastejo direto e cobertura de solo.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    name: "Azevém Anual",
    category: "Sementes de Pastagem",
    brand: "Luxembourg",
    description:
      "Gramínea forrageira de inverno de alta produtividade e excelente valor nutritivo.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    name: "Trevo Branco",
    category: "Sementes de Pastagem",
    brand: "Luxembourg",
    description:
      "Leguminosa perene para formação de pastagens consorciadas de alta qualidade.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
  },
  {
    name: "Kit Ordenha Higiênica",
    category: "Nutrição Animal",
    brand: "Kersia",
    description:
      "Kit completo para manutenção da higiene na ordenha. Pré e pós-dipping.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
  },
];

const categories = [
  "Todos",
  "Medicamentos Veterinários",
  "Nutrição Animal",
  "Sementes de Pastagem",
];

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        activeCategory === "Todos" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        </div>
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
              Catálogo
            </span>
            <h1 className="text-display-sm text-white">Nossos Produtos</h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
              As melhores marcas do agronegócio para a saúde e produtividade do
              seu rebanho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white py-6 border-b border-gray-100 sticky top-20 z-40">
        <div className="container-main">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Buscar produtos, marcas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-lime text-primary"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                Nenhum produto encontrado para &quot;{search}&quot;
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-dark text-[11px] font-bold px-3 py-1.5 rounded-full">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-lime">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-dark mt-1 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                      {product.description}
                    </p>
                    <a
                      href={`https://wa.me/555433581151?text=Olá! Gostaria de saber mais sobre o produto ${product.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 group-hover:gap-3 transition-all"
                    >
                      <FaWhatsapp />
                      Solicitar Orçamento
                      <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
