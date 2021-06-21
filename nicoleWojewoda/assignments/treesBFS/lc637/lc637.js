// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

/*
input: the root node of a binary tree
output: an array that holds the average value at each level

steps:
  if root is null, return empty array

  create an empty queue, add root node to queue
  create var to store the current level's sum
  create var for the average val

  loop while the queue isn't empty
    store current queue length
    reset current sum
    loop through current level using the queue's length
      get the current node, add it's value to the current level's sum
      if the current.left, add it to the queue
      if the current.right, add it to the queue
    
    calculate the average by dividing the current level's sum by the queue length
    push the average into the results array
  return the result
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  if (!root) return [];

  result = [];
  let queue = [root];

  let curr_sum = 0;
  let avg = 0;

  while (queue.length > 0) {
    let queue_len = queue.length;
    curr_sum = 0;

    for (let i = 0; i < queue_len; i++) {
      let curr = queue.shift();
      curr_sum += curr.value;

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }

    avg = curr_sum / queue_len;
    result.push(avg);
  }

  return result;
};

//       12         12 /1 = 12
//   7       1      7+1 /2 = 4
// 9   2   10    5  9+2+10+5 /2 = 6.5

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`); // 12, 4, 6.5
