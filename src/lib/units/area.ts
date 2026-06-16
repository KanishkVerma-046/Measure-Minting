import type { CategoryDef } from "./types";
import { buildAnchoredPairs } from "./pairs";

// Base unit: square meters
const units: CategoryDef["units"] = [
  { id: "square-meters", name: "Square Meters", symbol: "m²", toBase: (v) => v, fromBase: (v) => v },
  {
    id: "square-kilometers",
    name: "Square Kilometers",
    symbol: "km²",
    toBase: (v) => v * 1_000_000,
    fromBase: (v) => v / 1_000_000,
  },
  {
    id: "square-centimeters",
    name: "Square Centimeters",
    symbol: "cm²",
    toBase: (v) => v / 10_000,
    fromBase: (v) => v * 10_000,
  },
  { id: "hectares", name: "Hectares", symbol: "ha", toBase: (v) => v * 10_000, fromBase: (v) => v / 10_000 },
  {
    id: "square-feet",
    name: "Square Feet",
    symbol: "ft²",
    toBase: (v) => v * 0.09290304,
    fromBase: (v) => v / 0.09290304,
  },
  {
    id: "square-yards",
    name: "Square Yards",
    symbol: "yd²",
    toBase: (v) => v * 0.83612736,
    fromBase: (v) => v / 0.83612736,
  },
  {
    id: "square-miles",
    name: "Square Miles",
    symbol: "mi²",
    toBase: (v) => v * 2_589_988.110336,
    fromBase: (v) => v / 2_589_988.110336,
  },
  { id: "acres", name: "Acres", symbol: "ac", toBase: (v) => v * 4046.8564224, fromBase: (v) => v / 4046.8564224 },
];

export const area: CategoryDef = {
  id: "area",
  label: "Area",
  description: "Convert square meters, acres, hectares, square feet, and every other unit of area.",
  units,
  popularPairs: buildAnchoredPairs(
    units.map((u) => u.id),
    ["square-meters", "square-feet"],
  ),
};
