# Problem Statement #

# Given a binary tree and a number S, find all paths from root-to-leaf such that the sum of all the node values of each path equals S.

# Example
# -----
# targetSum = 12
# Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
#      1
#     / \
#    7   9
#  / |   | \
# 4  5   2  7


class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


'''
input: binary tree
output: list of paths list  [[]]

step 1: for this problem I am going to use a helper funtion so i can pass the paths array
step 2: recursively I am going to pass both the left and the right nodes and I will subtract the current value from the sum 
Step 3: for each path i will also pass an array that will contain the values
step 4: check if the sum is correct, if it is append the list
step 5 return the list
'''


def find_paths(root, sum):
    allPaths = []
    path_sum = [root.val]
    # TODO: Write your code here
    if root.left:
        sum_paths(root.left, sum - root.val, path_sum, allPaths)
    if root.right:
        sum_paths(root.right, sum - root.val, path_sum, allPaths)

    return allPaths


def sum_paths(node, target, path_sum, allPaths):
    path_sum.append(node.val)
    if not node.left and not node.right:
        if node.val == target:
            allPaths.append(path_sum)
        else:
            pass
    else:
        if node.left:
            sum_paths(node.left, target - node.val, path_sum, allPaths)
        if node.right:
            sum_paths(node.right, target - node.val, path_sum, allPaths)


def main():

    root = TreeNode(12)
    root.left = TreeNode(7)
    root.right = TreeNode(1)
    root.left.left = TreeNode(4)
    root.right.left = TreeNode(10)
    root.right.right = TreeNode(5)
    sum = 23
    print("Tree paths with sum " + str(sum) +
          ": " + str(find_paths(root, sum)))


main()
