/** Convert a WooCommerce Store API minor-unit price to a safe amount. */
export function parseWooPrice(
  raw: string | number | null | undefined,
  minorUnit: number
): number | null {
  if (raw === null || raw === undefined || raw === "") return null;
  if (!Number.isInteger(minorUnit) || minorUnit < 0 || minorUnit > 6) return null;
  const minorAmount = Number(raw);
  if (!Number.isFinite(minorAmount) || minorAmount <= 0) return null;
  return minorAmount / 10 ** minorUnit;
}
