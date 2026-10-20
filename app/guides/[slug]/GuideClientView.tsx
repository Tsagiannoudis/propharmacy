"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Stethoscope } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";
import { BuyingGuideDetail } from "../../data/buyingGuidesData";
import { Product } from "../../types";

interface GuideClientViewProps {
  guide: BuyingGuideDetail;
}

const subSectionImages = [
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
];

export const GuideClientView: React.FC<GuideClientViewProps> = ({ guide }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product: Product) => {
    setCartCount((c) => c + 1);
    setToastMessage(product.name);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-[60] max-w-sm glass shadow-lift rounded-2xl p-4 pr-5 flex items-start gap-3 animate-toast-in"
        >
          <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-sm font-bold text-ink-900">Προστέθηκε στο καλάθι</p>
            <p className="text-xs text-ink-500 truncate">{toastMessage}</p>
          </div>
        </div>
      )}

      <Header cartCount={cartCount} />

      <main className="flex-1 pb-28">
        {/* Hero */}
        <section className="pt-6 pb-12">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-4xl bg-mesh text-white">
              <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-400/30 blur-3xl animate-float-slow" />
              <div className="relative grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-10 lg:p-14">
                <div className="animate-fade-up">
                  <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-ink-300">
                    <Link href="/" className="hover:text-white">Αρχική</Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>Οδηγοί</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-brand-200">{guide.breadcrumb}</span>
                  </nav>
                  <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-[1.05]">
                    <span className="text-gradient">{guide.introHeading}</span>
                  </h1>
                  <p className="mt-5 text-ink-200 leading-relaxed max-w-xl">{guide.introText}</p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2">
                      <Stethoscope className="w-4 h-4 text-brand-300" /> Από φαρμακοποιούς
                    </span>
                    <span className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2">
                      <Clock className="w-4 h-4 text-brand-300" /> 5 λεπτά ανάγνωση
                    </span>
                  </div>
                </div>
                <div className="relative h-72 sm:h-96 rounded-[1.75rem] overflow-hidden ring-1 ring-white/15 shadow-2xl">
                  <Image src={guide.featuredImage} alt={guide.title} fill priority className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Numbered sections (e.g. baby care) */}
        {guide.sections && guide.sections.length > 0 && (
          <section className="pb-16">
            <div className="container-page">
              <span className="eyebrow">Βασικοί άξονες</span>
              <h2 className="text-3xl font-extrabold mt-1 mb-8">Τι πρέπει να γνωρίζεις</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {guide.sections.map((sec) => (
                  <article
                    key={sec.title}
                    className="group rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-200 hover:shadow-lift transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-700 font-display font-extrabold grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        {sec.number?.replace(".", "")}
                      </span>
                      <h3 className="text-lg font-bold">{sec.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm text-ink-600 leading-relaxed">
                      {sec.items.map((item, i) => {
                        const [prefix, ...rest] = item.split(":");
                        return (
                          <li key={i} className="flex gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                            <span>
                              {rest.length > 0 ? (
                                <>
                                  <strong className="text-ink-900">{prefix}:</strong>
                                  {rest.join(":")}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Callout (e.g. baby milk) */}
        {guide.calloutBox && (
          <section className="pb-16">
            <div className="container-page">
              <div className="grid lg:grid-cols-12 gap-4 items-stretch">
                <div className="lg:col-span-7 rounded-3xl bg-white border border-ink-100 p-8 sm:p-10">
                  <span className="eyebrow">{guide.calloutBox.badge}</span>
                  <h2 className="text-3xl font-extrabold mt-1">Βρεφικά Γάλατα</h2>
                  <p className="mt-4 text-ink-600 leading-relaxed">
                    Η επιλογή του κατάλληλου γάλακτος για βρέφη είναι μια από τις πιο σημαντικές αποφάσεις
                    που θα κληθείτε να πάρετε ως γονείς. Η σωστή διατροφή συμβάλλει στην ανάπτυξη και
                    ευημερία του μωρού σας. Αυτός ο οδηγός θα σας βοηθήσει να κατανοήσετε τις επιλογές
                    σας και να κάνετε μια ενημερωμένη επιλογή.
                  </p>
                </div>
                <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8 sm:p-10">
                  <div className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 rounded-full bg-brand-300/30 blur-2xl" />
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">0–6 μηνών</span>
                  <p className="mt-4 font-display text-5xl font-extrabold">{guide.calloutBox.heading}</p>
                  <p className="mt-3 text-brand-100 text-sm leading-relaxed">{guide.calloutBox.text}</p>
                  <Link
                    href={guide.calloutBox.buttonLink}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-brand-800 font-semibold text-sm px-6 py-3 hover:bg-brand-50 transition-colors"
                  >
                    {guide.calloutBox.buttonText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub-sections with products (e.g. vitamins) */}
        {guide.subSections?.map((subSec, idx) => (
          <section key={subSec.title} className="pb-16">
            <div className="container-page">
              <div className="grid lg:grid-cols-12 gap-6 items-center mb-8">
                <div className="lg:col-span-4 relative h-52 rounded-3xl overflow-hidden">
                  <Image
                    src={subSectionImages[idx % subSectionImages.length]}
                    alt={subSec.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-8">
                  <span className="eyebrow">Ενότητα {idx + 1}</span>
                  <h2 className="text-3xl font-extrabold mt-1">{subSec.title}</h2>
                  <p className="mt-3 text-ink-600 leading-relaxed max-w-2xl">{subSec.intro}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {subSec.productGroups?.map((g, gi) => (
                      <a
                        key={g.categoryTitle}
                        href={`#group-${idx}-${gi}`}
                        className="rounded-full bg-white border border-ink-200 px-4 py-1.5 text-xs font-semibold text-ink-700 hover:border-brand-400 hover:text-brand-700 transition-colors"
                      >
                        {g.categoryTitle}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {subSec.productHeading && (
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink-400 mb-4">
                  {subSec.productHeading}
                </h3>
              )}

              <div className="space-y-6">
                {subSec.productGroups?.map((group, gi) => (
                  <div
                    key={group.categoryTitle}
                    id={`group-${idx}-${gi}`}
                    className="rounded-3xl bg-white border border-ink-100 p-4 sm:p-5 scroll-mt-32"
                  >
                    <div className="flex items-center justify-between mb-4 px-1">
                      <h4 className="text-lg font-bold">{group.categoryTitle}</h4>
                      <span className="text-xs font-semibold text-ink-400">{group.products.length} προϊόντα</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {group.products.map((prod) => (
                        <ProductCard key={prod.id} product={prod} onAddToCart={handleAddToCart} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};
