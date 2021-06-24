// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * inputs: 
 * @param {*} root: the root node of the binary tree 
 * @param {*} sum: the  sum that compare with all the paths
 * 
 * outputs: 
 * @returns boolean value that if one path is equal to the sum
 * 
 * step 1: using recursion to traverse all the tree nodes
 * step 2: add up the current sum 
 * step 3: if reach the leaf node compare the current sum and sum
 * step 4: if not the leaf pass the current sum to left or right child
 * 
 * variable currentSum: add up the current number to the currentSum
 * 
 * using recursion function to traverse all the tree nodes
 *    if the node is null value return false
 *    add up current value to the current sum
 *    if find the leaf node that no left and right child
 *        compare sum and current sum and return the value
 *    if the left or right child returns a true value the return ture
 *    else return false
 * end function
 * return the result of the recursion function
 * 
 * edge cases: if the  root is null => false;
 */

const has_path = function(root, sum) {
  // TODO: Write your code here
  function checkSum(node, currentSum){
      
      if(!node) return false;

      currentSum += node.value;

      if(!node.left && !node.right) return sum === currentSum;

      if(checkSum(node.left, currentSum) || checkSum(node.right, currentSum)) return true;
      else return false;
  }
  
  return checkSum(root, 0)
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`) // true
console.log(`Tree has path: ${has_path(root, 16)}`) // false

/**
 * 
 * 
 * 
 *              12
 *            /    \
 *          7       1
 *        /        /  \
 *      9        10     5
 */

/**
 * inputs: 
 * @param {*} root: the root node of the binary tree 
 * @param {*} sum: the  sum that compare with all the paths
 * 
 * outputs: 
 * @returns boolean value that if one path is equal to the sum
 * 
 * step 1: using recursion to traverse all the tree nodes
 * step 2: add up the current sum 
 * step 3: if reach the leaf node compare the current sum and sum
 * step 4: if not the leaf pass the current sum to left or right child
 * 
 * variable currentSum: add up the current number to the currentSum
 * 
 * using recursion function to traverse all the tree nodes
 *    if the node is null value return false
 *    add up current value to the current sum
 *    if find the leaf node that no left and right child
 *        compare sum and current sum and return the value
 *    if the left or right child returns a true value the return ture
 *    else return false
 * end function
 * return the result of the recursion function
 * 
 * edge cases: if the  root is null => false;
 */

//  const has_path = function(root, sum) {
//   // TODO: Write your code here
//   function findSum(node, currentSum){

//     if(!node) return false;

//     currentSum += node.value;

//     if(!node.left && !node.right) return sum === currentSum;

//     if(findSum(node.left, currentSum) || findSum(node.right, currentSum)) return true;
//     else return false;
//   }

//   return findSum(root, 0);
// };
