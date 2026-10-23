import { NextResponse } from "next/server";
import { getWooTags } from "@/lib/woocommerce";

export async function GET() {
  try {
    const tags = await getWooTags();
    return NextResponse.json({ tags }, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch WooCommerce tags:", err);
    return NextResponse.json(
      { error: "Failed to fetch tags", tags: [] },
      { status: 500 }
    );
  }
}
