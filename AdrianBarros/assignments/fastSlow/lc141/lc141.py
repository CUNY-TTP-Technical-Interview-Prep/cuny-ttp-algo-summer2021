# Problem Statement #

# Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


'''
input: a linklist
output : bool

Step 1: starts declaring two pinters, slow and fast pointing to the head
step 2: move both of the pointers slow by 1 and fast by two
step 3 : if they touch there is a loop
        iff fast recheas the end there is not
'''


def has_cycle(head):
    # TODO: Write your code here
    slow = head
    fast = head
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
