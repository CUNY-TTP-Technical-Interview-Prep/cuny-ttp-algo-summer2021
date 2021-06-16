# Problem Statement #


# Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the
# sum of all the node values of that path equals ‘S’.

# Start at the root and traverse down each branch until I hit a leave.
# At every level, subract the value of the node from the sum (S - val of the node) that I am on.
# At the end of each branch (when a leaf is encountered), check to see if the value of sum equals
# the value of the leaf node.  If equal, return true, else return false
# This code uses a recursive function.

# If each function call of recursive algorithm takes O(m) space, and m is made up of the parameters of function,
# local variables in the function, and return address of caller function. 
# and if the maximum depth of recursion tree is 'n'
# then space complexity of recursive algorithm would be O(nm)
# time complexity is O(2^n), where n is height of our tree.

# Key learnings:  first do the edge case, then do the base case, then complete with the recursive logic.

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def has_path(root, sum):

  if not root :
    return False
  
  if not root.left and not root.right:  #terminating case
    return sum == root.val

  return has_path(root.left, sum-root.val) or has_path(root.right, sum-root.val)


def main():

  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree has path: " + str(has_path(root, 23)))
  print("Tree has path: " + str(has_path(root, 16)))


main()
