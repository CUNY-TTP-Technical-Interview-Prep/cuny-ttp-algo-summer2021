/**
 * Problem Statement:
 * Given a binary tree and a number ‘S’, find all paths from root-to-leaf 
 * such that the sum of all the node values of each path equals ‘S’.
 * 
 * Example:
 * targetSum = 12
 * Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
 *       1
 *      / \
 *     7   9
 *   / |   | \
 *  4  5   2  7
 * 
 * Edge cases:
 * null root -> empty list
 * 
 * initialize a list of lists that contains the paths that equal the target sum
 * if the root is null, return
 * perform DFS on each path, passing the container list, path list, node, and sum:
 *   add the current node's value to the path list
 *   if both left and right children are null (leaf) and if the path sum is equal to the target sum:
 *     add the path list to the container list
 *   if the left child is not null, traverse the left path and subtract the current node's value to the sum
 *   if the right child is not null, traverse the right path and subtract the current node's value to the sum
 *   remove the last element from the path list
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */
import java.util.*;

public class lc113 {
    public static List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> allPaths = new ArrayList<>();

        if (root == null) {
            return allPaths;
        }

        DFS(allPaths, new ArrayList<>(), root, sum);
        return allPaths;
    }

    public static void DFS(List<List<Integer>> allPaths, List<Integer> path, TreeNode root, int sum) {
        path.add(root.val);

        if (root.left == null && root.right == null && root.val == sum) {
            // Have to create a new list because the path list changes (objects are pass by reference)
            allPaths.add(new ArrayList<>(path));
        }

        if (root.left != null) {
            DFS(allPaths, path, root.left, sum - root.val);
        }

        if (root.right != null) {
            DFS(allPaths, path, root.right, sum - root.val);
        }

        path.remove(path.size() - 1);
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