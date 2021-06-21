# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal. 
# You should populate the values of all nodes of each level from left to right in separate sub-arrays.

# Attempt 1
# Output with the given test case: [[12], [7, 1],  [9, 10, 5]]
# declare an array for the queue, initliaze it with the root node
# edge case: if there's no root node, return the result

# while the queue have some nodes in it, we want to loop through the queue store the nodes 
# first by store the len of the queue as a variable = queueLen = len(queue) this is saying the numbers of nodes in the queue
# initliaze the empty level array that constantly taking the input 
# loop through the queue until len of the queue, until out of boundary
    # pop out its current node (start of by the root node which is 12)
    # check if this current node have left and right node, if so push those nodes
    # add the values of current node into the level array
# add the level array values into the result array
# return the result

# Attempt 2:
# Given a binary tree, populate an array to represent its level-by-level traversal. 
# You should populate the values of all nodes of each level from left to right in separate sub-arrays.
'''
input: given a binary tree
         12
         /\
        7  1
       /   /\
      9   10 5
output: return all nodes by its level from left to right 
        [[12], [7, 1], [9, 10, 5]]

initialize the empty result array that we want to return
initialize the queue that stores the nodes level by level, initliaze with a root queue = [root]
loop that while the length of queue is greater than 0, we continue looping doing the following
  - initliaze a variable to store the size of the level, that is also the size of the queue
  - initialize a empty array that gets push of the each level nodes's values newLevel = []
  Then loop through each nodes in the queues (nodes in each level):
    - initliaze the current node that we want to pop out
    - constant check if the current nodes that we are looking have any left and right children, if so we push the nodes
    - push the current node's value into the newLevel array
  push the newLevel array into the results array
return the result array

Edge cases: if the root is null, then return an empty array

    

'''
# Attempt 3:
# Given a binary tree, populate an array to represent its level-by-level traversal. 
# You should populate the values of all nodes of each level from left to right in separate sub-arrays.
'''
input: given a binary tree
         12
         /\
        7  1
       /   /\
      9   10 5
output: return all nodes by its level from left to right 
        [[12], [7, 1], [9, 10, 5]]

edge cases: if the root is null then we return empty array
initialize the empty result array
init the queue array to store the current level's nodes, init as array that contains root
while loop while the length of the queue is greater than 0, that means there's still nodes that haven't been go over in the tree
  initialize the length of the queue stored for later usage as the size of the current level
  initialize an empty array to store the values of the nodes in each level = newLevel
  for loop that go through the length of the queue, which is the current level size:
      initialize the current node that pop out of the queue
      check if the current node have left and right children, if so we push those children nodes into the queue
      push the value of the current node into the newLevel array
  after the for loop, we push the newLevel array into the results array
return the result array
'''
class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None

def traverse(root):
  result = []
  if root is None:
    return []
  
  queue = [root]
  while len(queue) > 0:
    levelSize = len(queue)
    newLevel = []
    for each in range(levelSize):
      currentNode = queue.pop(0)

      if currentNode.left is not None:
        queue.append(currentNode.left)
      
      if currentNode.right is not None:
        queue.append(currentNode.right)
      
      newLevel.append(currentNode.val)
    result.append(newLevel)
  return result
  
# def traverse(root):
#   result = []
#   if root is None:
#     return []
  
#   queue = [root]
#   while len(queue) > 0:
#     levelSize = len(queue)
#     newLevel = []
#     for each in range(levelSize):
#       popVar = queue.pop(0)

#       if popVar.left is not None:
#         queue.append(popVar.left)
      
#       if popVar.right is not None:
#         queue.append(popVar.right)
      
#       newLevel.append(popVar.val)
#     result.append(newLevel)

#   return result

#----------------------

# def traverse(root):
#   result = []
#   if root == None:
#     return []
  
#   queue = [root] #O(N) space complexity

#   while len(queue) > 0:
#     queueLen = len(queue) #check how many nodes in each level
#     levelArray = [] #space complexity: log(N) since level 0 have 1 node, then level1 have 2 nodes, level2 have at most 4 nodes etc..

#     for each in range(queueLen):
#       popVariable = queue.pop(0) #only index

#       if popVariable.left != None:
#         queue.append(popVariable.left)
      
#       if popVariable.right != None:
#         queue.append(popVariable.right)

#       levelArray.append(popVariable.val) 
    
#     result.append(levelArray)
#   return result #O(N) space complexity
#   #Space complexity: 2 O(N) + o(log N) = O(N)


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Level order traversal: " + str(traverse(root)))


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
