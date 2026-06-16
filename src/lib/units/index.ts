import type { CategoryDef } from "./types";
import { length } from "./length";
import { weight } from "./weight";
import { temperature } from "./temperature";
import { volume } from "./volume";
import { area } from "./area";
import { speed } from "./speed";

export * from "./types";
export { buildAnchoredPairs } from "./pairs";
export * from "./convert";
export * from "./format";

/**
 * The full category registry. Add a category here (plus its data module) to
 * make it appear in nav, the homepage grid, hub/pair page generation, and the
 * sitemap — no other plumbing changes required.
 */
export const CATEGORIES: CategoryDef[] = [length, weight, temperature, volume, area, speed];

export function getCategory(categoryId: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.id === categoryId);
}

export function getUnit(category: CategoryDef, unitId: string) {
  return category.units.find((u) => u.id === unitId);
}
