import { BinarySearchTree } from "./BinarySearchTree"
import { TreeNode } from "./BinaryTree"

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

const fakeCustomCompareFunction = (a: number, b: number) => {
  if (a === b) return 0
  if (a > b) return -1
  return 1
}

describe("BinarySearchTree", () => {
  describe("has()", () => {
    it("returns false for emprty tree", () => {
      const binaryTree = new BinarySearchTree()
      expect(binaryTree.has(0)).toBe(false)
    })
    it("returns true for one-node tree with same value", () => {
      const binaryTree = new BinarySearchTree(new TreeNode(42))
      expect(binaryTree.has(42)).toBe(true)
    })
    it("returns true for tree with same value in first left", () => {
      const binaryTree = new BinarySearchTree(binaryTreeFake)
      expect(binaryTree.has(2)).toBe(true)
    })
    it("returns true for tree with same value in first right", () => {
      const binaryTree = new BinarySearchTree(binaryTreeFake)
      expect(binaryTree.has(5)).toBe(true)
    })
    it("returns false for out-of-tree value", () => {
      const binaryTree = new BinarySearchTree(binaryTreeFake)
      expect(binaryTree.has(42)).toBe(false)
    })
  })

  describe("addValue()", () => {
    it("adds value as root-node for empty tree", () => {
      const binaryTree = new BinarySearchTree()
      binaryTree.addValue(42)
      expect(binaryTree.getTree()?.value).toEqual(42)
    })
    it("adds lower value as left-node for one-node tree", () => {
      const binaryTree = new BinarySearchTree(new TreeNode(5))
      binaryTree.addValue(4)
      expect(binaryTree.getTree()?.left?.value).toEqual(4)
    })
    it("adds greater value as right-node for one-node tree", () => {
      const binaryTree = new BinarySearchTree(new TreeNode(5))
      binaryTree.addValue(6)
      expect(binaryTree.getTree()?.right?.value).toEqual(6)
    })
    it("adds equal value as right-node for one-node tree", () => {
      const binaryTree = new BinarySearchTree(new TreeNode(5))
      binaryTree.addValue(5)
      expect(binaryTree.getTree()?.right?.value).toEqual(5)
    })
    it("adds value in correct place in deep tree", () => {
      const binaryTree = new BinarySearchTree(binaryTreeFake)

      binaryTree.addValue(0)
      expect(binaryTree.getTree()?.left?.left?.left?.value).toEqual(0)

      binaryTree.addValue(6)
      expect(binaryTree.getTree()?.right?.right?.value).toEqual(6)
    })
    it("adds value in place depends on custom compare function", () => {
      const binaryTree = new BinarySearchTree(
        undefined,
        fakeCustomCompareFunction
      )

      binaryTree.addValue(6)
      binaryTree.addValue(7)
      binaryTree.addValue(5)

      expect(binaryTree.getTree()?.left?.value).toEqual(7)
      expect(binaryTree.getTree()?.right?.value).toEqual(5)
    })
  })

  describe("addValues()", () => {
    it("adds values in correct places in empty tree", () => {
      const binaryTree = new BinarySearchTree()
      binaryTree.addValues(42, 41, 43)
      expect(binaryTree.getTree()?.value).toEqual(42)
      expect(binaryTree.getTree()?.left?.value).toEqual(41)
      expect(binaryTree.getTree()?.right?.value).toEqual(43)
    })
  })
})
