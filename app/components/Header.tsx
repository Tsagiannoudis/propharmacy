"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  User,
  Heart,
  Truck,
  ShieldCheck,
  Stethoscope,
  Gift,
  ChevronDown,
} from "lucide-react";
import { CategoryMegaMenu } from "./CategoryMegaMenu";

import { decodeHtml } from "@/lib/formatters";

interface HeaderProps {
  cartCount?: number;
}

interface HeaderTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const defaultNavItems = [
  { label: "Πρόσωπο", href: "/#face" },
  { label: "Μαλλιά", href: "/#hair" },
  { label: "Σώμα", href: "/#body" },
  { label: "Γονείς & Παιδιά", href: "/#baby-care" },
  { label: "Βιταμίνες & Συμπληρώματα", href: "/#vitamins-supplements" },
  { label: "Φαρμακείο", href: "/#pharmacy" },
];

const announcements = [
  { icon: Truck, text: "Δωρεάν αποστολή για αγορές άνω των 49€" },
  {
    icon: ShieldCheck,
    text: "100% γνήσια προϊόντα από επίσημους αντιπροσώπους",
  },
  { icon: Stethoscope, text: "Δωρεάν συμβουλή φαρμακοποιού · 200 1234567" },
  { icon: Gift, text: "Δώρο δείγματα σε κάθε παραγγελία" },
];

export const Header: React.FC<HeaderProps> = () => {
  const { cart } = useCart();
  const cartCount = cart?.items_count ?? 0;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [tags, setTags] = useState<HeaderTag[]>([]);

  useEffect(() => {
    fetch("/api/tags")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (Array.isArray(data.tags)) {
          setTags(data.tags);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement marquee */}
      <div className="bg-ink-950 text-brand-100 text-[12px] overflow-hidden">
        <div className="flex w-max animate-marquee py-2">
          {[...announcements, ...announcements].map((a, i) => {
            const Icon = a.icon;
            return (
              <span
                key={i}
                className="flex items-center gap-2 px-8 whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 text-brand-400" />
                {a.text}
              </span>
            );
          })}
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-white/95 border-b border-ink-100"
        }`}
      >
        <div
          className={`container-page flex items-center gap-4 lg:gap-8 transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            id="logo-link"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <span className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 grid place-items-center shadow-lift group-hover:rotate-6 transition-transform duration-300">
              <span className="absolute w-5 h-1.5 rounded-full bg-white" />
              <span className="absolute w-1.5 h-5 rounded-full bg-white" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-extrabold tracking-tight text-ink-900">
                Pro<span className="text-brand-600">Pharmacy</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mt-1">
                online φαρμακείο
              </span>
            </span>
          </Link>

          {/* Search */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden md:flex flex-1 max-w-2xl items-center rounded-full bg-ink-50 border border-ink-100 focus-within:bg-white focus-within:border-brand-400 focus-within:shadow-glow transition-all"
          >
            <CategoryMegaMenu />
            <input
              id="header-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Αναζήτησε προϊόν, μάρκα ή σύμπτωμα…"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Αναζήτηση"
              className="m-1 w-10 h-10 rounded-full bg-brand-600 hover:bg-brand-700 text-white grid place-items-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              id="header-account"
              aria-label="Λογαριασμός"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full text-ink-700 hover:bg-ink-50 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium hidden lg:inline">
                Σύνδεση
              </span>
            </button>
            <button
              id="header-wishlist"
              aria-label="Αγαπημένα"
              className="hidden sm:grid w-10 h-10 place-items-center rounded-full text-ink-700 hover:bg-ink-50 hover:text-coral-500 transition-colors"
            >
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              id="header-cart"
              className="relative flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-ink-900 hover:bg-brand-700 text-white transition-colors"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              <span className="text-sm font-semibold hidden sm:inline">
                Καλάθι
              </span>
              <span
                key={cartCount}
                className={`min-w-5 h-5 px-1 rounded-full text-[11px] font-bold grid place-items-center ${
                  cartCount > 0
                    ? "bg-brand-400 text-ink-950 animate-pulse-ring"
                    : "bg-white/15"
                }`}
              >
                {cartCount}
              </span>
            </Link>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full text-ink-700 hover:bg-ink-50"
              aria-label="Μενού"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          className={`hidden lg:block transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100"}`}
        >
          <div className="container-page flex items-center justify-between pb-3">
            <ul className="flex items-center gap-1.5 flex-wrap">
              {tags.length > 0
                ? tags.slice(0, 7).map((tag) => (
                    <li key={tag.id}>
                      <Link
                        href={`/shop?tag=${encodeURIComponent(tag.slug)}`}
                        className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-ink-700 bg-ink-50/80 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 border border-transparent transition-all"
                      >
                        <span>{decodeHtml(tag.name)}</span>
                        <span className="text-[10px] text-brand-600 font-bold bg-white px-1.5 py-0.5 rounded-full shadow-xs">
                          {tag.count}
                        </span>
                      </Link>
                    </li>
                  ))
                : defaultNavItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="relative px-4 py-2 rounded-full text-sm font-medium text-ink-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
            </ul>
            <Link
              href="/#offers"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-coral-600 bg-coral-50 hover:bg-coral-100 transition-colors shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
              Προσφορές έως -40%
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass shadow-soft border-t border-ink-100 animate-fade-up">
          <div className="container-page py-4 space-y-3">
            <div className="flex items-center rounded-full bg-ink-50 border border-ink-100 px-4">
              <Search className="w-4 h-4 text-ink-400" />
              <input
                type="text"
                placeholder="Αναζήτηση προϊόντων…"
                className="flex-1 bg-transparent px-3 py-3 text-sm focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {tags.length > 0
                ? tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/shop?tag=${encodeURIComponent(tag.slug)}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-ink-100 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-700"
                    >
                      <span className="truncate">{decodeHtml(tag.name)}</span>
                      <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded-full ml-1">
                        {tag.count}
                      </span>
                    </Link>
                  ))
                : defaultNavItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-2xl bg-white border border-ink-100 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
