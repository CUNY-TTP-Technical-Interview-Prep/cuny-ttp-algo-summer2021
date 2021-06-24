# Problem Statement #

# Design a class to calculate the median of a number stream. The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

# Pseudo code:

# for this problem we need to get an array of a binary tree
# and divide it in two sub-trees
# I beieve this is a sorted array, though I am not sure since heaps aren't sorted
# lets assume this is a sorted heap array
# once we divided the array into two sub-arrays
# and since this is sorted, the left side of the array will be the smaller side
# which we will have a Max-heap
# the right side will be the greater side of the array
# which gives us a min-heap


class MedianOfAStream:
    def insert_num(self, num):
        # TODO: Write your code here
        return -1

    def find_median(self):
        # TODO: Write your code here
        return 0.0


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
