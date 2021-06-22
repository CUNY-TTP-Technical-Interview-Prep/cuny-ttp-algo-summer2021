/**
 * Problem Statement:
 * Given a binary tree where each node can only have a digit (0-9) value, 
 * each root-to-leaf path will represent a number. 
 * Find the total sum of all the numbers represented by all paths.
 * 
 * Example:
 * Output = 408
 * Explanation: Sum of all path numbers 17 + 192 + 199
 *       1
 *      / \
 *     7   9
 *         | \
 *         2  9
 * 
 * Edge cases:
 * null root -> return 0
 * 
 * Recursive DFS approach:
 * create a helper method that takes a node and a running sum
 *   if the root is null, return 0
 *   if the left and right children are null, return the sum so far multiplied by 10 and add the current node's value
 *   return the sum of the left and right children's paths - multiply previous sum by 10 and add the current node's value
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */

public class lc129 {
    public static int sumNumbers(TreeNode root) {
        return DFS(root, 0);
    }

    public static int DFS(TreeNode node, int sum) {
        if (node == null) {
            return 0;
        }

        if (node.left == null && node.right == null) {
            return sum * 10 + node.val;
        }

        return DFS(node.left, sum * 10 + node.val) + DFS(node.right, sum * 10 + node.val);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(0);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(1);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(5);
        System.out.println("Total Sum of Path Numbers: " + sumNumbers(root));
    }
}

class TreeNode {
    public int val = 0;
    public TreeNode left;
    public TreeNode right;
   
    public TreeNode(int val) {
       this.val = val;
       this.left = this.right = null;
    }
}