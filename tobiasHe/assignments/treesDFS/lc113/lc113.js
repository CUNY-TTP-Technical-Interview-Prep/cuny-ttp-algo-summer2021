// Problem Statement #

// Given a binary tree and a number ‘S’,
// find all paths from root-to-leaf such
// that the sum of all the node values of each path equals ‘S’.

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |   | \
// 4  5   2  7

class TreeNode {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

const find_paths = function(root, targetSum) {
	allPaths = [];
	// TODO: Write your code here
	//use DFS down all paths
	//while recursivl calling DFS we can keep track of a sum,
	//if the targetSum == sum and no more children we have reached the end of that path and we've found the path that adds up to targetSum.
	const DFS = (node, sum, arr) => {
		if (!node) {
			return [];
		}
		sum += node.val;
		if (sum === targetSum && !node.left && !node.right) {
			arr.push(node.val);
			allPaths.push(arr);
			arr = [];
		} else {
			arr.push(node.val);
		}
		if (!node.left && !node.right) {
			return;
		}
		if (node.left) {
			DFS(node.left, sum, arr.slice());
		}
		if (node.right) {
			DFS(node.right, sum, arr.slice());
		}
	};

	DFS(root, 0, []);
	return allPaths;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
targetSum = 23;
console.log(`Tree paths with sum: ${targetSum}: ${find_paths(root, targetSum)}`);
