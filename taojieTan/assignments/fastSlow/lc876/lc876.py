# Problem Statement #

# Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

# If the total number of nodes in the LinkedList is even, return the second middle node.

# input: a singly linkedlist
# output: the middle node
# edge cases: 1. empty linkedlist => return None
#             2. only one node => return the node
# 1 -> 2 -> 3 -> 4 -> 5  => return 3 
# 1 -> 2 -> 3 -> 4    => return 3

''' 
  We can use fast and slow pointers to traverse through the linkedlist.
  Fast pointer takes two steps at a time while slow pointer takes one step. 
  Since they all start from head, when they traverse, fast pointer will always be twice as fast as slow pointer.
  When fast pointer hits the end of the linkedlist, slow pointer will point to the middle node.

  We first initialize two pointers, fast and slow, both pointing to head.
  We use a while loop to traverse the linkedlist, fast = fast.next.next, and slow = slow.next
  while fast is not pointing to null, we keep looping through the linkedlist
  When finish the loop, we return the slow pointer as the middle node. 
'''

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next


def find_middle_of_linked_list(head):
  # TODO: Write your code here

  if head is None:
    return None

  fast, slow = head, head

  while fast and fast.next:
    fast = fast.next.next
    slow = slow.next

  return slow


def main():

  # case where there is only one node in the linkedlist
  head = Node(1)
  print("Middle Node: " + str(find_middle_of_linked_list(head).value))

  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)

  print("Middle Node: " + str(find_middle_of_linked_list(head).value))

  # case where the number of nodes is even
  head.next.next.next.next.next = Node(6)
  print("Middle Node: " + str(find_middle_of_linked_list(head).value))

  head.next.next.next.next.next.next = Node(7)
  print("Middle Node: " + str(find_middle_of_linked_list(head).value))


main()


# Solution
# -----
# def find_middle_of_linked_list(head):
#   slow = head
#   fast = head
#   while (fast is not None and fast.next is not None):
#     slow = slow.next
#     fast = fast.next.next
#   return slow



# -----
# Time complexity #
# The above algorithm will have a time complexity of O(N) where ‘N’ is the number of nodes in the LinkedList.

# Space complexity #
# The algorithm runs in constant space O(1).
