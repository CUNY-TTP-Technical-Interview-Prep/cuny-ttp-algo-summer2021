// Problem Statement #

// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

// Example
// -----
// Sequence = [ 1, 9, 9 ]   
// Output = true
// Explanation: Tree has a path 1 -> 9 -> 9
//      1
//     / \
//    7   9
//        | \
//        2  9

//Given: binary tree, and number sequence 
//Goal: if their is a root-to-leaf path that would equal number sequence and return true false

/*create a recursive function with parameters of node and num array
dfs(node, num[])
    push the node value into num array
    num.push(node.value)

    check if the sequence equal to num array
    if(num == sequence){
        return true
    }
    
*/
class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



const find_path = function (root, sequence) {
  // TODO: Write your code here
  return false;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
