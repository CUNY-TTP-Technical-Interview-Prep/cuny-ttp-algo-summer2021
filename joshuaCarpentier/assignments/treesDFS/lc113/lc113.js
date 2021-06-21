// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such
// that the sum of all the node values of each path equals ‘S’.

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |   | \
// 4  5   2  7




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
 * Output: Boolean value weather the totalSum of a path equals the targetSum
 *  
 * Naive Approach
 * --------------- 
 * Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 * 
 * 
 */
// Test Cases are conditions for inputs 
const find_paths = (root, sum) =>{
  const search = (tree, parents = [], parentsSum = 0) => {
    // Pre-Condition: check if exist
    if (!tree) return false;
    const currSum = parentsSum + tree.value;
    const currArr = [...parents, tree.value]; // what does the three dots do
      // Termination-Conditions: check left and right are path sum
    if (!tree.left && !tree.right && currSum === sum)
      result.push(currArr);
    else {
      if (tree.left) search(tree.left, currArr, currSum);
      if (tree.right) search(tree.right, currArr, currSum);
    }
  };
  const result = [];
  search(root);
  return result;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum} [${find_paths(root, sum)}]`)


console.log(`\n ------- Edge Case -------- `);
console.log(`Tree paths with sum: ${root.value} [${find_paths(root, root.value)}]`)



/**
 *  Optimal Approach
 * -----------------
 *  Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 * 
 * 
 */