import { CompareFunction, defaultCompareFunction } from "./CompareFunction"

const mergeSplittedArrays = <T>(
  leftArray: T[],
  rightArray: T[],
  compareFunction: CompareFunction<T>
): T[] => {
  let result: T[] = []
  let i = 0
  let j = 0

  while (i < leftArray.length && j < rightArray.length) {
    result = [
      ...result,
      compareFunction(leftArray[i], rightArray[j]) < 0
        ? leftArray[i++]
        : rightArray[j++],
    ]
  }

  result = [...result, ...leftArray.slice(i), ...rightArray.slice(j)]
  return result
}

export const mergeSort = <T>(
  array: T[],
  compareFunction: CompareFunction<T> = defaultCompareFunction
): T[] => {
  if (!array.length) {
    return []
  }

  if (array.length === 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const leftArray = array.slice(0, middle)
  const rightArray = array.slice(middle)

  return mergeSplittedArrays(
    mergeSort(leftArray),
    mergeSort(rightArray),
    compareFunction
  )
}
