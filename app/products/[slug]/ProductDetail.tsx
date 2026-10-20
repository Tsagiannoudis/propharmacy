"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    Search,
    X,
    Check,
    Gift,
    Sparkles,
    Truck,
    RotateCcw,
    ShieldCheck,
    ShoppingBag,
    Package,
    HeartHandshake,
    Layers,
    Minus,
    Plus,
} from "lucide-react";
import type { WooProduct } from "@/lib/woocommerce";

interface Props {
    product: WooProduct;
}

function decodeHtml(value: string) {
    return value
        .replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, (match, hex, dec) => {
            const code = parseInt(hex || dec, hex ? 16 : 10);
            return code > 0 && code <= 0x10ffff
                ? String.fromCodePoint(code)
                : match;
        })
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}

export default function ProductDetail({ product }: Props) {
    const [activeImage, setActiveImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // ========================================================
    // DYNAMIC WOOCOMMERCE ATTRIBUTES DETECTION
    // ========================================================
    // Filter selectable attributes (excluding administrative metadata like Company/Brand)
    const selectableAttributes = (product.attributes ?? []).filter((attr) => {
        const nameLower = attr.name.toLowerCase();
        return (
            nameLower !== "εταιρία" &&
            nameLower !== "brand" &&
            attr.terms &&
            attr.terms.length > 0
        );
    });

    // State for user's selected terms per attribute: { [attributeName]: selectedTermSlug }
    const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>(() => {
        const initial: Record<string, string> = {};
        for (const attr of selectableAttributes) {
            if (attr.terms.length > 0) {
                initial[attr.name] = attr.terms[0].slug;
            }
        }
        return initial;
    });

    // Linked products from WooCommerce (Upsells / Cross-sells)
    const linkedProducts = product.linked_products ?? [];
    const [selectedLinkedProductId, setSelectedLinkedProductId] = useState<number | null>(null);

    const [isGiftWrap, setIsGiftWrap] = useState(true);
    const [giftNote, setGiftNote] = useState("");
    const [selectedSample, setSelectedSample] = useState("hydration");

    // Real WooCommerce product data
    const images = product.images ?? [];
    const prices = product.prices;
    const minorUnit = prices.currency_minor_unit;

    // Base price per unit from WooCommerce
    const unitPrice = Number(prices.price) / 10 ** minorUnit || 24.5;
    const basePrice = unitPrice * quantity;

    // Selected linked product calculation
    const selectedLinkedProduct = linkedProducts.find((p) => p.id === selectedLinkedProductId);
    const linkedProductPrice = selectedLinkedProduct
        ? (Number(selectedLinkedProduct.prices.price) / 10 ** selectedLinkedProduct.prices.currency_minor_unit)
        : 0;

    const giftWrapPrice = isGiftWrap ? 1.5 : 0;
    const totalPrice = basePrice + linkedProductPrice + giftWrapPrice;

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat("el-GR", {
            style: "currency",
            currency: prices.currency_code || "EUR",
        }).format(amount);

    const imagesCount = images.length;

    const previousImage = () => {
        if (imagesCount === 0) return;
        setActiveImage((current) => (current - 1 + imagesCount) % imagesCount);
    };

    const nextImage = () => {
        if (imagesCount === 0) return;
        setActiveImage((current) => (current + 1) % imagesCount);
    };

    const categorySlug = product.categories?.[0]?.slug || "";
    const categoryName = product.categories?.[0]?.name
        ? decodeHtml(product.categories[0].name)
        : "Προϊόντα";

    return (
        <div className="w-full">
            {/* ============================================================ */}
            {/* TOP BAR / BREADCRUMB & HEADER                                 */}
            {/* ============================================================ */}
            <div className="mb-8">
                <Link
                    href={categorySlug ? `/category/${categorySlug}` : "/shop"}
                    className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-ink-500 transition hover:text-ink-900"
                >
                    <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
                    <span>Επιστροφή στα {categoryName}</span>
                </Link>

                <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl md:text-5xl">
                            {decodeHtml(product.name)}
                        </h1>
                        <p className="mt-1 text-sm text-ink-500">
                            Εξατομικευμένη επιλογή φαρμακευτικής φροντίδας
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-600 backdrop-blur-sm self-start md:self-auto">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        {product.is_in_stock ? "Άμεσα διαθέσιμο στο φαρμακείο" : "Περιορισμένο απόθεμα"}
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* MAIN 3-COLUMN BUILDER STAGE                                   */}
            {/* ============================================================ */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[290px_1fr_340px] xl:grid-cols-[320px_1fr_360px]">
                {/* -------------------------------------------------------- */}
                {/* 1. LEFT COLUMN: LIVE PHARMACY BREAKDOWN                  */}
                {/* -------------------------------------------------------- */}
                <div className="space-y-4 lg:sticky lg:top-24">
                    <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-md">
                        {/* Header */}
                        <div className="border-b border-ink-100 pb-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-400">
                                Μοντέλο
                            </span>
                            <h2 className="mt-0.5 font-display text-base font-bold text-ink-900 line-clamp-1">
                                {decodeHtml(product.name)}
                            </h2>
                        </div>

                        {/* Breakdown lines matching user's exact specification */}
                        <div className="mt-4 space-y-3 text-xs text-ink-700">
                            {/* Dynamic WooCommerce Attributes lines (e.g. Μέγεθος, Χρώμα, Γεύση) */}
                            {selectableAttributes.length > 0 ? (
                                selectableAttributes.map((attr) => {
                                    const selectedSlug = selectedAttributes[attr.name];
                                    const selectedTerm =
                                        attr.terms.find((t) => t.slug === selectedSlug) || attr.terms[0];
                                    return (
                                        <div key={attr.name} className="flex items-start justify-between gap-2">
                                            <span className="flex items-center gap-1.5 text-ink-600">
                                                <span className="text-ink-400">•</span>
                                                <span>
                                                    {decodeHtml(attr.name)}: {decodeHtml(selectedTerm.name)}
                                                    {quantity > 1 ? ` (x${quantity})` : ""}
                                                </span>
                                            </span>
                                            <span className="font-bold text-ink-900 shrink-0">
                                                {formatCurrency(basePrice)}
                                            </span>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="flex items-start justify-between gap-2">
                                    <span className="flex items-center gap-1.5 text-ink-600">
                                        <span className="text-ink-400">•</span>
                                        <span>
                                            Συσκευασία Προϊόντος {quantity > 1 ? `(x${quantity})` : ""}
                                        </span>
                                    </span>
                                    <span className="font-bold text-ink-900 shrink-0">
                                        {formatCurrency(basePrice)}
                                    </span>
                                </div>
                            )}

                            {/* Πρόσθετο / Συνδεδεμένο Προϊόν WooCommerce */}
                            {selectedLinkedProduct && (
                                <div className="flex items-start justify-between gap-2">
                                    <span className="flex items-center gap-1.5 text-ink-600">
                                        <span className="text-ink-400">•</span>
                                        <span className="line-clamp-1">
                                            Πρόσθετο: {decodeHtml(selectedLinkedProduct.name)}
                                        </span>
                                    </span>
                                    <span className="font-bold text-brand-700 shrink-0">
                                        + {formatCurrency(linkedProductPrice)}
                                    </span>
                                </div>
                            )}

                            {/* Πολυτελής Συσκευασία Δώρου */}
                            {isGiftWrap && (
                                <div className="flex items-start justify-between gap-2">
                                    <span className="flex items-center gap-1.5 text-ink-600">
                                        <span className="text-ink-400">•</span>
                                        <span>Πολυτελής Συσκευασία Δώρου</span>
                                    </span>
                                    <span className="font-bold text-brand-700 shrink-0">
                                        + {formatCurrency(giftWrapPrice)}
                                    </span>
                                </div>
                            )}

                            {/* 2x Δωρεάν Δείγματα */}
                            <div className="flex items-start justify-between gap-2 text-ink-500">
                                <span className="flex items-center gap-1.5">
                                    <span className="text-ink-400">•</span>
                                    <span>2x Δωρεάν Δείγματα</span>
                                </span>
                                <span className="font-semibold text-emerald-600 shrink-0">
                                    0,00 €
                                </span>
                            </div>

                            {/* Dotted separator */}
                            <div className="my-3 border-t-2 border-dotted border-ink-200" />

                            {/* Συνολική Τιμή */}
                            <div className="pt-1">
                                <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                                    Συνολική Τιμή:
                                </div>
                                <div className="mt-1 flex items-baseline justify-between">
                                    <span className="font-display text-3xl font-extrabold tracking-tight text-ink-950">
                                        {formatCurrency(totalPrice)}
                                    </span>
                                </div>
                                <p className="mt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                                    <Check size={14} className="text-emerald-600 stroke-[3]" />
                                    <span>Δωρεάν Μεταφορικά ACS διαθέσιμα</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quantity + Order action button */}
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between rounded-2xl border border-ink-100 bg-white/80 p-2.5">
                            <span className="text-xs font-semibold text-ink-700 px-2">
                                Ποσότητα:
                            </span>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    disabled={quantity <= 1}
                                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-ink-200 text-ink-700 transition hover:bg-ink-50 disabled:opacity-30"
                                >
                                    <Minus size={14} />
                                </button>
                                <span className="text-sm font-bold text-ink-900 w-4 text-center">
                                    {quantity}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-ink-200 text-ink-700 transition hover:bg-ink-50"
                                >
                                    <Plus size={14} />
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            disabled={!product.is_in_stock}
                            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-800 py-4 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition hover:bg-brand-900 active:scale-[0.99] disabled:opacity-50"
                        >
                            <ShoppingBag size={17} className="transition group-hover:scale-110" />
                            <span>Προσθήκη στο καλάθι</span>
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-ink-500">
                        <ShieldCheck size={14} className="text-emerald-600" />
                        <span>100% Αυθεντικό Προϊόν Φαρμακείου</span>
                    </div>
                </div>

                {/* -------------------------------------------------------- */}
                {/* 2. CENTER STAGE: WOOCOMMERCE PHOTO SLIDER                */}
                {/* -------------------------------------------------------- */}
                <div className="flex flex-col items-center">
                    {/* Stage background card */}
                    <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#eaf2ef]/70 to-[#dcebe5]/50 p-6 shadow-inner backdrop-blur-sm sm:p-10">
                        {/* Zoom pill button */}
                        {images[activeImage] && (
                            <button
                                type="button"
                                onClick={() => setIsLightboxOpen(true)}
                                aria-label="Μεγέθυνση φωτογραφίας"
                                className="absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink-700 shadow-sm backdrop-blur-md transition hover:bg-white hover:text-ink-900"
                            >
                                <Search size={13} />
                                <span>Μεγέθυνση</span>
                            </button>
                        )}

                        {/* Gift Wrap Badge Preview if active */}
                        {isGiftWrap && (
                            <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-700/90 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm">
                                <Gift size={13} />
                                <span>Συσκευασία Δώρου</span>
                            </div>
                        )}

                        {/* Real product image from WooCommerce */}
                        {images[activeImage] ? (
                            <div className="relative h-full w-full">
                                <Image
                                    src={images[activeImage].src}
                                    alt={images[activeImage].alt || product.name}
                                    fill
                                    priority
                                    unoptimized
                                    sizes="(min-width: 1024px) 45vw, 90vw"
                                    className="object-contain drop-shadow-xl transition-all duration-300"
                                />
                            </div>
                        ) : (
                            <div className="text-center text-sm text-ink-400">
                                Δεν υπάρχει διαθέσιμη φωτογραφία
                            </div>
                        )}
                    </div>

                    {/* Circular stage base with Photo Slider Controls */}
                    <div className="relative -mt-6 flex flex-col items-center">
                        {/* Circular platform shadow base */}
                        <div className="h-6 w-72 rounded-[100%] bg-ink-900/10 blur-md" />

                        {/* Slider controls (↶ and ↷ navigation buttons) */}
                        <div className="mt-2 flex items-center gap-3">
                            <button
                                type="button"
                                onClick={previousImage}
                                aria-label="Προηγούμενη φωτογραφία"
                                title="Προηγούμενη φωτογραφία"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-700 shadow-md backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Image counter indicator */}
                            <div className="rounded-full border border-white/80 bg-white/80 px-4 py-1.5 text-xs font-bold text-ink-700 shadow-sm backdrop-blur-md">
                                {imagesCount > 0 ? `${activeImage + 1} / ${imagesCount}` : "1 / 1"}
                            </div>

                            <button
                                type="button"
                                onClick={nextImage}
                                aria-label="Επόμενη φωτογραφία"
                                title="Επόμενη φωτογραφία"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-700 shadow-md backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Thumbnails row for quick direct selection */}
                        {imagesCount > 1 && (
                            <div className="mt-4 flex max-w-xs items-center gap-2 overflow-x-auto no-scrollbar py-1">
                                {images.map((img, idx) => (
                                    <button
                                        key={`${img.id}-${idx}`}
                                        type="button"
                                        onClick={() => setActiveImage(idx)}
                                        className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border-2 transition ${activeImage === idx
                                            ? "border-brand-700 ring-2 ring-brand-700/20"
                                            : "border-transparent opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt || product.name}
                                            fill
                                            unoptimized
                                            className="object-contain p-1"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* -------------------------------------------------------- */}
                {/* 3. RIGHT COLUMN: DYNAMIC WOOCOMMERCE CONTROLS            */}
                {/* -------------------------------------------------------- */}
                <div className="space-y-4">
                    {/* DYNAMIC ATTRIBUTE CARDS FROM WOOCOMMERCE (Μέγεθος, Χρώμα, Γεύση, etc.) */}
                    {selectableAttributes.length > 0 ? (
                        selectableAttributes.map((attr) => {
                            const selectedSlug = selectedAttributes[attr.name];
                            return (
                                <div
                                    key={attr.id || attr.name}
                                    className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                                            {attr.name.toLowerCase().includes("μέγεθος") ||
                                                attr.name.toLowerCase().includes("weight") ? (
                                                <Package size={14} className="text-brand-700" />
                                            ) : (
                                                <Layers size={14} className="text-brand-700" />
                                            )}
                                            <span>{decodeHtml(attr.name)}</span>
                                        </span>
                                        <span className="text-[11px] font-semibold text-brand-700">
                                            {attr.terms.length} επιλογές WooCommerce
                                        </span>
                                    </div>

                                    <div className="mt-3 space-y-2">
                                        {attr.terms.map((term) => {
                                            const isSelected = selectedSlug === term.slug;
                                            return (
                                                <button
                                                    key={term.id || term.slug}
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedAttributes((prev) => ({
                                                            ...prev,
                                                            [attr.name]: term.slug,
                                                        }))
                                                    }
                                                    className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left transition ${isSelected
                                                        ? "border-brand-700 bg-brand-50/70 text-ink-900 shadow-sm"
                                                        : "border-ink-100 bg-white/60 text-ink-700 hover:border-ink-300"
                                                        }`}
                                                >
                                                    <div>
                                                        <div className="text-xs font-bold text-ink-900">
                                                            {decodeHtml(term.name)}
                                                        </div>
                                                        <div className="text-[10px] text-ink-500 mt-0.5">
                                                            Επιβεβαιωμένο απόθεμα WooCommerce
                                                        </div>
                                                    </div>
                                                    <div className="text-right shrink-0">
                                                        <span
                                                            className={`inline-block h-3.5 w-3.5 rounded-full border ${isSelected
                                                                ? "border-brand-700 bg-brand-700"
                                                                : "border-ink-300"
                                                                }`}
                                                        />
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        /* When product has no variation attributes, show single verified pack card */
                        <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                                    <Package size={14} className="text-brand-700" />
                                    <span>Συσκευασία Προϊόντος</span>
                                </span>
                                <span className="text-[11px] font-bold text-emerald-700">1 Επιλογή</span>
                            </div>
                            <div className="mt-3 rounded-2xl border border-brand-700/60 bg-brand-50/50 p-3.5 text-xs text-ink-800">
                                <div className="font-bold text-ink-900">
                                    Βασική Εργοστασιακή Συσκευασία
                                </div>
                                <div className="text-[11px] text-ink-500 mt-1">
                                    Το συγκεκριμένο προϊόν διατίθεται σε ενιαία αυθεντική συσκευασία.
                                </div>
                            </div>
                        </div>
                    )}

                    {/* DYNAMIC ROUTINE ADD-ON FROM WOOCOMMERCE LINKED PRODUCTS */}
                    {linkedProducts.length > 0 && (
                        <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                                    <Sparkles size={14} className="text-brand-700" />
                                    <span>Συμπληρωματική Φροντίδα (Πρόσθετο)</span>
                                </span>
                                <span className="text-[11px] font-semibold text-brand-700">
                                    Προτάσεις <br /> για εσάς
                                </span>
                            </div>

                            <div className="mt-3 space-y-2">
                                {/* Option 1: None */}
                                <label
                                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3 transition ${selectedLinkedProductId === null
                                        ? "border-brand-700 bg-brand-50/60"
                                        : "border-ink-100 bg-white/60 hover:border-ink-300"
                                        }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <input
                                            type="radio"
                                            name="linkedProduct"
                                            checked={selectedLinkedProductId === null}
                                            onChange={() => setSelectedLinkedProductId(null)}
                                            className="h-3.5 w-3.5 text-brand-700 focus:ring-0"
                                        />
                                        <span className="text-xs font-medium text-ink-800">
                                            Χωρίς πρόσθετο
                                        </span>
                                    </div>
                                    <span className="text-xs font-semibold text-ink-500">0,00 €</span>
                                </label>

                                {/* Real WooCommerce Linked Products */}
                                {linkedProducts.map((linked) => {
                                    const isSelected = selectedLinkedProductId === linked.id;
                                    const itemPrice =
                                        Number(linked.prices.price) / 10 ** linked.prices.currency_minor_unit;
                                    return (
                                        <label
                                            key={linked.id}
                                            className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3 transition ${isSelected
                                                ? "border-brand-700 bg-brand-50/60"
                                                : "border-ink-100 bg-white/60 hover:border-ink-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                                <input
                                                    type="radio"
                                                    name="linkedProduct"
                                                    checked={isSelected}
                                                    onChange={() => setSelectedLinkedProductId(linked.id)}
                                                    className="h-3.5 w-3.5 text-brand-700 focus:ring-0 shrink-0"
                                                />
                                                {linked.images?.[0] && (
                                                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white border border-ink-100 p-0.5">
                                                        <Image
                                                            src={linked.images[0].src}
                                                            alt={linked.name}
                                                            fill
                                                            unoptimized
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <div className="text-xs font-bold text-ink-900 truncate">
                                                        + {decodeHtml(linked.name)}
                                                    </div>
                                                    <div className="text-[10px] text-ink-500">
                                                        {linked.is_in_stock ? "Άμεσα διαθέσιμο" : "Περιορισμένο απόθεμα"}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-xs font-bold text-brand-700 shrink-0">
                                                + {formatCurrency(itemPrice)}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* GIFT WRAP & GREETING CARD */}
                    <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                                <Gift size={14} className="text-brand-700" />
                                <span>Συσκευασία Δώρου & Κάρτα</span>
                            </span>
                            <span className="text-xs font-bold text-brand-700">+ 1,50 €</span>
                        </div>

                        <label className="mt-3 flex cursor-pointer items-center gap-2.5">
                            <input
                                type="checkbox"
                                checked={isGiftWrap}
                                onChange={(e) => setIsGiftWrap(e.target.checked)}
                                className="h-4 w-4 rounded text-brand-700 focus:ring-0"
                            />
                            <span className="text-xs font-semibold text-ink-800">
                                Επιθυμώ Πολυτελή Συσκευασία Δώρου
                            </span>
                        </label>

                        {isGiftWrap && (
                            <div className="mt-3">
                                <label className="text-[11px] font-semibold text-ink-600">
                                    Ευχητήριο Μήνυμα στην Κάρτα (Προαιρετικό)
                                </label>
                                <input
                                    type="text"
                                    value={giftNote}
                                    maxLength={80}
                                    onChange={(e) => setGiftNote(e.target.value)}
                                    placeholder="π.χ. Χρόνια πολλά με αγάπη & υγεία!"
                                    className="mt-1.5 h-10 w-full rounded-xl border border-ink-200 bg-white px-3 text-xs text-ink-900 placeholder:text-ink-400 focus:border-brand-700 focus:outline-none"
                                />
                            </div>
                        )}
                    </div>

                    {/* FREE SAMPLES */}
                    <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                                <HeartHandshake size={14} className="text-brand-700" />
                                <span>2x Δωρεάν Δείγματα</span>
                            </span>
                            <span className="text-[11px] font-bold text-emerald-700">ΔΩΡΕΑΝ</span>
                        </div>

                        <div className="mt-2.5 grid grid-cols-3 gap-2">
                            {[
                                { id: "hydration", label: "Ενυδάτωση" },
                                { id: "antiaging", label: "Αντιγήρανση" },
                                { id: "sensitive", label: "Ευαίσθητο" },
                            ].map((s) => (
                                <button
                                    key={s.id}
                                    type="button"
                                    onClick={() => setSelectedSample(s.id)}
                                    className={`rounded-xl px-2 py-2 text-center text-[11px] font-semibold transition ${selectedSample === s.id
                                        ? "bg-brand-800 text-white shadow-sm"
                                        : "border border-ink-100 bg-white/70 text-ink-700 hover:border-ink-300"
                                        }`}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* PRODUCT DETAILS & WOOCOMMERCE ACCORDIONS                      */}
            {/* ============================================================ */}
            <div className="mt-14 border-t border-ink-200/80 pt-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Left: WooCommerce Description */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-ink-900">
                            Περιγραφή & Χαρακτηριστικά
                        </h3>
                        {product.description ? (
                            <div
                                className="prose prose-sm mt-4 text-ink-600 leading-relaxed max-w-none"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        ) : product.short_description ? (
                            <div
                                className="prose prose-sm mt-4 text-ink-600 leading-relaxed max-w-none"
                                dangerouslySetInnerHTML={{ __html: product.short_description }}
                            />
                        ) : (
                            <p className="mt-4 text-sm text-ink-500">
                                Δεν υπάρχει αναλυτική περιγραφή για το προϊόν.
                            </p>
                        )}
                    </div>

                    {/* Right: Policy & Delivery cards */}
                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-bold text-ink-900">
                            Εγγύηση & Παράδοση
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="rounded-2xl border border-ink-100 bg-white p-4">
                                <Truck size={18} className="text-brand-700" />
                                <div className="mt-2 text-xs font-bold text-ink-900">
                                    Αποστολή ACS Courier
                                </div>
                                <div className="mt-0.5 text-xs text-ink-500">
                                    Παράδοση σε 1-3 εργάσιμες ημέρες
                                </div>
                            </div>

                            <div className="rounded-2xl border border-ink-100 bg-white p-4">
                                <RotateCcw size={18} className="text-brand-700" />
                                <div className="mt-2 text-xs font-bold text-ink-900">
                                    Επιστροφή 14 ημερών
                                </div>
                                <div className="mt-0.5 text-xs text-ink-500">
                                    Δωρεάν και εύκολη διαδικασία
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* LIGHTBOX MODAL                                               */}
            {/* ============================================================ */}
            {isLightboxOpen && images[activeImage] && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsLightboxOpen(false)}
                        aria-label="Κλείσιμο"
                        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
                    >
                        <X size={22} />
                    </button>
                    <div
                        className="relative max-h-[85vh] max-w-[85vw] overflow-hidden rounded-2xl bg-white p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[activeImage].src}
                            alt={images[activeImage].alt || product.name}
                            width={1000}
                            height={1000}
                            unoptimized
                            className="max-h-[75vh] w-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
