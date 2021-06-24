from typing_extensions import final
# Given an integer array nums
# find the contiguous subarray (containing at least one number) 
# which has the largest sum and return its sum.

#Attempt 5:
'''
Input: integer k and array that may contains negative 
Output: find the subarray with size k that have the largest sum
edge case: if the array is empty, return None

initliaze a startIndex = 0, currentSum = 0, maxSum = 0
for loop that go through each value in the array:
  increment the currentSum's value
  when the current index is greater than the size of k:
    update the maxSum's value
    decrement the currentSum's value by the startIndex's value
    startIndex increment by one 
return the maxSum
'''
def max_sub_array_of_size_k(k, arr):
  startIndex = 0
  currentSum = 0
  maxSum = 0

  if len(arr) < 1:
    return 0

  for each in range(len(arr)):
    currentSum += arr[each]
    if each >= k - 1:
      maxSum = max(maxSum, currentSum)
      currentSum -= arr[startIndex]
      startIndex+=1
  return maxSum

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

