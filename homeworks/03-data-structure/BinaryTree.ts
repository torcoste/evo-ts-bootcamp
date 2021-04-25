enum TraverseType {
  // Depth-First Search (DFS)
  inorder, // (Left, Root, Right)
  preorder, // (Root, Left, Right)
  postorder, // (Left, Right, Root)
  // Breadth-First Search (BFS)
  breadth,
}

class TreeNode<T> {
  left?: TreeNode<T>
  right?: TreeNode<T>
  constructor(readonly value: T) {}
}

type CompareFunctionReturn = -1 | 0 | 1

type CompareFunction<T extends unknown> = (a: T, b: T) => CompareFunctionReturn

const defaultCompareFunction = <T extends unknown>(
  a: T,
  b: T
): CompareFunctionReturn => {
  if (a === b) return 0
  if (a > b) return 1
  return -1
}

interface BinaryTreeInterface<T> {
  setTree(tree: TreeNode<T>): this
  addValue(value: T, compareFunction?: <T>(a: T, b: T) => number): void
  traverse(traverseType: TraverseType): T[]
  getColumn(columnOrder: number): T[]
}

class BinaryTree<T> implements BinaryTreeInterface<T> {
  private head: TreeNode<T> | null = null

  constructor(tree?: TreeNode<T>) {
    if (tree) this.setTree(tree)
  }

  public getTree() {
    return this.head
  }

  public setTree(tree: TreeNode<T>) {
    this.head = tree
    return this
  }

  public addValue(value: T, compareFunction?: CompareFunction<T>) {
    if (!this.head) {
      this.setTree(new TreeNode(value))
      return
    }
    this.addTo(value, this.head, compareFunction)
  }

  private addTo(
    value: T,
    tree: TreeNode<T>,
    compareFunction: CompareFunction<T> = defaultCompareFunction
  ) {
    if (compareFunction(value, tree.value) < 0) {
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

  public addValues(values: T[], compareFunction?: CompareFunction<T>) {
    values.forEach((value) => {
      this.addValue(value, compareFunction)
    })
  }

  public traverse(traverseType: TraverseType) {
    // TBD
    return []
  }

  public getColumn(columnOrder: number) {
    // TBD
    return []
  }
}
