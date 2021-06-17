// Problem Statement #

// Given a binary tree, find its maximum depth (or height).

/*
Maximum depth - We are going to the leaf node -> Use DFS

DFS is recursive (can also be implemented iteratively).

function recursive (node, count) {
  if (node === null) {
    return count;
  }
  count++;
  return Max(recursive(node.left, count), recursive(node.right, count));
}

-------------------------------------------------------------------------------

Alternative BFS Solution

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
  1. We don't need to return an array, as we just want to return the max depth, or an integer, so just initialize a level counter
  2. Initialize a length variable that will equal the length of the queue, and update it every iteration (level by level traversal)
  3. When we reach the end of our loop, we increment our level counter
  4. Once we exit the loop, we can return our level counter, as it will be the maximum depth of our tree
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/****************************************************************************
 * DFS Solution
 ****************************************************************************/

function find_maximum_depth(root) {
  return DFS(root, 0);
}

function DFS(node, count) {
  if (!node) {
    return count;
  }
  count++;
  return Math.max(DFS(node.left, count), DFS(node.right, count));
}

/****************************************************************************
 * BFS Solution
 ****************************************************************************/

function find_maximum_depth2(root) {
  //Write Code Here
  if (!root) {
    return 0;
  }

  let queue = [root];
  let level = 0;

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    level++;
  }

  return level;
}

/*
        (12)
        /  \
      (7)  (1)
     /     / \
   (9)   (10) (5)
         /
       (11)
*/

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth (DFS): ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth (DFS): ${find_maximum_depth(root)}`);

const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth (BFS): ${find_maximum_depth2(root2)}`);
root2.left.left = new TreeNode(9);
root2.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth (BFS): ${find_maximum_depth2(root2)}`);
