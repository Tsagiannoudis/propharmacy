"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import type { Product } from "../types";
import { useCart } from "@/components/cart/CartProvider";
import { formatCurrency, getDiscountPercentage } from "@/lib/formatters";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const [liked, setLiked] = useState(false);
  const [adding, setAdding] = useState(false);
  const [cartError, setCartError] = useState<string | null>(null);
  const { addItem, busy } = useCart();
  const isWooProduct = typeof product.id === "number";
  const onAdd = async () => {
    if (!isWooProduct || product.price === null || product.price <= 0) return;
    setAdding(true);
    setCartError(null);
    try {
      if (typeof product.id !== "number") {
        throw new Error("Μη έγκυρο WooCommerce Product ID.");
      }

      await addItem(product.id, 1);
    } catch (e) {
      setCartError(e instanceof Error ? e.message : "Σφάλμα καλαθιού");
    } finally {
      setAdding(false);
    }
  };

  const discountPercent = getDiscountPercentage(
    product.price,
    product.originalPrice,
  );

  const canAdd =
    product.price !== null &&
    product.inStock !== false &&
    product.purchasable !== false &&
    product.productType !== "variable" &&
    isWooProduct &&
    product.price > 0;

  return (
    <article className="group relative flex flex-col rounded-3xl bg-white p-3 border border-ink-100 hover:border-brand-200 hover:shadow-lift transition-all duration-300">
      <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-ink-50 to-brand-50/60 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            loading="lazy"
            sizes="(min-width: 1024px) 20vw, 45vw"
            className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-ink-400">
            Χωρίς εικόνα
          </div>
        )}

        {discountPercent !== null && discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-coral-500 text-white text-[11px] font-bold px-2.5 py-1 shadow-soft">
            -{discountPercent}%
          </span>
        )}

        <button
          type="button"
          aria-label="Προσθήκη στα αγαπημένα"
          aria-pressed={liked}
          onClick={() => setLiked(!liked)}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full grid place-items-center glass text-ink-500 hover:text-coral-500"
        >
          <Heart
            className={`w-4 h-4 ${
              liked ? "fill-coral-500 text-coral-500" : ""
            }`}
          />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-1.5 pt-3">
        {product.brand && (
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
            {product.brand}
          </span>
        )}

        <h3 className="mt-1 text-[13px] font-medium leading-snug text-ink-800 line-clamp-2 min-h-[2.5rem]">
          {product.slug ? (
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-brand-700 transition-colors"
            >
              {product.name}
            </Link>
          ) : (
            product.name
          )}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-[11px] text-ink-500">
          {product.rating !== undefined && (
            <>
              <Star className="w-3.5 h-3.5 text-sun-400 fill-sun-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span>·</span>
            </>
          )}

          <span>
            {product.inStock === false ? "Εξαντλημένο" : "Σε απόθεμα"}
          </span>
        </div>

        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <div className="leading-tight">
            <span className="block font-display text-lg font-extrabold text-ink-900">
              {formatCurrency(product.price)}
            </span>

            {product.originalPrice !== undefined && (
              <span className="text-xs text-ink-400 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {canAdd ? (
            <button
              type="button"
              onClick={() => void onAdd()}
              disabled={adding || busy}
              aria-label={`Προσθήκη ${product.name} στο καλάθι`}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-ink-900 hover:bg-brand-600 text-white transition-all"
            >
              <Plus className="w-4 h-4" />
            </button>
          ) : product.slug ? (
            <Link
              href={`/products/${product.slug}`}
              className="rounded-full bg-ink-900 px-3 py-2 text-xs font-semibold text-white"
            >
              Προβολή
            </Link>
          ) : null}
        </div>
      </div>
      {cartError && (
        <p role="alert" className="px-2 pb-2 text-xs text-red-600">
          {cartError}
        </p>
      )}
    </article>
  );
};
