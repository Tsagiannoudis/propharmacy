import { NextRequest, NextResponse } from "next/server";
import { respondCart } from "@/lib/cart-server";
export async function GET(_request: NextRequest) {
  try {
    return await respondCart("", "GET");
  } catch {
    return NextResponse.json(
      { message: "Αδυναμία φόρτωσης καλαθιού." },
      { status: 502 },
    );
  }
}
