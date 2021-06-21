# Problem Statement #

# Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

# Example
# -----
# Output = 408
# Explanation: Sum of all path numbers 17 + 192 + 199
#      1
#     / \
#    7   9
#        | \
#        2  9

'''
  edge cases: 1. empty tree => return 0
              2. tree with only left children:  2
                                                  3
                                                    4           => return 23456
                                                      5
                                                        6

  overview: 
  We can apply DFS pattern using stack to traverse through each path.
  While in each path, we append each digit from top to bottom to a temp string,
  and when finish each path, we store each temp string (we convert it to int) to the result list.
  When we finish traversing every path, we sum all the value in the result list and return the result.

  pseudo code:
  First we declare an empty result list,
  and then declare and initialize a stack with the root node and empty string.

  while the stack is not empty, we pop the top value from stack and check if its left and right children are None,
  if yes, result.append(int(temp))

  if it has left or right child, append current node value to temp and push its left or right child to stack.

  when finish the while loop, return sum(result)
'''

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def find_sum_of_path_numbers(root):
  if root is None: 
    return 0

  result = []
  node_stack = [(root, "")]

  while len(node_stack):
    node, value = node_stack.pop()

    if node.left is None and node.right is None:
      value += str(node.val)
      result.append(int(value))

    value += str(node.val)
    if node.left:
      node_stack.append((node.left, value))

    if node.right:
      node_stack.append((node.right, value))
    
  
  return sum(result)



def main():
  # case where tree is empty
  root1 = None
  print("Total Sum of Path Numbers: " + str(find_sum_of_path_numbers(root1)))

  # case where tree has only left children or right children
  root1 = TreeNode(1)
  root1.left = TreeNode(2)
  root1.left.left = TreeNode(3)
  root1.left.left.left = TreeNode(4)
  print("Total Sum of Path Numbers: " + str(find_sum_of_path_numbers(root1)))

#            1
#              2
#                3
#                  4           => return 1234

  root = TreeNode(1)
  root.left = TreeNode(0)
  root.right = TreeNode(1)
  root.left.left = TreeNode(1)
  root.right.left = TreeNode(6)
  root.right.right = TreeNode(5)
  print("Total Sum of Path Numbers: " + str(find_sum_of_path_numbers(root)))

'''
           1
        0    1
      1    6  5    => 101 + 116 + 115 = 332 
'''

main()
