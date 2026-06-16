import type { CategoryDef } from "./types";
import { buildAnchoredPairs } from "./pairs";

// Base unit: Celsius. Temperature conversions are affine, not linear scale factors,
// so each unit defines its own toBase/fromBase formula rather than a single multiplier.
const units: CategoryDef["units"] = [
  { id: "celsius", name: "Celsius", symbol: "°C", toBase: (v) => v, fromBase: (v) => v },
  {
    id: "fahrenheit",
    name: "Fahrenheit",
    symbol: "°F",
    toBase: (v) => ((v - 32) * 5) / 9,
    fromBase: (v) => (v * 9) / 5 + 32,
  },
  {
    id: "kelvin",
    name: "Kelvin",
    symbol: "K",
    toBase: (v) => v - 273.15,
    fromBase: (v) => v + 273.15,
  },
];

export const temperature: CategoryDef = {
  id: "temperature",
  label: "Temperature",
  description: "Convert Celsius, Fahrenheit, and Kelvin instantly.",
  units,
  popularPairs: buildAnchoredPairs(
    units.map((u) => u.id),
    ["celsius", "fahrenheit"],
  ),
};
