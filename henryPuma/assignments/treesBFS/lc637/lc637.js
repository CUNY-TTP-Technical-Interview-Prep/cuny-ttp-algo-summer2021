// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

// Precondition:
// root: head of the binary tree

// Postcondition:
// Returns a result array that has the average of all levels

/*
  General Idea: Similar to lc102, we
  - Use the same results array (queue) to process future tree levels,
  - Use a variable to keep track of the length of the array,
  - Use a variable to keep track of the current node being processed,

  The main difference here is that we don't use any additional array for processing each level, 
  Instead, we use a levelSum variable to keep track of the overall of the of the tree level
  After we finish interating the for loop (lines 40-45), (current level processed and next level set for next iteration)
  The overall average of the tree level is computed by dividing the
  levelSum/processCount <=> total sum of level / total number of nodes  for each level
*/

const find_level_averages = function(root) {

  if(!root) return [];

  const results = [], processLevel = [root];
  let processCount = processLevel.length, currentNode = null, levelSum = 0;

  while(processLevel.length){

    processCount = processLevel.length;
    for(i=0; i < processCount; i++){
      currentNode = processLevel.shift();
      if (currentNode.left) processLevel.push(currentNode.left);
      if (currentNode.right) processLevel.push(currentNode.right);
      levelSum += currentNode.value;
    }
    results.push(levelSum/processCount);
    levelSum = 0;

  }
  return results;
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);

/*
  Given Tree:
      12           => avg: 12
    7       1      => avg: (7 + 1)/ 2 =   4
9     2   10  5    => avg: (9+2+10+5)/4 = 6.5

Expected: [12, 4, 6.5]
Output: [12, 4, 6.5]

 */
