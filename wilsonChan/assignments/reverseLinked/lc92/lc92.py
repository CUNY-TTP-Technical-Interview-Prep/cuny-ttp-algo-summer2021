# Problem Statement #

# Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

'''

Given:
-p and q positions
-head node

Result:
-swap the nodes between p and q position



EXAMPLE # 1:
[1] [2] [3] [4] [5] [6] [7] [8] [9] [10]
         p               q
 H
        [7] [6] [5] [4] [3]
            Swapping
            p <=> q
            3 <=> 7
            4 <=> 6
            5 <=> 5

EXAMPLE # 2
(head, 2, 4)
[1] [2] [3] [4] [5]
 H   p       q
    [4] [3] [2]
      Swapping
      p <=> q
      2 <=> 4
      3 <=> 3

Misc. Notes
-If next node is null = done



Variables:
-head (starting node)
-current (what node position we're on)
-p (left node position)
-q (right node position)




[1] [2] [3] [4] [5] [6] [7] [8] [9] [10]
         p               q
 H
 C


STEPS:
i = 1    (after the head node)

-While loop to traverse until p
  -i < p    (after head node and p node)
  -i++
  -prev = null
  


-while loop p and q (swappage here)
  p = null
  next = current.next
  current.next = prev
  prev = current

  current = next

  i++

  return head


'''


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


def reverse_sub_list(head, p, q):
  # TODO: Write your code here


# [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]
#          p               q

#  H

  #Initialize Variables
  prev = None
  current = head
  pos = 1


  #while loop 1 (traverse between starting node and p)
  while pos < p and current:
    prev = current
    current = current.next
    pos += 1
  
  start = current
  end = None
  
  #while loop 2 (traverse between p and q)
  while pos <= q and current:
    next = current.next
    current.next = end
    end = current
    current = next
    pos += 1

  start.next = current

  if not prev:
    head = end
  else:
    prev.next = end

  return head





##################################################

  if head is None or p==q:
    return head

  p1_end, p2_start = head, head
  i = 0
  while p2_start and i< p-1:
    p1_end = p2_start
    p2_start = p2_start.next
    i += 1

  p2_start.print_list()

  current = p2_start
  previous, next = None, None
  i = 0
  while current and i < q-p+1:
    next = current.next
    current.next = previous
    previous = current
    current = next
    i += 1

  if p1_end:
    p1_end.next = previous
  else:
    head = previous

  p2_start.next = current

  return head


def main():
  head = Node(1)
  head.next = Node(2)
  head.next.next = Node(3)
  head.next.next.next = Node(4)
  head.next.next.next.next = Node(5)

  print("Nodes of original LinkedList are: ", end='')
  head.print_list()
  result = reverse_sub_list(head, 2, 4)
  print("Nodes of reversed LinkedList are: ", end='')
  result.print_list()

#############################################
#MY EXAMPLE
  # head = Node(1)
  # head.next = Node(2)
  # head.next.next = Node(3)
  # head.next.next.next = Node(4)
  # head.next.next.next.next = Node(5)
  # head.next.next.next.next.next = Node(6)
  # head.next.next.next.next.next.next = Node(7)

  # print("Nodes of original LinkedList are: ", end='')
  # head.print_list()
  # result = reverse_sub_list(head, 2, 6)
  # print("Nodes of reversed LinkedList are: ", end='')
  # result.print_list()
#############################################



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

# Time complexity #
# The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

# Space complexity #
# We only used constant space, therefore, the space complexity of our algorithm is O(1).
