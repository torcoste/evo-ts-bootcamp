type CompareFunction<T> = (a: T, b: T) => number

type MergeSort<T> = (
  array: readonly T[],
  compareFunction: CompareFunction<T>
) => T[]
