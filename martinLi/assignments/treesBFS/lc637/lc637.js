// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  //leetcodesolnbfs
  //get back to this
  let result = [],
    q = [root]; // using a queue
  while (q.length) {
    // while there is stuff in the queue
    let qlen = q.length,
      row = 0;
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift(); //removes element
      row += curr.value;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    result.push(row / qlen);
  }
  // TODO: Write your code here
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
