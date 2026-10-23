import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { WooProduct } from "@/lib/woocommerce";
import { decodeHtml } from "@/lib/formatters";
import { extractBrand } from "@/lib/woo-product-adapter";

export default function ProductHeader({ product }: { product: WooProduct }) {
  const categorySlug = product.categories?.[0]?.slug || "";
  const categoryName = product.categories?.[0]?.name
    ? decodeHtml(product.categories[0].name)
    : "Προϊόντα";
  const { brand, brandSlug } = extractBrand(product);

  return (
      <div className="mb-8">
        <Link
          href={categorySlug ? `/shop?category=${categorySlug}` : "/shop"}
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-ink-500 transition hover:text-ink-900"
        >
          <ArrowLeft
            size={14}
            className="transition group-hover:-translate-x-1"
          />
          <span>Επιστροφή στα {categoryName}</span>
        </Link>

          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              {brand && (
                <Link
                  href={`/shop?brand=${brandSlug || encodeURIComponent(brand)}`}
                  className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors mb-1.5"
                >
                  {brand}
                </Link>
              )}
              <h1 className="text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl md:text-5xl">
                {decodeHtml(product.name)}
              </h1>
              <p className="mt-1 text-sm text-ink-500">
                Εξατομικευμένη επιλογή φαρμακευτικής φροντίδας
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-600 backdrop-blur-sm self-start md:self-auto">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {product.is_in_stock
                ? "Άμεσα διαθέσιμο στο φαρμακείο"
                : "Περιορισμένο απόθεμα"}
            </div>
          </div>
        </div>
  );
}
