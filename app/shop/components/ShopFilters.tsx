"use client";

import { ChevronRight, RotateCcw, Search } from "lucide-react";
import type { ShopFiltersState } from "../hooks/useShopFilters";
import { priceRanges } from "../hooks/useShopFilters";
import { decodeHtml } from "@/lib/formatters";

export function ShopFilters({ filters, idPrefix }: { filters: ShopFiltersState; idPrefix: string }) {
  const {
    categories, setCategories, categoryTree, categoryFacets, priceRangeId, setPriceRangeId,
    inStockOnly, setInStockOnly, onSaleOnly, setOnSaleOnly, onSaleCount,
    brandFacets, brandQuery, setBrandQuery, visibleBrandFacets,
    brands, withReset, toggleCategory, toggleBrand,
  } = filters;

  // Use categoryTree if available, else fallback to categoryFacets
  const hasTree = categoryTree && categoryTree.length > 0;

  return (
    <div className="space-y-4">
      {/* Categories */}
      <section className="rounded-3xl bg-white border border-ink-100 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-extrabold text-ink-900">Κατηγορίες</h2>
          {categories.size > 0 && (
            <button
              type="button"
              onClick={() => withReset(setCategories)(new Set())}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600 hover:text-brand-800"
            >
              <RotateCcw className="w-3 h-3" /> Καθαρισμός
            </button>
          )}
        </div>

        <ul className="space-y-1.5 max-h-96 overflow-y-auto pr-1 -mr-1">
          {hasTree ? (
            categoryTree.map((parent) => {
              const isParentChecked = categories.has(parent.slug);
              const isChildChecked = parent.children?.some((child) =>
                categories.has(child.slug)
              );
              const isExpanded = isParentChecked || isChildChecked;
              const hasSubcategories = parent.children && parent.children.length > 0;

              return (
                <li key={parent.id} className="rounded-2xl overflow-hidden border border-transparent transition-all">
                  {/* Parent Category Row */}
                  <div
                    className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl cursor-pointer text-sm font-medium transition-colors ${
                      isParentChecked
                        ? "bg-brand-50 text-brand-900 font-bold"
                        : isChildChecked
                        ? "bg-ink-50/80 text-brand-800 font-semibold"
                        : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    <label className="flex items-center gap-2.5 flex-1 cursor-pointer truncate">
                      <input
                        type="checkbox"
                        id={`${idPrefix}-filter-cat-${parent.slug}`}
                        checked={isParentChecked}
                        onChange={() => toggleCategory(parent.slug)}
                        className="w-4 h-4 rounded accent-brand-600 cursor-pointer"
                      />
                      <span className="truncate">{decodeHtml(parent.name)}</span>
                    </label>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[11px] font-semibold text-ink-400">
                        {parent.count}
                      </span>
                      {hasSubcategories && (
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-ink-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-90 text-brand-600" : ""
                          }`}
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subcategories (Visible when parent or child is selected) */}
                  {isExpanded && hasSubcategories && (
                    <ul className="ml-5 my-1.5 pl-3 border-l-2 border-brand-200 space-y-1 animate-fade-up">
                      {parent.children.map((sub) => {
                        const subChecked = categories.has(sub.slug);
                        return (
                          <li key={sub.id}>
                            <label
                              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 cursor-pointer text-xs transition-colors ${
                                subChecked
                                  ? "bg-brand-100/70 text-brand-900 font-bold"
                                  : "text-ink-600 hover:bg-brand-50/50 hover:text-ink-900"
                              }`}
                            >
                              <input
                                type="checkbox"
                                id={`${idPrefix}-filter-cat-${sub.slug}`}
                                checked={subChecked}
                                onChange={() => toggleCategory(sub.slug)}
                                className="w-3.5 h-3.5 rounded accent-brand-600 cursor-pointer"
                              />
                              <span className="flex-1 truncate">{decodeHtml(sub.name)}</span>
                              <span className="text-[10px] font-semibold text-ink-400">
                                {sub.count}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })
          ) : (
            categoryFacets.map((c) => {
              const checked = categories.has(c.slug);
              return (
                <li key={c.slug}>
                  <label
                    className={`flex items-center gap-3 rounded-xl px-2.5 py-2 cursor-pointer text-sm transition-colors ${
                      checked ? "bg-brand-50 text-brand-800 font-semibold" : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={`${idPrefix}-filter-cat-${c.slug}`}
                      checked={checked}
                      onChange={() => toggleCategory(c.slug)}
                      className="w-4 h-4 rounded accent-brand-600"
                    />
                    <span className="flex-1 truncate">{decodeHtml(c.name)}</span>
                    <span className="text-[11px] font-semibold text-ink-400">{c.count}</span>
                  </label>
                </li>
              );
            })
          )}
        </ul>
      </section>

      {/* Price */}
      <section className="rounded-3xl bg-white border border-ink-100 p-5">
        <h2 className="text-sm font-extrabold text-ink-900 mb-3">Τιμή</h2>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((r) => {
            const active = priceRangeId === r.id;
            return (
              <button
                key={r.id}
                type="button"
                id={`${idPrefix}-filter-price-${r.id}`}
                onClick={() => withReset(setPriceRangeId)(r.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                  active
                    ? "bg-ink-900 border-ink-900 text-white shadow-soft"
                    : "border-ink-100 text-ink-600 hover:border-brand-300 hover:text-ink-900"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Availability / offers */}
      <section className="rounded-3xl bg-white border border-ink-100 p-5 space-y-3">
        <h2 className="text-sm font-extrabold text-ink-900">Διαθεσιμότητα</h2>
        {[
          { id: `${idPrefix}-filter-instock`, label: "Μόνο σε απόθεμα", value: inStockOnly, set: setInStockOnly },
          { id: `${idPrefix}-filter-onsale`, label: `Σε προσφορά (${onSaleCount})`, value: onSaleOnly, set: setOnSaleOnly },
        ].map((t) => (
          <label key={t.id} htmlFor={t.id} className="flex items-center justify-between gap-3 cursor-pointer">
            <span className="text-sm text-ink-700">{t.label}</span>
            <span className="relative inline-flex">
              <input
                id={t.id}
                type="checkbox"
                checked={t.value}
                onChange={(e) => withReset(t.set)(e.target.checked)}
                className="peer sr-only"
              />
              <span className="w-10 h-6 rounded-full bg-ink-100 peer-checked:bg-brand-500 transition-colors" />
              <span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-soft transition-transform peer-checked:translate-x-4" />
            </span>
          </label>
        ))}
      </section>

      {/* Brands */}
      {brandFacets.length > 0 && (
        <section className="rounded-3xl bg-white border border-ink-100 p-5">
          <h2 className="text-sm font-extrabold text-ink-900 mb-3">Brands</h2>
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
            <input
              id={`${idPrefix}-filter-brand-search`}
              type="search"
              value={brandQuery}
              onChange={(e) => setBrandQuery(e.target.value)}
              placeholder="Αναζήτηση brand"
              className="w-full rounded-full bg-ink-50 border border-ink-100 pl-9 pr-3 py-2 text-sm outline-none focus:border-brand-400 focus:shadow-glow transition"
            />
          </div>
          <ul className="space-y-1 max-h-64 overflow-y-auto pr-1 -mr-1">
            {visibleBrandFacets.map((b) => {
              const checked = brands.has(b.slug);
              return (
                <li key={b.slug}>
                  <label
                    className={`flex items-center gap-3 rounded-xl px-2.5 py-2 cursor-pointer text-sm transition-colors ${
                      checked ? "bg-brand-50 text-brand-800" : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={`${idPrefix}-filter-brand-${b.slug}`}
                      checked={checked}
                      onChange={() => toggleBrand(b.slug)}
                      className="w-4 h-4 rounded accent-brand-600"
                    />
                    <span className="flex-1 truncate">{b.name}</span>
                    <span className="text-[11px] font-semibold text-ink-400">{b.count}</span>
                  </label>
                </li>
              );
            })}
            {visibleBrandFacets.length === 0 && (
              <li className="text-xs text-ink-400 px-2.5 py-2">Δεν βρέθηκε brand.</li>
            )}
          </ul>
        </section>
      )}
    </div>

  );
}
