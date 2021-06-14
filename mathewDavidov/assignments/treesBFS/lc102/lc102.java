/**
 * Problem Statement:
 * Given a binary tree, populate an array to represent its level-by-level traversal. 
 * You should populate the values of all nodes of each level from left to right in separate sub-arrays.
 * 
 * Example:
 *     4
 *    3 7
 *  1 2 6 10
 * = [[4], [3, 7], [1, 2, 6, 10]]
 * 
 * Edge cases:
 * null root -> return
 * 
 * initialize a queue and container list
 * add the root to the queue
 * while the queue is not empty:
 *   initialize the size of the current width of level
 *   initialize a list for the current level
 *   loop from 0 to the current level size:
 *     poll a node from the queue
 *     if the left child exists, add it the queue
 *     if the right child exists, add it to the queue
 *     add the value of the current node to the list
 *   add the current level list to the container list
 * return the container list
 */

import java.util.*;

public class lc102 {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> levelOrder = new ArrayList<>();

        if (root == null) {
            return levelOrder;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> levelList = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }

                levelList.add(current.val);
            }

            levelOrder.add(levelList);
        }

        return levelOrder;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        List<List<Integer>> result = levelOrder(root);
        System.out.println("Level order traversal: ");
        System.out.println(result);
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