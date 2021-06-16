// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

/**
 * Over view:
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
 *      node = queue.pop()
 *      currlvl.push(node.val)
 *
 *      if(left or right child) queue. unshift( child)
 *
 *  result.unshift(currlvl)
 *
 * return result
 *
 * time: O(N)
 * space: O(1)
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
  // create result array
  result = [];
  //create queue
  let queue = [];
  //insert root in queue
  queue.unshift(root);
  //while queue is not empty
  while (queue.length > 0) {
    //create temp level list
    let currLvl = [];
    //store current lvl size
    let lvlSize = queue.length;
    //for loop from 0 - lvl size
    for (let i = 0; i < lvlSize; i++) {
      //store curr node to queue.pop()
      let currNode = queue.pop();
      //push current node into curr lvl list
      currLvl.push(currNode.value);
      //insert children into queue
      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }
    //insert the curr lvl into the results
    result.unshift(currLvl);
  }

  return result;
};

const traverse = (root) => {
  // create result array
  result = [];
  //create queue
  let queue = [];
  //insert root in queue
  queue.unshift(root);
  //while queue is not empty
  while (queue.length > 0) {
    //create temp level list
    let currLvl = [];
    //store current lvl size
    let lvlSize = queue.length;
    //for loop from 0 - lvl size
    for (let i = 0; i < lvlSize; i++) {
      //store curr node to queue.pop()
      let currNode = queue.pop();
      //push current node into currlvl list
      currLvl.push(currNode.value);
      //insert children into queue
      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }
    //insert the currlvl into the results
    result.unshift(currLvl);
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
