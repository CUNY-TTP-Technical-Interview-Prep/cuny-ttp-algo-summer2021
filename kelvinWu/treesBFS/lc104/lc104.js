// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//do bfs on tree
//when looping htrough each level, add 1
//add nodes of each nodes at current level to queue
//repeat until go through all levels of tree

function find_maximum_depth(root) {
  //Write Code Here
  if (root === null) return -1;

  let depth = -1;
  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    depth++;
  }
  return depth;
}
//      12
//   7    1
// 9    10   5
//     11
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
