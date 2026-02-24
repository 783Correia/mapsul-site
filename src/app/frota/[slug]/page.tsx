import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProdutoContent from "./content";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const produto = products.find((p) => p.slug === params.slug);

    if (!produto) {
        return {
            title: "Produto não encontrado",
        };
    }

    return {
        title: `${produto.name} | Jacó Locação`,
        description: produto.description,
        openGraph: {
            title: `${produto.name} | Jacó Locação`,
            description: produto.description,
            images: [produto.image],
        },
    };
}

export function generateStaticParams() {
    return products.map((produto) => ({
        slug: produto.slug,
    }));
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
    const produto = products.find((p) => p.slug === params.slug);

    if (!produto) {
        notFound();
    }

    return <ProdutoContent produto={produto} />;
}
