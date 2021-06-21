# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

# input: a binary tree
# output: a list with all the nodes in each level (reverses order)
# edge case: empty tree => return []

'''
            12
          7    1
        9   10  5
      1  5
      return [[1,5], [9, 10, 5], [7,1], [12]]
'''

'''
  We can use a queue to store the nodes in each level, 
  and use the nodes in each level to check if it has left or right child. 
  If yes, store them into the queue, at the same store the value of the node into the result list.
  After traversing all the levels, we can apply the reverse method in python to reverse the result list which then get the reversed order of the result list.

  First declare a queue and initialize it with the root node
  while the queue is not empty, 
  initialize a length variable to store the number of nodes in that level: length = len(queue)
  declare an empty list: currLvl = []
  use a for loop from 0 to length,
  initialize a temp variable with the first node in the queue: temp = queue.pop(0)
  if temp has left or right child, store temp.left or temp.right to the queue
  store temp.val to the currLvl 
  when finish the foor loop, store the  currLvl to result list

  when finish the while loop, use reverse method for the result list and return the list.
'''


from collections import deque

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None

def traverse(root):
  if root is None:
    return []

  result = deque()
  queue = [root]

  while len(queue):
    length = len(queue)
    currLvl = []
    for i in range(length):
      temp = queue.pop(0)

      if temp.left:
        queue.append(temp.left)
      if temp.right:
        queue.append(temp.right)
      
      currLvl.append(temp.val)
    
    result.appendleft(currLvl)

  return result



def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Reverse level order traversal: " + str(traverse(root)))

  root.right.left.left = TreeNode(1)
  root.right.left.right = TreeNode(5)
  print("Reverse level order traversal: " + str(traverse(root)))

  root1 = None
  print("Reverse level order traversal: " + str(traverse(root1)))
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
