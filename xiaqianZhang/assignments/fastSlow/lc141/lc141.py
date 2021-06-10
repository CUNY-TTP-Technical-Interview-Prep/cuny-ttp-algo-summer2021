# Problem Statement #

# Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
# Input: linkedlist with distinct objects
# output: Return boolean to check if the Linkedlist contains cycle
# Initialize two pointers: slow, fast = head, head
# while loop that check if fast and fast.next != None
# modified slow = slow.next, fast = fast.next.next
# if slow == fast, that means the LL has a cycle, so we return True
# else: return False

#Attempt 2: 
# Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
# Input: given the head of the LinkedList, where the variables are unique integers
# Output: return boolean variable that tells whether this Linkedlist contains cycle
# Initialize fast and slow pointer as head
# Since the fast pointer is running faster than the slow pointer, if LL doesn't contains cycle, then fast pointer should reach null first
# While fast and fast.next is not null:
#     fast = fast.next.next, slow = slow.next
# if fast == slow: return True
# else: return False

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

def has_cycle(head):
  fast = head
  slow = head
  while (fast != None and fast.next != None):
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      return True
  return False

# def has_cycle(head):
#   slow = head
#   fast = head
#   while(fast != None and fast.next != None):
#     slow = slow.next
#     fast = fast.next.next
#     if (slow == fast):
#       return True
#   return False


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
