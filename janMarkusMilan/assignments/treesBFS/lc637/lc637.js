// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

/*
Format: [1, 5 / 2, ...]

Constraints:
  - Positive and negative
  - Empty root: return []

Level by level: BFS

function BFS (root) {
  q = [root]
  res = []

  while (q.length) {
    node = q.shift();
    res.push(node.val);

    if (node.left) {
      q.push(node.left)
    }

    if (node.right) {
      q.push(node.right)
    }
  }

  return res;
}

Modify: Return the averages of the entire level

Loop until I reach the end:
  Keep track of the length of the level (queue)
  Implement a counter and a sum variable
  In a loop, increment the counter at the end and add the values of each node into the sum variable
  Once the counter hits the length breakpoint, get the average of the level (sum / length) and push into res array, and reinitialize length (length of the queue)

res = [1, (2 + 3) / 2, (4 + 5 + 6 + 7) / 4, ...]
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  // TODO: Write your code here
  if (!root) {
    return [];
  }

  let result = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let sum = 0;

    let count = 0;
    while (count < length) {
      const currentNode = queue.shift();
      sum += parseInt(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(sum / length);
  }

  return result;
};

/*
       (12)                   Level 1: 12
      /    \
    (7)    (1)                Level 2: 7 + 1 = 8 / 2 = 4
    / \    / \
  (9) (2)(10) (5)             Level 3: 9 + 2 + 10 + 5 = 11 + 15 = 26 / 4 = 6.5
*/

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);

var root2 = new TreeNode();
console.log(find_level_averages(root2));
