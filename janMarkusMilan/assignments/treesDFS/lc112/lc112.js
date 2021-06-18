// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

/*
Edge Case:
  1. If !node -> return false

Root to leaf: Use DFS

General idea of recursive implementation:
  function recursive (node, count) {
    if (!node) return 0;
    count++;
    return recursive(node, count);
  }

What to take note of:
  1. Since the question is checking for a sum, then we need to pass that as an argument in our recursive function (including the node)
  2. For each node we reach, we add the value contained inside to our sum
  3. If our sum equals the target sum at any point, then just return true
  4. If we reach the end of a branch, we check if our sum equals the target sum
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const has_path = function (root, sum) {
  // TODO: Write your code here
  function DFS(node, currentSum) {
    if (!node) {
      return false;
    }
    currentSum += node.value;
    if (!node.left && !node.right) {
      return currentSum === sum;
    }
    if (DFS(node.left, currentSum) || DFS(node.right, currentSum)) {
      return true;
    }
    return false;
  }

  return DFS(root, 0);
};

/*
        (12)
        /  \
      (7)  (1)
      /    / \
    (9)  (10)(5)
*/

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
console.log(`Tree has path: ${has_path(root, 12)}`);
console.log(`Tree has path: ${has_path(root, 0)}`);
console.log(`Tree has path: ${has_path(root, null)}`);
console.log(`Tree has path: ${has_path(root, 28)}`);
