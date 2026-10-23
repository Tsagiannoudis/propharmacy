import { Product } from "../types";

export interface GuideSection {
  number?: string;
  title: string;
  items: string[];
}

export interface GuideProductGroup {
  categoryTitle: string;
  products: Product[];
}

export interface BuyingGuideDetail {
  slug: string;
  title: string;
  breadcrumb: string;
  headerBannerImage?: string; // Yellow banner image like in vitamins guide
  featuredImage: string;
  introHeading: string;
  introText: string;
  sections?: GuideSection[];

  // Specific sections for Baby care & Milks
  calloutBox?: {
    badge: string;
    heading: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };

  // Multiple milk stages/types (No1, No2, No3, Special formulas)
  milkStages?: {
    id: string;
    badge: string;
    stage: string;
    ageRange: string;
    description: string;
    features: string[];
    buttonLink: string;
  }[];

  // Specific content for guides with subSections and products
  subSections?: {
    id?: string;
    title: string;
    intro: string;
    protocolTitle?: string;
    steps?: string[];
    image?: string;
    productHeading?: string;
    productGroups?: GuideProductGroup[];
  }[];

  // Baby Care Checklist (Kit) with add-to-cart capability
  checklist?: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      name: string;
      category: string;
      recommendedBrand?: string;
      price?: number;
      image?: string;
      inStock?: boolean;
    }[];
  };

  // Milestones timeline / table
  milestones?: {
    period: string;
    focus: string;
    tips: string[];
  }[];

  // Medical Disclaimer
  disclaimer?: string;

  // FAQ section with Schema.org ready Q&As
  faqs?: {
    question: string;
    answer: string;
  }[];

  // Cheat Sheet / Timing Guide: «Πότε παίρνω τι;»
  timingGuide?: {
    title: string;
    subtitle: string;
    items: {
      category: string;
      timing: string;
      bestPractice: string;
      avoid: string;
      tag: string;
    }[];
  };

  // Shop by Need / Goal Quick Filters
  shopByNeed?: {
    title: string;
    subtitle: string;
    needs: {
      id: string;
      title: string;
      ingredients: string;
      icon: string;
    }[];
  };

  // Interactive Quiz Tool
  quizEnabled?: boolean;

  // Emergency Numbers Box (166, 112, etc.)
  emergencyNumbers?: {
    number: string;
    label: string;
    description: string;
    tel: string;
  }[];

  // Myth Busters («Τι ΔΕΝ πρέπει να κάνετε»)
  myths?: {
    myth: string;
    truth: string;
  }[];

  // Specialized Bundles / Kits (Kits by Need / Cross-Selling)
  bundles?: {
    id: string;
    title: string;
    subtitle: string;
    badge: string;
    price: number;
    originalPrice?: number;
    items: string[];
    image: string;
  }[];

  // Quick Finder buttons for emergencies
  quickFinder?: {
    title: string;
    buttons: {
      label: string;
      targetId: string;
      badge?: string;
    }[];
  };

  // Layering Routine Guide (Morning vs Evening)
  layeringGuide?: {
    title: string;
    subtitle: string;
    steps: {
      stepNumber: number;
      title: string;
      morning: {
        action: string;
        example: string;
      };
      evening: {
        action: string;
        example: string;
      };
    }[];
  };

  // Routine by Skin Type Filter
  skinTypesGuide?: {
    title: string;
    subtitle: string;
    types: {
      id: string;
      name: string;
      badge: string;
      keyIngredients: string;
      description: string;
      routineSteps: string[];
      tip: string;
      products: Product[];
    }[];
  };

  // Cheat Sheet: Active Ingredient Combinations («Τι συνδυάζεται με τι;»)
  ingredientCombinations?: {
    title: string;
    subtitle: string;
    dos: {
      pair: string;
      rule: string;
      reason: string;
      badge?: string;
    }[];
    donts: {
      pair: string;
      rule: string;
      reason: string;
      badge?: string;
    }[];
  };

  // Pharmacist Consultation Call-to-Action (Lead Generation)
  pharmacistCta?: {
    badge?: string;
    title: string;
    subtitle: string;
    phone: string;
    buttonText: string;
    note?: string;
  };

  // Texture / Hydration Comparison Guide («Πώς διαλέγω ενυδάτωση ανάλογα με τον τύπο δέρματος;»)
  textureGuide?: {
    title: string;
    subtitle: string;
    textures: {
      type: string;
      idealFor: string;
      characteristics: string;
      ingredients: string;
      badge?: string;
    }[];
  };

  // Pro Tips & Application Rituals («Tips & Τελετουργία Εφαρμογής»)
  proTips?: {
    title: string;
    subtitle: string;
    tips: {
      title: string;
      description: string;
      badge: string;
      icon?: string;
    }[];
  };

  // Hair Specific: Dandruff vs Dry Scalp Comparison Box («Πιτυρίδα ή Ξηροδερμία;»)
  dandruffComparison?: {
    title: string;
    subtitle: string;
    rows: {
      symptom: string;
      dryScalp: string;
      oilyDandruff: string;
    }[];
    dryScalpRec: {
      badge: string;
      title: string;
      description: string;
      product: Product;
    };
    oilyDandruffRec: {
      badge: string;
      title: string;
      description: string;
      product: Product;
    };
  };

  // Hair Specific: 1-2-3 Hair Loss Protocol Routine Bundle
  hairLossProtocol?: {
    title: string;
    subtitle: string;
    badge?: string;
    bundlePrice: number;
    originalPrice?: number;
    steps: {
      stepNumber: number;
      stepTitle: string;
      action: string;
      timing: string;
      product: Product;
    }[];
  };
}

