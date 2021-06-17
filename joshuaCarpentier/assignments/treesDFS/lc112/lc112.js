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
 * Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 * 
 * EdgeCase different condition for different inputs
 * 
 * Brute force Approach
 * --------------- 
 * Pre-Condition: check if empty && if root. value = targetSum
 * 
 * Conditions: 
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
 */

const has_path = (root, targetSum) => {
  if (root === null) {
    return false
  }
  
  let nodeStack = [ root ];
  let sumStack = [ targetSum - root.val ];
  
  while (nodeStack.length) {
      let currNode = nodeStack.pop();
      let currSum = sumStack.pop();
      
      if ((!currNode.left && !currNode.right) && currSum === 0) {
          return true;
      };
      
      if (currNode.left) {
          nodeStack.push(currNode.left);
          sumStack.push(currSum - currNode.left.val)
      };
      
      if (currNode.right) {
          nodeStack.push(currNode.right);
          sumStack.push(currSum - currNode.right.val)
      };
  };
  
  return false;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
