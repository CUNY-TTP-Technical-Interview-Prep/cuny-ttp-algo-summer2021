// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

/**
 *  * overview:
 *  BFS
 *  use a queue and store the root
 *  create a toggle value set to true
 *  while queue is not empty
 *  create an array for the current lvl
 *  create a counter for the queue
 *
 *  loop queue lengths amount of times
 *  store the value of the current node as the queues shifted value
 *  insert the current node into the current level array (push if toggle is true, unshift if false)
 *  check if the current node has children
 *  if so, insert them into the queue (push)
 *  outside of the while loop
 *
 *  loop over the current lvl array, and add the values
 *  to a sum
 *  push sum / the length of the current lvl array into the results array
 *  return result array
 *
 * * edge:
 *  what if the root value is null
 *
 *  assumption:
 *    return null for this case
 *
 * Time: O(N)
 * Space: O(1)
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
  //create the results array
  result = [];

  //create the queue array
  let queue = [];
  //insert the root into the queue
  queue.push(root);

  //while the queue is not empty
  while (queue.length) {
    //save the queue size
    let lvlSize = queue.length;
    //create a temp arr for a the current levels
    let currLvl = [];
    //for loop from 0 to the size of the level
    for (let i = 0; i < lvlSize; i++) {
      //hold the exiting node
      let currNode = queue.shift();
      //push the node into an array of the level
      currLvl.push(currNode.value);

      //push the children into the queue
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    //hold a value for the sum of the curr level
    let avg = 0.0;
    //create the sum for the curr level
    for (let j = 0; j < currLvl.length; j++) {
      avg += currLvl[j];
    }
    //push the average value into the results array
    result.push(avg / currLvl.length);
  }
  return result;
};

const find_level_averages = (root) => {
  //create the results array
  result = [];
  //create the queue array
  let queue = [];
  //insert the root into the queue
  queue.push(root);

  //while the queue is not empty
  while (queue.length) {
    //save the queue size
    let lvlSize = queue.length;
    //create a temp arr for a the current levels
    let currLvl = [];
    //for loop from 0 to the size of the level
    for (let i = 0; i < lvlSize; i++) {
      //hold the exiting node
      let currNode = queue.shift();
      //push the node into an array of the level
      currLvl.push(currNode.value);

      //push the children into the queue
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    //hold a value for the sum of the curr level
    let avg = 0.0;
    //create the sum for the curr level
    for (let j = 0; j < currLvl.length; j++) {
      avg += currLvl[j];
    }
    //push the average value into the results array
    result.push(avg / currLvl.length);
  }
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

var root = new TreeNode(null);
console.log(`Level averages are: ${find_level_averages(root)}`);
