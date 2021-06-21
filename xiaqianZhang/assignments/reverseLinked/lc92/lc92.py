# Problem Statement #

# Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

# Attempt 1
# Input: head of LL and two position p, q        2-5-1-0-4 p = 2 q = 4
# Output: return the LL after reverse the nodes from position p to q   2-0-1-5-4
# Edge case: if p is the same as the q, then we only return the head original LL

# 1st: the nodes before the p
# 2nd: the nodes that need to reverse between p and q
# 3rd: the nodes after the q

# initliaze the prev and the current variables, prev = None, current is head
# loop until we reach the node where positioned at p: prev is now the currenr, and current is current.next. 
#   There by we could find where's the node before the position p
# we want to initliaze two variables that kept the orignal position of prev and current, sicner later we will modified it
  # originalPrev = prev
  # originalCurr = current
# we want to reversed the nodes between the position p and q
  # initialize counter = 0, next = None
  # While the current is not None and counter is less than the numbers of nodes between p and q (we don't want out of boundary)
  # next = current.next, current.next = prev, prev = current, current = next

# connected the nodes of the reversed with the nodes before p and after q
# check if the originalPrev is head? yes -> head = prev, no -> originalPrev = prev

# for after the p: originalCurr.next = next
# return the head
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


# Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

# Attempt 2
# Input: head of LL and position p and q
# Output: updated LL after reversed the nodes from position p to q
'''
original LL: 2 -> 3 -> 5 -> 6 -> 8
p = 2
q = 4
updated LL: 2 -> 6 -> 5 -> 3 -> 8
'''
# Edge case: if we have same p and q position, then it will end up at the same nodes, and there's nothing we need to do since there's only 1 node to reversed
# Distribute into three sections
#   1. nodes before p 
#   2. nodes between p and q that we need to reversed 
#   3. nodes after the q
# intialize two variables, prev = None, and current is head. This is used for looping through the LL to find the nodes before p and for revsersing
# First by find the nodes before p: counter = 0 while loop while the current is not reaching till the end of the LL, when its not null
    # And the counter is less than the p, since we want to find the nodes that position 1 nodes before the p
    # Within this while loop we want to constant update prev and current until they reached to the nodes before p
    # prev is the current, and current is current.next, then prev is the nodes 1 position before p, and current is position at the p
    # continue the counter been incremented 
# initliaze the store the original nodes before p and the nodes of the p.
    # Since the nodes before p needs to connect to head of the reversed LL
    # And we need to kept the original nodes at position p since we want it to connected to the nodes after the q
# intiliaze the counter as 0 again for doing reversed from p to q, and variable next to store the original current.next value
# While loop that while the current is not null, and when the counter is less than the difference of q-p+1 
  # ex: q = 4, p = 2, there's 3 nodes in between, q-p = 2, so we need to add 1 
  # store the original current.next value into the next
  # current.next now becomes prev that makes the reversed
  # prev need to be incremented for the next reversed loop
  # current updated to next as the original current.next
  # increment the counter for kept the loop going
# After the reversed, we want to connects the reversed nodes with the nodes before p and after q
    # connect nodes before p
      # if the original nodes that stored in prev is not null, (it is the node before p): the head of reversed node is the new head
      # if it is null then the head is the prev
    # connect nodes after q
      # original nodes at position p 's next node should be the nodes after q: originalnode.next = current
# then return the head

def reverse_sub_list(head, p, q):
  if p == q:
    return head
  
  prev = None
  current = head

  counter = 0
  while current is not None and counter < p - 1:
    prev = current
    current = current.next
    counter+=1
  
  originalPrev = prev
  originalCurrent = current

  counter = 0
  next = None
  while current is not None and counter < q - p + 1:
    next = current.next
    current.next = prev
    prev = current
    current = next
    counter+=1

  if originalPrev is not None:
    originalPrev.next = prev
  else:
    head = prev

  originalCurrent.next = current
  return head





# def reverse_sub_list(head, p, q):
#   if p == q:
#     return head
  
#   current = head
#   prev = None

#   i = 0
#   while current is not None and i < (p - 1):
#     prev = current
#     current = current.next
#     i +=1

#   originalPrev = prev #2
#   originalCurrent = current #5

#   next = None

#   i = 0
#   while current is not None and i < (q - p + 1):
#     next = current.next
#     current.next = prev
#     prev = current
#     current = next
#     i+=1

#   # conencted the nodes before the p
#   if originalPrev is None:
#     head = prev
#   else:
#     originalPrev.next = prev

#   # connected the nodes after q
#   originalCurrent.next = current
#   return head

# Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

# Attempt 2



def main():
  head = Node(1)
  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)

  print("Nodes of original LinkedList are: ", end='')
  head.print_list()
  result = reverse_sub_list(head, 2, 4)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()


main()



# Solution
# -----
# def reverse_sub_list(head, p, q):
#   if p == q:
#     return head

#   # after skipping 'p-1' nodes, current will point to 'p'th node
#   current, previous = head, None
#   i = 0 # counter = 0
#   while current is not None and i < p - 1: # until the position p
#     previous = current #this is pointing to the position before p
#     current = current.next #this is pointing to the position of p
#     i += 1

#   # we are interested in three parts of the LinkedList, the part before index 'p',
#   # Since we want to intialize and later used for connected the LL part before the p with the reversed part between p and q
#   # the part between 'p' and 'q', and the part after index 'q'
#   last_node_of_first_part = previous
#   # after reversing the LinkedList 'current' will become the last node of the sub-list
#   last_node_of_sub_list = current
#   next = None  # will be used to temporarily store the next node

#   i = 0
#   # reverse nodes between 'p' and 'q'
#   while current is not None and i < q - p + 1: #count that tells the computer outside of this bounadry, we don't reverse
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

#   # connect with the last part, the part after the q, we want to connect the reversed p and q with the list after the q
#   last_node_of_sub_list.next = current
#   return head

# -----

# Time complexity #
# The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

# Space complexity #
# We only used constant space, therefore, the space complexity of our algorithm is O(1).
