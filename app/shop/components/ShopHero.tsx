"use client";

import Link from "next/link";
import { ChevronRight, Search, Truck, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import type { ShopFiltersState } from "../hooks/useShopFilters";

const perks = [
  { icon: Truck, title: "Δωρεάν αποστολή", text: "για αγορές άνω των 49€" },
  { icon: ShieldCheck, title: "100% γνήσια", text: "από επίσημους αντιπροσώπους" },
  { icon: Stethoscope, title: "Συμβουλή φαρμακοποιού", text: "δωρεάν, σε κάθε βήμα" },
];
export function ShopHero({ productCount, filters }: { productCount: number; filters: ShopFiltersState }) {
  const { query, setQuery, withReset, brandFacets, onSaleCount } = filters;
  const products = { length: productCount };
  return (
        <section className="container-page pt-6">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-ink-500">
            <Link href="/" className="hover:text-brand-600">
              Αρχική
            </Link>
            <ChevronRight size={14} />
            <span className="text-ink-900">Κατάστημα</span>
          </nav>

          <div className="relative overflow-hidden rounded-4xl bg-mesh text-white px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-brand-400/20 blur-3xl animate-float-slow pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5 text-xs font-semibold text-brand-100">
                  <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                  ProPharmacy Shop
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-[1.05]">
                  Όλα τα προϊόντα, <span className="text-gradient">σε ένα σημείο.</span>
                </h1>
                <p className="mt-3 max-w-xl text-brand-100/80">
                  Δερμοκαλλυντικά, βιταμίνες, βρεφικά και είδη φαρμακείου — επιλεγμένα από τους
                  φαρμακοποιούς μας.
                </p>

                <div className="relative mt-6 max-w-xl">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                  <input
                    id="shop-search"
                    type="search"
                    value={query}
                    onChange={(e) => withReset(setQuery)(e.target.value)}
                    placeholder="Αναζήτησε προϊόν, brand ή κατηγορία…"
                    className="w-full rounded-full bg-white text-ink-900 pl-13 pr-5 py-4 text-sm shadow-lift outline-none focus:shadow-glow transition"
                  />
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-3 animate-fade-up [animation-delay:120ms]">
                {[
                  { label: "Προϊόντα", value: products.length },
                  { label: "Brands", value: brandFacets.length },
                  { label: "Προσφορές", value: onSaleCount },
                ].map((s) => (
                  <div key={s.label} className="glass-dark rounded-2xl px-5 py-4 text-center min-w-24">
                    <dt className="text-[11px] uppercase tracking-wider text-brand-200/80">{s.label}</dt>
                    <dd className="font-display text-2xl font-extrabold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Perks */}
          <ul className="mt-4 grid sm:grid-cols-3 gap-3">
            {perks.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-3 rounded-2xl bg-white border border-ink-100 px-4 py-3">
                <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-ink-900">{title}</span>
                  <span className="text-xs text-ink-500">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

  );
}
