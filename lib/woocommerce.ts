
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
    tags?: {
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
            { next: { revalidate: 30 } }
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

export interface WooCategoryItem {
    id: number;
    name: string;
    slug: string;
    parent: number;
    count: number;
    description?: string;
    image?: {
        id: number;
        src: string;
        alt: string;
    } | null;
}

export interface CategoryTreeNode extends WooCategoryItem {
    children: WooCategoryItem[];
}

/**
 * Fetches all product categories from WooCommerce Store API and organizes them in a tree hierarchy.
 */
export async function getWooCategoryTree(): Promise<CategoryTreeNode[]> {
    if (!baseUrl) {
        throw new Error("Missing WOOCOMMERCE_URL");
    }

    const response = await fetch(
        `${baseUrl}/wp-json/wc/store/v1/products/categories?per_page=100`,
        { next: { revalidate: 300 } }
    );

    if (!response.ok) {
        throw new Error(`WooCommerce categories API error: ${response.status}`);
    }

    const categories: WooCategoryItem[] = await response.json();

    // Map into parents and children
    const parentMap = new Map<number, CategoryTreeNode>();
    const orphanedChildren: WooCategoryItem[] = [];

    // Filter out 'uncategorized'
    const valid = categories.filter((c) => c.slug !== "uncategorized");

    // First pass: find top-level categories (parent === 0)
    for (const cat of valid) {
        if (cat.parent === 0) {
            parentMap.set(cat.id, {
                ...cat,
                children: [],
            });
        }
    }

    // Second pass: associate children with parents or sub-parents
    for (const cat of valid) {
        if (cat.parent !== 0) {
            if (parentMap.has(cat.parent)) {
                parentMap.get(cat.parent)!.children.push(cat);
            } else {
                orphanedChildren.push(cat);
            }
        }
    }

    // Handle nested subcategories (e.g. child whose parent is an already nested subcategory)
    for (const child of orphanedChildren) {
        let placed = false;
        for (const parent of parentMap.values()) {
            const directParent = parent.children.find((c) => c.id === child.parent);
            if (directParent) {
                // If it's a 3rd level item, place it under the top-level parent's children list
                parent.children.push(child);
                placed = true;
                break;
            }
        }
        if (!placed) {
            // Treat as top level if parent not found
            parentMap.set(child.id, {
                ...child,
                children: [],
            });
        }
    }

    return Array.from(parentMap.values()).sort((a, b) => b.count - a.count);
}

export interface WooTagItem {
    id: number;
    name: string;
    slug: string;
    description?: string;
    count: number;
}

/**
 * Fetches product tags from WooCommerce Store API.
 */
export async function getWooTags(): Promise<WooTagItem[]> {
    if (!baseUrl) {
        throw new Error("Missing WOOCOMMERCE_URL");
    }

    const response = await fetch(
        `${baseUrl}/wp-json/wc/store/v1/products/tags?per_page=100`,
        { next: { revalidate: 30 } }
    );

    if (!response.ok) {
        throw new Error(`WooCommerce tags API error: ${response.status}`);
    }

    const tags: WooTagItem[] = await response.json();
    return tags.filter((t) => t.count > 0).sort((a, b) => b.count - a.count);
}