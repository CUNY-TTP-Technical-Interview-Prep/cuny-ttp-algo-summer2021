# Problem Statement #

# Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

# If the total number of nodes in the LinkedList is even, return the second middle node.

# Input: given the head of LL that doesn't contains cycle
# return the middle node of LL
# As we know about the fast and slow pointer, fast pointer is twice as fast as the slow pointer, 
#   when fast pointer reach the null, then the slow pointer is position at the middle node
# intialize fast and slow as the head 
# while fast and fast.next != null, we want to increment the fast and slow pointer
# until outside of the while loop, we return the slow pointer
# ex: 1-2-3-4-5-6 when the total number of nodes in this LL is even
#   fast: 1-3-5-null
#   slow: 1-2-3-4
# when fast is position at null, slow is position at 4, which is the second middle node

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next


def find_middle_of_linked_list(head):
  slow = head
  fast = head
  while(fast != None and fast.next != None):
    fast = fast.next.next
    slow = slow.next
  return slow


def main():
  head = Node(1)
  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)

  print("Middle Node: " + str(find_middle_of_linked_list(head).value))

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
