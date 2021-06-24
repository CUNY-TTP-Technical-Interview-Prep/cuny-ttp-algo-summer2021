// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |   | \
// 4  5   2  7

/*traverse using DFS
  if path = target then push stack into allPaths array



            12
          7    1
        4    10   5
                 5  3

          path 1 : 12 7 4
          path 2 : 12 1 10
          path 3 : 12 1 5 5     
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_paths = function(root, sum) {
    allPaths = [];
    // TODO: Write your code here
    let prevSum = 0;
    let stack = []
    let sumStack = []
    let onePath = []
    
    let node = root;

    while( node || stack.length )
    {
      while( node )
      {
          stack.push(node)
          onePath.push(node.value)
          sumStack.push(prevSum += node.value)
          node = node.left
      }

      
      node = stack.pop()

    
    
      if( isLeaf(node) && prevSum === sum)
      {
          allPaths.push(onePath)
          console.log("-----ONEPATH--------------")
          console.log(onePath)
     
          
      }
      

      if( onePath.length > 1 &&  !node.right)
         onePath.pop()
      
  
      
      node = node.right;
      prevSum = sumStack.pop()

    }

    return allPaths;
};

let isLeaf = (node) =>{
  if( !node.right && !node.left )
    return true
  else
    return false
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.right.left = new TreeNode(5)
root.right.right.right = new TreeNode(3)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
