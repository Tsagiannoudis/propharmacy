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
  const { id, quantity } = data as { id?: unknown; quantity?: unknown };
  if (
    !Number.isSafeInteger(id) ||
    Number(id) < 1 ||
    !Number.isSafeInteger(quantity) ||
    Number(quantity) < 1 ||
    Number(quantity) > 99
  )
    return NextResponse.json(
      { message: "Μη έγκυρο προϊόν ή ποσότητα." },
      { status: 400 },
    );
  try {
    return await respondCart("/add-item", "POST", { id, quantity });
  } catch {
    return NextResponse.json(
      { message: "Δεν ήταν δυνατή η προσθήκη." },
      { status: 502 },
    );
  }
}
