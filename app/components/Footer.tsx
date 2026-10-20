import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Heart, Send, Clock } from "lucide-react";

const columns = [
  {
    title: "Κατηγορίες",
    links: [
      { label: "Περιποίηση Προσώπου", href: "/#face" },
      { label: "Περιποίηση Μαλλιών", href: "/#hair" },
      { label: "Φροντίδα Σώματος", href: "/#body" },
      { label: "Μαμά & Παιδί", href: "/guides/baby-care" },
      { label: "Βιταμίνες & Συμπληρώματα", href: "/guides/vitamins-supplements" },
      { label: "Οικιακό Φαρμακείο", href: "/#pharmacy" },
    ],
  },
  {
    title: "Εξυπηρέτηση",
    links: [
      { label: "Τρόποι πληρωμής", href: "#" },
      { label: "Αποστολή & έξοδα", href: "#" },
      { label: "Πολιτική επιστροφών", href: "#" },
      { label: "Όροι χρήσης", href: "#" },
      { label: "Συχνές ερωτήσεις", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      {/* Newsletter band */}
      <div className="container-page relative z-10 -mb-20">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-10 sm:px-12 grid lg:grid-cols-2 gap-6 items-center text-white shadow-lift">
          <div className="pointer-events-none absolute -right-10 -top-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Πάρε -10% στην πρώτη σου παραγγελία</h2>
            <p className="mt-2 text-brand-100">Εγγράψου στο newsletter για προσφορές και συμβουλές υγείας.</p>
          </div>
          <form className="flex items-center rounded-full bg-white p-1.5 shadow-soft">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Το email σου"
              className="flex-1 min-w-0 bg-transparent px-5 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
            <button
              type="submit"
              id="newsletter-submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 hover:bg-ink-800 px-6 py-3 text-sm font-semibold transition-colors"
            >
              Εγγραφή <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-ink-950 text-ink-300 pt-32 pb-8">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 grid place-items-center">
                  <span className="absolute w-5 h-1.5 rounded-full bg-white" />
                  <span className="absolute w-1.5 h-5 rounded-full bg-white" />
                </span>
                <span className="font-display text-xl font-extrabold text-white">
                  Pro<span className="text-brand-400">Pharmacy</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed max-w-xs">
                Το αξιόπιστο online φαρμακείο σας με χιλιάδες επώνυμα προϊόντα περιποίησης, βιταμίνες
                και βρεφικά είδη.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-400" /> 210 1234567
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-400" /> info@propharmacy.gr
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-400" /> Αθήνα, Ελλάδα
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-400" /> Δευ–Παρ 09:00–21:00
                </li>
              </ul>
            </div>

            {columns.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h3 className="text-sm font-bold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="hover:text-brand-300 transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Trust */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-bold text-white">Ασφάλεια & αξιοπιστία</h3>
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 grid place-items-center">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Πιστοποιημένο φαρμακείο</p>
                    <p className="text-xs">Άδεια λειτουργίας ΕΟΦ · ΓΕΜΗ 000000</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Visa", "Mastercard", "Apple Pay", "IRIS", "PayPal"].map((m) => (
                    <span key={m} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-ink-200">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
            <p>© 2026 ProPharmacy. Με επιφύλαξη παντός δικαιώματος.</p>
            <p className="flex items-center gap-1.5">
              Φτιαγμένο με <Heart className="w-3.5 h-3.5 text-coral-500 fill-coral-500" /> για την υγεία σας.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
