// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.


/*

Iterate through tree using BFS
Sum all node a each level, once level completed divide by the # node at that lvl and push into result array
Return result array

*/




class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_level_averages = function(root) {


  // TODO: Write your code here

  if( !root )
    return []

  let queue = [root]
  let result = [];

  
  while( queue.length )
  {

    let length = queue.length;
    let sum = 0;

    for( let i = 0; i < length; i++)
    {
      let node = queue.shift();
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      sum += node.value

    }
    result.push( sum/length )
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
