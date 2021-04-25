export type CompareFunctionReturn = -1 | 0 | 1

export type CompareFunction<T extends unknown> = (
  a: T,
  b: T
) => CompareFunctionReturn

export const defaultCompareFunction = <T extends unknown>(
  a: T,
  b: T
): CompareFunctionReturn => {
  if (a === b) return 0
  if (a > b) return 1
  return -1
}
