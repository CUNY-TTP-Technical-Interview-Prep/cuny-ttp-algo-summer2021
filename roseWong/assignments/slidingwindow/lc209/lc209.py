# Problem Statement #

# Given an array of positive numbers and a positive number ‘S’,
# find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
# Return 0 if no such subarray exists.

# starting with the code from 

import math


def smallest_subarray_with_given_sum(s, arr):
  minLength = math.inf
  windowLength = 0
  windowSum = 0
  windowStart = 0
  windowEnd = 0
  for windowEnd in range(len(arr)):
    windowSum = windowSum + arr[windowEnd]  # this adds the next element in the array
    windowLength = windowLength + 1
    # slide the window when we hit the required size of s
    while windowSum >= s:
      minLength = min(minLength, (windowEnd - windowStart + 1))
      # remove the element that is being dropped from the next sum
      windowSum = windowSum - arr[windowStart]
      windowStart = windowStart + 1
      if minLength == math.inf:
        return 0
  return minLength


def main():
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])))


main()



  # Solution
  # -----
  # window_sum = 0
  # min_length = math.inf
  # window_start = 0

  # for window_end in range(0, len(arr)):
  #   window_sum += arr[window_end]  # add the next element
  #   # shrink the window as small as possible until the 'window_sum' is smaller than 's'
  #   while window_sum >= s:
  #     min_length = min(min_length, window_end - window_start + 1)
  #     window_sum -= arr[window_start]
  #     window_start += 1
  # if min_length == math.inf:
  #   return 0
  # return min_length
