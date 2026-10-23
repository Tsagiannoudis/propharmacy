import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { QuickCategory } from "../types";

interface QuickCategoriesProps {
  categories: QuickCategory[];
}

// Soft tinted backgrounds that rotate per tile
const tints = [
  "from-brand-100 to-brand-50",
  "from-coral-100 to-coral-50",
  "from-sun-100 to-white",
  "from-sky-100 to-sky-50",
  "from-violet-100 to-violet-50",
  "from-emerald-100 to-teal-50",
];

export const QuickCategories: React.FC<QuickCategoriesProps> = ({ categories }) => {
  return (
    <section className="pb-14">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="eyebrow">Κατηγορίες</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
              Τι χρειάζεσαι σήμερα;
            </h2>
          </div>
          <Link href="#all" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-600">
            Όλες οι κατηγορίες <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={cat.href}
              id={`category-${cat.id}`}
              className={`group relative rounded-3xl bg-gradient-to-b ${tints[i % tints.length]} p-3.5 sm:p-4 pt-4 sm:pt-5 border border-white shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-ink-900 truncate pr-1">{cat.title}</h3>
                <span className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-full bg-white/80 grid place-items-center text-ink-700 group-hover:bg-ink-900 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </span>
              </div>
              <div className="relative mt-3 sm:mt-4 aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(min-width: 768px) 16vw, 45vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
