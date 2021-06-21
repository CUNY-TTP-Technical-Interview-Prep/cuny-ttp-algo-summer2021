// Problem Statement #

// Given a binary tree where each node can only have a digit (0-9) value,
// each root-to-leaf path will represent a number.
//Find the total sum of all the numbers represented by all paths.

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
}
/*

If root/node does not exist return 0.
if it does exist then we create a variable newSum which sums 
sum by multiples of 10(starting from  0) + current node value

If we are at the leaf node which means that there are no longer left
and right child nodes then we return the sum we are looking for.

We recursively traverse the left side then the rightside
*/

const find_sum_of_path_numbers = function (root) {
  function traverse(root, sum) {
    if (!root) return 0; // if node doesnt exist
    let newSum = sum * 10 + root.value;
    if (root.left === null && root.right === null) return newSum;
    console.log(newSum);
    return traverse(root.left, newSum) + traverse(root.right, newSum);
  }

  return traverse(root, 0);
};

/**
 *      1
 *   0    1                   newSum = 101 116 sum = 10  11
 * 1    6   5                 returns 101 + 116
 * 115 + 101 + 116 => 332
 */

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
