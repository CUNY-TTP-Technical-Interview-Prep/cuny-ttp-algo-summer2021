// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
/**
 *          12
 *        7    1
 *       9   10 5
 *          11
 *
 * Overview:
 *  Follow the BFS pattern
 *  set a new queue
 *  insert the root into the queue
 *  set a minDepth counter = 0
 *  while the queue is not empty
 *  loop through the queue
 *      store the queue size as level size
 *      for loop from 0 - level size
 *      store the current node
 *      check if the current level has a leaf, if so return min depth counter
 *      check for children
 *      if there are children, insert them into the queue
 *      leave the for loop
 *   increment the minDepth counter
 *
 * return max depth counter
 *
 *
 *  sudo:
 *      let queue = [root]
 *      let minDepth = 0
 *      while(queue.len)
 *          lvlSize = queue.len
 *          for( 0 - lvlSize)
 *          currNode = queue.shift
 *          if(!currNode.left && !currNode.right) return minDepth
 *          if(currNode.left) queue.push(currNode.left)
 *          if(currNode.right) queue.push(currNode.right)
 *
 *      minDepth++
 *
 *
 * edge: if the root is null
 *          return 0
 *     root value is null
 *          return 1
 *          because a node of value null is still valid
 *
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_minimum_depth = function (root) {
  if (root === null) return 0;
  //create the queue
  let queue = [];
  //insert the root
  queue.push(root);
  //create a minDepth counter
  let minDepth = 0;
  //loop while queue is not empty
  while (queue.length) {
    //increment
    minDepth++;
    let lvlSize = queue.length;
    //loop through the level
    for (let i = 0; i < lvlSize; i++) {
      //hold currentNode
      let currentNode = queue.shift();

      //check if we are at leaf
      //if so, return minDepth
      if (!currentNode.left && !currentNode.right) return minDepth;

      //check for children
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
};

const find_minimum_depth = (root) => {
  if (root === null) return 0;
  //create the queue
  let queue = [];
  //insert the root
  queue.push(root);
  //create a minDeptCounter;
  let minDepth = 0;
  //loop while queue is not empty
  while (queue.length) {
    //increment
    minDepth++;
    //we must increment before going back into the loop
    //this way, we don't return before counting the current level
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      //hold current Node
      let currentNode = queue.shift();

      //check if we are at leaf
      //if the current node is a leaf
      //return minDepth counter
      if (!currentNode.left && !currentNode.right) return minDepth;

      //check for children
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);

root = new TreeNode(null);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
