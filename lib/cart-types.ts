export interface WooCartItem {
  key: string;
  id: number;
  name: string;
  quantity: number;
  images: { src: string; alt: string }[];
  prices: { price: string; currency_code: string; currency_minor_unit: number };
  totals: { line_total: string; line_total_tax: string };
}

export interface WooAddress {
  first_name?: string;
  last_name?: string;
  company?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  email?: string;
  phone?: string;
}

export interface WooShippingRate {
  rate_id: string;
  name: string;
  description?: string;
  price: string;
  taxes?: string;
  selected: boolean;
  currency_code?: string;
  currency_minor_unit?: number;
}
export interface WooShippingPackage {
  package_id: number;
  name?: string;
  shipping_rates: WooShippingRate[];
}

export interface WooCart {
  items: WooCartItem[];
  items_count: number;
  totals: {
    total_price: string;
    total_items?: string;
    total_items_tax?: string;
    total_shipping?: string;
    total_shipping_tax?: string;
    total_tax?: string;
    currency_code: string;
    currency_minor_unit: number;
  };
  shipping_rates?: WooShippingPackage[];
  needs_shipping?: boolean;
  billing_address?: WooAddress;
  shipping_address?: WooAddress;
  payment_methods?: string[];
}
