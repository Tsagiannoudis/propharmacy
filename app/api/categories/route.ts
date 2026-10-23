import { NextResponse } from "next/server";
import { getWooCategoryTree } from "@/lib/woocommerce";

export async function GET() {
  try {
    const categories = await getWooCategoryTree();
    return NextResponse.json({ categories }, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch WooCommerce categories:", err);
    return NextResponse.json(
      { error: "Failed to fetch categories", categories: [] },
      { status: 500 }
    );
  }
}
