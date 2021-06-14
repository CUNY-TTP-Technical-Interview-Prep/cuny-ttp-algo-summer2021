# Problem Statement #

# Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

# We assume p is always smaller or equal to q and q is always smaller or eqaul to the length of linkedlist.
# input: the head of a linkedlist, two nodes
# output: the new head of a linkedlist
# edge case: 1. empty linkedlist => None
#            2. only one node => return head 
#            3. q - p is equal to the length of linkedlist => reverse the whole linkedlist
#            4. p equals q => return original linkedlist

# 3 -> 1 -> 0 -> 2 -> 6 , (p = 2, q = 4)   =>  3 -> 2 -> 0 -> 1 -> 6


''' 
  We need two pointers variable (prev and curr) to keep track of the nodes before and at position p respectively, 
  so that after reversing the sublist, we can use prev pointer pointing to the head of the reversed sublist.

  Then we reverse the sublist in the range of q - p + 1. 
  We will use another three pointers ( prev, curr, next ) to keep track of each pair and reverse them. 
  After reversing the sublist, next will point to position q. 
  Since we have two pointers that remember the node before (last_node_before_p) and at (first_node_of_original_sublist) position p, 
  we will use last_node_before_p to connect the head of reversed sublist, and first_node_of_original_sublist to connect the next pointer (at position q).

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


def reverse_sub_list(head, p, q):
  # TODO: Write your code here
  if head == None or head.next == None or p == q:
    return head

  prev, curr = None, head
  
  i = 0
  while i < p - 1 and curr is not None:
    prev = curr
    curr = curr.next
    i += 1

  last_node_before_p = prev  
  first_node_of_original_sub_list = curr  
  next = curr

  i = 0
  while next is not None and i < (q - p + 1):
    next = curr.next
    curr.next = prev
    prev = curr 
    curr = next 
    i += 1

  # the condition checks if p is at position 1
  if last_node_before_p is not None and next is not None:
    last_node_before_p.next = prev 
  else:
    head = prev

  first_node_of_original_sub_list.next = next

  return head

def main():
  head = Node(3)
  head.next = Node(1)
  head.next.next = Node(0)
  head.next.next.next = Node(2)
  head.next.next.next.next = Node(6)
  head.next.next.next.next.next = Node(7)
  head.next.next.next.next.next.next = Node(4)
  print("Nodes of original LinkedList are: ", end='')
  head.print_list()
  result = reverse_sub_list(head, 2, 5)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()

'''
 some edge cases: 
  # case where there is only one node
  head = Node(3)
  result = reverse_sub_list(head, 1, 1)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()

  # case where p is at the first node
  result = reverse_sub_list(head, 1, 6)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()

  # case where q - p equals the length of linkedlist
  result = reverse_sub_list(head, 1, 7)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()

  # case where q = p
  result = reverse_sub_list(head, 5, 5)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()

'''
main()



# Solution
# -----
# def reverse_sub_list(head, p, q):
#   if p == q:
#     return head

#   # after skipping 'p-1' nodes, current will point to 'p'th node
#   current, previous = head, None
#   i = 0
#   while current is not None and i < p - 1:
#     previous = current
#     current = current.next
#     i += 1

#   # we are interested in three parts of the LinkedList, the part before index 'p',
#   # the part between 'p' and 'q', and the part after index 'q'
#   last_node_of_first_part = previous
#   # after reversing the LinkedList 'current' will become the last node of the sub-list
#   last_node_of_sub_list = current
#   next = None  # will be used to temporarily store the next node

#   i = 0
#   # reverse nodes between 'p' and 'q'
#   while current is not None and i < q - p + 1:
#     next = current.next
#     current.next = previous
#     previous = current
#     current = next
#     i += 1

#   # connect with the first part
#   if last_node_of_first_part is not None:
#     # 'previous' is now the first node of the sub-list
#     last_node_of_first_part.next = previous
#   # this means p == 1 i.e., we are changing the first node (head) of the LinkedList
#   else:
#     head = previous

#   # connect with the last part
#   last_node_of_sub_list.next = current
#   return head

# -----

# Time complexity #
# The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

# Space complexity #
# We only used constant space, therefore, the space complexity of our algorithm is O(1).
