import { Truck, RotateCcw } from "lucide-react";
import type { WooProduct } from "@/lib/woocommerce";

export default function ProductDetails({ product }: { product: WooProduct }) {
  return (
        <div className="mt-14 border-t border-ink-200/80 pt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left: WooCommerce Description */}
            <div>
              <h3 className="font-display text-xl font-bold text-ink-900">
                Περιγραφή & Χαρακτηριστικά
              </h3>
              {product.description ? (
                <div
                  className="prose prose-sm mt-4 text-ink-600 leading-relaxed max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              ) : product.short_description ? (
                <div
                  className="prose prose-sm mt-4 text-ink-600 leading-relaxed max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: product.short_description,
                  }}
                />
              ) : (
                <p className="mt-4 text-sm text-ink-500">
                  Δεν υπάρχει αναλυτική περιγραφή για το προϊόν.
                </p>
              )}
            </div>

            {/* Right: Policy & Delivery cards */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-ink-900">
                Εγγύηση & Παράδοση
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl border border-ink-100 bg-white p-4">
                  <Truck size={18} className="text-brand-700" />
                  <div className="mt-2 text-xs font-bold text-ink-900">
                    Αποστολή ACS Courier
                  </div>
                  <div className="mt-0.5 text-xs text-ink-500">
                    Ο χρόνος παράδοσης επιβεβαιώνεται στο checkout
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-100 bg-white p-4">
                  <RotateCcw size={18} className="text-brand-700" />
                  <div className="mt-2 text-xs font-bold text-ink-900">
                    Επιστροφή 14 ημερών
                  </div>
                  <div className="mt-0.5 text-xs text-ink-500">
                    Σύμφωνα με την πολιτική επιστροφών
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
