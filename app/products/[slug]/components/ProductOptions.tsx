"use client";

import Image from "next/image";
import { Package, Layers, Sparkles, Gift, HeartHandshake } from "lucide-react";
import type { WooProduct } from "@/lib/woocommerce";
import { decodeHtml, formatCurrency } from "@/lib/formatters";
import type { ProductSelectionState } from "./selection-types";

interface Props {
  selection: ProductSelectionState;
  linkedProducts: WooProduct[];
  setSelectedAttributes: React.Dispatch<React.SetStateAction<Record<string,string>>>;
  setSelectedLinkedProductId: (id: number | null) => void;
  setIsGiftWrap: (value: boolean) => void;
  setGiftNote: (value: string) => void;
  setSelectedSample: (value: string) => void;
}

export default function ProductOptions({selection,linkedProducts,setSelectedAttributes,setSelectedLinkedProductId,setIsGiftWrap,setGiftNote,setSelectedSample}:Props) {
  const { selectableAttributes, selectedAttributes, selectedLinkedProductId, isGiftWrap, giftNote, selectedSample } = selection;
  return (
          <div className="space-y-4">
            {/* DYNAMIC ATTRIBUTE CARDS FROM WOOCOMMERCE (Μέγεθος, Χρώμα, Γεύση, etc.) */}
            {selectableAttributes.length > 0 ? (
              selectableAttributes.map((attr) => {
                const selectedSlug = selectedAttributes[attr.name];
                return (
                  <div
                    key={attr.id || attr.name}
                    className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                        {attr.name.toLowerCase().includes("μέγεθος") ||
                        attr.name.toLowerCase().includes("weight") ? (
                          <Package size={14} className="text-brand-700" />
                        ) : (
                          <Layers size={14} className="text-brand-700" />
                        )}
                        <span>{decodeHtml(attr.name)}</span>
                      </span>
                      <span className="text-[11px] font-semibold text-brand-700">
                        {attr.terms.length} επιλογές WooCommerce
                      </span>
                    </div>

                    <div className="mt-3 space-y-2">
                      {attr.terms.map((term) => {
                        const isSelected = selectedSlug === term.slug;
                        return (
                          <button
                            key={term.id || term.slug}
                            type="button"
                            onClick={() =>
                              setSelectedAttributes((prev) => ({
                                ...prev,
                                [attr.name]: term.slug,
                              }))
                            }
                            className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left transition ${
                              isSelected
                                ? "border-brand-700 bg-brand-50/70 text-ink-900 shadow-sm"
                                : "border-ink-100 bg-white/60 text-ink-700 hover:border-ink-300"
                            }`}
                          >
                            <div>
                              <div className="text-xs font-bold text-ink-900">
                                {decodeHtml(term.name)}
                              </div>
                              <div className="text-[10px] text-ink-500 mt-0.5">
                                Επιβεβαιωμένο απόθεμα WooCommerce
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span
                                className={`inline-block h-3.5 w-3.5 rounded-full border ${
                                  isSelected
                                    ? "border-brand-700 bg-brand-700"
                                    : "border-ink-300"
                                }`}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              /* When product has no variation attributes, show single verified pack card */
              <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                    <Package size={14} className="text-brand-700" />
                    <span>Συσκευασία Προϊόντος</span>
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700">
                    1 Επιλογή
                  </span>
                </div>
                <div className="mt-3 rounded-2xl border border-brand-700/60 bg-brand-50/50 p-3.5 text-xs text-ink-800">
                  <div className="font-bold text-ink-900">
                    Βασική Εργοστασιακή Συσκευασία
                  </div>
                  <div className="text-[11px] text-ink-500 mt-1">
                    Το συγκεκριμένο προϊόν διατίθεται σε ενιαία αυθεντική
                    συσκευασία.
                  </div>
                </div>
              </div>
            )}

            {/* DYNAMIC ROUTINE ADD-ON FROM WOOCOMMERCE LINKED PRODUCTS */}
            {linkedProducts.length > 0 && (
              <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-brand-700" />
                    <span>Συμπληρωματική Φροντίδα (Πρόσθετο)</span>
                  </span>
                  <span className="text-[11px] font-semibold text-brand-700">
                    Προτάσεις <br /> για εσάς
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {/* Option 1: None */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3 transition ${
                      selectedLinkedProductId === null
                        ? "border-brand-700 bg-brand-50/60"
                        : "border-ink-100 bg-white/60 hover:border-ink-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="linkedProduct"
                        checked={selectedLinkedProductId === null}
                        onChange={() => setSelectedLinkedProductId(null)}
                        className="h-3.5 w-3.5 text-brand-700 focus:ring-0"
                      />
                      <span className="text-xs font-medium text-ink-800">
                        Χωρίς πρόσθετο
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-ink-500">
                      0,00 €
                    </span>
                  </label>

                  {/* Real WooCommerce Linked Products */}
                  {linkedProducts.map((linked) => {
                    const isSelected = selectedLinkedProductId === linked.id;
                    const itemPrice =
                      Number(linked.prices.price) /
                      10 ** linked.prices.currency_minor_unit;
                    return (
                      <label
                        key={linked.id}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3 transition ${
                          isSelected
                            ? "border-brand-700 bg-brand-50/60"
                            : "border-ink-100 bg-white/60 hover:border-ink-300"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <input
                            type="radio"
                            name="linkedProduct"
                            checked={isSelected}
                            onChange={() =>
                              setSelectedLinkedProductId(linked.id)
                            }
                            className="h-3.5 w-3.5 text-brand-700 focus:ring-0 shrink-0"
                          />
                          {linked.images?.[0] && (
                            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white border border-ink-100 p-0.5">
                              <Image
                                src={linked.images[0].src}
                                alt={linked.name}
                                fill
                                unoptimized
                                className="object-contain"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-ink-900 truncate">
                              + {decodeHtml(linked.name)}
                            </div>
                            <div className="text-[10px] text-ink-500">
                              {linked.is_in_stock
                                ? "Άμεσα διαθέσιμο"
                                : "Περιορισμένο απόθεμα"}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-brand-700 shrink-0">
                          + {formatCurrency(itemPrice)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* GIFT WRAP & GREETING CARD */}
            <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                  <Gift size={14} className="text-brand-700" />
                  <span>Συσκευασία Δώρου & Κάρτα</span>
                </span>
                <span className="text-xs font-bold text-brand-700">
                  + 1,50 €
                </span>
              </div>

              <label className="mt-3 flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={(e) => setIsGiftWrap(e.target.checked)}
                  className="h-4 w-4 rounded text-brand-700 focus:ring-0"
                />
                <span className="text-xs font-semibold text-ink-800">
                  Επιθυμώ Πολυτελή Συσκευασία Δώρου
                </span>
              </label>

              {isGiftWrap && (
                <div className="mt-3">
                  <label className="text-[11px] font-semibold text-ink-600">
                    Ευχητήριο Μήνυμα στην Κάρτα (Προαιρετικό)
                  </label>
                  <input
                    type="text"
                    value={giftNote}
                    maxLength={80}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="π.χ. Χρόνια πολλά με αγάπη & υγεία!"
                    className="mt-1.5 h-10 w-full rounded-xl border border-ink-200 bg-white px-3 text-xs text-ink-900 placeholder:text-ink-400 focus:border-brand-700 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* FREE SAMPLES */}
            <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                  <HeartHandshake size={14} className="text-brand-700" />
                  <span>2x Δωρεάν Δείγματα</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-700">
                  ΔΩΡΕΑΝ
                </span>
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {[
                  { id: "hydration", label: "Ενυδάτωση" },
                  { id: "antiaging", label: "Αντιγήρανση" },
                  { id: "sensitive", label: "Ευαίσθητο" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSample(s.id)}
                    className={`rounded-xl px-2 py-2 text-center text-[11px] font-semibold transition ${
                      selectedSample === s.id
                        ? "bg-brand-800 text-white shadow-sm"
                        : "border border-ink-100 bg-white/70 text-ink-700 hover:border-ink-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
  );
}
