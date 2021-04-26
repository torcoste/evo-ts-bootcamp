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
  private readonly compareFunction: CompareFunction<number> = defaultCompareFunction

  constructor(
    tree?: TreeNode<number>,
    compareFinction?: CompareFunction<number>
  ) {
    super(tree)
    if (compareFinction) this.compareFunction = compareFinction
  }

  public has(value: number): boolean {
    if (!this.root) return false
    if (value === this.root.value) return true
    if (value < this.root.value)
      return new BinarySearchTree(this.root.left).has(value)
    return new BinarySearchTree(this.root.right).has(value)
  }

  public addValue(value: number) {
    if (!this.root) {
      this.setTree(new TreeNode(value))
      return
    }
    this.addTo(value, this.root)
  }

  private addTo(value: number, node: TreeNode<number>) {
    if (this.compareFunction(value, node.value) < 0) {
      if (!node.left) {
        node.left = new TreeNode(value)
        return
      }
      this.addTo(value, node.left)
      return
    }
    if (!node.right) {
      node.right = new TreeNode(value)
      return
    }
    this.addTo(value, node.right)
  }

  public addValues(...values: number[]) {
    values.forEach((value) => {
      this.addValue(value)
    })
  }
}
