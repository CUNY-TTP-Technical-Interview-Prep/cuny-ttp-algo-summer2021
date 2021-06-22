// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};
/*
Precondition: 
root: The root of the binary tree, if null automatically return false
sum: The sum we want from the root to the leaf

Question: Are all the nodes going to have values < sum?


Post condition: 
Return a boolean that tells us whether or not a sum from root->leaf exists and === sum

nodeStack: Keeps track of all the future nodes that we are going to look at,
sumStack: Keep the compliment sum of the current node and the targetSum <=> sum (parameter)

LEAF: A node where node !== null, node.left and node.right === null

*/

const has_path = function(root, sum) {
  if(!root) return false;

  const nodeStack = [root];
  const sumStack = [sum - root.value];

  let currentNode = null, currentSum = 0;

  while(nodeStack.length){ // Iterate at most N times, we exhaust all paths from root to leaves
    currentNode = nodeStack.pop(); 
    currentSum = sumStack.pop(); 
    if (!currentNode.left && !currentNode.right && currentSum === 0) return true;

    if (currentNode.left){
      nodeStack.push(currentNode.left); 
      sumStack.push(currentSum - currentNode.left.value);
    }

    if (currentNode.right){
      nodeStack.push(currentNode.right); 
      sumStack.push(currentSum - currentNode.right.value);
    }
  }
  // Runtime: O(n) where n: number of nodes in the binary tree
  // Space: O(n) where n: number of nodes in the binary tree
  return false;
};
/*
    12 
  7    1
9     10  5

*/

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`) // True, Output: True
console.log(`Tree has path: ${has_path(root, 16)}`) // False, Output: False
