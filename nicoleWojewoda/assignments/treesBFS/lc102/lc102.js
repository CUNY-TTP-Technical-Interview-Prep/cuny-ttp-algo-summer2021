// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

/*
input: the root node of the binary tree
output: an array containing subarrays with the values at each level

steps:
  if root is null, return empty array
  create an empty queue, add the root node to the queue
  loop through the queue using it's length
    store current queue length
    create new array for current level
    loop through the queue at the current level
      get current node
      if left node, add to queue
      if right node, add to queue
      add current node's value to the 
    add current level array to the result array
  return result
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  if (!root) return [];

  levels = [];
  let queue = [root];

  while (queue.length > 0) {
    let queue_len = queue.length;
    let curr_level = [];

    for (let i = 0; i < queue_len; i++) {
      let curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      curr_level.push(curr.value);
    }

    levels.push(curr_level);
  }

  return levels;
};

//         12
//     7          1
//   9         10    5

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);

// Solution
// -----

// const traverse = function(root) {
//   // If root is null return an empty array
//   if(!root) return []

//   const queue = [root] // initialize the queue with root
//   const levels = [] // declare output array

//   while(queue.length !== 0){
//      const queueLength = queue.length // Get the length prior to dequeueing
//      const currLevel = [] // Declare this level
//      // loop through to exhaust all options and only to include nodes at currLevel
//      for(let i = 0; i < queueLength; i++){
//          // Get next node
//          const current = queue.shift()

//          if(current.left){
//              queue.push(current.left)
//          }
//          if(current.right){
//              queue.push(current.right)
//          }
//          // After we add left and right for current, we add to currLevel
//          currLevel.push(current.val)
//      }
//      // Level has been finished. Push into output array
//      levels.push(currLevel)
//  }
//   return levels
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
