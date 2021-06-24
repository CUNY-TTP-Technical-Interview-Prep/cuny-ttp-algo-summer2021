// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

// Example
// -----
// targetSum = 12
// Output = 3
// Explanation: Tree has three paths w/ sum 12: "7 -> 5" "1 -> 9 -> 2" & "9 -> 3"
//      1                 
//     / \
//    7   9
//  / |   | \
// 6  5   2  3

/*
Given a Binary tree
Goal: find the number of paths that equals the target sum


variable to check the numPaths <--- return this 

recursive function dfs that passes in node,sum
traversing through the binary tree
each value of the node subtract that to the targetsum
if that is equal to 0
numPaths ++

if there is node.left call the recursive function
if there is node.right call the recursive function

}

dfs(root, sum),
return numPaths

edge case{
  if root is null return 0
}


*/


class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const count_paths = function (root, S) {
  let numPaths = 0
  if (root === null) {
    return 0
  }

  function dfs(node, S) {
    S -= node.value
    if (S === 0) {
      numPaths++
    }

    if (node.left) {
      dfs(node.left, S)
    }

    if (node.right) {
      dfs(node.right, S)
    }

  }

  function test(node, S) {
    dfs(node, S)
    if (node.left) {
      test(node.left, S)
    }
    if (node.right) {
      test(node.right, S)
    }
    return;
  }

  test(root, S)
  return numPaths
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)


console.log(`Tree has paths: ${count_paths(root, null)}`);
console.log(`Tree has paths: ${count_paths(root, 19)}`);
console.log(`Tree has paths: ${count_paths(root, 5)}`);
console.log(`Tree has paths: ${count_paths(root, 100)}`);

//11
/*        12
        7   1
      4   10  5

      (7-4),(1-10)
*/
