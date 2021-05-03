import { BinaryTree, TreeNode } from "./BinaryTree"
import { TraverseType } from "./Traverse"

const binaryTreeFake = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
    },
    right: {
      value: 3,
    },
  },
  right: {
    value: 5,
  },
}

describe("BinaryTree", () => {
  it("creates empty BinaryTree", () => {
    const binaryTree = new BinaryTree()
    expect(binaryTree.getTree()).toBe(null)
  })

  it("creates BinaryTree with initial TreeNode", () => {
    const initialTreeNode = new TreeNode(42)
    const binaryTree = new BinaryTree(initialTreeNode)
    expect(binaryTree.getTree()).toBe(initialTreeNode)
  })

  describe("traverse()", () => {
    it("return correct result for 'preorder' traverse type", () => {
      const traverseType = TraverseType.Preorder
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [4, 2, 1, 3, 5]
      expect(binaryTree.traverse(traverseType)).toStrictEqual(expectedResult)
    })
    it("return correct result for 'postorder' traverse type", () => {
      const traverseType = TraverseType.Postorder
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [1, 3, 2, 5, 4]
      expect(binaryTree.traverse(traverseType)).toStrictEqual(expectedResult)
    })
    it("return correct result for 'inorder' traverse type", () => {
      const traverseType = TraverseType.Inorder
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [1, 2, 3, 4, 5]
      expect(binaryTree.traverse(traverseType)).toStrictEqual(expectedResult)
    })
    it("return correct result for 'breadth' traverse type", () => {
      const traverseType = TraverseType.Breadth
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [4, 2, 5, 1, 3]
      expect(binaryTree.traverse(traverseType)).toStrictEqual(expectedResult)
    })

    it("return [] for empty tree", () => {
      const binaryTree = new BinaryTree()
      const expectedResult = [] as const
      expect(binaryTree.traverse(TraverseType.Preorder)).toStrictEqual(
        expectedResult
      )
      expect(binaryTree.traverse(TraverseType.Postorder)).toStrictEqual(
        expectedResult
      )
      expect(binaryTree.traverse(TraverseType.Inorder)).toStrictEqual(
        expectedResult
      )
      expect(binaryTree.traverse(TraverseType.Breadth)).toStrictEqual(
        expectedResult
      )
    })
  })

  describe("getColumn()", () => {
    it("return correct result for column = 0", () => {
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [4, 3]
      expect(binaryTree.getColumn(0)).toStrictEqual(expectedResult)
    })

    it("return correct result for column = -1", () => {
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [2]
      expect(binaryTree.getColumn(-1)).toStrictEqual(expectedResult)
    })

    it("return correct result for column = 1", () => {
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [5]
      expect(binaryTree.getColumn(1)).toStrictEqual(expectedResult)
    })

    it("return correct result for column = -2", () => {
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [1]
      expect(binaryTree.getColumn(-2)).toStrictEqual(expectedResult)
    })

    it("return correct result for column = 2", () => {
      const binaryTree = new BinaryTree(binaryTreeFake)
      const expectedResult = [] as const
      expect(binaryTree.getColumn(2)).toStrictEqual(expectedResult)
    })

    it("return [] for emprty tree", () => {
      const binaryTree = new BinaryTree()
      const expectedResult = [] as const
      expect(binaryTree.getColumn(0)).toStrictEqual(expectedResult)
    })
  })
})
