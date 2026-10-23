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
    introHeading: "Η Ιδανική Ρουτίνα για το Δέρμα σας",
    introText:
      "Κάθε επιδερμίδα είναι μοναδική. Ένας σωστός συνδυασμός καθαρισμού, ενυδάτωσης, στοχευμένων ορών και αντηλιακής προστασίας διατηρεί το πρόσωπο λαμπερό, υγιές και προστατευμένο από την πρόωρη γήρανση.",
    sections: [
      {
        number: "1.",
        title: "Ήπιος Καθαρισμός",
        items: [
          "Πρωί & Βράδυ: Απομακρύνετε ρύπους και σμήγμα χωρίς να διαταράσσετε τον επιδερμικό φραγμό.",
          "Επιλογή βάσει τύπου: Τζελ για λιπαρές/μικτές επιδερμίδες, κρεμώδες γαλάκτωμα ή έλαιο για ξηρές.",
        ],
      },
      {
        number: "2.",
        title: "Στοχευμένοι Οροί (Serums)",
        items: [
          "Αντιοξειδωτικά: Βιταμίνη C το πρωί για λάμψη και προστασία από περιβαλλοντικές επιθέσεις.",
          "Αντιγήρανση & Ανάπλαση: Ρετινόλη, υαλουρονικό οξύ και πεπτίδια για ελαστικότητα και λείανση ρυτίδων.",
        ],
      },
      {
        number: "3.",
        title: "Ενυδάτωση & Φραγμός",
        items: [
          "Κρέμα ημέρας/νύχτας: «Κλειδώνει» την υγρασία και υποστηρίζει την ανάπλαση της επιδερμίδας.",
          "Κεραμίδια & Νιασιναμίδη: Ενισχύουν την ανθεκτικότητα και καταπραΰνουν ερεθισμούς.",
        ],
      },
      {
        number: "4.",
        title: "Καθημερινή Αντηλιακή Προστασία",
        items: [
          "365 ημέρες τον χρόνο: Η υπεριώδης ακτινοβολία UVA ευθύνεται για το 80% της πρόωρης γήρανσης.",
          "SPF 30+: Εφαρμόστε ως τελευταίο βήμα της πρωινής σας ρουτίνας.",
        ],
      },
    ],
    subSections: [
      {
        title: "Ολοκληρωμένη Ρουτίνα Προσώπου",
        intro:
          "Κορυφαία δερμοκαλλυντικά επιλεγμένα από τους φαρμακοποιούς μας για εξειδικευμένη φροντίδα.",
        productHeading: "Προτεινόμενα Προϊόντα",
        productGroups: [
          {
            categoryTitle: "Καθαρισμός & Ενυδάτωση",
            products: [
              {
                id: "fc-1",
                name: "CeraVe Moisturising Cream Ενυδατική Κρέμα 340g",
                brand: "CeraVe",
                price: 14.5,
                originalPrice: 18.2,
                image:
                  "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "fc-2",
                name: "La Roche-Posay Effaclar Duo+ M Επανορθωτική Φροντίδα 40ml",
                brand: "La Roche-Posay",
                price: 15.2,
                originalPrice: 19.0,
                image:
                  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Μάσκες & Peeling",
            products: [
              {
                id: "fc-3",
                name: "Apivita Express Beauty Μάσκα Προσώπου με Πράσινη Άργιλο 2x8ml",
                brand: "Apivita",
                price: 3.4,
                originalPrice: 4.5,
                image:
                  "https://images.unsplash.com/photo-1567928805192-7f40f6bee1a3?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],
  },

  "body-care": {
    slug: "body-care",
    title: "Οδηγός Περιποίησης Σώματος",
    breadcrumb: "Περιποίηση Σώματος",
    headerBannerImage: "/guide/guide-body-banner.webp",
    featuredImage: "/guide/guide-body-banner.webp",
    introHeading: "Ενυδάτωση, Απολέπιση & Σύσφιξη",
    introText:
      "Η επιδερμίδα του σώματος χρειάζεται την ίδια προσοχή με το πρόσωπο. Η τακτική απολέπιση και η καθημερινή ενυδάτωση προλαμβάνουν την ξηρότητα, τη χαλάρωση και διατηρούν το δέρμα μεταξένιο και ελαστικό.",
    sections: [
      {
        number: "1.",
        title: "Απαλό Ντους & Καθαρισμός",
        items: [
          "Αποφύγετε το καυτό νερό: Αφαιρεί τα φυσικά έλαια του δέρματος και προκαλεί αφυδάτωση.",
          "Έλαια & Syndet: Χρησιμοποιήστε καθαριστικά χωρίς σαπούνι για σεβασμό του φυσικού pH.",
        ],
      },
      {
        number: "2.",
        title: "Απολέπιση 1-2 φορές την εβδομάδα",
        items: [
          "Απομάκρυνση νεκρών κυττάρων: Αφήνει το δέρμα απαλό και αυξάνει την απορρόφηση των ενυδατικών προϊόντων.",
          "Scrub με κόκκους ή οξέα: Κάντε απαλές κυκλικές κινήσεις σε νωπό δέρμα.",
        ],
      },
      {
        number: "3.",
        title: "Βαθιά Ενυδάτωση & Θρέψη",
        items: [
          "Εφαρμογή σε νωπή επιδερμίδα: Αμέσως μετά το μπάνιο, για να παγιδευτεί η υγρασία.",
          "Επιλογή υφής: Ελαφριά λοσιόν το καλοκαίρι, πλούσιο butter ή balm τον χειμώνα.",
        ],
      },
      {
        number: "4.",
        title: "Σύσφιξη & Κυτταρίτιδα",
        items: [
          "Ενεργά συστατικά: Καφεΐνη, εκχυλίσματα φυκιών και ρετινόλη διεγείρουν τη μικροκυκλοφορία.",
          "Συνέπεια & Μασάζ: Απαραίτητο το καθημερινό μασάζ με ανοδικές κινήσεις για ορατά αποτελέσματα.",
        ],
      },
    ],
    subSections: [
      {
        title: "Κορυφαία Προϊόντα Σώματος",
        intro: "Φροντίστε το σώμα σας με δοκιμασμένες συνθέσεις από κορυφαία εργαστήρια.",
        productHeading: "Προτεινόμενα Προϊόντα",
        productGroups: [
          {
            categoryTitle: "Καθαρισμός & Ενυδάτωση Σώματος",
            products: [
              {
                id: "bc-1",
                name: "Bioderma Atoderm Huile de Douche Έλαιο Καθαρισμού 1000ml",
                brand: "Bioderma",
                price: 16.8,
                originalPrice: 22.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "bc-2",
                name: "Geomar Thalasso Scrub Αναζωογονητικό Πίλινγκ Σώματος 600g",
                brand: "Geomar",
                price: 12.3,
                originalPrice: 15.9,
                image:
                  "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Ειδική Φροντίδα & Σύσφιξη",
            products: [
              {
                id: "bc-3",
                name: "Elancyl Slim Design Night Φροντίδα Κατά της Κυτταρίτιδας 200ml",
                brand: "Elancyl",
                price: 24.5,
                originalPrice: 32.0,
                image:
                  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],
  },

  "hair-care": {
    slug: "hair-care",
    title: "Οδηγός Περιποίησης Μαλλιών",
    breadcrumb: "Περιποίηση Μαλλιών",
    headerBannerImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    featuredImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    introHeading: "Υγιή, Δυνατά & Λαμπερά Μαλλιά",
    introText:
      "Τα όμορφα μαλλιά ξεκινούν από ένα υγιές τριχωτό. Είτε αντιμετωπίζετε εποχική τριχόπτωση, είτε ξηρότητα και φθορά, ο σωστός συνδυασμός σαμπουάν, μάσκας και εξειδικευμένων συμπληρωμάτων προσφέρει άμεσα αποτελέσματα.",
    sections: [
      {
        number: "1.",
        title: "Σωστή Επιλογή Σαμπουάν",
        items: [
          "Στόχευση στο τριχωτό: Επιλέξτε σαμπουάν με βάση τις ανάγκες της ρίζας (λιπαρότητα, ξηροδερμία, τριχόπτωση).",
          "Ήπιο λούσιμο: Μην τρίβετε επιθετικά το τριχωτό· κάντε απαλό μασάζ με τις άκρες των δαχτύλων.",
        ],
      },
      {
        number: "2.",
        title: "Θρέψη & Επανόρθωση",
        items: [
          "Conditioner σε κάθε λούσιμο: Εφαρμόστε μόνο σε μήκη και άκρες για ξεμπέρδεμα και προστασία.",
          "Εντατική μάσκα 1 φορά την εβδομάδα: Με κερατίνη, φυτικά έλαια ή αμινοξέα για βαθιά αναδόμηση.",
        ],
      },
      {
        number: "3.",
        title: "Αντιμετώπιση Τριχόπτωσης",
        items: [
          "Εποχική ή χρόνια: Εντοπίστε την αιτία (στρες, διατροφή, ορμονικές αλλαγές) με τη βοήθεια ειδικού.",
          "Συνδυαστική δράση: Δυναμωτικό σαμπουάν, λοσιόν τριχωτού και συμπλήρωμα με βιοτίνη και ψευδάργυρο.",
        ],
      },
      {
        number: "4.",
        title: "Προστασία από Θερμότητα",
        items: [
          "Θερμοπροστατευτικά σπρέι/έλαια: Απαραίτητα πριν από πιστολάκι ή πρέσα ισιώματος.",
          "Στέγνωμα με μέτρο: Χαμηλή θερμοκρασία για αποφυγή σπασίματος και ψαλίδας.",
        ],
      },
    ],
    subSections: [
      {
        title: "Προτεινόμενα Προϊόντα Μαλλιών",
        intro:
          "Εξειδικευμένες συνθέσεις φαρμακείου για δύναμη, όγκο και λάμψη από τη ρίζα ως τις άκρες.",
        productHeading: "Ενδεικτικά Προϊόντα",
        productGroups: [
          {
            categoryTitle: "Τριχόπτωση & Ενδυνάμωση",
            products: [
              {
                id: "hc-1",
                name: "Ducray Anaphase+ Δυναμωτικό Σαμπουάν Τριχόπτωσης 400ml",
                brand: "Ducray",
                price: 14.2,
                originalPrice: 18.9,
                image:
                  "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "hc-2",
                name: "Vichy Dercos Δυναμωτικό Σαμπουάν με Aminexil 400ml",
                brand: "Vichy",
                price: 15.5,
                originalPrice: 19.9,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Ενυδάτωση & Μάσκες",
            products: [
              {
                id: "hc-3",
                name: "Klorane Μάσκα με Βούτυρο Cupuacu για Ξηρά Μαλλιά 150ml",
                brand: "Klorane",
                price: 12.5,
                originalPrice: 16.0,
                image:
                  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],
  },
};

