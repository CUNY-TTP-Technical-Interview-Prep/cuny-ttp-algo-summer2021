# Problem Statement #

# Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

# Personal note - "Diary" - I am able to understand and explain the code after
# Melissa walked us through a solution.  Here I "copy" the code by typing it in per class'
# instructions. I "translated" it to Python, which I am very rusty at.
#import numpy as np
def max_sub_array_of_size_k(k, arr):
  maxSum = 0
  windowSum = 0
  windowStart = 0
  windowEnd = 0
  for windowEnd in range(len(arr)):
    windowSum = windowSum + arr[windowEnd]  # this adds the next element in the array
    # slide the window when we hit the required size of k
    if windowEnd >= k-1:
      maxSum = max(maxSum, windowSum)
      # remove the element that is being dropped from the next sum
      windowSum = windowSum - arr[windowStart]
      windowStart = windowStart + 1
  return maxSum


def main():
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])))
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])))

main()






















# bruteforce/naive approach
# -----
# def max_sub_array_of_size_k(k, arr):
#   max_sum = 0
#   window_sum = 0

#   for i in range(len(arr) - k + 1):
#     window_sum = 0
#     for j in range(i, i+k):
#       window_sum += arr[j]
#     max_sum = max(max_sum, window_sum)
#   return max_sum


# better approach
# -----
# def max_sub_array_of_size_k(k, arr):
#   max_sum , window_sum = 0, 0
#   window_start = 0

#   for window_end in range(len(arr)):
#     # add the next element
#     window_sum += arr[window_end]
#     # slide the window, we don't need to slide if we've not hit the required window size of 'k'
#     if window_end >= k-1:
#       max_sum = max(max_sum, window_sum)
#       # subtract the element going out
#       window_sum -= arr[window_start]
#       # slide the window ahead
#       window_start += 1
#   return max_sum

