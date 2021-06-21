// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//do bfs on tree
//at each level keep a sum of all nodes in tree
//after find average by dividing sum by number of nodes in tree
//add average to array
const find_level_averages = function (root) {
  result = [];
  // TODO: Write your code here
  if (root === null) return result;
  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let sum = 0;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      sum += currentNode.value;
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    let avg = sum / levelSize;
    result.push(avg);
  }
  return result;
};

//      12
//   7       1
// 9   2   10  5
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