export const buyingGuidesData: Record<string, BuyingGuideDetail> = {
  "baby-care": {
    slug: "baby-care",
    title: "Ολοκληρωμένος Οδηγός Βρεφικής Φροντίδας",
    breadcrumb: "Οδηγός Βρεφικής Φροντίδας",
    headerBannerImage: "/categories/goneis-kai-paidia-banner.webp",
    featuredImage: "/guide/guide-banner-baby-care.webp",
    introHeading: "Ολοκληρωμένος Οδηγός Βρεφικής Φροντίδας & Υγείας",
    introText:
      "Η φροντίδα ενός βρέφους είναι μια μοναδική εμπειρία που απαιτεί αγάπη, υπομονή και σωστές επιστημονικές γνώσεις. Αυτός ο οδηγός δημιουργήθηκε από την ομάδα φαρμακοποιών του ProPharmacy για να σας καθοδηγήσει από τη διατροφή και τα βρεφικά γάλατα, έως τη διαχείριση κολικών, την αλλαγή πάνας και τα πρώτα δοντάκια.",
    sections: [
      {
        number: "1.",
        title: "Διατροφή & Θηλασμός",
        items: [
          "Θηλασμός: Η πιο φυσική και πλήρης επιλογή. Συνιστάται αποκλειστικός θηλασμός για τους πρώτους 6 μήνες ζωής.",
          "Συμπληρωματική διατροφή: Μετά τον 6ο μήνα, εισάγονται σταδιακά στέρεες τροφές με καθοδήγηση του παιδιάτρου.",
        ],
      },
      {
        number: "2.",
        title: "Υγιεινή και Φροντίδα",
        items: [
          "Καθαρισμός χεριών: Πάντα σχολαστικό πλύσιμο χεριών πριν από κάθε επαφή με το μωρό ή τα σκεύη ταΐσματος.",
          "Μπάνιο: Δώστε ένα ήπιο μπάνιο στο μωρό σας 2-3 φορές την εβδομάδα, χρησιμοποιώντας εξειδικευμένα βρεφικά syndet χωρίς σαπούνι.",
        ],
      },
      {
        number: "3.",
        title: "Ασφαλής Ύπνος",
        items: [
          "Ασφάλεια: Το μωρό κοιμάται πάντα ανάσκελα σε σταθερό στρώμα, χωρίς μαξιλάρια, κουβέρτες ή λούτρινα παιχνίδια στο κρεβάτι.",
          "Ρουτίνα ύπνου: Σταθερή ώρα, χαμηλός φωτισμός και ένα χαλαρωτικό μασάζ με βρεφικό έλαιο σηματοδοτούν την ώρα της ανάπαυσης.",
        ],
      },
      {
        number: "4.",
        title: "Ανάπτυξη & Επικοινωνία",
        items: [
          "Tummy Time: Λίγα λεπτά μπρούμυτα υπό επίβλεψη από τις πρώτες εβδομάδες ενισχύουν τους μυς του αυχένα.",
          "Αλληλεπίδραση: Μιλήστε, τραγουδήστε και ανταποκριθείτε στα πρώτα χαμόγελα και φωνήεντα του μωρού.",
        ],
      },
      {
        number: "5.",
        title: "Πρόληψη & Υγεία",
        items: [
          "Εμβολιασμοί: Πιστό πρόγραμμα βάσει του Εθνικού Προγράμματος Εμβολιασμών.",
          "Τακτικός παιδιατρικός έλεγχος: Μηνιαία παρακολούθηση βάρους, ύψους και περιμέτρου κεφαλής.",
        ],
      },
    ],

    // 1. Επέκταση Ενότητας Βρεφικών Γαλάτων (Νο1, Νο2, Νο3 & Ειδικά Γάλατα)
    milkStages: [
      {
        id: "stage-1",
        badge: "0 – 6 Μηνών",
        stage: "Νο 1",
        ageRange: "Γάλα Πρώτης Βρεφικής Ηλικίας",
        description:
          "Ειδικά σχεδιασμένο από τη γέννηση έως 6 μηνών για περιπτώσεις που ο θηλασμός δεν είναι εφικτός. Παρέχει την ιδανική αναλογία πρωτεϊνών ορού/καζεΐνης, DHA και πρεβιοτικών.",
        features: ["Αποκλειστική διατροφή", "Εμπλουτισμένο με DHA & ARA", "Ήπιο για το ανώριμο πεπτικό"],
        buttonLink: "/shop?category=baby-and-childrens-milk",
      },
      {
        id: "stage-2",
        badge: "6 – 12 Μηνών",
        stage: "Νο 2",
        ageRange: "Μεταβατικό Γάλα (Follow-on)",
        description:
          "Καλύπτει τις αυξημένες διατροφικές ανάγκες παράλληλα με την εισαγωγή των στερεών τροφών. Περιέχει αυξημένο σίδηρο, ασβέστιο και βιταμίνη D.",
        features: ["Υψηλότερη περιεκτικότητα σε σίδηρο", "Ενίσχυση ανοσοποιητικού", "Συνδυασμός με στερεές τροφές"],
        buttonLink: "/shop?category=baby-and-childrens-milk",
      },
      {
        id: "stage-3",
        badge: "1 – 3 Ετών",
        stage: "Νο 3",
        ageRange: "Παιδικό Γάλα Ανάπτυξης",
        description:
          "Προσαρμοσμένο για νήπια, παρέχει έως και 20 φορές περισσότερο σίδηρο σε σχέση με το κοινό αγελαδινό γάλα, χωρίς υπερβολική επιβάρυνση σε πρωτεΐνες και αλάτι.",
        features: ["Ισορροπημένη ανάπτυξη", "Βιταμίνες C, D & Ψευδάργυρος", "Χωρίς πρόσθετη ζάχαρη"],
        buttonLink: "/shop?category=baby-and-childrens-milk",
      },
      {
        id: "stage-special",
        badge: "Ειδική Διατροφή",
        stage: "Ειδικά Γάλατα",
        ageRange: "AC · AR · HA · Χωρίς Λακτόζη",
        description:
          "Εξειδικευμένες φόρμουλες για κολικούς/δυσκοιλιότητα (AC/Comfort), αναγωγές (AR), υποαλλεργικά (HA) ή δυσανεξία στη λακτόζη. Σημείωση: Χορηγούνται αποκλειστικά με σύσταση παιδιάτρου.",
        features: ["AC: Μειωμένη λακτόζη & FOS", "AR: Πυκνωτικός χαρουπάλευρος", "HA: Υδρολυμένη πρωτεΐνη"],
        buttonLink: "/shop?category=baby-and-childrens-milk",
      },
    ],

    // 2. Βασικά Θέματα Φαρμακείου με σχετικά Προϊόντα (High-converting)
    subSections: [
      {
        title: "Αλλαγή Πάνας & Σύγκαμα (Diaper Rash)",
        image: "/categories/goneis-kai-paidia-banner-520x460.webp",
        intro:
          "Το σύγκαμα οφείλεται στην υγρασία, την τριβή και την επαφή με όξινα ούρα/κενώσεις. Καθαρίζετε την περιοχή με χλιαρό νερό ή υποαλλεργικά μωρομάντηλα χωρίς οινόπνευμα και άρωμα. Στεγνώστε ταμποναριστά χωρίς τρίψιμο και εφαρμόστε προστατευτική κρέμα σε κάθε αλλαγή.",
        productHeading: "Προστασία & Επανόρθωση",
        productGroups: [
          {
            categoryTitle: "Κρέμες Αλλαγής Πάνας & Επανόρθωσης",
            products: [
              {
                id: "b-rash-1",
                name: "Mustela Stelatopia Emollient Cream 200ml",
                brand: "Mustela",
                price: 13.9,
                originalPrice: 17.5,
                image: "/categories/goneis-kai-paidia-banner-520x460.webp",
              },
              {
                id: "b-rash-2",
                name: "Avene Cicalfate+ Επανορθωτική Κρέμα για Ερεθισμούς 100ml",
                brand: "Avene",
                price: 11.9,
                originalPrice: 14.9,
                image:
                  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "b-rash-3",
                name: "Bepanthol Baby Protective Ointment για Σύγκαμα 100g",
                brand: "Bepanthol",
                price: 8.8,
                originalPrice: 11.5,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        title: "Βρεφικοί Κολικοί & Αέρια",
        image: "/guide/guide-banner-baby-care.webp",
        intro:
          "Οι κολικοί εμφανίζονται συνήθως μετά τη 2η-3η εβδομάδα (κανόνας των 3: κλάμα >3 ώρες/ημέρα, >3 ημέρες/εβδομάδα, για >3 εβδομάδες). Ανακουφίστε το μωρό με απαλό μασάζ στην κοιλίτσα δεξιόστροφα, ζεστή θερμοφόρα με κουκούτσια κερασιού, σταγόνες προβιοτικών Lactobacillus reuteri και αντικολικά μπιμπερό με βαλβίδα.",
        productHeading: "Ανακούφιση από Κολικούς",
        productGroups: [
          {
            categoryTitle: "Προβιοτικά & Αντικολικά Αξεσουάρ",
            products: [
              {
                id: "b-colic-1",
                name: "BioGaia Protectis Drops Προβιοτικές Σταγόνες για Κολικούς 5ml",
                brand: "BioGaia",
                price: 14.2,
                originalPrice: 18.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "b-colic-2",
                name: "Philips Avent Anti-Colic Μπιμπερό 260ml με Βαλβίδα AirFree",
                brand: "Philips Avent",
                price: 8.5,
                originalPrice: 10.9,
                image: "/categories/goneis-kai-paidia-banner-520x460.webp",
              },
            ],
          },
        ],
      },
      {
        title: "Φροντίδα Ομφαλού & Νινίδα (Cradle Cap)",
        image: "/categories/goneis-kai-paidia-banner.webp",
        intro:
          "Ομφαλικό κολόβωμα: Διατηρήστε το στεγνό και καθαρό με αποστειρωμένη γάζα και καθαρό οινόπνευμα 70° ή φυσιολογικό ορό σε κάθε αλλαγή πάνας μέχρι να πέσει (7-14 ημέρες). Νινίδα: Εμφανίζεται ως κιτρινωπές φολίδες στο τριχωτό. Εφαρμόστε μαλακτικό έλαιο 20 λεπτά πριν το μπάνιο και λούστε με ειδικό αφρώδες βρεφικό σαμπουάν.",
        productHeading: "Προϊόντα για Ομφαλό & Νινίδα",
        productGroups: [
          {
            categoryTitle: "Έλαια & Ειδικά Σαμπουάν",
            products: [
              {
                id: "b-cradle-1",
                name: "Mustela Foam Shampoo for Newborns για τη Νινίδα 150ml",
                brand: "Mustela",
                price: 9.4,
                originalPrice: 12.0,
                image: "/categories/goneis-kai-paidia-banner-520x460.webp",
              },
              {
                id: "b-cradle-2",
                name: "Frezyderm Baby Cradle Cap Oil Μαλακτικό Έλαιο για Νινίδα 50ml",
                brand: "Frezyderm",
                price: 10.8,
                originalPrice: 13.9,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        title: "Βρεφικό Συνάχι & Ρινική Απόφραξη",
        image: "/categories/goneis-kai-paidia-banner-560x1000-1.webp",
        intro:
          "Τα βρέφη αναπνέουν αποκλειστικά από τη μύτη τους πρώτους μήνες. Μια βουλωμένη μύτη δυσκολεύει τον ύπνο και το τάισμα. Καθαρίζετε καθημερινά τα ρουθούνια με αμπούλες φυσιολογικού ορού και απομακρύνετε τις εκκρίσεις με απαλό ρινικό αποφρακτήρα/αναρροφητήρα πριν από κάθε γεύμα.",
        productHeading: "Ρινική Υγιεινή",
        productGroups: [
          {
            categoryTitle: "Φυσιολογικός Ορός & Ρινικοί Αποφρακτήρες",
            products: [
              {
                id: "b-nose-1",
                name: "Clinofar Αμπούλες Στείρου Φυσιολογικού Ορού 30x5ml",
                brand: "Clinofar",
                price: 4.8,
                originalPrice: 6.5,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "b-nose-2",
                name: "Physiomer Βρεφικός Ρινικός Αποφρακτήρας με Μαλακό Ρύγχος",
                brand: "Physiomer",
                price: 7.9,
                originalPrice: 10.2,
                image: "/categories/goneis-kai-paidia-banner-520x460.webp",
              },
            ],
          },
        ],
      },
      {
        title: "Οδοντοφυΐα & Ατοπικό Δέρμα",
        image: "/guide/guide-banner-baby-care.webp",
        intro:
          "Πρώτα δοντάκια (4-7 μήνες): Εκδηλώνονται με σιελόρροια, ερεθισμένα ούλα και ανάγκη για μάσημα. Ανακουφίστε με φυσικό τζελ ούλων και δροσερούς κρίκους οδοντοφυΐας ψυγείου. Ατοπικό δέρμα / Έκζεμα: Προτιμήστε μαλακτικά αφρόλουτρα με βρώμη ή λιπίδια και απλώστε ενυδατικό βάλσαμο όσο το δέρμα είναι νωπό.",
        productHeading: "Οδοντοφυΐα & Ατοπία",
        productGroups: [
          {
            categoryTitle: "Τζελ Ούλων & Μαλακτική Φροντίδα",
            products: [
              {
                id: "b-teeth-1",
                name: "Frezyderm Baby Teething Gel Φυσικό Τζελ Ούλων 25ml",
                brand: "Frezyderm",
                price: 8.6,
                originalPrice: 11.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "b-atopic-1",
                name: "La Roche-Posay Lipikar Baume AP+M Βάλσαμο για Ατοπικό Δέρμα 400ml",
                brand: "La Roche-Posay",
                price: 18.9,
                originalPrice: 24.5,
                image:
                  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],

    // 3. Checklist «Το Φαρμακείο του Μωρού» (Baby First-Aid Kit)
    checklist: {
      title: "Το Φαρμακείο του Μωρού",
      subtitle:
        "Η απαραίτητη λίστα με όσα πρέπει να έχετε στο σπίτι πριν από την άφιξη του νεογέννητου.",
      items: [
        {
          id: "chk-1",
          name: "Ψηφιακό θερμόμετρο ταχείας ένδειξης με εύκαμπτο άκρο",
          category: "Διαγνωστικά",
          recommendedBrand: "Microlife / Braun",
          price: 7.9,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80",
          inStock: true,
        },
        {
          id: "chk-2",
          name: "Αμπούλες αποστειρωμένου φυσιολογικού ορού 30x5ml",
          category: "Ρινική Υγιεινή",
          recommendedBrand: "Clinofar / Physiomer",
          price: 4.8,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80",
          inStock: true,
        },
        {
          id: "chk-3",
          name: "Αποστειρωμένες γάζες (7.5x7.5cm) για ομφαλό & μάτια",
          category: "Υγιεινή",
          recommendedBrand: "Master-Aid / Hansaplast",
          price: 2.5,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80",
          inStock: true,
        },
        {
          id: "chk-4",
          name: "Καθαρό οινόπνευμα 70° για περιποίηση ομφαλικού κολοβώματος",
          category: "Αντισηψία",
          recommendedBrand: "Pharmacy Care",
          price: 1.9,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80",
          inStock: true,
        },
        {
          id: "chk-5",
          name: "Κρέμα πρόληψης & αντιμετώπισης συγκάματος με οξείδιο ψευδαργύρου",
          category: "Αλλαγή Πάνας",
          recommendedBrand: "Bepanthol / Mustela",
          price: 8.8,
          image: "/categories/goneis-kai-paidia-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "chk-6",
          name: "Ήπιο βρεφικό αφρόλουτρο & σαμπουάν 2 σε 1 (χωρίς σαπούνι)",
          category: "Μπάνιο",
          recommendedBrand: "Mustela / Frezyderm",
          price: 11.5,
          image: "/guide/guide-banner-baby-care.webp",
          inStock: true,
        },
        {
          id: "chk-7",
          name: "Βρεφικός ρινικός αναρροφητήρας με ανταλλακτικά ρύγχη",
          category: "Ρινική Υγιεινή",
          recommendedBrand: "Physiomer / Otrivin Baby",
          price: 7.9,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80",
          inStock: true,
        },
        {
          id: "chk-8",
          name: "Αντιπυρετικό σιρόπι παρακεταμόλης (κατόπιν οδηγίας παιδιάτρου)",
          category: "Πρώτες Βοήθειες",
          recommendedBrand: "Σύσταση Παιδιάτρου",
          price: 3.2,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80",
          inStock: true,
        },
      ],
    },

    // 3b. Πίνακας με Αναπτυξιακά Ορόσημα
    milestones: [
      {
        period: "0 – 3 Μήνες",
        focus: "Προσαρμογή, Ύπνος & Πεπτικό",
        tips: [
          "Φροντίδα ομφαλικού κολοβώματος μέχρι την πτώση (7-14 ημέρες).",
          "Διαχείριση πρώτων βρεφικών κολικών με σταγόνες προβιοτικών και μασάζ.",
          "Ασφαλής ύπνος ανάσκελα σε σταθερό υπόστρωμα.",
          "Αποφυγή απευθείας έκθεσης στον ήλιο.",
        ],
      },
      {
        period: "3 – 6 Μήνες",
        focus: "Στοματική Εξερεύνηση & Πρώτα Δόντια",
        tips: [
          "Έντονη σιελόρροια και ανάγκη για μάσημα — χρήση κρίκων οδοντοφυΐας ψυγείου.",
          "Σταθεροποίηση ρουτίνας ύπνου και μεγαλύτερα διαστήματα νυχτερινής ανάπαυσης.",
          "Παιχνίδι μπρούμυτα (tummy time) για ενδυνάμωση ώμων και αυχένα.",
        ],
      },
      {
        period: "6+ Μήνες",
        focus: "Στερεές Τροφές & Ανεξαρτησία",
        tips: [
          "Σταδιακή εισαγωγή στερεών τροφών και μετάβαση σε γάλα 2ης ηλικίας (Νο2).",
          "Πρώτο εκπαιδευτικό κύπελλο για νερό.",
          "Αντηλιακή προστασία με φυσικά φίλτρα (οξείδιο ψευδαργύρου/διοξείδιο τιτανίου) για βρέφη άνω των 6 μηνών.",
        ],
      },
    ],

    // 4. Medical Disclaimer & FAQs
    disclaimer:
      "Οι πληροφορίες και συμβουλές του παρόντος οδηγού έχουν καθαρά ενημερωτικό χαρακτήρα και δεν υποκαθιστούν την εξατομικευμένη ιατρική διάγνωση, συμβουλή ή θεραπεία. Συμβουλευτείτε πάντα τον παιδίατρό σας πριν από τη χορήγηση οποιουδήποτε σκευάσματος, γάλακτος ειδικής διατροφής ή συμπληρώματος.",

    faqs: [
      {
        question: "Πόσο συχνά πρέπει να κάνω μπάνιο το νεογέννητο μωρό;",
        answer:
          "2 έως 3 φορές την εβδομάδα είναι αρκετές για τους πρώτους μήνες. Το καθημερινό μπάνιο μπορεί να αφυδατώσει την ευαίσθητη βρεφική επιδερμίδα. Τις υπόλοιπες ημέρες αρκεί ο τοπικός καθαρισμός στο πρόσωπο, το λαιμό και τη μηρογεννητική περιοχή σε κάθε αλλαγή πάνας.",
      },
      {
        question: "Ποια είναι η διαφορά ανάμεσα στο γάλα Νο 1 και Νο 2;",
        answer:
          "Το γάλα Νο 1 (πρώτης βρεφικής ηλικίας) προορίζεται για βρέφη 0-6 μηνών και προσομοιάζει τη σύσταση του μητρικού γάλακτος ως αποκλειστική πηγή διατροφής. Το γάλα Νο 2 (μεταβατικό) προορίζεται για βρέφη άνω των 6 μηνών, περιέχει περισσότερο σίδηρο, ασβέστιο και πρωτεΐνες για να υποστηρίξει τις αυξημένες ανάγκες παράλληλα με την εισαγωγή των στερεών τροφών.",
      },
      {
        question: "Πότε πρέπει να χρησιμοποιήσω ειδικό γάλα (AC, AR, HA);",
        answer:
          "Τα ειδικά γάλατα (π.χ. AC για κολικούς, AR για παλινδρόμηση/αναγωγές, HA υποαλλεργικό ή Lactose Free) χορηγούνται αποκλειστικά κατόπιν οδηγίας και σύστασης του παιδιάτρου σας, αφού αξιολογήσει τα συμπτώματα του μωρού.",
      },
      {
        question: "Πώς ξεχωρίζω αν το μωρό έχει σύγκαμα ή μυκητιασική μόλυνση;",
        answer:
          "Το απλό σύγκαμα περιορίζεται στις κυρτές επιφάνειες που τρίβονται με την πάνα και βελτιώνεται με κρέμα ψευδαργύρου σε 2-3 ημέρες. Αν ο ερεθισμός είναι έντονα κόκκινος, εισχωρεί στις πτυχές του δέρματος και συνοδεύεται από μικρά κόκκινα σπυράκια, ενδέχεται να πρόκειται για μυκητίαση (Candida) και απαιτείται εκτίμηση από παιδίατρο για ειδική αντιμυκητιασική κρέμα.",
      },
    ],
  },

  "vitamins-supplements": {
    slug: "vitamins-supplements",
    title: "Οδηγός Βιταμίνες και Συμπληρώματα",
    breadcrumb: "Οδηγός Βιταμίνες και Συμπληρώματα",
    headerBannerImage: "/categories/supliromata-banner-1.webp",
    featuredImage: "/guide/guide-banner-suppliments&vitamins-2.webp",
    introHeading: "Οδηγός Βιταμίνες & Συμπληρώματα Διατροφής",
    introText:
      "Τα συμπληρώματα διατροφής αποτελούν ισχυρό σύμμαχο της υγείας σας όταν χρησιμοποιούνται σωστά, στη σωστή ώρα και με βάση τις πραγματικές ανάγκες του οργανισμού σας. Οι φαρμακοποιοί του ProPharmacy ετοίμασαν τον απόλυτο πρακτικό οδηγό για το πότε και πώς να λαμβάνετε κάθε βιταμίνη, πώς να επιλέγετε ανάλογα με τον στόχο σας και πώς να αποφεύγετε ανεπιθύμητες αλληλεπιδράσεις.",
    quizEnabled: true,

    // 1. Πρακτικός Οδηγός Λήψης: «Πότε παίρνω τι;» (Cheat Sheet)
    timingGuide: {
      title: "Πρακτικός Οδηγός Λήψης: «Πότε παίρνω τι;»",
      subtitle:
        "Ο χρυσός κανόνας του φαρμακείου για μέγιστη απορρόφηση, άμεση ενέργεια και αποφυγή στομαχικών ενοχλήσεων.",
      items: [
        {
          category: "Λιποδιαλυτές Βιταμίνες (D3, E, A, K & Ωμέγα-3)",
          timing: "Μεσημέρι ή Βράδυ (Μετά το κύριο γεύμα)",
          bestPractice:
            "Λαμβάνονται αμέσως μετά από γεύμα που περιέχει καλά λιπαρά (π.χ. ελαιόλαδο, ψάρι, αβοκάντο, γιαούρτι). Τα λιπίδια ενεργοποιούν τη χολή και πολλαπλασιάζουν την απορρόφηση.",
          avoid: "Μην τις παίρνετε με άδειο στομάχι ή μόνο με νερό/καφέ, καθώς το μεγαλύτερο ποσοστό δεν θα απορροφηθεί.",
          tag: "Μετά το Φαγητό",
        },
        {
          category: "Υδατοδιαλυτές Βιταμίνες (Βιταμίνη C & Σύμπλεγμα Β)",
          timing: "Πρωί (Νηστικός ή με ελαφρύ πρωινό)",
          bestPractice:
            "Προσφέρουν άμεση πνευματική & σωματική τόνωση, μειώνουν την πρωινή κόπωση και απορροφώνται ταχύτατα με 1 μεγάλο ποτήρι νερό.",
          avoid: "Αποφύγετε τη λήψη τους αργά το απόγευμα ή το βράδυ, καθώς μπορεί να προκαλέσουν υπερδιέγερση και αϋπνία.",
          tag: "Πρωινή Τόνωση",
        },
        {
          category: "Σίδηρος (Fe)",
          timing: "Πρωί νηστικός (30-60' πριν το πρωινό)",
          bestPractice:
            "Συνδυάζεται ιδανικά με πηγή Βιταμίνης C (π.χ. φρεσκοστυμμένο χυμό πορτοκάλι) που μετατρέπει τον σίδηρο σε απορροφήσιμη μορφή.",
          avoid: "ΠΟΤΕ μαζί με καφέ, μαύρο τσάι, αναψυκτικά cola ή γαλακτοκομικά (το ασβέστιο δεσμεύει τον σίδηρο). Αφήστε 2 ώρες απόσταση.",
          tag: "Νηστικός + Vit C",
        },
        {
          category: "Μαγνήσιο (Mg)",
          timing: "Απόγευμα ή 30-60' πριν τον ύπνο",
          bestPractice:
            "Συμβάλλει στη χαλάρωση των μυών και του νευρικού συστήματος, καταπολεμά τις νυχτερινές κράμπες και εξασφαλίζει βαθύ, ποιοτικό ύπνο.",
          avoid: "Μην το λαμβάνετε ταυτόχρονα με σίδηρο ή αντιβιοτικά (ανταγωνίζονται στους ίδιους υποδοχείς απορρόφησης).",
          tag: "Βράδυ / Χαλάρωση",
        },
        {
          category: "Προβιοτικά (Φιλικά Βακτήρια)",
          timing: "30' πριν το πρωινό ή 2 ώρες μετά από αντιβίωση",
          bestPractice:
            "Λαμβάνονται σε άδειο στομάχι με χλιαρό νερό, όταν η οξύτητα του στομάχου είναι χαμηλότερη, εξασφαλίζοντας την επιβίωση των στελεχών.",
          avoid: "Ποτέ με καυτά ροφήματα (σκοτώνουν τα προβιοτικά) και ποτέ την ίδια στιγμή με το χάπι της αντιβίωσης.",
          tag: "Πριν το Γεύμα",
        },
      ],
    },

    // 2. Πλοήγηση «Ανά Ανάγκη / Στόχο» (Shop by Need)
    shopByNeed: {
      title: "Επιλέξτε ανάλογα με την Ανάγκη σας",
      subtitle:
        "Βρείτε στοχευμένα τα ενεργά συστατικά που χρειάζεται ο οργανισμός σας με βάση τα συμπτώματα.",
      needs: [
        {
          id: "need-immunity",
          title: "Τόνωση Ανοσοποιητικού",
          ingredients: "Βιταμίνη C, D3, Ψευδάργυρος, Πρόπολη, Echinacea",
          icon: "Shield",
        },
        {
          id: "need-energy",
          title: "Κόπωση & Ενέργεια",
          ingredients: "Βιταμίνες B, CoQ10, Ginseng, Σίδηρος",
          icon: "Zap",
        },
        {
          id: "need-sleep",
          title: "Άγχος, Στρες & Ύπνος",
          ingredients: "Μαγνήσιο, Μελατονίνη, Βαλεριάνα, Ashwagandha",
          icon: "Moon",
        },
        {
          id: "need-beauty",
          title: "Μαλλιά, Νύχια & Δέρμα",
          ingredients: "Βιοτίνη, Κολλαγόνο, Υαλουρονικό, Ψευδάργυρος",
          icon: "Sparkles",
        },
        {
          id: "need-joints",
          title: "Αρθρώσεις & Οστά",
          ingredients: "Γλυκοζαμίνη, Χονδροϊτίνη, Ασβέστιο, D3/K2",
          icon: "Activity",
        },
        {
          id: "need-gut",
          title: "Γαστρεντερική Υγεία",
          ingredients: "Προβιοτικά, Πρεβιοτικά, Πεπτικά Ένζυμα",
          icon: "HeartPulse",
        },
      ],
    },

    // 3. Ενότητες Προϊόντων με Κάλυψη Όλων των Best-Sellers (D3, Μελατονίνη, Κολλαγόνο, Εγκυμοσύνη, Ενέργεια)
    subSections: [
      {
        title: "Βιταμίνη D3: Ο Βασιλιάς των Συμπληρωμάτων",
        image: "/categories/supliromata-banner-1.webp",
        intro:
          "Παρά την ηλιοφάνεια στην Ελλάδα, πάνω από το 60% του πληθυσμού εμφανίζει έλλειψη βιταμίνης D3. Η D3 ρυθμίζει το ανοσοποιητικό, τη διάθεση και την απορρόφηση του ασβεστίου. Ο συνδυασμός D3 με K2 κατευθύνει το ασβέστιο κατευθείαν στα οστά, αποτρέποντας την εναπόθεσή του στα αγγεία.",
        productHeading: "Κορυφαίες Επιλογές D3",
        productGroups: [
          {
            categoryTitle: "Βιταμίνη D3 & D3+K2",
            products: [
              {
                id: "vit-d3-1",
                name: "Solgar Vitamin D3 2200 IU (55mcg) 50 Φυτοκάψουλες",
                brand: "Solgar",
                price: 13.9,
                originalPrice: 18.0,
                badges: ["Gluten Free", "Non-GMO", "Best Seller"],
                image: "/categories/supliromata-banner-1.webp",
              },
              {
                id: "vit-d3-2",
                name: "Lamberts Vitamin D3 4000 IU 120 Κάψουλες Υψηλής Ισχύος",
                brand: "Lamberts",
                price: 15.8,
                originalPrice: 20.5,
                badges: ["Υψηλή Ισχύς", "Gluten Free"],
                image: "/categories/sumpliromata-vitamines-banner.webp",
              },
              {
                id: "vit-d3-3",
                name: "Power Health D-Vit3 2000 IU & K2 30 Δισκία για Οστά & Καρδιά",
                brand: "Power Health",
                price: 8.9,
                originalPrice: 11.9,
                badges: ["D3 + K2", "Sugar Free"],
                image: "/categories/supliromata-banner-1.webp",
              },
            ],
          },
        ],
      },
      {
        title: "Άγχος, Στρες & Ποιοτικός Ύπνος",
        image: "/images/flat-lay-health-still-life-arrangement-with-copy-space.jpg",
        intro:
          "Η μελατονίνη μειώνει τον χρόνο που απαιτείται για να αποκοιμηθείτε και ανακουφίζει από το jet-lag, χωρίς να προκαλεί εθισμό ή πρωινό «hangover». Φυτικά εκχυλίσματα όπως η βαλεριάνα, η πασιφλόρα και η ashwagandha εξισορροπούν τα επίπεδα κορτιζόλης και προσφέρουν φυσική ηρεμία.",
        productHeading: "Συμπληρώματα Ύπνου & Χαλάρωσης",
        productGroups: [
          {
            categoryTitle: "Μελατονίνη & Φυτικά Ηρεμιστικά",
            products: [
              {
                id: "vit-sleep-1",
                name: "ESI Melatonin Pura 1.9mg Microtablets 60 Μικροδισκία",
                brand: "ESI",
                price: 6.9,
                originalPrice: 9.5,
                badges: ["Vegan", "Gluten Free", "Χωρίς Ζάχαρη"],
                image: "/categories/supliromata-banner-1.webp",
              },
              {
                id: "vit-sleep-2",
                name: "Lanes Quiet Life 50 Δισκία Φυτικό Ηρεμιστικό με Βαλεριάνα",
                brand: "Lanes",
                price: 8.4,
                originalPrice: 11.2,
                badges: ["Φυσική Σύνθεση", "Χωρίς Εθισμό"],
                image: "/categories/sumpliromata-vitamines-banner.webp",
              },
              {
                id: "vit-sleep-3",
                name: "Power Health Magnesium Direct 350mg 30 Φακελίσκοι (Sugar Free)",
                brand: "Power Health",
                price: 9.9,
                originalPrice: 13.2,
                badges: ["Sugar Free", "Χωρίς Νερό", "Μαγνήσιο"],
                image: "/categories/supliromata-banner-1.webp",
              },
            ],
          },
        ],
      },
      {
        title: "Κολλαγόνο & Ομορφιά (Μαλλιά, Νύχια, Δέρμα)",
        image: "/images/back-view-woman-with-towel-head-applying-cream-skin.jpg",
        intro:
          "Μετά την ηλικία των 25, η φυσική παραγωγή κολλαγόνου μειώνεται κατά 1.5% ετησίως. Το υδρολυμένο υγρό κολλαγόνο πεπτιδίων τύπου 1 & 3 σε συνδυασμό με υαλουρονικό οξύ, βιοτίνη και ψευδάργυρο ενισχύει την ελαστικότητα του δέρματος, δυναμώνει τα μαλλιά και στηρίζει τους χόνδρους των αρθρώσεων.",
        productHeading: "Κορυφαία Σκευάσματα Κολλαγόνου",
        productGroups: [
          {
            categoryTitle: "Πόσιμο Κολλαγόνο & Συμπλέγματα Ομορφιάς",
            products: [
              {
                id: "vit-col-1",
                name: "Pro-Active Liquid Collagen Plus Γεύση Φράουλα 500ml",
                brand: "Pro-Active",
                price: 38.5,
                originalPrice: 49.0,
                badges: ["Υγρό Κολλαγόνο", "Sugar Free", "Best Seller"],
                image: "/categories/supliromata-banner-1.webp",
              },
              {
                id: "vit-col-2",
                name: "Solgar Hyaluronic Acid Collagen Complex 30 Ταμπλέτες",
                brand: "Solgar",
                price: 33.2,
                originalPrice: 42.0,
                badges: ["BioCell Collagen", "Υαλουρονικό"],
                image: "/categories/sumpliromata-vitamines-banner.webp",
              },
              {
                id: "vit-col-3",
                name: "Priorin Extra Συμπλήρωμα Διατροφής για την Τριχόπτωση 60 Κάψουλες",
                brand: "Priorin",
                price: 24.9,
                originalPrice: 32.5,
                badges: ["Κυστίνη & Βιοτίνη", "Για Μαλλιά"],
                image: "/categories/supliromata-banner-1.webp",
              },
            ],
          },
        ],
      },
      {
        title: "Συμπληρώματα Εγκυμοσύνης & Θηλασμού",
        image: "/categories/goneis-kai-paidia-banner.webp",
        intro:
          "Κατά την κύηση και τη γαλουχία, οι ανάγκες σε φυλλικό οξύ (βιταμίνη B9), σίδηρο, ιώδιο και DHA (Ω3) διπλασιάζονται. Το φυλλικό οξύ είναι απαραίτητο πριν τη σύλληψη και στο 1ο τρίμηνο για την ομαλή σύγκλειση του νευρικού σωλήνα του εμβρύου.",
        productHeading: "Προγεννητική Φροντίδα",
        productGroups: [
          {
            categoryTitle: "Προγεννητικές Πολυβιταμίνες & Φυλλικό Οξύ",
            products: [
              {
                id: "vit-preg-1",
                name: "Vitabiotics Pregnacare Plus Omega-3 56 Ταμπλέτες & Κάψουλες",
                brand: "Vitabiotics",
                price: 21.9,
                originalPrice: 28.5,
                badges: ["Pregnancy & DHA", "Χωρίς Γλουτένη"],
                image: "/categories/goneis-kai-paidia-banner-520x460.webp",
              },
              {
                id: "vit-preg-2",
                name: "Iofol Συμπλήρωμα με Φυλλικό Οξύ 400mcg & Ιώδιο 30 Κάψουλες",
                brand: "Iofol",
                price: 6.8,
                originalPrice: 9.0,
                badges: ["Φυλλικό Οξύ", "Προγεννητικό"],
                image: "/categories/goneis-kai-paidia-banner-520x460.webp",
              },
            ],
          },
        ],
      },
      {
        title: "Ενέργεια, Τόνωση & Ανοσοποιητικό",
        image: "/guide/guide-banner-suppliments&vitamins-2.webp",
        intro:
          "Για περιόδους έντονης πνευματικής ή σωματικής κόπωσης, η μη-όξινη Ester-C παραμένει στα λευκοκύτταρα έως και 24 ώρες. Το σύμπλεγμα βιταμινών Β υποστηρίζει τον μεταβολισμό της ενέργειας, ενώ τα αμινοξέα και το ginseng προσφέρουν άμεση αναζωογόνηση.",
        productHeading: "Τόνωση & Αντοχή",
        productGroups: [
          {
            categoryTitle: "Βιταμίνη C & Τονωτικά Αμινοξέων",
            products: [
              {
                id: "vit-en-1",
                name: "Solgar Ester-C Plus 1000mg 90 Φυτοκάψουλες (Μη Όξινη)",
                brand: "Solgar",
                price: 25.5,
                originalPrice: 33.0,
                badges: ["Vegan", "Μη Όξινη C", "24h Δράση"],
                image: "/categories/supliromata-banner-1.webp",
              },
              {
                id: "vit-en-2",
                name: "Tonotil Plus Συμπλήρωμα Τόνωσης & Ενέργειας 15 Φιαλίδια",
                brand: "Tonotil",
                price: 14.5,
                originalPrice: 18.9,
                badges: ["Καρνιτίνη & Αμινοξέα", "Άμεση Δράση"],
                image: "/categories/sumpliromata-vitamines-banner.webp",
              },
              {
                id: "vit-en-3",
                name: "Lanes B-Complex Prolonged Release 30 Ταμπλέτες Σταδιακής Αποδέσμευσης",
                brand: "Lanes",
                price: 7.9,
                originalPrice: 10.5,
                badges: ["B1-B12", "Σταδιακή Αποδέσμευση"],
                image: "/categories/supliromata-banner-1.webp",
              },
            ],
          },
        ],
      },
    ],

    // 4. FAQ Section με Schema.org JSON-LD
    faqs: [
      {
        question: "Μπορώ να παίρνω πολυβιταμίνη συνεχόμενα όλο τον χρόνο;",
        answer:
          "Γενικά συστήνονται κύκλοι λήψης 2-3 μηνών, ακολουθούμενοι από διάλειμμα 1 μήνα, ώστε ο οργανισμός να μην αναπτύσσει ανοχή και να καλύπτει τις ανάγκες του πρωτίστως από ισορροπημένη διατροφή. Εξαίρεση αποτελούν ειδικές ελλείψεις (π.χ. χρόνια έλλειψη D3 ή σιδήρου) όπου ο γιατρός ορίζει συνεχή δοσολογία με τακτικό αιματολογικό έλεγχο.",
      },
      {
        question: "Ποια είναι η διαφορά ανάμεσα σε απλή Βιταμίνη D3 και D3 + K2;",
        answer:
          "Η βιταμίνη D3 αυξάνει την απορρόφηση του ασβεστίου από το έντερο. Η βιταμίνη K2 ενεργοποιεί την οστεοκαλσίνη, η οποία «οδηγεί» το ασβέστιο κατευθείαν στα οστά και τα δόντια. Χωρίς την K2, υψηλές δόσεις D3 μπορεί να οδηγήσουν σε ασβέστωση των αρτηριών και των μαλακών μορίων.",
      },
      {
        question: "Πότε πρέπει να προτιμήσω αναβράζοντα δισκία αντί για κάψουλες;",
        answer:
          "Τα αναβράζοντα δισκία είναι ιδανικά για άτομα με δυσκολία στην κατάποση (δυσφαγία) και προσφέρουν ταχύτερη απορρόφηση και ενυδάτωση. Ωστόσο, περιέχουν συνήθως νάτριο (αλάτι) για τον αναβρασμό, επομένως άτομα με υπέρταση ή αυστηρή δίαιτα χαμηλού νατρίου καλό είναι να προτιμούν κάψουλες ή σταγόνες.",
      },
      {
        question: "Πώς πρέπει να παίρνω τον σίδηρο για να μην έχω στομαχικές ενοχλήσεις;",
        answer:
          "Ο σίδηρος απορροφάται βέλτιστα με άδειο στομάχι μαζί με βιταμίνη C (π.χ. πορτοκαλάδα). Αν σας προκαλεί ναυτία ή δυσκοιλιότητα, επιλέξτε χηλικές (chelated / bisglycinate) ή λιποσωμιακές μορφές σιδήρου, οι οποίες είναι εξαιρετικά ήπιες για το στομάχι και δεν προκαλούν γαστρεντερικές διαταραχές.",
      },
    ],

    // 5. Medical Disclaimer & Αλληλεπιδράσεις
    disclaimer:
      "ΣΗΜΑΝΤΙΚΗ ΠΡΟΕΙΔΟΠΟΙΗΣΗ ΑΛΛΗΛΕΠΙΔΡΑΣΕΩΝ: Τα συμπληρώματα διατροφής δεν υποκαθιστούν μια ισορροπημένη δίαιτα. Εάν λαμβάνετε αντιπηκτικά φάρμακα (π.χ. Sintrom, Salospir), αποφύγετε υψηλές δόσεις Ωμέγα-3, Βιταμίνης E και Βιταμίνης K χωρίς ιατρική έγκριση. Ο σίδηρος και το ασβέστιο μειώνουν την απορρόφηση των αντιβιοτικών τετρακυκλίνης και της λεβοθυροξίνης (φάρμακο θυρεοειδούς) — διατηρείτε πάντα κενό τουλάχιστον 3-4 ωρών. Συμβουλευτείτε πάντα τον φαρμακοποιό ή τον γιατρό σας.",
  },

  "first-aid": {
    slug: "first-aid",
    title: "Οδηγός Πρώτων Βοηθειών & Οικιακού Φαρμακείου",
    breadcrumb: "Πρώτες Βοήθειες",
    headerBannerImage: "/guide/guide-first-aid-banner.webp",
    featuredImage: "/guide/guide-first-aid-banner.webp",
    introHeading: "Οδηγός Πρώτων Βοηθειών & Οικιακού Φαρμακείου",
    introText:
      "Ένα πλήρες και οργανωμένο φαρμακείο πρώτων βοηθειών σώζει ζωές και αποτρέπει επιπλοκές σε μικροτραυματισμούς, εγκαύματα, τσιμπήματα και αιφνίδια περιστατικά στο σπίτι, στο αυτοκίνητο ή στις διακοπές. Οι φαρμακοποιοί του ProPharmacy συγκέντρωσαν την απαραίτητη λίστα υλικών, επιστημονικά πρωτόκολλα αντιμετώπισης βήμα-προς-βήμα και τα κρίσιμα τηλέφωνα έκτακτης ανάγκης.",

    // 1. Τηλέφωνα Έκτακτης Ανάγκης (Emergency Box)
    emergencyNumbers: [
      {
        number: "166",
        label: "ΕΚΑΒ",
        description: "Ασθενοφόρο & Άμεση Ιατρική Βοήθεια",
        tel: "tel:166",
      },
      {
        number: "112",
        label: "Ευρωπαϊκός Αριθμός Έκτακτης Ανάγκης",
        description: "Λειτουργεί δωρεάν ακόμη και χωρίς σήμα ή κάρτα SIM",
        tel: "tel:112",
      },
      {
        number: "210 7793777",
        label: "Κέντρο Δηλητηριάσεων",
        description: "24ωρη καθοδήγηση για κατάποση φαρμάκων ή χημικών",
        tel: "tel:2107793777",
      },
      {
        number: "199",
        label: "Πυροσβεστική Υπηρεσία",
        description: "Απεγκλωβισμοί, πυρκαγιές & φυσικές καταστροφές",
        tel: "tel:199",
      },
    ],

    // 2. Interactive First-Aid Finder
    quickFinder: {
      title: "Άμεση Αντιμετώπιση Έκτακτης Ανάγκης",
      buttons: [
        { label: "Κόψιμο / Γδάρσιμο", targetId: "scenario-cuts", badge: "Αιμορραγία" },
        { label: "Έγκαυμα (Θερμικό / Ηλιακό)", targetId: "scenario-burns", badge: "Δροσερό νερό" },
        { label: "Τσίμπημα Εντόμου / Μέδουσας", targetId: "scenario-bites", badge: "Αμμωνία" },
        { label: "Χτύπημα / Διάστρεμμα", targetId: "scenario-sprains", badge: "Πρωτόκολλο R.I.C.E." },
      ],
    },

    // 3. Checklist «Το Βασικό Φαρμακείο του Σπιτιού» (13 Υλικά σε 3 Κατηγορίες)
    checklist: {
      title: "Το Βασικό Φαρμακείο του Σπιτιού",
      subtitle:
        "Όλα τα απαραίτητα υλικά υγείας χωρισμένα σε 3 βασικούς άξονες με δυνατότητα μαζικής προσθήκης στο καλάθι σας.",
      items: [
        // Υγειονομικό Υλικό / Επίδεση
        {
          id: "fa-item-1",
          name: "Αποστειρωμένες Γάζες 10x10cm (Κουτί 12 τμχ)",
          category: "Υγειονομικό Υλικό",
          recommendedBrand: "Master-Aid",
          price: 2.2,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-2",
          name: "Hansaplast Universal Αδιάβροχα Επιθέματα 40 τμχ",
          category: "Υγειονομικό Υλικό",
          recommendedBrand: "Hansaplast",
          price: 3.8,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-3",
          name: "Ελαστικός Επίδεσμος Ακινητοποίησης 10cm x 4m",
          category: "Υγειονομικό Υλικό",
          recommendedBrand: "Master-Aid",
          price: 1.9,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-4",
          name: "Υποαλλεργική Αυτοκόλλητη Ταινία / Λευκοπλάστ Μεταξωτό 2.5cm",
          category: "Υγειονομικό Υλικό",
          recommendedBrand: "Hansaplast",
          price: 2.5,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-5",
          name: "Αιμοστατικό Βαμβάκι με Αλγινικό Ασβέστιο 2g",
          category: "Υγειονομικό Υλικό",
          recommendedBrand: "Stop Hemo",
          price: 4.5,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },

        // Αντισηψία & Καθαρισμός Πληγών
        {
          id: "fa-item-6",
          name: "Οξυζενέ 10 vol για Αφρισμό & Καθαρισμό Πληγών 250ml",
          category: "Αντισηψία & Καθαρισμός",
          recommendedBrand: "Pharmacy Care",
          price: 1.4,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-7",
          name: "Betadine Δερματικό Διάλυμα Ιωδιούχου Ποβιδόνης 10% 30ml",
          category: "Αντισηψία & Καθαρισμός",
          recommendedBrand: "Betadine",
          price: 2.8,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-8",
          name: "Καθαρό Οινόπνευμα 70° (Μόνο για Εργαλεία & Άθικτο Δέρμα) 250ml",
          category: "Αντισηψία & Καθαρισμός",
          recommendedBrand: "Pharmacy Care",
          price: 1.8,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-9",
          name: "Clinofar Αμπούλες Στείρου Φυσιολογικού Ορού 30x5ml",
          category: "Αντισηψία & Καθαρισμός",
          recommendedBrand: "Clinofar",
          price: 4.8,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },

        // Βασικά Εργαλεία & Συσκευές
        {
          id: "fa-item-10",
          name: "Microlife Ψηφιακό Θερμόμετρο Ταχείας Ένδειξης 10 sec",
          category: "Βασικά Εργαλεία",
          recommendedBrand: "Microlife",
          price: 7.9,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-11",
          name: "Ανατομική Λαβίδα Αφαίρεσης Ακίδων από Ανοξείδωτο Ατσάλι",
          category: "Βασικά Εργαλεία",
          recommendedBrand: "Master-Aid",
          price: 3.2,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-12",
          name: "Ψαλιδάκι Γαζών με Στρογγυλεμένες Άκρες Ασφαλείας",
          category: "Βασικά Εργαλεία",
          recommendedBrand: "Master-Aid",
          price: 3.5,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
        {
          id: "fa-item-13",
          name: "Nexcare ColdHot Comfort Παγοκύστη Gel Πολλαπλών Χρήσεων",
          category: "Βασικά Εργαλεία",
          recommendedBrand: "3M Nexcare",
          price: 6.9,
          image: "/categories/pharmacy-banner-520x460.webp",
          inStock: true,
        },
      ],
    },

    // 4. Actionable Scenarios (Οδηγοί Αντιμετώπισης Βήμα-Βήμα)
    subSections: [
      {
        id: "scenario-cuts",
        title: "Επιφανειακά Κοψίματα & Γδαρσίματα",
        image: "/categories/pharmacy-banner-1.webp",
        protocolTitle: "Πρωτόκολλο 4 Βημάτων:",
        steps: [
          "1. Καθαρισμός: Ξεπλύνετε άμεσα με άφθονο φυσιολογικό ορό για απομάκρυνση ρύπων και χώματος.",
          "2. Αντισηψία: Εφαρμόστε Betadine ή ήπιο αντισηπτικό διάλυμα περιμετρικά της πληγής.",
          "3. Επούλωση: Απλώστε επουλωτική αντιβακτηριδιακή κρέμα (Avene Cicalfate+ ή Bepanthol).",
          "4. Κάλυψη: Προστατεύστε την περιοχή με αποστειρωμένη γάζα ή αδιάβροχο τσιρότο Hansaplast.",
        ],
        intro:
          "Τα μικρά κοψίματα επουλώνονται γρήγορα εάν αποφευχθεί η μόλυνση. Ποτέ μην ρίχνετε οινόπνευμα κατευθείαν μέσα στην ανοιχτή πληγή.",
        productHeading: "Προϊόντα για Κοψίματα",
        productGroups: [
          {
            categoryTitle: "Επούλωση & Προστασία Πληγών",
            products: [
              {
                id: "fa-cut-1",
                name: "Avene Cicalfate+ Επανορθωτική Προστατευτική Κρέμα 100ml",
                brand: "Avene",
                price: 11.9,
                originalPrice: 14.9,
                badges: ["Χωρίς Άρωμα", "Επουλωτικό", "Best Seller"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
              {
                id: "fa-cut-2",
                name: "Hansaplast Extra Robust Αδιάβροχα Επιθέματα Υψηλής Αντοχής 16 τμχ",
                brand: "Hansaplast",
                price: 3.5,
                originalPrice: 4.8,
                badges: ["Αδιάβροχο", "Ελαστικό"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
            ],
          },
        ],
      },
      {
        id: "scenario-burns",
        title: "Εγκαύματα (Θερμικά ή Ηλιακά)",
        image: "/images/flat-lay-health-still-life-arrangement-with-copy-space.jpg",
        protocolTitle: "Πρωτόκολλο Άμεσης Ανακούφισης:",
        steps: [
          "1. Ψύξη: Τοποθετήστε την περιοχή κάτω από τρεχούμενο, δροσερό νερό βρύσης για 10–15 λεπτά (ΠΟΤΕ πάγο).",
          "2. Ενυδάτωση: Απλώστε άμεσα ειδική υδρογέλη εγκαυμάτων Flamigel ή αναπλαστική κρέμα Bepanthen.",
          "3. Προσοχή: Μην σπάτε ποτέ τις φουσκάλες (φλύκταινες) – αποτελούν φυσική ασπίδα κατά των μικροβίων.",
          "4. Επίδεση: Καλύψτε χαλαρά με αποστειρωμένο αντικολλητικό επίθεμα εγκαυμάτων χωρίς να πιέζετε.",
        ],
        intro:
          "Στα εγκαύματα 1ου και 2ου βαθμού, η ταχεία ψύξη σταματά την εξάπλωση του θερμικού εγκαύματος στα βαθύτερα στρώματα του δέρματος.",
        productHeading: "Σκευάσματα για Εγκαύματα",
        productGroups: [
          {
            categoryTitle: "Υδρογέλες & Επουλωτικές Κρέμες",
            products: [
              {
                id: "fa-burn-1",
                name: "Flamigel Hydroactive Colloid Gel για Εγκαύματα & Πληγές 50g",
                brand: "Flamigel",
                price: 7.9,
                originalPrice: 10.5,
                badges: ["Υδρογέλη", "Άμεση Δροσιά", "Top Pick"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
              {
                id: "fa-burn-2",
                name: "Bepanthol Protective Ointment Αναπλαστική Αλοιφή 100g",
                brand: "Bepanthol",
                price: 8.8,
                originalPrice: 11.5,
                badges: ["5% Προβιταμίνη B5", "Εγκαύματα"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
            ],
          },
        ],
      },
      {
        id: "scenario-bites",
        title: "Τσιμπήματα Εντόμων & Μέδουσας",
        image: "/categories/supliromata-banner-1.webp",
        protocolTitle: "Πρωτόκολλο Εξουδετέρωσης Δηλητηρίου:",
        steps: [
          "1. Αφαίρεση: Απομακρύνετε προσεκτικά το κεντρί ή τα πλοκάμια (με λαβίδα ή σκληρή κάρτα, χωρίς πίεση).",
          "2. Αμμωνία: Εφαρμόστε άμεσα roll-on αμμωνίας (After-Bite) για να εξουδετερώσετε το όξινο δηλητήριο.",
          "3. Κνησμός: Σε έντονο πρήξιμο, απλώστε αντιισταμινικό τζελ (Fenistil) ή ήπια κρέμα κορτιζόνης.",
          "4. Συναγερμός: Εάν παρουσιαστεί οίδημα στο λαιμό, δύσπνοια ή ζάλη, καλέστε ΑΜΕΣΩΣ το 166 (αναφυλαξία).",
        ],
        intro:
          "Η έγκαιρη εφαρμογή αμμωνίας μέσα στα πρώτα 3 λεπτά αναστέλλει πλήρως τη φλεγμονή και τον πόνο από τσιμπήματα σφήκας, μέλισσας ή τσούχτρας.",
        productHeading: "Προϊόντα για Τσιμπήματα",
        productGroups: [
          {
            categoryTitle: "After-Bite & Αντιισταμινικά",
            products: [
              {
                id: "fa-bite-1",
                name: "After Bite Roll-On Στικ με Αμμωνία για Άμεση Ανακούφιση 14ml",
                brand: "After Bite",
                price: 4.5,
                originalPrice: 6.0,
                badges: ["Άμεση Δράση", "Αμμωνία"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
              {
                id: "fa-bite-2",
                name: "Fenistil 0.1% Gel για Κνησμό, Τσιμπήματα & Ερεθισμούς 30g",
                brand: "Fenistil",
                price: 4.9,
                originalPrice: 6.5,
                badges: ["Αντιισταμινικό", "Χωρίς Χρώμα"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
            ],
          },
        ],
      },
      {
        id: "scenario-sprains",
        title: "Διαστρέμματα, Χτυπήματα & Μώλωπες",
        image: "/guide/guide-first-aid-banner.webp",
        protocolTitle: "Πρωτόκολλο R.I.C.E. (Ανάπαυση, Πάγος, Συμπίεση, Ανύψωση):",
        steps: [
          "1. Rest (Ανάπαυση): Σταματήστε κάθε δραστηριότητα και ακινητοποιήστε το τραυματισμένο μέλος.",
          "2. Ice (Πάγος): Εφαρμόστε παγοκύστη τυλιγμένη σε πετσέτα ή ψυκτικό Ice Spray για 15-20 λεπτά ανά 2 ώρες.",
          "3. Compression (Συμπίεση): Τυλίξτε με ελαστικό επίδεσμο μέτριας πίεσης για περιορισμό του οιδήματος.",
          "4. Elevation (Ανύψωση): Κρατήστε το μέλος ψηλότερα από το ύψος της καρδιάς για αποστράγγιση των υγρών.",
        ],
        intro:
          "Το πρωτόκολλο R.I.C.E. τις πρώτες 48 ώρες μειώνει το πρήξιμο κατά 60% και επιταχύνει τη διαδικασία αποκατάστασης των συνδέσμων.",
        productHeading: "Προϊόντα για Μώλωπες & Διαστρέμματα",
        productGroups: [
          {
            categoryTitle: "Ψυκτικά Σπρέι & Τζελ Άρνικας",
            products: [
              {
                id: "fa-spr-1",
                name: "Master-Aid Ice Spray Ψυκτικό Σπρέι Άμεσης Ανακούφισης 400ml",
                brand: "Master-Aid",
                price: 6.8,
                originalPrice: 9.2,
                badges: ["Ψυκτικό Σπρέι", "Αθλητισμός"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
              {
                id: "fa-spr-2",
                name: "Arnidol Gel Stick με Άρνικα & Αρπαγόφυτο για Χτυπήματα 15g",
                brand: "Arnidol",
                price: 7.2,
                originalPrice: 9.8,
                badges: ["Κατάλληλο για Παιδιά", "Άρνικα"],
                image: "/categories/pharmacy-banner-520x460.webp",
              },
            ],
          },
        ],
      },
    ],

    // 5. Εξειδικευμένα Κιτ (Kits by Need / Cross-Selling)
    bundles: [
      {
        id: "kit-car",
        title: "Κιτ Αυτοκινήτου & Ταξιδιού",
        subtitle: "Συμπαγές, ανθεκτικό στη θερμότητα, απαραίτητο για κάθε όχημα και απόδραση.",
        badge: "Travel Safe",
        price: 19.9,
        originalPrice: 26.5,
        items: [
          "Δραμαμίνες / Ταξιδιωτική ναυτία",
          "Hansaplast αδιάβροχα τσιρότα",
          "Αντισηπτικά μαντηλάκια χεριών",
          "Ψηφιακό θερμόμετρο",
          "Μάσκα τεχνητής αναπνοής CPR",
          "Ισοθερμική κουβέρτα επιβίωσης",
        ],
        image: "/categories/pharmacy-banner-520x460.webp",
      },
      {
        id: "kit-family",
        title: "Οικογενειακό Κιτ (με Παιδιά)",
        subtitle: "Πλήρης εξοπλισμός για παιδικές πτώσεις, γρατζουνιές, πυρετό και μελανιές.",
        badge: "Family Care",
        price: 27.5,
        originalPrice: 36.0,
        items: [
          "Θερμόμετρο υπερύθρων ταχείας μέτρησης",
          "Παιδικά τσιρότα με χαρούμενα σχέδια",
          "Arnidol stick άρνικας για καρούμπαλα",
          "Αυτοκόλλητα επιθέματα δροσιάς πυρετού",
          "Φυσιολογικός ορός σε αμπούλες",
          "Επουλωτική κρέμα Bepanthol",
        ],
        image: "/categories/goneis-kai-paidia-banner-520x460.webp",
      },
      {
        id: "kit-camping",
        title: "Κιτ Καλοκαιριού & Camping",
        subtitle: "Προστασία από έντομα, ήλιο, τραυματισμούς στη φύση και θερμοπληξία.",
        badge: "Outdoor & Camp",
        price: 22.8,
        originalPrice: 30.5,
        items: [
          "Εντομοαπωθητικό σπρέι μέγιστης διάρκειας",
          "Roll-on αμμωνίας για τσιμπήματα",
          "Flamigel υδρογέλη για εγκαύματα",
          "Ηλεκτρολύτες σε φακελίσκους (ενυδάτωση)",
          "Ελαστικός επίδεσμος & αιμοστατικό",
          "Αδιάβροχη θήκη προστασίας",
        ],
        image: "/guide/guide-first-aid-banner.webp",
      },
    ],

    // 6. Τι ΔΕΝ πρέπει να κάνετε (Myth Busters)
    myths: [
      {
        myth: "Βάζουμε καθαρό οινόπνευμα ή Betadine κατευθείαν μέσα σε ανοιχτή πληγή.",
        truth:
          "Το οινόπνευμα και το ιώδιο καίνε τα ζωντανά κύτταρα των ιστών, προκαλούν έντονο πόνο και καθυστερούν δραματικά την επούλωση. Χρησιμοποιήστε αποκλειστικά αποστειρωμένο φυσιολογικό ορό για το πλύσιμο της πληγής.",
      },
      {
        myth: "Βάζουμε πάγο, οδοντόκρεμα ή λάδι/βούτυρο σε θερμικό έγκαυμα.",
        truth:
          "Ο πάγος προκαλεί θερμικό σοκ και κρυοπάγημα στα ευαίσθητα κύτταρα, ενώ το λάδι και το βούτυρο παγιδεύουν τη θερμότητα μέσα στο δέρμα και ευνοούν επικίνδυνες λοιμώξεις. Μοναδική ενδεδειγμένη κίνηση: άφθονο τρεχούμενο δροσερό νερό βρύσης για 10-15 λεπτά.",
      },
      {
        myth: "Προκαλούμε εμετό αν κάποιος καταπιεί απορρυπαντικό ή χλωρίνη.",
        truth:
          "Ο εμετός αναγκάζει το καυστικό χημικό να περάσει για δεύτερη φορά από τον οισοφάγο και τον λάρυγγα, προκαλώντας καταστροφικά εσωτερικά εγκαύματα και κίνδυνο εισρόφησης στους πνεύμονες. Καλέστε άμεσα το Κέντρο Δηλητηριάσεων (210 7793777).",
      },
      {
        myth: "Σε ρινορραγία (αιμορραγία μύτης) γέρνουμε το κεφάλι προς τα πίσω.",
        truth:
          "Αν γείρετε το κεφάλι πίσω, το αίμα κυλάει στον φάρυγγα και το στομάχι, προκαλώντας ναυτία, εμετό και κίνδυνο πνιγμού. Γείρετε ελαφρώς προς τα ΕΜΠΡΟΣ και πιέστε σταθερά τα μαλακά πτερύγια της μύτης για 5-10 λεπτά.",
      },
    ],

    // 7. FAQs
    faqs: [
      {
        question: "Κάθε πότε πρέπει να ελέγχω την ημερομηνία λήξης του οικιακού φαρμακείου;",
        answer:
          "Συνιστάται τακτικός έλεγχος τουλάχιστον δύο φορές το χρόνο (ιδανικά με την αλλαγή της ώρας, άνοιξη και φθινόπωρο). Απομακρύνετε ανοιγμένα σιρόπια (λήγουν συνήθως σε 1-3 μήνες μετά το άνοιγμα), αλλοιωμένα κολλύρια και ληγμένα αποστειρωμένα υλικά, παραδίδοντάς τα στους ειδικούς κάδους ανακύκλωσης φαρμάκων του φαρμακείου.",
      },
      {
        question: "Πού είναι το ιδανικό σημείο για να τοποθετήσω το φαρμακείο στο σπίτι;",
        answer:
          "Τοποθετήστε το σε ξηρό, δροσερό και σκιερό σημείο (θερμοκρασία <25°C), μακριά από υγρασία και ζέστη. Το μπάνιο και η κουζίνα είναι τα χειρότερα μέρη λόγω υδρατμών. Φροντίστε να βρίσκεται ψηλά ώστε να μην έχουν πρόσβαση μικρά παιδιά, αλλά να είναι άμεσα προσβάσιμο από ενήλικες σε ώρα ανάγκης.",
      },
      {
        question: "Πότε ένα κόψιμο χρειάζεται ράμματα στο νοσοκομείο;",
        answer:
          "Ράμματα απαιτούνται εάν: η πληγή είναι βαθύτερη από 5-6 χιλιοστά, τα χείλη της πληγής μένουν ανοιχτά και δεν ενώνονται, διακρίνεται λίπος ή μυς, η αιμορραγία δεν σταματά μετά από 10 λεπτά συνεχούς πίεσης, ή αν το τραύμα προκλήθηκε από σκουριασμένο ή βρώμικο αντικείμενο (έλεγχος για αντιτετανικό εμβόλιο).",
      },
      {
        question: "Ποια είναι η διαφορά ανάμεσα σε απλό τσιρότο και υδροκολλοειδές επίθεμα;",
        answer:
          "Τα απλά τσιρότα προστατεύουν μηχανικά από τριβές και σκόνη. Τα υδροκολλοειδή επιθέματα (όπως Compeed) δημιουργούν ένα υγρό θεραπευτικό περιβάλλον (gel) που ανακουφίζει άμεσα από τον πόνο, επιταχύνει την επούλωση κατά 40% και είναι 100% αδιάβροχα.",
      },
    ],

    // 8. Disclaimer
    disclaimer:
      "ΕΠΕΙΓΟΥΣΑ ΙΑΤΡΙΚΗ ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Ο παρών οδηγός παρέχει πρακτικές συμβουλές πρώτων βοηθειών και δεν υποκαθιστά την επείγουσα ιατρική διάγνωση και φροντίδα. Σε περιπτώσεις απώλειας αισθήσεων, έντονης αιμορραγίας που δεν ελέγχεται, σοβαρής δύσπνοιας, εγκαύματος εκτεταμένης επιφάνειας (>10% του σώματος) ή υποψίας κατάγματος, καλέστε ΑΜΕΣΩΣ το ΕΚΑΒ (166) ή μεταβείτε στο πλησιέστερο εφημερεύον νοσοκομείο.",
  },

  "face-care": {
    slug: "face-care",
    title: "Οδηγός Περιποίησης Προσώπου",
    breadcrumb: "Περιποίηση Προσώπου",
    headerBannerImage: "/guide/guide-banner-Facial-Care.webp",
    featuredImage: "/guide/guide-banner-Facial-Care.webp",
    introHeading: "Ολοκληρωμένος Οδηγός Περιποίησης Προσώπου",
    introText:
      "Η επιδερμίδα του προσώπου είναι ο καθρέφτης της υγείας μας και καθημερινά εκτίθεται σε ρύπανση, στρες και UV ακτινοβολία. Οι φαρμακοποιοί και δερμοκαλλυντικοί σύμβουλοι του ProPharmacy ετοίμασαν τον απόλυτο πρακτικό οδηγό για τη σωστή σειρά εφαρμογής (layering), τους κανόνες συνδυασμού δραστικών συστατικών και τις εξατομικευμένες ρουτίνες ανά τύπο δέρματος.",
    quizEnabled: true,

    // 1. Βασικοί Άξονες Ρουτίνας
    sections: [
      {
        number: "1.",
        title: "Ήπιος Καθαρισμός & Διπλό Ντεμακιγιάζ",
        items: [
          "Πρωί & Βράδυ: Απαραίτητο πρώτο βήμα για απομάκρυνση σμήγματος, νεκρών κυττάρων, ρύπων και μακιγιάζ χωρίς να διαταράσσεται ο υδρολιπιδικός φραγμός.",
          "Επιλογή βάσει τύπου: Αφρίζον τζελ χωρίς σαπούνι για λιπαρές/ακνεϊκές επιδερμίδες, ενυδατικό κρεμώδες γαλάκτωμα ή balm για ξηρές/ευαίσθητες.",
        ],
      },
      {
        number: "2.",
        title: "Στοχευμένοι Οροί (Serums) & Ενεργά Συστατικά",
        items: [
          "Υψηλή συγκέντρωση: Τα serums διεισδύουν βαθύτερα από τις κρέμες χάρη στα μικρομόριά τους.",
          "Στρατηγική 24ώρου: Αντιοξειδωτική Βιταμίνη C το πρωί για λάμψη και φωτοπροστασία · Ρετινόλη ή οξέα AHA/BHA το βράδυ για κυτταρική ανανέωση.",
        ],
      },
      {
        number: "3.",
        title: "Ενυδάτωση, Θρέψη & Προστασία Φραγμού",
        items: [
          "Κλείδωμα υγρασίας: Η κρέμα ημέρας/νύχτας σφραγίζει τα δραστικά συστατικά των ορών και αναπληρώνει τα διαδερμικά λιπίδια.",
          "Κεραμίδια & Νιασιναμίδη: Τα δύο χρυσά συστατικά που αναδομούν τον προστατευτικό φραγμό και καταπραΰνουν κοκκινίλες.",
        ],
      },
      {
        number: "4.",
        title: "Καθημερινή Αντηλιακή Προστασία (SPF 30/50+)",
        items: [
          "365 ημέρες τον χρόνο: Το 80% της πρόωρης γήρανσης, των κηλίδων και των ρυτίδων οφείλεται στην ακτινοβολία UVA που διαπερνά σύννεφα και τζάμια.",
          "Τελευταίο πρωινό βήμα: Εφαρμόστε ποσότητα 2 δακτύλων σε πρόσωπο, λαιμό και αυτιά 20 λεπτά πριν την έκθεση.",
        ],
      },
    ],

    // 2. Οδηγός Ρουτίνας «Βήμα-Βήμα» (Πρωί vs Βράδυ)
    layeringGuide: {
      title: "Οδηγός Ρουτίνας «Βήμα-Βήμα» (Πρωί vs Βράδυ)",
      subtitle:
        "Ο σωστός κανόνας layering: από την πιο λεπτόρρευστη υφή στην πιο πλούσια, για μέγιστη απορρόφηση χωρίς υπερφόρτωση της επιδερμίδας.",
      steps: [
        {
          stepNumber: 1,
          title: "Καθαρισμός",
          morning: {
            action: "Ήπιο τζελ ή νερό micellar",
            example: "Απομάκρυνση νυχτερινού σμήγματος και εφίδρωσης χωρίς τρίψιμο.",
          },
          evening: {
            action: "Διπλός καθαρισμός (έλαιο/balm + τζελ)",
            example: "Το έλαιο διαλύει αντηλιακό και μακιγιάζ, το τζελ απομακρύνει τους υδατοδιαλυτούς ρύπους.",
          },
        },
        {
          stepNumber: 2,
          title: "Τόνωση / Essence",
          morning: {
            action: "Ενυδατική λοσιόν / ιαματικό νερό",
            example: "Επαναφέρει το φυσιολογικό pH (5.5) και προετοιμάζει το δέρμα για τον ορό.",
          },
          evening: {
            action: "Τονωτική λοσιόν με AHA/BHA (αν χρειάζεται)",
            example: "Χημική απολέπιση 2-3 φορές την εβδομάδα για λεία υφή και καθαρούς πόρους.",
          },
        },
        {
          stepNumber: 3,
          title: "Στοχευμένος Ορός (Serum)",
          morning: {
            action: "Βιταμίνη C ή Υαλουρονικό Οξύ",
            example: "Προστασία από ελεύθερες ρίζες, μείωση δυσχρωμιών και βαθιά ενυδάτωση.",
          },
          evening: {
            action: "Ρετινόλη, Πεπτίδια ή Νιασιναμίδη",
            example: "Διέγερση παραγωγής κολλαγόνου, λείανση ρυτίδων και κυτταρική επανόρθωση.",
          },
        },
        {
          stepNumber: 4,
          title: "Φροντίδα Ματιών",
          morning: {
            action: "Ενυδατική κρέμα ματιών / κατά των μαύρων κύκλων",
            example: "Ελαφριά υφή gel με καφεΐνη ή υαλουρονικό για αποσυμφόρηση και φωτεινότητα.",
          },
          evening: {
            action: "Αντιρυτιδική / συσφικτική κρέμα ματιών",
            example: "Πλούσια σύνθεση με πεπτίδια ή ήπια ρετινόλη για το «πόδι της χήνας».",
          },
        },
        {
          stepNumber: 5,
          title: "Ενυδάτωση & Φραγμός",
          morning: {
            action: "Ελαφριά κρέμα ημέρας (gel-cream)",
            example: "Κλειδώνει την υγρασία χωρίς να βαραίνει πριν το μακιγιάζ ή το αντηλιακό.",
          },
          evening: {
            action: "Πλούσια επανορθωτική κρέμα νύχτας",
            example: "Αναπληρώνει κεραμίδια και λιπίδια κατά τη διάρκεια της νυχτερινής ανάπλασης.",
          },
        },
        {
          stepNumber: 6,
          title: "Προστασία",
          morning: {
            action: "Αντηλιακό SPF 30 / SPF 50+",
            example: "Το απόλυτο μη-διαπραγματεύσιμο βήμα ενάντια σε φωτογήρανση και κηλίδες.",
          },
          evening: {
            action: "Τέλος βραδινής ρουτίνας",
            example: "Η επιδερμίδα αναπνέει και ανανεώνεται κατά τον νυχτερινό ύπνο.",
          },
        },
      ],
    },

    // 3. Φίλτρο «Επίλεξε με βάση τον Τύπο Δέρματός σου» (Routine by Skin Type)
    skinTypesGuide: {
      title: "Επίλεξε με βάση τον Τύπο Δέρματός σου",
      subtitle:
        "Εξειδικευμένες ρουτίνες και ενεργά συστατικά προσαρμοσμένα στις ακριβείς βιολογικές ανάγκες της δικής σας επιδερμίδας.",
      types: [
        {
          id: "oily-acne",
          name: "Λιπαρό / Με τάση Ακμής",
          badge: "Σμηγματορρύθμιση & Πόροι",
          keyIngredients: "Σαλικυλικό οξύ (BHA), Νιασιναμίδη, Ψευδάργυρος, Υαλουρονικό σε fluid",
          description:
            "Χαρακτηρίζεται από έντονη γυαλάδα στη ζώνη Τ, διεσταλμένους πόρους, μαύρα στίγματα και συχνές φλεγμονώδεις βλάβες (σπυράκια).",
          routineSteps: [
            "Καθαρισμός: Αφρώδες τζελ με σαλικυλικό οξύ και ψευδάργυρο χωρίς σαπούνι",
            "Serum: Νιασιναμίδη 10% για ρύθμιση λιπαρότητας και σμίκρυνση πόρων",
            "Ενυδάτωση: Ελαφριά oil-free μη φαγεσωρογόνος κρέμα-gel",
            "Αντηλιακό: Ματ dry-touch αντηλιακό fluid SPF 50+ με σμηγματορρυθμιστική δράση",
          ],
          tip: "Μην αφυδατώνετε υπερβολικά το δέρμα με σκληρά οινόπνευμα — προκαλείται αντιδραστική υπερέκκριση σμήγματος.",
          products: [
            {
              id: "fc-oily-1",
              name: "La Roche-Posay Effaclar Duo+ M Επανορθωτική Φροντίδα 40ml",
              brand: "La Roche-Posay",
              price: 15.2,
              originalPrice: 19.0,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-oily-2",
              name: "The Ordinary Niacinamide 10% + Zinc 1% Ορός 30ml",
              brand: "The Ordinary",
              price: 7.9,
              originalPrice: 9.5,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-oily-3",
              name: "Avene Cleanance Solar Αντηλιακό Προσώπου SPF50+ για Λιπαρό Δέρμα 50ml",
              brand: "Avene",
              price: 14.8,
              originalPrice: 19.5,
              image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-oily-4",
              name: "CeraVe Blemish Control Cleanser Τζελ Καθαρισμού κατά των Ατελειών 236ml",
              brand: "CeraVe",
              price: 11.5,
              originalPrice: 14.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "dry-dehydrated",
          name: "Ξηρό / Αφυδατωμένο",
          badge: "Εντατική Θρέψη & Λιπίδια",
          keyIngredients: "Κεραμίδια (Ceramides 1, 3, 6-II), Υαλουρονικό Οξύ, Σκουαλάνιο, Γλυκερίνη",
          description:
            "Έντονη αίσθηση τραβήγματος μετά τον καθαρισμό, τραχιά υφή, θαμπή όψη, λεπτές γραμμές αφυδάτωσης και ευαισθησία στο κρύο.",
          routineSteps: [
            "Καθαρισμός: Κρεμώδες ενυδατικό γαλάκτωμα ή καθαριστικό λάδι χωρίς αφρό",
            "Serum: Ορός υαλουρονικού οξέος πολλαπλού μοριακού βάρους σε νωπό δέρμα",
            "Ενυδάτωση: Πλούσια επανορθωτική κρέμα εμπλουτισμένη με κεραμίδια και λιπίδια",
            "Αντηλιακό: Ενυδατική αντηλιακή κρέμα SPF 50+ με αντιοξειδωτικά",
          ],
          tip: "Εφαρμόζετε πάντα τον ορό υαλουρονικού οξέος σε ελαφρώς νωπό δέρμα και «κλειδώνετε» αμέσως με την ενυδατική κρέμα.",
          products: [
            {
              id: "fc-dry-1",
              name: "CeraVe Hydrating Cleanser Ενυδατική Κρέμα Καθαρισμού 473ml",
              brand: "CeraVe",
              price: 13.5,
              originalPrice: 16.9,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-dry-2",
              name: "Vichy Mineral 89 Ενυδατικό Booster Υαλουρονικού Οξέος 50ml",
              brand: "Vichy",
              price: 19.8,
              originalPrice: 24.5,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-dry-3",
              name: "CeraVe Moisturising Cream Ενυδατική Κρέμα Προσώπου & Σώματος 340g",
              brand: "CeraVe",
              price: 14.5,
              originalPrice: 18.2,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-dry-4",
              name: "La Roche-Posay Anthelios UVMune 400 Hydrating Cream SPF50+ 50ml",
              brand: "La Roche-Posay",
              price: 16.5,
              originalPrice: 21.0,
              image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "sensitive-redness",
          name: "Ευαίσθητο / Με κοκκινίλες (Ροδόχρους)",
          badge: "Καταπράυνση & Ανοχή",
          keyIngredients: "Νευροσενσίνη, Ιαματικό Νερό, Madecassoside, Χωρίς Άρωμα / Οινόπνευμα",
          description:
            "Υπεραντιδραστικό δέρμα με τάση για ερυθρότητα, αίσθημα καύσου, τσιμπήματος και έντονη δυσανεξία σε κοινά καλλυντικά.",
          routineSteps: [
            "Καθαρισμός: Καταπραϋντικό νερό Micellar ή γαλάκτωμα χωρίς ξέβγαλμα και χωρίς τρίψιμο",
            "Τόνωση: Άφθονος ψεκασμός με φυσικό ιαματικό νερό πλούσιο σε ιχνοστοιχεία",
            "Ενυδάτωση: Αποστειρωμένη κρέμα καταπράυνσης εξαιρετικά υψηλής ανοχής (χωρίς συντηρητικά)",
            "Αντηλιακό: 100% ορυκτό/φυσικό αντηλιακό ή σύνθεση κατά της ερυθρότητας SPF 50+",
          ],
          tip: "Αποφύγετε τα μηχανικά scrubs με κόκκους, τα έντονα αρώματα, τα αιθέρια έλαια και το πολύ ζεστό νερό.",
          products: [
            {
              id: "fc-sens-1",
              name: "Bioderma Sensibio H2O Καταπραϋντικό Νερό Micellar 500ml",
              brand: "Bioderma",
              price: 12.9,
              originalPrice: 17.0,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-sens-2",
              name: "Avene Tolerance Control Soothing Skin Recovery Cream 40ml",
              brand: "Avene",
              price: 16.9,
              originalPrice: 21.5,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-sens-3",
              name: "La Roche-Posay Toleriane Dermallergo Ενυδατική Κρέμα 40ml",
              brand: "La Roche-Posay",
              price: 18.2,
              originalPrice: 23.0,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-sens-4",
              name: "Avene Cicalfate+ Επανορθωτική Προστατευτική Κρέμα 100ml",
              brand: "Avene",
              price: 11.9,
              originalPrice: 14.9,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "mature-antiaging",
          name: "Ώριμο δέρμα / Αντιγήρανση",
          badge: "Σύσφιξη & Κυτταρική Ανανέωση",
          keyIngredients: "Καθαρή Ρετινόλη, Πεπτίδια, Βιταμίνη C, Υαλουρονικό 3 μεγεθών",
          description:
            "Απώλεια ελαστικότητας και σφριγηλότητας, εγκατεστημένες ρυτίδες έκφρασης, κηλίδες φωτογήρανσης και λέπτυνση της επιδερμίδας.",
          routineSteps: [
            "Καθαρισμός: Ήπιος ενυδατικός καθαρισμός που διατηρεί τον λιπιδικό φραγμό",
            "Πρωινό Serum: Βιταμίνη C 10% για αντιοξειδωτική λάμψη και καταπολέμηση δυσχρωμιών",
            "Βραδινό Serum: Ρετινόλη σταδιακής αποδέσμευσης για κυτταρική ανάπλαση και λείανση",
            "Ενυδάτωση & Μάτια: Συσφικτική κρέμα με πεπτίδια και εξειδικευμένη κρέμα ματιών",
            "Αντηλιακό: Αντηλιακό fluid ευρέος φάσματος SPF 50+ με αντιγηραντικά πεπτίδια",
          ],
          tip: "Εισάγετε τη ρετινόλη σταδιακά: 2 φορές την εβδομάδα το πρώτο 15ήμερο και εφαρμόστε πάντα ενυδατική κρέμα («μέθοδος σάντουιτς»).",
          products: [
            {
              id: "fc-mat-1",
              name: "La Roche-Posay Pure Vitamin C10 Αντιοξειδωτικός Ορός Λάμψης 30ml",
              brand: "La Roche-Posay",
              price: 34.9,
              originalPrice: 43.5,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-mat-2",
              name: "La Roche-Posay Retinol B3 Serum Αντιρυτιδικός Ορός Ανάπλασης 30ml",
              brand: "La Roche-Posay",
              price: 36.5,
              originalPrice: 45.0,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-mat-3",
              name: "La Roche-Posay Hyalu B5 Eyes Αντιρυτιδική Κρέμα Ματιών 15ml",
              brand: "La Roche-Posay",
              price: 21.5,
              originalPrice: 27.0,
              image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "fc-mat-4",
              name: "Frezyderm Sun Screen Velvet Face SPF50+ Αντηλιακό Προσώπου 50ml",
              brand: "Frezyderm",
              price: 17.5,
              originalPrice: 23.0,
              image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
      ],
    },

    // 4. Cheat Sheet: Ενεργά Συστατικά — «Τι συνδυάζεται με τι;»
    ingredientCombinations: {
      title: "Cheat Sheet: Ενεργά Συστατικά — «Τι συνδυάζεται με τι;»",
      subtitle:
        "Ο απόλυτος επιστημονικός οδηγός του φαρμακείου για ασφαλές mix & match δραστικών μορίων χωρίς ερεθισμούς.",
      dos: [
        {
          pair: "Βιταμίνη C + Αντηλιακό (SPF 50+)",
          rule: "Το Απόλυτο Πρωινό Δίδυμο",
          reason:
            "Η Βιταμίνη C εξουδετερώνει τις ελεύθερες ρίζες που καταφέρνουν να διαπεράσουν τα αντηλιακά φίλτρα. Σε συνδυασμό με το αντηλιακό, προσφέρει 8πλάσια φωτοπροστασία από ό,τι το κάθε προϊόν ξεχωριστά.",
          badge: "Gold Standard Πρωινού",
        },
        {
          pair: "Υαλουρονικό Οξύ + Οποιοδήποτε Συστατικό",
          rule: "Οικουμενικός Σύμμαχος Ενυδάτωσης",
          reason:
            "Το υαλουρονικό οξύ είναι ουδέτερο ενυδατικό μόριο που δεν αλληλεπιδρά αρνητικά με κανένα οξύ ή βιταμίνη. Ενυδατώνει βαθιά και βοηθά στην καλύτερη διείσδυση όλων των επόμενων θεραπειών.",
          badge: "100% Συμβατό",
        },
        {
          pair: "Νιασιναμίδη (Β3) + Ρετινόλη",
          rule: "Συνεργιστική Επανόρθωση",
          reason:
            "Η νιασιναμίδη ενισχύει τον δερματικό φραγμό, διεγείρει την παραγωγή κεραμιδίων και μετριάζει δραστικά την ξηρότητα ή το ξεφλούδισμα που ενδέχεται να προκαλέσει η ρετινόλη.",
          badge: "Ιδανικό Βραδινό Mix",
        },
      ],
      donts: [
        {
          pair: "Ρετινόλη + Οξέα Απολέπισης (AHA / BHA / Γλυκολικό / Σαλικυλικό)",
          rule: "ΠΟΤΕ ταυτόχρονα στο ίδιο βράδυ",
          reason:
            "Και τα δύο επιταχύνουν δραστικά την κυτταρική ανανέωση. Η ταυτόχρονη χρήση τους οδηγεί σε έγκαυμα, έντονη ερυθρότητα και καταστροφή του επιδερμικού φραγμού. Εφαρμόστε τα σε εναλλάξ βράδια (skin cycling).",
          badge: "Κίνδυνος Ερεθισμού",
        },
        {
          pair: "Βιταμίνη C Υψηλής Συγκέντρωσης + Ρετινόλη",
          rule: "Μην τα αναμιγνύετε στο ίδιο βήμα",
          reason:
            "Η καθαρή Βιταμίνη C (ασκορβικό οξύ) απαιτεί χαμηλό όξινο pH (<3.5) για να απορροφηθεί, ενώ η ρετινόλη λειτουργεί σε υψηλότερο pH (~5.5-6). Χρησιμοποιήστε Βιταμίνη C το πρωί και Ρετινόλη το βράδυ.",
          badge: "Διαφορετικό pH",
        },
      ],
    },

    // 5. Πλήρεις Υποενότητες Προϊόντων (High-Converting Pharmacy Categories)
    subSections: [
      {
        id: "cleansers-section",
        title: "1. Ήπιος Καθαρισμός & Ντεμακιγιάζ",
        image: "/categories/gia-to-prosopo-banner-category.webp",
        intro:
          "Ο σωστός καθαρισμός απομακρύνει αποτελεσματικά τους ατμοσφαιρικούς ρύπους, το σμήγμα και το μακιγιάζ, διατηρώντας ακέραιο τον επιδερμικό φραγμό. Επιλέξτε σύνθεση που σέβεται το φυσιολογικό pH της επιδερμίδας σας.",
        productHeading: "Προτεινόμενα Καθαριστικά Προσώπου",
        productGroups: [
          {
            categoryTitle: "Αφρώδη Gel Καθαρισμού",
            products: [
              {
                id: "fc-cl-1",
                name: "CeraVe Foaming Cleanser Αφρίζον Τζελ Καθαρισμού 473ml",
                brand: "CeraVe",
                price: 13.9,
                originalPrice: 17.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-cl-2",
                name: "La Roche-Posay Effaclar Purifying Foaming Gel 400ml",
                brand: "La Roche-Posay",
                price: 16.2,
                originalPrice: 20.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-cl-3",
                name: "Avene Cleanance Cleansing Gel για Λιπαρό Δέρμα 400ml",
                brand: "Avene",
                price: 14.5,
                originalPrice: 18.9,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Νερά Micellar & Ενυδατικά Γαλακτώματα",
            products: [
              {
                id: "fc-cl-4",
                name: "Bioderma Sensibio H2O Καταπραϋντικό Νερό Micellar 500ml",
                brand: "Bioderma",
                price: 12.9,
                originalPrice: 17.0,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-cl-5",
                name: "CeraVe Hydrating Cleanser Ενυδατική Κρέμα Καθαρισμού 473ml",
                brand: "CeraVe",
                price: 13.5,
                originalPrice: 16.9,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-cl-6",
                name: "La Roche-Posay Toleriane Dermo-Cleanser Γαλάκτωμα Καθαρισμού 400ml",
                brand: "La Roche-Posay",
                price: 15.8,
                originalPrice: 19.9,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "serums-section",
        title: "2. Στοχευμένοι Οροί & Ampoules (Serums)",
        image: "/guide/guide-banner-Facial-Care.webp",
        intro:
          "Οι οροί περιέχουν την υψηλότερη συγκέντρωση ενεργών μορίων και αποτελούν την «καρδιά» της ρουτίνας. Επιλέξτε αντιοξειδωτικά για την ημέρα και μόρια κυτταρικής ανανέωσης για τη νύχτα.",
        productHeading: "Κορυφαία Serums Φαρμακείου",
        productGroups: [
          {
            categoryTitle: "Αντιοξειδωτικά & Λάμψη (Βιταμίνη C & Νιασιναμίδη)",
            products: [
              {
                id: "fc-sr-1",
                name: "La Roche-Posay Pure Vitamin C10 Αντιοξειδωτικός Ορός Λάμψης 30ml",
                brand: "La Roche-Posay",
                price: 34.9,
                originalPrice: 43.5,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sr-2",
                name: "The Ordinary Niacinamide 10% + Zinc 1% Ορός Ρύθμισης Σμήγματος 30ml",
                brand: "The Ordinary",
                price: 7.9,
                originalPrice: 9.5,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sr-3",
                name: "Vichy Liftactiv Supreme Vitamin C 15% Αντιοξειδωτικός Ορός 20ml",
                brand: "Vichy",
                price: 31.5,
                originalPrice: 39.9,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Ενυδάτωση & Αντιγήρανση (Υαλουρονικό & Ρετινόλη)",
            products: [
              {
                id: "fc-sr-4",
                name: "Vichy Mineral 89 Ενυδατικό Booster Υαλουρονικού Οξέος 50ml",
                brand: "Vichy",
                price: 19.8,
                originalPrice: 24.5,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sr-5",
                name: "La Roche-Posay Retinol B3 Serum Αντιρυτιδικός Ορός Ανάπλασης 30ml",
                brand: "La Roche-Posay",
                price: 36.5,
                originalPrice: 45.0,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sr-6",
                name: "La Roche-Posay Hyalu B5 Serum Αντιρυτιδικός Ορός Επανόρθωσης 30ml",
                brand: "La Roche-Posay",
                price: 33.9,
                originalPrice: 42.0,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "eye-creams-section",
        title: "3. Φροντίδα & Επανόρθωση Ματιών",
        image: "/guide/back-view-woman-with-towel-head-applying-cream-skin.jpg",
        intro:
          "Το δέρμα γύρω από τα μάτια είναι 4 φορές πιο λεπτό από το υπόλοιπο πρόσωπο και στερείται σμηγματογόνων αδένων. Απαιτεί εξειδικευμένες οφθαλμολογικά ελεγμένες συνθέσεις για μαύρους κύκλους, σακούλες και ρυτίδες έκφρασης.",
        productHeading: "Κορυφαίες Κρέμες Ματιών",
        productGroups: [
          {
            categoryTitle: "Μαύροι Κύκλοι, Σακούλες & Πρώτες Ρυτίδες",
            products: [
              {
                id: "fc-eye-1",
                name: "CeraVe Eye Repair Cream Επανορθωτική Κρέμα Ματιών 14ml",
                brand: "CeraVe",
                price: 12.5,
                originalPrice: 15.9,
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-eye-2",
                name: "La Roche-Posay Hyalu B5 Eyes Αντιρυτιδική Φροντίδα Ματιών 15ml",
                brand: "La Roche-Posay",
                price: 21.5,
                originalPrice: 27.0,
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-eye-3",
                name: "Avene Soothing Eye Contour Cream Καταπραϋντική Κρέμα Ματιών 10ml",
                brand: "Avene",
                price: 13.9,
                originalPrice: 17.5,
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-eye-4",
                name: "Vichy Mineral 89 Eyes Ενυδατικό Gel Ματιών με Καφεΐνη 15ml",
                brand: "Vichy",
                price: 17.8,
                originalPrice: 22.5,
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "moisturizers-section",
        title: "4. Ενυδάτωση & Επανόρθωση Φραγμού",
        image: "/categories/gia-to-prosopo-banner.webp",
        intro:
          "Η σωστή ενυδατική κρέμα δεν προσφέρει απλώς νερό — αναδομεί τα μεσοκυττάρια λιπίδια και σφραγίζει τα ευεργετικά συστατικά του serum.",
        productHeading: "Ενυδατικές Κρέμες Ημέρας & Νύχτας",
        productGroups: [
          {
            categoryTitle: "Ελαφριές Υφές & Ματ Αποτέλεσμα",
            products: [
              {
                id: "fc-mo-1",
                name: "La Roche-Posay Effaclar Duo+ M Επανορθωτική Φροντίδα κατά των Ατελειών 40ml",
                brand: "La Roche-Posay",
                price: 15.2,
                originalPrice: 19.0,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-mo-2",
                name: "CeraVe PM Facial Moisturising Lotion Ενυδατική Λοσιόν Νυκτός 52ml",
                brand: "CeraVe",
                price: 12.9,
                originalPrice: 16.2,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-mo-3",
                name: "Avene Hydrance Aqua-Gel Ενυδατική Κρέμα Πολλαπλών Χρήσεων 50ml",
                brand: "Avene",
                price: 18.5,
                originalPrice: 23.5,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Πλούσια Θρέψη & Ευαίσθητο Δέρμα",
            products: [
              {
                id: "fc-mo-4",
                name: "CeraVe Moisturising Cream Ενυδατική Κρέμα με Κεραμίδια 340g",
                brand: "CeraVe",
                price: 14.5,
                originalPrice: 18.2,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-mo-5",
                name: "La Roche-Posay Toleriane Dermallergo Cream Καταπραϋντική Κρέμα 40ml",
                brand: "La Roche-Posay",
                price: 18.2,
                originalPrice: 23.0,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-mo-6",
                name: "Avene Tolerance Control Soothing Skin Recovery Cream 40ml",
                brand: "Avene",
                price: 16.9,
                originalPrice: 21.5,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "sunscreens-section",
        title: "5. Καθημερινή Αντηλιακή Προστασία Προσώπου (SPF 50+)",
        image: "/categories/gia-to-prosopo-banner-1-520x460.webp",
        intro:
          "Η καλύτερη αντιγηραντική κρέμα στον κόσμο είναι το αντηλιακό σας. Προστατεύει από UVA, UVB και μπλε φως, αποτρέποντας κηλίδες, φωτογήρανση και απώλεια κολλαγόνου.",
        productHeading: "Κορυφαία Αντηλιακά Προσώπου",
        productGroups: [
          {
            categoryTitle: "Αόρατη Υφή & Ματ Τελείωμα",
            products: [
              {
                id: "fc-sun-1",
                name: "La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+ 50ml",
                brand: "La Roche-Posay",
                price: 16.5,
                originalPrice: 21.0,
                image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sun-2",
                name: "Frezyderm Sun Screen Velvet Face SPF50+ Αντηλιακό Προσώπου 50ml",
                brand: "Frezyderm",
                price: 17.5,
                originalPrice: 23.0,
                image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sun-3",
                name: "Avene Cleanance Solar SPF50+ Αντηλιακό για Δέρμα με Τάση Ακμής 50ml",
                brand: "Avene",
                price: 14.8,
                originalPrice: 19.5,
                image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-sun-4",
                name: "Vichy Capital Soleil UV-Age Daily Αντιγηραντικό Fluid SPF50+ 40ml",
                brand: "Vichy",
                price: 18.9,
                originalPrice: 24.5,
                image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],

    // 6. FAQs για το Πρόσωπο (Schema.org ready)
    faqs: [
      {
        question: "Ποια είναι η σωστή σειρά εφαρμογής των προϊόντων προσώπου (layering);",
        answer:
          "Ο χρυσός κανόνας είναι: από την πιο λεπτόρρευστη υφή στην πιο παχύρρευστη. Ξεκινάμε με Καθαρισμό -> Τονωτική Λοσιόν/Essence -> Serum -> Κρέμα Ματιών -> Ενυδατική Κρέμα -> Αντηλιακό (το πρωί).",
      },
      {
        question: "Χρειάζεται αντηλιακό τις συννεφιασμένες ημέρες ή όταν είμαι στο γραφείο;",
        answer:
          "ΝΑΙ, απόλυτα. Η ακτινοβολία UVA, η οποία ευθύνεται για το 80% της πρόωρης φωτογήρανσης και των καφέ κηλίδων, διαπερνά τόσο τα σύννεφα όσο και τα τζάμια των παραθύρων, ενώ είναι παρούσα με την ίδια ένταση χειμώνα-καλοκαίρι.",
      },
      {
        question: "Πώς ξεκινάω τη χρήση ρετινόλης χωρίς να ερεθίσω το δέρμα μου;",
        answer:
          "Ξεκινήστε με χαμηλή συγκέντρωση (0.1% - 0.3%) μόνο 2 βράδια την εβδομάδα. Εφαρμόστε τη μέθοδο «sandwich»: λεπτή στρώση ενυδατικής -> ρετινόλη -> ξανά ενυδατική κρέμα. Την επόμενη ημέρα είναι υποχρεωτική η εφαρμογή αντηλιακού SPF 50+.",
      },
      {
        question: "Τι είναι ο διπλός καθαρισμός (double cleansing) και ποιοι τον χρειάζονται;",
        answer:
          "Είναι η μέθοδος καθαρισμού το βράδυ σε δύο στάδια: Πρώτα ένα έλαιο ή balm καθαρισμού που διαλύει το αντηλιακό και το μακιγιάζ, και στη συνέχεια ένα απαλό αφρώδες τζελ νερού που απομακρύνει τους ρύπους και τον ιδρώτα. Είναι ιδανικός για όσους φορούν καθημερινά αδιάβροχο αντηλιακό ή μακιγιάζ.",
      },
      {
        question: "Μπορώ να βάλω ορό υαλουρονικού οξέος σε στεγνό δέρμα;",
        answer:
          "Όχι, δεν συνιστάται. Το υαλουρονικό οξύ είναι ένας μαγνήτης υγρασίας που συγκρατεί έως 1.000 φορές το βάρος του σε νερό. Αν το βάλετε σε εντελώς στεγνό δέρμα σε ξηρό περιβάλλον, μπορεί να αντλήσει υγρασία από τα βαθύτερα στρώματα της επιδερμίδας σας, προκαλώντας αίσθηση τραβήγματος. Εφαρμόστε το πάντα σε ελαφρώς νωπό δέρμα (μετά από ιαματικό νερό) και σφραγίστε αμέσως με ενυδατική κρέμα.",
      },
    ],

    // 7. Lead Generation / Pharmacist Consultation Call-to-Action
    pharmacistCta: {
      badge: "Δωρεάν Συμβουλή Φαρμακοποιού",
      title: "Έχεις αμφιβολία για τον τύπο ή τις ανάγκες του δέρματός σου;",
      subtitle:
        "Η εξειδικευμένη ομάδα φαρμακοποιών και συμβούλων δερμοκαλλυντικών του ProPharmacy είναι δίπλα σου για να αναλύσει τις ανάγκες της επιδερμίδας σου και να σχεδιάσει την ιδανική εξατομικευμένη ρουτίνα φροντίδας.",
      phone: "210 1234567",
      buttonText: "Κάλεσε τον Φαρμακοποιό (Δωρεάν)",
      note: "Δευτέρα – Παρασκευή 09:00 – 21:00 · Σάββατο 09:00 – 15:00",
    },

    // 8. Medical Disclaimer
    disclaimer:
      "ΔΕΡΜΑΤΟΛΟΓΙΚΗ ΕΠΙΣΗΜΑΝΣΗ: Οι πληροφορίες και οι ρουτίνες του παρόντος οδηγού έχουν ενημερωτικό χαρακτήρα και βασίζονται στη σύγχρονη κοσμητολογία και δερμοκαλλυντική πρακτική. Σε περιπτώσεις ενεργού κυστικής ακμής, έντονης ροδόχρου νόσου, ατοπικής δερματίτιδας ή επίμονων δερματικών αλλοιώσεων, συμβουλευτείτε πάντα τον εξειδικευμένο δερματολόγο σας πριν την εφαρμογή δραστικών απολεπιστικών ή ρετινοειδών σκευασμάτων.",
  },

  "body-care": {
    slug: "body-care",
    title: "Οδηγός Περιποίησης Σώματος",
    breadcrumb: "Περιποίηση Σώματος",
    headerBannerImage: "/guide/guide-body-banner.webp",
    featuredImage: "/guide/guide-body-banner.webp",
    introHeading: "Ολοκληρωμένος Οδηγός Περιποίησης & Υγείας Σώματος",
    introText:
      "Το δέρμα του σώματος καλύπτει το 90% της επιφάνειάς μας και συχνά παραμελείται σε σχέση με το πρόσωπο. Από την ανακούφιση του ατοπικού κνησμού και την εξομάλυνση της θυλακικής υπερκεράτωσης (strawberry legs), έως την πρόληψη ραγάδων και τη λείανση της κυτταρίτιδας, οι φαρμακοποιοί του ProPharmacy συγκέντρωσαν τις πιο αποτελεσματικές κλινικές λύσεις για κάθε ανάγκη.",
    quizEnabled: true,

    // 1. Βασικοί Άξονες Φροντίδας
    sections: [
      {
        number: "1.",
        title: "Ήπιος Καθαρισμός χωρίς Σαπούνι (Syndet)",
        items: [
          "Προστασία υδρολιπιδικού φραγμού: Το κοινό σαπούνι έχει αλκαλικό pH (~9-10) που απογυμνώνει τα λιπίδια. Προτιμήστε καθαριστικά έλαια ή syndet με φυσιολογικό pH (5.5).",
          "Όχι στο καυτό νερό: Το νερό πάνω από 37°C διασπά τα κεραμίδια και επιδεινώνει δραματικά την ξηρότητα και τον κνησμό.",
        ],
      },
      {
        number: "2.",
        title: "Στοχευμένη Απολέπιση (Χημική & Μηχανική)",
        items: [
          "Scrub με θαλάσσια άλατα & έλαια: 1-2 φορές την εβδομάδα για λείανση της τραχιάς επιδερμίδας και καλύτερη απορρόφηση ενυδατικών κρεμών.",
          "Χημική απολέπιση με AHA/BHA & Ουρία: Ιδανική για θυλακική υπερκεράτωση («strawberry legs») και τραχύτητα σε μπράτσα και γάμπες.",
        ],
      },
      {
        number: "3.",
        title: "Εντατική Ενυδάτωση & Αναπλήρωση Λιπιδίων",
        items: [
          "Ο κανόνας των 3 λεπτών: Εφαρμόστε την κρέμα εντός 3 λεπτών από το ντους, σε ελαφρώς νωπό δέρμα, για να παγιδεύσετε τη μέγιστη υγρασία.",
          "Επιλογή κατάλληλης υφής: Λοσιόν για κανονικό δέρμα το καλοκαίρι, πλούσιο balm με κεραμίδια για ατοπικό/πολύ ξηρό δέρμα τον χειμώνα.",
        ],
      },
      {
        number: "4.",
        title: "Σύσφιξη, Κυτταρίτιδα & Πρόληψη Ραγάδων",
        items: [
          "Ενεργά δραστικά συστατικά: Καφεΐνη, Centella Asiatica και φυτικά έλαια ενισχύουν τη μικροκυκλοφορία και διεγείρουν την παραγωγή κολλαγόνου.",
          "Συνέπεια & Ανοδικό Μασάζ: Απαιτούνται καθημερινές ανοδικές κινήσεις λεμφικής φοράς για τουλάχιστον 4 εβδομάδες.",
        ],
      },
    ],

    // 2. Συγκριτικός Πίνακας Επιλογής Υφής: «Πώς διαλέγω ενυδάτωση ανάλογα με τον τύπο δέρματος;»
    textureGuide: {
      title: "Πώς Διαλέγω Ενυδάτωση ανάλογα με τον Τύπο Δέρματος;",
      subtitle:
        "Ο γρήγορος συγκριτικός οδηγός του φαρμακείου για να επιλέξετε την κατάλληλη σύνθεση και υφή ανάλογα με την εποχή και τις ανάγκες σας.",
      textures: [
        {
          type: "Body Gel / Lotion",
          idealFor: "Κανονικό / Λιπαρό δέρμα & Καλοκαίρι",
          characteristics: "Εξαιρετικά λεπτόρρευστη υφή, απορροφάται άμεσα χωρίς ίχνος λιπαρότητας.",
          ingredients: "Αλόη Βέρα, Υαλουρονικό Οξύ, Γλυκερίνη, Πανθενόλη",
          badge: "Ελαφριά Υφή",
        },
        {
          type: "Body Cream / Milk",
          idealFor: "Ξηρό δέρμα & Καθημερινή χρήση όλο τον χρόνο",
          characteristics: "Ισορροπημένη θρέψη και ενυδάτωση διαρκείας, βελούδινη αίσθηση.",
          ingredients: "Βούτυρο Καριτέ (Shea Butter), Πανθενόλη B5, Βιταμίνη E",
          badge: "Καθημερινή Φροντίδα",
        },
        {
          type: "Body Balm / Butter",
          idealFor: "Πολύ ξηρό / Ατοπικό δέρμα, Έκζεμα & Χειμώνας",
          characteristics: "Πλούσια πυκνή υφή που δημιουργεί προστατευτικό φιλμ ενάντια στους εξωτερικούς ερεθισμούς.",
          ingredients: "Κεραμίδια (Ceramides 1, 3, 6-II), Νιασιναμίδη, Ωμέγα 3-6-9, Λιπίδια",
          badge: "Εντατική Θρέψη",
        },
        {
          type: "Έλαιο Σώματος (Dry Oil)",
          idealFor: "Θαμπό δέρμα, Σύσφιξη, Ραγάδες & Εγκυμοσύνη",
          characteristics: "Χαρίζει λάμψη, ελαστικότητα και μεταξένια απαλότητα χωρίς κολλώδες τελείωμα.",
          ingredients: "Έλαιο Argan, Αμυγδαλέλαιο, Έλαιο Jojoba, Εκχύλισμα Καλέντουλας",
          badge: "Ελαστικότητα & Glow",
        },
      ],
    },

    // 3. Routine Selector / Φίλτρο ανά Ανάγκη (Routine by Skin Need)
    skinTypesGuide: {
      title: "Επίλεξε με βάση την Ανάγκη του Σώματός σου",
      subtitle:
        "Εξειδικευμένες φαρμακευτικές σειρές σχεδιασμένες για τις πιο συχνές και απαιτητικές δερματικές ανάγκες.",
      types: [
        {
          id: "daily-hydration",
          name: "Καθημερινή Ενυδάτωση & Λάμψη",
          badge: "Κανονικό / Ξηρό Δέρμα",
          keyIngredients: "Υαλουρονικό Οξύ, Γλυκερίνη, Προβιταμίνη B5 (Πανθενόλη), Κεραμίδια",
          description:
            "Καθημερινή φροντίδα για διατήρηση της βελούδινης απαλότητας, ελαστικότητας και προστασία από την περιβαλλοντική αφυδάτωση.",
          routineSteps: [
            "Καθαρισμός με απαλό αφρόλουτρο syndet ή ενυδατικό έλαιο ντους",
            "Εφαρμογή ενυδατικής λοσιόν ή κρέμας εντός 3 λεπτών από το σκούπισμα",
            "Απολέπιση με θαλάσσιο scrub 1 φορά την εβδομάδα για βελούδινη υφή",
          ],
          tip: "Ο κανόνας των 3 λεπτών: Απλώστε την κρέμα όσο το δέρμα είναι ακόμα ελαφρώς νωπό ώστε να σφραγιστεί η μέγιστη υγρασία.",
          products: [
            {
              id: "bc-hyd-1",
              name: "CeraVe Moisturising Lotion Ενυδατικό Γαλάκτωμα με Κεραμίδια 473ml",
              brand: "CeraVe",
              price: 13.9,
              originalPrice: 17.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-hyd-2",
              name: "Bepanthol Body Lotion Ενυδατικό Γαλάκτωμα Σώματος 400ml",
              brand: "Bepanthol",
              price: 14.5,
              originalPrice: 18.9,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-hyd-3",
              name: "Bioderma Atoderm Huile de Douche Έλαιο Καθαρισμού 1000ml",
              brand: "Bioderma",
              price: 16.8,
              originalPrice: 22.0,
              image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-hyd-4",
              name: "Apivita Royal Honey Πλούσιο Body Butter Ενυδάτωσης 200ml",
              brand: "Apivita",
              price: 15.2,
              originalPrice: 19.5,
              image: "https://images.unsplash.com/photo-1567928805192-7f40f6bee1a3?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "atopic-eczema",
          name: "Ατοπικό Δέρμα, Έκζεμα & Κνησμός",
          badge: "Αναπλήρωση Λιπιδίων & Anti-Itch",
          keyIngredients: "Κεραμίδια (Ceramides), Νιασιναμίδη, Βούτυρο Καριτέ, Aqua Posae Filiformis",
          description:
            "Πολύ ξηρό, σκασμένο δέρμα με επίμονο κνησμό (φαγούρα), ερεθισμούς και διαταραγμένο προστατευτικό φραγμό.",
          routineSteps: [
            "Καθαρισμός αποκλειστικά με καθαριστικό λάδι ή κρέμα κατά του κνησμού (χωρίς σαπούνι/άρωμα)",
            "Στέγνωμα ταμποναριστά με απαλή βαμβακερή πετσέτα χωρίς τρίψιμο",
            "Καθημερινή εφαρμογή μαλακτικού βαλσάμου αναπλήρωσης λιπιδίων (Lipid-Replenishing Balm) 1-2 φορές την ημέρα",
          ],
          tip: "Αποφύγετε το ζεστό νερό και τα μάλλινα ή συνθετικά ρούχα κατευθείαν πάνω στο δέρμα που πυροδοτούν τον κνησμό.",
          products: [
            {
              id: "bc-atop-1",
              name: "La Roche-Posay Lipikar Baume AP+M Επανορθωτικό Βάλσαμο Τριπλής Δράσης 400ml",
              brand: "La Roche-Posay",
              price: 19.5,
              originalPrice: 25.0,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-atop-2",
              name: "Bioderma Atoderm Intensive Baume Μαλακτικό Βάλσαμο κατά του Κνησμού 500ml",
              brand: "Bioderma",
              price: 18.9,
              originalPrice: 24.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-atop-3",
              name: "A-Derma Exomega Control Μαλακτική Κρέμα για Ατοπικό Δέρμα 400ml",
              brand: "A-Derma",
              price: 17.8,
              originalPrice: 23.0,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-atop-4",
              name: "La Roche-Posay Lipikar Syndet AP+ Κρέμα Καθαρισμού κατά των Ερεθισμών 400ml",
              brand: "La Roche-Posay",
              price: 14.8,
              originalPrice: 19.0,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "strawberry-legs",
          name: "Θυλακική Υπερκεράτωση («Strawberry Legs»)",
          badge: "Λείανση με Ουρία & Σαλικυλικό",
          keyIngredients: "Ουρία (Urea 10%-30%), Σαλικυλικό Οξύ (BHA), LHA, Κεραμίδια",
          description:
            "Τραχιά υφή «δέρματος κοτόπουλου» με κόκκινα ή σκούρα στίγματα στους θύλακες των τριχών σε μπράτσα, μηρούς και γάμπες.",
          routineSteps: [
            "Καθαρισμός με αφρίζον τζελ λείανσης που περιέχει σαλικυλικό οξύ",
            "Καθημερινή εφαρμογή κρέμας με ουρία (10%) και σαλικυλικό οξύ για διάλυση των κεράτινων βυσμάτων",
            "Σε πολύ έντονες τοπικές σκληρύνσεις (αγκώνες, γόνατα): εφαρμογή εξειδικευμένης κρέμας ουρίας 30%",
          ],
          tip: "Μην πιέζετε τα σπυράκια και αποφύγετε το στεγνό ξύρισμα με παλιά ξυραφάκια. Χρησιμοποιείτε πάντα τζελ ξυρίσματος.",
          products: [
            {
              id: "bc-sa-1",
              name: "CeraVe SA Smoothing Cream Κρέμα Λείανσης για Τραχύ Δέρμα 340g",
              brand: "CeraVe",
              price: 15.5,
              originalPrice: 19.5,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-sa-2",
              name: "CeraVe SA Smoothing Cleanser Τζελ Καθαρισμού Λείανσης 473ml",
              brand: "CeraVe",
              price: 14.9,
              originalPrice: 18.9,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-sa-3",
              name: "Uriage Keratosane 30 Gel-Cream Κρέμα Υψηλής Συγκέντρωσης Ουρίας 75ml",
              brand: "Uriage",
              price: 13.5,
              originalPrice: 17.5,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-sa-4",
              name: "Eucerin UreaRepair Plus Lotion 10% Ουρία για Εξαιρετικά Ξηρό Δέρμα 400ml",
              brand: "Eucerin",
              price: 18.5,
              originalPrice: 23.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "cellulite-firming",
          name: "Κυτταρίτιδα & Σύσφιξη",
          badge: "Λεμφική Αποσυμφόρηση & Τόνωση",
          keyIngredients: "Καφεΐνη, Εκχύλισμα Κισσού, Θαλάσσια Φύκη, Ρετινόλη, Centella Asiatica",
          description:
            "Όψη «φλοιού πορτοκαλιού», κατακράτηση υγρών στους ιστούς και απώλεια σφριγηλότητας σε μηρούς, γλουτούς και κοιλιά.",
          routineSteps: [
            "Dry brushing (στεγνό βούρτσισμα) με ανοδική κατεύθυνση πριν από το ντους",
            "Απολέπιση με θαλάσσια άλατα (Thalasso Scrub) 2 φορές την εβδομάδα",
            "Εφαρμογή κρέμας ή τζελ αδυνατίσματος με δυναμικό ανοδικό μασάζ πρωί και βράδυ",
          ],
          tip: "Η συνέπεια είναι το κλειδί: απαιτούνται τουλάχιστον 4 εβδομάδες καθημερινής εφαρμογής με ανοδικό μασάζ για ορατά αποτελέσματα λείανσης.",
          products: [
            {
              id: "bc-cel-1",
              name: "Elancyl Slim Design Night Φροντίδα Κατά της Κυτταρίτιδας 200ml",
              brand: "Elancyl",
              price: 24.5,
              originalPrice: 32.0,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-cel-2",
              name: "Geomar Thalasso Scrub Αναζωογονητικό Πίλινγκ Σώματος 600g",
              brand: "Geomar",
              price: 12.3,
              originalPrice: 15.9,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-cel-3",
              name: "Somatoline Cosmetic Slimming 7 Nights Εντατικό Gel Αδυνατίσματος 400ml",
              brand: "Somatoline",
              price: 36.9,
              originalPrice: 48.0,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-cel-4",
              name: "Frezyderm Triple Effect Cellulite Cream Κρέμα κατά της Κυτταρίτιδας 200ml",
              brand: "Frezyderm",
              price: 22.8,
              originalPrice: 29.5,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "stretch-marks",
          name: "Ραγάδες & Εγκυμοσύνη",
          badge: "Ελαστικότητα & Πρόληψη",
          keyIngredients: "Centella Asiatica, Έλαιο Αμυγδάλου, Βιταμίνη E, Υαλουρονικό Οξύ",
          description:
            "Πρόληψη και μείωση ραγάδων που προκαλούνται από απότομο τέντωμα του δέρματος στην εγκυμοσύνη, την εφηβεία ή αυξομειώσεις βάρους.",
          routineSteps: [
            "Εφαρμογή ειδικού ελαίου ή κρέμας 2 φορές την ημέρα σε κοιλιά, στήθος, μηρούς και γλουτούς",
            "Κυκλικές κινήσεις μασάζ μέχρι την πλήρη απορρόφηση για ενίσχυση της παραγωγής ελαστίνης",
            "Συνέχιση της εφαρμογής τουλάχιστον 3 μήνες μετά τον τοκετό",
          ],
          tip: "Οι νέες ροζ/κόκκινες ραγάδες ανταποκρίνονται άμεσα στη θεραπεία. Οι παλιές λευκές ραγάδες μόνο βελτιώνονται σε υφή. Η πρόληψη είναι το παν!",
          products: [
            {
              id: "bc-str-1",
              name: "Bio-Oil Skincare Oil Φυσικό Έλαιο για Ραγάδες & Ουλές 125ml",
              brand: "Bio-Oil",
              price: 14.8,
              originalPrice: 19.5,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-str-2",
              name: "Frezyderm Prevenstria Cream Κρέμα Πρόληψης Ραγάδων 150ml",
              brand: "Frezyderm",
              price: 18.5,
              originalPrice: 24.5,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-str-3",
              name: "Mustela Stretch Marks Cream Κρέμα Ραγάδων για Εγκύους 150ml",
              brand: "Mustela",
              price: 16.9,
              originalPrice: 21.9,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "bc-str-4",
              name: "Weleda Stretch Mark Massage Oil Έλαιο Μασάζ για Ραγάδες 100ml",
              brand: "Weleda",
              price: 17.5,
              originalPrice: 22.9,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
      ],
    },

    // 4. Pro Tips & Τελετουργία Εφαρμογής (Micro-copy)
    proTips: {
      title: "Tips & Τελετουργία Εφαρμογής από τους Φαρμακοποιούς",
      subtitle: "Μικρά επιστημονικά μυστικά που μεγιστοποιούν την αποτελεσματικότητα κάθε προϊόντος σώματος.",
      tips: [
        {
          title: "Ο Κανόνας των 3 Λεπτών (The 3-Minute Rule)",
          description:
            "Εφαρμόστε την ενυδατική κρέμα ή το balm σώματος μέσα στα πρώτα 3 λεπτά από τη στιγμή που βγαίνετε από το ντους. Όσο η επιδερμίδα διατηρεί υγρασία, τα ενυδατικά λιπίδια παγιδεύουν το νερό στα βαθύτερα στρώματα, πολλαπλασιάζοντας την απορρόφηση κατά 70%.",
          badge: "Χρυσός Κανόνας Ενυδάτωσης",
        },
        {
          title: "Dry Brushing (Στεγνό Βούρτσισμα)",
          description:
            "Πριν μπείτε στο ντους, κάντε απαλό μασάζ με φυσική στεγνή βούρτσα σώματος με ανοδική κατεύθυνση προς την καρδιά. Διεγείρει τη λεμφική κυκλοφορία, απομακρύνει τα νεκρά κύτταρα και προετοιμάζει το δέρμα για την κρέμα κυτταρίτιδας.",
          badge: "Λεμφική Αποσυμφόρηση",
        },
        {
          title: "Σωστή Τεχνική Προϊόντων Αδυνατίσματος",
          description:
            "Εφαρμόζετε πάντα τα προϊόντα σύσφιξης και αδυνατίσματος με έντονες ανοδικές κυκλικές κινήσεις και «ζυμώματα» (palper-rouler). Χρειάζεται καθημερινή συνέπεια πρωί και βράδυ για τουλάχιστον 4 εβδομάδες για να ενεργοποιηθεί η λιπόλυση.",
          badge: "Μέγιστη Απόδοση",
        },
        {
          title: "Εξειδίκευση: Ευαίσθητη Περιοχή & Πόδια",
          description:
            "Μην χρησιμοποιείτε το κοινό αφρόλουτρο σώματος στην ευαίσθητη περιοχή (απαιτείται όξινο pH 3.5-5.0). Για τις σκασμένες πτέρνες, εφαρμόστε αλοιφή με 25-50% ουρία το βράδυ και φορέστε βαμβακερές κάλτσες για εντατική ανάπλαση.",
          badge: "Ειδική Φροντίδα",
        },
      ],
    },

    // 5. Πλήρεις Υποενότητες Προϊόντων (Sub-sections with Correct Body Banners)
    subSections: [
      {
        id: "daily-cleansing-hydration",
        title: "1. Καθημερινός Καθαρισμός & Ενυδάτωση Σώματος",
        image: "/categories/gia-to-swma-banner-category.webp",
        intro:
          "Διατηρήστε την επιδερμίδα σας βελούδινη, απαλή και ελαστική με καθαριστικά έλαια και ενυδατικές λοσιόν εμπλουτισμένες με κεραμίδια και βούτυρο καριτέ.",
        productHeading: "Προτεινόμενα Προϊόντα Καθημερινής Φροντίδας",
        productGroups: [
          {
            categoryTitle: "Ενυδατικές Λοσιόν & Κρέμες Σώματος",
            products: [
              {
                id: "bc-pr-1",
                name: "CeraVe Moisturising Lotion Ενυδατικό Γαλάκτωμα 473ml",
                brand: "CeraVe",
                price: 13.9,
                originalPrice: 17.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-pr-2",
                name: "Bepanthol Body Lotion Ενυδατικό Γαλάκτωμα Σώματος 400ml",
                brand: "Bepanthol",
                price: 14.5,
                originalPrice: 18.9,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-pr-3",
                name: "Apivita Royal Honey Πλούσιο Body Butter Ενυδάτωσης 200ml",
                brand: "Apivita",
                price: 15.2,
                originalPrice: 19.5,
                image: "https://images.unsplash.com/photo-1567928805192-7f40f6bee1a3?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Έλαια Ντους & Ήπιος Καθαρισμός",
            products: [
              {
                id: "bc-pr-4",
                name: "Bioderma Atoderm Huile de Douche Έλαιο Καθαρισμού 1000ml",
                brand: "Bioderma",
                price: 16.8,
                originalPrice: 22.0,
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-pr-5",
                name: "La Roche-Posay Lipikar Huile Lavante AP+ Έλαιο Καθαρισμού 400ml",
                brand: "La Roche-Posay",
                price: 15.5,
                originalPrice: 19.9,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "atopic-skin-section",
        title: "2. Ατοπικό Δέρμα, Έκζεμα & Κνησμός (Lipid-Replenishing)",
        image: "/categories/gia-to-swma-banner.webp",
        intro:
          "Κλινικά ελεγμένες συνθέσεις αναπλήρωσης λιπιδίων που καταπραΰνουν άμεσα το αίσθημα κνησμού και αποτρέπουν τις εξάρσεις ξηρότητας.",
        productHeading: "Προϊόντα για Ατοπικό Δέρμα & Έκζεμα",
        productGroups: [
          {
            categoryTitle: "Μαλακτικά Βάλσαμα (Balms) κατά του Κνησμού",
            products: [
              {
                id: "bc-at-1",
                name: "La Roche-Posay Lipikar Baume AP+M Επανορθωτικό Βάλσαμο 400ml",
                brand: "La Roche-Posay",
                price: 19.5,
                originalPrice: 25.0,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-at-2",
                name: "Bioderma Atoderm Intensive Baume Μαλακτικό Βάλσαμο 500ml",
                brand: "Bioderma",
                price: 18.9,
                originalPrice: 24.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-at-3",
                name: "A-Derma Exomega Control Μαλακτικό Βάλσαμο 400ml",
                brand: "A-Derma",
                price: 17.8,
                originalPrice: 23.0,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "keratosis-strawberry-legs",
        title: "3. Θυλακική Υπερκεράτωση («Strawberry Legs» / Rough & Bumpy)",
        image: "/guide/guide-body-banner.webp",
        intro:
          "Συνδυασμός ουρίας και σαλικυλικού οξέος που διαλύει τα κεράτινα βύσματα, λειαίνει τα σπυράκια σε μπράτσα και πόδια και αποκαθιστά την απαλή υφή.",
        productHeading: "Προϊόντα Λείανσης με Ουρία & Σαλικυλικό",
        productGroups: [
          {
            categoryTitle: "Κρέμες & Τζελ Λείανσης",
            products: [
              {
                id: "bc-sa-pr-1",
                name: "CeraVe SA Smoothing Cream Κρέμα Λείανσης για Τραχύ Δέρμα 340g",
                brand: "CeraVe",
                price: 15.5,
                originalPrice: 19.5,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-sa-pr-2",
                name: "CeraVe SA Smoothing Cleanser Τζελ Καθαρισμού 473ml",
                brand: "CeraVe",
                price: 14.9,
                originalPrice: 18.9,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-sa-pr-3",
                name: "Uriage Keratosane 30 Gel-Cream Ουρία 30% για Έντονες Σκληρύνσεις 75ml",
                brand: "Uriage",
                price: 13.5,
                originalPrice: 17.5,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "stretch-marks-firming",
        title: "4. Ραγάδες, Σύσφιξη & Κυτταρίτιδα",
        image: "/categories/gia-to-swma-banner-560x1000-1.1-520x460.webp",
        intro:
          "Ειδικά έλαια και συσφικτικές φόρμουλες που προλαμβάνουν τις ραγάδες στην εγκυμοσύνη και βελτιώνουν την όψη «φλοιού πορτοκαλιού».",
        productHeading: "Έλαια Ραγάδων & Φροντίδα Κυτταρίτιδας",
        productGroups: [
          {
            categoryTitle: "Πρόληψη & Αντιμετώπιση Ραγάδων",
            products: [
              {
                id: "bc-st-1",
                name: "Bio-Oil Skincare Oil Φυσικό Έλαιο για Ραγάδες & Ουλές 125ml",
                brand: "Bio-Oil",
                price: 14.8,
                originalPrice: 19.5,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-st-2",
                name: "Frezyderm Prevenstria Cream Κρέμα Πρόληψης Ραγάδων 150ml",
                brand: "Frezyderm",
                price: 18.5,
                originalPrice: 24.5,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Κυτταρίτιδα & Απολέπιση",
            products: [
              {
                id: "bc-st-3",
                name: "Elancyl Slim Design Night Φροντίδα Κατά της Κυτταρίτιδας 200ml",
                brand: "Elancyl",
                price: 24.5,
                originalPrice: 32.0,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-st-4",
                name: "Geomar Thalasso Scrub Αναζωογονητικό Πίλινγκ Σώματος 600g",
                brand: "Geomar",
                price: 12.3,
                originalPrice: 15.9,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "intimate-foot-care",
        title: "5. Ευαίσθητη Περιοχή & Φροντίδα Ποδιών",
        image: "/categories/gia-to-swma-banner-1.webp",
        intro:
          "Εξειδικευμένα καθαριστικά με κατάλληλο pH για την ευαίσθητη περιοχή και επανορθωτικές κρέμες με ουρία για σκασμένες πτέρνες.",
        productHeading: "Προϊόντα Intimate & Foot Care",
        productGroups: [
          {
            categoryTitle: "Υγιεινή Ευαίσθητης Περιοχής (pH 3.5 - 5.0)",
            products: [
              {
                id: "bc-int-1",
                name: "Lactacyd Pharma with Antibacterials Υγρό Καθαρισμού Ευαίσθητης Περιοχής 250ml",
                brand: "Lactacyd",
                price: 6.9,
                originalPrice: 8.9,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-int-2",
                name: "Apivita Daily Intimate Care Απαλό Υγρό με Χαμομήλι & Πρόπολη 300ml",
                brand: "Apivita",
                price: 8.5,
                originalPrice: 11.2,
                image: "https://images.unsplash.com/photo-1567928805192-7f40f6bee1a3?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Φροντίδα Ποδιών & Σκασμένες Πτέρνες",
            products: [
              {
                id: "bc-ft-1",
                name: "Hansaplast Cracked Heel Ointment Επανορθωτική Αλοιφή για Σκασμένες Πτέρνες 40g",
                brand: "Hansaplast",
                price: 6.5,
                originalPrice: 8.5,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-ft-2",
                name: "Gehwol Med Lipidro Cream Κρέμα για Ξηρά & Σκασμένα Πόδια με Ουρία 75ml",
                brand: "Gehwol",
                price: 7.9,
                originalPrice: 10.5,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],

    // 6. FAQs για το Σώμα (Schema.org ready)
    faqs: [
      {
        question: "Πώς αντιμετωπίζεται η θυλακική υπερκεράτωση («strawberry legs») στα πόδια και τα μπράτσα;",
        answer:
          "Η θυλακική υπερκεράτωση οφείλεται στη συσσώρευση κερατίνης στους θύλακες των τριχών. Αντιμετωπίζεται αποτελεσματικά με καθημερινή χρήση λοσιόν ή κρέμας που περιέχει Ουρία (10%) και Σαλικυλικό Οξύ (BHA). Αποφύγετε το επιθετικό τρίψιμο με λούφα, καθώς επιδεινώνει τη φλεγμονή.",
      },
      {
        question: "Ποια είναι η διαφορά ανάμεσα σε λοσιόν σώματος, κρέμα και balm;",
        answer:
          "Η διαφορά έγκειται στην περιεκτικότητα σε νερό και έλαια. Η λοσιόν περιέχει περισσότερο νερό και απορροφάται άμεσα (ιδανική για κανονικό δέρμα και καλοκαίρι). Η κρέμα προσφέρει ισορροπημένη θρέψη. Το balm (βάλσαμο) έχει υψηλή περιεκτικότητα σε λιπίδια και κεραμίδια, δημιουργώντας προστατευτικό φιλμ που διαρκεί έως 48 ώρες (ιδανικό για ατοπικό δέρμα, έκζεμα και χειμώνα).",
      },
      {
        question: "Μπορούν να εξαφανιστούν οι ραγάδες;",
        answer:
          "Οι πρόσφατες ραγάδες (κόκκινες ή ροζ χρώματος) έχουν ενεργή αγγείωση και μπορούν να μειωθούν θεαματικά με ειδικά έλαια (Bio-Oil) ή κρέμες με Centella Asiatica και υαλουρονικό οξύ. Οι παλιές λευκές ραγάδες είναι ουλές του χορίου και μπορούν μόνο να βελτιωθούν σε υφή, όχι να εξαλειφθούν πλήρως. Γι' αυτό η έγκαιρη πρόληψη στην εγκυμοσύνη είναι καθοριστική.",
      },
      {
        question: "Γιατί δεν πρέπει να χρησιμοποιώ το κοινό αφρόλουτρο στην ευαίσθητη περιοχή;",
        answer:
          "Η ευαίσθητη περιοχή έχει όξινο pH (3.5 – 5.0) και αποικίζεται από προστατευτικούς γαλακτοβάκιλλους. Το κοινό αφρόλουτρο έχει αλκαλικό ή ουδέτερο pH και έντονα αρώματα που καταστρέφουν τη φυσική χλωρίδα, αυξάνοντας δραματικά τον κίνδυνο μυκητιάσεων και κολπίτιδας.",
      },
      {
        question: "Πώς επουλώνονται γρήγορα οι βαθιά σκασμένες πτέρνες;",
        answer:
          "Εφαρμόστε το βράδυ ειδική επανορθωτική αλοιφή με υψηλή περιεκτικότητα σε ουρία (25%-50%) ή πανθενόλη. Φορέστε βαμβακερές κάλτσες κατά τη διάρκεια του ύπνου για να δημιουργήσετε περιβάλλον εντατικής ενυδάτωσης. Σε 3-5 ημέρες το σκληρό δέρμα μαλακώνει και οι ρωγμές επουλώνονται.",
      },
    ],

    // 7. Lead Generation / Pharmacist Consultation Call-to-Action
    pharmacistCta: {
      badge: "Δωρεάν Συμβουλή Φαρμακοποιού",
      title: "Αντιμετωπίζεις επίμονη ξηρότητα, κνησμό ή δερματική ευαισθησία;",
      subtitle:
        "Η επιστημονική ομάδα του ProPharmacy είναι δίπλα σου για να αξιολογήσει τις ανάγκες του σώματός σου και να σου προτείνει το ακριβές θεραπευτικό πρωτόκολλο φαρμακείου.",
      phone: "210 1234567",
      buttonText: "Κάλεσε τον Φαρμακοποιό (Δωρεάν)",
      note: "Δευτέρα – Παρασκευή 09:00 – 21:00 · Σάββατο 09:00 – 15:00",
    },

    // 8. Medical Disclaimer
    disclaimer:
      "ΔΕΡΜΑΤΟΛΟΓΙΚΗ ΕΠΙΣΗΜΑΝΣΗ: Οι συμβουλές και τα προτεινόμενα προϊόντα του παρόντος οδηγού έχουν ενημερωτικό χαρακτήρα. Σε περιπτώσεις οξείας ατοπικής δερματίτιδας με εκροή υγρού, ανοιχτών πληγών από έντονο κνησμό ή υποψίας μυκητιασικής μόλυνσης, συνιστάται άμεση κλινική εκτίμηση από δερματολόγο για πιθανή συνταγογράφηση τοπικών φαρμακευτικών σκευασμάτων.",
  },

  "hair-care": {
    slug: "hair-care",
    title: "Οδηγός Περιποίησης & Υγείας Μαλλιών",
    breadcrumb: "Περιποίηση Μαλλιών",
    headerBannerImage: "/categories/gia-ta-mallia-banner-category.webp",
    featuredImage: "/categories/gia-ta-mallia-banner-560x1000-1-520x460.webp",
    introHeading: "Ολοκληρωμένος Οδηγός Περιποίησης & Υγείας Μαλλιών",
    introText:
      "Από την αντιμετώπιση της εποχικής και χρόνιας τριχόπτωσης, έως τη θεραπεία της πιτυρίδας, της σμηγματορροϊκής δερματίτιδας και της λιπαρότητας, η ομάδα φαρμακοποιών του ProPharmacy συγκέντρωσε τα κορυφαία επιστημονικά πρωτόκολλα για πυκνά, δυνατά και υγιή μαλλιά από τη ρίζα έως τις άκρες.",
    quizEnabled: true,

    // 1. Βασικοί Άξονες Φροντίδας Μαλλιών
    sections: [
      {
        number: "1.",
        title: "Στοχευμένος Καθαρισμός & Ο Κανόνας των 2 Λουσιμάτων",
        items: [
          "Στόχευση στο τριχωτό: Το σαμπουάν επιλέγεται πάντα με βάση τις ανάγκες του τριχωτού (λιπαρότητα, πιτυρίδα, τριχόπτωση) και όχι των μηκών.",
          "Ο κανόνας των 2 λουσιμάτων: Το 1ο χέρι καθαρίζει το σμήγμα και τους περιβαλλοντικούς ρύπους. Το 2ο χέρι επιτρέπει στα ενεργά συστατικά να απορροφηθούν, παραμένοντας για 1-2 λεπτά.",
        ],
      },
      {
        number: "2.",
        title: "Επανόρθωση, Θρέψη & Θερμοπροστασία",
        items: [
          "Conditioner σε κάθε λούσιμο: Εφαρμόζεται αποκλειστικά από το μέσο έως τις άκρες. Δεν εφαρμόζεται ποτέ στο τριχωτό για να μη βαραίνει τη ρίζα.",
          "Μάσκα εντατικής αναδόμησης & θερμοπροστασία: 1-2 φορές την εβδομάδα με κερατίνη και φυτικά ceramides, σε συνδυασμό με ορό θερμοπροστασίας πριν από πιστολάκι ή πρέσα.",
        ],
      },
      {
        number: "3.",
        title: "Ολοκληρωμένο Πρωτόκολλο Τριχόπτωσης (3 Βήματα)",
        items: [
          "Συνδυαστική δράση 360°: Η τριχόπτωση δεν αντιμετωπίζεται μόνο με ένα σαμπουάν. Απαιτείται συνδυασμός δυναμωτικού σαμπουάν, τοπικής λοσιόν/αμπούλας και διατροφικού συμπληρώματος.",
          "Συνέπεια 3 μηνών: Ο κύκλος αναγέννησης του θύλακα διαρκεί τουλάχιστον 12 εβδομάδες. Μια αγωγή πρέπει να τηρείται σταθερά για πλήρη αποτελεσματικότητα.",
        ],
      },
      {
        number: "4.",
        title: "Εξειδικευμένη Φροντίδα Τριχωτού (Πιτυρίδα & Σμήγμα)",
        items: [
          "Στοχευμένη θεραπεία: Η λιπαρή πιτυρίδα οφείλεται στον μύκητα Malassezia και χρειάζεται αντιμυκητιασικά (Selenium Disulfide, Ciclopirox Olamine), ενώ η ξηροδερμία απαιτεί ενυδάτωση και καταπράυνση.",
          "Χλιαρό νερό: Το καυτό νερό ερεθίζει τους σμηγματογόνους αδένες, προκαλώντας αντιδραστική υπερέκκριση σμήγματος και επιδείνωση της πιτυρίδας.",
        ],
      },
    ],

    // 2. Πρακτικός Συγκριτικός Οδηγός: «Πιτυρίδα ή Ξηροδερμία;»
    dandruffComparison: {
      title: "Πιτυρίδα ή Ξηροδερμία; Οδηγός Διάγνωσης & Θεραπείας",
      subtitle:
        "Ένας από τους συχνότερους λόγους αποτυχίας της θεραπείας είναι η λάθος επιλογή σαμπουάν. Εντοπίστε τα συμπτώματα και επιλέξτε τη σωστή φαρμακευτική αγωγή.",
      rows: [
        {
          symptom: "Μορφή νιφάδων",
          dryScalp: "Μικρές, λευκές, ξηρές νιφάδες που πέφτουν εύκολα στους ώμους (σαν σκόνη).",
          oilyDandruff: "Μεγαλύτερες, κιτρινωπές, παχιές φολίδες που κολλούν στο τριχωτό και στις ρίζες.",
        },
        {
          symptom: "Αίσθηση στο κεφάλι",
          dryScalp: "Έντονο τράβηγμα, αίσθηση αφυδάτωσης, ξηρότητα και ήπιος διάσπαρτος κνησμός.",
          oilyDandruff: "Έντονη λιπαρότητα, ερυθρότητα, τοπική φλεγμονή και επίμονος, έντονος κνησμός.",
        },
        {
          symptom: "Βασική αιτία",
          dryScalp: "Απογύμνωση υδρολιπιδικού φραγμού από ξηρό καιρό, καυτό νερό ή επιθετικά σαμπουάν.",
          oilyDandruff: "Υπερπολλαπλασιασμός του μύκητα Malassezia σε περιβάλλον περίσσειας σμήγματος.",
        },
        {
          symptom: "Τι χρειάζεστε",
          dryScalp: "Ήπιο ενυδατικό σαμπουάν χωρίς sulfates, φυσικά έλαια, θρέψη και καταπράυνση.",
          oilyDandruff: "Αντιμυκητιασικό σαμπουάν με Selenium Disulfide 1%, Piroctone Olamine & Σαλικυλικό Οξύ.",
        },
      ],
      dryScalpRec: {
        badge: "Πρόταση για Ξηροδερμία",
        title: "Apivita Σαμπουάν κατά της Ξηροδερμίας με Σέλερι & Πρόπολη 250ml",
        description:
          "Ενυδατώνει βαθιά το ξηρό τριχωτό, απομακρύνει τα νεκρά κύτταρα και ανακουφίζει άμεσα από το τράβηγμα και τη φαγούρα με 85% φυσικά συστατικά.",
        product: {
          id: "hc-rec-dry",
          name: "Apivita Σαμπουάν κατά της Ξηροδερμίας με Σέλερι & Πρόπολη 250ml",
          brand: "Apivita",
          price: 11.5,
          originalPrice: 14.9,
          image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
        },
      },
      oilyDandruffRec: {
        badge: "Πρόταση για Λιπαρή Πιτυρίδα",
        title: "Vichy Dercos Anti-Dandruff DS Σαμπουάν για Λιπαρά Μαλλιά 390ml",
        description:
          "Κλινικά αποδεδειγμένη δράση με Selenium Disulfide και Σαλικυλικό Οξύ. Εξαλείφει το 100% των ορατών νιφάδων από την 1η κιόλας εφαρμογή με 6 εβδομάδες αντιυποτροπής.",
        product: {
          id: "hc-rec-dand",
          name: "Vichy Dercos Anti-Dandruff DS Σαμπουάν για Λιπαρά Μαλλιά 390ml",
          brand: "Vichy",
          price: 16.8,
          originalPrice: 21.5,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
        },
      },
    },

    // 3. Το Ολοκληρωμένο Πρωτόκολλο Τριχόπτωσης (Routine Bundle 1-2-3)
    hairLossProtocol: {
      title: "Το Ολοκληρωμένο Πρωτόκολλο Τριχόπτωσης 360°",
      subtitle:
        "Η επιστημονική συνδυαστική θεραπεία 3 βημάτων που διεγείρει τον θύλακα, σταματά την τριχόπτωση και πολλαπλασιάζει την πυκνότητα των μαλλιών.",
      badge: "Κλινικό Πρωτόκολλο 1-2-3",
      bundlePrice: 68.9,
      originalPrice: 94.0,
      steps: [
        {
          stepNumber: 1,
          stepTitle: "Βήμα 1: Καθαρισμός & Προετοιμασία",
          action:
            "Λούσιμο με δυναμωτικό σαμπουάν ενδυνάμωσης και κυκλικό μασάζ για 2 λεπτά ώστε να τονωθεί η μικροκυκλοφορία του θύλακα.",
          timing: "2-3 φορές την εβδομάδα",
          product: {
            id: "hc-prot-1",
            name: "Ducray Anaphase+ Δυναμωτικό Σαμπουάν Τριχόπτωσης 400ml",
            brand: "Ducray",
            price: 14.2,
            originalPrice: 18.9,
            image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
          },
        },
        {
          stepNumber: 2,
          stepTitle: "Βήμα 2: Εντατική Τοπική Αγωγή",
          action:
            "Εφαρμογή λοσιόν ή αμπούλας Aminexil απευθείας στο τριχωτό με ειδικό απλικατέρ (χωρίς ξέβγαλμα). Αποτρέπει τη σκλήρυνση του κολλαγόνου γύρω από τη ρίζα.",
          timing: "Καθημερινά ή 3 φορές/εβδομάδα",
          product: {
            id: "hc-prot-2",
            name: "Vichy Dercos Aminexil Clinical 5 Εντατική Αγωγή Τριχόπτωσης 21 Αμπούλες",
            brand: "Vichy",
            price: 42.5,
            originalPrice: 56.0,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
          },
        },
        {
          stepNumber: 3,
          stepTitle: "Βήμα 3: Εσωτερική Ενίσχυση",
          action:
            "Λήψη συμπληρώματος διατροφής με κυστίνη, βιοτίνη, ψευδάργυρο, σίδηρο και βιταμίνες Β για βαθιά θρέψη του θύλακα εκ των έσω.",
          timing: "2 κάψουλες καθημερινά μετά το γεύμα για 3 μήνες",
          product: {
            id: "hc-prot-3",
            name: "Priorin Extra Συμπλήρωμα Κατά της Τριχόπτωσης 60 Κάψουλες",
            brand: "Priorin",
            price: 24.5,
            originalPrice: 32.0,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
          },
        },
      ],
    },

    // 4. Routine Selector / Φίλτρο ανά Ανάγκη (Hair Needs)
    skinTypesGuide: {
      title: "Επίλεξε με βάση την Ανάγκη των Μαλλιών σου",
      subtitle:
        "Ολοκληρωμένα πρωτόκολλα φροντίδας σχεδιασμένα για τις πιο συχνές προκλήσεις του τριχωτού και των μαλλιών.",
      types: [
        {
          id: "hair-loss",
          name: "Τριχόπτωση & Ενδυνάμωση",
          badge: "Εποχική & Χρόνια",
          keyIngredients: "Aminexil, Βιοτίνη, Κυστίνη, Ψευδάργυρος, Βιταμίνη B6, Νιασιναμίδη",
          description:
            "Αραίωση, αποδυνάμωση του θύλακα, εποχική έντονη τριχόπτωση (>100 τρίχες/ημέρα) ή απώλεια όγκου και πυκνότητας.",
          routineSteps: [
            "Καθαρισμός με δυναμωτικό σαμπουάν Anaphase+ ή Dercos Energy+",
            "Εφαρμογή τοπικής αγωγής με αμπούλες Aminexil Clinical 5 απευθείας στις ρίζες",
            "Καθημερινή λήψη συμπληρώματος Priorin Extra ή Cystiphane για 3 μήνες",
          ],
          tip: "Ο κύκλος ζωής της τρίχας απαιτεί υπομονή: τα πρώτα ουσιαστικά αποτελέσματα νέας φύτρωσης γίνονται ορατά μετά την 6η-8η εβδομάδα.",
          products: [
            {
              id: "hc-hl-1",
              name: "Ducray Anaphase+ Δυναμωτικό Σαμπουάν Τριχόπτωσης 400ml",
              brand: "Ducray",
              price: 14.2,
              originalPrice: 18.9,
              image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-hl-2",
              name: "Vichy Dercos Aminexil Clinical 5 Εντατική Αγωγή 21 Αμπούλες",
              brand: "Vichy",
              price: 42.5,
              originalPrice: 56.0,
              image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-hl-3",
              name: "Priorin Extra Συμπλήρωμα Κατά της Τριχόπτωσης 60 Κάψουλες",
              brand: "Priorin",
              price: 24.5,
              originalPrice: 32.0,
              image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-hl-4",
              name: "Bailleul Cystiphane Biorga Συμπλήρωμα για Μαλλιά & Νύχια 120 Δισκία",
              brand: "Bailleul",
              price: 22.8,
              originalPrice: 29.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "dandruff-scalp",
          name: "Πιτυρίδα & Σμηγματορροϊκή Δερματίτιδα",
          badge: "Αντιμυκητιασική Δράση",
          keyIngredients: "Selenium Disulfide 1%, Σαλικυλικό Οξύ, Ciclopirox Olamine, Piroctone Olamine",
          description:
            "Ορατές νιφάδες (λευκές ή κίτρινες), ερυθρότητα, κνησμός και απολέπιση στο τριχωτό της κεφαλής.",
          routineSteps: [
            "Θεραπευτικό λούσιμο με Dercos Anti-Dandruff DS ή Kerium DS (αφήστε 2 λεπτά να δράσει)",
            "Εφαρμογή 2-3 φορές την εβδομάδα για 4 εβδομάδες στη φάση εφόδου",
            "Συντήρηση με ήπιο εξισορροπητικό σαμπουάν ενδιάμεσα για αποφυγή υποτροπής",
          ],
          tip: "Μην ξύνετε το τριχωτό με τα νύχια, καθώς δημιουργούνται μικροτραυματισμοί που επιδεινώνουν τη μόλυνση και τη φλεγμονή.",
          products: [
            {
              id: "hc-ds-1",
              name: "Vichy Dercos Anti-Dandruff DS Σαμπουάν για Λιπαρά Μαλλιά 390ml",
              brand: "Vichy",
              price: 16.8,
              originalPrice: 21.5,
              image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-ds-2",
              name: "La Roche-Posay Kerium DS Εντατικό Σαμπουάν κατά της Πιτυρίδας 125ml",
              brand: "La Roche-Posay",
              price: 13.9,
              originalPrice: 17.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-ds-3",
              name: "Apivita Σαμπουάν κατά της Ξηροδερμίας με Σέλερι & Πρόπολη 250ml",
              brand: "Apivita",
              price: 11.5,
              originalPrice: 14.9,
              image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-ds-4",
              name: "Ducray Kelual DS Καταπραϋντική Κρέμα για Τριχωτό & Πρόσωπο 40ml",
              brand: "Ducray",
              price: 12.9,
              originalPrice: 16.5,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "dry-damaged",
          name: "Ξηρά, Ταλαιπωρημένα & Βαμμένα Μαλλιά",
          badge: "Θρέψη & Αναδόμηση",
          keyIngredients: "Κερατίνη Φυτικής Προέλευσης, Βούτυρο Cupuacu, Υαλουρονικό, Έλαιο Argan",
          description:
            "Τραχιές άκρες, ψαλίδα, σπάσιμο κατά το βούρτσισμα και απώλεια λάμψης από τεχνικές εργασίες και θερμικά εργαλεία.",
          routineSteps: [
            "Καθαρισμός με θρεπτικό σαμπουάν αναδόμησης χωρίς θειικά άλατα",
            "Εφαρμογή conditioner Keratin Repair σε κάθε λούσιμο για ξεμπέρδεμα",
            "Εντατική μάσκα Cupuacu 1 φορά την εβδομάδα & ορός θερμοπροστασίας πριν το πιστολάκι",
          ],
          tip: "Ταμπονάρετε τα μαλλιά με πετσέτα μικροϊνών. Μην τα τρίβετε έντονα, γιατί η βρεγμένη τρίχα είναι 3 φορές πιο ευάλωτη στο σπάσιμο.",
          products: [
            {
              id: "hc-dd-1",
              name: "Klorane Μάσκα με Βούτυρο Cupuacu για Ξηρά & Ταλαιπωρημένα Μαλλιά 150ml",
              brand: "Klorane",
              price: 12.5,
              originalPrice: 16.0,
              image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-dd-2",
              name: "Apivita Keratin Repair Conditioner Επανόρθωσης με Μέλι & Κερατίνη 150ml",
              brand: "Apivita",
              price: 11.9,
              originalPrice: 15.5,
              image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-dd-3",
              name: "Phyto Phytokeratine Serum Θερμοπροστασίας & Επανόρθωσης 100ml",
              brand: "Phyto",
              price: 17.5,
              originalPrice: 23.0,
              image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-dd-4",
              name: "Rene Furterer Absolue Keratine Ανανεωτική Μάσκα Υπέρτατης Θρέψης 200ml",
              brand: "Rene Furterer",
              price: 31.5,
              originalPrice: 42.0,
              image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
        {
          id: "oily-frequent",
          name: "Λιπαρότητα & Συχνό / Καθημερινό Λούσιμο",
          badge: "Ρύθμιση Σμήγματος",
          keyIngredients: "Εκχύλισμα Τσουκνίδας, Πρόπολη, Δεντρολίβανο, Γάλα Βρώμης, Ψευδάργυρος PCA",
          description:
            "Λιπαρές ρίζες που «λαδώνουν» μέσα σε 24 ώρες, βαριά μαλλιά χωρίς όγκο και ανάγκη για καθημερινό καθαρισμό.",
          routineSteps: [
            "Λούσιμο με σμηγματορρυθμιστικό σαμπουάν τσουκνίδας 2 φορές την εβδομάδα",
            "Ενδιάμεσα λουσίματα με εξαιρετικά απαλό σαμπουάν καθημερινής χρήσης με γάλα βρώμης",
            "Χρήση ξηρού σαμπουάν (Dry Shampoo) στις ρίζες για επιμήκυνση του χρόνου μεταξύ των λουσιμάτων",
          ],
          tip: "Όσο πιο επιθετικά λούζεστε για να διώξετε τη λιπαρότητα, τόσο περισσότερο σμήγμα παράγει το τριχωτό ως αντίδραση άμυνας. Επιλέξτε ήπιες συνθέσεις.",
          products: [
            {
              id: "hc-of-1",
              name: "Klorane Σαμπουάν με Εκχύλισμα Τσουκνίδας για Λιπαρά Μαλλιά 400ml",
              brand: "Klorane",
              price: 12.8,
              originalPrice: 16.5,
              image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-of-2",
              name: "Apivita Σαμπουάν Εξισορρόπησης Λιπαρότητας με Πρόπολη & Δεντρολίβανο 250ml",
              brand: "Apivita",
              price: 11.2,
              originalPrice: 14.5,
              image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-of-3",
              name: "Klorane Εξαιρετικά Απαλό Σαμπουάν με Γάλα Βρώμης για Συχνό Λούσιμο 400ml",
              brand: "Klorane",
              price: 12.5,
              originalPrice: 15.9,
              image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
            },
            {
              id: "hc-of-4",
              name: "Apivita Καθημερινό Σαμπουάν με Χαμομήλι & Μέλι 250ml",
              brand: "Apivita",
              price: 10.9,
              originalPrice: 13.9,
              image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
      ],
    },

    // 5. Pro Tips & Τελετουργία Εφαρμογής (Micro-copy)
    proTips: {
      title: "Tips & Τελετουργία Εφαρμογής από τους Φαρμακοποιούς",
      subtitle: "Μικρά επιστημονικά μυστικά για να μεγιστοποιήσετε την αποτελεσματικότητα των θεραπειών μαλλιών.",
      tips: [
        {
          title: "Ο Κανόνας των 2 Λουσιμάτων",
          description:
            "Το πρώτο χέρι σαμπουάν απομακρύνει σμήγμα, σκόνη και προϊόντα styling. Το δεύτερο χέρι είναι αυτό που επιτρέπει στα θεραπευτικά ενεργά συστατικά να δράσουν. Αφήστε τον αφρό να σταθεί για 1-2 λεπτά πριν ξεβγάλετε.",
          badge: "Χρυσός Κανόνας Λουσίματος",
        },
        {
          title: "Φυσιολογικός Κύκλος: 50-100 Τρίχες/Ημέρα",
          description:
            "Η απώλεια 50 έως 100 τριχών καθημερινά στο λούσιμο και το βούρτσισμα είναι απόλυτα φυσιολογικό στάδιο τελογενούς ανανέωσης. Εάν παρατηρείτε πάνω από 150 τρίχες για διάστημα άνω των 8 εβδομάδων, ξεκινήστε αγωγή 3 βημάτων.",
          badge: "Διάγνωση Τριχόπτωσης",
        },
        {
          title: "Σωστή Τοποθέτηση Conditioner & Μάσκας",
          description:
            "Εφαρμόζετε μάσκες και μαλακτικές κρέμες αποκλειστικά από το ύψος των αυτιών και κάτω, ποτέ στη ρίζα. Η εφαρμογή στο τριχωτό φράζει τους πόρους, επιβαρύνει τους σμηγματογόνους αδένες και στερεί τον φυσικό όγκο.",
          badge: "Προστασία Ρίζας",
        },
        {
          title: "Μασάζ Τριχωτού με τις Ρώγες των Δακτύλων",
          description:
            "Κάντε απαλό κυκλικό μασάζ στο τριχωτό για 2 λεπτά κατά την εφαρμογή λοσιόν ή σαμπουάν. Αυξάνει τη ροή αίματος προς τον θύλακα, βελτιώνοντας την απορρόφηση των ενεργών συστατικών κατά 40%.",
          badge: "Μικροκυκλοφορία",
        },
      ],
    },

    // 6. Πλήρεις Υποενότητες Προϊόντων (Sub-sections with Correct Hair Banners)
    subSections: [
      {
        id: "hair-loss-section",
        title: "1. Τριχόπτωση, Ενδυνάμωση & Τόνωση Ρίζας",
        image: "/categories/gia-ta-mallia-banner-category.webp",
        intro:
          "Κλινικά ελεγμένες τοπικές αγωγές, δυναμωτικά σαμπουάν και στοχευμένα διατροφικά συμπληρώματα για αναχαίτιση της τριχόπτωσης και αύξηση της πυκνότητας.",
        productHeading: "Προτεινόμενα Προϊόντα Κατά της Τριχόπτωσης",
        productGroups: [
          {
            categoryTitle: "Δυναμωτικά Σαμπουάν Τριχόπτωσης",
            products: [
              {
                id: "hc-sec-1",
                name: "Ducray Anaphase+ Δυναμωτικό Σαμπουάν Τριχόπτωσης 400ml",
                brand: "Ducray",
                price: 14.2,
                originalPrice: 18.9,
                image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-2",
                name: "Vichy Dercos Energy+ Δυναμωτικό Σαμπουάν με Aminexil 400ml",
                brand: "Vichy",
                price: 15.5,
                originalPrice: 19.9,
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Εντατικές Τοπικές Αγωγές & Αμπούλες",
            products: [
              {
                id: "hc-sec-3",
                name: "Vichy Dercos Aminexil Clinical 5 Εντατική Αγωγή 21 Αμπούλες",
                brand: "Vichy",
                price: 42.5,
                originalPrice: 56.0,
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-4",
                name: "Ducray Neoptide Expert Διπλή Λοσιόν κατά της Χρόνιας Τριχόπτωσης 2x50ml",
                brand: "Ducray",
                price: 36.8,
                originalPrice: 48.0,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Συμπληρώματα Διατροφής για Μαλλιά",
            products: [
              {
                id: "hc-sec-5",
                name: "Priorin Extra Συμπλήρωμα Κατά της Τριχόπτωσης 60 Κάψουλες",
                brand: "Priorin",
                price: 24.5,
                originalPrice: 32.0,
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-6",
                name: "Bailleul Cystiphane Biorga Συμπλήρωμα για Μαλλιά & Νύχια 120 Δισκία",
                brand: "Bailleul",
                price: 22.8,
                originalPrice: 29.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "dandruff-scalp-section",
        title: "2. Πιτυρίδα, Ξηροδερμία & Σμηγματορροϊκή Δερματίτιδα",
        image: "/categories/gia-ta-mallia-banner-560x1000-1-520x460.webp",
        intro:
          "Ιατροτεχνολογικά και δερμοκαλλυντικά σαμπουάν με Selenium Disulfide και Ciclopirox Olamine που εξαλείφουν τις νιφάδες και ανακουφίζουν άμεσα από τον κνησμό.",
        productHeading: "Προϊόντα για Πιτυρίδα & Τριχωτό",
        productGroups: [
          {
            categoryTitle: "Θεραπευτικά Σαμπουάν Πιτυρίδας",
            products: [
              {
                id: "hc-sec-7",
                name: "Vichy Dercos Anti-Dandruff DS Σαμπουάν για Λιπαρά Μαλλιά 390ml",
                brand: "Vichy",
                price: 16.8,
                originalPrice: 21.5,
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-8",
                name: "La Roche-Posay Kerium DS Εντατικό Σαμπουάν κατά της Πιτυρίδας 125ml",
                brand: "La Roche-Posay",
                price: 13.9,
                originalPrice: 17.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-9",
                name: "Apivita Σαμπουάν κατά της Ξηροδερμίας με Σέλερι & Πρόπολη 250ml",
                brand: "Apivita",
                price: 11.5,
                originalPrice: 14.9,
                image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "nourish-repair-section",
        title: "3. Ενυδάτωση, Αναδόμηση & Θερμοπροστασία",
        image: "/guide/back-view-woman-with-towel-head-applying-cream-skin.jpg",
        intro:
          "Πλούσιες μάσκες θρέψης με βούτυρο Cupuacu, μαλακτικά conditioners κερατίνης και οροί θερμοπροστασίας για μεταξένια απαλότητα χωρίς σπάσιμο.",
        productHeading: "Προϊόντα Θρέψης & Προστασίας",
        productGroups: [
          {
            categoryTitle: "Μάσκες & Conditioners Επανόρθωσης",
            products: [
              {
                id: "hc-sec-10",
                name: "Klorane Μάσκα με Βούτυρο Cupuacu για Ξηρά & Ταλαιπωρημένα Μαλλιά 150ml",
                brand: "Klorane",
                price: 12.5,
                originalPrice: 16.0,
                image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-11",
                name: "Apivita Keratin Repair Conditioner Επανόρθωσης 150ml",
                brand: "Apivita",
                price: 11.9,
                originalPrice: 15.5,
                image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Έλαια & Οροί Θερμοπροστασίας",
            products: [
              {
                id: "hc-sec-12",
                name: "Phyto Phytokeratine Serum Θερμοπροστασίας & Επανόρθωσης 100ml",
                brand: "Phyto",
                price: 17.5,
                originalPrice: 23.0,
                image: "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-13",
                name: "Rene Furterer 5 Sens Έλαιο Υπέρτατης Λάμψης & Θρέψης 100ml",
                brand: "Rene Furterer",
                price: 26.5,
                originalPrice: 34.0,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        id: "oily-frequent-section",
        title: "4. Λιπαρότητα & Ήπιο Καθημερινό Λούσιμο",
        image: "/categories/gia-ta-mallia-banner-560x1000-1.webp",
        intro:
          "Εξισορροπητικά σαμπουάν με τσουκνίδα και πρόπολη για ρύθμιση του σμήγματος, σε συνδυασμό με εξαιρετικά ήπιες συνθέσεις βρώμης για όσους λούζονται καθημερινά.",
        productHeading: "Προϊόντα για Λιπαρά & Καθημερινά Μαλλιά",
        productGroups: [
          {
            categoryTitle: "Σμηγματορρυθμιστικά & Ήπια Σαμπουάν",
            products: [
              {
                id: "hc-sec-14",
                name: "Klorane Σαμπουάν με Εκχύλισμα Τσουκνίδας για Λιπαρά Μαλλιά 400ml",
                brand: "Klorane",
                price: 12.8,
                originalPrice: 16.5,
                image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-15",
                name: "Apivita Σαμπουάν Εξισορρόπησης Λιπαρότητας με Πρόπολη & Δεντρολίβανο 250ml",
                brand: "Apivita",
                price: 11.2,
                originalPrice: 14.5,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-sec-16",
                name: "Klorane Εξαιρετικά Απαλό Σαμπουάν με Γάλα Βρώμης 400ml",
                brand: "Klorane",
                price: 12.5,
                originalPrice: 15.9,
                image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],

    // 7. FAQs για τα Μαλλιά (Schema.org ready)
    faqs: [
      {
        question: "Πόσες τρίχες είναι φυσιολογικό να χάνουμε καθημερινά;",
        answer:
          "Η απώλεια 50 έως 100 τριχών την ημέρα θεωρείται απόλυτα φυσιολογική και αποτελεί μέρος του τελογενούς σταδίου αναγέννησης των μαλλιών. Εάν παρατηρείτε απώλεια άνω των 150 τριχών, ορατά κενά στο τριχωτό ή έντονη τριχόπτωση που επιμένει για πάνω από 2 μήνες, συνιστάται η έναρξη ολοκληρωμένου πρωτοκόλλου τριχόπτωσης και ιατρική αξιολόγηση.",
      },
      {
        question: "Γιατί χρειάζονται 2 λουσίματα αντί για ένα;",
        answer:
          "Το 1ο χέρι λειτουργεί καθαριστικά, απομακρύνοντας το συσσωρευμένο σμήγμα, τη σκόνη και τα υπολείμματα styling. Το 2ο χέρι επιτρέπει στα εξειδικευμένα ενεργά συστατικά (όπως Aminexil, Selenium Disulfide ή κερατίνη) να έρθουν σε άμεση επαφή με το καθαρό τριχωτό και να απορροφηθούν. Για μέγιστη απόδοση, αφήστε το 2ο χέρι να δράσει για 1-2 λεπτά.",
      },
      {
        question: "Ποια είναι η βασική διαφορά ανάμεσα σε ξηροδερμία και λιπαρή πιτυρίδα;",
        answer:
          "Στην ξηροδερμία οι νιφάδες είναι μικρές, λευκές και ξηρές, πέφτοντας εύκολα στους ώμους, ενώ το κεφάλι έχει αίσθηση τραβήγματος. Στη λιπαρή πιτυρίδα, οι νιφάδες είναι μεγαλύτερες, παχιές, κιτρινωπές και προσκολλώνται στο τριχωτό λόγω του μύκητα Malassezia και της υπερβολικής έκκρισης σμήγματος. Η ξηροδερμία απαιτεί ενυδάτωση, ενώ η πιτυρίδα αντιμυκητιασική θεραπεία.",
      },
      {
        question: "Πόσο καιρό πρέπει να παίρνω συμπλήρωμα διατροφής για να δω αποτέλεσμα στην τριχόπτωση;",
        answer:
          "Ο κύκλος ζωής της τρίχας διαρκεί μήνες. Για να παρατηρηθεί ουσιαστική μείωση της τριχόπτωσης και ανάπτυξη νέων τριχών, τα συμπληρώματα με κυστίνη, βιοτίνη και ψευδάργυρο πρέπει να λαμβάνονται καθημερινά για τουλάχιστον 3 συνεχόμενους μήνες (12 εβδομάδες).",
      },
      {
        question: "Μπορώ να λούζομαι καθημερινά αν έχω λιπαρά μαλλιά;",
        answer:
          "Ναι, αρκεί να χρησιμοποιείτε ένα εξαιρετικά ήπιο σαμπουάν χωρίς σκληρά θειικά άλατα (π.χ. με γάλα βρώμης). Χρησιμοποιείτε το σμηγματορρυθμιστικό σαμπουάν (π.χ. τσουκνίδα) μόνο 2 φορές την εβδομάδα. Το επιθετικό καθημερινό λούσιμο με ισχυρά καθαριστικά προκαλεί αντιδραστική υπερπαραγωγή σμήγματος.",
      },
    ],

    // 8. Lead Generation / Pharmacist Consultation Call-to-Action
    pharmacistCta: {
      badge: "Δωρεάν Συμβουλή Φαρμακοποιού",
      title: "Αντιμετωπίζεις επίμονη τριχόπτωση ή πρόβλημα στο τριχωτό;",
      subtitle:
        "Οι εξειδικευμένοι φαρμακοποιοί του ProPharmacy είναι διαθέσιμοι να αξιολογήσουν τον τύπο της τριχόπτωσης ή της πιτυρίδας σου και να σου προτείνουν την ακριβή συνδυαστική αγωγή.",
      phone: "210 1234567",
      buttonText: "Κάλεσε τον Φαρμακοποιό (Δωρεάν)",
      note: "Δευτέρα – Παρασκευή 09:00 – 21:00 · Σάββατο 09:00 – 15:00",
    },

    // 9. Medical Disclaimer
    disclaimer:
      "ΙΑΤΡΙΚΗ ΕΠΙΣΗΜΑΝΣΗ: Οι πληροφορίες και οι προτάσεις του παρόντος οδηγού έχουν ενημερωτικό χαρακτήρα. Σε περιπτώσεις ξαφνικής κυκλικής απώλειας μαλλιών (γυροειδής αλωπεκία), έντονου πόνου, ελκών ή φλεγμονής με πύον στο τριχωτό, συνιστάται άμεση κλινική εκτίμηση από δερματολόγο.",
  },
};

