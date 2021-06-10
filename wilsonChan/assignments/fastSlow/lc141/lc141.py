# Problem Statement #

# Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

'''

***Works on leetcode***

NameError: name 'has_cycle' is not defined



Variables:
-slow pointer (hop once)
-fast pointer (hop twice)


Steps:
-Initialize both slow pointer and fast pointer to head
-Use while loop to increment slow by one and increment fast by two
-When slow pointer = fast pointer, a loop has been made

'''



class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next


  def has_cycle(head):
  # TODO: Write your code here

    slow, fast = head, head

    while(fast and fast.next):
      slow = slow.next
      fast = fast.next.next
      
      if(slow == fast):
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
