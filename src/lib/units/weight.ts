import type { CategoryDef } from "./types";
import { buildAnchoredPairs } from "./pairs";

// Base unit: kilograms
const units: CategoryDef["units"] = [
  { id: "kilograms", name: "Kilograms", symbol: "kg", toBase: (v) => v, fromBase: (v) => v },
  { id: "grams", name: "Grams", symbol: "g", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "milligrams", name: "Milligrams", symbol: "mg", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "metric-tons", name: "Metric Tons", symbol: "t", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "pounds", name: "Pounds", symbol: "lb", toBase: (v) => v * 0.45359237, fromBase: (v) => v / 0.45359237 },
  {
    id: "ounces",
    name: "Ounces",
    symbol: "oz",
    toBase: (v) => v * 0.028349523125,
    fromBase: (v) => v / 0.028349523125,
  },
  { id: "stone", name: "Stone", symbol: "st", toBase: (v) => v * 6.35029318, fromBase: (v) => v / 6.35029318 },
  {
    id: "us-tons",
    name: "US Tons (short)",
    symbol: "ton",
    toBase: (v) => v * 907.18474,
    fromBase: (v) => v / 907.18474,
  },
  {
    id: "imperial-tons",
    name: "Imperial Tons (long)",
    symbol: "long ton",
    toBase: (v) => v * 1016.0469088,
    fromBase: (v) => v / 1016.0469088,
  },
];

export const weight: CategoryDef = {
  id: "weight-and-mass",
  label: "Weight & Mass",
  description: "Convert kilograms, pounds, ounces, stone, tons, and every other unit of weight or mass.",
  units,
  popularPairs: buildAnchoredPairs(
    units.map((u) => u.id),
    ["kilograms", "pounds"],
  ),
};
