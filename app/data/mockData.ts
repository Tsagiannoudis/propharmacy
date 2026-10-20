import { Product, CategoryGroup, QuickCategory } from "../types";

export const quickCategories: QuickCategory[] = [
  {
    id: "face",
    title: "Πρόσωπο",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=face",
  },
  {
    id: "hair",
    title: "Μαλλιά",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=hair",
  },
  {
    id: "body",
    title: "Σώμα",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=body",
  },
  {
    id: "baby",
    title: "Παιδί, Μαμάδα",
    image:
      "https://images.unsplash.com/photo-1555252333-978fead06c00?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=baby",
  },
  {
    id: "supplements",
    title: "Συμπληρώματα",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=supplements",
  },
  {
    id: "pharmacy",
    title: "Φαρμακείο",
    image:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=pharmacy",
  },
];

export const topPicksCategoryGroups: CategoryGroup[] = [
  {
    id: "face",
    title: "Πρόσωπο",
    headerBg: "bg-sky-400 text-white",
    headerImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    link: "#face",
    products: [
      {
        id: "p1",
        name: "La Roche-Posay Effaclar Duo+ M Επανορθωτική Φροντίδα 40ml",
        brand: "La Roche-Posay",
        category: "Πρόσωπο",
        price: 15.2,
        originalPrice: 19.0,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "p2",
        name: "CeraVe Moisturising Cream Ενυδατική Κρέμα 340g",
        brand: "CeraVe",
        category: "Πρόσωπο",
        price: 14.5,
        originalPrice: 18.2,
        image:
          "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "p3",
        name: "Avene Cicalfate+ Επανορθωτική Προστατευτική Κρέμα 100ml",
        brand: "Avene",
        category: "Πρόσωπο",
        price: 11.9,
        originalPrice: 14.9,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "p4",
        name: "Apivita Express Beauty Μάσκα Προσώπου με Πράσινη Άργιλο 2x8ml",
        brand: "Apivita",
        category: "Πρόσωπο",
        price: 3.4,
        originalPrice: 4.5,
        image:
          "https://images.unsplash.com/photo-1567928805192-7f40f6bee1a3?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "body",
    title: "Σώμα",
    headerBg: "bg-lime-400 text-white",
    headerImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80",
    link: "#body",
    products: [
      {
        id: "b1",
        name: "Bioderma Atoderm Huile de Douche Έλαιο Καθαρισμού 1000ml",
        brand: "Bioderma",
        category: "Σώμα",
        price: 16.8,
        originalPrice: 22.0,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "b2",
        name: "Geomar Thalasso Scrub Αναζωογονητικό Πίλινγκ Σώματος 600g",
        brand: "Geomar",
        category: "Σώμα",
        price: 12.3,
        originalPrice: 15.9,
        image:
          "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "b3",
        name: "Tree Hut Shea Sugar Body Scrub Strawberry 510g",
        brand: "Tree Hut",
        category: "Σώμα",
        price: 13.9,
        originalPrice: 17.5,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "b4",
        name: "Elancyl Slim Design Night Φροντίδα Κατά της Κυτταρίτιδας 200ml",
        brand: "Elancyl",
        category: "Σώμα",
        price: 24.5,
        originalPrice: 32.0,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "hair",
    title: "Μαλλιά",
    headerBg: "bg-rose-500 text-white",
    headerImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
    link: "#hair",
    products: [
      {
        id: "h1",
        name: "Klorane Μάσκα με Βούτυρο Cupuacu για Ξηρά Μαλλιά 150ml",
        brand: "Klorane",
        category: "Μαλλιά",
        price: 12.5,
        originalPrice: 16.0,
        image:
          "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "h2",
        name: "Ducray Anaphase+ Δυναμωτικό Σαμπουάν Τριχόπτωσης 400ml",
        brand: "Ducray",
        category: "Μαλλιά",
        price: 14.2,
        originalPrice: 18.9,
        image:
          "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "h3",
        name: "Apivita Hair Care Σαμπουάν Κατά της Πιτυρίδας 250ml",
        brand: "Apivita",
        category: "Μαλλιά",
        price: 9.9,
        originalPrice: 13.5,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "h4",
        name: "Phyto Phytocyane Θεραπεία Τριχόπτωσης για Γυναίκες 12x5ml",
        brand: "Phyto",
        category: "Μαλλιά",
        price: 36.8,
        originalPrice: 48.0,
        image:
          "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "baby",
    title: "Παιδί & Μαμάδα",
    headerBg: "bg-indigo-400 text-white",
    headerImage:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80",
    link: "#baby",
    products: [
      {
        id: "m1",
        name: "Pampers Premium Care No.4 (9-14kg) 52 Τεμάχια",
        brand: "Pampers",
        category: "Παιδί & Μαμάδα",
        price: 18.5,
        originalPrice: 24.0,
        image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "m2",
        name: "Mustela Hydra Bebe Ενυδατικό Γαλάκτωμα Σώματος 300ml",
        brand: "Mustela",
        category: "Παιδί & Μαμάδα",
        price: 10.4,
        originalPrice: 14.0,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "m3",
        name: "Suavinex Πιπίλα Φυσιολογική Σιλικόνης 0-6m Crown",
        brand: "Suavinex",
        category: "Παιδί & Μαμάδα",
        price: 5.6,
        originalPrice: 7.2,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "m4",
        name: "MAM Perfect Night Πιπίλα που Φωσφορίζει 6-16m 2τμχ",
        brand: "MAM",
        category: "Παιδί & Μαμάδα",
        price: 8.9,
        originalPrice: 11.5,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "supplements",
    title: "Συμπληρώματα",
    headerBg: "bg-stone-500 text-white",
    headerImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    link: "#supplements",
    products: [
      {
        id: "s1",
        name: "Solgar Formula VM-2000 Πολυβιταμινούχο 60 Ταμπλέτες",
        brand: "Solgar",
        category: "Συμπληρώματα",
        price: 24.3,
        originalPrice: 32.5,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "s2",
        name: "Mollers Omega 3 Ζελεδάκια Ψαράκια με Γεύση Φρούτων 36τμχ",
        brand: "Mollers",
        category: "Συμπληρώματα",
        price: 11.8,
        originalPrice: 15.9,
        image:
          "https://images.unsplash.com/photo-1550572017-ed26168e3783?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "s3",
        name: "Lanes Vitamin C 1000mg Αναβράζοντα 20 Δισκία + Δώρο 20",
        brand: "Lanes",
        category: "Συμπληρώματα",
        price: 6.9,
        originalPrice: 9.5,
        image:
          "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "s4",
        name: "Power Health Platinum Range Magnesium Direct 30 φακελάκια",
        brand: "Power Health",
        category: "Συμπληρώματα",
        price: 10.5,
        originalPrice: 14.0,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "pharmacy",
    title: "Φαρμακείο",
    headerBg: "bg-teal-700 text-white",
    headerImage:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=400&q=80",
    link: "#pharmacy",
    products: [
      {
        id: "ph1",
        name: "Omron M3 Comfort Πιεσόμετρο Μπράτσου με Τεχνολογία Intelli Wrap",
        brand: "Omron",
        category: "Φαρμακείο",
        price: 59.9,
        originalPrice: 79.0,
        image:
          "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ph2",
        name: "Braun ThermoScan 7 Ψηφιακό Θερμόμετρο Αυτιού IRT6520",
        brand: "Braun",
        category: "Φαρμακείο",
        price: 49.0,
        originalPrice: 65.0,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ph3",
        name: "Hansaplast Universal Αδιάβροχα Επιθέματα 40 Τεμάχια",
        brand: "Hansaplast",
        category: "Φαρμακείο",
        price: 3.2,
        originalPrice: 4.5,
        image:
          "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ph4",
        name: "Betadine Χειρουργικό Διάλυμα 7.5% 125ml",
        brand: "Betadine",
        category: "Φαρμακείο",
        price: 4.1,
        originalPrice: 5.5,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

export const bottomHighlightProducts = {
  face: [
    {
      id: "bf1",
      name: "La Roche-Posay Effaclar Duo+ M 40ml",
      price: 15.2,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "bf2",
      name: "CeraVe Moisturising Cream 340g",
      price: 14.5,
      image:
        "https://images.unsplash.com/photo-1608248597359-20f5a7a9beff?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "bf3",
      name: "Avene Cicalfate+ Κρέμα 100ml",
      price: 11.9,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "bf4",
      name: "Vichy Mineral 89 Booster 50ml",
      price: 18.2,
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80",
    },
  ],
  hair: [
    {
      id: "bh1",
      name: "Ducray Anaphase+ Σαμπουάν 400ml",
      price: 14.2,
      image:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "bh2",
      name: "Klorane Μάσκα Cupuacu 150ml",
      price: 12.5,
      image:
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "bh3",
      name: "Apivita Σαμπουάν Πιτυρίδας 250ml",
      price: 9.9,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80",
    },
  ],
};
