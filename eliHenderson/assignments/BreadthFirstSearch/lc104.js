// Problem#

// Given a binary tree, find its maximum depth (or height).

/**
 * Problem: If the tree has 4 levels, return 4
 *
 * Edge:
 *  if the root is null, return 0 or null
 *
 * Overview:
 *  Approach it like a normal BFS tree and use queue
 *  Set the queue
 *  insert the root TreeNode
 *  store a max count coutner
 *  while the queue is not empty
 *  store the level in a temp array
 *  keep track of the level size
 *  for loop 0 - lvl size while still in the while loop
 *  add the queue.shift value to the temp array
 *  check for children
 *  when we exit the for loop we increment the max height counter
 *  when loop is finished
 *  return the max height
 *
 *
 *  sudo:
 *      queue [root]
 *      maxheight
 *      while( queue is not empty)
 *          currLvl = []
 *          lvlSize = queue.len
 *      for(0 - lvlSize)
 *          currNode = queue.shift
 *          currLvl = [currNode]
 *
 *          if(currNode left or right children) queue.push(child)
 *      maxheight ++
 *
 *  return maxheight
 *
 * time= O(N)
 * space = O(N)
 *
 *  *  * edge:
 *  what if the root value is null
 *  var root = new TreeNode(null);
 *
 *  assumption:
 *    return null for this case
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_maximum_depth(root) {
  if (!root) return null;
  // create the queue
  let queue = [];
  queue.push(root);

  //store the max height
  let maxHeight = 0;

  //looop while queue is not empty
  while (queue.length) {
    //store the currentLevel
    let currentLvl = [];
    //store the currentLevel size
    let levelSize = queue.length;

    //loop from 0 - lvlSize
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      //put currentNode into the temp array

      currentLvl.push(currentNode.val);

      //check for children
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    //increment the max Height
    maxHeight++;
  }
  return maxHeight;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);

/**
 *          12
 *        7    1
 *      9    10  5    max height 3
 *          11          max height 4
 */
