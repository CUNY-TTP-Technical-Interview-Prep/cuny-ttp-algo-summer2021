# Problem Statement #

# Given the head of a Singly LinkedList that contains a cycle, 
# write a function to find the starting node of the cycle.

'''
Given:
-linked list with a head
-parameter contains only head (no need to modify linked list)


Result:
-find the starting node of the cycle


Example / Visual:
[1] [2] [3] [4] [5] [6]
 S -[ ]
 F -[ ]-[ ]



Steps / Tasks:
-Initialize two pointers: slow and fast
  -Since cycle is involved, one pointer would have to move faster than the other
-Any instance when fast and slow pointers meet, identify the starting position in 
 the next cycle

Edge case:
-If there is no head or nothing next to the head
  -return None (null)



Complexities:
Time: O(N)
Space: O(1) - the given linked list is a fixed size and does not ever change

'''


from __future__ import print_function


class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

  def print_list(self):
    temp = self
    while temp is not None:
      print(temp.value, end='')
      temp = temp.next
    print()


def find_cycle_start(head):
  # TODO: Write your code here

  slow, fast = head, head

  if not head or not head.next:       #Edge cases
    return None

  while fast and fast.next:    #fast pointer will always be ahead by one position
    fast = fast.next.next
    slow = slow.next

    if fast == slow:
      break

  if fast == slow:         #ensures that fast pointer is one position further than head
    while fast != head:
      fast = fast.next
      head = head.next
    return head

  else:
    return None


def main():
  head = Node(1)
  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)
  head.next.next.next.next.next = Node(6)

  head.next.next.next.next.next.next = head.next.next
  print("LinkedList cycle start: " + str(find_cycle_start(head).value))

  head.next.next.next.next.next.next = head.next.next.next
  print("LinkedList cycle start: " + str(find_cycle_start(head).value))

  head.next.next.next.next.next.next = head
  print("LinkedList cycle start: " + str(find_cycle_start(head).value))

  #My Example: there are two extra next positions after one full cycle. The
  #next cycle will start on position 2
  head.next.next.next.next.next = head.next.next.next.next.next.next.next
  print("This LinkedList cycle starts at: " + str(find_cycle_start(head).value))

main()





# Solution
# -----
# def find_cycle_start(head):
#   cycle_length = 0
#   # find the LinkedList cycle
#   slow, fast = head, head
#   while (fast is not None and fast.next is not None):
#     fast = fast.next.next
#     slow = slow.next
#     if slow == fast:  # found the cycle
#       cycle_length = calculate_cycle_length(slow)
#       break
#   return find_start(head, cycle_length)


# def calculate_cycle_length(slow):
#   current = slow
#   cycle_length = 0
#   while True:
#     current = current.next
#     cycle_length += 1
#     if current == slow:
#       break
#   return cycle_length


# def find_start(head, cycle_length):
#   pointer1 = head
#   pointer2 = head
#   # move pointer2 ahead 'cycle_length' nodes
#   while cycle_length > 0:
#     pointer2 = pointer2.next
#     cycle_length -= 1
#   # increment both pointers until they meet at the start of the cycle
#   while pointer1 != pointer2:
#     pointer1 = pointer1.next
#     pointer2 = pointer2.next
#   return pointer1

# -----

# Time Complexity #
# As we know, finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). Also, as we saw in the above algorithm, we will need O(N) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

# Space Complexity #
# The algorithm runs in constant space O(1).
