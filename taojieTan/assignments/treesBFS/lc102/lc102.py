# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

# input: a binary tree
# output: a list with all its values
# edge cases: 1. root is null => return []
#             2. root without children => return [ ['root value'] ]

'''
         12
        /  \ 
       7    1
      /    / \ 
     9    10  5 
   return [[12], [7,1], [9, 10, 5] ]
'''

'''
  We will first initialize a list (treat it as queue) with the root node that is used to store each treenode on each level.
  For example, at the root level, we first pop the root node from queue, and check if it has left or right children,
  if yes, we store them in the queue, then store the value of the root node in the result list.
  For the next level, we pop every tree node from list and check if each tree node in the queue has child and store them to the list.
  And at the same time, we store each value of the tree nodes in the result list. 
  We stop when the queue is empty (once we finish the last level of the tree). 
'''

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def traverse(root):
  # TODO: Write your code here
  if root is None:
    return []

  result = []
  queue = [root]

  while len(queue) > 0:
    length = len(queue)
    temp = []
    while length > 0 :
      node = queue.pop(0)
      if node.left is not None:
        queue.append(node.left)
      if node.right is not None:
        queue.append(node.right)
      length -= 1
      temp.append(node.val)

    result.append(temp)

  return result


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Level order traversal: " + str(traverse(root)))

  # case where root has no child
  # root = TreeNode(15)
  # print("Level order traversal: " + str(traverse(root)))

  # case where root is None
  # root = TreeNode(15)
  # print("Level order traversal: " + str(traverse(root)))

main()



# Solution
# -----
#generate queue and append root to queue
  #while there are nodes in the queue,
    #iterate through the number of nodes in the queue
      #(this is the number of nodes in the next level)
        #pop queue(0), add queue(0).val to current ans list and append queue(0)'s children to queue
          #append ans to final_list and reset ans = []

# def traverse(root):
#   if root is None:
#     return root

#   queue = []
#   return_list = []

#   queue.append(root)
#   while len(queue) > 0:
#     ans = []
#     l = len(queue)

#     for l in range(l):
#       node = queue.pop(0)
#       ans.append(node.val)

#       if node.left != None:
#         queue.append(node.left)

#       if node.right != None:
#         queue.append(node.right)
#         return_list.append(ans)

#   return return_list

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
