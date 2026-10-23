"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  HeartPulse,
  HelpCircle,
  Moon,
  Package,
  PhoneCall,
  Plus,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Sun,
  Utensils,
  XCircle,
  Zap,
} from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";
import { BuyingGuideDetail } from "../../data/buyingGuidesData";
import { Product } from "../../types";

interface GuideClientViewProps {
  guide: BuyingGuideDetail;
}

const defaultSubSectionImages = [
  "/categories/gia-to-prosopo-banner-category.webp",
  "/categories/gia-to-prosopo-banner.webp",
  "/guide/guide-banner-Facial-Care.webp",
  "/categories/supliromata-banner-1.webp",
  "/categories/sumpliromata-vitamines-banner.webp",
  "/guide/guide-banner-suppliments&vitamines-2.webp",
];

const getFallbackSubSectionImage = (slug: string, idx: number) => {
  if (slug === "body-care") {
    const bodyImages = [
      "/categories/gia-to-swma-banner-category.webp",
      "/categories/gia-to-swma-banner.webp",
      "/guide/guide-body-banner.webp",
      "/categories/gia-to-swma-banner-560x1000-1.1-520x460.webp",
      "/categories/gia-to-swma-banner-1.webp",
    ];
    return bodyImages[idx % bodyImages.length];
  }
  if (slug === "hair-care") {
    const hairImages = [
      "/categories/gia-ta-mallia-banner-category.webp",
      "/categories/gia-ta-mallia-banner-560x1000-1-520x460.webp",
      "/guide/back-view-woman-with-towel-head-applying-cream-skin.jpg",
      "/categories/gia-ta-mallia-banner-560x1000-1.webp",
    ];
    return hairImages[idx % hairImages.length];
  }
  if (slug === "face-care") {
    const faceImages = [
      "/categories/gia-to-prosopo-banner-category.webp",
      "/categories/gia-to-prosopo-banner.webp",
      "/guide/guide-banner-Facial-Care.webp",
    ];
    return faceImages[idx % faceImages.length];
  }
  return defaultSubSectionImages[idx % defaultSubSectionImages.length];
};

