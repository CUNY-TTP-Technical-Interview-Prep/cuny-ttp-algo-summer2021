# Problem Statement #

# Given the head of a Singly LinkedList, reverse the LinkedList. 
# Write a function to return the new head of the reversed LinkedList.

'''
Given:
-Head of linked list

Result:
-Reverse the given linked list


Example:
Input: [1] [2] [3] [4] [5] [6]
        H                   T

Output: [6] [5] [4] [3] [2] [1]
         H                   T


Steps / Tasks:
-Initialize the variables previous (None) and current (Head)
-Create a while loop that will proceed when there are existing nodes
  (Visualize zig zag pattern in code)
  -Initialize the next variable to connect with the next node after the head
  -Connected next node to variable previous (create link between variables next and previous)
  -Connect variables previous to current
    -this connection wasn't possible without linking variables next and previous.
  -Connect the variables current to next



Edge case:
-If there is no value in head node or the node after it
  -return head (1st node)


Complexities:
Time: O(n) - The size of the linked list can be any size

Space: O(1) - The given linked list is a fixed size and doesn't change


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

  if not head or not head.next:       #Edge case
    return head

  #Initialization
  previous = None
  current = head

  #Runs when linked list exists
  while current is not None:
    next = current.next
    current.next = previous
    previous = current          #connect after link between next and previous has been established
    current = next

  head = previous

  return head


def main():
  # head = Node(2)
  # head.next = Node(4)
  # head.next.next = Node(6)
  # head.next.next.next = Node(8)
  # head.next.next.next.next = Node(10)

  # print("Nodes of original LinkedList are: ", end='')
  # head.print_list()
  # result = reverse(head)
  # print("Nodes of reversed LinkedList are: ", end='')
  # result.print_list()


#My Example
  head = Node(1)
  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)

  print("Original node: " , end = "")
  head.print_list()

  output = reverse(head)
  print("Reversed node: " , end = "")
  output.print_list()
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
