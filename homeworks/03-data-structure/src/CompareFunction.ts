export type CompareFunction<T extends unknown> = (
  a: T,
  b: T
) => number

export const defaultCompareFunction = <T extends unknown>(a: T, b: T): number => {
  if (a === b) return 0
  if (a > b) return 1
  return -1
}
