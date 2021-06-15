# Problem Statement #

# Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

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


'''
input: the head of a linklist with a cycle
output: the start node of the cycle
LOGIC explanation:
for this problem I am going to use the fast and slow pointer to start this problem
now because node are going to end up somewhere in the middle of the loop we know that the second ptr has travel twice as much as the first one
with that knoledge and some operations those being:
  ptr1_traveled= initial len + len of a part of the loop and ptr2_traveled = 2 x ptr1_traveled
  so(with manual checkig) the total len of the LL is going to be = 2x initial + cycle traveled
  hence the remaining distance is going to be the same lenght before the cycle
Steps:
Step 1: repeat to the slow and fast pointers 
step 2: point one pointer to the start again
Step 3: loop the both 1 by 1 until they meet
Step 4 return that node

'''


def find_cycle_start(head):
    # TODO: Write your code here
    # we do not have to worry for hitting a NONE
    slow = head.next
    fast = head.next.next
    # Step 1: repeat to the slow and fast pointers
    while slow != fast:
        slow = slow.next
        fast = fast.next.next
    # step 2: point one pointer to the start again
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next

    return slow


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

    head.next.next.next.next.next.next = head.next.next.next.next   # expected 5 // correct
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
# As we know, finding the cycle in a LinkedList with N nodes and also finding the length of the cycle requires O(N). Also, as we saw in the above algorithm, we will need O(N) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

# Space Complexity #
# The algorithm runs in constant space O(1).
