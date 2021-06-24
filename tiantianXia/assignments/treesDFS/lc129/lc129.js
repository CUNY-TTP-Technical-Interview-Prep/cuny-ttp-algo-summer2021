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

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * inputs: 
 * @param {*} root: the root of the binary tree
 * 
 * output:
 * return the result of the all path that represent numbers
 * 
 * step 1: using DFS approach to traverse all the tree nodes
 * step 2: using previous number times 10 puls the current number as the method to get the path representing numbers
 * step 3: if find the leaf node that don't have left and right child, add up the current number to the result
 * step 4: if there is left or right child go down to the child and bring the current number
 * 
 * variables: 
 *      result: that can store the sum of all the path
 *      currentNum: that represent the number at current level previous number * 10 + current value
 * 
 * using recursion to bring the current node and current number for each call
 *    find the current number by adding current node value with the current number * 10 
 *    if find the leaf node that no left and right child
 *        add the current number to the result
 *    if there is a left child
 *        call the function and pass the parameter left child node and the current number
 *    if there is a right child
 *        call the funtion and pass the parameter right child node and the current number
 * end function
 * call the function that start with root and 0
 * return the root
 * 
 * edge case: root is null => null
 */

const find_sum_of_path_numbers = function(root) {
  // TODO: Write your code here
  let result = 0;

  function findNumber(currentNode, currentNum){

      currentNum = currentNum * 10 + currentNode.value;

      if(!currentNode.left && !currentNode.right) result += currentNum;

      if(currentNode.left) findNumber(currentNode.left, currentNum);
      if(currentNode.right) findNumber(currentNode.right, currentNum);
  }

  findNumber(root, 0);

  return result;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`) // 101 + 116 + 115 = 332

/**
 *       1
 *     //  \\
 *    0      1
 *  //     //  \\
 *  1     6      5
 */


/**
 * inputs: 
 * @param {*} root: the root node of a binary tree
 * 
 * output:
 * @returns the total number of all path of numbers
 * 
 * step 1: traverse all the node from the tree
 * step 2: add the current value to the previous path value 
 * 
 * varibles: result to return the total number of all paths
 * 
 * a findNum function pass the parameter like node, sum
 *  add the sum with the current node value
 * 
 *  if find leave node with no left and right child add up totalSum with ( node.value + sum * 10)
 * 
 *  else the find the next left or right node with the sum
 * 
 * edge cases: root is null => 0
 */
/**
 *       1
 *    0     1
 *  1    6    5
 */
//  const find_sum_of_path_numbers = function(root) {
//   // TODO: Write your code here
//   let result = 0;

//   if(root === null) return 0;

//   function findSum(node, currentNum){

//     currentNum = currentNum * 10 + node.value;

//     if(!node.left && !node.right){
//       result += currentNum;
//     }

//     if(node.left) findSum(node.left, currentNum);
//     if(node.right)  findSum(node.right, currentNum);
//   }

//   findSum(root, 0);

//   return result;
// };