# Problem Statement #

# Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

# input: a binary tree
# output: the minimum depth of tree
# edge cases: 1. empty tree => return 0
#             2. root without child => return 1

'''
        12                                   12 
      7    1                               7    1
         10  5   ==> return 2            9    10  5
                                             11             ==> return 3
'''

'''
  overview: 
  We can apply BFS traversal pattern using queue to find the minimum depth of the tree.
  When traversing each level, we check if each node has both left and right children, 
  if no, we found the minimum depth and just return the depth counter;
  if yes, we store the left node or right node to the queue and keep traversing the tree until we reach the last level of tree (when queue is empty).

  pseudo code: 
  First declare and initialize a queue with root node, and a minimum depth counter with 1.

  while length of queue is not empty, 
  we initialize a length variable with the length of queue: length = len(queue)

  use a for loop from 0 to length, 
  initialize a temp variable with the first node in the queue, 
  if temp.left and temp.right are both None, we return the minimum depth counter.
  if temp.left or temp.right is not None, store them into queue

  when finish the for loop, increment depth counter by 1.
'''
class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_minimum_depth(root):
  if root is None: 
    return 0

  queue = [root]
  min_depth = 1

  while len(queue):
    length = len(queue)
    
    for i in range(length):
      temp = queue.pop(0)
      if temp.left is None and temp.right is None:
        return min_depth
      if temp.left:
        queue.append(temp.left)
      if temp.right:
        queue.append(temp.right)
    
    min_depth += 1
  
  return -1


def main():
  root = TreeNode(12)
  print("Tree Minimum Depth: " + str(find_minimum_depth(root)))
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree Minimum Depth: " + str(find_minimum_depth(root)))
  root.left.left = TreeNode(9)
  root.right.left.left = TreeNode(11)
  print("Tree Minimum Depth: " + str(find_minimum_depth(root)))

  root1 = None
  print("Tree Minimum Depth: " + str(find_minimum_depth(root1)))
main()
