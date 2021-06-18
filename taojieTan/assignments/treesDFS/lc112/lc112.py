# Problem Statement #

# Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

# input: a binary tree
# output: a boolean value
# edge case: empty tree: return false

'''
            12
          7    1
        9    10  5    target = 23     ==> true
                      target = 16     ==> false  
'''

'''
  We can apply DFS pattern with recurrsion to traverse each root to leaf path and check their sum with target sum.
  We first check if the root is None, if yes, simply return False.
  Then we check if root has left and right children and its value with target sum,
  if yes, we return True; else, we make two recurrsive calls with target sum - current node's value (one with left child and another one with right child).
  In each recurrsive call, we repeatly check if current node is None. 
  And we check if root has left and right children and its value with target sum,
  if yes, we return true; 
  else, we make two recurrsive calls again and keep traversing the each path..
  If we finish traversing all nodes and can't find the path that sums up to target sum, we simply return false.
'''

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def has_path(root, target_sum):
  if root is None:
    return False
  
  if root.left is None and root.right is None and target_sum - root.val == 0:
    return True

  return has_path(root.left, target_sum - root.val) or has_path(root.right, target_sum - root.val)

def main():
  # case where root without child
  root = TreeNode(12)
  print("Tree has path: " + str(has_path(root, 12)))
  print("Tree has path: " + str(has_path(root, 23)))

  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree has path: " + str(has_path(root, 23)))
  print("Tree has path: " + str(has_path(root, 19)))

  root1 = None
  print("Tree has path: " + str(has_path(root1, 2)))

main()
