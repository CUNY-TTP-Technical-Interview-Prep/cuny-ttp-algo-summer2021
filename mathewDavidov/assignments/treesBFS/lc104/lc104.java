/**
 * Problem:
 * Given a binary tree, find its maximum depth (or height).
 * 
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 *      3
 *     9 20
 *      15 7
 * Output: 3
 * 
 * Edge cases:
 * null root -> return 0
 * 
 * initialize a queue add the root
 * declare a variable to 0 that holds the max depth
 * while the queue is not empty:
 *   initialize a variable that is the current size of queue
 *   loop from 0 to the current size of the queue:
 *     poll the current element in the front of the queue
 *     if the left child exists, add it to the queue
 *     if the right child exists, add it the queue
 *   increment our max depth by one
 * return the max depth
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */
import java.util.*;

public class lc104 {
    public static int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        int maxDepth = 0;

        while (!queue.isEmpty()) {
            int queueSize = queue.size();

            for (int i = 0; i < queueSize; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }
            }

            maxDepth++;
        }

        return maxDepth;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        System.out.println("Tree Maximum Depth: " + maxDepth(root));
        root.left.left = new TreeNode(9);
        root.right.left.left = new TreeNode(11);
        System.out.println("Tree Maximum Depth: " + maxDepth(root));
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
