/**
 * Problem Statement:
 * Given a binary tree, populate an array to represent its level-by-level traversal in reverse order,
 * i.e., the lowest level comes first. 
 * You should populate the values of all nodes in each level from left to right in separate sub-arrays.
 * 
 * Example:
 *      3
 *     9 20
 *      15 7
 * -> [[15, 7], [9, 20], [3]]
 * 
 * Edge cases:
 * null root -> empty list
 * 
 * As the problem is similar to normal level-by-level traversal,
 * to get the values from leaf to root, we can append our arrays 
 * at index 0 every time we finish a level.
 * 
 * initialize the list containing the level-by-level traversal (use linkedlist, inserting on the ends is O(1))
 * initialize a queue and add the root
 * while the queue is not empty:
 *   retrieve the current size of the queue in a variable
 *   initialize a list for the current level
 *   loop from 0 to the size of the queue (in the above variable):
 *     poll the element in the front in the queue
 *     if its left child exists, add it to the queue
 *     if its right child exists, add it to the queue
 *     add the current node's value (that was polled) to the current level list
 *   add the current level list to the front of the level-by-level list
 * return the level-by-level list
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */
import java.util.*;

public class lc107 {
    public static List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> levelByLevelList = new LinkedList<>();

        if (root == null) {
            return levelByLevelList;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            List<Integer> levelList = new ArrayList<>();

            for (int i = 0; i < queueSize; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }

                levelList.add(current.val);
            }

            levelByLevelList.add(0, levelList);
        }

        return levelByLevelList;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        List<List<Integer>> result = levelOrderBottom(root);
      
        System.out.println("Reverse level order traversal: ");
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