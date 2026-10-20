"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CategoryGroup, Product } from "../types";
import { ProductCard } from "./ProductCard";

interface TopPicksSectionProps {
  categoryGroups: CategoryGroup[];
  onAddToCart?: (product: Product) => void;
}

export const TopPicksSection: React.FC<TopPicksSectionProps> = ({ categoryGroups, onAddToCart }) => {
  const [activeId, setActiveId] = useState(categoryGroups[0]?.id);
  const active = categoryGroups.find((g) => g.id === activeId) ?? categoryGroups[0];

  if (!active) return null;

  return (
    <section id="offers" className="py-16 bg-white border-y border-ink-100 scroll-mt-28">
      <div className="container-page">
        {/* Heading + tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <span className="eyebrow">Best sellers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 mt-1">
              Top επιλογές της εβδομάδας
            </h2>
            <p className="text-ink-500 mt-2 max-w-xl">
              Τα προϊόντα που προτείνουν οι φαρμακοποιοί μας και αγαπούν οι πελάτες μας.
            </p>
          </div>

          <div role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-full bg-ink-50 border border-ink-100 w-max max-w-full">
            {categoryGroups.map((g) => {
              const isActive = g.id === active.id;
              return (
                <button
                  key={g.id}
                  role="tab"
                  id={`toppicks-tab-${g.id}`}
                  aria-selected={isActive}
                  onClick={() => setActiveId(g.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive ? "bg-ink-900 text-white shadow-soft" : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {g.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div key={active.id} className="grid grid-cols-2 lg:grid-cols-5 gap-4 animate-fade-up">
          {/* Promo tile */}
          <Link
            href={active.link}
            id={`toppicks-promo-${active.id}`}
            className="group col-span-2 lg:col-span-1 relative min-h-64 rounded-3xl overflow-hidden"
          >
            <Image
              src={active.headerImage}
              alt={active.title}
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="text-xs font-semibold text-brand-200">Συλλογή</span>
              <h3 className="text-2xl font-extrabold">{active.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold glass-dark rounded-full px-4 py-2 group-hover:bg-white group-hover:text-ink-900 transition-colors">
                Δείτε όλα <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {active.products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};
