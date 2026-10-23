export interface Product {
  id: string | number;
  name: string;
  category?: string;
  brand?: string;
  price: number | null;
  originalPrice?: number;
  rating?: number;
  image: string;
  inStock?: boolean;
  purchasable?: boolean;
  productType?: string;
  slug?: string;
  onSale?: boolean;
  categories?: { id?: number; name: string; slug: string }[];
  brandSlug?: string;
  tags?: { id?: number; name: string; slug: string }[];
}

export interface CategoryGroup {
  id: string;
  title: string;
  headerBg: string; // Tailwind or CSS gradient/color
  headerImage: string;
  link: string;
  products: Product[];
}

export interface QuickCategory {
  id: string;
  title: string;
  image: string;
  href: string;
}
