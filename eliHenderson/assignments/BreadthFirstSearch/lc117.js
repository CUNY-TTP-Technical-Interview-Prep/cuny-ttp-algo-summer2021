// Problem Statement #

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

//  * this pattern follows the breadth first search pattern
//  *
//  * create a result array to hold the resulting tree
//  * create a queue
//  * push the root node into the queue
//  * while the queue is not empty
//  * create a temp array to hold the current level
//  * store the current size of the queue
//  * for loop from 0 to the current queue size
//  * hold the current node value
//  * current node is queue.shift, because we pushed into the queue
//  * push the current node into the current level temp array
//  * check if there are children
//  * if so push them into the queue
//  *
//  *  iterate of the current level array
//  *  if the node that follow the current node is null
//  *  current node will link to null
//  *  else
//  *  current node will link to the next node in the level (array)
//  *
//  * push the now linked, current level array into the results array
//  *
//  * return results array
//  *
//  * result = []
//  * queue = [root]
//  * while (queue not empty)
//  * current level = []
//   level size = queue length
//     for loop ( 0 - level size)
//       current node = queue.shift()
//       current level [current node]
//       if children push them into queue

//     for loop (0 - current level size)
//       if Node + 1 === null
//         node.next = null
//       else
//         node.next = node + 1

//     result.push(current level)

//   return result

//   Time: O(N)
//   Space: O(N)

//   edge:
//     what to do null vals
//   Assumption:
//     null values are valid

//   edge:
//     what to do with null arguments
//   Assumption
//     return null

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
}

const connect_level_order_siblings = function (root) {
  if (root === null) return null;
  //create results array
  const result = [];
  //create a queue
  const queue = [];
  //push in the root
  queue.push(root);

  //while queue is not empty
  while (queue.length) {
    //create temp level array
    let currLvl = [];
    //save current queue size
    let levelSize = queue.length;
    //loop from 0 - current level size
    for (let i = 0; i < levelSize; i++) {
      //store the current level
      let currNode = queue.shift();
      //push the current node into the current Level array
      currLvl.push(currNode);
      //push children into the queue if they exist
      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }

    //loop over the current level array
    for (let j = 0; j < currLvl.length; j++) {
      //if the next node is not null
      if (currLvl[j + 1] !== null) {
        //set next node as current nodes sibling
        currLvl[j].next = currLvl[j + 1];
      } else {
        //set next to null
        currLvl[j].next = null;
      }
    }
    //push the temp current array into the results array
    result.push(currLvl);
  }

  //return results array
  return result;
};

const connect_level_order_siblings = (root) => {
  if (root === null) return null;
  //create results array
  const result = [];
  //create a queue
  const queue = [];
  //push in the root
  queue.push(root);

  //while queue is not empty
  while (queue.length) {
    //create temp level array
    let currLvl = [];
    //save current queue size
    let levelSize = queue.length;
    //loop from 0 - current level size
    for (let i = 0; i < levelSize; i++) {
      //store the current level
      let currNode = queue.shift();
      //push the current node into the current Level array
      currLvl.push(currNode);
      //push children into the queue if they exist
      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }

    //loop over the current level array
    for (let j = 0; j < currLvl.length; j++) {
      //if the next node is not null
      if (currLvl[j + 1] !== null) {
        //set next node as current nodes sibling
        currLvl[j].next = currLvl[j + 1];
      } else {
        //set next to null
        currLvl[j].next = null;
      }
    }
    //push the temp current array into the results array
    result.push(currLvl);
  }

  //return results array
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(null);
connect_level_order_siblings(root);

connect_level_order_siblings(null);

root.print_level_order();
