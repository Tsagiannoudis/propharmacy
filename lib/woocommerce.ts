
import "server-only";
import { cacheLife } from "next/cache";

const baseUrl = process.env.WOOCOMMERCE_URL?.replace(/\/$/, "");

export interface WooProduct {
    id: number;
    name: string;
    slug: string;
    type: string;
    description: string;
    short_description: string;
    is_purchasable: boolean;
    is_in_stock: boolean;
    on_sale: boolean;
    prices: {
        price: string;
        regular_price: string;
        sale_price: string;
        currency_code: string;
        currency_minor_unit: number;
    };
    images: {
        id: number;
        src: string;
        alt: string;
    }[];
    categories: {
        id: number;
        name: string;
        slug: string;
    }[];
    brands?: {
        id: number;
        name: string;
        slug: string;
    }[];
    has_options?: boolean;
    attributes?: {
        id: number;
        name: string;
        taxonomy?: string;
        has_variations?: boolean;
        terms: {
            id: number;
            name: string;
            slug: string;
        }[];
    }[];
    variations?: {
        id: number;
        attributes?: {
            name: string;
            value: string;
        }[];
        prices?: {
            price: string;
            regular_price: string;
            sale_price: string;
        };
        is_in_stock?: boolean;
    }[];
    _embedded?: {
        upsells?: WooProduct[][];
        related?: WooProduct[][];
    };
    linked_products?: WooProduct[];
}

export async function getWooProducts(): Promise<WooProduct[]> {
    if (!baseUrl) {
        throw new Error("Missing WOOCOMMERCE_URL");
    }

    const response = await fetch(
        `${baseUrl}/wp-json/wc/store/v1/products?per_page=12`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!response.ok) {
        throw new Error(
            `WooCommerce API error: ${response.status}`
        );
    }

    return response.json();
}

/**
 * Fetches the full catalogue from the WooCommerce Store API, page by page
 * (max 100 per page). Capped by `maxPages` to keep builds fast.
 */
export async function getAllWooProducts(maxPages = 5): Promise<WooProduct[]> {
    if (!baseUrl) {
        throw new Error("Missing WOOCOMMERCE_URL");
    }

    const all: WooProduct[] = [];
    let page = 1;
    let totalPages = 1;

    do {
        const response = await fetch(
            `${baseUrl}/wp-json/wc/store/v1/products?per_page=100&page=${page}`,
            { next: { revalidate: 60 } }
        );

        if (!response.ok) {
            throw new Error(`WooCommerce API error: ${response.status}`);
        }

        totalPages = Number(response.headers.get("X-WP-TotalPages")) || 1;
        const batch: WooProduct[] = await response.json();
        all.push(...batch);
        page++;
    } while (page <= totalPages && page <= maxPages);

    return all;
}



export async function getWooProductBySlug(
    slug: string
): Promise<WooProduct | null> {
    "use cache";

    cacheLife("minutes");

    if (!baseUrl) {
        throw new Error("Missing WOOCOMMERCE_URL");
    }

    const normalizedSlug = slug.includes("%")
        ? decodeURIComponent(slug)
        : slug;

    const url =
        `${baseUrl}/wp-json/wc/store/v1/products/${encodeURIComponent(normalizedSlug)}?_embed`;


    const response = await fetch(url);


    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error(
            `WooCommerce API error: ${response.status}`
        );
    }

    const product: WooProduct = await response.json();

    if (Array.isArray(product.images)) {
        product.images = product.images.map((img) => {
            try {
                return {
                    ...img,
                    src: encodeURI(decodeURI(img.src)),
                };
            } catch {
                return {
                    ...img,
                    src: encodeURI(img.src),
                };
            }
        });
    }

    // Map linked products (upsells or related products from WooCommerce)
    product.linked_products =
        product._embedded?.upsells?.[0] ||
        product._embedded?.related?.[0] ||
        [];


    return product;
}