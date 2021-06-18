# Problem Statement #

# Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

# input: a singly linkedlist with a cycle
# output: a node representing the starting point of cycle
# edge cases: 1. empty linkedlist => return None
#             2. 1 node pointing to itself => return the node

# 1 -> 3 -> -2 -> 4 -> 2
#      ^          | 
#      | - - - - -  
#   return  node at position 2 as the starting point

'''
  We can use fast and slow pointer pattern to solve this problem. 
  The problem can be separated into two parts. 
  First part, we need to find the position where both fast and slow pointers meet. 
  Second part, we use another pointer (let's call p) pointing to the head initially, 
  and pointer (let's call q) pointing to the position where slow and fast meet.
  and keep moving the p pointer and q pointer until they meet. 
  The position where they meet is the starting node of the cycle. 

  The reason why the position where p pointer and q pointer meet is the starting node of cycle is that:
  let's assume the distance from the head of the linkedlist to the starting node of cycle is d1,
  the distance from the starting node of cycle to the position where both slow and fast pointers meet is d2,
  the distance from the position where both slow and fast pointers meet to the starting node of cycle is d3.

  Then the distance fast pointer travels is: d1 + d2 + d3 + d2
  the distance slow pointer travel is: d1 + d2 
  Since fast pointer is always twice as fast as slow pointer, d1 + d2 + d3 + d2 = 2*(d1 + d2)  => d1 = d3

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
  if head is None:
    return None

  slow, fast = head, head
  
  while fast and fast.next:
    fast = fast.next.next
    slow = slow.next

    if fast == slow:
      break

  p, q = head, fast

  while p != q:
    p = p.next
    q = q.next

  return p


def main():
  head = Node(1)

  # case where there is only one node and pointing to itself.
  head.next = head
  print("LinkedList cycle start: " + str(find_cycle_start(head).value))

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
