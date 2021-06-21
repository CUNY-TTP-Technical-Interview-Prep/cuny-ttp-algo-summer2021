# Problem Statement #

# Given a binary tree, populate an array to represent the averages of all of its levels.
# Attempt 1
'''
Input: given a binary tree
         12
         /\
        7  1
       /\   /\
      9  2 10 5
Output: return an array that contains average of each level
        [12, 4, 4.5]
We expected to return as decimal, float

edge cases:
  1. if the level have only one node, then we only need to return that node's val
  2. if root is None, then return empty array

Initalize the queue array that contains root
Init sum variable of each subarray
 while loop while the length of the queue is greater than 0:
   initialize the length of the queue value as the levelSize
   initialize the newLevel array to contains the values of the nodes that gets pop from the queue
   for loop that go through each nodes in the queue, which is loop through each level:
     pop the current node in the queue as a variable
     check if there's left and right children for the current node, if so push those node into the queue
     push the val of the current node into the newLevel array
     for loop within the newLevel array that sum up the values in the current newLevel array
  push the newLevel array sum divides by the length of the queue into the result array
return the result array
'''
class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_level_averages(root):
  if root is None:
    return []

  result = []
  queue = [root]
  while len(queue) > 0:
    levelSize = len(queue)
    Sum = 0
    for each in range(levelSize):
      currentNode = queue.pop(0)
      Sum += currentNode.val
      if currentNode.left is not None:
        queue.append(currentNode.left)
      
      if currentNode.right is not None:
        queue.append(currentNode.right)
    result.append(Sum / levelSize)
  return result


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.left.right = TreeNode(2)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Level averages are: " + str(find_level_averages(root)))


main()
