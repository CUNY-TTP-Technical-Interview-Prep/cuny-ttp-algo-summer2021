# Problem Statement #

# Given the head of a LinkedList and two positions

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


'''
input: singly connected linklist, 2 integers
output: head othe same linklist

step 1: check if there is linklist, if num1 < num2
step 2: loop throught the link list prev, curr and next until we hit the first node
Added step: keep track of both the last node before the reverse and the last node of the sub LL
added step: separeate the sub LL
step 3: while loop reversing the link list until we hit the second node
step 4: reconnect the sub LL
final step: return the head of the original LL

edge cases:
go to step 1
if given node == head
'''


def reverse_sub_list(head, p, q):
    # TODO: Write your code here
    if p == q:
        return head
    # declaring ptrs
    prev = None
    curr = head
    next = head
    # step 2: loop throught the link list prev, curr and next until we hit the first node
    while curr.value != p:
        prev = curr
        curr = curr.next
    # we have to keep track of the last node
    last_node = prev
    new_start = curr
    # step 3: while loop reversing the link list until we hit the second node

    i = 0
  # reverse nodes between 'p' and 'q'
    while curr is not None and i < q - p + 1:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        i += 1

    if last_node is not None:
        # 'previous' is now the first node of the sub-list
        last_node.next = prev
  # this means p == 1 i.e., we are changing the first node (head) of the LinkedList
    else:
        head = prev
        # connect with the last part
    new_start.next = curr
    return head


def main():

    head = Node(1)  # curr
    head.next = Node(2)
    head.next.next = Node(3)
    head.next.next.next = Node(4)
    head.next.next.next.next = Node(5)

    print("Nodes of original LinkedList are: ", end='')
    head.print_list()
    result = reverse_sub_list(head, 2, 4)
    print("Nodes of reversed LinkedList are: ", end='')
    result.print_list()


main()


# Solution
# -----
# def reverse_sub_list(head, p, q):
#   if p == q:
#     return head

#   # after skipping 'p-1' nodes, current will point to 'p'th node
#   current, previous = head, None
#   i = 0
#   while current is not None and i < p - 1:
#     previous = current
#     current = current.next
#     i += 1

#   # we are interested in three parts of the LinkedList, the part before index 'p',
#   # the part between 'p' and 'q', and the part after index 'q'
#   last_node_of_first_part = previous
#   # after reversing the LinkedList 'current' will become the last node of the sub-list
#   last_node_of_sub_list = current
#   next = None  # will be used to temporarily store the next node

#   i = 0
#   # reverse nodes between 'p' and 'q'
#   while current is not None and i < q - p + 1:
#     next = current.next
#     current.next = previous
#     previous = current
#     current = next
#     i += 1

#   # connect with the first part
#   if last_node_of_first_part is not None:
#     # 'previous' is now the first node of the sub-list
#     last_node_of_first_part.next = previous
#   # this means p == 1 i.e., we are changing the first node (head) of the LinkedList
#   else:
#     head = previous

#   # connect with the last part
#   last_node_of_sub_list.next = current
#   return head

# -----
