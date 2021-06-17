// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
/* 
         12      1   
       7    1 
      9    10  5      
        11

*/

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const find_minimum_depth = function(root) {
	// TODO: Write your code here
	/* 
    need a counter for levels
    traverse using BFS
    start counter at 1 
    after every level (outside of for loop) we increment counter
  */
	let depthCounter = 1;
	let queue = [ root ];
	if (!root) return 0;
	while (queue.length) {
		let queueLength = queue.length;
		for (let i = 0; i < queueLength; i++) {
			let current = queue.shift();
			if (!current.left && !current.right) {
				return depthCounter;
			} else {
				if (current.left) queue.push(current.left);
				if (current.right) queue.push(current.right);
			}
		}
		depthCounter++;
	}

	return depthCounter;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
