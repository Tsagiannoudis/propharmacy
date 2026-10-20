"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { QuickCategories } from "./components/QuickCategories";
import { TopPicksSection } from "./components/TopPicksSection";
import { PharmacyPromiseBanner } from "./components/PharmacyPromiseBanner";
import { BuyingGuideSection } from "./components/BuyingGuideSection";
import { BottomShowcase } from "./components/BottomShowcase";
import { Footer } from "./components/Footer";
import {
  quickCategories,
  topPicksCategoryGroups,
  bottomHighlightProducts,
} from "./data/mockData";
import { Product } from "./types";

export default function Home() {
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItemsCount((prev) => prev + 1);
    setToastMessage(product.name);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
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

      {/* 1. Header & Navigation */}
      <Header cartCount={cartItemsCount} />

      <main className="flex-1 pb-28">
        {/* 2. Hero Promo Banner */}
        <HeroBanner />

        {/* 3. Category Shortcuts */}
        <QuickCategories categories={quickCategories} />

        {/* 4. Top Picks Grouped by Categories (Πρόσωπο, Σώμα, Μαλλιά, Παιδί, κλπ.) */}
        <TopPicksSection categoryGroups={topPicksCategoryGroups} onAddToCart={handleAddToCart} />

        {/* 5. Informational Pharmacy Promise Banner */}
        <PharmacyPromiseBanner />

        {/* 6. Buying Guide / Οδηγός Αγοράς (Bento Grid) */}
        <BuyingGuideSection />

        {/* 7. Bottom Highlight Showcase (Tabs: Πρόσωπο, Μαλλιά) */}
        <BottomShowcase
          faceProducts={bottomHighlightProducts.face}
          hairProducts={bottomHighlightProducts.hair}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
