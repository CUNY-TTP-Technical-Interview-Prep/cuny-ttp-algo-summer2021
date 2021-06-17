// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
Precondition:
  root: the root of the binary tree, If it can be null then handle the edge where we return -1
Postcondition: returns an integer that represents the binary tree's height
  nextLevel: We store the future nodes that need to be checked on a level
  nextLevelLength: the current length of the array that is going to hold all the children
  treeHeight: responsible for computing the tree height
  currentNode: the current node that we are looking at
  General Idea:
    Add the node children to the nextLevelArray,
    Loop the nextLevelArray until it is empty,
    Grab a node and add it's children,
    While we look at each level we keep track of the current height of the tree with treeHeight variable,
    The nextLevelArray queue will be empty once all levels have been processed,
    With this being true, we return treeHeight
 */

function find_maximum_depth(root) {

  if (!root) return -1;

  const nextLevel = [root];
  let nextLevelLength = 0, treeHeight = 0, currentNode = null;

  while(nextLevel.length){ // Up until the tree height
    nextLevelLength = nextLevel.length; // 1
    for (let i = 0; i < nextLevelLength; i++){ // All the nodes in the current level while also adding nodes for the next level
      currentNode = nextLevel.shift(); 
      if (currentNode.left) nextLevel.push(currentNode.left);
      if (currentNode.right) nextLevel.push(currentNode.right);
    }
    treeHeight++;
  }
  // N: number of nodes
  // Runtime: O(n)
  // Space complexity: O(n)
  return treeHeight;
}

/*              treeHeight = 0, nextLevel = [root]
        12                   => nextLevel[7, 1]       treeHeight = 1
    7       1                 => nextLevel[9, 10, 5]  treeHeight = 2
  9       10   5              => nextLevel[11]        treeHeight = 3
        11                    => nextLevel[   ]       treeHeight = 4
                          return treeHeight = 4
 */

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`); // Actual: 3, Output: 3
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`); // Actual: 4, Output: 4