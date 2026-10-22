"use client";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { WooCart } from "@/lib/cart-types";
interface CartContextValue {
  cart: WooCart | null;
  loading: boolean;
  busy: boolean;
  error: string | null;
  addItem: (id: number, quantity?: number) => Promise<void>;
  updateItem: (key: string, quantity: number) => Promise<void>;
  refresh: () => Promise<void>;
}
const Context = createContext<CartContextValue | null>(null);
async function parseResponse(response: Response): Promise<WooCart> {
  const data = await response.json();
  if (!response.ok) throw new Error(typeof data.message === "string" ? data.message : "Σφάλμα WooCommerce.");
  return data as WooCart;
}
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<WooCart | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(async () => {
    try {
      const next = await parseResponse(await fetch("/api/cart", { cache: "no-store" }));
      setCart(next); setError(null);
    } catch(e) { setError(e instanceof Error ? e.message : "Σφάλμα καλαθιού."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void refresh(); }, [refresh]);
  const mutate = async (url: string, body: object) => {
    if (busy) return;
    setBusy(true); setError(null);
    try {
      const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), credentials: "same-origin" });
      const next = await parseResponse(response);
      setCart(next);
    } catch(e) { setError(e instanceof Error ? e.message : "Σφάλμα καλαθιού."); throw e; }
    finally { setBusy(false); }
  };
  return <Context.Provider value={{ cart, loading, busy, error, refresh,
    addItem: (id, quantity = 1) => mutate("/api/cart/add", { id, quantity }),
    updateItem: (key, quantity) => mutate("/api/cart/item", { key, quantity })
  }}>{children}</Context.Provider>;
}
export function useCart() {
  const context = useContext(Context);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
