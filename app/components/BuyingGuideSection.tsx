import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface GuideTile {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  className: string;
  large?: boolean;
}

const guides: GuideTile[] = [
  {
    title: "Βρεφική Φροντίδα",
    subtitle:
      "Διατροφή, ύπνος, υγιεινή & ανάπτυξη – όλα όσα χρειάζεται ένας νέος γονιός.",
    image: "/guide/guide-banner-baby-care.webp",
    href: "/guides/baby-care",
    className: "md:col-span-6 md:row-span-2",
    large: true,
  },
  {
    title: "Βιταμίνες & Συμπληρώματα",
    subtitle: "Ενέργεια & ανοσοποιητικό",
    image: "/guide/guide-banner-suppliments&vitamins-2.webp",
    href: "/guides/vitamins-supplements",
    className: "md:col-span-6",
  },
  {
    title: "Πρώτες Βοήθειες",
    subtitle: "Το απαραίτητο οικιακό φαρμακείο",
    image: "/guide/guide-first-aid-banner.webp",
    href: "/guides/first-aid",
    className: "md:col-span-3",
  },
  {
    title: "Περιποίηση Προσώπου",
    subtitle: "Ρουτίνα για κάθε τύπο δέρματος",
    image: "/guide/guide-banner-Facial-Care.webp",
    href: "/guides/face-care",
    className: "md:col-span-3",
  },
  {
    title: "Περιποίηση Σώματος",
    subtitle: "Ενυδάτωση & σύσφιξη",
    image: "/guide/guide-body-banner.webp",
    href: "/guides/body-care",
    className: "md:col-span-6",
  },
  {
    title: "Περιποίηση Μαλλιών",
    subtitle: "Τριχόπτωση, λάμψη & όγκος",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    href: "/guides/hair-care",
    className: "md:col-span-6",
  },
];

export const BuyingGuideSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow">
              <BookOpen className="w-3.5 h-3.5" /> Οδηγός αγοράς
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 mt-1">
              Διάλεξε σωστά, με τη βοήθεια ειδικών
            </h2>
          </div>
          <p className="text-ink-500 max-w-sm">
            Οδηγοί γραμμένοι από φαρμακοποιούς, με τα προϊόντα που πραγματικά
            αξίζουν.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[15rem] gap-4">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              id={`guide-${g.href.split("/").pop()}`}
              className={`group relative overflow-hidden rounded-3xl ${g.className}`}
            >
              <Image
                src={g.image}
                alt={g.title}
                fill
                sizes={
                  g.large
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 100vw"
                }
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />

              <span className="absolute top-4 right-4 w-10 h-10 rounded-full glass grid place-items-center text-ink-900 group-hover:bg-brand-400 group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4.5 h-4.5" />
              </span>

              <div
                className={`absolute inset-x-0 bottom-0 ${g.large ? "p-7 sm:p-9" : "p-5"} text-white`}
              >
                <h3
                  className={`${g.large ? "text-3xl sm:text-4xl" : "text-xl"} font-extrabold`}
                >
                  {g.title}
                </h3>
                <p
                  className={`mt-1.5 text-ink-200 ${g.large ? "text-base max-w-md" : "text-sm"}`}
                >
                  {g.subtitle}
                </p>
                {g.large && (
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-400 text-ink-950 font-semibold text-sm px-5 py-3 group-hover:bg-white transition-colors">
                    Δείτε περισσότερα <ArrowUpRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
