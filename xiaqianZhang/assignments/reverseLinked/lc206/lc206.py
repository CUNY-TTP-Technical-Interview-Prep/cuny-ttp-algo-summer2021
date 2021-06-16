# Problem Statement #

# Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

# input: head of LL
# output: after reverse the LL, we want to return the new head
# edge cases: if the head is null, return null

# initialize three variables that we want to constantly changing and reverse the LL
#       prev = None, current = head, next = None
# while loop that having the condition of while current is not None, if it's not null, that means there's node that need to reach, we need to keep looping
#  next = current.next -> since current will be modified, we want to have a temp variable to kept the orginal current.next
#  current.next = prev -> since in the given example, for the first loop, we want current moves from 1 to null to do the reverse
#  prev = current
#  current = current.next
"""
1st loop                 prev    next/current
            null          1    ->    2    ->     3     ->     5    -> null 
            null   <-     1
2nd loop             current.next  prev    current/next
            null                     2    ->     3     ->     5    -> null 
            null   <-     1    <-    2
"""

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
  if head == None:
    return None
  
  prev = None
  current = head
  next = None

  while current is not None:
    next = current.next
    current.next = prev
    prev = current
    current = next
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
def reverse(head):
  previous, current, next = None, head, None
  while current is not None:
    next = current.next  # temporarily store the next node
    current.next = previous  # reverse the current node
    previous = current  # before we move to the next node, point previous to the current node
    current = next  # move on the next node
  return previous
  
# -----

# Time complexity #
# The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

# Space complexity #
# We only used constant space, therefore, the space complexity of our algorithm is O(1).
