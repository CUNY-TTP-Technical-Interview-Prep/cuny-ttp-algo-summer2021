// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.


/*
            12
         7      1
      9      10    5
       3    
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


var has_path = function(root, target) {
    
    
  if(!root)
   return false

  let arrStack = []
  let sumStack =[]
  let sum = 0;

  while( root || arrStack.length !== 0)
 {
    while( root  )
    {
      arrStack.push(root)
      sumStack.push(sum += root.value)
      root = root.left;
    }

    root = arrStack.pop()
  
    if( !root.left  &&  !root.right  && sum === target)
        return true
        
    root = root.right;
    sum = sumStack.pop()
}
 return false   
}
var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.left.left.right = new TreeNode(3)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
console.log(`Tree has path: ${has_path(root, 31)}`)

