// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
/* 
  using BFS to traverse the tree, while keeping a sum value of each level
  initialize a queue with root
  keep track of queueLength, to move on to next levels
  shift out the queue and check if current.value has any left and right children
  if there are any, add them to the queue 
  then push the average of that level into result
  return result 

*/
const find_level_averages = function(root) {
	result = [];
	// TODO: Write your code here
	let queue = [ root ];
	if (!root) return 0;
	while (queue.length) {
		let sum = 0;
		let queueLength = queue.length;
		for (let i = 0; i < queueLength; i++) {
			let current = queue.shift();
			sum += current.value;
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		result.push(sum / queueLength);
	}
	return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
