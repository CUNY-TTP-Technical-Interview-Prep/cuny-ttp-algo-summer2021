# Problem Statement #

# Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

# edge case: return false if there is only one node
# based on the slow fast pattern - if there is a loop, fast will continue to loop around and end up behind slow.
# once it is behind slow, it will be either 1 step behind or 2 steps behind. If it is 1 step behind, it will catch
# behind slow, at the next iteration, fast == slow. 
# if it is 2 steps behind, it will catch up to slow in 2 iterations and fast will == slow.
# in both of these instances, the function will return true.
# if there is no loop, fast will exit linked list first and function will return false.
# pseudo code: initialize slow and fast and point them both to the head of the linked list
# use a while loop to test if fast == none or if fast.next == none, test if slow == fast
# once slow == fast, return true, otherwise return false
#

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next


def has_cycle(head):
  slow, fast = head, head
  while fast is not None and fast.next is not None:
    slow = slow.next
    fast = fast.next.next
    if fast == slow:
      return True
  return False


def main():
  head = Node(1)
  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)
  head.next.next.next.next.next = Node(6)
  print("LinkedList has cycle: " + str(has_cycle(head)))

  head.next.next.next.next.next.next = head.next.next
  print("LinkedList has cycle: " + str(has_cycle(head)))

  head.next.next.next.next.next.next = head.next.next.next
  print("LinkedList has cycle: " + str(has_cycle(head)))


main()

# Solution
# -----
# def has_cycle(head):
#   slow, fast = head, head
#   while fast is not None and fast.next is not None:
#     fast = fast.next.next
#     slow = slow.next
#     if slow == fast:
#       return True  # found the cycle
#   return False

# -----

# Time Complexity #
# As we have concluded above, once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

# Space Complexity #
# The algorithm runs in constant space O(1).
