import {
  breadthTraverse,
  inorderTraverse,
  postorderTraverse,
  preorderTraverse,
  TraverseType,
} from "./Traverse"

export class TreeNode<T> {
  left?: TreeNode<T>
  right?: TreeNode<T>
  constructor(readonly value: T) {}
}

export interface BinaryTreeInterface<T> {
  setTree(tree: TreeNode<T>): this
  traverse(traverseType: TraverseType): T[]
  getColumn(columnOrder: number): T[]
}

export class BinaryTree<T> implements BinaryTreeInterface<T> {
  protected head: TreeNode<T> | null = null

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

  public traverse(traverseType: TraverseType) {
    if (!this.head) return []

    switch (traverseType) {
      case TraverseType.inorder:
        return inorderTraverse(this.head)
      case TraverseType.preorder:
        return preorderTraverse(this.head)
      case TraverseType.postorder:
        return postorderTraverse(this.head)
      case TraverseType.breadth:
        return breadthTraverse(this.head)
    }
  }

  public getColumn(columnOrder: number) {
    let queue = [{ node: this.head, column: 0 }]
    let values: T[] = []

    while (queue.length) {
      const { node, column } = queue.shift()!
      if (node && column === columnOrder) values = [...values, node.value]
      if (node?.left) queue = [...queue, { node: node.left, column: column - 1 }]
      if (node?.right) queue = [...queue, { node: node.right, column: column + 1 }]
    }

    return values
  }
}
