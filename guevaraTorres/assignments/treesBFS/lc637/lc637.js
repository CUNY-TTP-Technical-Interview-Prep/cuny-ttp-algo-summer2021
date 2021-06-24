// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

/*
L1        12
L2    7       1
L3  1   9   10  5 

Initialize a queue with the root
Initialize an array with averages of each level
Store the length in a vaiable
If the queue has a length, then loop through the queue
If the node has a left or right, add to current sum
Creating the sum for each level, then making the average
Append the average to the averages array
return averages

variables: result, queue, i, levels, queueLength, left, right

edge cases: root is null, return empty array

*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_level_averages = function(root) {
  let result = [];
  // TODO: Write your code here

  let queue = [root];

  if(!root) return result;

  while(queue.length) {
    const queueLength = queue.length;
    let currSum = 0;

    for(let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
      currSum += current.value;
    }
    result.push(currSum/queueLength);
  
  }

  // let queue = [root];
  
  // if(!root) return result;

  // while(queue.length) {

  //   const queueLength = queue.length;
  //   let currSum = 0;

  //   for(let i = 0; i < queueLength; i++) {
  //     const current = queue.shift();
  //     if(current.left) queue.push(current.left);
  //     if(current.right) queue.push(current.right);
  //     currSum += current.value;
  //   }

  //   result.push(currSum/queueLength);

  // }

  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
