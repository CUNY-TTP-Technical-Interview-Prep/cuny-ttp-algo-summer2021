// Problem#

// Given a binary tree, find its maximum depth
//(or height).

class TreeNode {
  constructor(val) {
    this.val = val;
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
 *
 * q(queue) = [12]=> [12 7 1] => [7 1 ]
 * => [7 1 10 5] => [1 10 5]
 *
 * qL=1
 * L=1 => 2
 * d=1 => 2 => 3
 *
 * if root does not exist / does not contain nodes
 * return 0
 *
 * Create a queue containing the root
 * Create depth_counter
 *
 * As long as there are nodes in queue
 * increment depth_counter
 *  set length of queue length
 *
 *  loop from 0 to length of queue
 *    we check if there is a left or right node.
 *    If tthere is we push the left/right node into queue
 *
 *  We splice/remove the number of nodes within current
 * list
 *
 * return depth counter
 *
 *
 *
 * LC
 */

function find_maximum_depth(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;

  //Write Code Here
  // return -1;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);

// function find_maximum_depth(root) {
//   if (!root) return 0;
//   const queue = [root];
//   let depth = 0;
//   while (queue.length !== 0) {
//     depth++;
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       if (queue[i].left) queue.push(queue[i].left);
//       if (queue[i].right) queue.push(queue[i].right);
//     }
//     queue.splice(0, len);
//   }
//   return depth;

//   //Write Code Here
//   // return -1;
// }
