// Problem Statement #

// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

//            (  1  )
//           /       \
//       (  2  )    (  3  )
//       /     \       \
// (  4  )  (  5  )   (  6  )

// Given Node: 3
// Level Order Successor: 4


//             (  12  )
//            /       \
//       (  7  )    (  1  )
//       /            /    \
//  (  9  )       (  10  )(  5  )

// Given Node: 9
// Level Order Successor: 10


/*
  Traverse tree using BFS
  If current node = target
  return the first item on the queue
*/

class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};


const find_successor = function(root, key) {
  // TODO: Write your code here

  let queue = [root]
  
  while( queue.length )
    {

      let length = queue.length

      for( let i = 0; i < length; i++)
      {
        let node = queue.shift()
        if(node.left) queue.push(node.left)
        if(node.right)queue.push(node.right)
        if( node.val === key) return queue.shift();
      }

    }

  return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
  console.log(result.val)
result = find_successor(root, 9)
if (result != null)
  console.log(result.val)

