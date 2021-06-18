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
Edge Cases:
  1. If !node -> return []

Root to leaf: Use DFS

General look of recursive implementation:
  function recursive (node, count) {
    if (!node) return 0;
    count++;
    return recursive(node, count);
  }

Things to take note:
  1. The problem is asking for a sum, so that should be a parameter in our recursive function (as well as the node)
  2. The output is an array of arrays, so an array should also be a parameter in our recursive function
  3. For each node we reach, we add the value of the node to our sum
  4. When we reach the end of a branch, we check if our sum is equal to the target sum 
  5. We only want to push our array to our final output if we reached the end of the branch (no left or right node) and the sum equals the target
  6. Outside that, we just recursively call the function for left and right nodes
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_paths = function (root, sum) {
  // TODO: Write your code here
  allPaths = [];

  function DFS(node, currentSum, path) {
    if (!node) {
      return [];
    }
    currentSum += node.value;

    if (currentSum === sum && !node.left && !node.right) {
      path.push(node.value);
      allPaths.push(path);
      path = [];
    } else {
      path.push(node.value);
    }

    if (node.left) {
      DFS(node.left, currentSum, path.slice());
    }

    if (node.right) {
      DFS(node.right, currentSum, path.slice());
    }
  }

  DFS(root, 0, []);
  return allPaths;
};

/*
        (12)
        /  \
      (7)  (1)
      /    / \
    (4)  (10)(5)
*/

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
var res = find_paths(root, sum);
console.log(`Tree paths with sum = ${sum}:`);
console.log(res);

sum = null;
res = find_paths(root, sum);
console.log(`Tree paths with sum = ${sum}:`);
console.log(res);

sum = 18;
res = find_paths(root, sum);
console.log(`Tree paths with sum = ${sum}:`);
console.log(res);
