# Problem Statement #

# Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will 
# represent a number. Find the total sum of all the numbers represented by all paths.

'''

Given:
-binary tree with values

Result:
-find the sum of all the numbers represented by all paths


Example:
Output = 408
Explanation: Sum of all path numbers 17 + 192 + 199
          1
        /   \
      7       9
            /  \
           2    9
###############################
          1
        /    \
      0        1
    /         /  \
  1         6     5

Sum of all path numbers: 101 + 116 + 115 = 332
OUTPUT: 332




Variables to consider:
-left
-right
-root
-stack container
-sum



STEPS:
Approach # 1 (Recursive)
-Initialize the sum_of_path and string (combine path numbers together)
-Create dfs function that traverses through the nodes in the
 binary tree with parameters root and string

  -Three if conditionals
      -If there is no left or right nodes
        -convert the root node into string
	      -convert the string into number and add to sum_of_path
          -(connect the nodes together with a string -> 
            convert string path back to number ->
            add the combined numbers together for the sum)
          -(This conditional needs to be established first in
            order to be called recursively)

      -If left node exist
        -call the dfs function to find the path of left nodes

      -If right node exist
	      -call the dfs function to find the path of right nodes

-Returns the sum of all the paths


Edge case:
If there is no root node
-return empty array []


'''

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def find_sum_of_path_numbers(root):
  # TODO: Write your code here

  #Recursive Approach
  sum_of_path = 0
  string = ''

  if root is None:           #Edge case for no root
    return -1


  def dfs(root, string):
    nonlocal sum_of_path         #brings and retain the value of variable from global into function
    if not (root.left or root.right):
      string += str(root.val)
      sum_of_path += int(string)
      return sum_of_path

    string += str(root.val)

    if root.left:
      dfs(root.left, string)

    if root.right:
      dfs(root.right, string)

  dfs(root, string)
  return sum_of_path



####################################

def main():
  root = TreeNode(1)
  root.left = TreeNode(0)
  root.right = TreeNode(1)
  root.left.left = TreeNode(1)
  root.right.left = TreeNode(6)
  root.right.right = TreeNode(5)
  print("Total Sum of Path Numbers: " + str(find_sum_of_path_numbers(root)))


#Added test cases
  root = TreeNode(0)
  root.right = TreeNode(5)
  root.right.right = TreeNode(7)
  root.right.right.right = TreeNode(21)
  print("Total sum of right path numbers: " + str(find_sum_of_path_numbers(root)))

  root = TreeNode(0)
  root.left = TreeNode(10)
  root.left.left = TreeNode(1)
  root.left.left.left = TreeNode(7)
  print("Total sum of left path numbers: " + str(find_sum_of_path_numbers(root)))

main()
