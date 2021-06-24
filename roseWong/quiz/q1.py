# Given an array of positive numbers and a positive number ‘k,’ 
# find the maximum sum of any contiguous subarray of size ‘k’.

# I drew a blank and then spinned my wheels for several minutes, so had to refer to old work
# Even with the work in front of me I had to reverse engineer, but I do understand it.

# we sum consecutive numbers until we hit the window size of k, then we compare this total with
# previous max totals and keep the highest max total.

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
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(2, [])))

main()