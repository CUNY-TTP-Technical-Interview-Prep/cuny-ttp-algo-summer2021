# Problem Statement #

# Design a class to calculate the median of a number stream. The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

'''
  Overview: 
  A naive way to solve it is: we sort the array everytime we insert a number so that it remains in ascending order, 
  and we can divide the length of the array by two and get the median value (if the length is even, we get the average of the middle two numbers).
  Time complexity: O(N*Log(N))   Space complexity: 0(N)


  A more efficient way to do it is: Since priority queue / heap always maintains the smallest / largest value at the root, 
  we can apply it to initialize two halfs (smaller half and larger half of the number stream),
  and the smaller half (let's call it small) keeps the largest value at the root (we can use max heap), 
  and the larger half (let's call it large) keeps the smallest value at the root (we use min heap). 
  So whenever we insert a number, it costs O(Log(N)) time complexity to put the number in proper place in the heap,
  and for finding the median, it only costs O(1) since the root values are the ones we are looking for.

  We can use the built-in heapq collection in python, or we can build a custom heap class. 
  To build a heap class, we need an 'add' method for inserting a number into a list, and a 'bubble_up' method to place the number in proper position. 
  We also need a 'pop' method for deleting the root value from the list, and a 'bubble_down' to reform the list in correct heap shape. 
  We will also need a 'peak' method for look-up purpose. 
  We can build the heap class based on min heap logic, which means we put the smallest value at the root. 
  We don't need to build another class for max heap, since we can invert the min heap to max heap by negating the number and insert into the heap (we need to negate it back when pop the value).

'''

from typing import Counter

class Heap:
  def __init__(self):
      self.heap_list = []
      self.current_size = 0

  def pop(self):
    if self.current_size == 0:
      return None

    root = self.heap_list[0]
    last_index = self.current_size - 1
    self.heap_list[0] = self.heap_list[last_index]
    self.heap_list.pop()
    self.current_size -= 1
    self.bubble_down(0)
    return root 

  def bubble_down(self, parent_index):
    while (parent_index * 2 + 1) < self.current_size:
      index_of_smaller = self.get_smaller(parent_index)
      if self.heap_list[parent_index] > self.heap_list[index_of_smaller]:
        self.heap_list[parent_index], self.heap_list[index_of_smaller] = self.heap_list[index_of_smaller], self.heap_list[parent_index] 
      parent_index = index_of_smaller

  
  def get_smaller(self, parent_index):
    left_index = parent_index * 2 + 1
    right_index = parent_index * 2 + 2

    if right_index >= self.current_size:
      return left_index
    
    left = self.heap_list[left_index]
    right = self.heap_list[right_index]

    if left < right:
      return left_index

    return right_index

  def peak(self):
    return self.heap_list[0]

  def add(self, num):
    self.heap_list.append(num)
    self.current_size += 1
    self.bubble_up()
    

  def bubble_up(self):
    current_index = self.current_size - 1
    parent_index = (current_index - 1) // 2
    while parent_index >= 0 and self.heap_list[current_index] < self.heap_list[parent_index]:
      self.heap_list[current_index], self.heap_list[parent_index] =  self.heap_list[parent_index], self.heap_list[current_index],
      current_index = parent_index
      parent_index = (current_index - 1) // 2


class MedianOfAStream:
  def __init__(self):
    self.small = Heap()
    self.large = Heap()

  def insert_num(self, num):
    if self.large.current_size == self.small.current_size:
      self.small.add(-num)
      temp = -self.small.pop()
      self.large.add(temp)
    else:
      self.large.add(num)
      temp = -self.large.pop()
      self.small.add(temp)

  def find_median(self):
    if self.small.current_size == self.large.current_size:
      return float(self.large.peak() - self.small.peak()) / 2.0
    
    return float(self.large.peak())


def main():
  medianOfAStream = MedianOfAStream()
  medianOfAStream.insert_num(-3)
  medianOfAStream.insert_num(-1)
  print("The median is: " + str(medianOfAStream.find_median()))
  medianOfAStream.insert_num(-5)
  print("The median is: " + str(medianOfAStream.find_median()))
  medianOfAStream.insert_num(-4)
  print("The median is: " + str(medianOfAStream.find_median()))


main()
