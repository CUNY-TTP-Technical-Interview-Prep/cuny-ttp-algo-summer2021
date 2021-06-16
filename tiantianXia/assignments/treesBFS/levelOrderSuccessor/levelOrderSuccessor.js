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
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

/**
 * inputs: 
 * @param {*} root: the root node of the binary tree
 * @param {*} key: an integer thant represent a node value 
 * 
 * output
 * @returns result: node value after the key node
 * 
 * step 1: use bfs to travse all the nodes
 * step 2: loop through current level and compare to find the key
 * step 3: if found the key then should next node and store in to the result
 * 
 * variables:
 *        queue: to store the current node starting from root, result: to store value of the levle order succssor
 *        levelsize: when traverse each level use it for traverse all the nodes
 *        findKey: initiate as false
 * 
 * push the root node to the queue
 * use a while loop to travel down all the levels when the queue lengthe is greater than 0
 *    get the level size so that we can traverse all the nodes in the levle
 *    use a for loop to traverse all the nodes
 *        get the current from the queue
 *        if findKey is true put the value to the result then break
 *        compare if the current node is the key set the findKey true
 *        push the left and right child to the queue
 *    end loop
 * end loop
 * return the result
 * 
 * edge case: root is null => null
 */
const find_successor = function(root, key) {
  // TODO: Write your code here
  if(root === null) return null;

  let result = null;
  let findKey = false;
  let queue = [root];
  
  while(queue.length > 0){
    let levelSize = queue.length;
    
    for(let i = 0; i < levelSize; i ++){
      let currentNode = queue.shift();

      if(findKey){
        result = currentNode;
        return result;
      }else{
        if(currentNode.val === key) findKey = true;
      }
      
      if(currentNode.left !== null) queue.push(currentNode.left);
      if(currentNode.right !== null) queue.push(currentNode.right);

    }

  }
  return result;
};

/**
 *    12
 *   7   1
 *  9   10  5   
 */
var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12) // 7
if (result != null)
  console.log(result.val)
result = find_successor(root, 9) // 10
if (result != null)
  console.log(result.val)

