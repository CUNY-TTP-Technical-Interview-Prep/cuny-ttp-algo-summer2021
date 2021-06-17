// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

// Precondition:
// root: The head of the binary tree
// Postcondition:
// levels: an array containing all the levels of the input binary tree that is referenced by root

// global: An array (queue) that will process the current nodes children
// currentLevel: A queue that temporarily holds the current level of the tree
// levels: the returning containing all the levels of the binary treeChildren

// currentNode: The node that gets popped from the queue to be processed

// globalLength: stores the length of the global arrays

/*General Idea:
 Use a 'levels' array to store the final solution,
 Use a 'global' array to store nodes that are in the next level and need processing,
 Use 'globalLength' variable to keep track of the number of nodes that are being processed,
 Use a 'currentLevel' to temporarily keep track of all processed nodes in the current level, 
 While loop: We process all nodes in the global array, hence the reason we check for global.length
 For loop: Process current level nodes (push to temp currentLevel array) AND add next level nodes to be processed for the next iteration,
 After the for loop, we add all the processed nodes in the 'currentLevel' array to the 'levels' array,
 Rinse and repeat until there are no longer nodes in the 'global' array that needs processing
 */

function traverse(root) {
  // root is null
  if (!root) return [];
  
  const levels = []; // Solution array
  const global = [root]; // Contains nodes that needs processing

  let currentLevel = [];
  let globalLength = global.length;

  // While there are nodes that need to be processed
  while(global.length){

    globalLength = global.length; // Update the amount of nodes that need processing

    for (i = 0; i < globalLength; i++){
      currentNode = global.shift();
      if(currentNode.left) global.push(currentNode.left);
      if(currentNode.right) global.push(currentNode.right);
      currentLevel.push(currentNode.value); // Store processed node for current level
    }
    levels.push(currentLevel); // Push all processed nodes
    currentLevel = [];
  }
    
  // Runtime: O(n)
  // Space: O(n)
  return levels;
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
/*
                  levels = []
  Given Tree:
        12         => [12]   
    7       1      => [12, 7, 1]   
9     2   10  5    => [12, 7, 1, 9, 2, 10, 5]

Expected: [12, 7, 1, 9, 2, 10, 5] 
Output: [12, 7, 1, 9, 2, 10, 5] 

 */




// Solution
// -----

// const traverse = function(root) {
//   // If root is null return an empty array
//   if(!root) return []

//   const queue = [root] // initialize the queue with root
//   const levels = [] // declare output array

//   while(queue.length !== 0){
//      const queueLength = queue.length // Get the length prior to dequeueing
//      const currLevel = [] // Declare this level
//      // loop through to exhaust all options and only to include nodes at currLevel
//      for(let i = 0; i < queueLength; i++){
//          // Get next node
//          const current = queue.shift()

//          if(current.left){
//              queue.push(current.left)
//          }
//          if(current.right){
//              queue.push(current.right)
//          }
//          // After we add left and right for current, we add to currLevel
//          currLevel.push(current.val)
//      }
//      // Level has been finished. Push into output array
//      levels.push(currLevel)
//  }
//   return levels
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
