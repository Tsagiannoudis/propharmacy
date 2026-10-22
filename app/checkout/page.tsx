"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useCart } from "@/components/cart/CartProvider";
import { formatCartAmount } from "@/lib/cart-display";
import type { WooAddress, WooCart, WooShippingRate } from "@/lib/cart-types";

const initialAddress: WooAddress = {
  first_name: "", last_name: "", email: "", phone: "",
  address_1: "", address_2: "", city: "", postcode: "", country: "GR", state: "",
};

type Field = "first_name" | "last_name" | "email" | "phone" | "address_1" | "address_2" | "city" | "postcode";
const fields: { name: Field; label: string; required?: boolean; type?: string; full?: boolean }[] = [
  { name: "first_name", label: "Όνομα", required: true },
  { name: "last_name", label: "Επώνυμο", required: true },
  { name: "email", label: "Email", required: true, type: "email" },
  { name: "phone", label: "Τηλέφωνο", required: true, type: "tel" },
  { name: "address_1", label: "Διεύθυνση / αριθμός", required: true, full: true },
  { name: "address_2", label: "Όροφος / διαμέρισμα (προαιρετικό)", full: true },
  { name: "city", label: "Πόλη", required: true },
  { name: "postcode", label: "Τ.Κ.", required: true },
];

async function postCartUpdate(url: string, payload: object): Promise<WooCart> {
  const response = await fetch(url, {
    method: "POST", credentials: "same-origin", cache: "no-store",
    headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
  });
  const data: unknown = await response.json();
  if (!response.ok) {
    const message = data && typeof data === "object" && "message" in data && typeof data.message === "string"
      ? data.message : "Αδυναμία επικοινωνίας με το WooCommerce.";
    throw new Error(message);
  }
  return data as WooCart;
}

