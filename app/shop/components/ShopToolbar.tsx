"use client";

import { ArrowUpDown, SlidersHorizontal, X } from "lucide-react";
import type { ShopFiltersState, SortKey } from "../hooks/useShopFilters";
import { sortOptions, PAGE_SIZE } from "../hooks/useShopFilters";
export function ShopToolbar({ filters, onOpenFilters }: { filters: ShopFiltersState; onOpenFilters: () => void }) {
  const { filtered, activeChips, sort, setSort, setVisible, resetFilters } = filters;
  return (
    <>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl bg-white border border-ink-100 px-4 py-3">
              <p className="text-sm text-ink-500">
                <span className="font-bold text-ink-900">{filtered.length}</span> προϊόντα
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="shop-open-filters"
                  onClick={() => onOpenFilters()}
                  className="lg:hidden inline-flex items-center gap-2 rounded-full border border-ink-100 px-4 py-2 text-sm font-semibold text-ink-700 hover:border-brand-300"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Φίλτρα
                  {activeChips.length > 0 && (
                    <span className="min-w-5 h-5 px-1 rounded-full bg-brand-500 text-white text-[11px] grid place-items-center">
                      {activeChips.length}
                    </span>
                  )}
                </button>

                <label className="relative inline-flex items-center">
                  <ArrowUpDown className="absolute left-3.5 w-4 h-4 text-ink-400 pointer-events-none" />
                  <select
                    id="shop-sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="appearance-none rounded-full border border-ink-100 bg-white pl-10 pr-5 py-2 text-sm font-semibold text-ink-700 outline-none hover:border-brand-300 focus:border-brand-400 cursor-pointer"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/* Active chips */}
            {activeChips.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {activeChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={() => {
                      chip.onRemove();
                      setVisible(PAGE_SIZE);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-100 transition-colors"
                  >
                    {chip.label}
                    <X className="w-3.5 h-3.5" />
                  </button>
                ))}
                <button
                  type="button"
                  id="shop-clear-filters"
                  onClick={resetFilters}
                  className="text-xs font-semibold text-ink-500 hover:text-coral-500 underline underline-offset-4 ml-1"
                >
                  Καθαρισμός όλων
                </button>
              </div>
            )}


    </>
  );
}
