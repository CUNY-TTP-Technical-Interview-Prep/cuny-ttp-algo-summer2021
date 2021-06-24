# Problem Statement #

# Design a class to calculate the median of a number stream. The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.


'''
class MedianFinder:
    def __init__(self):
        self.small = []  # the smaller half of the list, max heap (invert min-heap)
        self.large = []  # the larger half of the list, min heap

    def addNum(self, num):
        if len(self.small) == len(self.large):
            heappush(self.large, -heappushpop(self.small, -num))
        else:
            heappush(self.small, -heappushpop(self.large, num))

    def findMedian(self):
        if len(self.small) == len(self.large):
            return float(self.large[0] - self.small[0]) / 2.0
        else:
            return float(self.large[0])

large = [1]
num = 2
large = [1, 2] root = 1 since it is min heap
pop out the -1
num = -1
push into the small array

small = [-1]
large = [2]

num = 3
small [-1, -3] -3 pop out since it is min heap
after the pop out, we reversed the sign and push to the large 
small [-1]
large [2, 3]

num = 4
large [2, 3, 4]
pop out the min heap, pop out 2
push -2 into the small
small [-2, -1]
large [3, 4]

num = 5
push the -5 into small array
small [-5, -2, -1]
pop out the -5
push -(-5) into large subarray

large [3, 4, 5]

'''

'''
Attempt 2

Idea: create two heap, 
one is min heap that contains the larger numbers
one is max heap that contains the smaller numbers
Then the root of the min heap is the largest value within that heap
And the root of the max heap is the largest value within this heap
Then check if these two heap have the same length size
if so, take two heap's root value and divide by 2
else, take the root value of the min heap side
'''
from heapq import *

class MedianOfAStream:
  def __init__(self):
    self.smaller = []
    self.larger = []

  def insert_num(self, num):
    if len(self.smaller) == len(self.larger):
      heappush(self.larger, -heappushpop(self.smaller, -num))
    else:
      heappush(self.smaller, -heappushpop(self.larger, num))

  def find_median(self):
    if len(self.smaller) == len(self.larger):
      return (self.larger[0] - self.smaller[0]) / 2
    else:
      return self.larger[0]

# from heapq import *

# class MedianOfAStream:
#   def __init__(self):
#     self.small = []
#     self.large = []

#   def insert_num(self, num):
#     if len(self.small) == len(self.large):
#       heappush(self.large, -heappushpop(self.small, -num))
#     else:
#       heappush(self.small, -heappushpop(self.large, num))


#   def find_median(self):
#     if len(self.small) == len(self.large):
#       #the root of each side and divide by 2
#       return (-self.small[0] + self.large[0]) / 2
#     else:
#       return self.large[0]


def main():
  medianOfAStream = MedianOfAStream()
  # []
  medianOfAStream.insert_num(3)
  # [3]
  medianOfAStream.insert_num(1)
  # [1, 3]
  print("The median is: " + str(medianOfAStream.find_median()))
  # 2
  medianOfAStream.insert_num(5)
  print("The median is: " + str(medianOfAStream.find_median()))
  medianOfAStream.insert_num(4)
  # index 4 -1 // 2, so the parent is 5, swap becomes [1, 3, 4, 5]
  print("The median is: " + str(medianOfAStream.find_median()))


main()
