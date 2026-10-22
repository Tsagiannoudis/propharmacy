"use client";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useCart } from "@/components/cart/CartProvider";
import { formatCartAmount } from "@/lib/cart-display";
export default function CartPage() {
  const {cart, loading, busy, error, updateItem} = useCart();
  return <div className="min-h-screen bg-surface"><Header /><main className="container-page py-12 min-h-[60vh]">
    <h1 className="text-3xl font-extrabold text-ink-900 mb-8">Το καλάθι μου</h1>
    {loading && <p>Φόρτωση καλαθιού...</p>}
    {error && <p role="alert" className="mb-5 text-red-600">{error}</p>}
    {!loading && cart?.items.length === 0 && <p>Το καλάθι σου είναι άδειο. <Link href="/shop" className="underline">Δες προϊόντα</Link></p>}
    {cart && cart.items.length > 0 && <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">{cart.items.map(item=><div key={item.key} className="flex gap-4 rounded-2xl bg-white border border-ink-100 p-4">
        {item.images?.[0]?.src && <div className="relative h-24 w-24 shrink-0"><Image src={item.images[0].src} alt={item.name} fill unoptimized className="object-contain" /></div>}
        <div className="flex-1"><h2 className="font-semibold">{item.name}</h2><p className="mt-1 text-sm">{formatCartAmount(item.totals.line_total, item.prices.currency_code, item.prices.currency_minor_unit)}</p>
        <div className="mt-3 flex gap-3 items-center"><button disabled={busy || item.quantity<=1} onClick={()=>void updateItem(item.key,item.quantity-1).catch(()=>{})} className="rounded border px-3 py-1">−</button><span>{item.quantity}</span><button disabled={busy} onClick={()=>void updateItem(item.key,item.quantity+1).catch(()=>{})} className="rounded border px-3 py-1">+</button><button disabled={busy} onClick={()=>void updateItem(item.key,0).catch(()=>{})} className="text-sm underline">Αφαίρεση</button></div></div>
      </div>)}</div>
      <aside className="rounded-2xl bg-white p-6 border border-ink-100 h-fit"><h2 className="font-bold">Σύνοψη</h2><p className="mt-4 text-xl font-bold">{formatCartAmount(cart.totals.total_price,cart.totals.currency_code,cart.totals.currency_minor_unit)}</p><p className="mt-3 text-xs text-ink-500">Η τελική χρέωση και τα μεταφορικά θα επιβεβαιωθούν στο checkout.</p><Link href="/checkout" className="mt-5 block w-full rounded-xl bg-ink-900 py-3 text-center font-semibold text-white">Συνέχεια στο checkout</Link></aside>
    </div>}
  </main><Footer /></div>;
}
