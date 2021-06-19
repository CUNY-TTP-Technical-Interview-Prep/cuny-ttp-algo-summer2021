# Problem Statement #

# Given a binary tree and a number ‘S’, find if the tree has a path from 
# root-to-leaf such that the sum of all the node values of that path equals ‘S’.

'''

Given:
-binary tree
-target sum

Result:
-return True or False if there is a path that matches the target sum


Example:
      12
      / \
    7     1
  /     /   \
9     10      5

Sum: 23 | 12 + 1 + 10 = 23      | True (desired output)
Sum: 16 | 12 + 1 + 5 = 18 != 16 | False (desired output)


Variables:
-root node
-storing path that adds to the sum
-traverse through binary tree
-


Steps:
-Since the prompt is asking for boolean, no need to for initialization
-Use if conditional to check whether the the paths = target sum after
 reaching leaf nodes


Edge Cases:
-is there a binary tree, return True
  -if not, return False

'''


class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def has_path(root, sum):
  # TODO: Write your code here

  if not root:                   #Edge case
    return False

  sum -= root.val              #decrement sum when recursing down binary tree

  if not root.left and not root.right:       #check the sum at the leaf node
    if sum == 0:
      return True
    return False
  
  return has_path(root.left, sum) or has_path(root.right, sum)

  #return False

def main():

  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree has path: " + str(has_path(root, 23)))
  print("Tree has path: " + str(has_path(root, 16)))

  #My Examples
  print("Does tree path exist?: " + str(has_path(root, 28)))
  print("The tree path is " + str(has_path(root, 19)))


main()
