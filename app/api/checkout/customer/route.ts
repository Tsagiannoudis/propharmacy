import { NextRequest, NextResponse } from "next/server";
import { checkSameOrigin, respondCart } from "@/lib/cart-server";

// Update ONLY the existing WooCommerce cart. Never create an order here.
const fields = ["first_name", "last_name", "address_1", "address_2", "city", "state", "postcode", "country", "email", "phone"] as const;
type AddressField = (typeof fields)[number];
type AddressData = Partial<Record<AddressField, string>>;

function cleanAddress(value: unknown): AddressData | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const result: AddressData = {};
  for (const key of fields) {
    const item = input[key];
    if (item !== undefined) {
      if (typeof item !== "string" || item.length > 250) return null;
      result[key] = item.trim();
    }
  }
  return result;
}

export async function POST(request: NextRequest) {
  if (!checkSameOrigin(request)) return NextResponse.json({ message: "Μη έγκυρη προέλευση." }, { status: 403 });
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ message: "Μη έγκυρο JSON." }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body))
    return NextResponse.json({ message: "Μη έγκυρα δεδομένα." }, { status: 400 });
  const data = body as Record<string, unknown>;
  const billing = cleanAddress(data.billing_address);
  const shipping = cleanAddress(data.shipping_address);
  if (!billing || !shipping || billing.country !== "GR" || shipping.country !== "GR")
    return NextResponse.json({ message: "Συμπλήρωσε έγκυρα στοιχεία αποστολής στην Ελλάδα." }, { status: 400 });
  if (!billing.first_name || !billing.last_name || !billing.address_1 || !billing.city || !billing.postcode ||
      !billing.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billing.email) ||
      !shipping.first_name || !shipping.last_name || !shipping.address_1 || !shipping.city || !shipping.postcode)
    return NextResponse.json({ message: "Συμπλήρωσε τα υποχρεωτικά πεδία." }, { status: 400 });
  try {
    return await respondCart("/update-customer", "POST", { billing_address: billing, shipping_address: shipping });
  } catch {
    return NextResponse.json({ message: "Δεν ήταν δυνατός ο υπολογισμός μεταφορικών." }, { status: 502 });
  }
}
