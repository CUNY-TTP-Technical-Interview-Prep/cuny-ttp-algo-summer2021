# Problem Statement #

# Given a binary tree, populate an array to represent the averages of all of its levels.

# input: a binary tree
# output: an array with averages of all nodes on each level
# edge cases: 1. empty tree => 0

'''
          12
          / \
        7    1
       /\    /\
      9 2   10 5
  return [12, 4, 6.5]
'''

'''
  We will declare a queue to store all nodes in each level.
  In each level, we check if the nodes have left or right node; 
  if yes, store them to the queue. 
  At the same time, calculate the average of nodes in each level.  

  First initialize the queue with the root node, and declare an empty result list to store the averages of nodes in each level.
  Then, use a while loop to traverse through each node (condition: if len of queue is greater than 0).
  initialize the length variable to keep track of how many nodes in each level, and declare a temp variable to store the sum of nodes in each level.
  traverse through the nodes in each level (based on the length of queue) and add values to the temp variable.
  After the inner loop, divide the sum by the numbers of nodes (length of the queue), and then store it to the result list.
  We repeat the steps until there is no node in the queue.
  We return the final result list.
'''

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_level_averages(root):
  if root is None:
    return 0

  result = []
  queue = [root]

  while len(queue) > 0:
    num_of_nodes = len(queue)
    sum = 0
    for i in range(num_of_nodes):
      temp = queue.pop(0)
      sum += temp.val

      if temp.left is not None:
        queue.append(temp.left)
      if temp.right is not None:
        queue.append(temp.right)
    
    result.append(sum / num_of_nodes)

  return result


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.left.right = TreeNode(2)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  root.left.left.left = TreeNode(9)
  root.left.left.right = TreeNode(2)
  print("Level averages are: " + str(find_level_averages(root)))


main()
