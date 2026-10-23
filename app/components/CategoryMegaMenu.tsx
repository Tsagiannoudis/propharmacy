"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles, FolderTree } from "lucide-react";
import { decodeHtml } from "@/lib/formatters";

export interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  parent: number;
  count: number;
}

export interface CategoryTree extends CategoryItem {
  children: CategoryItem[];
}

export function CategoryMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryTree[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [selectedParentId, setSelectedParentId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Fetch categories dynamically on open or on mount
  useEffect(() => {
    if (isOpen && !hasFetched) {
      setLoading(true);
      fetch("/api/categories")
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data.categories)) {
            setCategories(data.categories);
            if (data.categories.length > 0) {
              setSelectedParentId(data.categories[0].id);
            }
          }
          setHasFetched(true);
        })
        .catch((err) => {
          console.error("Error loading categories:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen, hasFetched]);

  const activeCategory =
    categories.find((c) => c.id === selectedParentId) || categories[0];

  return (
    <div className="relative" ref={menuRef}>
      {/* Mega Menu Toggle Button */}
      <button
        type="button"
        id="header-category-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 pl-5 pr-3 py-3 text-xs font-semibold border-r border-ink-200 transition-colors ${
          isOpen
            ? "text-brand-700 bg-brand-50/50"
            : "text-ink-700 hover:text-brand-700"
        }`}
      >
        <span>Όλα</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-600" : "text-ink-400"
          }`}
        />
      </button>

      {/* Mega Menu Overlay Dropdown */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Κατηγορίες Προϊόντων"
          className="absolute top-full left-0 mt-3 w-[720px] max-w-[85vw] rounded-3xl bg-white border border-ink-100 shadow-lift p-5 z-50 animate-fade-up"
        >
          {/* Header banner */}
          <div className="flex items-center justify-between pb-3.5 border-b border-ink-100 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                <FolderTree className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-ink-900 leading-none">
                  Όλες οι Κατηγορίες
                </h3>
              </div>
            </div>

            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline transition-colors"
            >
              Όλα τα προϊόντα <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-2 text-ink-400">
              <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs">Φόρτωση κατηγοριών…</span>
            </div>
          ) : categories.length === 0 ? (
            <div className="py-8 text-center text-xs text-ink-500">
              Δεν βρέθηκαν διαθέσιμες κατηγορίες.
            </div>
          ) : (
            <div className="grid grid-cols-[220px_1fr] gap-4 min-h-[300px] max-h-[460px]">
              {/* Left Column: Top-level categories list */}
              <div className="overflow-y-auto pr-1 space-y-1 border-r border-ink-100">
                {categories.map((cat) => {
                  const isSelected = cat.id === activeCategory?.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onMouseEnter={() => setSelectedParentId(cat.id)}
                      onClick={() => setSelectedParentId(cat.id)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-brand-50 text-brand-800 font-bold shadow-soft"
                          : "text-ink-700 hover:bg-ink-50"
                      }`}
                    >
                      <span className="truncate">{decodeHtml(cat.name)}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-brand-200/60 text-brand-900"
                            : "bg-ink-100 text-ink-500"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Selected Category Details & Subcategories */}
              <div className="overflow-y-auto pl-2 flex flex-col justify-between">
                <div>
                  {activeCategory && (
                    <>
                      {/* Active category direct link banner */}
                      <div className="flex items-center justify-between bg-gradient-to-r from-brand-50 to-brand-100/50 p-3 rounded-2xl mb-4 border border-brand-200/50">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 block">
                            Κύρια Κατηγορία
                          </span>
                          <span className="text-sm font-extrabold text-ink-900">
                            {decodeHtml(activeCategory.name)}
                          </span>
                        </div>
                        <Link
                          href={`/shop?category=${encodeURIComponent(activeCategory.slug)}`}
                          onClick={() => setIsOpen(false)}
                          className="px-3.5 py-1.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-soft transition-colors inline-flex items-center gap-1"
                        >
                          Προβολή όλων ({activeCategory.count})
                        </Link>
                      </div>

                      {/* Subcategories Grid */}
                      {activeCategory.children &&
                      activeCategory.children.length > 0 ? (
                        <div>
                          <span className="text-[11px] font-bold text-ink-400 block mb-2 uppercase tracking-wide">
                            Υποκατηγορίες
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {activeCategory.children.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/shop?category=${encodeURIComponent(sub.slug)}`}
                                onClick={() => setIsOpen(false)}
                                className="group/item flex items-center justify-between p-2.5 rounded-xl border border-ink-100 hover:border-brand-300 hover:bg-brand-50/40 transition-all text-xs"
                              >
                                <span className="font-medium text-ink-700 group-hover/item:text-brand-800 truncate">
                                  {decodeHtml(sub.name)}
                                </span>
                                <span className="text-[10px] text-ink-400 group-hover/item:text-brand-600 font-semibold ml-1">
                                  ({sub.count})
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="py-8 text-center text-xs text-ink-400">
                          Δεν υπάρχουν επιμέρους υποκατηγορίες.
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Footer hint */}
                <div className="pt-4 border-t border-ink-100 mt-4 flex items-center justify-between text-[11px] text-ink-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                    Όλα τα προϊόντα αποστέλλονται σε 24-48 ώρες
                  </span>
                  <Link
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-ink-700 hover:text-brand-600 transition-colors"
                  >
                    Όλο το κατάστημα
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
