
import type { WooProduct } from "./woocommerce";
import type { Product } from "@/app/types";

function decodeHtml(value: string): string {
    return value
        .replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, (match, hex, dec) => {
            const code = parseInt(hex || dec, hex ? 16 : 10);
            return code > 0 && code <= 0x10ffff
                ? String.fromCodePoint(code)
                : match;
        })
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&apos;|&#039;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ");
}

function safeEncodeURI(uri: string): string {
    if (!uri) return uri;
    try {
        return encodeURI(decodeURI(uri));
    } catch {
        return encodeURI(uri);
    }
}

export function mapWooProduct(woo: WooProduct): Product {
    const divisor = 10 ** woo.prices.currency_minor_unit;

    const priceValue = woo.prices.price;
    const regularValue = woo.prices.regular_price;

    const price =
        priceValue !== ""
            ? Number(priceValue) / divisor
            : null;

    const regularPrice =
        regularValue !== ""
            ? Number(regularValue) / divisor
            : null;

    const rawImage = woo.images?.[0]?.src;

    return {
        id: woo.id,
        name: decodeHtml(woo.name),
        slug: woo.slug,
        category: woo.categories?.[0]?.name
            ? decodeHtml(woo.categories[0].name)
            : undefined,
        brand: woo.brands?.[0]?.name
            ? decodeHtml(woo.brands[0].name)
            : undefined,
        price: price !== null && Number.isFinite(price)
            ? price
            : null,
        originalPrice:
            woo.on_sale &&
                regularPrice !== null &&
                Number.isFinite(regularPrice) &&
                price !== null &&
                regularPrice > price
                ? regularPrice
                : undefined,
        image: rawImage ? safeEncodeURI(rawImage) : "/placeholder.png",
        inStock: woo.is_in_stock,
        purchasable: woo.is_purchasable,
        productType: woo.type,
    };
}
