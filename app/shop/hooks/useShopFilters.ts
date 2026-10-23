"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/app/types";
import { normalizeGreekSearch } from "@/lib/formatters";

export type SortKey = "featured" | "price-asc" | "price-desc" | "name" | "discount";
export const PAGE_SIZE = 24;
export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Προτεινόμενα" },
  { value: "price-asc", label: "Τιμή: χαμηλή → υψηλή" },
  { value: "price-desc", label: "Τιμή: υψηλή → χαμηλή" },
  { value: "discount", label: "Μεγαλύτερη έκπτωση" },
  { value: "name", label: "Αλφαβητικά (Α-Ω)" },
];
export const priceRanges = [
  { id: "all", label: "Όλες οι τιμές", min: 0, max: Infinity },
  { id: "0-10", label: "Έως 10 €", min: 0, max: 10 },
  { id: "10-25", label: "10 € – 25 €", min: 10, max: 25 },
  { id: "25-50", label: "25 € – 50 €", min: 25, max: 50 },
  { id: "50+", label: "Άνω των 50 €", min: 50, max: Infinity },
];
const normalize = normalizeGreekSearch;
function discountOf(p: Product): number {
  if (p.price === null || !p.originalPrice) return 0;
  return (p.originalPrice - p.price) / p.originalPrice;
}
function toggleInSet(set: Set<string>, value: string): Set<string> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}
import type { CategoryTreeNode } from "@/lib/woocommerce";

