"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Heart,
  HelpCircle,
  Mail,
  PhoneCall,
  Search,
  Sparkles,
  Stethoscope,
  Tag,
  Zap,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { buyingGuidesData, BuyingGuideDetail } from "../data/buyingGuidesData";

type CategoryFilter = "all" | "skincare" | "health" | "baby";

interface GuideCardMetadata {
  slug: string;
  category: CategoryFilter;
  categoryLabel: string;
  badgeColor: string;
  readTime: string;
  subtitle: string;
  summary: string;
  tags: string[];
}

const guidesMetadata: Record<string, GuideCardMetadata> = {
  "baby-care": {
    slug: "baby-care",
    category: "baby",
    categoryLabel: "Μαμά & Μωρό",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200/60",
    readTime: "5 λεπτά ανάγνωση",
    subtitle: "Όλα όσα χρειάζεται το μωρό σας από τις πρώτες ημέρες.",
    summary:
      "Πλήρης καθοδήγηση από παιδιάτρους και φαρμακοποιούς για βρεφικά γάλατα, αντιμετώπιση κολικών, αλλαγή πάνας και πλήρες κιτ νεογέννητου.",
    tags: ["Βρεφικά Γάλατα", "Κολικοί", "Αλλαγή Πάνας", "Κιτ Μαιευτηρίου"],
  },
  "vitamins-supplements": {
    slug: "vitamins-supplements",
    category: "health",
    categoryLabel: "Υγεία & Πρόληψη",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/60",
    readTime: "6 λεπτά ανάγνωση",
    subtitle: "Οδηγός σωστής επιλογής & δοσολογίας.",
    summary:
      "Επιστημονικός οδηγός για ανοσοποιητικό, ενέργεια, κόπωση, αρθρώσεις και cheat sheet με τον ακριβή χρόνο λήψης κάθε βιταμίνης (πρωί/βράδυ).",
    tags: ["Βιταμίνη D3", "Μαγνήσιο", "Ωμέγα-3", "Χρόνος Λήψης"],
  },
  "face-care": {
    slug: "face-care",
    category: "skincare",
    categoryLabel: "Περιποίηση",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200/60",
    readTime: "5 λεπτά ανάγνωση",
    subtitle: "Η ιδανική ρουτίνα για κάθε τύπο δέρματος.",
    summary:
      "Καθαρισμός, αντιοξειδωτικοί οροί, ενυδάτωση και αντηλιακό. Πλήρης οδηγός layering, συνδυασμοί δραστικών συστατικών (ρετινόλη + βιταμίνη C) και Face Quiz.",
    tags: ["Ρετινόλη", "Βιταμίνη C", "Υαλουρονικό", "Ακμή & Πόροι"],
  },
  "body-care": {
    slug: "body-care",
    category: "skincare",
    categoryLabel: "Περιποίηση",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/60",
    readTime: "5 λεπτά ανάγνωση",
    subtitle: "Ενυδάτωση, απολέπιση & σύσφιξη.",
    summary:
      "Κλινικές λύσεις για ατοπικό δέρμα, έκζεμα, θυλακική υπερκεράτωση (strawberry legs), ραγάδες εγκυμοσύνης και σύσφιξη με τον κανόνα των 3 λεπτών.",
    tags: ["Ατοπικό & Κνησμός", "Strawberry Legs", "Ουρία & Σαλικυλικό", "Ραγάδες"],
  },
  "hair-care": {
    slug: "hair-care",
    category: "skincare",
    categoryLabel: "Περιποίηση",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    readTime: "5 λεπτά ανάγνωση",
    subtitle: "Υγιή, δυνατά & λαμπερά μαλλιά.",
    summary:
      "Ολοκληρωμένο πρωτόκολλο τριχόπτωσης 3 βημάτων, συγκριτικός οδηγός πιτυρίδας vs ξηροδερμίας και ρουτίνες εξισορρόπησης λιπαρότητας.",
    tags: ["Τριχόπτωση 360°", "Πιτυρίδα vs Ξηροδερμία", "Aminexil", "Σαμπουάν Τσουκνίδας"],
  },
  "first-aid": {
    slug: "first-aid",
    category: "health",
    categoryLabel: "Υγεία & Πρόληψη",
    badgeColor: "bg-red-50 text-red-700 border-red-200/60",
    readTime: "4 λεπτά ανάγνωση",
    subtitle: "Προετοιμασία για κάθε έκτακτη ανάγκη στο σπίτι.",
    summary:
      "Πρωτόκολλα άμεσης αντιμετώπισης εγκαυμάτων, πληγών, αιμορραγιών και τσιμπημάτων, μαζί με πλήρη λίστα ελέγχου οικιακού φαρμακείου.",
    tags: ["Έγκαυμα", "Πληγές & Αιμορραγία", "Κουτί Πρώτων Βοηθειών", "Τσιμπήματα"],
  },
};

