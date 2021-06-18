# Problem Statement #

# Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None


def find_level_averages(root):

    result = []
    queue = ([root])

    while queue:
        level = []

        for i in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

        result.append(sum(level)/len(level))

    return result


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
