import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Star, MessageCircle, Sparkles } from "lucide-react";

const brands = ["La Roche-Posay", "CeraVe", "Avène", "Apivita", "Vichy", "Bioderma", "Korres", "Frezyderm"];

export const HeroBanner: React.FC = () => {
  return (
    <section className="pt-6 pb-10 lg:pt-8 lg:pb-14">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-mesh text-white">
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-400/30 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-sun-300/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            {/* Copy */}
            <div className="lg:col-span-6 space-y-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold text-brand-200">
                <Sparkles className="w-3.5 h-3.5 text-sun-300" />
                Νέα σειρά δερμοκαλλυντικών 2026
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Η υγεία σου,
                <br />
                <span className="text-gradient">με επιστημονική φροντίδα.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-200 max-w-lg leading-relaxed">
                Πάνω από 12.000 γνήσια προϊόντα φαρμακείου, εξατομικευμένες συμβουλές από
                πιστοποιημένους φαρμακοποιούς και παράδοση σε 24 ώρες.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#offers"
                  id="hero-cta-offers"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-400 hover:bg-brand-300 text-ink-950 font-semibold px-7 py-4 shadow-lift transition-all hover:-translate-y-0.5"
                >
                  Δες τις προσφορές
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#pharmacist"
                  id="hero-cta-pharmacist"
                  className="inline-flex items-center gap-2 rounded-full glass-dark hover:bg-white/15 font-semibold px-6 py-4 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-brand-300" />
                  Ρώτα τον φαρμακοποιό
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm text-ink-200">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-300" /> 100% γνήσια
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="w-4.5 h-4.5 text-brand-300" /> Αποστολή 24h
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4.5 h-4.5 text-sun-300 fill-sun-300" /> 4.9/5 από 8.200+ κριτικές
                </span>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 relative h-[22rem] sm:h-[26rem]">
              <div className="absolute inset-y-0 right-0 w-full sm:w-[85%] rounded-[1.75rem] overflow-hidden ring-1 ring-white/15 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80"
                  alt="Δερμοκαλλυντικά προϊόντα περιποίησης"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating card – pharmacist online */}
              <div className="absolute left-0 top-8 glass rounded-2xl p-3.5 pr-5 shadow-lift flex items-center gap-3 text-ink-900 animate-float">
                <span className="relative w-11 h-11 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 grid place-items-center text-white font-bold">
                  ΜΚ
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-brand-400 ring-2 ring-white animate-pulse-ring" />
                </span>
                <span>
                  <span className="block text-sm font-bold">Φαρμακοποιός online</span>
                  <span className="block text-xs text-ink-500">Απάντηση σε ~2 λεπτά</span>
                </span>
              </div>

              {/* Floating card – offer */}
              <div className="absolute right-4 bottom-6 sm:right-8 glass rounded-2xl p-4 shadow-lift text-ink-900 w-56 animate-float-slow">
                <span className="text-[11px] font-bold uppercase tracking-wider text-coral-600">Εβδομάδα Dermo</span>
                <p className="font-display text-2xl font-extrabold mt-1">
                  -30% <span className="text-sm font-semibold text-ink-500">σε επιλεγμένα</span>
                </p>
                <div className="mt-3 h-1.5 rounded-full bg-ink-100 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-coral-500 to-sun-400" />
                </div>
                <p className="mt-1.5 text-[11px] text-ink-500">Λήγει σε 3 ημέρες</p>
              </div>
            </div>
          </div>

          {/* Brand strip */}
          <div className="relative border-t border-white/10 overflow-hidden">
            <div className="flex w-max animate-marquee py-5">
              {[...brands, ...brands].map((b, i) => (
                <span
                  key={i}
                  className="px-10 font-display text-lg font-bold text-white/40 hover:text-white transition-colors whitespace-nowrap"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
