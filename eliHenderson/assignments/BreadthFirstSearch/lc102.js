// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

/**
 * Overview:
 *  we can create a queue using a list
 *  insert the root into the queue by unshifting
 *  while queue is not empty
 *  capture the lvl size
 *  create an array that holds the current levels nodes
 *  loop through the queue lvl amounts of times
 *  save the shifted queue node
 *   push the node in to the temp list
 *    check for children
 *    unshift the children if they exist
 *  unshift the current level into the results list
 *
 * return the results list
 *
 *  queue(root)
 *  while(queue not empty)
 *    queue size
 *    current lvl list
 *    for(0 - queue size)
 *      node = queue.shift()
 *      currentlvl.push(node.val)
 *
 *      if(left or right child) queue.push( child)
 *
 *  result.push(currentlvl)
 *
 * return result
 *
 * time: O(N)
 * space: O(1)
 *
 * edge:
 *  what if the root is null
 *  what if the root value is null
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
  // TODO: Write your code here
  //create a queue
  let queue = [];
  //push the root
  queue.push(root);

  //loop over the queue while it us populated
  while (queue.length > 0) {
    //size of a tree level
    let lvlSize = queue.length;
    //array of nodes of a certain level
    let currLvl = [];

    //loop only level size times
    for (let i = 0; i < lvlSize; i++) {
      //remove the current node from the queue from the front
      let currNode = queue.shift();
      //put it in the level array from the back

      currLvl.push(currNode.value);

      //push children into the queue
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    //push the array of current level values into the results array
    result.push(currLvl);
  }

  return result;
};

const traverse = (root) => {
  const result = [];

  let queue = [];

  queue.push(root);

  while (queue.length > 0) {
    let currLvl = [];
    let lvlSize = queue.length;

    for (let i = 0; i < lvlSize; i++) {
      let currNode = queue.shift();
      currLvl.push(currNode.value);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    result.push(currLvl);
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
