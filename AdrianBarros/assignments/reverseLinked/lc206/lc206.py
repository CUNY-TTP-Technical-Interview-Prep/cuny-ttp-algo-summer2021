# Problem Statement #

# Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

from __future__ import print_function


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def print_list(self):
        temp = self
        while temp is not None:
            print(temp.value, end=" ")
            temp = temp.next
        print()


'''
input: linklist
output: reversed linkedlist

 declare three pointers current, previous and next
 starting prevoius at Null and the others in the head 
 we loop until we reach the end
 for each value move next to the next node, point current to the previous and then current to the next node
 at the end we return prev because that is our pointer to the last node
'''


def reverse(head):
    # TODO: Write your code here
    prev = None
    curr = head
    next = head
    while curr != None:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    return prev


def main():
    head = Node(2)
    head.next = Node(4)
    head.next.next = Node(6)
    head.next.next.next = Node(8)
    head.next.next.next.next = Node(10)

    print("Nodes of original LinkedList are: ", end='')
    head.print_list()
    result = reverse(head)
    print("Nodes of reversed LinkedList are: ", end='')
    result.print_list()


main()


# Solution
# -----
# def reverse(head):
#   previous, current, next = None, head, None
#   while current is not None:
#     next = current.next  # temporarily store the next node
#     current.next = previous  # reverse the current node
#     previous = current  # before we move to the next node, point previous to the current node
#     current = next  # move on the next node
#   return previous

# -----

# Time complexity #
# The time complexity of our algorithm will be O(N) where N is the total number of nodes in the LinkedList.

# Space complexity #
# We only used constant space, therefore, the space complexity of our algorithm is O(1).
