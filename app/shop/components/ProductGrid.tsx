"use client";

import { PackageSearch } from "lucide-react";
import { ProductCard } from "@/app/components/ProductCard";
import type { ShopFiltersState } from "../hooks/useShopFilters";
import { PAGE_SIZE } from "../hooks/useShopFilters";
export function ProductGrid({ filters }: { filters: ShopFiltersState }) {
  const { shown, filtered, setVisible, resetFilters } = filters;
  return (
    <>
            {/* Grid */}
            {shown.length > 0 ? (
              <>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {shown.map((product, i) => (
                    <div
                      key={product.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${(i % PAGE_SIZE) * 25}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                {/* Load more */}
                <div className="mt-10 flex flex-col items-center gap-3">
                  <p className="text-xs text-ink-500">
                    Βλέπεις {shown.length} από {filtered.length} προϊόντα
                  </p>
                  <div className="w-56 h-1.5 rounded-full bg-ink-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-500"
                      style={{ width: `${(shown.length / filtered.length) * 100}%` }}
                    />
                  </div>
                  {shown.length < filtered.length && (
                    <button
                      type="button"
                      id="shop-load-more"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="mt-2 rounded-full bg-ink-900 hover:bg-brand-700 text-white px-7 py-3 text-sm font-semibold shadow-soft transition-colors"
                    >
                      Περισσότερα προϊόντα
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="mt-5 rounded-4xl bg-white border border-dashed border-ink-200 py-20 px-6 text-center">
                <span className="mx-auto w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center">
                  <PackageSearch className="w-8 h-8" />
                </span>
                <h2 className="mt-4 text-xl font-extrabold text-ink-900">Δεν βρέθηκαν προϊόντα</h2>
                <p className="mt-1 text-sm text-ink-500">
                  Δοκίμασε διαφορετική αναζήτηση ή αφαίρεσε κάποια φίλτρα.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-full bg-ink-900 hover:bg-brand-700 text-white px-6 py-2.5 text-sm font-semibold transition-colors"
                >
                  Καθαρισμός φίλτρων
                </button>
              </div>
            )}

    </>
  );
}
