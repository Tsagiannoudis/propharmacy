"use client";

import type { ShopFiltersState } from "../hooks/useShopFilters";
export function ShopCategories({ filters }: { filters: ShopFiltersState }) {
  const { categories, categoryFacets, setCategories, withReset } = filters;
  return (
        <section className="container-page mt-8">
          <div
            role="tablist"
            className="flex gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-full bg-white border border-ink-100 w-max max-w-full"
          >
            <button
              role="tab"
              id="shop-cat-all"
              aria-selected={categories.size === 0}
              onClick={() => withReset(setCategories)(new Set())}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                categories.size === 0 ? "bg-ink-900 text-white shadow-soft" : "text-ink-600 hover:text-ink-900"
              }`}
            >
              Όλα
            </button>
            {categoryFacets.slice(0, 8).map((c) => {
              const active = categories.size === 1 && categories.has(c.slug);
              return (
                <button
                  key={c.slug}
                  role="tab"
                  id={`shop-cat-${c.slug}`}
                  aria-selected={active}
                  onClick={() => withReset(setCategories)(new Set([c.slug]))}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    active ? "bg-ink-900 text-white shadow-soft" : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </section>

  );
}
