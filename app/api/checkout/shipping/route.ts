import { NextRequest, NextResponse } from "next/server";
import { checkSameOrigin, respondCart } from "@/lib/cart-server";

export async function POST(request: NextRequest) {
  if (!checkSameOrigin(request)) return NextResponse.json({ message: "Μη έγκυρη προέλευση." }, { status: 403 });
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ message: "Μη έγκυρο JSON." }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body))
    return NextResponse.json({ message: "Μη έγκυρα δεδομένα." }, { status: 400 });
  const { rate_id, package_id } = body as Record<string, unknown>;
  if (typeof rate_id !== "string" || rate_id.length > 160 || !/^[a-zA-Z0-9:_-]+$/.test(rate_id) ||
      !Number.isSafeInteger(package_id) || Number(package_id) < 0)
    return NextResponse.json({ message: "Μη έγκυρη μέθοδος αποστολής." }, { status: 400 });
  try {
    return await respondCart("/select-shipping-rate", "POST", { rate_id, package_id });
  } catch {
    return NextResponse.json({ message: "Δεν ήταν δυνατή η επιλογή αποστολής." }, { status: 502 });
  }
}
