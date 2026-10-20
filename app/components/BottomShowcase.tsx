"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check, ArrowRight } from "lucide-react";
import { Product } from "../types";

interface BottomShowcaseProps {
  faceProducts: Product[];
  hairProducts: Product[];
  onAddToCart?: (product: Product) => void;
}

const tabs = [
  { id: "face", label: "Πρόσωπο" },
  { id: "hair", label: "Μαλλιά" },
] as const;

export const BottomShowcase: React.FC<BottomShowcaseProps> = ({ faceProducts, hairProducts, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<"face" | "hair">("face");
  const [addedId, setAddedId] = useState<Product["id"] | null>(null);
  const displayProducts = activeTab === "face" ? faceProducts : hairProducts;

  const handleAdd = (item: Product) => {
    onAddToCart?.(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section className="py-16 bg-white border-t border-ink-100">
      <div className="container-page grid lg:grid-cols-12 gap-8 items-start">
        {/* Promo column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <span className="eyebrow">Must-haves</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 mt-1">
            Προϊόντα που δεν πρέπει να χάσεις
          </h2>
          <p className="text-ink-500 mt-3 max-w-md">
            Οι πιο αγαπημένες επιλογές της κοινότητάς μας, ανανεωμένες κάθε εβδομάδα.
          </p>

          <div className="mt-6 flex gap-2 p-1.5 rounded-full bg-ink-50 border border-ink-100 w-max">
            {tabs.map((t) => (
              <button
                key={t.id}
                id={`showcase-tab-${t.id}`}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === t.id ? "bg-ink-900 text-white shadow-soft" : "text-ink-600 hover:text-ink-900"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-sun-100 via-coral-50 to-white border border-sun-300/40 p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Μόνο online</span>
            <p className="font-display text-2xl font-extrabold text-ink-900 mt-1">
              2+1 δώρο σε όλα τα αντηλιακά
            </p>
            <Link href="#offers" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-700">
              Ανακάλυψε <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* List */}
        <ul key={activeTab} className="lg:col-span-7 grid sm:grid-cols-2 gap-3 animate-fade-up">
          {displayProducts.map((item, i) => (
            <li
              key={item.id}
              className="group flex items-center gap-4 rounded-2xl bg-surface border border-ink-100 p-3 hover:bg-white hover:border-brand-200 hover:shadow-soft transition-all"
            >
              <span className="font-display text-sm font-extrabold text-ink-300 w-5 text-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative w-16 h-16 rounded-xl bg-white overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-contain p-1.5 group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-medium text-ink-800 line-clamp-2 group-hover:text-brand-700 transition-colors">
                  {item.name}
                </h3>
                <span className="font-display text-sm font-extrabold text-ink-900 mt-1 block">
                  {item.price === null
                    ? "Τιμή μη διαθέσιμη"
                    : `${item.price.toFixed(2)}€`}
                </span>
              </div>
              <button
                onClick={() => handleAdd(item)}
                className={`w-9 h-9 rounded-full grid place-items-center shrink-0 transition-colors ${addedId === item.id ? "bg-brand-500 text-white" : "bg-white border border-ink-200 text-ink-700 hover:bg-ink-900 hover:text-white hover:border-ink-900"
                  }`}
                aria-label="Προσθήκη στο καλάθι"
              >
                {addedId === item.id ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
