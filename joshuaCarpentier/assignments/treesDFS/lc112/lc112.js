// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum 
// of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * 
 * Input: tree
 * Output: the maximum depth level
 * 
 * Variables: root, root. left, root.right, index, array to store the root 
 * 
 * EdgeCase different condition for different inputs
 * 
 * Brute force Approach
 * --------------- 
 * Pre-Condition: check if empty 
 * 
 * Conditions: there is only really a pre condition since were only looking for the shortest path to root
 * 
 * Termination-Conditions: check if left and right are null

 * 
 * Post-Conditions: 
 * 
 * 
 * 
 *  Optimal Approach
 * -----------------
 * Variables: 

 * Pre-Condition: 
 * 
 * Conditions: 
 * 
 * Termination-Conditions: 

 * 
 * Post-Conditions: 
 * 
 * 
 */ has_path = function(root, sum) {
  // TODO: Write your code here
  return false;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
