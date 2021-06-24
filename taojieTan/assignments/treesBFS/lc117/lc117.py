# Problem Statement #

# Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

from __future__ import print_function

# input: binary tree
# output: an array with nodes
# edge cases: 1. empty tree: return []

'''
  Overview:
  we can apply BFS pattern using a queue to traverse through each node,
  while at each node, we connect the next pointer with the right node at the current level.

  Pseudo code:
  First initialize a queue with the root node
  Use while loop to check if the length of the queue is empty:
  inside the loop, initialize a length variable with the length of queue to represent number of nodes in current level.
  use for loop to traverse each node in the current level,
  pop the first node in the queue, check if current index + 1 is smaller than the for loop length,
  if yes, it means we have right node, we peak the first node in the queue and assign the next pointer with right node;
  if no, it means there isn't any level order successor, we assign the right pointer to None.
  
  Time complexity: O(N), space complexity: O(1) if not counting the queue. 
  
'''

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right, self.next = None, None, None

  # level order traversal using 'next' pointer
  def print_level_order(self):
    nextLevelRoot = self
    while nextLevelRoot:
      current = nextLevelRoot
      nextLevelRoot = None
      while current:
        print(str(current.val) + " ", end='')
        if not nextLevelRoot:
          if current.left:
            nextLevelRoot = current.left
          elif current.right:
            nextLevelRoot = current.right
        current = current.next
      print()


def connect_level_order_siblings(root):
  if root is None:
    return []

  queue = [root]

  while len(queue):
    num_of_nodes = len(queue)
    for i in range(num_of_nodes):
      node = queue.pop(0)
      if i + 1 < num_of_nodes:
        successor = queue[0]
        node.next = successor
      else:
        node.next = None   

      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)

  return root

def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  connect_level_order_siblings(root)

  print("Level order traversal using 'next' pointer: ")
  root.print_level_order()

'''
        12 
      7    1     
    9    10  5
                                12 -> None
               => return      7 -> 1 -> None
                            9 -> 10->5 -> None
'''

main()
