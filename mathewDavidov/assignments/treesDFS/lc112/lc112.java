/**
 * Problem Statement:
 * Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf 
 * such that the sum of all the node values of that path equals ‘S’.
 * 
 * Example:
 * Input: root = [5,4,8,11,null,13,4], targetSum = 17
 *         5
 *       4   8
 *     11   13 4
 * Output: true
 * 
 * Edge cases:
 * null root -> return false
 * 
 * Recursive DFS:
 * if the root is null, return false
 * 
 * if the left and right children are both null (we are at a leaf), check if the path is equal to the sum
 * by subtracing the leaf's value from sum. If it's 0, return true
 * 
 * recurse by calling the left child and subtracing the current nodes value. repeat the same for the right
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n) - (we would need a tree that's unbalanced all on one side)
 */


public class lc112 {
    public static boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) {
            return false;
        }

        if (root.left == null && root.right == null && sum - root.val == 0) {
            return true;
        }

        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        System.out.println("Tree has path: " + hasPathSum(root, 23));
        System.out.println("Tree has path: " + hasPathSum(root, 16));
    }
}
