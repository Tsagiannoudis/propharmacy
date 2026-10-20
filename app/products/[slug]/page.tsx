
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { getWooProductBySlug } from "@/lib/woocommerce";
import { decodeHtml } from "@/lib/formatters";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
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

    const name = decodeHtml(product.name);
    return {
        title: `${name} | ProPharmacy`,
        description: name,
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

    const category = product.categories?.[0];
    const categoryName = category ? decodeHtml(category.name) : null;
    const productName = decodeHtml(product.name);

    return (
        <div className="container-page py-6">
            <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-ink-500"
            >
                <Link href="/" className="hover:text-brand-600 transition-colors">
                    Αρχική
                </Link>

                <ChevronRight size={14} />

                <Link href="/shop" className="hover:text-brand-600 transition-colors">
                    Κατάστημα
                </Link>

                {category && (
                    <>
                        <ChevronRight size={14} />
                        <Link
                            href={`/shop?category=${category.slug}`}
                            className="hover:text-brand-600 transition-colors"
                        >
                            {categoryName}
                        </Link>
                    </>
                )}

                <ChevronRight size={14} />

                <span className="text-ink-900 font-medium truncate max-w-xs sm:max-w-md">
                    {productName}
                </span>
            </nav>

            <ProductDetail product={product} />
        </div>
    );
}

function ProductLoading() {
    return (
        <div className="container-page py-6 animate-pulse">
            <div className="mb-8 h-5 w-64 rounded bg-ink-100" />

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
        <div className="min-h-screen flex flex-col bg-surface text-ink-900">
            <Header />
            <main className="flex-1">
                <Suspense fallback={<ProductLoading />}>
                    <ProductContent params={params} />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
