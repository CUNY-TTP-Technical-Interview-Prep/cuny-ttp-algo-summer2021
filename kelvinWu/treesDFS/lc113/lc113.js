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

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// currentPathArr = [1]    currentSum = 1
// currentPathArr = [1,7]  currentSum = 8
// currentPathArr = [1,7,4] currentSum = 12

//traverse through tree
//have function with following parameters:
//root, targetSum, currentPathArr, currentSum
//if root === null return
//if root not null,
////currentSum += root.value
////currentPathArr.add(root.value)
////if(root is a leaf)
////check if currentSum of path is equal to targetSum.
//////if it is, add path to allPaths
////if it is not a leaf
//////dfs(root.left, targetSum, currentPathArr, currentSum)
//////dfs(root.right, targetSum, currentPathArr, currentSum)
////currentPathArr remove the last visited node
////currentSum -= root.value
const find_paths = function (root, sum) {
  allPaths = [];
  // TODO: Write your code here
  let currentPathArr = [];
  let currentSum = 0;

  function dfs(root, currentPathArr, currentSum) {
    if (root === null) return;

    currentSum += root.value;
    currentPathArr.push(root.value);

    if (root.left === null && root.right === null && currentSum === sum) {
      allPaths.push(currentPathArr.slice());
    } else {
      dfs(root.left, currentPathArr, currentSum);
      dfs(root.right, currentPathArr, currentSum);
    }

    currentPathArr.pop();
  }

  dfs(root, currentPathArr, currentSum);

  return allPaths;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`);

//       12
//   7       1
// 4      10   5
