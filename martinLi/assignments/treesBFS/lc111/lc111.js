// Problem Statement #

// Find the minimum depth of a binary tree.

//The minimum depth is the number of nodes along
// the shortest path from the root node to the nearest
//leaf node.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 *
 * Algorithm highlevel overview
 * **********Tree**************************
 *  *        [12]
 *      [7]       [1]
 *     -  -   [10]    [5]
 * ===================================
 *  d = 2
 *  q = [1], qL = 2, qLv= 2
 *  nd = [7]
 *
 *  So we create a depth counter, a queue which
 * holds the current treenode.
 *
 * We check if there is anything in the queue
 * If there is anything in the queue then we
 * set a variable for queuelength containing the
 * current length of the queue
 *
 * Within the constant checking(within the while loop)
 *
 * We should loop through all of the current elements
 * in the queue.
 *
 * The first element in the queue is popped out and
 * stored in a variable called node
 *
 *
 * node holds the current child node.
 * We check if the child node has a left/right
 * child node
 *
 * If there is a child node we push it in to the queue
 * for further investigation to see if there is
 * possibility there it isn't the leaf node
 *
 * but if there is no left/right child node. We have
 * arrived at the leaf and we can safely return
 * the depth
 *
 * *Every iteration within the while loop, depth is
 * incremented.
 *
 *
 * single node => depth counter = 1
 *
 */

const find_minimum_depth = function (root) {
  let depth_counter = 1,
    queue = [root];
  while (queue.length > 0) {
    let qLength = queue.length;
    for (let i = 0; i < qLength; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (!node.left && !node.right) return depth_counter;
    }
    depth_counter += 1;
  }
  return depth_counter;
  // TODO: Write your code here
  //return -1;
};
/**
 *            [12]
 *      [7]           [1]
 *                [10]    [5]
 *
 *  The node with the minimum depth is 7
 *  12 -> 7
 *  The level of depth is 2  All other paths
 * to the leaf node is 3
 * Ex. 12 -> 1 -> 10 (3)
 *     12 -> 1 -> 5 (3)
 */

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);

// const find_minimum_depth = function (root) {
//   if (!root) return 0;
//   let depth = 1;
//   let queue = [root];
//   if (!root.left && !root.right) return depth;

//   while (queue.length > 0) {
//     let queueLength = queue.length;

//     for (let i = 0; i < queueLength; i++) {
//       let node = queue.shift();

//       if (!node.left && !node.right) return depth;
//       else {
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//       }
//     }

//     depth++;
//   }

//   return depth;
