

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

##
# input: linklist
# output node in the midd
# turtle and the hair
# Step: 1 declare a slow and fast prt
# #step 2 a loop throu the array until fast is done
# step 2.5: update
# #step 3 return node in prtslow
#
# edge:
# linklist just has one node // return node
#
##


def find_middle_of_linked_list(head):
    # TODO: Write your code here
    if not head:
        return None
    # step 1: declaring
    slow_ptr = head
    fast_ptr = head

    # step 2
    while fast_ptr != None and fast_ptr.next != None:

        # step 2.5: update
        slow_ptr = slow_ptr.next
        fast_ptr = fast_ptr.next.next

    # #step 3 return node in prtslow
    return slow_ptr


def main():
    head = None
    print("Middle Node: " + str(find_middle_of_linked_list(head)))
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
