# Problem Statement #

# Given a binary tree and a number ‘S’, 
# Find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
'''
Attempt 1:
Input: root of the binary tree and the target sum that we want to find
Output: boolean value to check if there's root to leaf path where the sum match the target sum
Edge case: if the root is none: return false

check if the current node is not a leaf node, if so continue looping till its a leaf node, 
  by checking if the current node have left and right children, if so change the current node to its children
    at the same time, we want to subtract the current node's value from the sum sum = sum - current node's value

create a recrusive function that repeatly checking the following  def rec(root, sum)
  if (the root.left is null and root.right is null)[it is a leaf node]:
    sum -= current node's value
    if sum == 0:
      return true
    else:
      return false
run the rec function by either take the input replace the root as root.left or root.right

'''

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

# Given a binary tree and a number ‘S’, 
# Find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
'''

'''

def has_path(root, sum):
  
  def rec(root, sum):
    if root is None:
      return False

    sum -= root.val
    
    if root.left is None and root.right is None:
      if sum == 0:
        return True
      else:
        return False
    
    if(rec(root.left, sum) or rec(root.right, sum)):
      return True
    return False

  return rec(root, sum)

    

def main():

  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree has path: " + str(has_path(root, 23))) #true 12 + 1 + 10
  print("Tree has path: " + str(has_path(root, 16))) #false 

  root1 = None
  print("Tree has path: " + str(has_path(root1, 16))) 


main()
