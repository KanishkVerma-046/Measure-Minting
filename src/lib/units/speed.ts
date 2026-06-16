import type { CategoryDef } from "./types";
import { buildAnchoredPairs } from "./pairs";

// Base unit: meters per second
const units: CategoryDef["units"] = [
  { id: "meters-per-second", name: "Meters per Second", symbol: "m/s", toBase: (v) => v, fromBase: (v) => v },
  {
    id: "kilometers-per-hour",
    name: "Kilometers per Hour",
    symbol: "km/h",
    toBase: (v) => v / 3.6,
    fromBase: (v) => v * 3.6,
  },
  {
    id: "miles-per-hour",
    name: "Miles per Hour",
    symbol: "mph",
    toBase: (v) => v * 0.44704,
    fromBase: (v) => v / 0.44704,
  },
  {
    id: "feet-per-second",
    name: "Feet per Second",
    symbol: "ft/s",
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
  { id: "knots", name: "Knots", symbol: "kn", toBase: (v) => v * 0.5144444444, fromBase: (v) => v / 0.5144444444 },
];

export const speed: CategoryDef = {
  id: "speed",
  label: "Speed",
  description: "Convert mph, km/h, knots, m/s, and every other unit of speed.",
  units,
  popularPairs: buildAnchoredPairs(
    units.map((u) => u.id),
    ["kilometers-per-hour", "miles-per-hour"],
  ),
};