export const GuideClientView: React.FC<GuideClientViewProps> = ({ guide }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  // Skin Types Tab state
  const [selectedSkinTypeId, setSelectedSkinTypeId] = useState<string>(
    guide.skinTypesGuide?.types[0]?.id || "oily-acne"
  );

  // Interactive Quiz state (Supplements)
  const [quizGoal, setQuizGoal] = useState<string>("immunity");
  const [quizAge, setQuizAge] = useState<string>("adult");
  const [quizFormat, setQuizFormat] = useState<string>("capsule");

  // Interactive Quiz state (Skincare / Face Care)
  const [quizSkinType, setQuizSkinType] = useState<string>("oily");
  const [quizSkinConcern, setQuizSkinConcern] = useState<string>("pores");
  const [quizSkinTexture, setQuizSkinTexture] = useState<string>("gel");

  // Interactive Quiz state (Body Care)
  const [quizBodyNeed, setQuizBodyNeed] = useState<string>("hydration");
  const [quizBodyTexture, setQuizBodyTexture] = useState<string>("cream");

  // Interactive Quiz state (Hair Care)
  const [quizHairNeed, setQuizHairNeed] = useState<string>("hair-loss");
  const [quizHairScalp, setQuizHairScalp] = useState<string>("normal");

  const [quizResult, setQuizResult] = useState<{
    name: string;
    brand: string;
    price: number;
    description: string;
    image: string;
    badges: string[];
  } | null>(null);

  const calculateQuizResult = () => {
    // 1. Skincare Quiz for Face Care
    if (guide.slug === "face-care") {
      if (quizSkinType === "oily" || quizSkinConcern === "pores") {
        setQuizResult({
          name: "La Roche-Posay Effaclar Duo+ M Επανορθωτική Φροντίδα 40ml",
          brand: "La Roche-Posay",
          price: 15.2,
          description:
            "Κορυφαία φροντίδα κατά των ατελειών, των φραγμένων πόρων και των σημαδιών ακμής με σαλικυλικό οξύ (BHA), νιασιναμίδη και Procerad για ματ αποτέλεσμα.",
          image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
          badges: ["BHA + Niacinamide", "Ματ Τελείωμα", "Top Pick"],
        });
        return;
      }

      if (quizSkinType === "mature" || quizSkinConcern === "wrinkles") {
        setQuizResult({
          name: "La Roche-Posay Retinol B3 Serum Αντιρυτιδικός Ορός Ανάπλασης 30ml",
          brand: "La Roche-Posay",
          price: 36.5,
          description:
            "Καθαρή ρετινόλη σταδιακής αποδέσμευσης σε συνδυασμό με βιταμίνη Β3 για βαθιά λείανση ρυτίδων, σύσφιξη και ομοιόμορφη υφή χωρίς ερεθισμούς.",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
          badges: ["Καθαρή Ρετινόλη", "Βιταμίνη B3", "Αντιγήρανση"],
        });
        return;
      }

      if (quizSkinType === "sensitive") {
        setQuizResult({
          name: "Avene Tolerance Control Soothing Skin Recovery Cream 40ml",
          brand: "Avene",
          price: 16.9,
          description:
            "Αποστειρωμένη καταπραϋντική κρέμα άμεσης ανακούφισης σε 30'' για υπερευαίσθητο, δυσανεκτικό ή αλλεργικό δέρμα χωρίς συντηρητικά και άρωμα.",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
          badges: ["0% Συντηρητικά", "Χωρίς Άρωμα", "Άμεση Δράση"],
        });
        return;
      }

      if (quizSkinConcern === "spots" || quizSkinConcern === "glow") {
        setQuizResult({
          name: "La Roche-Posay Pure Vitamin C10 Αντιοξειδωτικός Ορός Λάμψης 30ml",
          brand: "La Roche-Posay",
          price: 34.9,
          description:
            "10% καθαρή βιταμίνη C με σαλικυλικό οξύ και νευροσενσίνη για άμεση ακτινοβολία, μείωση σκούρων κηλίδων και προστασία από οξειδωτικό στρες.",
          image:
            "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
          badges: ["10% Pure Vit C", "Λάμψη", "Αντιοξειδωτικό"],
        });
        return;
      }

      // Default for Dry / Dehydration
      setQuizResult({
        name: "Vichy Mineral 89 Ενυδατικό Booster Υαλουρονικού Οξέος 50ml",
        brand: "Vichy",
        price: 19.8,
        description:
          "89% ιαματικό ηφαιστειακό νερό Vichy και υαλουρονικό οξύ φυσικής προέλευσης. Ενισχύει τον δερματικό φραγμό και χαρίζει 24ωρη δροσερή ενυδάτωση.",
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
        badges: ["Υαλουρονικό Οξύ", "Mineral 89%", "Best Seller"],
      });
      return;
    }

    // 2. Skincare Quiz for Body Care
    if (guide.slug === "body-care") {
      if (quizBodyNeed === "atopic") {
        setQuizResult({
          name: "La Roche-Posay Lipikar Baume AP+M Επανορθωτικό Βάλσαμο Τριπλής Δράσης 400ml",
          brand: "La Roche-Posay",
          price: 19.5,
          description:
            "Επανορθωτικό βάλσαμο κατά του κνησμού και των εξάρσεων ατοπίας. Με Aqua Posae Filiformis, Νιασιναμίδη και 20% Βούτυρο Καριτέ.",
          image:
            "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
          badges: ["Anti-Itch", "Aqua Posae", "Αναπλήρωση Λιπιδίων"],
        });
        return;
      }

      if (quizBodyNeed === "keratosis") {
        setQuizResult({
          name: "CeraVe SA Smoothing Cream Κρέμα Λείανσης για Τραχύ Δέρμα 340g",
          brand: "CeraVe",
          price: 15.5,
          description:
            "Κλινικά ελεγμένη φόρμουλα με 10% Ουρία, Σαλικυλικό Οξύ και 3 απαραίτητα Κεραμίδια. Λειαίνει τα σπυράκια σε μπράτσα και πόδια (strawberry legs).",
          image:
            "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
          badges: ["10% Ουρία", "Σαλικυλικό BHA", "Λείανση Υφής"],
        });
        return;
      }

      if (quizBodyNeed === "cellulite") {
        setQuizResult({
          name: "Elancyl Slim Design Night Φροντίδα Κατά της Κυτταρίτιδας 200ml",
          brand: "Elancyl",
          price: 24.5,
          description:
            "Σύμπλεγμα Καφεΐνης 3D και GP4G που δρα κατά τη διάρκεια της νύχτας για λείανση των οζιδίων κυτταρίτιδας και αποσυμφόρηση ιστών.",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
          badges: ["3D Καφεΐνη", "Νυχτερινή Δράση", "Σύσφιξη"],
        });
        return;
      }

      if (quizBodyNeed === "stretch") {
        setQuizResult({
          name: "Bio-Oil Skincare Oil Φυσικό Έλαιο για Ραγάδες & Ουλές 125ml",
          brand: "Bio-Oil",
          price: 14.8,
          description:
            "Ειδικό έλαιο περιποίησης με PurCellin Oil, Βιταμίνες A & E, εκχυλίσματα καλέντουλας, λεβάντας και χαμομηλιού για πρόληψη και λείανση ραγάδων.",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
          badges: ["PurCellin Oil", "Πρόληψη Ραγάδων", "Εγκυμοσύνη"],
        });
        return;
      }

      if (quizBodyTexture === "balm") {
        setQuizResult({
          name: "Apivita Royal Honey Πλούσιο Body Butter Ενυδάτωσης 200ml",
          brand: "Apivita",
          price: 15.2,
          description:
            "Πλούσιο βούτυρο σώματος με θυμαρίσιο μέλι, κερί μέλισσας, βούτυρο καριτέ και έλαιο αμυγδάλου για εντατική θρέψη και προστασία από την ξηρότητα.",
          image:
            "https://images.unsplash.com/photo-1567928805192-7f40f6bee1a3?auto=format&fit=crop&w=400&q=80",
          badges: ["Θυμαρίσιο Μέλι", "Βούτυρο Καριτέ", "98% Φυσικό"],
        });
        return;
      }

      // Default: Daily Hydration Lotion
      setQuizResult({
        name: "CeraVe Moisturising Lotion Ενυδατικό Γαλάκτωμα με Κεραμίδια 473ml",
        brand: "CeraVe",
        price: 13.9,
        description:
          "Ελαφρύ ενυδατικό γαλάκτωμα με 3 απαραίτητα κεραμίδια και υαλουρονικό οξύ. Τεχνολογία MVE για συνεχή 24ωρη απελευθέρωση υγρασίας χωρίς λιπαρότητα.",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
        badges: ["3 Κεραμίδια", "MVE Τεχνολογία", "24ωρη Ενυδάτωση"],
      });
      return;
    }

    // 3. Hair Care Quiz
    if (guide.slug === "hair-care") {
      if (quizHairNeed === "hair-loss") {
        setQuizResult({
          name: "Vichy Dercos Aminexil Clinical 5 Εντατική Αγωγή 21 Αμπούλες",
          brand: "Vichy",
          price: 42.5,
          description:
            "Ολοκληρωμένη κλινική αγωγή κατά της τριχόπτωσης με 5 στοχευμένες δράσεις: αγκίστρωση στη ρίζα, μικροκυκλοφορία, αντοχή, ισορροπία τριχωτού και ενδυνάμωση.",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
          badges: ["Aminexil Clinical", "Κλινικά Αποδεδειγμένο", "Top Pick"],
        });
        return;
      }

      if (quizHairNeed === "dandruff") {
        setQuizResult({
          name: "Vichy Dercos Anti-Dandruff DS Σαμπουάν για Λιπαρά Μαλλιά 390ml",
          brand: "Vichy",
          price: 16.8,
          description:
            "Θεραπευτικό σαμπουάν με Selenium Disulfide και Σαλικυλικό Οξύ. Εξαλείφει το 100% των ορατών νιφάδων από την 1η χρήση και προλαμβάνει την υποτροπή για 6 εβδομάδες.",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
          badges: ["Selenium DS", "Κατά του Κνησμού", "Νο1 σε Πωλήσεις"],
        });
        return;
      }

      if (quizHairNeed === "oily") {
        setQuizResult({
          name: "Klorane Σαμπουάν με Εκχύλισμα Τσουκνίδας για Λιπαρά Μαλλιά 400ml",
          brand: "Klorane",
          price: 12.8,
          description:
            "Φυσική εξισορρόπηση της παραγωγής σμήγματος με εκχύλισμα λευκής τσουκνίδας. Επιμηκύνει τον χρόνο ανάμεσα στα λουσίματα και χαρίζει ανάλαφρη αίσθηση.",
          image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
          badges: ["Εκχύλισμα Τσουκνίδας", "Κατά της Λιπαρότητας", "Βιολογικό"],
        });
        return;
      }

      // Default: Dry & Damaged
      setQuizResult({
        name: "Klorane Μάσκα με Βούτυρο Cupuacu για Ξηρά & Ταλαιπωρημένα Μαλλιά 150ml",
        brand: "Klorane",
        price: 12.5,
        description:
          "Υπερ-θρεπτική βιολογική μάσκα με βούτυρο Cupuacu, 1.5 φορά πιο θρεπτικό από το shea butter. Επανορθώνει τις ραγάδες της τρίχας και σταματά το σπάσιμο.",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
        badges: ["Βούτυρο Cupuacu", "Βαθιά Αναδόμηση", "Bio"],
      });
      return;
    }

    // 4. Supplements Quiz (default)
    if (quizAge === "child") {
      setQuizResult({
        name: "Moller's Omega-3 Μουρουνέλαιο Ζελεδάκια Ψαράκια 45 τεμάχια",
        brand: "Moller's",
        price: 15.6,
        description: "Ιδανικό για παιδιά: πλούσιο σε Ωμέγα-3 και Βιταμίνη D3 για ισχυρό ανοσοποιητικό, ανάπτυξη οστών και συγκέντρωση.",
        image: "/categories/supliromata-banner-1.webp",
        badges: ["Για Παιδιά", "Ζελεδάκια", "DHA + D3"],
      });
      return;
    }

    if (quizGoal === "sleep") {
      setQuizResult({
        name: "ESI Melatonin Pura 1.9mg Microtablets 60 Μικροδισκία",
        brand: "ESI",
        price: 6.9,
        description: "Φυσική μελατονίνη ταχείας δράσης για άμεσο και ξεκούραστο ύπνο χωρίς εθισμό.",
        image: "/categories/supliromata-banner-1.webp",
        badges: ["Vegan", "Gluten Free", "Χωρίς Ζάχαρη"],
      });
      return;
    }

    if (quizGoal === "beauty") {
      setQuizResult({
        name: "Pro-Active Liquid Collagen Plus Γεύση Φράουλα 500ml",
        brand: "Pro-Active",
        price: 38.5,
        description: "Κορυφαίο πόσιμο κολλαγόνο με υαλουρονικό, βιοτίνη και ψευδάργυρο για λαμπερό δέρμα, πυκνά μαλλιά και γερά νύχια.",
        image: "/categories/supliromata-banner-1.webp",
        badges: ["Πόσιμο Υγρό", "Sugar Free", "Best Seller"],
      });
      return;
    }

    if (quizGoal === "energy") {
      setQuizResult({
        name: "Tonotil Plus Συμπλήρωμα Τόνωσης & Ενέργειας 15 Φιαλίδια",
        brand: "Tonotil",
        price: 14.5,
        description: "Συνδυασμός 4 αμινοξέων και Β12 για άμεση καταπολέμηση της σωματικής και πνευματικής εξάντλησης.",
        image: "/categories/sumpliromata-vitamines-banner.webp",
        badges: ["Καρνιτίνη & Αμινοξέα", "Άμεση Δράση"],
      });
      return;
    }

    if (quizGoal === "joints" || quizAge === "senior") {
      setQuizResult({
        name: "Power Health D-Vit3 2000 IU & K2 30 Δισκία για Οστά & Καρδιά",
        brand: "Power Health",
        price: 8.9,
        description: "Ο ιδανικός συνεργιστικός συνδυασμός D3 και K2 που κατευθύνει το ασβέστιο κατευθείαν στα οστά και προστατεύει τις αρθρώσεις.",
        image: "/categories/supliromata-banner-1.webp",
        badges: ["D3 + K2", "Sugar Free"],
      });
      return;
    }

    // Default: Immunity
    setQuizResult({
      name: "Solgar Vitamin D3 2200 IU (55mcg) 50 Φυτοκάψουλες",
      brand: "Solgar",
      price: 13.9,
      description: "Η βιταμίνη του ήλιου στην ιδανική δοσολογία για ισχυρή άμυνα, υγιή οστά και καθημερινή ευεξία.",
      image: "/categories/supliromata-banner-1.webp",
      badges: ["Gluten Free", "Non-GMO", "Top Pick"],
    });
  };

  // Checklist Category Filter state
  const [selectedChecklistCategory, setSelectedChecklistCategory] = useState<string>("all");

  const checklistCategories = guide.checklist
    ? Array.from(new Set(guide.checklist.items.map((it) => it.category)))
    : [];

  const filteredChecklistItems = guide.checklist
    ? selectedChecklistCategory === "all"
      ? guide.checklist.items
      : guide.checklist.items.filter((it) => it.category === selectedChecklistCategory)
    : [];

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
                    <Link href="/guides" className="hover:text-white">Οδηγοί</Link>
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

        {/* Emergency Numbers Banner (166, 112, 210 7793777, 199) */}
        {guide.emergencyNumbers && (
          <section className="pb-10">
            <div className="container-page">
              <div className="rounded-4xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white p-5 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                      <span className="text-xs font-black uppercase tracking-widest text-rose-100">
                        Γραμμές Άμεσης Ανάγκης · 24/7
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      Τηλέφωνα Έκτακτης Ανάγκης
                    </h2>
                    <p className="text-xs text-rose-100/90 mt-1 max-w-md">
                      Πατήστε πάνω σε οποιονδήποτε αριθμό για άμεση κλήση από το κινητό σας τηλέφωνο.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto">
                    {guide.emergencyNumbers.map((em) => (
                      <a
                        key={em.number}
                        href={em.tel}
                        className="p-3.5 rounded-2xl bg-white/15 hover:bg-white text-white hover:text-rose-700 backdrop-blur-md border border-white/20 transition-all flex flex-col justify-between group shadow-sm text-center"
                      >
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <PhoneCall className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-base sm:text-lg font-black tracking-tight">{em.number}</span>
                        </div>
                        <span className="text-[11px] font-bold line-clamp-1 opacity-90 group-hover:opacity-100">
                          {em.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Quick Finder for Emergencies (Scenarios Shortcut) */}
        {guide.quickFinder && (
          <section className="pb-10">
            <div className="container-page">
              <div className="rounded-3xl bg-white border border-ink-100 p-5 sm:p-6 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="eyebrow text-rose-600">Άμεση Δράση</span>
                    <h3 className="text-base sm:text-lg font-bold text-ink-900 mt-0.5">
                      {guide.quickFinder.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.quickFinder.buttons.map((btn) => (
                      <a
                        key={btn.targetId}
                        href={`#${btn.targetId}`}
                        className="px-4 py-2 rounded-full bg-ink-50 hover:bg-rose-50 border border-ink-200 hover:border-rose-300 text-xs font-bold text-ink-800 hover:text-rose-700 transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <span>{btn.label}</span>
                        {btn.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-100 text-rose-800 font-semibold">
                            {btn.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

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

        {/* Layering Routine Guide (Morning vs Evening) */}
        {guide.layeringGuide && (
          <section className="pb-16" id="layering-guide">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Σειρά Εφαρμογής · Layering</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.layeringGuide.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.layeringGuide.subtitle}
                </p>
              </div>

              {/* Responsive Morning vs Evening Comparison Grid */}
              <div className="space-y-4 max-w-5xl mx-auto">
                {guide.layeringGuide.steps.map((st) => (
                  <div
                    key={st.stepNumber}
                    className="rounded-3xl bg-white border border-ink-100 p-5 sm:p-6 shadow-soft hover:border-brand-200 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-ink-100/70">
                      <span className="w-8 h-8 rounded-xl bg-brand-600 text-white font-extrabold grid place-items-center text-xs shrink-0 shadow-xs">
                        {st.stepNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-ink-900">
                        {st.title}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Morning Routine Card */}
                      <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-amber-900">
                            <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                            <span className="text-[11px] font-extrabold uppercase tracking-wider">
                              Πρωί · Προστασία & Λάμψη
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-amber-950 mb-1">
                            {st.morning.action}
                          </p>
                          <p className="text-xs text-amber-900/80 leading-relaxed">
                            {st.morning.example}
                          </p>
                        </div>
                      </div>

                      {/* Evening Routine Card */}
                      <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-indigo-900">
                            <Moon className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span className="text-[11px] font-extrabold uppercase tracking-wider">
                              Βράδυ · Ανάπλαση & Επανόρθωση
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-indigo-950 mb-1">
                            {st.evening.action}
                          </p>
                          <p className="text-xs text-indigo-900/80 leading-relaxed">
                            {st.evening.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Routine by Skin Type */}
        {guide.skinTypesGuide && (
          <section className="pb-16" id="skin-types-routine">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Routine by Skin Type</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.skinTypesGuide.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.skinTypesGuide.subtitle}
                </p>
              </div>

              {/* Skin Type Pills Navigation */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                {guide.skinTypesGuide.types.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedSkinTypeId(type.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-2 ${selectedSkinTypeId === type.id
                        ? "bg-brand-600 text-white shadow-lift ring-2 ring-brand-300"
                        : "bg-white text-ink-700 border border-ink-200 hover:border-brand-400"
                      }`}
                  >
                    <span>{type.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] ${selectedSkinTypeId === type.id
                          ? "bg-white/20 text-white"
                          : "bg-ink-100 text-ink-600"
                        }`}
                    >
                      {type.badge}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Skin Type Details & Products */}
              {(() => {
                const currentType =
                  guide.skinTypesGuide.types.find((t) => t.id === selectedSkinTypeId) ||
                  guide.skinTypesGuide.types[0];
                if (!currentType) return null;

                return (
                  <div className="rounded-3xl bg-white border border-ink-100 p-6 sm:p-8 shadow-soft animate-fade-up">
                    <div className="grid lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-ink-100">
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-50 text-brand-700">
                            {currentType.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-ink-900">
                          {currentType.name}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-ink-600 leading-relaxed">
                          {currentType.description}
                        </p>

                        <div className="mt-4 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100">
                          <div className="flex items-center gap-2 text-brand-900 text-xs font-bold mb-1">
                            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                            <span>Βασικά Συστατικά-Κλειδιά:</span>
                          </div>
                          <p className="text-xs text-brand-950 font-medium">
                            {currentType.keyIngredients}
                          </p>
                        </div>
                      </div>

                      <div className="lg:col-span-5 space-y-4">
                        <div className="p-4 rounded-2xl bg-ink-50/80 border border-ink-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500 mb-3">
                            Πρωτόκολλο Ρουτίνας 4 Βημάτων:
                          </h4>
                          <ul className="space-y-2 text-xs text-ink-700 leading-relaxed">
                            {currentType.routineSteps.map((step, si) => (
                              <li key={si} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {currentType.tip && (
                          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <p>
                              <strong>Συμβουλή Φαρμακοποιού:</strong> {currentType.tip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Recommended Products for this Skin Type */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500 mb-4">
                        Προτεινόμενα Προϊόντα για {currentType.name}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {currentType.products.map((prod) => (
                          <ProductCard
                            key={prod.id}
                            product={prod}
                            onAddToCart={handleAddToCart}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* Cheat Sheet: Active Ingredient Combinations */}
        {guide.ingredientCombinations && (
          <section className="pb-16" id="ingredient-combinations">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Cheat Sheet · Συστατικά</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.ingredientCombinations.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.ingredientCombinations.subtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Dos: Safe & Synergistic Pairs */}
                <div className="rounded-3xl bg-emerald-50/60 border border-emerald-200/70 p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-emerald-200/60">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white grid place-items-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-emerald-950">
                          Ταιριάζουν Μαζί (Dos)
                        </h3>
                        <p className="text-[11px] text-emerald-800">
                          Συνδυασμοί που πολλαπλασιάζουν την αποτελεσματικότητα
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {guide.ingredientCombinations.dos.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-xs"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs sm:text-sm font-extrabold text-emerald-950">
                              {item.pair}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-bold text-emerald-700 mb-1">
                            {item.rule}
                          </p>
                          <p className="text-xs text-ink-600 leading-relaxed">
                            {item.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Don'ts: Incompatible Pairs */}
                <div className="rounded-3xl bg-rose-50/60 border border-rose-200/70 p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-rose-200/60">
                      <div className="w-7 h-7 rounded-full bg-rose-600 text-white grid place-items-center">
                        <XCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-rose-950">
                          ΔΕΝ Συνδυάζονται Ταυτόχρονα (Don&apos;ts)
                        </h3>
                        <p className="text-[11px] text-rose-800">
                          Συνδυασμοί που προκαλούν ερεθισμούς ή ακυρώνουν τη δράση
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {guide.ingredientCombinations.donts.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs sm:text-sm font-extrabold text-rose-950">
                              {item.pair}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-bold text-rose-700 mb-1">
                            {item.rule}
                          </p>
                          <p className="text-xs text-ink-600 leading-relaxed">
                            {item.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Dandruff vs Dry Scalp Comparison Infographic Box */}
        {guide.dandruffComparison && (
          <section className="pb-16" id="dandruff-vs-dry-scalp">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Διαγνωστικός Οδηγός Τριχωτού</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.dandruffComparison.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.dandruffComparison.subtitle}
                </p>
              </div>

              <div className="rounded-4xl bg-white border border-ink-100 p-6 sm:p-8 shadow-soft overflow-hidden">
                {/* Responsive Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-ink-100">
                        <th className="py-3.5 px-4 font-bold text-ink-500 uppercase tracking-wider text-[11px] w-1/4">
                          Σύμπτωμα / Κριτήριο
                        </th>
                        <th className="py-3.5 px-4 font-extrabold text-amber-900 bg-amber-50/70 rounded-t-2xl w-[37.5%]">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <span>Ξηροδερμία (Dry Scalp)</span>
                          </div>
                        </th>
                        <th className="py-3.5 px-4 font-extrabold text-cyan-900 bg-cyan-50/70 rounded-t-2xl w-[37.5%]">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                            <span>Λιπαρή Πιτυρίδα (Oily Dandruff)</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100/70">
                      {guide.dandruffComparison.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-ink-50/40 transition-colors">
                          <td className="py-4 px-4 font-bold text-ink-800">
                            {row.symptom}
                          </td>
                          <td className="py-4 px-4 text-ink-700 bg-amber-50/30 leading-relaxed">
                            {row.dryScalp}
                          </td>
                          <td className="py-4 px-4 text-ink-700 bg-cyan-50/30 leading-relaxed">
                            {row.oilyDandruff}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Treatment Recommendations Cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-ink-100">
                  {/* Dry Scalp Solution */}
                  <div className="rounded-3xl bg-amber-50/60 border border-amber-200/70 p-5 flex flex-col justify-between">
                    <div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-900 inline-block mb-3">
                        {guide.dandruffComparison.dryScalpRec.badge}
                      </span>
                      <h4 className="text-base font-extrabold text-amber-950 mb-1.5">
                        {guide.dandruffComparison.dryScalpRec.title}
                      </h4>
                      <p className="text-xs text-ink-600 leading-relaxed mb-4">
                        {guide.dandruffComparison.dryScalpRec.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-amber-200/50">
                      <div>
                        <span className="text-base font-extrabold text-ink-900">
                          {guide.dandruffComparison.dryScalpRec.product.price?.toFixed(2)}€
                        </span>
                        {guide.dandruffComparison.dryScalpRec.product.originalPrice && (
                          <span className="text-xs text-ink-400 line-through ml-2">
                            {guide.dandruffComparison.dryScalpRec.product.originalPrice.toFixed(2)}€
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(guide.dandruffComparison!.dryScalpRec.product)}
                        className="px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-lift transition-all inline-flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Προσθήκη στο καλάθι
                      </button>
                    </div>
                  </div>

                  {/* Oily Dandruff Solution */}
                  <div className="rounded-3xl bg-cyan-50/60 border border-cyan-200/70 p-5 flex flex-col justify-between">
                    <div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-cyan-100 text-cyan-900 inline-block mb-3">
                        {guide.dandruffComparison.oilyDandruffRec.badge}
                      </span>
                      <h4 className="text-base font-extrabold text-cyan-950 mb-1.5">
                        {guide.dandruffComparison.oilyDandruffRec.title}
                      </h4>
                      <p className="text-xs text-ink-600 leading-relaxed mb-4">
                        {guide.dandruffComparison.oilyDandruffRec.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-cyan-200/50">
                      <div>
                        <span className="text-base font-extrabold text-ink-900">
                          {guide.dandruffComparison.oilyDandruffRec.product.price?.toFixed(2)}€
                        </span>
                        {guide.dandruffComparison.oilyDandruffRec.product.originalPrice && (
                          <span className="text-xs text-ink-400 line-through ml-2">
                            {guide.dandruffComparison.oilyDandruffRec.product.originalPrice.toFixed(2)}€
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(guide.dandruffComparison!.oilyDandruffRec.product)}
                        className="px-4 py-2 rounded-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-lift transition-all inline-flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Προσθήκη στο καλάθι
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hair Loss 1-2-3 Routine Protocol Bundle */}
        {guide.hairLossProtocol && (
          <section className="pb-16" id="hair-loss-protocol">
            <div className="container-page">
              <div className="rounded-4xl bg-gradient-to-br from-ink-950 via-slate-900 to-brand-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
                  <div>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-brand-500/30 text-brand-300 border border-brand-400/30 inline-block mb-3">
                      {guide.hairLossProtocol.badge || "Κλινικό Πρωτόκολλο 1-2-3"}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold">
                      {guide.hairLossProtocol.title}
                    </h2>
                    <p className="mt-2 text-ink-300 text-sm max-w-2xl leading-relaxed">
                      {guide.hairLossProtocol.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 shrink-0">
                    <div>
                      <span className="text-[11px] text-ink-300 block">Τιμή Ολοκληρωμένου Πακέτου</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-white">
                          {guide.hairLossProtocol.bundlePrice.toFixed(2)}€
                        </span>
                        {guide.hairLossProtocol.originalPrice && (
                          <span className="text-xs text-ink-400 line-through">
                            {guide.hairLossProtocol.originalPrice.toFixed(2)}€
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        guide.hairLossProtocol?.steps.forEach((st) => handleAddToCart(st.product));
                        setToastMessage("Ολοκληρωμένο Πακέτο Τριχόπτωσης (3 Προϊόντα)");
                      }}
                      className="px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-extrabold text-xs shadow-lift transition-all inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Αποκτήστε το ολοκληρωμένο πακέτο κατά της τριχόπτωσης
                    </button>
                  </div>
                </div>

                {/* 3 Steps Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {guide.hairLossProtocol.steps.map((st) => (
                    <div
                      key={st.stepNumber}
                      className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold grid place-items-center text-xs">
                            0{st.stepNumber}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-white/15 text-brand-200">
                            {st.timing}
                          </span>
                        </div>

                        <h3 className="text-base font-extrabold text-white mb-2">
                          {st.stepTitle}
                        </h3>
                        <p className="text-xs text-ink-200 leading-relaxed mb-5">
                          {st.action}
                        </p>
                      </div>

                      {/* Step Product Box */}
                      <div className="rounded-2xl bg-white text-ink-900 p-4 shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 block mb-1">
                          {st.product.brand}
                        </span>
                        <h4 className="text-xs font-extrabold text-ink-900 line-clamp-2 min-h-[2rem]">
                          {st.product.name}
                        </h4>
                        <div className="mt-3 pt-2.5 border-t border-ink-100 flex items-center justify-between">
                          <span className="text-sm font-extrabold text-ink-900">
                            {st.product.price?.toFixed(2)}€
                          </span>
                          <button
                            type="button"
                            onClick={() => handleAddToCart(st.product)}
                            className="px-3 py-1.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-[11px] shadow-sm transition-all inline-flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Προσθήκη
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Texture / Hydration Comparison Guide («Πώς διαλέγω ενυδάτωση ανάλογα με τον τύπο δέρματος;») */}
        {guide.textureGuide && (
          <section className="pb-16" id="texture-guide">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Οδηγός Υφών · Skin & Body Hydration</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.textureGuide.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.textureGuide.subtitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {guide.textureGuide.textures.map((tex, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-300 hover:shadow-lift transition-all duration-300 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700">
                          {tex.badge || `Υφή ${tIdx + 1}`}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-brand-50/80 grid place-items-center text-brand-600">
                          <Sparkles className="w-4 h-4" />
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold text-ink-900 mb-3">
                        {tex.type}
                      </h3>

                      <div className="space-y-3 mt-4 text-xs leading-relaxed">
                        <div className="p-3 rounded-2xl bg-brand-50/60 border border-brand-100/60">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-800 block mb-0.5">
                            Ιδανικό για:
                          </span>
                          <p className="font-semibold text-brand-950">{tex.idealFor}</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-ink-50/70 border border-ink-100">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-ink-500 block mb-0.5">
                            Χαρακτηριστικά Υφής:
                          </span>
                          <p className="text-ink-700">{tex.characteristics}</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-emerald-950">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-0.5">
                            Προτεινόμενα Συστατικά:
                          </span>
                          <p className="font-medium">{tex.ingredients}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pro Tips & Application Rituals («Tips & Τελετουργία Εφαρμογής») */}
        {guide.proTips && (
          <section className="pb-16" id="pro-tips-rituals">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Expert Micro-copy & Τελετουργία</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.proTips.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.proTips.subtitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {guide.proTips.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl bg-white border border-ink-100 p-6 shadow-xs hover:border-brand-300 hover:shadow-lift transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-brand-50 text-brand-700">
                          {tip.badge}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-600 font-bold grid place-items-center text-xs">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-ink-900 mb-2.5">
                        {tip.title}
                      </h3>

                      <p className="text-xs text-ink-600 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Milk Stages (e.g. No1, No2, No3, Special formulas) */}
        {guide.milkStages && guide.milkStages.length > 0 && (
          <section className="pb-16" id="baby-milks">
            <div className="container-page">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="eyebrow">Διατροφή & Στάδια</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                    Βρεφικά Γάλατα ανά Ηλικία & Ανάγκη
                  </h2>
                </div>
                <Link
                  href="/shop?category=baby-and-childrens-milk"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-700 hover:text-brand-800 hover:underline"
                >
                  Όλα τα βρεφικά γάλατα <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {guide.milkStages.map((stage) => (
                  <div
                    key={stage.id}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-200 hover:shadow-lift transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700">
                          {stage.badge}
                        </span>
                        <span className="text-xs font-semibold text-ink-400">
                          {stage.stage}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-ink-900">
                        {stage.ageRange}
                      </h3>
                      <p className="mt-2.5 text-xs text-ink-600 leading-relaxed">
                        {stage.description}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-xs text-ink-700">
                        {stage.features.map((feat, fi) => (
                          <li key={fi} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={stage.buttonLink}
                      className="mt-6 w-full py-2.5 px-4 rounded-xl bg-ink-900 hover:bg-brand-600 text-white text-xs font-bold text-center transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      Δείτε προϊόντα <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cheat Sheet / Timing Guide: «Πότε παίρνω τι;» */}
        {guide.timingGuide && (
          <section className="pb-16" id="timing-guide">
            <div className="container-page">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="eyebrow">Οδηγός Λήψης · Cheat Sheet</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                    {guide.timingGuide.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-600 max-w-2xl">
                    {guide.timingGuide.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {guide.timingGuide.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-300 hover:shadow-lift transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700">
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-500">
                          <Clock className="w-3.5 h-3.5 text-brand-600" />
                          <span>{item.timing.split("(")[0]}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-ink-900 mb-2">
                        {item.category}
                      </h3>

                      <div className="space-y-3 mt-4 text-xs leading-relaxed">
                        <div className="p-3 rounded-2xl bg-brand-50/60 border border-brand-100/60">
                          <div className="flex items-center gap-1.5 font-bold text-brand-900 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                            <span>Βέλτιστη Λήψη & Απορρόφηση</span>
                          </div>
                          <p className="text-brand-950">{item.bestPractice}</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                          <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>Τι να Αποφεύγετε</span>
                          </div>
                          <p className="text-amber-950">{item.avoid}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Shop by Need / Goal Quick Filters */}
        {guide.shopByNeed && (
          <section className="pb-16" id="shop-by-need">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Shop by Need</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  {guide.shopByNeed.title}
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  {guide.shopByNeed.subtitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {guide.shopByNeed.needs.map((need) => (
                  <div
                    key={need.id}
                    className="group rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-300 hover:shadow-lift transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-600 text-brand-600 group-hover:text-white transition-colors grid place-items-center mb-4">
                        {need.icon === "Shield" && <Shield className="w-5 h-5" />}
                        {need.icon === "Zap" && <Zap className="w-5 h-5" />}
                        {need.icon === "Moon" && <Moon className="w-5 h-5" />}
                        {need.icon === "Sparkles" && <Sparkles className="w-5 h-5" />}
                        {need.icon === "Activity" && <Activity className="w-5 h-5" />}
                        {need.icon === "HeartPulse" && <HeartPulse className="w-5 h-5" />}
                      </div>
                      <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700 transition-colors">
                        {need.title}
                      </h3>
                      <p className="mt-2 text-xs text-ink-500 leading-relaxed">
                        <strong className="text-ink-700 font-semibold">Βασικά συστατικά: </strong>
                        {need.ingredients}
                      </p>
                    </div>

                    <a
                      href="#products-section"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800"
                    >
                      Δείτε τα προτεινόμενα <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Interactive Quiz Tool: «Quiz / Βρες το ιδανικό συμπλήρωμα» */}
        {guide.quizEnabled && (
          <section className="pb-16" id="supplement-quiz">
            <div className="container-page">
              <div className="rounded-4xl bg-gradient-to-br from-brand-900 via-brand-800 to-ink-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-400/20 blur-3xl" />

                <div className="max-w-3xl mb-8">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-brand-500/30 text-brand-300 border border-brand-400/30 inline-block mb-3">
                    Διαδραστικό Εργαλείο · 1 Λεπτό
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold">
                    {guide.slug === "face-care"
                      ? "Skin Quiz: Βρες την Ιδανική Ρουτίνα για το Δέρμα σου"
                      : guide.slug === "body-care"
                        ? "Body Quiz: Βρες την Ιδανική Φροντίδα Σώματος"
                        : guide.slug === "hair-care"
                          ? "Hair Quiz: Βρες την Ιδανική Αγωγή Μαλλιών"
                          : "Quiz: Βρες το Ιδανικό Συμπλήρωμα για Σένα"}
                  </h2>
                  <p className="mt-2 text-brand-100 text-sm">
                    {guide.slug === "face-care"
                      ? "Απαντήστε σε 3 σύντομες ερωτήσεις για τον τύπο, το κύριο μέλημα και την υφή που προτιμάτε, και οι φαρμακοποιοί μας θα σας προτείνουν το ακριβές προϊόν-κλειδί."
                      : guide.slug === "body-care"
                        ? "Απαντήστε σε 2 σύντομες ερωτήσεις για τις ανάγκες και την υφή που προτιμάτε, και οι φαρμακοποιοί μας θα σας προτείνουν το κατάλληλο προϊόν σώματος."
                        : guide.slug === "hair-care"
                          ? "Απαντήστε σε 2 σύντομες ερωτήσεις για τις ανάγκες των μαλλιών και το τριχωτό σας και οι φαρμακοποιοί μας θα σας προτείνουν την ακριβή θεραπεία."
                          : "Απαντήστε σε 3 σύντομες ερωτήσεις και οι φαρμακοποιοί μας θα σας προτείνουν την ακριβή σύνθεση που ταιριάζει στις ανάγκες σας."}
                  </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    {guide.slug === "face-care" ? (
                      /* Skincare Quiz Options */
                      <>
                        {/* Step 1: Skin Type */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            1. Ποιος είναι ο τύπος του δέρματός σου;
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "oily", label: "Λιπαρό / Ακμή" },
                              { id: "dry", label: "Ξηρό / Αφυδατωμένο" },
                              { id: "sensitive", label: "Ευαίσθητο / Κοκκινίλες" },
                              { id: "mature", label: "Ώριμο / Αντιγήρανση" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizSkinType(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${quizSkinType === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                <span>{opt.label}</span>
                                {quizSkinType === opt.id && <Check className="w-3.5 h-3.5" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Step 2: Main Concern */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            2. Ποιο είναι το κύριο μέλημά σου;
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "wrinkles", label: "Ρυτίδες & Σύσφιξη" },
                              { id: "pores", label: "Ατέλειες & Πόροι" },
                              { id: "glow", label: "Ενυδάτωση & Λάμψη" },
                              { id: "spots", label: "Κηλίδες & Δυσχρωμίες" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizSkinConcern(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${quizSkinConcern === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                <span>{opt.label}</span>
                                {quizSkinConcern === opt.id && <Check className="w-3.5 h-3.5" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Step 3: Texture */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            3. Προτιμώμενη υφή;
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "gel", label: "Ελαφρύ Gel / Fluid" },
                              { id: "cream", label: "Πλούσια Κρέμα" },
                              { id: "serum", label: "Ορός / Serum" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizSkinTexture(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${quizSkinTexture === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : guide.slug === "body-care" ? (
                      /* Body Care Quiz Options */
                      <>
                        {/* Step 1: Body Need */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            1. Ποια είναι η κύρια ανάγκη του σώματός σου;
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: "hydration", label: "Καθημερινή Ενυδάτωση" },
                              { id: "atopic", label: "Ατοπικό / Κνησμός" },
                              { id: "keratosis", label: "Θυλακική Υπερκεράτωση" },
                              { id: "cellulite", label: "Κυτταρίτιδα & Σύσφιξη" },
                              { id: "stretch", label: "Ραγάδες & Εγκυμοσύνη" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizBodyNeed(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${quizBodyNeed === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                <span>{opt.label}</span>
                                {quizBodyNeed === opt.id && <Check className="w-3.5 h-3.5" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Step 2: Body Texture */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            2. Ποια υφή προτιμάς;
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { id: "lotion", label: "Lotion (Ελαφριά)" },
                              { id: "cream", label: "Cream (Ισορροπημένη)" },
                              { id: "balm", label: "Balm (Πλούσια θρέψη)" },
                              { id: "oil", label: "Έλαιο / Dry Oil" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizBodyTexture(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${quizBodyTexture === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : guide.slug === "hair-care" ? (
                      /* Hair Care Quiz Options */
                      <>
                        {/* Step 1: Hair Need */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            1. Ποια είναι η κύρια ανάγκη των μαλλιών σου;
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "hair-loss", label: "Τριχόπτωση & Ενδυνάμωση" },
                              { id: "dandruff", label: "Πιτυρίδα & Τριχωτό" },
                              { id: "dry", label: "Ξηρά & Ταλαιπωρημένα" },
                              { id: "oily", label: "Λιπαρότητα & Συχνό Λούσιμο" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizHairNeed(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${quizHairNeed === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                <span>{opt.label}</span>
                                {quizHairNeed === opt.id && <Check className="w-3.5 h-3.5" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Step 2: Scalp Type */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            2. Ποιος είναι ο τύπος του τριχωτού σου;
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "normal", label: "Κανονικό" },
                              { id: "oily-scalp", label: "Λιπαρό / Σμήγμα" },
                              { id: "dry-scalp", label: "Ξηρό / Τράβηγμα" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizHairScalp(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${quizHairScalp === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Supplements Quiz Options (default) */
                      <>
                        {/* Step 1: Goal */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            1. Ποιος είναι ο κύριος στόχος σου;
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: "immunity", label: "Ανοσοποιητικό" },
                              { id: "energy", label: "Ενέργεια & Κόπωση" },
                              { id: "sleep", label: "Άγχος & Ύπνος" },
                              { id: "beauty", label: "Μαλλιά, Νύχια, Δέρμα" },
                              { id: "joints", label: "Αρθρώσεις & Οστά" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizGoal(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${quizGoal === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                <span>{opt.label}</span>
                                {quizGoal === opt.id && <Check className="w-3.5 h-3.5" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Step 2: Age group */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            2. Ποια είναι η ηλικιακή ομάδα;
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "child", label: "Παιδί / Έφηβος" },
                              { id: "adult", label: "Ενήλικας (18-50)" },
                              { id: "senior", label: "50+ / Senior" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizAge(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${quizAge === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Step 3: Format */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                          <label className="text-xs font-bold text-brand-300 uppercase tracking-wide block mb-3">
                            3. Προτιμώμενη μορφή λήψης;
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { id: "capsule", label: "Κάψουλες / Χάπια" },
                              { id: "effervescent", label: "Αναβράζοντα" },
                              { id: "gummy", label: "Ζελεδάκια" },
                              { id: "liquid", label: "Πόσιμο / Υγρό" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setQuizFormat(opt.id);
                                  setQuizResult(null);
                                }}
                                className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${quizFormat === opt.id
                                    ? "bg-brand-500 text-white shadow-lift ring-2 ring-white/50"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                  }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={calculateQuizResult}
                      className="w-full py-4 rounded-2xl bg-white text-ink-950 hover:bg-brand-100 font-extrabold text-sm shadow-lift transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-brand-600" />{" "}
                      {guide.slug === "face-care"
                        ? "Υπολογισμός Ιδανικής Ρουτίνας Προσώπου"
                        : guide.slug === "body-care"
                          ? "Υπολογισμός Ιδανικής Φροντίδας Σώματος"
                          : guide.slug === "hair-care"
                            ? "Υπολογισμός Ιδανικής Αγωγής Μαλλιών"
                            : "Υπολογισμός Ιδανικού Συμπληρώματος"}
                    </button>
                  </div>

                  {/* Recommendation Card */}
                  <div className="lg:col-span-5">
                    {quizResult ? (
                      <div className="rounded-3xl bg-white text-ink-900 p-6 shadow-2xl animate-fade-up">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-50 text-brand-700">
                            Η Πρόταση των Φαρμακοποιών
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuizResult(null)}
                            className="text-xs font-semibold text-ink-400 hover:text-ink-700 flex items-center gap-1"
                          >
                            <RotateCcw className="w-3.5 h-3.5" /> Επαναφορά
                          </button>
                        </div>

                        <div className="relative h-44 rounded-2xl bg-mesh-light overflow-hidden mb-4">
                          <Image
                            src={quizResult.image}
                            alt={quizResult.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {quizResult.badges.map((b) => (
                            <span
                              key={b}
                              className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-ink-100 text-ink-700"
                            >
                              {b}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block">
                          {quizResult.brand}
                        </span>
                        <h4 className="text-base font-extrabold text-ink-900 mt-1 leading-snug">
                          {quizResult.name}
                        </h4>
                        <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                          {quizResult.description}
                        </p>

                        <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between">
                          <div>
                            <span className="text-[11px] text-ink-400 block">Τιμή Φαρμακείου</span>
                            <span className="text-xl font-extrabold text-ink-900">
                              {quizResult.price.toFixed(2)}€
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              handleAddToCart({
                                id: `quiz-${quizResult.name}`,
                                name: quizResult.name,
                                price: quizResult.price,
                                image: quizResult.image,
                              })
                            }
                            className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lift transition-all inline-flex items-center gap-1.5"
                          >
                            <ShoppingBag className="w-4 h-4" /> Προσθήκη στο καλάθι
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center flex flex-col items-center justify-center min-h-[360px]">
                        <HelpCircle className="w-12 h-12 text-brand-300/80 mb-4 animate-bounce" />
                        <h4 className="text-lg font-bold text-white mb-2">
                          Έτοιμοι για το αποτέλεσμα;
                        </h4>
                        <p className="text-xs text-brand-100/90 leading-relaxed max-w-xs mb-6">
                          Επιλέξτε τις προτιμήσεις σας αριστερά και πατήστε το κουμπί για να δείτε την επιστημονικά τεκμηριωμένη πρόταση.
                        </p>
                        <button
                          type="button"
                          onClick={calculateQuizResult}
                          className="px-6 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs shadow-soft transition-all"
                        >
                          Άμεση Προβολή Πρότασης
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub-sections with products (e.g. high-converting pharmacy topics) */}
        <div id="products-section" className="scroll-mt-20">
          {guide.subSections?.map((subSec, idx) => (
            <section
              key={subSec.title}
              id={subSec.id}
              className="pb-16 scroll-mt-24"
            >
              <div className="container-page">
                <div className="grid lg:grid-cols-12 gap-6 items-center mb-8">
                  <div className="lg:col-span-4 relative h-52 rounded-3xl overflow-hidden">
                    <Image
                      src={subSec.image || getFallbackSubSectionImage(guide.slug, idx)}
                      alt={subSec.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8">
                    <span className="eyebrow">Θέμα {idx + 1}</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">{subSec.title}</h2>
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

                {/* Actionable Scenario Protocol Steps */}
                {subSec.steps && subSec.steps.length > 0 && (
                  <div className="mb-8 rounded-3xl bg-brand-50/70 border border-brand-200/60 p-5 sm:p-6 shadow-xs">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-8 h-8 rounded-xl bg-brand-600 text-white font-bold grid place-items-center text-xs">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-ink-900">
                        {subSec.protocolTitle || "Πρωτόκολλο Αντιμετώπισης Βήμα-Βήμα"}
                      </h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 mt-4">
                      {subSec.steps.map((step, si) => (
                        <div
                          key={si}
                          className="p-3.5 rounded-2xl bg-white border border-brand-100/80 shadow-xs flex items-start gap-2.5 text-xs text-ink-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
                        <h4 className="text-base sm:text-lg font-bold">{group.categoryTitle}</h4>
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
        </div>

        {/* First-Aid / Baby Checklist */}
        {guide.checklist && (
          <section className="pb-16" id="first-aid-kit">
            <div className="container-page">
              <div className="rounded-4xl bg-gradient-to-br from-brand-900 via-brand-800 to-ink-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-400/20 blur-3xl" />
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-xs font-bold text-brand-300 uppercase tracking-widest block mb-1">
                      Έτοιμη Λίστα
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold">{guide.checklist.title}</h2>
                    <p className="mt-2 text-brand-100 text-sm max-w-xl leading-relaxed">
                      {guide.checklist.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      filteredChecklistItems.forEach((item) => {
                        handleAddToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price ?? 5.0,
                          image: item.image ?? "",
                        });
                      });
                    }}
                    className="shrink-0 px-6 py-3.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-lift transition-all inline-flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Προσθήκη όλων ({filteredChecklistItems.length})
                  </button>
                </div>

                {/* Category Filter Pills if more than 1 category */}
                {checklistCategories.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    <button
                      type="button"
                      onClick={() => setSelectedChecklistCategory("all")}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selectedChecklistCategory === "all"
                          ? "bg-white text-ink-950 shadow-md font-extrabold"
                          : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                    >
                      Όλα ({guide.checklist.items.length})
                    </button>
                    {checklistCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedChecklistCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selectedChecklistCategory === cat
                            ? "bg-white text-ink-950 shadow-md font-extrabold"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {filteredChecklistItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4 flex flex-col justify-between hover:bg-white/15 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-300 uppercase tracking-wide">
                            {item.category}
                          </span>
                          {item.price && (
                            <span className="text-xs font-extrabold text-white">
                              {item.price.toFixed(2)}€
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-semibold text-white/95 leading-snug line-clamp-2">
                          {item.name}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleAddToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price ?? 5.0,
                            image: item.image ?? "",
                          })
                        }
                        className="mt-3.5 w-full py-1.5 rounded-lg bg-white/20 hover:bg-white text-white hover:text-ink-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Προσθήκη
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Specialized Kits & Bundles */}
        {guide.bundles && guide.bundles.length > 0 && (
          <section className="pb-16" id="kits-bundles">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow">Ολοκληρωμένα Σετ</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  Εξειδικευμένα Κιτ Πρώτων Βοηθειών
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  Έτοιμα πακέτα πρώτων βοηθειών με ειδική έκπτωση, σχεδιασμένα για κάθε συγκεκριμένη ανάγκη.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {guide.bundles.map((bundle) => (
                  <div
                    key={bundle.id}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-ink-100 p-6 hover:border-brand-300 hover:shadow-lift transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700">
                          {bundle.badge}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-extrabold text-ink-900">
                            {bundle.price.toFixed(2)}€
                          </span>
                          {bundle.originalPrice && (
                            <span className="text-xs text-ink-400 line-through">
                              {bundle.originalPrice.toFixed(2)}€
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="relative h-40 rounded-2xl bg-mesh-light overflow-hidden mb-4">
                        <Image
                          src={bundle.image}
                          alt={bundle.title}
                          fill
                          className="object-contain p-3"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-ink-900">
                        {bundle.title}
                      </h3>
                      <p className="mt-1 text-xs text-ink-600 leading-relaxed">
                        {bundle.subtitle}
                      </p>

                      <div className="mt-4 pt-4 border-t border-ink-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500 block mb-2">
                          Περιλαμβάνει:
                        </span>
                        <ul className="space-y-1.5 text-xs text-ink-700">
                          {bundle.items.map((it, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleAddToCart({
                          id: bundle.id,
                          name: bundle.title,
                          price: bundle.price,
                          image: bundle.image,
                        })
                      }
                      className="mt-6 w-full py-3 rounded-2xl bg-ink-900 hover:bg-brand-600 text-white font-bold text-xs shadow-lift transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" /> Προσθήκη Κιτ στο καλάθι
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Myth Busters («Τι ΔΕΝ πρέπει να κάνετε») */}
        {guide.myths && guide.myths.length > 0 && (
          <section className="pb-16" id="myths-section">
            <div className="container-page">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="eyebrow text-rose-600">Myth Busters · Προσοχή</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  Τι ΔΕΝ Πρέπει να Κάνετε στις Πρώτες Βοήθειες
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  Συνήθεις παρανοήσεις που μπορούν να επιδεινώσουν έναν τραυματισμό αντί να βοηθήσουν.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {guide.myths.map((m, mi) => (
                  <div
                    key={mi}
                    className="rounded-3xl bg-white border border-ink-100 p-6 shadow-soft flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-100 mb-3.5 flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">
                            Μύθος / Λάθος Πρακτική
                          </span>
                          <p className="text-xs font-bold text-rose-950 mt-0.5">
                            {m.myth}
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                            Επιστημονική Αλήθεια / Σωστή Κίνηση
                          </span>
                          <p className="text-xs text-emerald-950 mt-0.5 leading-relaxed">
                            {m.truth}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Milestones Timeline */}
        {guide.milestones && guide.milestones.length > 0 && (
          <section className="pb-16">
            <div className="container-page">
              <span className="eyebrow">Ορόσημα Ανάπτυξης</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1 mb-8">
                Βασικά Στάδια & Τι να Προσέξετε
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {guide.milestones.map((m, mi) => (
                  <div
                    key={mi}
                    className="rounded-3xl bg-white border border-ink-100 p-6 relative overflow-hidden shadow-soft"
                  >
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-brand-50 text-brand-700 mb-3">
                      {m.period}
                    </span>
                    <h3 className="text-lg font-bold text-ink-900 mb-4">{m.focus}</h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-600 leading-relaxed">
                      {m.tips.map((t, ti) => (
                        <li key={ti} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section with Schema.org JSON-LD */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="pb-16">
            <div className="container-page max-w-4xl">
              {/* Schema.org FAQPage Structured Data for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: guide.faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  }),
                }}
              />

              <div className="text-center mb-8">
                <span className="eyebrow">Συχνές Ερωτήσεις</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 mt-1">
                  Απαντήσεις από τους Φαρμακοποιούς μας
                </h2>
              </div>

              <div className="space-y-3">
                {guide.faqs.map((faq, fi) => (
                  <details
                    key={fi}
                    className="group rounded-2xl bg-white border border-ink-100 p-5 open:shadow-soft transition-all"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-ink-900 text-sm sm:text-base list-none">
                      <span>{faq.question}</span>
                      <ChevronDown className="w-4 h-4 text-ink-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2" />
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-ink-600 leading-relaxed pt-2 border-t border-ink-100/60">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pharmacist Consultation CTA Banner (Lead Generation) */}
        {guide.pharmacistCta && (
          <section className="pb-16" id="pharmacist-consultation">
            <div className="container-page max-w-4xl">
              <div className="rounded-4xl bg-gradient-to-br from-brand-900 via-brand-800 to-ink-950 text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-400/20 blur-3xl" />
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-extrabold uppercase tracking-widest text-brand-300">
                        {guide.pharmacistCta.badge || "Δωρεάν Συμβουλή Φαρμακοποιού"}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {guide.pharmacistCta.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-brand-100/90 leading-relaxed">
                      {guide.pharmacistCta.subtitle}
                    </p>
                    {guide.pharmacistCta.note && (
                      <p className="mt-3 text-[11px] text-brand-300/80 font-medium">
                        🕒 {guide.pharmacistCta.note}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    <a
                      href={`tel:${guide.pharmacistCta.phone.replace(/\s+/g, "")}`}
                      className="w-full md:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-brand-50 text-brand-950 font-extrabold text-sm shadow-lift transition-all inline-flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4 text-brand-600" />
                      <span>{guide.pharmacistCta.buttonText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Medical Disclaimer */}
        {guide.disclaimer && (
          <section className="pb-16">
            <div className="container-page max-w-4xl">
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200/60 p-4 sm:p-5 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    Ιατρική Αποποίηση Ευθύνης (Medical Disclaimer)
                  </h4>
                  <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                    {guide.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};
