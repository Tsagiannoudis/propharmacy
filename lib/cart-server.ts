import "server-only";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import type { WooCart } from "@/lib/cart-types";

const COOKIE = "propharmacy_cart_token";
const BASE = process.env.WOOCOMMERCE_URL?.replace(/\/$/, "");
const API_PATH = "/wp-json/wc/store/v1/cart";

export function checkSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return new URL(origin).host === request.nextUrl.host;
}

async function wooRequest(
  path: string,
  method: "GET" | "POST",
  payload?: object,
) {
  if (!BASE) throw new Error("WOOCOMMERCE_URL is missing");
  const token = (await cookies()).get(COOKIE)?.value;
  const headers: Record<string, string> = { Accept: "application/json" };
  if (token) headers["Cart-Token"] = token;
  if (payload) headers["Content-Type"] = "application/json";
  const response = await fetch(BASE + API_PATH + path, {
    method,
    headers,
    body: payload ? JSON.stringify(payload) : undefined,
    cache: "no-store",
    redirect: "error",
  });
  const json: unknown = await response.json().catch(() => ({}));
  return { response, json, token: response.headers.get("Cart-Token") || token };
}

export async function respondCart(
  path: string,
  method: "GET" | "POST",
  payload?: object,
): Promise<NextResponse> {
  // A GET initializes an anonymous WooCommerce cart and returns its Cart-Token.
  // A newly initialized token is then reused for the actual mutation.
  if (method === "POST" && !(await cookies()).get(COOKIE)) {
    const init = await wooRequest("", "GET");
    if (!init.response.ok || !init.token) {
      return NextResponse.json(
        { message: "Δεν δημιουργήθηκε συνεδρία καλαθιού." },
        { status: 502 },
      );
    }
    const headers: Record<string, string> = {
      "Cart-Token": init.token,
      "Content-Type": "application/json",
    };
    const response = await fetch((BASE || "") + API_PATH + path, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "error",
    });
    const json: unknown = await response.json().catch(() => ({}));
    return finalize(
      response,
      json,
      response.headers.get("Cart-Token") || init.token,
    );
  }
  const result = await wooRequest(path, method, payload);
  return finalize(result.response, result.json, result.token ?? null);
}

function finalize(
  upstream: Response,
  json: unknown,
  token: string | null,
): NextResponse {
  const response = NextResponse.json(json as WooCart, {
    status: upstream.ok ? 200 : upstream.status,
    headers: { "Cache-Control": "no-store" },
  });
  if (token && upstream.ok)
    response.cookies.set(COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  return response;
}
