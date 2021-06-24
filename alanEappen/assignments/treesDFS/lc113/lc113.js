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

/*
Given: a binary tree and targetSum 'S'
Goal: find all paths that equal targetSum

variables:
an array to store all the paths

initiate a recursive function that takes in current node,
the sum, and an array for path

let currsum equal the node.value + currsum
-here we add sum on each node

if condition stating if sum === targetSum
//push all the paths in allpaths

if there is no left or right return the function

if there is a left node call the recursive function again

if there is a right node call the recursive function again

call dfs( root, 0 , [])

edge cases:
if root is null return empty array

*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_paths = function (root, sum) {
  allPaths = [];

  if (root == null) {
    return [];
  }

  var dfs = function (node, currentSum, path) {
    currentSum += node.value
    if (currentSum === sum) {
      path.push(node.value)
      allPaths.push(path)
      path = []
    } else {
      path.push(node.value)
    }

    if (node.left) {
      dfs(node.left, currentSum, path.slice())
    }
    if (node.right) {
      dfs(node.right, currentSum, path.slice())
    }

    if (!node.left && !node.right) {
      return
    }
  }

  dfs(root, 0, [])
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
