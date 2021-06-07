# Problem Statement #

# Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

'''
  #This for loop on lines 25-28 is giving me some trouble. The output only returns the
  sum of the first window:
      Maximum sum of a subarray of size K: 8
      Maximum sum of a subarray of size K: 5

  I'm trying to remove the previous element on the left side of the current window 
  and add the next element of on the right side of the current window
'''

def max_subarray_size_k(k, arr):

  #Initialize variables
  maxSum = 0
  current = 0

  #The sum of the first window based on provided k value
  for i in range(k):
    maxSum += arr[i]

  for i in range(k):
    current += arr[i] - arr[i-k]
    maxSum = max(maxSum, current)
  return maxSum

  #Dealing with empty array
  if(n == 0 or k > n or k < 1):
    return 0


def main():
  print("Maximum sum of a subarray of size K: " + str(max_subarray_size_k(3, [2, 1, 5, 1, 3, 2])))
  print("Maximum sum of a subarray of size K: " + str(max_subarray_size_k(2, [2, 3, 4, 1, 5])))

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

