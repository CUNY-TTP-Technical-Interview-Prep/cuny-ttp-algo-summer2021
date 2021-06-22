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
Edge Case: If !node -> return 0

Root to leaf: DFS

function recursive (node, count) {
  if (!node) return;
  count++;
  return recursive(node, count);
}

Things to take note:
  1. For each value, covert them to strings and them add them together (1 and 4 -> '1' and '4' -> '1' + '4' = '14')
  2. Another option is to multiply by 10 and then add the current value in the node (1 and 7 -> 1 * 10 = 10 + 7 = 17)
  3. At the end, I can convert the string back to an integer and then add it
  4. Pass sum as argument in my recursive function -> recursive (node, sum)
  5. In my function, I would perform some operation on it
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_sum_of_path_numbers = function (root) {
  // TODO: Write your code here
  function DFS(node, sum) {
    if (!node) {
      return 0;
    }

    sum += node.value.toString();

    if (!node.left && !node.right) {
      return parseInt(sum);
    }

    return DFS(node.left, sum) + DFS(node.right, sum);
  }

  return DFS(root, 0);
};

/*
        (1)           101 + 116 + 115 = 217 + 115 = 332
        / \
      (0) (1)
      /   / \
    (1) (6) (5)
*/

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);

var root2 = new TreeNode(3); // 335 + 312 + 319 = 335 + 631 = 966
root2.left = new TreeNode(3);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(5);
root2.right.left = new TreeNode(2);
root2.right.right = new TreeNode(9);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root2)}`);

var root3 = new TreeNode(0);
root3.left = new TreeNode(1);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root3)}`);
