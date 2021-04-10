export type ArrayItem = {
  value: number
  index: number
}

export const generateRandomArray = (length: number = 20): ArrayItem[] =>
  new Array(length)
    .fill(0)
    .map((_, index) => ({ value: Math.random(), index: index }))
