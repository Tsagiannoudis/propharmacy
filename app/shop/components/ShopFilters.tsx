"use client";

import { Search } from "lucide-react";
import type { ShopFiltersState } from "../hooks/useShopFilters";
import { priceRanges } from "../hooks/useShopFilters";

export function ShopFilters({ filters, idPrefix }: { filters: ShopFiltersState; idPrefix: string }) {
  const {
    categories, categoryFacets, priceRangeId, setPriceRangeId,
    inStockOnly, setInStockOnly, onSaleOnly, setOnSaleOnly, onSaleCount,
    brandFacets, brandQuery, setBrandQuery, visibleBrandFacets,
    brands, withReset, toggleCategory, toggleBrand,
  } = filters;
  return (
    <div className="space-y-4">
      {/* Categories */}
      <section className="rounded-3xl bg-white border border-ink-100 p-5">
        <h2 className="text-sm font-extrabold text-ink-900 mb-3">Κατηγορίες</h2>
        <ul className="space-y-1 max-h-72 overflow-y-auto pr-1 -mr-1">
          {categoryFacets.map((c) => {
            const checked = categories.has(c.slug);
            return (
              <li key={c.slug}>
                <label
                  className={`flex items-center gap-3 rounded-xl px-2.5 py-2 cursor-pointer text-sm transition-colors ${
                    checked ? "bg-brand-50 text-brand-800" : "text-ink-700 hover:bg-ink-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`${idPrefix}-filter-cat-${c.slug}`}
                    checked={checked}
                    onChange={() => toggleCategory(c.slug)}
                    className="w-4 h-4 rounded accent-brand-600"
                  />
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-[11px] font-semibold text-ink-400">{c.count}</span>
                </label>
              </li>
            );
          })}
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
