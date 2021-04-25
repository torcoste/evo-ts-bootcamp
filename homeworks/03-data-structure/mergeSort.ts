type CompareFunction<T> = (a: T, b: T) => number

type MergeSort<T> = (
  array: T[],
  compareFunction: CompareFunction<T>
) => T[]
