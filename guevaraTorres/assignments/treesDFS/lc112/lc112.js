// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

//Start with DFS with the root
//check if current node is not a leaf
//check if left and right exist
//if not:
//get a new sum with the difference between current node and given number
//make two recursive calls to left and right with the new sum
//check if leaf node and if given value is the new sum
//if current node is a leaf but not equal to the new sum, return false

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const has_path = (root, sum) => {
  if (!root) return false;

  if (!root.left && !root.right) {  //check if current node is a leaf
      return sum === root.value;    //check if leaf node and if given value is the new sum
  } else { // continue DFS
      return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value); //determine if there is a proper root to leaf summation
  }
}

// const has_path = (root, sum) => {
//   if(!root) return false;

//   if(!root.left && !root.right) {
//     return sum === root.value;
//   } else {
//     return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
//   }
// }


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