export default function CheckoutPage() {
  const { cart, loading, busy, refresh } = useCart();
  const [address, setAddress] = useState<WooAddress>(initialAddress);
  const [differentShipping, setDifferentShipping] = useState(false);
  const [shipping, setShipping] = useState<WooAddress>(initialAddress);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const edit = (field: Field, value: string, isShipping = false) => {
    if (isShipping) setShipping(previous => ({ ...previous, [field]: value }));
    else setAddress(previous => ({ ...previous, [field]: value }));
  };
  const onCheckbox = (event: ChangeEvent<HTMLInputElement>) => setDifferentShipping(event.target.checked);

  async function saveCustomer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setError(""); setMessage("");
    const billing = { ...address, country: "GR" };
    const delivery = differentShipping
      ? { ...shipping, email: address.email, phone: address.phone, country: "GR" }
      : { ...address, country: "GR" };
    try {
      await postCartUpdate("/api/checkout/customer", { billing_address: billing, shipping_address: delivery });
      await refresh();
      setMessage("Η διεύθυνση ενημερώθηκε. Επίλεξε τρόπο αποστολής.");
    } catch (e) { setError(e instanceof Error ? e.message : "Σφάλμα ενημέρωσης διεύθυνσης."); }
    finally { setSaving(false); }
  }

  async function chooseRate(rate: WooShippingRate, packageId: number) {
    setSaving(true); setError(""); setMessage("");
    try {
      await postCartUpdate("/api/checkout/shipping", { rate_id: rate.rate_id, package_id: packageId });
      await refresh();
      setMessage("Η μέθοδος αποστολής ενημερώθηκε.");
    } catch (e) { setError(e instanceof Error ? e.message : "Σφάλμα επιλογής αποστολής."); }
    finally { setSaving(false); }
  }

  const money = (value?: string) => cart && value !== undefined
    ? formatCartAmount(value, cart.totals.currency_code, cart.totals.currency_minor_unit) : "—";
  const packages = cart?.shipping_rates ?? [];
  const hasRates = packages.some(pkg => pkg.shipping_rates?.length > 0);
  const renderFields = (shippingForm: boolean) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {fields.filter(field => !shippingForm || (field.name !== "email" && field.name !== "phone")).map(field => (
        <label key={field.name} className={`block text-sm font-medium text-ink-700 ${field.full ? "sm:col-span-2" : ""}`}>
          {field.label}
          <input required={field.required} type={field.type ?? "text"} maxLength={250}
            autoComplete={shippingForm ? `shipping ${field.name.replaceAll("_", "-")}` : `billing ${field.name.replaceAll("_", "-")}`}
            value={(shippingForm ? shipping[field.name] : address[field.name]) ?? ""}
            onChange={event => edit(field.name, event.target.value, shippingForm)}
            className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none focus:border-brand-600" />
        </label>
      ))}
    </div>
  );

  return <div className="min-h-screen bg-surface"><Header />
    <main className="container-page py-10 md:py-14">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-widest text-brand-700">ProPharmacy</p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink-900">Ολοκλήρωση παραγγελίας</h1></div>
        <Link href="/cart" className="text-sm font-semibold text-brand-700 underline">Επιστροφή στο καλάθι</Link>
      </div>
      <p className="mb-8 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-ink-700">
        Δοκιμαστικό checkout: δεν υποβάλλονται παραγγελίες και δεν πραγματοποιούνται πληρωμές.
      </p>
      {loading ? <p>Φόρτωση καλαθιού...</p> : !cart?.items.length
        ? <div className="rounded-2xl bg-white p-8">Το καλάθι είναι άδειο. <Link href="/shop" className="underline">Δες προϊόντα</Link></div>
        : <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <form onSubmit={event => void saveCustomer(event)} className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold">1. Στοιχεία πελάτη και διεύθυνση</h2>
              {renderFields(false)}
              <label className="mt-5 flex items-center gap-3 text-sm"><input type="checkbox" checked={differentShipping} onChange={onCheckbox} /> Αποστολή σε διαφορετική διεύθυνση</label>
              {differentShipping && <div className="mt-6 border-t border-ink-100 pt-6"><h3 className="mb-4 font-semibold">Διεύθυνση αποστολής</h3>{renderFields(true)}</div>}
              <button type="submit" disabled={saving || busy}
                className="mt-6 rounded-full bg-ink-900 px-6 py-3 text-sm font-bold text-white disabled:opacity-50">
                {saving ? "Ενημέρωση..." : "Υπολογισμός μεταφορικών"}
              </button>
            </form>
            <section className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
              <h2 className="mb-5 text-xl font-bold">2. Μέθοδος αποστολής</h2>
              {!hasRates && <p className="text-sm text-ink-500">Συμπλήρωσε διεύθυνση και πάτησε «Υπολογισμός μεταφορικών» για να εμφανιστούν οι διαθέσιμες επιλογές.</p>}
              {packages.map(pkg => <div key={pkg.package_id} className="space-y-3">
                {packages.length > 1 && <p className="text-sm font-semibold">Δέμα {pkg.package_id + 1}</p>}
                {pkg.shipping_rates.map(rate => <label key={rate.rate_id}
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-ink-100 p-4">
                  <span className="flex items-center gap-3"><input type="radio" name={`shipping-${pkg.package_id}`} checked={rate.selected} disabled={saving || busy}
                    onChange={() => void chooseRate(rate, pkg.package_id)} /><span className="text-sm font-medium">{rate.name}</span></span>
                  <span className="text-sm font-bold">{money(rate.price)}</span>
                </label>)}
              </div>)}
            </section>
            <section className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-bold">3. Τρόπος πληρωμής</h2>
              <div className="rounded-xl border border-ink-200 p-4 text-sm">
                <strong>Άμεση τραπεζική μεταφορά — δοκιμαστική ένδειξη</strong>
                <p className="mt-2 text-ink-500">Η ενεργή μέθοδος και οι οδηγίες πληρωμής θα επιβεβαιωθούν από το WooCommerce πριν ενεργοποιήσουμε την υποβολή παραγγελίας.</p>
              </div>
            </section>
            {error && <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
            {message && <p role="status" className="rounded-xl bg-brand-50 p-4 text-sm text-brand-700">{message}</p>}
          </div>
          <aside className="h-fit rounded-3xl border border-ink-100 bg-white p-6 lg:sticky lg:top-28">
            <h2 className="text-xl font-bold">Η παραγγελία σου</h2>
            <div className="mt-6 space-y-4">
              {cart.items.map(item => <div key={item.key} className="flex justify-between gap-3 text-sm">
                <span>{item.quantity} × {item.name}</span><strong className="shrink-0">{formatCartAmount(item.totals.line_total, item.prices.currency_code, item.prices.currency_minor_unit)}</strong>
              </div>)}
            </div>
            <div className="mt-6 space-y-3 border-t border-ink-100 pt-5 text-sm">
              <div className="flex justify-between"><span>Προϊόντα</span><span>{money(cart.totals.total_items)}</span></div>
              <div className="flex justify-between"><span>Μεταφορικά</span><span>{money(cart.totals.total_shipping)}</span></div>
              <div className="flex justify-between"><span>Φόροι</span><span>{money(cart.totals.total_tax)}</span></div>
              <div className="flex justify-between border-t border-ink-100 pt-4 text-lg font-extrabold"><span>Σύνολο</span><span>{money(cart.totals.total_price)}</span></div>
            </div>
            <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-full bg-ink-900 py-4 font-bold text-white opacity-50">
              Υποβολή παραγγελίας — ανενεργή
            </button>
            <p className="mt-3 text-xs text-ink-500">Δεν πραγματοποιούνται χρεώσεις ή πραγματικές παραγγελίες.</p>
          </aside>
        </div>}
    </main><Footer /></div>;
}
