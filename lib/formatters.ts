/**
 * Common formatting and decoding helpers for ProPharmacy.
 * Centralized to keep code DRY and maintainable.
 */

/**
 * Decodes HTML entities (e.g. &#038;, &amp;, &quot;, &lt;, etc.)
 * that frequently arrive from WooCommerce product names and descriptions.
 */
export function decodeHtml(value: string | undefined | null): string {
    if (!value) return "";
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

/**
 * Normalizes Greek and Latin strings (lowercased + stripped accents/diacritics).
 * Useful for fast client-side searching (e.g. "βιταμινη" matches "Βιταμίνη").
 */
export function normalizeGreekSearch(value: string | undefined | null): string {
    if (!value) return "";
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

/**
 * Formats numeric amounts into Greek locale Currency string (€).
 */
export function formatCurrency(amount: number | null | undefined, currency = "EUR"): string {
    if (amount === null || amount === undefined || !Number.isFinite(amount)) {
        return "Τιμή μη διαθέσιμη";
    }
    return new Intl.NumberFormat("el-GR", {
        style: "currency",
        currency: currency || "EUR",
    }).format(amount);
}

/**
 * Calculates discount percentage between originalPrice and current price.
 */
export function getDiscountPercentage(
    price: number | null | undefined,
    originalPrice: number | null | undefined
): number | null {
    if (
        price !== null &&
        price !== undefined &&
        originalPrice !== null &&
        originalPrice !== undefined &&
        originalPrice > price &&
        originalPrice > 0
    ) {
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
    return null;
}

/**
 * Ensures image URLs and URIs don't crash Node/Next.js ByteString restrictions
 * when containing Greek or special characters.
 */
export function safeEncodeURI(uri: string): string {
    if (!uri) return uri;
    try {
        return encodeURI(decodeURI(uri));
    } catch {
        return encodeURI(uri);
    }
}
