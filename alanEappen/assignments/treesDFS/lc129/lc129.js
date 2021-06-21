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



/*
Given a 0-9 digit binary tree
Goal is to sum each root-to-leaf path that represent a number

Variables:
sum = 0

create another function to recursvely solve the problem
the parameters would include node which is the root and a string value,
function dfs(node, num){
    num += node.value.toString()

  a condtional to check if the node has a left and right
  if not then you have your number and add it to the sum
  if(!node.left && !node.right){
    sum += num
  }

  a conditional to check if their is a left node
  dfs( node.left, num)

  a conditional to check if their is a right node
  dfs(node.right, num)
]


  dfs(root, '')
  return sum 
}
edge cases:
if there is no root return -1

*/
class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_sum_of_path_numbers = function (root) {
  let sum = 0

  if (root == null) {
    return -1;
  }
  //recursive function
  function dfs(node, num) {
    num += node.value.toString()

    if (!node.left && !node.right) {
      sum += parseInt(num)
    }

    if (node.left) {
      dfs(node.left, num)
    }

    if (node.right) {
      dfs(node.right, num)
    }
  }
  dfs(root, '')
  return sum
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)

