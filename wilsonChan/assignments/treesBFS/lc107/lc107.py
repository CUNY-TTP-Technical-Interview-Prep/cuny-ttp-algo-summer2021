# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal 
# in reverse order, i.e., the lowest level comes first. You should populate the values of 
# all nodes in each level from left to right in separate sub-arrays.

'''

Given:
-populate binary tree

Result:
-reverse the order of the tree


EXAMPLE:
          [12]                5
        [7]   [1]           9    10
        [9]  [10] [5]       7 1   12

          [[12],[7,1],[5,10,9]]
          [[5,10,9],[7,1],[12]]        #desired output




Variables:
-array (result/output)
-root_array []
-left
-right
-current_level_array
-queue



STEPS:
-initialize the reversed_array (result)
-conditional that determines whether there is an existing binary tree/nodes       

-conditional that loops through the tree/nodes to determine its length       (while)
    -initialize current_level_array to 0
    -(for loop)
      -initialize the root_array (starting point)
      -initialize left and right positions
          -if conditional to check if left and right nodes exist


            -swap between left and right nodes and vice versa
                -push/append the swapped values into the reversed_array (output)

'''

from collections import deque

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None

def traverse(root):
  # TODO: Write your code here

  if not root:        #Edge case to determine whether root/tree exists
    return []

  queue = [root]
  reversed_array = []

  while len(queue) != 0:
    current_array = []

    for i in range(len(queue)):
      temp = queue.pop(0)
      current_array. append(temp.val)
      if temp.left != None:
        queue.append(temp.left)
      if temp.right != None:
        queue.append(temp.right)
    reversed_array.insert(0, current_array)

  return reversed_array



### not working / unresolved syntax ###
#Using deque with collections module

  # if not root:
  #   return []

  # reversed_array = []
  # q = deque([root, 0])

  # while(q):
  #   n,l = q.popleft()         #remove element from left side of deque
  #   if len(reversed_array) < l+1:
  #     reversed_array.append([])
  #   reversed_array[l].append(n.val)
  #   if n.left:
  #     q.append((n.left, l+1))
  #   if n.right:
  #     q.append((n.right), l+1)

  # return reversed_array[::-1]

#Using deque with collections module


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Reverse level order traversal: " + str(traverse(root)))


main()


# Solution
# -----
# def traverse(root):
#   result = deque()
#   if root is None:
#     return result

#   queue = deque()
#   queue.append(root)
#   while queue:
#     levelSize = len(queue)
#     currentLevel = []
#     for _ in range(levelSize):
#       currentNode = queue.popleft()
#       # add the node to the current level
#       currentLevel.append(currentNode.val)
#       # insert the children of current node in the queue
#       if currentNode.left:
#         queue.append(currentNode.left)
#       if currentNode.right:
#         queue.append(currentNode.right)

#     result.appendleft(currentLevel)

#   return result

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
