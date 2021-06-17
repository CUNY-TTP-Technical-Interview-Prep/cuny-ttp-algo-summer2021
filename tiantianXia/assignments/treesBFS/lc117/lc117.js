// Problem Statement #

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

/**
 * inputs: 
 * @param {*} root the root of the binary tree;
 * 
 * step 1: loop through all the nodes in the binary tree and find current levle size of the tree level
 * step 2: loop through all the nodes in the current level and if previous node is not null connect current node to the previous.next
 * step 3: push left and right child to the queue if it's last node of the current levle connect current.next to null
 * 
 * variable queue: store all the current node, previousNode: should store the previous node in the each level
 * 
 * loop through all the node in the queue if queue is not empty
 *  setup the levleSize of the current level
 *  setup previous to null
 *    loop through all the node in the current level
 *       set the node to the current node
 *        find if the previous node is not null connect previous.next to the current
 *        if the current node is the last node of the current level connect current.next to null
 *         push left and right child to queue
 * 
 * edge cases: root is null => return root;
 */

const connect_level_order_siblings = function(root) {
  // TODO: Write your code here
  if(root === null) return root;

  let queue = [root];

  while(queue.length > 0){
    let levelSize = queue.length;
    let previousNode = null;

    for(let i = 0; i < levelSize; i ++){
      let currentNode = queue.shift();

      if(previousNode !== null) previousNode.next = currentNode;

      if(currentNode.left !== null) queue.push(currentNode.left);
      if(currentNode.right !== null) queue.push(currentNode.right);

      previousNode = currentNode;
    }
  }

  return root;
};

/**
 *       12
 *     7    1
 *   9    10 5
 */
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root); // 

root.print_level_order()


