// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

/*
Format: [[1], [2, 3], [4, 5, 6, 7], ...]
Edge Case: !root -> return []

BFS: Level-by-level traversal

function BFS (root) {
  res = []
  queue = [root]

  while (queue.length) {
    node = queue.shift
    res.push(node.val)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }

  return res;
}

BFS: [1, 2, 3, 4, 5, 6, ...]

Modify the pseudo code for BFS:
  1. Instead of top-down, we go bottom-up
  2. Keep track of the length of the levels (var = queue.length)

Logic (main modifications):
  1. Creating a temp array to store the values in each level
  2. Loop -> condition: until we reach the end of the level
  3. Push the values of the node in our array in each iteration
  4. A counter -> once it reaches the desired length (end of level), push our sub-array into our res array
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

  let queue = [root];
  let result = [];

  while (queue.length) {
    let length = queue.length;
    const nodeLevels = [];

    let count = 0;
    while (count < length) {
      const currentNode = queue.shift();
      nodeLevels.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.unshift(nodeLevels);
  }

  return result;
};

/*
Time: We hit every node once -> O(n)
Space: The queue, at most, will store the fattest level (if the bottom level is full, the queue will store half of the tree)
       So, the space complexity of my queue is n / 2, we simplify this to O(n)
       My temp array (nodeLevels) scales based on the length of the level, so O(n)
       My result array also scales based on the length of the level, so O(n)
       Combined, O(3n) which simplifies to O(n)
*/

/*
    (1)
    / \
  (2) (3)

  count = 0, length = 1
  currentNode = [1], queue = [], nodeLevels = [1]
  queue = [2, 3]
  count = 1
  nodeLevels = [[1]]

  count = 0, length = 2
  currentNode = [2], queue = [3], nodeLevels = [2]
  queue = [3]
  count = 1

  count = 1, length = 2
  currentNode = [3], queue = [], nodeLevels = [2, 3]
  queue = []
  count = 2

  nodeLevels = [[1], [2, 3]]
*/

/*
      (12)
      /  \
    (7)  (1)
    /    / \
  (9)  (10)(5)

  result: [[9, 10, 5], [7, 1], [12]]
*/

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);

// Solution
// -----
// const traverse = function(root) {
//   const queue = [root];
//   const result = [];
//   if (!root) return result;

//   while (queue.length) {
//     const currLevel = [];
//     const levelSize = q.length;
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift();

//       currLevel.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.unshift(currLevel);
//   }

//   return result;
// };

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
