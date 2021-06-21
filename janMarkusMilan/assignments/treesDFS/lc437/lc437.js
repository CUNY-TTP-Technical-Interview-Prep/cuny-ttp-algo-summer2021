// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’.
// Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

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
Edge Case:
  1. If !node -> return 0

Question Analysis:
  1. First, the output is just a count of all the paths that equal the given sum
  2. The starting point for a path can be any node, not just the root, but it must go top-down
  3. If no path exists that reaches the sum, we can assume we return 0

We could first use BFS to go top-down from left to right and reach each node per level.

Code for basic BFS:
  function BFS (root) {
    queue = [root]
    res = []

    while (queue.length) {
      node = queue.shift
      res.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return res
  }

Modifying the BFS code:
  1. We are not returning an array, so we can get rid of the res array
  2. We need a counter to count the number of paths that equal the sum, so just initialize a count variable
  3. At the end, we can return that count variable which should store our answer

The BFS code will ultimately just iterate through the tree and reach each node on every level.
The question still asks to find paths in the tree, so we need another step.
Because the starting node for a path can be any node, BFS will help us reach those nodes.
For those nodes, we can use DFS to iterate down a path in a tree, and if the sum of the nodes in the path equals the target, we increment our counter.

General structure for recursive implementation:
  function recursive (node, count) {
    if (!node) return 0;
    count++;
    return recursive(node, count);
  }

How to implement DFS recursively for this question:
  1. In our BFS loop, we should call the DFS function using the current node
  2. Our DFS function should also have a sum parameter in order to get the sum of the current path
  3. For each node we iterate to, we add the value of the node to our sum
  4. What we ultimately want to return from our DFS is an integer (the number of valid paths)
  5. We can initialize some variable, and if our sum is equal to the target sum, we increment it by 1
  6. Then we can just recursively call the DFS function for left and right nodes
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const count_paths = function (root, S) {
  // TODO: Write your code here
  if (!root) {
    return 0;
  }

  const queue = [root];
  let pathCount = 0;

  while (queue.length) {
    const currentNode = queue.shift();
    pathCount += DFS(currentNode, 0);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  function DFS(node, currentSum) {
    if (!node) {
      return 0;
    }
    currentSum += node.value;

    let isValidPath = 0;
    if (currentSum === S) {
      isValidPath = 1;
    }

    const leftPath = DFS(node.left, currentSum);
    const rightPath = DFS(node.right, currentSum);

    return isValidPath + leftPath + rightPath;
  }

  return pathCount;
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
console.log(`Tree has paths: ${count_paths(root, 11)}`);
console.log(`Tree has paths: ${count_paths(root, null)}`);
console.log(`Tree has paths: ${count_paths(root, 19)}`);
console.log(`Tree has paths: ${count_paths(root, 5)}`);
console.log(`Tree has paths: ${count_paths(root, 100)}`);
