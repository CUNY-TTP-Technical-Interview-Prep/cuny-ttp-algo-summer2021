// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
/*
leaf to root.
Bottom to top.
left to right.
3 
9  20
  15 7


This would result in the return of
[15 7 9 20 3] =>([15 7]) ([9 20] [3])


*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  //passing in entire Binary Tree!

  let result = []; // array of arrays

  if (root === null) {
    //if null then return empty []
    return result;
  }

  let queue = [root]; // holds the root val
  //in queue, what
  while (queue.length !== 0) {
    //keep track number of nodes within a queue
    let node_counter = queue.length;
    let row_result = [];

    while (node_counter > 0) {
      //builds up row_result list
      let current_node = queue.shift();
      if (current_node.left !== null) {
        //if it has a left child...
        queue.push(current_node.left);
      }
      if (current_node.right !== null) {
        //if it has a right child...
        queue.push(current_node.right);
      }
      row_result.push(current_node.value); //we just want to push the node's value
      node_counter--; //decrement row counter
    }
    result.unshift(row_result);
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);

/**
 * 3 
9  20
  15 7

 */

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
//root.left.left = new TreeNode(9);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(`Reverse level order traversal: ${traverse(root)}`);
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
