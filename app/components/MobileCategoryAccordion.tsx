"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, FolderTree } from "lucide-react";
import { decodeHtml } from "@/lib/formatters";
import type { CategoryTree } from "./CategoryMegaMenu";

interface MobileCategoryAccordionProps {
  onClose?: () => void;
}

export const MobileCategoryAccordion: React.FC<MobileCategoryAccordionProps> = ({
  onClose,
}) => {
  const [categories, setCategories] = useState<CategoryTree[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/categories")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        }
      })
      .catch((err) => {
        console.error("Error fetching mobile categories:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleCategory = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <div className="py-6 flex flex-col items-center justify-center gap-2 text-ink-400">
        <div className="w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs">Φόρτωση κατηγοριών…</span>
      </div>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold text-ink-500 uppercase tracking-wider flex items-center gap-1.5">
          <FolderTree className="w-3.5 h-3.5 text-brand-600" />
          Όλες οι Κατηγορίες
        </span>
        <Link
          href="/shop"
          onClick={onClose}
          className="text-xs font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1"
        >
          Όλα τα προϊόντα <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-2">
        {categories.map((cat) => {
          const isExpanded = expandedId === cat.id;
          const hasChildren = cat.children && cat.children.length > 0;

          return (
            <div
              key={cat.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? "border-brand-300 bg-brand-50/20 shadow-xs"
                  : "border-ink-100 bg-white"
              }`}
            >
              {/* Category Header Row */}
              <button
                type="button"
                onClick={() => toggleCategory(cat.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors ${
                  isExpanded
                    ? "bg-brand-50/70 text-brand-900"
                    : "text-ink-900 hover:bg-ink-50/60"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-sm font-bold truncate">
                    {decodeHtml(cat.name)}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isExpanded
                        ? "bg-brand-200 text-brand-900"
                        : "bg-ink-100 text-ink-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-ink-400 transition-transform duration-200 shrink-0 ${
                    isExpanded ? "rotate-180 text-brand-600" : ""
                  }`}
                />
              </button>

              {/* Subcategories Accordion Content */}
              {isExpanded && (
                <div className="px-3 pb-3 pt-2 border-t border-brand-100 bg-white/70 space-y-2 animate-fade-down">
                  {/* View All Parent Category Link */}
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat.slug)}`}
                    onClick={onClose}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors shadow-xs"
                  >
                    <span>Προβολή όλων ({cat.count})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Subcategories */}
                  {hasChildren ? (
                    <div>
                      <span className="text-[10px] font-bold text-ink-400 uppercase tracking-wider block px-1 py-1">
                        Υποκατηγορίες
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {cat.children.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/shop?category=${encodeURIComponent(sub.slug)}`}
                            onClick={onClose}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-ink-100 text-xs font-medium text-ink-700 hover:border-brand-300 hover:text-brand-800 hover:bg-brand-50/40 transition-all"
                          >
                            <span className="truncate">{decodeHtml(sub.name)}</span>
                            <span className="text-[10px] text-ink-400 font-semibold ml-1 shrink-0">
                              ({sub.count})
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-[11px] text-ink-400 text-center py-2">
                      Δεν υπάρχουν επιμέρους υποκατηγορίες.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
