"use client";

import { useState } from "react";
import type { WooProduct } from "@/lib/woocommerce";
import ProductHeader from "./components/ProductHeader";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";
import ProductOptions from "./components/ProductOptions";
import OrderSummary from "./components/OrderSummary";
import type { ProductSelectionState } from "./components/selection-types";
import { parseWooPrice } from "@/lib/pricing";
import { isBrandAttribute } from "@/lib/woo-product-adapter";

interface Props {
  product: WooProduct;
}

export default function ProductDetail({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  // ========================================================
  // DYNAMIC WOOCOMMERCE ATTRIBUTES DETECTION
  // ========================================================
  // Filter selectable attributes (excluding administrative metadata like Company/Brand)
  const selectableAttributes = (product.attributes ?? []).filter((attr) => {
    return (
      !isBrandAttribute(attr) &&
      attr.terms &&
      attr.terms.length > 0
    );
  });

  // State for user's selected terms per attribute: { [attributeName]: selectedTermSlug }
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >(() => {
    const initial: Record<string, string> = {};
    for (const attr of selectableAttributes) {
      if (attr.terms.length > 0) {
        initial[attr.name] = attr.terms[0].slug;
      }
    }
    return initial;
  });

  // Linked products from WooCommerce (Upsells / Cross-sells)
  const linkedProducts = product.linked_products ?? [];
  const [selectedLinkedProductId, setSelectedLinkedProductId] = useState<
    number | null
  >(null);

  const [isGiftWrap, setIsGiftWrap] = useState(true);
  const [giftNote, setGiftNote] = useState("");
  const [selectedSample, setSelectedSample] = useState("hydration");

  // Real WooCommerce product data
  const prices = product.prices;
  const minorUnit = prices.currency_minor_unit;

  // Base price per unit from WooCommerce
  const unitPrice = parseWooPrice(prices.price, minorUnit);
  const basePrice = unitPrice === null ? null : unitPrice * quantity;

  // Selected linked product calculation
  const selectedLinkedProduct = linkedProducts.find(
    (p) => p.id === selectedLinkedProductId,
  );
  const linkedProductPrice = selectedLinkedProduct
    ? (parseWooPrice(
        selectedLinkedProduct.prices.price,
        selectedLinkedProduct.prices.currency_minor_unit
      ) ?? 0)
    : 0;

  const giftWrapPrice = isGiftWrap ? 1.5 : 0;
  const totalPrice = basePrice === null ? null : basePrice + linkedProductPrice + giftWrapPrice;

  const selection: ProductSelectionState = { selectableAttributes, selectedAttributes, selectedLinkedProductId, isGiftWrap, giftNote, selectedSample };



  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* TOP BAR / BREADCRUMB & HEADER                                 */}
      {/* ============================================================ */}
      <ProductHeader product={product} />

        {/* ============================================================ */}
        {/* MAIN 3-COLUMN BUILDER STAGE                                   */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[290px_1fr_340px] xl:grid-cols-[320px_1fr_360px]">
          {/* -------------------------------------------------------- */}
          {/* 1. LEFT COLUMN: LIVE PHARMACY BREAKDOWN                  */}
          {/* -------------------------------------------------------- */}
          <OrderSummary
            product={product}
            quantity={quantity}
            onQuantityChange={setQuantity}
            selection={selection}
            basePrice={basePrice}
            linkedProductPrice={linkedProductPrice}
            totalPrice={totalPrice}
          />

          {/* -------------------------------------------------------- */}
          {/* 2. CENTER STAGE: WOOCOMMERCE PHOTO SLIDER                */}
          {/* -------------------------------------------------------- */}
          <ProductGallery product={product} isGiftWrap={isGiftWrap} />

          {/* -------------------------------------------------------- */}
          {/* 3. RIGHT COLUMN: DYNAMIC WOOCOMMERCE CONTROLS            */}
          {/* -------------------------------------------------------- */}
          <ProductOptions
            selection={selection}
            linkedProducts={linkedProducts}
            setSelectedAttributes={setSelectedAttributes}
            setSelectedLinkedProductId={setSelectedLinkedProductId}
            setIsGiftWrap={setIsGiftWrap}
            setGiftNote={setGiftNote}
            setSelectedSample={setSelectedSample}
          />
        </div>

        {/* ============================================================ */}
        {/* PRODUCT DETAILS & WOOCOMMERCE ACCORDIONS                      */}
        {/* ============================================================ */}
        <ProductDetails product={product} />

        {/* ============================================================ */}
        {/* LIGHTBOX MODAL                                               */}
        {/* ============================================================ */}
            </div>
  );
}
