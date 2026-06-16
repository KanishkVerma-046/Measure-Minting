import { getCategory, getUnit } from "./index";

export class ConversionError extends Error {}

/** Convert `value` from one unit to another within a category, via the category's base unit. */
export function convert(categoryId: string, fromUnitId: string, toUnitId: string, value: number): number {
  const category = getCategory(categoryId);
  if (!category) throw new ConversionError(`Unknown category: ${categoryId}`);

  const fromUnit = getUnit(category, fromUnitId);
  if (!fromUnit) throw new ConversionError(`Unknown unit "${fromUnitId}" in category "${categoryId}"`);

  const toUnit = getUnit(category, toUnitId);
  if (!toUnit) throw new ConversionError(`Unknown unit "${toUnitId}" in category "${categoryId}"`);

  return toUnit.fromBase(fromUnit.toBase(value));
}

/**
 * Describe a conversion as `result = value * factor + offset`, derived
 * generically from two sample points rather than hand-written per category.
 * Works for both linear conversions (offset ~ 0, e.g. meters → feet) and
 * affine ones (e.g. Celsius → Fahrenheit).
 */
export function describeConversion(categoryId: string, fromUnitId: string, toUnitId: string) {
  const offset = convert(categoryId, fromUnitId, toUnitId, 0);
  const factor = convert(categoryId, fromUnitId, toUnitId, 1) - offset;
  const isAffine = Math.abs(offset) > 1e-9;
  return { factor, offset, isAffine };
}
