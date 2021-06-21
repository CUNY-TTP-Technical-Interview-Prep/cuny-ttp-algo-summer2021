// Problem Statement #

// Given a binary tree and a node, find the level order
// successor of the given node in the tree.

//The level order successor is the node that appears right after the given
//node in the level order traversal.

//            (  1  )
//           /       \
//       (  2  )    (  3  )
//       /     \       \
// (  4  )  (  5  )   (  6  )  [1, 2, 4, 5, 3, 6]
//[1 2 3 4 5 6]

// Given Node: 3
// Level Order Successor: 4

//             (  12  )
//            /       \
//       (  7  )    (  1  )
//       /            /    \
//  (  9  )       (  10  )(  5  )

// Given Node: 9
// Level Order Successor: 10

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  // TODO: Write your code here
  if (root == null) return null;

  // If root equals to key
  if (root == key) {
    // If left child exists it will be
    // the Postorder Successor
    if (root.left != null) return root.left;
    // Else if right child exists it will be
    // the Postorder Successor
    else if (root.right != null) return root.right;
    else return null; // No Successor
  }

  // Create an empty queue for level
  // order traversal
  //let q = new TreeNode();
  let q = [];
  // Enqueue Root
  q.push(root);

  while (!q.isEmpty()) {
    let nd = q.peek();
    q.remove();

    if (nd.left != null) {
      q.push(nd.left);
    }

    if (nd.right != null) {
      q.push(nd.right);
    }

    if (nd == key) break;
  }

  return q.peek();
  // return null;
};

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
