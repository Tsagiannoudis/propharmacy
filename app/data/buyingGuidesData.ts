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

  // Specific sections for Baby care
  calloutBox?: {
    badge: string;
    heading: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };

  // Specific content for Vitamins guide
  subSections?: {
    title: string;
    intro: string;
    productHeading?: string;
    productGroups?: GuideProductGroup[];
  }[];
}

export const buyingGuidesData: Record<string, BuyingGuideDetail> = {
  "baby-care": {
    slug: "baby-care",
    title: "Οδηγός Βρεφικής Φροντίδας",
    breadcrumb: "Οδηγός Βρεφικής Φροντίδας",
    featuredImage:
      "https://images.unsplash.com/photo-1555252333-978fead06c00?auto=format&fit=crop&w=1000&q=80",
    introHeading: "Οδηγός Βρεφικής Φροντίδας",
    introText:
      "Η φροντίδα ενός βρέφους είναι μια μοναδική και προκλητική εμπειρία που απαιτεί αγάπη, υπομονή και σωστές γνώσεις. Αυτός ο οδηγός έχει ως στόχο να παρέχει πολύτιμες πληροφορίες και συμβουλές για τη φροντίδα των βρεφών, από τη διατροφή μέχρι την ανάπτυξη και την υγεία τους.",
    sections: [
      {
        number: "1.",
        title: "Διατροφή",
        items: [
          "Θηλασμός: Ο θηλασμός είναι η πιο φυσική και υγιεινή επιλογή για τα βρέφη. Συνιστάται να θηλάζετε αποκλειστικά για τους πρώτους 6 μήνες.",
          "Συμπληρωματική διατροφή: Μετά τους 6 μήνες, μπορείτε να εισάγετε σταδιακά στερεά τρόφιμα, ξεκινώντας με λαχανικά και φρούτα, και παρακολουθήστε για τυχόν αλλεργίες.",
        ],
      },
      {
        number: "2.",
        title: "Υγιεινή και φροντίδα",
        items: [
          "Καθαρισμός χεριών: Καθαρίζετε τα χέρια σας πριν αγγίξετε το μωρό. Η καθαριότητα είναι βασική για την πρόληψη λοιμώξεων.",
          "Μπάνιο: Δώστε ένα ήπιο στο μωρό σας 2-3 φορές την εβδομάδα, χρησιμοποιώντας απαλά προϊόντα που είναι κατάλληλα για βρέφη.",
        ],
      },
      {
        number: "3.",
        title: "Ύπνος",
        items: [
          "Ασφάλεια: Το μωρό πρέπει να κοιμάται ανάσκελα σε ένα ασφαλές κρεβάτι. Αποφύγετε μαξιλάρια και λούτρινα παιχνίδια στο κρεβάτι.",
          "Ρουτίνα ύπνου: Δημιουργήστε μια ήρεμη ρουτίνα για τον ύπνο, όπως διάβασμα ή ήσυχη μουσική.",
        ],
      },
      {
        number: "4.",
        title: "Ανάπτυξη",
        items: [
          "Παιχνίδι και εκπαίδευση: Παίξτε με το μωρό σας καθημερινά. Χρησιμοποιήστε παιχνίδια που ενθαρρύνουν την κινητικότητα και τη γνωστική ανάπτυξη.",
          "Κοινωνικοί δεσμοί: Ενθαρρύνετε την αλληλεπίδραση με άλλους ενήλικες και βρέφη για την ανάπτυξη κοινωνικών δεξιοτήτων.",
        ],
      },
      {
        number: "5.",
        title: "Υγεία",
        items: [
          "Εμβολιασμοί: Ακολουθήστε το πρόγραμμα εμβολιασμών που συνιστά ο παιδίατρός σας.",
          "Επισκέψεις στον γιατρό: Προγραμματίστε τακτικές επισκέψεις για παρακολούθηση της ανάπτυξης και της υγείας του μωρού.",
        ],
      },
    ],
    calloutBox: {
      badge: "Βρεφικά Γάλατα",
      heading: "Νο1",
      text: "Τα βρεφικά γάλατα Νο 1 είναι ειδικά σχεδιασμένα για βρέφη από τη γέννηση έως περίπου 6 μηνών. Αυτά τα γάλατα προσφέρουν τη σωστή ισορροπία θρεπτικών συστατικών που είναι απαραίτητα για την ανάπτυξη του μωρού.",
      buttonText: "ΔΕΙΤΕ ΤΑ ΠΡΟΪΟΝΤΑ",
      buttonLink: "#baby-milks",
    },
  },

  "vitamins-supplements": {
    slug: "vitamins-supplements",
    title: "Οδηγός Βιταμίνες και Συμπληρώματα",
    breadcrumb: "Οδηγός Βιταμίνες και Συμπληρώματα",
    headerBannerImage: "/guide/guide-banner-suppliments&vitamins-2.webp",
    featuredImage: "/guide/guide-banner-suppliments&vitamins-2.webp",
    introHeading: "Οδηγός Βιταμίνες & Συμπληρώματα",
    introText:
      "Τα συμπληρώματα διατροφής μπορούν να παίξουν σημαντικό ρόλο στη διατήρηση της υγείας μας, συμπληρώνοντας τη διατροφή μας όταν αυτή δεν είναι αρκετή. Ωστόσο, είναι απαραίτητο να τα χρησιμοποιούμε με υπευθυνότητα και υπό την καθοδήγηση ειδικών, καθώς η υπερβολική ή ακατάλληλη χρήση τους μπορεί να είναι επιζήμια για την υγεία. Πριν ξεκινήσετε οποιοδήποτε συμπλήρωμα, συμβουλευτείτε τον γιατρό ή τον φαρμακοποιό σας.",
    subSections: [
      {
        title: "Πολυβιταμίνες",
        intro:
          "Οι πολυβιταμίνες συνδυάζουν διάφορες βιταμίνες και μέταλλα και χρησιμοποιούνται για την κάλυψη τυχόν διατροφικών ελλείψεων.",
        productHeading: "Ενδεικτικά προϊόντα",
        productGroups: [
          {
            categoryTitle: "Βιταμίνες C, Πολυβιταμίνες",
            products: [
              {
                id: "vit-c-1",
                name: "Solgar Vitamin C 1000mg 100 Φυτοκάψουλες για την Ενίσχυση του Ανοσοποιητικού",
                brand: "Solgar",
                price: 18.5,
                originalPrice: 24.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "vit-c-2",
                name: "Lamberts Vitamin C Time Release 1000mg 60 Ταμπλέτες Σταδιακής Αποδέσμευσης",
                brand: "Lamberts",
                price: 16.2,
                originalPrice: 21.0,
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Πολυβιταμίνες Ενηλίκων",
            products: [
              {
                id: "vit-multi-1",
                name: "Centrum Multivitamin Adult 30 Δισκία Πλήρης Σύνθεση",
                brand: "Centrum",
                price: 13.8,
                originalPrice: 17.5,
                image:
                  "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Μέταλλα & Ιχνοστοιχεία",
            products: [
              {
                id: "vit-mineral-1",
                name: "Power Health Magnesium Direct 350mg 30 Φακελίσκοι Χωρίς Νερό",
                brand: "Power Health",
                price: 9.9,
                originalPrice: 13.2,
                image:
                  "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Βιταμίνες για Παιδιά",
            products: [
              {
                id: "vit-kid-1",
                name: "Chewy Vites Kids Multivitamin Plus Iron 60 Ζελεδάκια Φρούτων",
                brand: "Chewy Vites",
                price: 10.4,
                originalPrice: 13.9,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "vit-kid-2",
                name: "Moller's Omega-3 Μουρουνέλαιο Ζελεδάκια Ψαράκια 45 τεμάχια",
                brand: "Moller's",
                price: 15.6,
                originalPrice: 19.5,
                image:
                  "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "vit-kid-3",
                name: "Nature's Plus Animal Parade Gold Πολυβιταμίνες για Παιδιά 60 Μασώμενα",
                brand: "Nature's Plus",
                price: 19.9,
                originalPrice: 25.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "vit-kid-4",
                name: "Lanes Kidi Multi Ζελεδάκια με 9 Βιταμίνες 60 Τεμάχια",
                brand: "Lanes",
                price: 8.9,
                originalPrice: 11.5,
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
      {
        title: "Συμπληρώματα διατροφής",
        intro:
          "Υπάρχουν πολλά διαφορετικά συμπληρώματα διατροφής διαθέσιμα, το καθένα με τα δικά του πιθανά οφέλη. Ορισμένα από τα πιο κοινά συμπληρώματα περιλαμβάνουν προβιοτικά, κολλαγόνο, ωμέγα 3 λιπαρά οξέα και ειδικά σκευάσματα για το στρες και τον ύπνο.",
        productHeading: "Ενδεικτικά προϊόντα",
        productGroups: [
          {
            categoryTitle: "Προβιοτικά",
            products: [
              {
                id: "supp-prob-1",
                name: "Bio-Kult Advanced Multi-Strain Formula 60 Κάψουλες Προβιοτικών",
                brand: "Bio-Kult",
                price: 19.8,
                originalPrice: 26.0,
                image:
                  "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Διαχείριση Βάρους",
            products: [
              {
                id: "supp-weight-1",
                name: "XLS Medical Pro-7 Fat Binder 180 Καψάκια για Απώλεια Βάρους",
                brand: "XLS Medical",
                price: 49.9,
                originalPrice: 68.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Τονωτικά Ενέργειας",
            products: [
              {
                id: "supp-energy-1",
                name: "Tonotil Plus Συμπλήρωμα Τόνωσης & Ενέργειας 15 Φιαλίδια των 10ml",
                brand: "Tonotil",
                price: 14.5,
                originalPrice: 18.9,
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
          {
            categoryTitle: "Λιπαρά Οξέα & Ωμέγα 3",
            products: [
              {
                id: "supp-omega-1",
                name: "Eskimo-3 Pure Fish Oil Omega-3 105ml Φυσικό Έλαιο Ψαριών",
                brand: "Eskimo",
                price: 16.9,
                originalPrice: 22.0,
                image:
                  "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "supp-omega-2",
                name: "Solgar Omega-3 Double Strength 700mg 60 Μαλακές Κάψουλες",
                brand: "Solgar",
                price: 24.3,
                originalPrice: 31.0,
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
              },
              {
                id: "supp-omega-3",
                name: "Mollers Total Plus Omega 3 με Βιταμίνες & Μέταλλα 28 Κάψουλες + 28 Ταμπλέτες",
                brand: "Moller's",
                price: 21.5,
                originalPrice: 27.5,
                image:
                  "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=400&q=80",
              },
            ],
          },
        ],
      },
    ],
  },
};
