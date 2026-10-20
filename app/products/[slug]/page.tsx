
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { getWooProductBySlug } from "@/lib/woocommerce";
import ProductDetail from "./ProductDetail";

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = await getWooProductBySlug(slug);

    if (!product) {
        return {
            title: "Το προϊόν δεν βρέθηκε | ProPharmacy",
        };
    }

    return {
        title: `${product.name} | ProPharmacy`,
        description: product.name,
    };
}

// Dynamic product content
async function ProductContent({
    params,
}: ProductPageProps) {
    const { slug } = await params;

    const product = await getWooProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container-page">
            <nav
                aria-label="Breadcrumb"
                className="mb-10 flex flex-wrap items-center gap-2 text-sm text-ink-500"
            >
                <Link href="/" className="hover:text-brand-600">
                    Αρχική
                </Link>

                <ChevronRight size={14} />

                {product.categories?.[0] && (
                    <>
                        <Link
                            href={`/category/${product.categories[0].slug}`}
                            className="hover:text-brand-600"
                        >
                            {product.categories[0].name}
                        </Link>
                        <ChevronRight size={14} />
                    </>
                )}

                <span className="text-ink-900">
                    {product.name}
                </span>
            </nav>

            <ProductDetail product={product} />
        </div>
    );
}

function ProductLoading() {
    return (
        <div className="container-page animate-pulse">
            <div className="mb-10 h-5 w-64 rounded bg-ink-100" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="aspect-square rounded-3xl bg-ink-100" />

                <div className="space-y-6">
                    <div className="h-4 w-32 rounded bg-ink-100" />
                    <div className="h-10 w-3/4 rounded bg-ink-100" />
                    <div className="h-6 w-28 rounded bg-ink-100" />
                    <div className="h-14 rounded-full bg-ink-100" />
                </div>
            </div>
        </div>
    );
}

export default function ProductPage({
    params,
}: ProductPageProps) {
    return (
        <main className="min-h-screen bg-surface py-8 md:py-12">
            <Suspense fallback={<ProductLoading />}>
                <ProductContent params={params} />
            </Suspense>
        </main>
    );
}
