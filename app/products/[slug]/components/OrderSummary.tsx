"use client";

import { Check, ShieldCheck, ShoppingBag, Minus, Plus } from "lucide-react";
import type { WooProduct } from "@/lib/woocommerce";
import { decodeHtml, formatCurrency } from "@/lib/formatters";
import type { ProductSelectionState } from "./selection-types";

interface Props {
  product: WooProduct;
  quantity: number;
  onQuantityChange: (value: number) => void;
  selection: ProductSelectionState;
  basePrice: number | null;
  linkedProductPrice: number;
  totalPrice: number | null;
}

export default function OrderSummary({ product, quantity, onQuantityChange, selection, basePrice, linkedProductPrice, totalPrice }: Props) {
  const { selectableAttributes, selectedAttributes, selectedLinkedProductId, isGiftWrap } = selection;
  const linkedProducts = product.linked_products ?? [];
  const selectedLinkedProduct = linkedProducts.find((p) => p.id === selectedLinkedProductId);
  const giftWrapPrice = isGiftWrap ? 1.5 : 0;

  return (
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-md">
              {/* Header */}
              <div className="border-b border-ink-100 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-400">
                  Μοντέλο
                </span>
                <h2 className="mt-0.5 font-display text-base font-bold text-ink-900 line-clamp-1">
                  {decodeHtml(product.name)}
                </h2>
              </div>

              {/* Breakdown lines matching user's exact specification */}
              <div className="mt-4 space-y-3 text-xs text-ink-700">
                {/* Dynamic WooCommerce Attributes lines (e.g. Μέγεθος, Χρώμα, Γεύση) */}
                {selectableAttributes.length > 0 ? (
                  selectableAttributes.map((attr) => {
                    const selectedSlug = selectedAttributes[attr.name];
                    const selectedTerm =
                      attr.terms.find((t) => t.slug === selectedSlug) ||
                      attr.terms[0];
                    return (
                      <div
                        key={attr.name}
                        className="flex items-start justify-between gap-2"
                      >
                        <span className="flex items-center gap-1.5 text-ink-600">
                          <span className="text-ink-400">•</span>
                          <span>
                            {decodeHtml(attr.name)}:{" "}
                            {decodeHtml(selectedTerm.name)}
                            {quantity > 1 ? ` (x${quantity})` : ""}
                          </span>
                        </span>
                        <span className="font-bold text-ink-900 shrink-0">
                          {formatCurrency(basePrice)}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-ink-600">
                      <span className="text-ink-400">•</span>
                      <span>
                        Συσκευασία Προϊόντος{" "}
                        {quantity > 1 ? `(x${quantity})` : ""}
                      </span>
                    </span>
                    <span className="font-bold text-ink-900 shrink-0">
                      {formatCurrency(basePrice)}
                    </span>
                  </div>
                )}

                {/* Πρόσθετο / Συνδεδεμένο Προϊόν WooCommerce */}
                {selectedLinkedProduct && (
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-ink-600">
                      <span className="text-ink-400">•</span>
                      <span className="line-clamp-1">
                        Πρόσθετο: {decodeHtml(selectedLinkedProduct.name)}
                      </span>
                    </span>
                    <span className="font-bold text-brand-700 shrink-0">
                      + {formatCurrency(linkedProductPrice)}
                    </span>
                  </div>
                )}

                {/* Πολυτελής Συσκευασία Δώρου */}
                {isGiftWrap && (
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-ink-600">
                      <span className="text-ink-400">•</span>
                      <span>Πολυτελής Συσκευασία Δώρου</span>
                    </span>
                    <span className="font-bold text-brand-700 shrink-0">
                      + {formatCurrency(giftWrapPrice)}
                    </span>
                  </div>
                )}

                {/* 2x Δωρεάν Δείγματα */}
                <div className="flex items-start justify-between gap-2 text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <span className="text-ink-400">•</span>
                    <span>2x Δωρεάν Δείγματα</span>
                  </span>
                  <span className="font-semibold text-emerald-600 shrink-0">
                    0,00 €
                  </span>
                </div>

                {/* Dotted separator */}
                <div className="my-3 border-t-2 border-dotted border-ink-200" />

                {/* Συνολική Τιμή */}
                <div className="pt-1">
                  <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                    Συνολική Τιμή:
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="font-display text-3xl font-extrabold tracking-tight text-ink-950">
                      {formatCurrency(totalPrice)}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 stroke-[3]" />
                    <span>Δωρεάν Μεταφορικά ACS διαθέσιμα</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity + Order action button */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between rounded-2xl border border-ink-100 bg-white/80 p-2.5">
                <span className="text-xs font-semibold text-ink-700 px-2">
                  Ποσότητα:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-ink-200 text-ink-700 transition hover:bg-ink-50 disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-bold text-ink-900 w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-ink-200 text-ink-700 transition hover:bg-ink-50"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                disabled
                title="Το πραγματικό καλάθι WooCommerce δεν έχει συνδεθεί ακόμη"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-800 py-4 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition hover:bg-brand-900 active:scale-[0.99] disabled:opacity-50"
              >
                <ShoppingBag
                  size={17}
                  className="transition group-hover:scale-110"
                />
                <span>Προσθήκη στο καλάθι</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-ink-500">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>100% Αυθεντικό Προϊόν Φαρμακείου</span>
            </div>
          </div>
  );
}
