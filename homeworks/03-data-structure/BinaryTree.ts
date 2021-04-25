enum TraverseType {
  // Depth-First Search (DFS)
  inorder, // (Left, Root, Right)
  preorder, // (Root, Left, Right)
  postorder, // (Left, Right, Root)
  // Breadth-First Search (BFS)
  breadth,
}

interface TreeNode<T> {
  readonly value: T
  left: TreeNode<T>
  right: TreeNode<T>
}

interface BinaryTree<T> {
  constructor(tree: TreeNode<T>): void
  setTree(tree: TreeNode<T>): this
  traverse(traverseType: TraverseType): T[]
  getColumn(columnOrder: number): T[]
}
