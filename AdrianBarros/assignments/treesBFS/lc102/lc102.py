# Problem Statement #

# Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None


'''
input: bi tree
output: an array of arrays of all the node lv/lv left to right 

step1: traverse each level of the tree
step2: for each node well keep track each in a queue
step3: if the whole lv its inside the queue, pushing the next from the left
        added step: pop the respective node inside an array 
step4: every time we loop we are going to make another loop to keep track of the inner arrays
step5: push a currect array into the result and repeat
final return result array
'''


def traverse(root):
    result = []
    # TODO: Write your code here
    queue = []
    queue.append(root)
    while len(queue) > 0:
        lv = []
        counter = len(queue)
        # get to add the correct level inside of a inside array
        while counter > 0:
            if queue[0].left:
                queue.append(queue[0].left)
            if queue[0].right:
                queue.append(queue[0].right)
            value = queue.pop(0)
            lv.append(value.val)
            counter -= 1
        result.append(lv)

    return result


'''
time comp: we traverse every node once, O(n) n-> number of nodes in th tree
space comp: because of the used queue, it will contain at most the number of nodes in th eO()
'''


def main():
    root = TreeNode(12)
    root.left = TreeNode(7)
    root.right = TreeNode(1)
    root.left.left = TreeNode(9)
    root.right.left = TreeNode(10)
    root.right.right = TreeNode(5)
    print("Level order traversal: " + str(traverse(root)))

    '''
        12 
      7    1 <- lv2
    9    10  5    
  [1, 9]

  [[12], [7, 1], [9, 10, 5]] expected response
  
  '''


main()


# Solution
# -----
# generate queue and append root to queue
# while there are nodes in the queue,
# iterate through the number of nodes in the queue
# (this is the number of nodes in the next level)
# pop queue(0), add queue(0).val to current ans list and append queue(0)'s children to queue
# append ans to final_list and reset ans = []

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
# The time complexity of the above algorithm is O(N), where N is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
