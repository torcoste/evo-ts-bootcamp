import { BinaryTree, BinaryTreeInterface, TreeNode } from "./BinaryTree"
import { CompareFunction, defaultCompareFunction } from "./CompareFunction"

interface BinarySearchTreeInterface extends BinaryTreeInterface<number> {
  has(value: number): boolean
  addValue(value: number): void
  addValues(...values: number[]): void
}

export class BinarySearchTree
  extends BinaryTree<number>
  implements BinarySearchTreeInterface {
  compareFunction: CompareFunction<number> = defaultCompareFunction

  constructor(
    tree?: TreeNode<number>,
    compareFinction?: CompareFunction<number>
  ) {
    super(tree)
    if (compareFinction) this.compareFunction = compareFinction
  }

  has(value: number): boolean {
    if (!this.head) return false
    if (value === this.head.value) return true
    if (value < this.head.value)
      return new BinarySearchTree(this.head.left).has(value)
    return new BinarySearchTree(this.head.right).has(value)
  }

  public addValue(value: number) {
    if (!this.head) {
      this.setTree(new TreeNode(value))
      return
    }
    this.addTo(value, this.head)
  }

  private addTo(value: number, tree: TreeNode<number>) {
    if (this.compareFunction(value, tree.value) < 0) {
      if (!tree.left) {
        tree.left = new TreeNode(value)
        return
      }
      this.addTo(value, tree.left)
      return
    }
    if (!tree.right) {
      tree.right = new TreeNode(value)
      return
    }
    this.addTo(value, tree.right)
  }

  public addValues(...values: number[]) {
    values.forEach((value) => {
      this.addValue(value)
    })
  }
}
