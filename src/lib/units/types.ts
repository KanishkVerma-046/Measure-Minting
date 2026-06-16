/** A single unit within a category, defined by its conversion to/from the category's base unit. */
export interface UnitDef {
  /** URL-safe slug, e.g. "meters". Used in pair-page routes and as the <select> value. */
  id: string;
  /** Display name, e.g. "Meters". */
  name: string;
  /** Short symbol, e.g. "m". */
  symbol: string;
  /** Convert a value FROM this unit TO the category's base unit. */
  toBase: (value: number) => number;
  /** Convert a value FROM the category's base unit TO this unit. */
  fromBase: (value: number) => number;
}

/** A curated from/to pair worth giving its own static SEO page. */
export interface UnitPair {
  from: string;
  to: string;
}

/** A reference-table row definition (curated "nice" input values, not a brute-force 1..1000 dump). */
export const REFERENCE_VALUES = [1, 5, 10, 25, 50, 100, 500, 1000] as const;

export interface CategoryDef {
  /** URL-safe slug, e.g. "length". Used as the first path segment. */
  id: string;
  /** Display label, e.g. "Length". */
  label: string;
  /** One-line description used in nav, cards, and meta descriptions. */
  description: string;
  /** All units available in this category, ordered by real-world popularity. */
  units: UnitDef[];
  /** Curated from/to pairs that get a dedicated static page. */
  popularPairs: UnitPair[];
}
