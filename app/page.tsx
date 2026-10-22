"use client";

import React from "react";

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


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink-900">
      {/* 1. Header & Navigation */}
      <Header />

      <main className="flex-1 pb-28">
        {/* 2. Hero Promo Banner */}
        <HeroBanner />

        {/* 3. Category Shortcuts */}
        <QuickCategories categories={quickCategories} />

        {/* 4. Top Picks Grouped by Categories (Πρόσωπο, Σώμα, Μαλλιά, Παιδί, κλπ.) */}
        <TopPicksSection categoryGroups={topPicksCategoryGroups} />

        {/* 5. Informational Pharmacy Promise Banner */}
        <PharmacyPromiseBanner />

        {/* 6. Buying Guide / Οδηγός Αγοράς (Bento Grid) */}
        <BuyingGuideSection />

        {/* 7. Bottom Highlight Showcase (Tabs: Πρόσωπο, Μαλλιά) */}
        <BottomShowcase
          faceProducts={bottomHighlightProducts.face}
          hairProducts={bottomHighlightProducts.hair}
         
        />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
