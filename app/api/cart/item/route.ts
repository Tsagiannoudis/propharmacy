import { NextRequest, NextResponse } from "next/server";
import { checkSameOrigin, respondCart } from "@/lib/cart-server";
export async function POST(request: NextRequest) {
  if (!checkSameOrigin(request))
    return NextResponse.json(
      { message: "Μη έγκυρη προέλευση." },
      { status: 403 },
    );
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ message: "Μη έγκυρο JSON." }, { status: 400 });
  }
  if (!data || typeof data !== "object")
    return NextResponse.json(
      { message: "Μη έγκυρα δεδομένα." },
      { status: 400 },
    );
  const { key, quantity } = data as { key?: unknown; quantity?: unknown };
  if (typeof key !== "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(key))
    return NextResponse.json({ message: "Μη έγκυρο προϊόν." }, { status: 400 });
  if (
    !Number.isSafeInteger(quantity) ||
    Number(quantity) < 0 ||
    Number(quantity) > 99
  )
    return NextResponse.json(
      { message: "Μη έγκυρη ποσότητα." },
      { status: 400 },
    );
  try {
    return await respondCart(
      quantity === 0 ? "/remove-item" : "/update-item",
      "POST",
      quantity === 0 ? { key } : { key, quantity },
    );
  } catch {
    return NextResponse.json(
      { message: "Αδυναμία ενημέρωσης καλαθιού." },
      { status: 502 },
    );
  }
}
