export function formatCartAmount(raw: string, currency: string, minorUnit: number): string {
  const amount = Number(raw) / 10 ** minorUnit;
  return Number.isFinite(amount) ? new Intl.NumberFormat("el-GR", { style: "currency", currency: currency || "EUR" }).format(amount) : "—";
}
