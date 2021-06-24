// Problem Statement #

// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * inputs: 
 * @param {*} root: the root of binary tree
 * 
 * output:
 * @returns result: an array that is use BFS to traverse all the nodes
 * 
 * step 1: set up a queue structure to store the current node and the left and right child of the current node
 * step 2: loop through all the level and check if there is left and right child
 * step 3: determine if the element is going left to right or right to left
 * 
 * variables:
 *  queue: that can store the current node. 
 *  
 */

const traverse = function(root) {
  let result = [];
  // TODO: Write your code here
  

  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`) // 12 1 7 9 10 5 17 20



// Solution
// -----
// function traverse(root) {
//   result = [];
//   if (root === null) {
//     return result;
//   }

//   const queue = [];
//   queue.push(root);
//   leftToRight = true;
//   while (queue.length > 0) {
//     levelSize = queue.length;
//     currentLevel = [];
//     for (i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();

//       // add the node to the current level based on the traverse direction
//       if (leftToRight) {
//         currentLevel.push(currentNode.val);
//       } else {
//         currentLevel.unshift(currentNode.val);
//       }

//       // insert the children of current node in the queue
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//     }
//     result.push(currentLevel.toArray());
//     // reverse the traversal direction
//     leftToRight = !leftToRight;
//   }

//   return result;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.

/**
 * input: root: root of the binary tree
 * 
 * output:
 *      return result: an array that have all nodes of the binary tree
 * 
 * step 1: start from the root and push into the queue and loop through all the nodes
 * step 2: if the queue lenght is not empty compare if the level should be left to right or right to left
 * step 3: if it's left to right push left child the push right child if it's right to left push right child first then push left
 * step 4: push the current array to the result
 * 
 * varible result: an attary with all binary tree nodes, queue that start from root, newLevel that contain the left child and right child
 *                count: count the level to determine if the order is left to right or right to left
 * 
 * use a while loop traverse all the nodes when queue is not empty
 *      declare a current node that shift from the queue
 *      
 *      use a for loop travese all the chiled node
 *            if the level is count%2
 *                  if the current has left chiled push the left to the newLevel
 *                  if the current has right child push the rith to the newLEvel
 *            else
 *                  if the current has right child push the right to newLevel
 *                  if the current has left child push the left to newLvl
 *      end loop
 *      push newLevel to reuslt
 *      increment count;
 *      end loop
 * 
 *      
 *          
 *       
 */

//  const traverse = function(root) {
//   let result = [];
//   // TODO: Write your code here
//   let queue = [];
//   queue.push(root);
//   let count = 0;

//   while(queue.length > 0){
//     let levelSize = queue.length;
//     let newLevel = [];

//     for(let i = 0; i < levelSize; i ++ ){ // 7 1
//       let currentNode = queue.shift();

//       if(count % 2){
//         newLevel.unshift(currentNode.value);
//       } else{
//         newLevel.push(currentNode.value);
//       }

//       if(currentNode.left !== null) queue.push(currentNode.left); // 9 10 5
//       if(currentNode.right !== null) queue.push(currentNode.right);

//     }

//     count ++;
//     result.push(newLevel);
//   }

//   return result;
// };