# Problem Statement #

# Design a class to calculate the median of a number stream. The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

'''
input: funtions + values
output: medium of all the numbers
first thing we have to work on is creating both heaps(min/max)
second insert: 
    add number to the min heap
    check if heaps are uneven
          balance the heaps
thrid get the mediam:
    if both heaps are balanced
          get the root of both heaps
          add them and divide them by 2
    else
          return the top of the max heap

Time complexity: The most expensive operation we perform is the addition into a heap because both getting and popping the root will cost O(1) while adding a new
node will cost us O(log n)
Space complexity 
'''

import heapq
#build in library


class MedianOfAStream:
    def __init__(self):
        self.max_h = []
        self.min_h = []
        heapq.heapify(self.max_h)
        heapq.heapify(self.min_h)

    def insert_num(self, num):
        # TODO: Write your code here
        heapq.heappush(self.min_h, num)
        if len(self.min_h) > len(self.max_h):
            heapq.heappush(self.max_h, heapq.heappop(self.min_h))
        return -1

    def find_median(self):
        # TODO: Write your code here
        if len(self.min_h) < len(self.max_h):
            max_val = heapq.nlargest(1, self.max_h)
            return max_val[0]
        else:
            min_val = heapq.nsmallest(1, self.min_h)
            max_val = heapq.nlargest(1, self.max_h)
            return ((min_val[0] + max_val[0])/2)


def main():
    medianOfAStream = MedianOfAStream()
    medianOfAStream.insert_num(3)
    medianOfAStream.insert_num(1)
    print("The median is: " + str(medianOfAStream.find_median()))
    medianOfAStream.insert_num(5)
    print("The median is: " + str(medianOfAStream.find_median()))
    medianOfAStream.insert_num(4)
    print("The median is: " + str(medianOfAStream.find_median()))


main()
