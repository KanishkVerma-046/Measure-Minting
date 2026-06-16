/**
 * Format a conversion result for display: ~6 significant figures, thousands
 * separators, trailing zeros trimmed, and exponential notation only for
 * genuinely extreme magnitudes (so it stays readable, never a 14-digit float
 * artifact like `3.2999999999999996`).
 */
export function formatNumber(value: number, maxSignificantDigits = 6): string {
  if (!Number.isFinite(value)) return "—";
  if (value === 0) return "0";

  const abs = Math.abs(value);
  if (abs < 1e-6 || abs >= 1e15) {
    return value.toExponential(4);
  }

  const precise = Number(value.toPrecision(maxSignificantDigits));
  return precise.toLocaleString("en-US", { maximumFractionDigits: 10 });
}

/**
 * Same rounding as `formatNumber`, but without thousands separators — safe to
 * round-trip through `parseFloat` for editable converter inputs.
 */
export function roundForInput(value: number, maxSignificantDigits = 6): string {
  if (!Number.isFinite(value)) return "";
  if (value === 0) return "0";

  const abs = Math.abs(value);
  if (abs < 1e-6 || abs >= 1e15) {
    return value.toExponential(4);
  }

  return String(Number(value.toPrecision(maxSignificantDigits)));
}
