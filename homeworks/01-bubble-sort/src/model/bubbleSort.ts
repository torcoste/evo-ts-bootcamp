import { ArrayItem, createArrayDuplicate } from "./array"

export function* bubbleSort(inputArray: ArrayItem[]): Iterator<ArrayItem[]> {
  let array = createArrayDuplicate(inputArray)
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j].value > array[j + 1].value) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        yield array
      }
    }
  }
}
