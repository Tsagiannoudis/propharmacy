import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, ShieldCheck, Truck, Gift } from "lucide-react";

interface BrandItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  tagline: string;
}

const featuredBrands: BrandItem[] = [
  {
    id: "la-roche-posay",
    name: "La Roche-Posay",
    category: "Δερμοκαλλυντικά",
    badge: "Top Seller",
    tagline: "Εξειδίκευση για το ευαίσθητο δέρμα",
  },
  {
    id: "cerave",
    name: "CeraVe",
    category: "Καθαρισμός & Ενυδάτωση",
    badge: "Δερματολογικά",
    tagline: "Με απαραίτητα κεραμίδια & υαλουρονικό",
  },
  {
    id: "vichy",
    name: "Vichy",
    category: "Αντιγήρανση & Ενδυνάμωση",
    tagline: "Με ηφαιστειακό ιαματικό νερό",
  },
  {
    id: "apivita",
    name: "Apivita",
    category: "Φυσική Περιποίηση",
    badge: "Greek Brand",
    tagline: "Ελληνική φύση & μελισσοκομικά προϊόντα",
  },
  {
    id: "korres",
    name: "Korres",
    category: "Βοτανική Καινοτομία",
    badge: "Greek Brand",
    tagline: "Φυσικά εκχυλίσματα & καθαρές συνθέσεις",
  },
  {
    id: "avene",
    name: "Avène",
    category: "Ιαματική Φροντίδα",
    tagline: "Καταπραϋντική δράση για δυσανεκτικό δέρμα",
  },
  {
    id: "bioderma",
    name: "Bioderma",
    category: "Δερματολογία & Micellaire",
    tagline: "Σεβασμός στη βιολογία της επιδερμίδας",
  },
  {
    id: "solgar",
    name: "Solgar",
    category: "Βιταμίνες & Υγεία",
    badge: "Premium Nutrition",
    tagline: "Κορυφαία συμπληρώματα διατροφής από το 1947",
  },
];

const brandPerks = [
  {
    icon: ShieldCheck,
    title: "100% Αυθεντικά Προϊόντα",
    desc: "Απευθείας από τις επίσημες αντιπροσωπείες",
  },
  {
    icon: Truck,
    title: "Δωρεάν Μεταφορικά άνω των 39€",
    desc: "Γρήγορη παράδοση σε όλη την Ελλάδα",
  },
  {
    icon: Gift,
    title: "Δωρεάν Δείγματα",
    desc: "Σε κάθε παραγγελία επιλεγμένων brands",
  },
];

export const FeaturedBrands: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-transparent via-brand-50/25 to-transparent">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-3 py-1 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Κορυφαία Brands
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">
              Επώνυμη φροντίδα που εμπιστεύεσαι
            </h2>
            <p className="mt-1 text-sm text-ink-500 max-w-xl">
              Ανακάλυψε τους πιο αγαπημένους οίκους δερμοκαλλυντικών, υγείας και διατροφής με εγγύηση ποιότητας.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 group whitespace-nowrap self-start sm:self-end"
          >
            <span>Όλα τα brands στο κατάστημα</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              href={`/shop?brand=${encodeURIComponent(brand.name)}`}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-ink-100 p-5 sm:p-6 hover:border-brand-300 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-ink-400">
                    {brand.category}
                  </span>
                  {brand.badge && (
                    <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100/60">
                      {brand.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-ink-900 group-hover:text-brand-700 transition-colors">
                  {brand.name}
                </h3>
                <p className="mt-1.5 text-xs text-ink-500 leading-relaxed line-clamp-2">
                  {brand.tagline}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-ink-100/60 flex items-center justify-between text-xs font-semibold text-brand-700">
                <span>Προβολή προϊόντων</span>
                <span className="w-6 h-6 rounded-full bg-brand-50 grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Subtle Perks Strip (Compact & Clean) */}
        <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-ink-100/80 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {brandPerks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink-900 leading-tight">
                    {perk.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-ink-500 mt-0.5">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

