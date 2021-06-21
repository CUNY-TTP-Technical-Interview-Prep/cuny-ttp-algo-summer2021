// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//do bfs on the tree
//keep queue to keep track of nodes in tree
//while queue has nodes && have not found a leaf node
////add 1 to depth
////loop through each node at current level
////if any are leaf nodes, stop the while loop
////else, add their children to queue
//return depth
const find_minimum_depth = function (root) {
  // TODO: Write your code here
  if (root === null) return -1;
  let queue = [root];
  let depth = -1;
  let foundLeaf = false;

  while (queue.length > 0 && !foundLeaf) {
    let levelSize = queue.length;
    depth++;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (currentNode.left === null && currentNode.right === null) {
        foundLeaf = true;
        break;
      }
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return depth;
};
//      12
//    7    1
//  9    10   5
//     11
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
