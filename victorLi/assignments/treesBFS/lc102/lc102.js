// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.


/*
               12
           7        1
        9         10    5

Queue array keep track of the current level node to be process
Level Array to store node by lvl respectively
QueueLength variable

Outerloop until queue.length >0
  {
     set queueLength variable
     reset LevelArray
          InnerLoop queueLength > 0
          {
            Shift queue and store the current node
            check current node left and right node if found push into queue
            push current node in levelArray
            
          }
        push levelArray into result array

        }

        return result array

*/





class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const traverse = function(root) {
    // TODO: Write your code here
  result = [];
  let queue = [root]
 

  while( queue.length)
  {
    let length = queue.length;
    let levelArray = []
     for( i = 0; i < length; i++ )
     {
       let node = queue.shift()
       if( node.left) queue.push(node.left)
       if( node.right) queue.push(node.right)
       levelArray.push(node.value)
     }
    result.push(levelArray)

  }

  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);


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
