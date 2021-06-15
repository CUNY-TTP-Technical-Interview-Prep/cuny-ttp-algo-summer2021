# Problem Statement #

# Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

# input: a singly LinkedList 
# output: the LinkedList with reversed order
# edge case: 1. empty LinkedList => return None
#            2. 1 node => return the head

'''
 We first declare three pointers to keep track of the previous node, current node, and next node.
 Then initialize previous pointer to be None, and current and next pointers to point to the head and traverse through the LinkedList to reverse all nodes. 
 When we reverse two nodes, we need to make sure before making the node pointing to the previous node, we first use next pointer to keep track of original node pointed by current node,
 and then we make the current node pointing to the node pointed by pre pointer, after that, we update the pre pointer to be cur pointer and cur pointer to be next pointer.
 We keep looping the LinkedList until we hit the end of the list.
'''

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


def reverse(head):
  # TODO: Write your code here
  if head == None:
    return None

  pre, cur, next = None, head, head

  while cur != None:
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next

  return pre


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


  head = Node(2)

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
# The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

# Space complexity #
# We only used constant space, therefore, the space complexity of our algorithm is O(1).
