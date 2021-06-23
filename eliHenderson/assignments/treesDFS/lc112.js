// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

/**
 * Explanation:
 * Find if there is a path from the root to a leaf in which all nodes sum to 'S' the given node
 *
 * Sudo:
 *  Since we are looking for a path in a BST, this Problem works well with DFS
 *  We can use Recursion to do a pre-order traversal of the tree
 *  On every iteration we can check the current node to see if it is a leaf and if the val === sum
 *
 *  Recursive base:
 *      if the node is a  leaf and the sum = S
 *
 *  def has_sum (root, sum ){
 *      //check if the root is not None
 *      if(root === null){
 *          return false
 *      }
 *
 *      if(root.val === sum && root.left === null && root.right === null){
 *           return true
 *          }
 *
 *      return has_sum(root.left, sum - root.val) || has_sum( root.right, sum-root.val )
 * }
 *
 *
 *
 *
 *
 *
 *
 *             12
 *           /    \
 *          7      1
 *         /     /   \
 *        9     10     5
 *
 *  S = 23
 *
 * TIME: O(N)
 * Space: O(N)
 *
 * edge: if sum == null
 *      if root === null
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const has_path = function (root, sum) {
  if (sum === null) {
    return null;
  }
  if (root === null) {
    return false;
  }

  if (root.value === sum && !root.left && !root.right) {
    return true;
  }

  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
};

const has_path = function (root, sum) {
  if (!sum || !root) return null;

  //check if we are at a leaf and if the current node has the
  //current sum
  if (root.value === sum && !root.left && !root.right) return true;

  //recurse the children if the sum has not been found
  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
console.log(`Tree has path: ${has_path(null, 23)}`);
console.log(`Tree has path: ${has_path(root, null)}`);
