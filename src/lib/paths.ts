import type { CategoryDef, UnitPair } from "./units/types";
import { getUnit } from "./units";

export function categoryPath(categoryId: string): string {
  return `/${categoryId}/`;
}

export function pairPath(categoryId: string, fromUnitId: string, toUnitId: string): string {
  return `/${categoryId}/${fromUnitId}-to-${toUnitId}/`;
}

/** Single source of truth for turning a curated pair into a `{label, path}` link item. */
export function pairToLinkItem(category: CategoryDef, pair: UnitPair): { label: string; path: string } {
  const fromUnit = getUnit(category, pair.from)!;
  const toUnit = getUnit(category, pair.to)!;
  return {
    label: `${fromUnit.name} to ${toUnit.name}`,
    path: pairPath(category.id, pair.from, pair.to),
  };
}
