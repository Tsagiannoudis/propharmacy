"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Product } from "../types";
import { useShopFilters } from "./hooks/useShopFilters";
import { ShopFilters } from "./components/ShopFilters";
import { ShopHero } from "./components/ShopHero";
import { ShopCategories } from "./components/ShopCategories";
import { ShopToolbar } from "./components/ShopToolbar";
import { ProductGrid } from "./components/ProductGrid";

interface ShopViewProps { products: Product[] }

export function ShopView({ products }: ShopViewProps) {
  const filters = useShopFilters(products);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { filtered, resetFilters } = filters;

  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink-900">
      <Header cartCount={0} />
      <main className="flex-1 pb-28">
        <ShopHero productCount={products.length} filters={filters} />
        <ShopCategories filters={filters} />
        <section className="container-page mt-6 grid lg:grid-cols-[270px_1fr] gap-8 items-start">
          <aside className="hidden lg:block sticky top-28" aria-label="Φίλτρα">
            <ShopFilters filters={filters} idPrefix="desktop" />
          </aside>

          <div>
            <ShopToolbar filters={filters} onOpenFilters={() => setFiltersOpen(true)} />
            <ProductGrid filters={filters} />
          </div>
        </section>
      </main>
      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Φίλτρα">
          <button
            type="button"
            aria-label="Κλείσιμο"
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-[88%] max-w-sm bg-surface shadow-lift flex flex-col animate-fade-up">
            <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100 bg-white">
              <h2 className="text-lg font-extrabold">Φίλτρα</h2>
              <button
                type="button"
                id="shop-close-filters"
                onClick={() => setFiltersOpen(false)}
                className="w-9 h-9 grid place-items-center rounded-full hover:bg-ink-50"
                aria-label="Κλείσιμο φίλτρων"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4"><ShopFilters filters={filters} idPrefix="mobile" /></div>
            <div className="p-4 border-t border-ink-100 bg-white flex gap-2">
              <button
                type="button"
                onClick={resetFilters}
                className="flex-1 rounded-full border border-ink-200 py-3 text-sm font-semibold text-ink-700"
              >
                Καθαρισμός
              </button>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="flex-1 rounded-full bg-ink-900 text-white py-3 text-sm font-semibold"
              >
                Δες {filtered.length} προϊόντα
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
