import type { WooProduct } from "@/lib/woocommerce";

export interface ProductSelectionState {
  selectableAttributes: NonNullable<WooProduct["attributes"]>;
  selectedAttributes: Record<string,string>;
  selectedLinkedProductId: number | null;
  isGiftWrap: boolean;
  giftNote: string;
  selectedSample: string;
}
