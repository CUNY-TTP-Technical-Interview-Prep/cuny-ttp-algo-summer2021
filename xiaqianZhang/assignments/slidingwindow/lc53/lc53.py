from typing_extensions import final
# Given an integer array nums
# find the contiguous subarray (containing at least one number) 
# which has the largest sum and return its sum.

#Attempt 4:
'''
input: size of the subarrary that we want to sum call k, array that may contains negative integers
output: largest sum of the numbers in the array that is size of k

initliaze with a windowStart = 0, currentSum = 0, largestSum = 0
for loop that go through each index in the array:
  currentSum will be increment the index value of the array
  if current index is greater than the size of k-1 [0, 1, 2] size of k = 3, so the index will be ended at 3-1 = index 2
    update the largest sum = max(currentSum, largestSum)
    currentSum decrement the first index of the subarray of size k
    windowStart increment by 1

return the largestSum

Edge case:
1. if the k is < 1: return 0
2. if the arr is empty, return 0
'''
def max_sub_array_of_size_k(k, arr):
  windowStart = 0
  currentSum = 0
  largestSum = 0

  if k == 0 or arr is None:
    return 0

  for each in range(len(arr)):
    currentSum += arr[each]
    if each >= k-1:
      largestSum = max(currentSum, largestSum)
      currentSum -= arr[windowStart]
      windowStart+=1
  return largestSum

def main():
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]))) #9
  #sum1 = [2, 1, 5] sum2 = [1, 5, 1] sum3 = [5, 1, 3] ... sumx = [i, i+1, i+2]
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]))) #7


main()


#input: list of positive integer and a positive size k
#output: largest sum of subarray that is the size of k

#edge cases: empty array, array = null
# startingIndex = 0, maxSum = 0, currentSum = 0
# for loop go through all numbers in array
#  we add the numbers in the array into the currentSum until it reach the size k
#  if the numbers index at the array where the subarray reach to the size k
#     we want to update the maxSum with the existing maxSum and the currentSum
#     Then excluding the startingIndex from the currentSum and increment the index position of the startingIndex

# def max_sub_array_of_size_k(k, arr):
#   startIndex, maxSum, currentSum = 0, 0, 0
#   #edge cases
#   if (arr == [] or k == 0):
#     return 0
  
#   for each in range(len(arr)):
#     currentSum += arr[each]
#     if each >= k-1:
#       maxSum = max(maxSum, currentSum)
#       currentSum -= arr[startIndex]
#       startIndex +=1
#   return maxSum






















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

