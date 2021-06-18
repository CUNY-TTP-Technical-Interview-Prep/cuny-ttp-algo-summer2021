// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |   | \
// 4  5   2  7

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
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

// Test Cases are conditions for inputs 
const find_paths = function(root, sum) {
  allPaths = [];
 // Pre-Condition: 
  
 // Conditions: 
  
 // Termination-Conditions: 

 // Post-Conditions: 

  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)


console.log(`\n ------- Edge Case -------- `);
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
