# Problem Statement #

# Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

# input: a binary tree
# output: an array with all the nodes in zigzag level order
# edge cases: 1. empty tree: => return []
#             2. root without child => return [the root] 

'''
          12
      7        1
   9    2   10   5          ==> return [[12], [1, 7], [9, 2, 10, 5], [17, 20, 3, 6]]
 6  3     20 17
'''

''' 
  We can apply BFS pattern using queue to store every node from right to left, 
  and then use deque collections to append each node value to the left or right based on the level.
  If it is odd level, we append each node value at the beginning of deque; 
  otherwise, append at the end of the deque.
  At the end, we will get result list with zigzag level order

  Pseudo code:
  First, we declare and initialize a queue with root node, and a level variable with 1.

  While queue is not empty, we initialize a length variable representing numbers of node in current level,
  and a deque object to store each node in current level.  

  for each node in this level, we pop the first node from queue, and check if it has left or right children.
  We store the right child first and then left child to the queue. 
  Then we check if the current level is even or odd, 
  if even, we append each value to the end of deque;
  else, we append left the value to the deque.

  When finish the for loop, we append the deque to result list.
  When finish traversing all the nodes (when length of queue is null), we will get the final result.
''' 

from collections import deque

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None

def traverse(root):
  if root is None:
    return []

  result = []
  queue = [root]
  level = 1

  while len(queue):
    num_of_nodes = len(queue)
    temp = deque()

    for i in range(num_of_nodes):
      node = queue.pop(0)
      if level % 2 == 0:
        temp.append(node.val)
      else:
        temp.appendleft(node.val)

      if node.right:
        queue.append(node.right)
      if node.left:
        queue.append(node.left)
    
    level += 1
    result.append(temp)
  
  return result


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  root.right.left.left = TreeNode(20)
  root.right.left.right = TreeNode(17)
  print("Zigzag traversal: " + str(traverse(root)))
  
#  ==> return [[12], [1, 7], [9, 10, 5], [17, 20]]

main()



# Solution
# -----
# def traverse(root):
# 	if not root: return []
# 	queue = collections.deque([root])
# 	res = []
# 	even_level = False
# 	while queue:
# 		n = len(queue)
# 		level = []
# 		for _ in range(n):
# 			node = queue.popleft()
# 			level.append(node.val)
# 			if node.left:
# 				queue.append(node.left)
# 			if node.right:
# 				queue.append(node.right)
# 		if even_level:
# 			res.append(level[::-1])
# 		else:
# 			res.append(level)
# 		even_level = not even_level
# 	return res

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
