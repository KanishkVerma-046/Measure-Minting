import type { CategoryDef } from "./types";
import { buildAnchoredPairs } from "./pairs";

// Base unit: liters
const units: CategoryDef["units"] = [
  { id: "liters", name: "Liters", symbol: "L", toBase: (v) => v, fromBase: (v) => v },
  { id: "milliliters", name: "Milliliters", symbol: "mL", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "cubic-meters", name: "Cubic Meters", symbol: "m³", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  {
    id: "gallons",
    name: "Gallons (US)",
    symbol: "gal",
    toBase: (v) => v * 3.785411784,
    fromBase: (v) => v / 3.785411784,
  },
  {
    id: "quarts",
    name: "Quarts (US)",
    symbol: "qt",
    toBase: (v) => v * 0.946352946,
    fromBase: (v) => v / 0.946352946,
  },
  {
    id: "pints",
    name: "Pints (US)",
    symbol: "pt",
    toBase: (v) => v * 0.473176473,
    fromBase: (v) => v / 0.473176473,
  },
  { id: "cups", name: "Cups (US)", symbol: "cup", toBase: (v) => v * 0.2365882365, fromBase: (v) => v / 0.2365882365 },
  {
    id: "fluid-ounces",
    name: "Fluid Ounces (US)",
    symbol: "fl oz",
    toBase: (v) => v * 0.0295735296,
    fromBase: (v) => v / 0.0295735296,
  },
  {
    id: "tablespoons",
    name: "Tablespoons",
    symbol: "tbsp",
    toBase: (v) => v * 0.0147867648,
    fromBase: (v) => v / 0.0147867648,
  },
  {
    id: "teaspoons",
    name: "Teaspoons",
    symbol: "tsp",
    toBase: (v) => v * 0.00492892159,
    fromBase: (v) => v / 0.00492892159,
  },
  {
    id: "cubic-feet",
    name: "Cubic Feet",
    symbol: "ft³",
    toBase: (v) => v * 28.316846592,
    fromBase: (v) => v / 28.316846592,
  },
  {
    id: "cubic-inches",
    name: "Cubic Inches",
    symbol: "in³",
    toBase: (v) => v * 0.016387064,
    fromBase: (v) => v / 0.016387064,
  },
];

export const volume: CategoryDef = {
  id: "volume",
  label: "Volume",
  description: "Convert liters, gallons, cups, milliliters, and every other unit of volume.",
  units,
  popularPairs: buildAnchoredPairs(
    units.map((u) => u.id),
    ["liters", "gallons"],
  ),
};
