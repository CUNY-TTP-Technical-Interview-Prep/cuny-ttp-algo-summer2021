// Problem Statement #

// Given a binary tree, populate an array to represent its zigzag level order traversal.
// You should populate the values of all nodes of the first level from left to right,
// then right to left for the next level and keep alternating in the same manner for the following levels.

/*
Edge Cases:
  1. If no root, return []

Level order traversal -> Use BFS

function BFS (root) {
  q = [root]
  res = []

  while (q.length) {
    node = q.shift
    res.push(node.val)

    if (node.left) {
      q.push(node.left)
    }

    if (node.right) {
      q.push(node.right)
    }
  }

  return res
}

Modify:
  1. We want to return an multi-dimensional array, so we need to initialize another array var in our loop
  2. To go level by level, we should initialize a variable and set it equal to the length of the queue
  3. We want to alternate how we traverse through the tree (for one level, we go left to right, and the next level, we go right to left, and so on)
  4. We can implement some counter, and if it is even, we go left to right, and if it is odd, we go right to left
  5. We can alternate between the shift and unshift method to achieve this zigzag pattern
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Had trouble running this in VSCode, but it works on LeetCode
const traverse = function (root) {
  // TODO: Write your code here
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  let zigzag = 0;

  while (queue.length) {
    let levelArr = [];
    let length = queue.length;

    let count = 0;
    while (count < length) {
      let currentNode = queue.shift();

      if (zigzag % 2 === 0) {
        levelArr.push(currentNode.val);
      } else {
        levelArr.unshift(currentNode.val);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(levelArr);
    zigzag++;
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);

// Solution
// -----
// function traverse(root) {
//   result = [];
//   if (root === null) {
//     return result;
//   }

//   const queue = [];
//   queue.push(root);
//   leftToRight = true;
//   while (queue.length > 0) {
//     levelSize = queue.length;
//     currentLevel = [];
//     for (i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();

//       // add the node to the current level based on the traverse direction
//       if (leftToRight) {
//         currentLevel.push(currentNode.val);
//       } else {
//         currentLevel.unshift(currentNode.val);
//       }

//       // insert the children of current node in the queue
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//     }
//     result.push(currentLevel.toArray());
//     // reverse the traversal direction
//     leftToRight = !leftToRight;
//   }

//   return result;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