export interface FilterChip { key: string; label: string; onRemove: () => void }
export function useShopFilters(products: Product[], categoryTree: CategoryTreeNode[] = []) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<string>>(new Set());

  // Keep the URL category, brand & tag in sync, including when navigating between links.
  const urlCategory = searchParams.get("category");
  const urlBrand = searchParams.get("brand");
  const urlTag = searchParams.get("tag");

  const [tag, setTag] = useState<string | null>(null);
  const [brands, setBrands] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCategories(urlCategory ? new Set([urlCategory]) : new Set());
    setBrands(urlBrand ? new Set([urlBrand]) : new Set());
    setTag(urlTag || null);
    setVisible(PAGE_SIZE);
  }, [urlCategory, urlBrand, urlTag]);
  const [brandQuery, setBrandQuery] = useState("");
  const [priceRangeId, setPriceRangeId] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);


  /* ---------- Facets derived from the WooCommerce catalogue ---------- */
  const categoryFacets = useMemo(() => {
    const map = new Map<string, { name: string; count: number }>();
    for (const p of products) {
      for (const c of p.categories ?? []) {
        if (c.slug === "uncategorized") continue;
        const entry = map.get(c.slug) ?? { name: c.name, count: 0 };
        entry.count++;
        map.set(c.slug, entry);
      }
    }
    return [...map.entries()]
      .map(([slug, v]) => ({ slug, ...v }))
      .sort((a, b) => b.count - a.count);
  }, [products]);

  const brandFacets = useMemo(() => {
    const map = new Map<string, { name: string; count: number }>();
    for (const p of products) {
      if (!p.brand) continue;
      const key = p.brandSlug ?? p.brand;
      const entry = map.get(key) ?? { name: p.brand, count: 0 };
      entry.count++;
      map.set(key, entry);
    }
    return [...map.entries()]
      .map(([slug, v]) => ({ slug, ...v }))
      .sort((a, b) => a.name.localeCompare(b.name, "el"));
  }, [products]);

  const visibleBrandFacets = useMemo(() => {
    const q = normalize(brandQuery);
    return q ? brandFacets.filter((b) => normalize(b.name).includes(q)) : brandFacets;
  }, [brandFacets, brandQuery]);

  /* ---------- Filtering + sorting ---------- */
  const filtered = useMemo(() => {
    const q = normalize(query);
    const range = priceRanges.find((r) => r.id === priceRangeId) ?? priceRanges[0];

    const result = products.filter((p) => {
      if (q) {
        const haystack = normalize(
          [p.name, p.brand, ...(p.categories ?? []).map((c) => c.name)].join(" ")
        );
        if (!haystack.includes(q)) return false;
      }
      if (categories.size > 0) {
        // Expand selected categories to also include their children slugs if it's a parent category
        const expandedSelectedSlugs = new Set<string>();
        for (const selSlug of categories) {
          expandedSelectedSlugs.add(selSlug);
          const parentNode = categoryTree.find((n) => n.slug === selSlug);
          if (parentNode && parentNode.children) {
            for (const child of parentNode.children) {
              expandedSelectedSlugs.add(child.slug);
            }
          }
        }

        const matches = (p.categories ?? []).some((c) => expandedSelectedSlugs.has(c.slug));
        if (!matches) return false;
      }
      if (brands.size > 0 && !brands.has(p.brandSlug ?? p.brand ?? "")) return false;
      if (tag) {
        const decodedTag = decodeURIComponent(tag).toLowerCase().trim();
        const hasMatchingTag = (p.tags ?? []).some((t) => {
          const tSlug = decodeURIComponent(t.slug).toLowerCase().trim();
          const tName = t.name.toLowerCase().trim();
          return tSlug === decodedTag || tName === decodedTag;
        });
        if (!hasMatchingTag) return false;
      }
      if (range.id !== "all") {
        if (p.price === null || p.price < range.min || p.price >= range.max) return false;
      }
      if (inStockOnly && p.inStock === false) return false;
      if (onSaleOnly && discountOf(p) <= 0) return false;
      return true;
    });

    const byPrice = (p: Product) => p.price ?? Number.MAX_SAFE_INTEGER;
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => byPrice(a) - byPrice(b));
        break;
      case "price-desc":
        result.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
        break;
      case "discount":
        result.sort((a, b) => discountOf(b) - discountOf(a));
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name, "el"));
        break;
    }
    return result;
  }, [products, query, categories, brands, priceRangeId, inStockOnly, onSaleOnly, sort]);

  const shown = filtered.slice(0, visible);
  const onSaleCount = useMemo(() => products.filter((p) => discountOf(p) > 0).length, [products]);

  /* ---------- Active filter chips ---------- */
  const activeChips: FilterChip[] = [];
  if (query) activeChips.push({ key: "q", label: `«${query}»`, onRemove: () => setQuery("") });
  for (const slug of categories) {
    const name = categoryFacets.find((c) => c.slug === slug)?.name ?? slug;
    activeChips.push({
      key: `c-${slug}`,
      label: name,
      onRemove: () => setCategories((s) => toggleInSet(s, slug)),
    });
  }
  for (const slug of brands) {
    const name = brandFacets.find((b) => b.slug === slug)?.name ?? slug;
    activeChips.push({
      key: `b-${slug}`,
      label: name,
      onRemove: () => setBrands((s) => toggleInSet(s, slug)),
    });
  }
  if (priceRangeId !== "all") {
    activeChips.push({
      key: "price",
      label: priceRanges.find((r) => r.id === priceRangeId)?.label ?? "",
      onRemove: () => setPriceRangeId("all"),
    });
  }
  if (inStockOnly) activeChips.push({ key: "stock", label: "Σε απόθεμα", onRemove: () => setInStockOnly(false) });
  if (onSaleOnly) activeChips.push({ key: "sale", label: "Σε προσφορά", onRemove: () => setOnSaleOnly(false) });

  if (tag) {
    const foundTag = products
      .flatMap((p) => p.tags ?? [])
      .find((t) => t.slug === tag || t.slug === decodeURIComponent(tag));
    const tagLabel = foundTag ? foundTag.name : decodeURIComponent(tag);

    activeChips.push({
      key: `tag-${tag}`,
      label: `Ετικέτα: ${tagLabel}`,
      onRemove: () => setTag(null),
    });
  }

  const resetFilters = () => {
    setQuery("");
    setCategories(new Set());
    setBrands(new Set());
    setTag(null);
    setPriceRangeId("all");
    setInStockOnly(false);
    setOnSaleOnly(false);
    setVisible(PAGE_SIZE);
  };

  // Any filter change should restart pagination.
  const withReset =
    <T,>(fn: (v: T) => void) =>
    (v: T) => {
      fn(v);
      setVisible(PAGE_SIZE);
    };


  // Determine active parent category if selected, or if a selected subcategory belongs to a parent
  const activeParentCategory = useMemo(() => {
    if (categories.size === 0) return null;
    for (const selSlug of categories) {
      // Is it a parent category?
      const parent = categoryTree.find((p) => p.slug === selSlug);
      if (parent) return parent;

      // Or is it a child of a parent?
      const foundParent = categoryTree.find((p) =>
        p.children?.some((c) => c.slug === selSlug)
      );
      if (foundParent) return foundParent;
    }
    return null;
  }, [categories, categoryTree]);

  return {
    query, setQuery, categories, setCategories, brands, setBrands,
    tag, setTag,
    brandQuery, setBrandQuery, priceRangeId, setPriceRangeId,
    inStockOnly, setInStockOnly, onSaleOnly, setOnSaleOnly,
    sort, setSort, visible, setVisible, categoryFacets, brandFacets,
    visibleBrandFacets, filtered, shown, onSaleCount,
    activeChips, resetFilters, withReset, categoryTree, activeParentCategory,
    toggleCategory: (slug: string) => withReset(setCategories)(toggleInSet(categories, slug)),
    toggleBrand: (slug: string) => withReset(setBrands)(toggleInSet(brands, slug)),
  };
}
export type ShopFiltersState = ReturnType<typeof useShopFilters>;
