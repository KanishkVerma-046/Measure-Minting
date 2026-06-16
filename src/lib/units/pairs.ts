import type { UnitPair } from "./types";

/**
 * Build a curated popular-pairs list from one or more "anchor" units (the most
 * commonly searched units in a category, e.g. meters & feet for length).
 *
 * Every non-anchor unit gets paired with every anchor in both directions, so
 * every unit in the category appears at least once as a source and once as a
 * target — without generating the full N² combinatorial explosion of every
 * unit against every other low-traffic unit.
 */
export function buildAnchoredPairs(unitIds: string[], anchorIds: string[]): UnitPair[] {
  for (const anchor of anchorIds) {
    if (!unitIds.includes(anchor)) {
      throw new Error(`buildAnchoredPairs: anchor "${anchor}" is not a known unit id (typo?)`);
    }
  }

  const seen = new Set<string>();
  const pairs: UnitPair[] = [];

  const add = (from: string, to: string) => {
    if (from === to) return;
    const key = `${from}->${to}`;
    if (seen.has(key)) return;
    seen.add(key);
    pairs.push({ from, to });
  };

  for (const anchor of anchorIds) {
    for (const unitId of unitIds) {
      if (unitId === anchor) continue;
      add(anchor, unitId);
      add(unitId, anchor);
    }
  }

  return pairs;
}
