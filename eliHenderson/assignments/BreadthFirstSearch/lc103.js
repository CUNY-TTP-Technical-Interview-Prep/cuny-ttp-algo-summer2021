// Problem Statement #

// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

/**
 * Problem:
 *  Alternate between left and right per level
 *                  12
 *              7       1
 *          9        10    5
 *                  /  \
 *                 20  17
 *
 *  OUTPUT:[[12], [1, 7], [9, 10, 5], [17, 20]]
 *
 * overview:
 *  BFS
 *  use a queue and store the root
 * create a toggle value set to true
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
 *  push the current level array into the result
 *  return result array
 *
 *
 * Time: O(N)
 * Space: O(1)
 *
 *  * edge:
 *  what if the root is null
 *  what if the root value is null
 *
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  if (!root) return [];
  result = [];
  let queue = []; //init the queue
  queue.push(root); // store the root

  //create the toggle value
  let zigZag = true;

  while (queue.length > 0) {
    // loop while queue is not empty
    //create the current level array
    let currLvl = [];
    //store the queue length
    let lvlSize = queue.length;

    //loop queue lengths amount of times
    for (let i = 0; i < lvlSize; i++) {
      //collect the shifted queue value
      let currentNode = queue.shift();
      //insert the current node into the current level array (push if toggle is true, unshift if false)
      zigZag
        ? currLvl.push(currentNode.value)
        : currLvl.unshift(currentNode.value);

      //check if the current Node has children
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currLvl);
    zigZag = !zigZag;
  }

  return result;
};

const traverse = (root) => {
  result = [];
  let queue = []; //init the queue
  queue.push(root); // store the root

  //create the toggle value
  let zigZag = true;

  while (queue.length > 0) {
    // loop while queue is not empty
    //create the current level array
    let currLvl = [];
    //store the queue length
    let lvlSize = queue.length;

    //loop queue lengths amount of times
    for (let i = 0; i < lvlSize; i++) {
      //collect the shifted queue value
      let currentNode = queue.shift();
      //insert the current node into the current level array (push if toggle is true, unshift if false)
      zigZag
        ? currLvl.push(currentNode.value)
        : currLvl.unshift(currentNode.value);

      //check if the current Node has children
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currLvl);
    zigZag = !zigZag;
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);
