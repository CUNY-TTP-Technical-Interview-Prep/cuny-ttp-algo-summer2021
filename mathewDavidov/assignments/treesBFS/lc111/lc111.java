/**
 * Problem Statement:
 * Find the minimum depth of a binary tree. 
 * The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
 * 
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 *      3
 *     9 20
 *      15 7
 * Output: 2
 * 
 * Edge cases:
 * null root -> return 0
 * 
 * initialize a queue and add the root
 * initialize a min depth to 1
 * while the queue is not empty:
 *   initialize a variable to the current size of the queue
 *   loop from 0 to the size of the queue:
 *     poll the current element in the front of the queue
 *     if the current node's left and right child are null, return the min depth
 *     if the left child exists, add it to the queue
 *     if the right child exists, add it to the queue
 *   increment min depth by 1
 * return min depth
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */
import java.util.*;

public class lc111 {
    public static int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        int minDepth = 1;

        while (!queue.isEmpty()) {
            int queueSize = queue.size();

            for (int i = 0; i < queueSize; i++) {
                TreeNode current = queue.poll();

                if (current.left == null && current.right == null) {
                    return minDepth;
                }

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }
            }

            minDepth++;
        }

        return minDepth;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        System.out.println("Tree Minimum Depth: " + minDepth(root));
        root.left.left = new TreeNode(9);
        root.right.left.left = new TreeNode(11);
        System.out.println("Tree Minimum Depth: " + minDepth(root));
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