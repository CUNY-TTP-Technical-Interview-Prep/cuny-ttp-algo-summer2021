// Problem Statement #

// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.


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
  
  const binaryTreePaths = (root) =>{



  }


     // Pre-Condition: check if empty && if root. value = targetSum
    
   // Conditions: 
    
   // Termination-Conditions: check if left and right are null
  
   // Post-Conditions: 
   
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Root to eaf paths: ${binaryTreePaths(root)}`);
  console.log(`Root to eaf paths: ${binaryTreePaths(root)}`);
  
  console.log(`\n ------- Edge Case -------- `);
  console.log(`Root to eaf paths: ${binaryTreePaths(root)}`);
  