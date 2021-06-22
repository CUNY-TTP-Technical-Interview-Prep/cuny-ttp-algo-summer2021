# Problem Statement #

# Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

#            (  1  )
#           /       \
#       (  2  )    (  3  )
#       /     \       \
# (  4  )  (  5  )   (  6  )

# Given Node: 3
# Level Order Successor: 4


#             (  12  )
#            /       \
#       (  7  )    (  1  )
#       /            /    \
#  (  9  )       (  10  )(  5  )

# Given Node: 9
# Level Order Successor: 10

'''
  edge cases: 1. empty tree => return None
              2. cannot find the successor => return None

  We can apply BFS pattern using a queue to traverse through every node.
  When we found the given target node, next node in the queue will be the successor. 
  We can use a variable (let's call it visited) to keep track of whether the target node has been visited or not. 
  If visited is true, then we store the current node as the successor and immediately break out the loop.

'''

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_successor(root, key):
  if root is None:
    return None

  visited = False
  queue = [root]

  while len(queue):
    num_of_nodes = len(queue)
    for i in range(num_of_nodes):
      node = queue.pop(0)
      if int(node.val) == key and visited is False:
        visited = True
      elif visited is True:
        return node
      
      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)

  return None


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  result = find_successor(root, 12)
  if result:
    print(result.val)
  result = find_successor(root, 9)
  if result:
    print(result.val)

main()
