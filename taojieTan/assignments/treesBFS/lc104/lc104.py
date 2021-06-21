# Problem#

# Given a binary tree, find its maximum depth (or height).

# input: a binary tree 
# output: the maximum length of the tree
# edge case: 1. empty tree => return 0
#            2. root without child => return 1

'''
          12
        7    1
           10  5      ==> return 3               
'''

''' 
  We can apply BFS traversal paattern to find the maximum length by using a queue to store nodes in each level and check if it has child.
  When finish check nodes in each level, we increment the length by one (length is 1 initially)
  When we reach the last level of tree (when queue is empty), we return the length.

  First declare and initialize a queue with root node, and maximum length counter with 1 
  while the length of queue is not empty, we initialize a length with the length of queue: length = len(queue), 
  use a for loop from 0 to length,
  pop the first node in the queue and to check if the node in this level have left or right child,
  if yes, store them into queue. 
  When finish the for loop, we increment maximum length counter by 1
  when finish the while loop, we will get the final max length and jus return it.
'''

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_maximum_depth(root):
  # Write Code Here
  if root is None:
    return 0

  max_length = 0
  queue = [root]

  while len(queue):
    num_of_nodes = len(queue)
    for i in range(num_of_nodes):
      temp = queue.pop(0)
      if temp.left:
        queue.append(temp.left)
      if temp.right:
        queue.append(temp.right)

    max_length += 1

  return max_length


def main():
  root = TreeNode(12)
  print("Tree Maximum Depth: " + str(find_maximum_depth(root)))
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree Maximum Depth: " + str(find_maximum_depth(root)))
  root.left.left = TreeNode(9)
  root.right.left.left = TreeNode(11)
  print("Tree Maximum Depth: " + str(find_maximum_depth(root)))

  root1 = None
  print("Tree Maximum Depth: " + str(find_maximum_depth(root1)))
main()
