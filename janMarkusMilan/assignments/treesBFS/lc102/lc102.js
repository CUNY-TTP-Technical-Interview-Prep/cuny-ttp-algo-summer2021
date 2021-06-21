// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal.
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.

/*
Answer Format: [[1], [2, 3], [4, 5, 6]]
Edge Case: !root -> []

Implement BFS for our answer

function BFS (root) {
  res = [];
  q = [root]

  while (q.length) {
    node = q.shift();
    res.push(node.val);

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right)
    }
  }

  return res;
}

[1, 2, 3, 4, 5, 6]

[1, 2, 3]
node = [1]
res = [1]

    (1)
    / \
  (2) (3)
  / \
(4) (5)

res = [1]
q = [1, 2, 3]

Initialize a new array in our loop
Once we reach the end of a level, push sub-array into our res array

Keep track of the length of the queue
Push into a sub-array
Push once the queue reaches a certain breakpoint
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  // TODO: Write your code here
  if (!root) {
    return [];
  }

  let levels = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let treeLevels = [];

    let count = 0;
    while (count < length) {
      let currentNode = queue.shift();
      treeLevels.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    levels.push(treeLevels);
  }

  return levels;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);

var root2 = new TreeNode();
console.log(traverse(root2));

/*
      (12)
      /  \
    (7)  (1)
   /     / \
 (9)   (10)(5)
*/

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

/*
const levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    // We need to figure out if we are at the start or end of the level
    let length = queue.length;
    let count = 0;
    const currentLevelValues = [];

    // We need to process the nodes in each level inside another while loop
    while (count < length) {
      const currentNode = queue.shift(); // Get first value in queue
      currentLevelValues.push(currentNode.value); // Push value into subarray
      if (currentNode.left) {
        // Add to the queue if the current node has a left child
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        // Add to the queue if the current node has a right child
        queue.push(currentNode.right);
      }
      count++;
    }

    // Now we are at the end of a level, where we need to push the current level values into our results
    result.push(currentLevelValues);
  }

  return result;
};
*/
