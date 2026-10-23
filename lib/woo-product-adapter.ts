
import type { WooProduct } from "./woocommerce";
import type { Product } from "@/app/types";
import { decodeHtml, safeEncodeURI } from "./formatters";
import { parseWooPrice } from "./pricing";

export function isBrandAttribute(attr: {
    name?: string;
    taxonomy?: string;
    slug?: string;
}): boolean {
    const normalize = (s?: string) =>
        (s ?? "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

    const name = normalize(attr.name);
    const taxonomy = normalize(attr.taxonomy);
    const slug = normalize(attr.slug);

    // 1. Check taxonomy or slug matches (pa_brand, pa_brands, pa_etairia, pa_marka, pa_manufacturer)
    const taxCandidates = [taxonomy, slug];
    if (
        taxCandidates.some(
            (t) =>
                t === "pa_brand" ||
                t === "pa_brands" ||
                t === "brand" ||
                t === "brands" ||
                t === "pa_etairia" ||
                t === "pa_etaireia" ||
                t === "etairia" ||
                t === "etaireia" ||
                t === "pa_marka" ||
                t === "marka" ||
                t === "pa_manufacturer" ||
                t === "manufacturer" ||
                t === "pa_kataskevastis"
        )
    ) {
        return true;
    }

    // 2. Check name matches
    if (
        name === "brand" ||
        name === "brands" ||
        name === "brand name" ||
        name === "etairia" ||
        name === "etaireia" ||
        name === "etairies" ||
        name === "etaireies" ||
        name === "marka" ||
        name === "markes" ||
        name === "kataskevastis" ||
        name === "manufacturer" ||
        name === "company"
    ) {
        return true;
    }

    // 3. Substring match (e.g. "Brand / Εταιρεία", "Εταιρεία (Brand)")
    if (
        name.includes("brand") ||
        name.includes("etairi") ||
        name.includes("marka")
    ) {
        return true;
    }

    return false;
}

export function extractBrand(woo: WooProduct): {
    brand?: string;
    brandSlug?: string;
} {
    // 1. Direct brands taxonomy (WooCommerce Brands extension)
    if (woo.brands && woo.brands.length > 0 && woo.brands[0]?.name) {
        const b = woo.brands[0];
        const name = decodeHtml(b.name).trim();
        if (name) {
            return {
                brand: name,
                brandSlug: b.slug || name.toLowerCase().replace(/\s+/g, "-"),
            };
        }
    }

    // 2. Attributes (Store API: terms array, or REST API: options array)
    if (Array.isArray(woo.attributes) && woo.attributes.length > 0) {
        const brandAttr = woo.attributes.find(isBrandAttribute);
        if (brandAttr) {
            // Check terms (Store API)
            if (Array.isArray(brandAttr.terms) && brandAttr.terms.length > 0) {
                const term = brandAttr.terms[0];
                if (term && term.name) {
                    const name = decodeHtml(term.name).trim();
                    if (name) {
                        return {
                            brand: name,
                            brandSlug: term.slug || name.toLowerCase().replace(/\s+/g, "-"),
                        };
                    }
                }
            }

            // Check options (custom attributes / REST API)
            if (Array.isArray(brandAttr.options) && brandAttr.options.length > 0) {
                const opt = brandAttr.options[0];
                const optName = typeof opt === "string" ? opt : (opt as any)?.name;
                const optSlug = typeof opt === "object" ? (opt as any)?.slug : undefined;
                if (typeof optName === "string" && optName.trim().length > 0) {
                    const name = decodeHtml(optName).trim();
                    return {
                        brand: name,
                        brandSlug: optSlug || name.toLowerCase().replace(/\s+/g, "-"),
                    };
                }
            }
        }
    }

    return {};
}

export function mapWooProduct(woo: WooProduct): Product {
    const price = parseWooPrice(woo.prices.price, woo.prices.currency_minor_unit);
    const regularPrice = parseWooPrice(woo.prices.regular_price, woo.prices.currency_minor_unit);

    const rawImage = woo.images?.[0]?.src;
    const { brand, brandSlug } = extractBrand(woo);

    return {
        id: woo.id,
        name: decodeHtml(woo.name),
        slug: woo.slug,
        category: woo.categories?.[0]?.name
            ? decodeHtml(woo.categories[0].name)
            : undefined,
        brand,
        brandSlug,
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
            id: c.id,
            name: decodeHtml(c.name),
            slug: c.slug,
        })),
        tags: (woo.tags ?? []).map((t) => ({
            id: t.id,
            name: decodeHtml(t.name),
            slug: t.slug,
        })),
    };
}
