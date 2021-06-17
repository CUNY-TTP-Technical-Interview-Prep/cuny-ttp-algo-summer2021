/**
 * Problem Statement:
 * Given a binary tree, populate an array to represent the averages of all of its levels.
 * 
 * Example:
 * Input: root = [3,9,20,null,15,7]
 *     3
 *    9 20
 *     15 7
 * Output: [3.00000, 14.50000, 11.00000]
 * Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
 * Hence return [3, 14.5, 11].
 * 
 * Edge cases:
 * Null root -> empty list
 * 
 * initialize a list that contains all the level averages
 * initialize a queue and add the root
 * while queue is not empty:
 *   initialize a variable with the size of the queue
 *   declare a variable that contains a running sum
 *   loop from 0 to the size of the variable initialized above:
 *     poll the front element from the queue
 *     if the left child exists, add it to the queue
 *     if the right child exists, add it to the queue
 *     add the current element's value to the running sum
 *   calculate the layer's average by dividing the sum by the size of that layer and add it to the list
 * return list of averages
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */
import java.util.*;

public class lc637 {
    public static List<Double> averageOfLevels(TreeNode root) {
        List<Double> averagesList = new ArrayList<>();

        if (root == null) {
            return averagesList;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            double sum = 0;

            for (int i = 0; i < queueSize; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }

                sum += current.val;
            }

            averagesList.add(sum / queueSize);
        }

        return averagesList;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        List<Double> result = averageOfLevels(root);
        System.out.println("Level averages are: ");
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