const trendingTopics = [
  { label: "#Τριχόπτωση", href: "/guides/hair-care#hair-loss-section" },
  { label: "#Κολικοί_Μωρού", href: "/guides/baby-care#baby-milks" },
  { label: "#Ρετινόλη_και_Βιταμίνη_C", href: "/guides/face-care#ingredient-combinations" },
  { label: "#Ενέργεια_και_Κόπωση", href: "/guides/vitamins-supplements#timing-guide" },
  { label: "#Έγκαυμα_και_Πληγές", href: "/guides/first-aid#first-aid-scenarios" },
  { label: "#Strawberry_Legs", href: "/guides/body-care#keratosis-strawberry-legs" },
  { label: "#Πιτυρίδα_vs_Ξηροδερμία", href: "/guides/hair-care#dandruff-vs-dry-scalp" },
  { label: "#Ατοπικό_Δέρμα", href: "/guides/body-care#atopic-skin-section" },
];

export const GuidesHubClientView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  // Interactive Finder Quiz state
  const [quizGoal, setQuizGoal] = useState<string>("skin");
  const [quizTarget, setQuizTarget] = useState<string>("myself");
  const [recommendedSlug, setRecommendedSlug] = useState<string | null>(null);

  const calculateGuideRecommendation = () => {
    if (quizTarget === "baby" || quizGoal === "baby") {
      setRecommendedSlug("baby-care");
      return;
    }
    if (quizGoal === "skin") {
      setRecommendedSlug("face-care");
      return;
    }
    if (quizGoal === "hair") {
      setRecommendedSlug("hair-care");
      return;
    }
    if (quizGoal === "body") {
      setRecommendedSlug("body-care");
      return;
    }
    if (quizGoal === "immunity" || quizGoal === "energy") {
      setRecommendedSlug("vitamins-supplements");
      return;
    }
    if (quizGoal === "emergency") {
      setRecommendedSlug("first-aid");
      return;
    }
    setRecommendedSlug("face-care");
  };

  const filteredGuides = useMemo(() => {
    return Object.values(buyingGuidesData).filter((guide) => {
      const meta = guidesMetadata[guide.slug];
      if (!meta) return true;

      // Filter by category pill
      if (selectedCategory !== "all" && meta.category !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = guide.title.toLowerCase().includes(query);
        const matchSubtitle = meta.subtitle.toLowerCase().includes(query);
        const matchSummary = meta.summary.toLowerCase().includes(query);
        const matchTags = meta.tags.some((t) => t.toLowerCase().includes(query));
        const matchSlug = guide.slug.toLowerCase().includes(query);

        return matchTitle || matchSubtitle || matchSummary || matchTags || matchSlug;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink-900">
      <Header cartCount={0} />

      <main className="flex-1 pb-24">
        {/* 1. Hero Section */}
        <section className="pt-6 pb-12">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-4xl bg-mesh text-white p-6 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-400/30 blur-3xl animate-float-slow" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-extrabold text-brand-200 border border-white/10 mb-5">
                  <Stethoscope className="w-4 h-4 text-brand-300" />
                  <span>Επιστημονική Καθοδήγηση Φαρμακείου</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
                  Οδηγοί Υγείας & Ευεξίας από τους{" "}
                  <span className="text-gradient">Φαρμακοποιούς μας</span>
                </h1>

                <p className="mt-5 text-ink-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  Εξειδικευμένες συμβουλές, σωστές ρουτίνες και προτάσεις προϊόντων για κάθε ανάγκη
                  σας. Επιστημονική τεκμηρίωση με απλά, κατανοητά βήματα.
                </p>

                {/* Live Search Bar */}
                <div className="mt-8 relative max-w-2xl mx-auto">
                  <div className="relative flex items-center">
                    <Search className="w-5 h-5 text-ink-400 absolute left-4 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Αναζητήστε θέμα (π.χ. τριχόπτωση, βιταμίνες, ακμή, μωρό, ραγάδες)..."
                      className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white text-ink-900 placeholder:text-ink-400 text-sm sm:text-base font-medium shadow-lift border border-transparent focus:border-brand-400 focus:outline-none transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 text-xs font-bold text-ink-400 hover:text-ink-700 bg-ink-100 hover:bg-ink-200 rounded-full w-6 h-6 grid place-items-center"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Quick Filters (Pills) */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {[
                    { id: "all", label: "Όλοι οι οδηγοί" },
                    { id: "skincare", label: "Περιποίηση" },
                    { id: "health", label: "Υγεία & Πρόληψη" },
                    { id: "baby", label: "Μαμά & Μωρό" },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setSelectedCategory(filter.id as CategoryFilter)}
                      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                        selectedCategory === filter.id
                          ? "bg-white text-brand-900 shadow-lift ring-2 ring-brand-300"
                          : "glass-dark text-white/80 hover:text-white hover:bg-white/15"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Guides Grid */}
        <section className="pb-16" id="guides-grid">
          <div className="container-page">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow">Επιστημονική Αρθρογραφία</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  Εξερευνήστε τους Οδηγούς ({filteredGuides.length})
                </h2>
              </div>
              {searchQuery && (
                <p className="text-xs text-ink-500 font-medium">
                  Αποτελέσματα αναζήτησης για: <strong>«{searchQuery}»</strong>
                </p>
              )}
            </div>

            {filteredGuides.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => {
                  const meta = guidesMetadata[guide.slug] || {
                    category: "skincare",
                    categoryLabel: "Φροντίδα",
                    badgeColor: "bg-brand-50 text-brand-700",
                    readTime: "5 λεπτά ανάγνωση",
                    subtitle: guide.title,
                    summary: guide.introText.slice(0, 140) + "...",
                    tags: ["Φαρμακείο", "Συμβουλές", "Υγεία"],
                  };

                  return (
                    <article
                      key={guide.slug}
                      className="group flex flex-col justify-between rounded-3xl bg-white border border-ink-100 hover:border-brand-300 hover:shadow-lift transition-all duration-300 overflow-hidden"
                    >
                      <div>
                        {/* Image Banner */}
                        <Link
                          href={`/guides/${guide.slug}`}
                          className="relative h-48 sm:h-52 w-full block overflow-hidden bg-mesh-light"
                        >
                          <Image
                            src={guide.featuredImage}
                            alt={guide.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                          {/* Category Badge on top of image */}
                          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-[11px] font-extrabold backdrop-blur-md bg-white/90 text-ink-900 shadow-sm border border-white/60`}
                            >
                              {meta.categoryLabel}
                            </span>
                          </div>

                          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                            <Clock className="w-3 h-3 text-brand-300" />
                            <span>{meta.readTime}</span>
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg sm:text-xl font-extrabold text-ink-900 group-hover:text-brand-700 transition-colors leading-snug">
                            <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                          </h3>

                          <p className="mt-1.5 text-xs font-semibold text-brand-700">
                            {meta.subtitle}
                          </p>

                          <p className="mt-3 text-xs sm:text-sm text-ink-600 line-clamp-2 leading-relaxed">
                            {meta.summary}
                          </p>

                          {/* Feature tags */}
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {meta.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-ink-50 text-ink-600 border border-ink-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer CTA */}
                      <div className="p-6 pt-0 border-t border-ink-100/70 mt-4">
                        <Link
                          href={`/guides/${guide.slug}`}
                          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-ink-50 group-hover:bg-brand-600 text-ink-800 group-hover:text-white font-extrabold text-xs transition-colors flex items-center justify-between"
                        >
                          <span>Διαβάστε τον οδηγό</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-ink-100 p-8 max-w-lg mx-auto">
                <HelpCircle className="w-12 h-12 text-ink-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-ink-900">
                  Δεν βρέθηκαν οδηγοί για «{searchQuery}»
                </h3>
                <p className="text-xs text-ink-500 mt-1 mb-4">
                  Δοκιμάστε κάποιον άλλον όρο αναζήτησης ή επιλέξτε «Όλοι οι οδηγοί».
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 rounded-full bg-brand-600 text-white text-xs font-bold shadow-lift"
                >
                  Επαναφορά φίλτρων
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 3. Trending Tags Section */}
        <section className="pb-16" id="trending-topics">
          <div className="container-page">
            <div className="rounded-3xl bg-white border border-ink-100 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-brand-600" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-ink-800">
                  Δημοφιλή Θέματα & Απευθείας Αναζητήσεις
                </h3>
              </div>
              <p className="text-xs text-ink-500 mb-5 leading-relaxed">
                Επιλέξτε ένα από τα πιο συχνά θέματα υγείας και φροντίδας για να μεταβείτε κατευθείαν
                στη σχετική ενότητα του κατάλληλου οδηγού:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {trendingTopics.map((topic) => (
                  <Link
                    key={topic.label}
                    href={topic.href}
                    className="px-4 py-2 rounded-full text-xs font-bold bg-ink-50 hover:bg-brand-50 text-ink-700 hover:text-brand-800 border border-ink-200/80 hover:border-brand-300 transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <span>{topic.label}</span>
                    <ArrowRight className="w-3 h-3 text-brand-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Interactive Quiz Finder: «Βρες τον κατάλληλο οδηγό» */}
        <section className="pb-16" id="guide-finder">
          <div className="container-page">
            <div className="rounded-4xl bg-gradient-to-br from-brand-900 via-brand-800 to-ink-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-400/20 blur-3xl" />

              <div className="max-w-3xl mb-8">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-brand-500/30 text-brand-300 border border-brand-400/30 inline-block mb-3">
                  Εργαλείο Προσανατολισμού · 30 Δευτερόλεπτα
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Δεν ξέρετε από πού να ξεκινήσετε; Βρείτε τον κατάλληλο οδηγό!
                </h2>
                <p className="mt-2 text-brand-100 text-xs sm:text-sm">
                  Απαντήστε σε 2 απλές ερωτήσεις και θα σας κατευθύνουμε στην ακριβή ρουτίνα που
                  χρειάζεστε σήμερα.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  {/* Question 1: Goal */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                    <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                      1. Ποιος είναι ο κύριος στόχος σας σήμερα;
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "skin", label: "Βελτίωση Δέρματος Προσώπου" },
                        { id: "hair", label: "Τριχόπτωση & Υγεία Μαλλιών" },
                        { id: "body", label: "Φροντίδα Σώματος & Ενυδάτωση" },
                        { id: "immunity", label: "Ενίσχυση Ανοσοποιητικού & Ενέργεια" },
                        { id: "baby", label: "Φροντίδα Νεογέννητου & Μωρού" },
                        { id: "emergency", label: "Πρώτες Βοήθειες & Φαρμακείο" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setQuizGoal(opt.id);
                            setRecommendedSlug(null);
                          }}
                          className={`p-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${
                            quizGoal === opt.id
                              ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                              : "bg-white/10 text-white/80 hover:bg-white/20"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {quizGoal === opt.id && <Check className="w-3.5 h-3.5 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 2: Target audience */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                    <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                      2. Για ποιον προορίζεται η φροντίδα;
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "myself", label: "Για μένα" },
                        { id: "baby", label: "Για το μωρό μου" },
                        { id: "family", label: "Για όλη την οικογένεια" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setQuizTarget(opt.id);
                            setRecommendedSlug(null);
                          }}
                          className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${
                            quizTarget === opt.id
                              ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                              : "bg-white/10 text-white/80 hover:bg-white/20"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={calculateGuideRecommendation}
                    className="w-full py-4 rounded-2xl bg-white text-ink-950 hover:bg-brand-100 font-extrabold text-sm shadow-lift transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    Δείτε τον Προτεινόμενο Οδηγό
                  </button>
                </div>

                {/* Recommendation Box */}
                <div className="lg:col-span-5">
                  {recommendedSlug && buyingGuidesData[recommendedSlug] ? (
                    (() => {
                      const recGuide = buyingGuidesData[recommendedSlug];
                      const recMeta = guidesMetadata[recommendedSlug];

                      return (
                        <div className="rounded-3xl bg-white text-ink-900 p-6 shadow-2xl animate-fade-up">
                          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-50 text-brand-700 inline-block mb-3">
                            Η Πρόταση των Φαρμακοποιών
                          </span>

                          <div className="relative h-40 rounded-2xl overflow-hidden mb-4 bg-mesh-light">
                            <Image
                              src={recGuide.featuredImage}
                              alt={recGuide.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <h3 className="text-lg font-extrabold text-ink-900">
                            {recGuide.title}
                          </h3>
                          <p className="mt-1 text-xs text-brand-700 font-bold">
                            {recMeta?.subtitle}
                          </p>
                          <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                            {recMeta?.summary}
                          </p>

                          <Link
                            href={`/guides/${recommendedSlug}`}
                            className="mt-5 w-full py-3 px-5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lift transition-all inline-flex items-center justify-center gap-2"
                          >
                            <span>Μετάβαση στον Οδηγό</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center flex flex-col items-center justify-center min-h-[340px]">
                      <Compass className="w-12 h-12 text-brand-300/80 mb-4 animate-bounce" />
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                        Βρείτε την ιδανική ρουτίνα
                      </h4>
                      <p className="text-xs text-brand-100/90 leading-relaxed max-w-xs mb-5">
                        Επιλέξτε τις προτιμήσεις σας αριστερά και πατήστε το κουμπί για να δείτε
                        τον κατάλληλο επιστημονικό οδηγό.
                      </p>
                      <button
                        type="button"
                        onClick={calculateGuideRecommendation}
                        className="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs shadow-soft transition-all"
                      >
                        Άμεση Προβολή
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pharmacist Trust Banner */}
        <section className="pb-16" id="pharmacist-trust">
          <div className="container-page">
            <div className="rounded-4xl bg-gradient-to-r from-brand-800 via-brand-700 to-emerald-800 text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl" />

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-extrabold text-white mb-3">
                    <Stethoscope className="w-4 h-4 text-brand-200" />
                    <span>Προσωπική Εξυπηρέτηση</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                    Δεν βρήκατε την απάντηση που ψάχνετε;
                  </h2>
                  <p className="mt-2.5 text-brand-100 text-sm leading-relaxed max-w-2xl">
                    Οι αδειούχοι φαρμακοποιοί του <strong>ProPharmacy</strong> είναι καθημερινά στη
                    διάθεσή σας για εξατομικευμένη συμβουλή, αξιολόγηση δερματικών αναγκών ή επιλογή
                    κατάλληλης αγωγής.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-brand-200 font-semibold">
                    <span>🕒 Δευτέρα – Παρασκευή: 09:00 – 21:00</span>
                    <span>·</span>
                    <span>Σάββατο: 09:00 – 15:00</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                  <a
                    href="tel:2101234567"
                    className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-brand-50 text-brand-900 font-extrabold text-xs sm:text-sm shadow-lift transition-all inline-flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-600" />
                    <span>Κλήση: 210 1234567</span>
                  </a>

                  <a
                    href="mailto:pharmacist@propharmacy.gr"
                    className="w-full py-3.5 px-6 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs sm:text-sm border border-white/25 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-brand-200" />
                    <span>Αποστολή Email στον Φαρμακοποιό</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
