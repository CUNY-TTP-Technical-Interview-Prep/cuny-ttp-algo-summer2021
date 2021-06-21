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
   * Output: All root to leaf paths
   *  
   * Naive Approach
   * --------------- 
   * Variables: root, root. left, root.right, array to store the results 
   * 
   * 
   */
  

  
  const binaryTreePaths = (root) =>{
    let result = [];
    const travel = (node, path) =>{
          // Pre-Condition: check if node os empty then push path
          if(!node.left && !node.right) result.push(path.join('->')); 

          if(node.left) travel(node.left, [...path, node.left.value]); 
          if(node.right) travel(node.right, [...path, node.right.value]); 
      
    }
    travel(root, [root.value]);
      return result;
  }

  
   
  
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
  

    /**
   *  Optimal Approach
   * -----------------
   *  Variables: 
   * 
   * 
   */