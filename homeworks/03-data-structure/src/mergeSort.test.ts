import { mergeSort } from "./mergeSort"

const fakeCustomCompareFunction = (a: number, b: number) => {
  if (a === b) return 0
  if (a > b) return 1
  return -1
}

describe("mergeSort()", () => {
  it("returns [] for empty array input", () => {
    expect(mergeSort([])).toStrictEqual([])
  })
  it("returns correctly sorted array with default compare function", () => {
    const inputArray = [9, 4, 5, 7]
    const expectedResult = [4, 5, 7, 9]
    expect(mergeSort(inputArray)).toStrictEqual(expectedResult)
  })
  it("returns correctly sorted array with custom compare function", () => {
    const inputArray = [9, 4, 5, 7]
    const expectedResult = [4, 5, 7, 9]
    expect(mergeSort(inputArray, fakeCustomCompareFunction)).toStrictEqual(
      expectedResult
    )
  })
  it("returns correctly sorted array with an odd number of elements", () => {
    const inputArray = [9, 4, 5, 7, 3]
    const expectedResult = [3, 4, 5, 7, 9]
    expect(mergeSort(inputArray)).toStrictEqual(expectedResult)
  })
})
