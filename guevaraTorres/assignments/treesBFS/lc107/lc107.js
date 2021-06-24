// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

/*
using BFS to traverse the tree, while keeping the values of each level
initialize a queue with root
keep track of queueLength, to move on to next levels
shift out the queue and check if curr.value has any left and right children
if there are any, add them to the queue
then unshift the value of that level into levels (because we are doing traversal in revese order)
return levels
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const traverse = (root) => {
  let result = [];

  if(!root) return result;
  let queue = [root];

  while(queue.length) {
    let queueLength = queue.length;
    let newLevels = [];

    for(let i = 0; i < queueLength; i++) {
      let curr = queue.shift();

      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);

      newLevels.push(curr.value)
    }
    result.unshift(newLevels);
  }
  return result;
}

// const traverse = function(root) {
//   // TODO: Write your code here
//   let result = [];
  
//   if(!root) return result;
//   let queue = [root];

//   while(queue.length) {
//     let queueLength = queue.length;
//     let newLevels = [];

//     for(let i = 0; i < queueLength; i++){
//     let curr = queue.shift();

//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);

//     newLevels.push(curr.value)
//     }
//     result.unshift(newLevels);    
//   }   
//   return result;
// }

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)

// Solution
// -----
// const traverse = function(root) {
//   const queue = [root];
//   const result = [];
//   if (!root) return result;

//   while (queue.length) {
//     const currLevel = [];
//     const levelSize = q.length;
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift();

//       currLevel.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.unshift(currLevel);
//   }

//   return result;
// };

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
