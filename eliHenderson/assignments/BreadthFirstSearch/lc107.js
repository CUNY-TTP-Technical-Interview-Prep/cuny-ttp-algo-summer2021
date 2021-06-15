// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  result = [];
  let queue = [];
  queue.unshift(root);

  while (queue.length > 0) {
    let currLvl = [];
    let lvlSize = queue.length;

    for (let i = 0; i < lvlSize; i++) {
      let currNode = queue.pop();
      currLvl.push(currNode.value);

      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }

    result.unshift(currLvl);
  }
  return result;
};

const traverse = (root) => {
  result = [];
  let queue = [];
  queue.unshift(root);

  while (queue.length > 0) {
    let currLvl = [];
    let lvlSize = queue.length;

    for (let i = 0; i < lvlSize; i++) {
      let currNode = queue.pop();
      currLvl.push(currNode.value);

      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }

    result.unshift(currLvl);
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);
