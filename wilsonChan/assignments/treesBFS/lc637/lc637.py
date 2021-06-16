# Problem Statement #

# Given a binary tree, populate an array to represent 
# the averages of all of its levels.

'''
Given:
-tree with nodes on each level

Result:
-average of all levels in binary tree




EXAMPLE:
        [12]               #(level 1) sum: 12 | average: 12/1 = 12
    [7]       [1]          #(level 2) sum: 8  | average: 8/2 = 4
  [9] [2]   [10] [5]       #(level 3) sum: 26 | average: 26/4 = 6.5

OUTPUT: [[12], [4], [6.5]]



Variables
-queue = []
-current node
-calculate the average (takes current level and add up the values / divide by the number of nodes in that level)
  -(running number (all nodes) / avg size)
-sum
-count nodes in current level



STEPS / TASKS:
-Declare queue to store the values from each level

-While loop to check whether there are nodes within the array to loop through            (check if nodes exist at all)
    -Initialize a variable (***current_node and sum***) to keep track of what position we're on
    -for loop (queue.length)        (iterate through each length)
      -check for total of nodes within current level
      -add the values given by each node
        -find average: add the value of each nodes on each level and divide by the total length of each level
      -iterate through next level after going through current level



Edge Case: 
-Check whether there is a root node or other nodes
  -If empty, return empty array []

'''


class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_level_averages(root):
  # TODO: Write your code here

  #edge case for empty tree
  if not root:
    return []

  queue = []

  current = [root]        #starting point

  while current:
    queue.append(current)        #adds current root to queue []
    current = []
    for node in queue[-1]:       #q[-1] represents most recent level added to queue []
      if node.left:
        current.append(node.left)

      if node.right:
        current.append(node.right)

  #value of node -> current -> queue
  values = [ [node.val for node in current] for current in queue ]

  return( [sum(level)/len(level) for level in values])


####Alternative Shorter Solution####
  # result = []          #stores the average value for each level 
  # queue = [root]       #starting point
  # while(queue):

  #   #finds the average of current node
  #   current_average = sum( (node.val for node in queue if node)) / len(queue)

  #   #adds the current_average to result []
  #   result.append ( current_average )

  #   #update next level
  #   next_level_queue = [ child for node in  queue for child in (node.left, node.right) if child ]
    
  #   #update queue as next level
  #   queue = next_level_queue

  # return result

  #Complexity:
    #Time: O(log n)
    #Space: O(n)
####Alternative Shorter Solution####

############################################################

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
