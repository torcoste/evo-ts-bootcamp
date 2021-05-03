import { TreeNode } from "./BinaryTree"

export enum TraverseType {
  // Depth-First Search (DFS)
  Inorder = "inorder", // (Left, Root, Right)
  Preorder = "preorder", // (Root, Left, Right)
  Postorder = "postorder", // (Left, Right, Root)
  // Breadth-First Search (BFS)
  Breadth = "breadth",
}

export const inorderTraverse = <T>(treeNode?: TreeNode<T>): T[] => {
  if (!treeNode) return []
  const leftValues = inorderTraverse(treeNode.left)
  const rightValues = inorderTraverse(treeNode.right)
  return [...leftValues, treeNode.value, ...rightValues]
}

export const preorderTraverse = <T>(treeNode?: TreeNode<T>): T[] => {
  if (!treeNode) return []
  const leftValues = preorderTraverse(treeNode.left)
  const rightValues = preorderTraverse(treeNode.right)
  return [treeNode.value, ...leftValues, ...rightValues]
}

export const postorderTraverse = <T>(treeNode?: TreeNode<T>): T[] => {
  if (!treeNode) return []
  const leftValues = postorderTraverse(treeNode.left)
  const rightValues = postorderTraverse(treeNode.right)
  return [...leftValues, ...rightValues, treeNode.value]
}

export const breadthTraverse = <T>(root: TreeNode<T>): T[] => {
  let queue: TreeNode<T>[] = [root]
  let values: T[] = []

  while (queue.length) {
    const currentNode = queue.shift() as TreeNode<T>
    values = [...values, currentNode.value]
    if (currentNode.left) queue = [...queue, currentNode.left]
    if (currentNode.right) queue = [...queue, currentNode.right]
  }

  return values
}
