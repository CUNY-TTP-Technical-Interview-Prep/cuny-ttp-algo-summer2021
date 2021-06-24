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


//17 + 1


/*
Given: A binary tree 
Goal: turn each path into number and then add the number 
and return Sum

sum = 0

create a recursive function dfs that takes in a node, num(string){
   num += node.value.toString() 1 + 7 = 17 

 a conditional to check if there is no left or no right
 sum += num//17 + 192 + 199

 a conditional to check if there is a left
 call recursive function (node.left, num)

 a conditional to check if there is right
  call recursive function (node.left, num)
}

dfs(root,'')
return sum
edge cases{
  root node is null return 0
}

*/
class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_sum_of_path_numbers = function (root) {

  let sum = 0;

  if (root === null) {
    return 0
  }

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

var root2 = new TreeNode(3); // 335 + 312 + 319 = 335 + 631 = 966
root2.left = new TreeNode(3);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(5);
root2.right.left = new TreeNode(2);
root2.right.right = new TreeNode(9);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root2)}`)


/*

          1
        0   1
      1   6   5
101 + 116 +115
*/
