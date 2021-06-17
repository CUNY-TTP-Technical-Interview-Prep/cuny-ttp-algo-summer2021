// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

/*
Minimum depth - The node is near the root -> Use BFS

Edge Case:
  1. No root -> return 0

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
  1. We don't need to return an array, we just need the count the levels (initialize a counter)
  2. We should define the length of the queue in order to implement level by level traversal 
  3. Have another loop that loops until we reach the value of the length of the queue
  4. Return our counter once we have a leaf (no left or right node), else we increment our level counter
  5. Return our counter if we reached the very end
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_minimum_depth = function (root) {
  // TODO: Write your code here
  if (!root) {
    return 0;
  }

  let queue = [root];
  let level = 1;

  while (queue.length) {
    let length = queue.length;
    let count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      if (!currentNode.left && !currentNode.right) {
        return level;
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    level++;
  }

  return level;
};

/*
        (12)
        /  \
      (7)  (1)
      /    / \
    (9)  (10)(5)
         /
       (11) 
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
