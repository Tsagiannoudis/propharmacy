"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Gift, Search, X } from "lucide-react";
import type { WooProduct } from "@/lib/woocommerce";

interface Props { product: WooProduct; isGiftWrap: boolean; }

export default function ProductGallery({ product, isGiftWrap }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const images = product.images ?? [];
  const imagesCount = images.length;
  const previousImage = () => {
    if (!imagesCount) return;
    setActiveImage((current) => (current - 1 + imagesCount) % imagesCount);
  };
  const nextImage = () => {
    if (!imagesCount) return;
    setActiveImage((current) => (current + 1) % imagesCount);
  };

  return (
    <>
          <div className="flex flex-col items-center">
            {/* Stage background card */}
            <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#eaf2ef]/70 to-[#dcebe5]/50 p-6 shadow-inner backdrop-blur-sm sm:p-10">
              {/* Zoom pill button */}
              {images[activeImage] && (
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Μεγέθυνση φωτογραφίας"
                  className="absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink-700 shadow-sm backdrop-blur-md transition hover:bg-white hover:text-ink-900"
                >
                  <Search size={13} />
                  <span>Μεγέθυνση</span>
                </button>
              )}

              {/* Gift Wrap Badge Preview if active */}
              {isGiftWrap && (
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-700/90 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm">
                  <Gift size={13} />
                  <span>Συσκευασία Δώρου</span>
                </div>
              )}

              {/* Real product image from WooCommerce */}
              {images[activeImage] ? (
                <div className="relative h-full w-full">
                  <Image
                    src={images[activeImage].src}
                    alt={images[activeImage].alt || product.name}
                    fill
                    priority
                    unoptimized
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-contain drop-shadow-xl transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="text-center text-sm text-ink-400">
                  Δεν υπάρχει διαθέσιμη φωτογραφία
                </div>
              )}
            </div>

            {/* Circular stage base with Photo Slider Controls */}
            <div className="relative -mt-6 flex flex-col items-center">
              {/* Circular platform shadow base */}
              <div className="h-6 w-72 rounded-[100%] bg-ink-900/10 blur-md" />

              {/* Slider controls (↶ and ↷ navigation buttons) */}
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Προηγούμενη φωτογραφία"
                  title="Προηγούμενη φωτογραφία"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-700 shadow-md backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Image counter indicator */}
                <div className="rounded-full border border-white/80 bg-white/80 px-4 py-1.5 text-xs font-bold text-ink-700 shadow-sm backdrop-blur-md">
                  {imagesCount > 0
                    ? `${activeImage + 1} / ${imagesCount}`
                    : "1 / 1"}
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Επόμενη φωτογραφία"
                  title="Επόμενη φωτογραφία"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-700 shadow-md backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnails row for quick direct selection */}
              {imagesCount > 1 && (
                <div className="mt-4 flex max-w-xs items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  {images.map((img, idx) => (
                    <button
                      key={`${img.id}-${idx}`}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                        activeImage === idx
                          ? "border-brand-700 ring-2 ring-brand-700/20"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || product.name}
                        fill
                        unoptimized
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        {isLightboxOpen && images[activeImage] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Κλείσιμο"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
            >
              <X size={22} />
            </button>
            <div
              className="relative max-h-[85vh] max-w-[85vw] overflow-hidden rounded-2xl bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt || product.name}
                width={1000}
                height={1000}
                unoptimized
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        )}
    </>
  );
}
