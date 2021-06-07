# Problem Statement #

# Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

import math


def smallest_subarray_with_given_sum(s, arr):

    #input: positive integer s, positive integer array
    #output: smallest length of subarray with sum that is greater than or equal to s
    if s == 0:
      return 0
    #initialize a window to keep track of the size of sliding window
    window_start = 0
    window_end = 0

    #initialize min_length to keep track of smallest length
    min_length = len(arr) + 1

    #initialize a sum variable to keep track of the sum of subarray
    sum = 0

    #loop through the array to add integer to sum 
    #if sum is greater than or equal to s, first compare smaller length  
    #then subtract integer with window_start index of array from sum 
    #and shrink the window size by shifting window_start index to right by one
    #continue the inner while loop until the sum is less than s 
    #then continue the outer while loop until window hits the end of array
    while window_end < len(arr):
      sum += arr[window_end]

      while sum >= s:
        min_length = min(min_length, window_end - window_start + 1)
        sum -= arr[window_start]
        window_start += 1
      
      window_end += 1
      
    #if min_length hasn't changed since initialized, 
    #it means empty array or sum of array is smaller than target
    #simply return zero
    return min_length if min_length != len(arr) + 1 else 0 

def main():
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(0, [3, 4, 1, 1, 6])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [1, 1, 1, 1, 1])))

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
