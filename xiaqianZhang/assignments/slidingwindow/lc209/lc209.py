import math

# Given an array of positive integers nums and a positive integer target, 
# return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
# of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

# input: array with positive integers, target sum is positive integer
# output: minimum length of the subarray that have >= sum
# we want to loop through the array and get the currentSum by adding up the numbers
# while the currentSum is >= s
#  compare the min subarray length with the original length s and the currentSum's length, which is last index appear - first index appear +1
#  excluding the startingIndex's varible from the currentSum and increment the startingIndex by 1

# edge case, if s is infinite
def smallest_subarray_with_given_sum(s, arr):
  startIndex, currentSum = 0, 0
  minLen = math.inf
  for each in range(len(arr)):
    currentSum += arr[each]
    while currentSum >= s:
      minLen = min(minLen, each - startIndex + 1) #index 2 - index 0 + 1 = len of 3
      currentSum -= arr[startIndex]
      startIndex += 1

  if minLen == math.inf:
    return 0
  return minLen



def main():
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]))) # 5, 2 [2]
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]))) # 8 [1]
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]))) # 3, 4, 1 [3]


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
