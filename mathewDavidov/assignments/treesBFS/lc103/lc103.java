/**
 * Problem Statement:
 * Given a binary tree, populate an array to represent its zigzag level order traversal. 
 * You should populate the values of all nodes of the first level from left to right, 
 * then right to left for the next level and keep alternating in the same manner for the following levels.
 * 
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 *       3
 *      9 20
 *       15 7
 * Output: [[3],[20,9],[15,7]]
 * 
 * Edge cases:
 * root null -> return empty list
 * 
 * initialize a list containing the level-by-level traversal
 * initialize a queue and add the root
 * while the queue is not empty:
 *   retrieve the current size of the queue in a variable
 *   initialize a list for the current level (linkedlist, since we will take advantage of adding to the front)
 *   loop from 0 to the size of the queue (in the above variable):
 *     poll the element in the front in the queue
 *     if its left child exists, add it to the queue
 *     if its right child exists, add it to the queue
 *     if the level-by-level list size is even, simply add the value to the current layer's list
 *     otherwise, add the value to the front of the current layer's list, which provides the alternating pattern
 *   add the current level list to the front of the level-by-level list
 * return the level-by-level list
 * 
 * Runtime:
 * Time: O(n) - note: adding to the front of a linkedlist is O(1)
 * Space: O(n)
 */
import java.util.*;

public class lc103 {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> levelByLevelList = new ArrayList<>();

        if (root == null) {
            return levelByLevelList;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            List<Integer> levelList = new LinkedList<>();

            for (int i = 0; i < queueSize; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }

                if (levelByLevelList.size() % 2 == 0) {
                    levelList.add(current.val);
                } else {
                    levelList.add(0, current.val);
                }
            }

            levelByLevelList.add(levelList);
        }

        return levelByLevelList;
    }

    public static void main(String[] args) {

    }
}

// class TreeNode {
//     public int val = 0;
//     public TreeNode left;
//     public TreeNode right;
   
//     public TreeNode(int val) {
//        this.val = val;
//        this.left = this.right = null;
//     }
// }