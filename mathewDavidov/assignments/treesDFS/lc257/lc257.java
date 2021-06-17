/**
 * Problem Statement:
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 * 
 * Example:
 * Input: root = [1, 2, 3, null, 5]
 *      1
 *     2  3
 *      5
 * Output: ["1->2->5", "1->3"]
 * 
 * Edge cases:
 * null root -> empty list
 * 
 * Similar recursive DFS approach as LC 113
 * 
 * initialize a list that contains the all the paths
 * if the root is null, return the empty list
 * perform DFS on each path, passing the path list, node, and string (this will contain the paths):
 *   initialize a length variable to the current string's length (to remove whatever we will add at the end)
 *   add the current node's value to the path list
 *   if both left and right children are null (leaf):
 *     add the string to the path list
 *   otherwise:
 *     add "->" to the string
 *     if the left child is not null, traverse the left path
 *     if the right child is not null, traverse the right path
 *   reset the string length to what it was at the beginning
 * 
 * Runtime:
 * Time: O(n^2)
 * Space: O(n)
 */
import java.util.*;

public class lc257 {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> allPaths = new ArrayList<>();

        if (root == null) {
            return allPaths;
        }

        DFS(allPaths, root, new StringBuilder());
        return allPaths;
    }

    public void DFS(List<String> allPaths, TreeNode root, StringBuilder path) {
        int length = path.length();
        path.append(root.val);

        if (root.left == null && root.right == null) {
            allPaths.add(path.toString());
        } else {
            path.append("->");

            if (root.left != null) {
                DFS(allPaths, root.left, path);
            }

            if (root.right != null) {
                DFS(allPaths, root.right, path);
            }
        }

        path.setLength(length);
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