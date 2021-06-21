// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum
// of all the node values of that path equals ‘S’.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 *
 * Input: tree
 * Output: Boolean value weather the totalSum of a path equals the targetSum
 *
 * Brute force Approach
 * ---------------
 * Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 *
 * dfs and preorder
 *
 */

/**
 *  Optimal Approach
 * -----------------
 *  Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 *
 *
 */

// closure version which is used for data encapulation and uses more memory 
// recursition proably makes more sense then iterative since were dealing with tree data structure
// in this case for dfs we wouldnt need to use a stack 
const has_path = (root, targetSum) => {
  // Pre-Condition: check if empty && if root.value = targetSum
  if (!root) return false;
  if (root.value === targetSum) return true;

  let truthChecker = false; // storing state
  const dfs = (node, sum = 0) => {
    sum += node.value;
    if (!node.left && !node.right && sum === targetSum) truthChecker = true; // base Case
    // Termination-Conditions: check left and right are path sum
    node.left && dfs(node.left, sum) // traverse left side ? 
    node.right && dfs(node.right, sum);
  };
  dfs(root);

  return truthChecker;
};

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);

console.log(`\n ------- Edge Case -------- `);
console.log(`Tree has path: ${has_path(root, 0)}`);
console.log(`Tree has path: ${has_path(root, root.value)}`);
