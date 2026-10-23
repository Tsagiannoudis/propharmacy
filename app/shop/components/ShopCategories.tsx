"use client";

import type { ShopFiltersState } from "../hooks/useShopFilters";
import { decodeHtml } from "@/lib/formatters";

export function ShopCategories({ filters }: { filters: ShopFiltersState }) {
  const { categories, categoryTree, categoryFacets, setCategories, withReset } =
    filters;

  // If categoryTree is available, use top-level categories.
  // Otherwise, fallback to categoryFacets.
  const parentCategories =
    categoryTree.length > 0 ? categoryTree : categoryFacets.slice(0, 8);

  return (
    <section className="container-page mt-8">
      <div
        role="tablist"
        className="flex gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-full bg-white border border-ink-100 w-full max-w-full justify-center"
      >
        <button
          role="tab"
          id="shop-cat-all"
          aria-selected={categories.size === 0}
          onClick={() => withReset(setCategories)(new Set())}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
            categories.size === 0
              ? "bg-ink-900 text-white shadow-soft"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          Όλα
        </button>
        {parentCategories.map((c) => {
          // Check if this category or any of its subcategories is selected
          const active =
            categories.has(c.slug) ||
            ("children" in c &&
              Array.isArray(c.children) &&
              c.children.some((child: { slug: string }) =>
                categories.has(child.slug),
              ));

          return (
            <button
              key={c.slug}
              role="tab"
              id={`shop-cat-${c.slug}`}
              aria-selected={Boolean(active)}
              onClick={() => withReset(setCategories)(new Set([c.slug]))}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                active
                  ? "bg-ink-900 text-white shadow-soft"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {decodeHtml(c.name)}
            </button>
          );
        })}
      </div>
    </section>
  );
}
