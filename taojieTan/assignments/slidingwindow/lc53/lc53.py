# Problem Statement #

# Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

def max_sub_array_of_size_k(k, arr):
# input: positive size k, positive integers array
# output: max sum 
# edge cases: k == 0
    if k == 0: return 0

# initialize window_start and window_end to keep track of the size of sliding window
    window_start = 0
    window_end = 0

# initialize max_sum to keep track of the max sum of subarray with size k
    max_sum = 0

# initialize a temp variable to keep track of the sum of sliding window
    temp = 0

# loop through the array to add integer to temp 
    while window_end < len(arr):
      temp += arr[window_end]

      # if the size of sliding window is larger than k - 1 (since array index starts from zero)
      # we subtract the value with window_start index of array from the sum of sliding window
      # then compare the current max_sum with temp and store the larger sum
      # and slide the window index to the right 
      # while loop keeps going until we hit the end of array
      if window_end > k - 1:
        temp -= arr[window_start]
        max_sum = max(temp, max_sum)
        window_start += 1
      
      window_end += 1

    return max_sum

def main():
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])))
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])))
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(4, [2, 1, 5, 1, 3, 2, 10, 1])))
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(0, [2, 1, 5, 1, 3, 2, 10, 1])))
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(3, [])))
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

