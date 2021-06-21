# Problem Statement #

# Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

# Example
# -----
# targetSum = 12
# Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
#      1
#     / \
#    7   9
#  / |   | \
# 4  5   2  7


# There's a path to each node which reaches a targetSum...
# we need to find all paths that lead to that sum and return them in an array
#
# first we need to node if the root is not null
# edge case:
# if the root is null --> return 0
# otherwise
# we check it's left node and add it to the root node
# then we check left chield again and add it to them sum
# then we compare with the targetSum

# We need to return a list-of-lists
# We need to add each of the leaf nodes that were added to the sum
# to the list-of-lists
# --> only add to the list if the path is equal to the targetSum


class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def find_paths(root, sum):
    allPaths = []
    # TODO: Write your code here
    lists = []
    dfs(root, sum, [], lists)
    return lists


def dfs(root, sum, allPaths, lists):
    if root:
        if not root.left and not root.right and sum == root.val:
            allPaths.append(root.val)
            lists.append(allPaths)
        # .val --> current node's value in tree
        dfs(root.left, sum-root.val, allPaths + [root.val], lists)
        dfs(root.right, sum-root.val, allPaths + [root.val], lists)


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
