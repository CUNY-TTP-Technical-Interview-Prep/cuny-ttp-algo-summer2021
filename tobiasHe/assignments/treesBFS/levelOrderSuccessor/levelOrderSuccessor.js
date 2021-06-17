// Problem Statement #

// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

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

class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const find_successor = function(root, key) {
	// TODO: Write your code here
	// traverse tree using BFS.
	// if key===currentNode
	//  return the next node

	let queue = [ root ];
	while (queue.length) {
		let queueLength = queue.length;
		for (let i = 0; i < queueLength; i++) {
			let currentNode = queue.shift();
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
			if (currentNode.val === key) {
				return queue.shift();
			}
		}
	}
	return null;
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
