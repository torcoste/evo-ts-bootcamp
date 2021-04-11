import { ARRAY_ITEMS_QTY } from "../constants"

export type ArrayItem = {
  value: number
  index: number
}

export const generateRandomArray = (length: number = ARRAY_ITEMS_QTY): ArrayItem[] =>
  new Array(length)
    .fill(0)
    .map((_, index) => ({ value: Math.random(), index: index }))

export const createArrayDuplicate = <T>(array: T[]): T[] =>
  JSON.parse(JSON.stringify(array))
