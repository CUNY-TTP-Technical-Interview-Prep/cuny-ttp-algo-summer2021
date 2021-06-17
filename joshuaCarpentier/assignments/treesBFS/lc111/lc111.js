// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

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
 */
const find_minimum_depth = function(root) {
  if(root == null) return 0;
    let node = root;
    let queue = [node];
    let minDepth = 0;
    while(queue.length >0){
        let len = queue.length;
        minDepth++;
        for(let i=0; i<len; i++){
            let node = queue.shift();
            if(node.left==null && node.right == null) return minDepth;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return minDepth;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)



