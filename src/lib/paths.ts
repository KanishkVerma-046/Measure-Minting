export function categoryPath(categoryId: string): string {
  return `/${categoryId}/`;
}

export function pairPath(categoryId: string, fromUnitId: string, toUnitId: string): string {
  return `/${categoryId}/${fromUnitId}-to-${toUnitId}/`;
}
