# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal. 
# You should populate the values of all nodes of each level from left to right in separate sub-arrays.
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

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


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
