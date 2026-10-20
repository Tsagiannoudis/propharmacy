
import type { WooProduct } from "./woocommerce";
import type { Product } from "@/app/types";
import { decodeHtml, safeEncodeURI } from "./formatters";
import { parseWooPrice } from "./pricing";

export function mapWooProduct(woo: WooProduct): Product {
    const price = parseWooPrice(woo.prices.price, woo.prices.currency_minor_unit);
    const regularPrice = parseWooPrice(woo.prices.regular_price, woo.prices.currency_minor_unit);

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
        price,
        originalPrice:
            woo.on_sale &&
                regularPrice !== null &&
                price !== null &&
                regularPrice > price
                ? regularPrice
                : undefined,
        image: rawImage ? safeEncodeURI(rawImage) : "",
        inStock: woo.is_in_stock,
        purchasable: woo.is_purchasable,
        productType: woo.type,
        onSale: woo.on_sale,
        categories: (woo.categories ?? []).map((c) => ({
            name: decodeHtml(c.name),
            slug: c.slug,
        })),
        brandSlug: woo.brands?.[0]?.slug,
    };
}
