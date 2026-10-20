import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllWooProducts } from "@/lib/woocommerce";
import { mapWooProduct } from "@/lib/woo-product-adapter";
import { ShopView } from "./ShopView";

export const metadata: Metadata = {
  title: "Κατάστημα | ProPharmacy – Όλα τα προϊόντα φαρμακείου",
  description:
    "Δες όλα τα προϊόντα του ProPharmacy: δερμοκαλλυντικά, βιταμίνες, συμπληρώματα, βρεφικά και είδη φαρμακείου. Φίλτραρε ανά κατηγορία, brand και τιμή.",
};

export default async function ShopPage() {
  const wooProducts = await getAllWooProducts();
  const products = wooProducts.map(mapWooProduct);

  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <ShopView products={products} />
    </Suspense>
  );
}
