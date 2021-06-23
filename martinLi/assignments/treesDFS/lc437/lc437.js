// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths in the tree such that

//the sum of all the node values of each path equals ‘S’.

//Please note that the paths can start or end at any node but all paths
// must follow direction from parent to child (top to bottom).

// Example
// -----
// targetSum = 12
// Output = 3
// Explanation: Tree has three paths w/ sum 12: "7 -> 5" "1 -> 9 -> 2" & "9 -> 3"
//      1
//     / \
//    7   9
//  / |   | \
// 6  5   2  3

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const count_paths = function (root, S) {
  let res = 0;

  const helper = (root, sum) => {
    if (!root) return;
    sum -= root.value;
    if (sum === 0) {
      res++;
    }
    helper(root.left, sum);
    helper(root.right, sum);
  };

  const main = (root, sum) => {
    if (!root) return 0;
    helper(root, sum);
    main(root.left, sum);
    main(root.right, sum);
    return;
  };
  main(root, S);
  return res;
  // TODO: Write your code here
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
