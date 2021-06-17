// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.



class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * Input: binary tree with 3 or 4 levels
 * Output: average of the sum each level
 * 
 * Properties: nodes, left and right
 * 
 * Pre-Condition: if tree node is empty or null
 * 
 * Conditions: account for number of nodes increased
 * 
 * 
 *
 */

const find_level_averages = function(root) {
  let result = [];
  if (!root ) return 0; 

  let queue = [root];
  while (queue.length){

    let sum = 0;
    let currentSize = queue.length;
    for (let i = 0; i < currentSize; i++){
      let currentNode = queue.shift();
      // console.log(` this is queue shift ${currentNode.value}`)
      sum += currentNode.value;
      // console.log(` this is Sum ${sum}`)

      if (currentNode.left) queue.push(currentNode.left);
      // console.log(` this is current node left ${currentNode.left.value}`);

      if (currentNode.right) queue.push(currentNode.right);
      // console.log(` this is current node right ${currentNode.right.value}`);

    }
    // console.log(` this is results ${result}`);

    result.push(sum/currentSize);




  }


  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
// find_level_averages(root);
