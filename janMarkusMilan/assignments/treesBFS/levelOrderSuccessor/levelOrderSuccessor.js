// Problem Statement #

// Given a binary tree and a node, find the level order successor of the given node in the tree.
// The level order successor is the node that appears right after the given node in the level order traversal.

//            (  1  )
//           /       \
//       (  2  )    (  3  )
//       /     \       \
// (  4  )  (  5  )   (  6  )

// Given Node: 3
// Level Order Successor: 4

//             (  12  )
//            /       \
//       (  7  )    (  1  )
//       /            /    \
//  (  9  )       (  10  )(  5  )

// Given Node: 9
// Level Order Successor: 10

/*
Level -> BFS

Edge Cases: 
  1. If no successor, return null
  2. If there is no root, return null

function BFS (root) {
  queue = [root]
  res = []

  while (queue.length) {
    node = queue.shift
    res.push(node.val)

    if (left) {
      queue.push(left)
    }

    if (right) {
      queue.push(right)
    }
  }

  return res
}

[1, 2, 3, 4, 5, 6]

Modify:
  1. Find my target value
  2. Return the next value in the queue
  3. Define length to implement level by level traversal
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  // TODO: Write your code here
  if (!root) {
    return null;
  }

  let queue = [root];

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      if (currentNode.val === key) {
        let nextNode = queue.shift();
        return nextNode;
      }
    }
  }

  return null;
};

/*
        (12)
        /  \
      (7)  (1)
      /   /   \
    (9) (10)  (5)
*/

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
result = find_successor(root, 12);
if (result != null) console.log(result.val);
result = find_successor(root, 9);
if (result != null) console.log(result.val);
result = find_successor(root, 7);
if (result != null) console.log(result.val);
result = find_successor(root, 5);
if (result === null) console.log(null);
