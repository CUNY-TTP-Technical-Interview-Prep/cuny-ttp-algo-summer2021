# Problem#

# Given a binary tree, find its maximum depth (or height).

# Edge cases:

# if the root is null --> return 0

# We initialize a queue and set the root
# We initialize a max depth variable and set it to 0
# because at first out depth is null till we have something in the root
# then we'll check every node for its left and right chield
# at the end we increment the max depth
# and return the depth of the tree


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None


def find_maximum_depth(root):
    # Write Code Here
    maxDepth = 0
    levels = [[root]]

    if(root is None):
        return 0

    while levels:
        node_next = []
        level = levels.pop()

        for node in level:
            if node.left:
                node_next.append(node.left)
            if node.right:
                node_next.append(node.right)

        if len(node_next) > 0:

            levels.append(node_next)

        maxDepth += 1

    return maxDepth


def main():
    root = TreeNode(12)
    root.left = TreeNode(7)
    root.right = TreeNode(1)
    root.right.left = TreeNode(10)
    root.right.right = TreeNode(5)
    print("Tree Maximum Depth: " + str(find_maximum_depth(root)))
    root.left.left = TreeNode(9)
    root.right.left.left = TreeNode(11)
    print("Tree Maximum Depth: " + str(find_maximum_depth(root)))


main()
