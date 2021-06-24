// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path
//from root-to-leaf such that the sum of all the node values of that
//path equals ‘S’.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * 
We want to create a function which
Checks to see the added up sums of the current path
We know we have completed a path once we have gone from the root node
to the leaf node

if the currentsum reaches the optimal value it returns true
otherwise it returns false


 */

const has_path = function (root, sum) {
  if (!root) {
    return false;
  } // 23 - 12=> 11 - 1=> 10
  if (root.left === null && root.right === null) return sum === root.value;
  else {
    return (
      has_path(root.left, sum - root.value) ||
      has_path(root.right, sum - root.value)
    );
  }

  // TODO: Write your code here

  // return false;
};

/**
 *      [12]
 *    [7]  [1]
 * [9][10][5];
 */
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);

// var dfs = function (curr, currentSum, targetSum) {
//   if (!curr) {
//     return false;
//   }

//   currentSum += curr.value;
//   console.log(currentSum);

//   if (curr.left === null && curr.right === null) {
//     return currentSum === targetSum;
//   }

//   return (
//     dfs(curr.left, currentSum, targetSum) ||
//     dfs(curr.right, currentSum, targetSum)
//   );
// };

// const has_path = function (root, sum) {
//   // TODO: Write your code here

//   return dfs(root, 0, sum);
//   // return false;
// };
