// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

//Given: BinaryTree with root node
//Goal: return an array that has seperate sub arrays from left to right 

//first declare an array as queue that contains the root node 
//variable 
//while(queue.length) initiate while loop if the length exists

//Declaring a level to push
//let currLevel =[]
//Loop through the level to inlcude all the nodes at the current level
//for(let i = 0; i<queue.length; i++)
// currentNode is equal to next node

//if condition (currentNode.left)
//queue.push(currentNode.left)

//if condition (currentNode.right)
//queue.push(currentNode.right)

//after adding left and right we push the current lvl

// once that level is finished
//push currentlevel to level
//return level
//Edge cases:
//if the root node is null
//return []


const traverse = function (root) {
    let levels = [];
    let queue = []


    if (!root) {
        return []
    }
    queue.push(root)
    while (queue.length) {
        let currLevel = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let currentNode = queue.shift();

            if (currentNode.left)
                queue.push(currentNode.left)

            if (currentNode.right)
                queue.push(currentNode.right)

            currLevel.push(currentNode.value)
        }
        levels.push(currLevel)
    }
    return levels;

};



var root = new TreeNode(12);                                      //[12]
root.left = new TreeNode(7);                                    // [7] [1]
root.right = new TreeNode(1);                                  //[9] [10] [5]
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`); //Output [[12],[7,1],[9,10,5]]


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
