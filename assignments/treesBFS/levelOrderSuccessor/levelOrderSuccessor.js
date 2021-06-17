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

class TreeNode {

  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
};

/*
  Precondition:
  root: The root of the binary tree, handle null edge case
  key: The value of the node that we want to find the level order successor, key e tree
  Postcondition: 
  returns the node that is the level order successor of the target node

  nextLevel: Array (queue) that stores the next level to be processed
  nextLevelLength: length the nextLevel array
  currentNode: the current node we are looking at
  
  General Idea:
  Have a global queue to look at each nodes within each level,
  Check if each node processed equals the current key,
  Then add it's corresponding children to keep the the global queue up to date,
  Finally we return whatever is next in the global queue because the queue has the next level order successor
 */
function find_successor(root, key) {

  if (!root) return null; 
  const nextLevel = [root];
  let nextLevelLength = 0;

  while(nextLevel.length){
    nextLevelLength = nextLevel.length;
    for (let i = 0; i < nextLevelLength; i++){
      currentNode = nextLevel.shift();
      
      if(currentNode.left) nextLevel.push(currentNode.left);
      if(currentNode.right) nextLevel.push(currentNode.right);

      if(currentNode.value === key) return nextLevel.shift();
    }
  }
  return null;
};

/*
    12
  7       1                  
9       10    5            
*/


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
// key: 7, out => 1

if (result != null) console.log(result.value)
result = find_successor(root, 9)
if (result != null) console.log(result.value)
 
