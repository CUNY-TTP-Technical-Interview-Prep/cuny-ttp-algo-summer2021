// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |  | \
// 4  5  2  7

/**
 * I need to search every path to see if the sum of the nodes is == to the target value
 *
 * This follows the DFS traversal method,
 *  Specifically the helper function style, pre-order traversal method
 *
 *  check if the root is null: edge, root is null : Assumption, return []
 *  First we create an array to store the paths that equal the sum
 *  create current path array store the current path traversal
 *  create a helper function to traverse the tree recursively
 *  push the current node in to the current path array
 *  check if the the node is a leaf that equals the target
 *  if so, push the current path array into the results array
 *
 *  if not, check recursively traverse the left and right children,
 *  and pass down the sum - current nodes value, and the current Path array
 *
 * call the helper function
 *  return the results array
 *
 * sudo:
 *  find_paths(root, sum) =>{
 *    results array = []
 *    current path = []
 *
 *    helper ( node, currentPath, target)
 *      current path.push (node.val)
 *
 *      if(node.val == target and No children){
 *        results.push([...current Path])
 *      }
 *
 *      //left and right
 *      if(node.children) {
 *        helper(node.child, currentPath, target - node.val)
 *      }
 *
 *    helper(root, currentPath, sum)
 *    return result
 * }
 *
 *  Time: O(N )
 * We would have to visit every leaf node once
 *
 *  Space:  O(N * logN)
 *
 *
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_paths = (root, sum) => {
  //check if the root is null
  if (root === null) {
    return [];
  }
  //check if there is no sum given
  if (!sum) {
    return null;
  }
  //create results array
  const results = [];
  //create currentPath array
  const currentPath = [];
  //create recursion helper function
  const helper = (node, currPath, target) => {
    //push the node into the current path
    currPath.push(node.val);

    //check if the current node == to the sum and if there are no children
    if (node.val === target && !node.left && !node.right) {
      results.push([...currPath]);
    }

    //check if there are children
    //if there are, recurse the helper function
    if (node.left) {
      helper(node.left, currPath, target - node.val);
    }
    if (node.right) {
      helper(node.right, currPath, target - node.val);
    }

    //take the node off of the current path array
    //it is no longer part of our path
    currPath.pop();
  };

  //call the helper function
  helper(root, currentPath, sum);

  //return the results array
  return results;
};

const find_paths = (root, sum) => {
  //check if the root is null
  if (!root) return [];
  //check if there is no sum
  if (!sum) return null;
  //create results array
  const results = [];
  //create currentPath array
  const currentPath = [];
  //create helper function
  const helper = (node, currPath, target) => {
    //push the node into the current path arr
    currPath.push(node.val);
    //check if the current node === to the sum and if there are no children
    if (node.val === target && !node.left && !node.right)
      results.push([...currPath]);
    //check if there are children
    //if so, call helper on them
    if (node.left) helper(node.left, currPath, target - node.val);
    if (node.right) helper(node.right, currPath, target - node.val);
    //pop the current node off of the current path
    currPath.pop();
  };
  //call the helper function
  helper(root, currentPath, sum);
  return results;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`);

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(null, sum)}`);

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(null, null)}`);
