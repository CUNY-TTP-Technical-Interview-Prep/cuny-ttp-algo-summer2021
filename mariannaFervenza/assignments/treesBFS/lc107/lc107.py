# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.


# edge cases:

# If the root is null then just return the empty array

# We have an array and we will check for the root
# We have a queue --> which will be an array
# first we need to keep track of the length of the queue
# So we will check the levels array for the root first
# and add it to the queue
# So now the queue looks like [[12]] and it's length is 1
# Then check if the root has any left children
# Since it does we need a list to store the root in
# List = [[12]] and the queue = [[7 1]] and it's length = 2
# then we check the left child (which is 7) for it's children
# and then we check the riht child for it's children and so on
# adding to the queue and list-of-lists


# push -> .append(value) --> add to the queue
# pop -> .pop(0) -->take out of the queue


from collections import deque


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None


def traverse(root):
    # TODO: Write your code here

    if root is None:
        return []
    levels = [[root]]  # queue
    results = []  # final list

    while levels:
        level = levels.pop()  # current node

        result_row = [node.val for node in level]
        # add it to the front of the list so that it returns the list reversed
        results.insert(0, result_row)

        next_level = []
        for node in level:  # check for children
            if node.left:
                next_level.append(node.left)
            if node.right:
                next_level.append(node.right)

        if len(next_level) > 0:

            levels.append(next_level)

    return results


def main():
    root = TreeNode(12)
    root.left = TreeNode(7)
    root.right = TreeNode(1)
    root.left.left = TreeNode(9)
    root.right.left = TreeNode(10)
    root.right.right = TreeNode(5)
    print("Reverse level order traversal: " + str(traverse(root)))


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
