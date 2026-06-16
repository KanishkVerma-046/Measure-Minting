import type { CategoryDef } from "./types";
import { buildAnchoredPairs } from "./pairs";

// Base unit: meters
const units: CategoryDef["units"] = [
  { id: "meters", name: "Meters", symbol: "m", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilometers", name: "Kilometers", symbol: "km", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "centimeters", name: "Centimeters", symbol: "cm", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  { id: "millimeters", name: "Millimeters", symbol: "mm", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "micrometers", name: "Micrometers", symbol: "µm", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "nanometers", name: "Nanometers", symbol: "nm", toBase: (v) => v / 1e9, fromBase: (v) => v * 1e9 },
  { id: "miles", name: "Miles", symbol: "mi", toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
  { id: "yards", name: "Yards", symbol: "yd", toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
  { id: "feet", name: "Feet", symbol: "ft", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  { id: "inches", name: "Inches", symbol: "in", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
  {
    id: "nautical-miles",
    name: "Nautical Miles",
    symbol: "nmi",
    toBase: (v) => v * 1852,
    fromBase: (v) => v / 1852,
  },
];

export const length: CategoryDef = {
  id: "length",
  label: "Length",
  description: "Convert meters, feet, miles, kilometers, inches, and every other unit of distance.",
  units,
  popularPairs: buildAnchoredPairs(
    units.map((u) => u.id),
    ["meters", "feet"],
  ),
};
