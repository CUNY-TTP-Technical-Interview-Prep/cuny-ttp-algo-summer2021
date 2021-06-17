# Problem Statement #

# Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

# Example
# -----
# targetSum = 12
# Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
#      1
#     / \
#    7   9
#  / |   | \
# 4  5   2  7

'''
  edge case: empty tree => return []

  Overview:
  We can apply DFS pattern using stack (we use list) to find all root-to-leaf paths that are equal to target sum.
  Since leaf doesn't have left and right children, we can if condition to check if its left and right nodes are None, and the path sum is equal to target sum, 
  if yes, we store the path to final list; 
  else, we store its left or right node to stack, and keep repeating the steps until we traverse through every node. (when stack is empty).

  pseudo code:
  First declare and initialize a stack with (root node, target sum - root value, and sublist with root value), 
  and a empty result list to store paths that sum up tp target sum.
  while stack is not empty, 
  we pop the top value from stack, 
  and check if left and right nodes are None, and the path sum is equal to target sum,
  if yes, we append the sublist with path nodes into result list;
  else, we push the left node or right node, target sum - path sum, and sublist path node to stack.

  When finish the while loop, we will get the final result.
'''

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def find_paths(root, target_sum):
  if root is None:
    return []

  allPaths = []
  node_stack = [(root, 0, [])]

  while len(node_stack):
    node, path_sum, path = node_stack.pop()

    if node.left is None and node.right is None and path_sum + node.val == target_sum:
      path.append(node.val)
      allPaths.append(path)
    
    if node.left:
      node_stack.append((node.left, path_sum + node.val, path + [node.val]))

    if node.right:
      node_stack.append((node.right, path_sum + node.val, path + [node.val]))

  return allPaths


def main():
  
  root1 = None
  sum = 23
  print("Tree paths with sum " + str(sum) + ": " + str(find_paths(root1, sum)))

  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(4)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  sum = 23
  print("Tree paths with sum " + str(sum) +
        ": " + str(find_paths(root, sum)))

'''
            12
          7    1
        4    10  5    => return [[12, 7, 4], [12, 1, 10]]
'''


main()
