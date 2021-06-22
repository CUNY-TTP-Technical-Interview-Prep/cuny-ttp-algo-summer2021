# Problem Statement #

# Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

# Example 1:

# Input: nums=[1, 2, -1, 3, 5], k = 2
# Output: [1.5, 0.5, 1.0, 4.0]
# Explanation: Lets consider all windows of size ‘2’:

#   - [1, 2, -1, 3, 5] -> median is 1.5
#   - [1, 2, -1, 3, 5] -> median is 0.5
#   - [1, 2, -1, 3, 5] -> median is 1.0
#   - [1, 2, -1, 3, 5] -> median is 4.0

# Example 2:

# Input: nums=[1, 2, -1, 3, 5], k = 3
# Output: [1.0, 2.0, 3.0]
# Explanation: Lets consider all windows of size ‘3’:

#   - [1, 2, -1, 3, 5] -> median is 1.0
#   - [1, 2, -1, 3, 5] -> median is 2.0
#   - [1, 2, -1, 3, 5] -> median is 3.0
'''
input: an array of values and one int
output: array of mediums
step1: I am going to initialize a constructor with two heaps (min/max)
step2: I am going to loop through the array adding them into the heaps
      if the min heap is larger than the max heap, we add the root to the max heap, bringing the middle values to the top.
step 3: if the k value:
           is even add the two roots and divide by two
        else: 
           return the max root
step4: take that number and added it to a respond array
step5: clear the heap
              
time complexity: because for this we have to add k numbers into the heaps it would be O(n^2 + log n) = O(n^2)

edge cases:
if the k value its greater than the length of the array
      we could either return the medium of the whole array or return a None to indicate that its not possible to have those windows
if the array is empty
    return None
if K == 0
'''

import heapq


class SlidingWindowMedian:
    def __init__(self):
        self.max_h = []
        self.min_h = []
        heapq.heapify(self.max_h)
        heapq.heapify(self.min_h)

    def find_sliding_window_median(self, nums, k):
        if not nums or k < 1:
            return None

        result = []

        # TODO: Write your code here

        for i in range(len(nums)-(k-1)):
            for j in range(k):
                heapq.heappush(self.min_h, nums[i+j])
                if len(self.min_h) > len(self.max_h):
                    heapq.heappush(self.max_h, heapq.heappop(self.min_h))
            if k % 2 == 0:
                min_val = heapq.nsmallest(1, self.min_h)
                max_val = heapq.nlargest(1, self.max_h)
                result.append((min_val[0] + max_val[0])/2)

            else:
                max_val = heapq.nlargest(1, self.max_h)
                result.append(max_val)

            self.max_h.clear()
            self.min_h.clear()

        return result


def main():

    slidingWindowMedian = SlidingWindowMedian()
    result = slidingWindowMedian.find_sliding_window_median(
        [1, 2, -1, 3, 5], 2)
    print("Sliding window medians are: " + str(result))  # correct

    slidingWindowMedian = SlidingWindowMedian()
    result = slidingWindowMedian.find_sliding_window_median(
        [1, 2, -1, 3, 5], 3)
    print("Sliding window medians are: " + str(result))  # correct


main()
