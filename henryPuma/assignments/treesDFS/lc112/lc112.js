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

Question: Are all the nodes going to have values < sum? Yes


Post condition: 
Return a boolean that tells us whether or not a sum from root->leaf exists and === sum

nodeStack: Keeps track of all the future nodes that we are going to look at,
sumStack: Keep the compliment sum of the current node and the targetSum <=> sum (parameter)

LEAF NODE: A node where node !== null, node.left and node.right === null


General Idea:
Keep a nodeStack list that keeps track of the nodes being processed,
Keep a sumStack list that keeps track of the overall sum of the nodes that have been processed,
Have 2 variables: currentNode and currentSum that temporarily hold the popped values from nodeStack and sumStack,
currentNode: Takes the next node for processing,
currentSum: Takes the overall sum of the nodes processed,

LINE: 52 Check if the current node is a leaf, if it is ==> check if the currentSum === 0 meaning we've subtracted node values that add up to sum ("Target sum")
If this case is met then return TRUE

Otherwise, check the currentNode's children (left && right),
If either exist, then add that node to the nodeStack and update the sumStack with currentSum where (currentSum - currentNode.child.value) gets pushed,


If for some reason we process all the paths in the binary tree and NO PATH adds up to sum, then by default we return FALSE

*/

const has_path = function(root, sum) {
  if(!root) return false;

  const nodeStack = [root];
  const sumStack = [sum - root.value];

  let currentNode = null, currentSum = 0;

  while(nodeStack.length){ // Iterate at most N times. In the worst case we exhaust all paths from root to leaves.
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
