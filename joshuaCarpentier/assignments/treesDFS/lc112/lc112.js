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
 * 
 */


/**
 *  Optimal Approach
 * -----------------
 *  Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 * 
 * 
 */

var has_path = function (root, sum) {
  return dfs(root, 0, sum);
};

var dfs = function (curr, currentSum, targetSum) {
   // Pre-Condition: check if empty && if root. value = targetSum
  
 // Conditions: 
  
 // Termination-Conditions: check if left and right are null

 // Post-Conditions: 
  if (!curr) {
    return false;
  }

  currentSum += curr.value;

  if (curr.left === null && curr.right === null) {
    return currentSum === targetSum;
  }

  return (
    dfs(curr.left, currentSum, targetSum) ||
    dfs(curr.right, currentSum, targetSum)
  );
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);

console.log(`\n ------- Edge Case -------- `);
console.log(`Tree has path: ${has_path(root, 16)}`);
