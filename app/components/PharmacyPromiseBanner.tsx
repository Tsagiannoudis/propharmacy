import React from "react";
import Link from "next/link";
import {
  FlaskConical,
  Stethoscope,
  Lock,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Επιστημονική εγκυρότητα",
    desc: "Κάθε προϊόν επιλέγεται με βάση τις αυστηρότερες ευρωπαϊκές προδιαγραφές.",
  },
  {
    icon: Lock,
    title: "Ασφαλείς πληρωμές",
    desc: "Κρυπτογράφηση SSL, 3D Secure και πλήρης προστασία δεδομένων.",
  },
  {
    icon: BadgeCheck,
    title: "Εγγύηση γνησιότητας",
    desc: "Απευθείας από επίσημους αντιπροσώπους και κατασκευαστές.",
  },
];

export const PharmacyPromiseBanner: React.FC = () => {
  return (
    <section id="pharmacist" className="py-16 scroll-mt-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Pharmacist feature card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 sm:p-10 text-white">
            <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-300/30 blur-2xl" />
            <div className="pointer-events-none absolute right-6 bottom-6 opacity-10">
              <Stethoscope className="w-40 h-40" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-300 animate-pulse-ring" />
              Διαθέσιμοι τώρα
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight">
              Ο φαρμακοποιός σου,
              <br /> ένα μήνυμα μακριά.
            </h2>
            <p className="mt-4 text-brand-100 max-w-sm leading-relaxed">
              Εξατομικευμένες συμβουλές για δέρμα, διατροφή και υγεία από
              πιστοποιημένους φαρμακοποιούς – δωρεάν.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#chat"
                id="pharmacist-chat"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-800 font-semibold px-6 py-3.5 hover:bg-brand-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Ξεκίνα συνομιλία
              </Link>
              <a
                href="tel:2101234567"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors"
              >
                210 1234567
              </a>
            </div>
          </div>

          {/* Pillars + stats */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-200 hover:shadow-lift transition-all duration-300"
                >
                  <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-5.5 h-5.5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}

            <div className="sm:col-span-3 rounded-3xl bg-ink-950 text-white p-6 sm:p-8 grid grid-cols-3 gap-4 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
              {[
                { k: "12k+", v: "Προϊόντα" },
                { k: "110k", v: "Ευχαριστημένοι πελάτες" },
                { k: "36h", v: "Μέση παράδοση" },
              ].map((s) => (
                <div key={s.v} className="relative">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-gradient">
                    {s.k}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-ink-300">{s.v}</p>
                </div>
              ))}
              <Link
                href="#about"
                className="relative col-span-3 mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                Μάθε περισσότερα για εμάς <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
