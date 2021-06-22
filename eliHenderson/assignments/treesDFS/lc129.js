// Problem Statement #

// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

// Example
// -----
// Output = 408
// Explanation: Sum of all path numbers 17 + 192 + 199
//      1
//     / \
//    7   9
//        | \
//        2  9
/**
 * Exp:
 *  We can create a value to hold the sum
 *  create an array to hold the current path
 *
 *  create a helper function to handle recursion
 *    on every node we can push the value in to the current Path array as a string
 *    ['1', '7']
 *
 *    if there are no children, then we join the array and convert it to a number
 *    we can then add that number to the results sum
 *
 *    ['1','7']
 *    '17'
 *     results = 17
 *
 *    then remove the number from the path when we are finished with the node
 *    then go to the next child node if one exists
 *
 *    ['1', '9']
 *    '19'
 *     results = 36
 *
 *    return the results array
 *
 *    time O(V + E)
 *    space O(N)
 *
 *  Questions:
 *    how to handle null values in the params
 *    how to handle no value givin as root
 *
 *
 * sudo:
 *  function findPaths = (root)=>{
 *    results = 0
 *    currPath = []
 *
 *    helper = (node, currPath) =>{
 *      currPath.push(String( node.val))
 *      if(no children){
 *        curSum = currPath.join("");
 *        results += Number(currSum )
 *      }
 *
 *      if(children):
 *        helper(child, currPath)
 *
 *      currPath.pop()
 *    }
 *
 *    helper(root, currPath)
 *    return results
 * }
 *
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_sum_of_path_numbers = function (root) {
  if (!root) return 0;
  let results = 0;
  let currentPath = [];
  const helper = (node, currPath) => {
    currPath.push(String(node.value));
    if (!node.left && !node.right) {
      let currSum = currentPath.join("");
      results += Number(currSum);
    }
    if (node.left) {
      helper(node.left, currPath);
    }
    if (node.right) {
      helper(node.right, currPath);
    }
    currPath.pop();
  };
  helper(root, currentPath);
  return results;
};

const find_sum_of_path_numbers = (root) => {
  if (!root) return 0;

  //create values for running sum
  let results = 0;
  //the current path array will hold a string values of the numbers
  let currentPath = [];
  //recursive helper function
  const helper = (node, currPath) => {
    //push a string value of the current node into the currentPath String
    currPath.push(String(node.value));
    //if we are at a leaf, join the current path array (which holds node values as strings) to an Int value
    //then add that number to the results sum
    if (!node.left && !node.right) {
      let currSum = currentPath.join("");
      results += Number(currSum);
    }

    //recurse through the children
    if (node.left) helper(node.left, currPath);

    if (node.right) helper(node.right, currPath);

    // take the current node off of the current path
    currPath.pop();
  };

  helper(root, currentPath);
  return results;
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(null)}`);
var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers()}`);
