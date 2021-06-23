# Problem Statement #

# Given a binary tree and a number S, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals S.


class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


'''
input: a binary tree
output: Bool that descrived if there is a sum or not

step 1: I am going to traverse the tree and I am going to use a recursive approach
step 2: I am going to pass the node left, right and will decrease the sum just to see if the remainder it is gonne be equal to the last node
step 3: for each node I am gonna subtract it from the target sum and keep recurcing
step 4: finally I am going to return  if any of them are true and because we just have to say weather or not its the case an OR will do fine
'''


def has_path(root, sum):
    # TODO: Write your code here
    if not root:
        return False
    elif not root.left and not root.right:
        if root.val == sum:
            return True
        else:
            return False
    return has_path(root.left, sum - root.val) or has_path(root.right, sum - root.val)


# def sumTaversal(node, curr_sum, target):

    # curr_sum += node.val
    # if not node.left and not node.right:
    #     if curr_sum == target:
    #         return True
    #     else:
    #         return False
    # if node.left:
    #     sumTaversal(node.left, curr_sum, target)
    # if node.right:
    #     sumTaversal(node.right, curr_sum, target)


def main():

    root = TreeNode(12)
    root.left = TreeNode(7)
    root.right = TreeNode(1)
    root.left.left = TreeNode(9)
    root.right.left = TreeNode(10)
    root.right.right = TreeNode(5)
    print("Tree has path: " + str(has_path(root, 23)))  # true
    print("Tree has path: " + str(has_path(root, 16)))  # false
    print("Tree has path: " + str(has_path(root, 18)))  # true

    '''
            12
          7    1
        9    10  5
 
    '''


main()
