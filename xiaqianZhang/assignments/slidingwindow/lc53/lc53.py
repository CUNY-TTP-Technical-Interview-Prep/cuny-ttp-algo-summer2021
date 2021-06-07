# Given an integer array nums
# find the contiguous subarray (containing at least one number) 
# which has the largest sum and return its sum.

#input: list of positive integer and a positive size k
#output: largest sum of subarray that is the size of k

#edge cases: empty array, array = null
# startingIndex = 0, maxSum = 0, currentSum = 0
# for loop go through all numbers in array
#  we add the numbers in the array into the currentSum until it reach the size k
#  if the numbers index at the array where the subarray reach to the size k
#     we want to update the maxSum with the existing maxSum and the currentSum
#     Then excluding the startingIndex from the currentSum and increment the index position of the startingIndex

def max_sub_array_of_size_k(k, arr):
  startIndex, maxSum, currentSum = 0, 0, 0
  #edge cases
  if (arr == [] or k == 0):
    return 0
  
  for each in range(len(arr)):
    currentSum += arr[each]
    if each >= k-1:
      maxSum = max(maxSum, currentSum)
      currentSum -= arr[startIndex]
      startIndex +=1
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

