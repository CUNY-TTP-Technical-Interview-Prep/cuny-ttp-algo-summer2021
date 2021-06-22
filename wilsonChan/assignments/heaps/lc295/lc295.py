# Problem Statement #

# Design a class to calculate the median of a number stream. 
# The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median 
# will be the average of the middle two numbers.


'''

Given:
-insertNum takes in an integer
-if count of numbers are even, median is the average of middle two numbers

Result:
-Create two methods
  1) Stores number into class
  2) Finds median of all numbers inserted in class



Example:
Insert number: 41
[20,26]
Median: 26

Insert number: 60
[20,26,30]
Median: 28        26 + 30 = 56/2 = 28



Method 1 (insertNum) Approach:
-Store the numbers with two arrays (min heap and max heap)
-Use negative numbers to clearly identify numbers in max heap
  -Negative number is used to distinguish between numbers in max heap and min heap
-Sort the numbers

Method 2 (findMedian) Approach:
-Convert negative back into positive
-Use if conditional to find average of two middle numbers when the
 total count of numbers is even
  -if there is an odd count of numbers in array, take the very center of array



Overall Complexities:    (speculation)
Time: O(log n) - The height of the tree is the main determining factor.
Each node connects with two other nodes at most. With each increasing 
height level, the nodes increase

Space: O(n) - Since heaps aren't sorted, the worst case is to search
through every node within the binary tree


'''



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
