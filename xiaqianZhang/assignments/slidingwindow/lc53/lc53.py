from typing_extensions import final
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


#Attempt 2:
# Given an integer array nums
# find the contiguous subarray (containing at least one number) 
# which has the largest sum and return its sum.

# input: given an array that contains integers, may be negative and the size of subarray named k
# output: return the largest sum of the subarray that have the size of k
# edge case: if there's only one number in the array: return the array

#initialize the currentSum, finalSum and currentIndex = 0, 0, 0
# for loop that go through each variable in the array:
    # currentSum += arr[each]
    # if each index is greater than the size of k, which is out of boundary of the k:
        #finalSum = max(currentSum, finalSum) Then compare the current and final sum to update the finalSum as the largest
        # currentSum -= arr[currentIndex] since the currentIndex located at 0, when we try to find the second subarray's sum, 
        # we want to ignore the index 0, and take index 1 - 3, this will reduce the repeat calculate of sum of 1-2
        # currentIndex +=1 by this we want to update the currentIndex and next time we will ignore index 1 as an example

# def max_sub_array_of_size_k(k, arr):
#   currentSum, finalSum, currentIndex = 0, 0, 0

#   if arr ==[] or k == 0:
#     return 0
    
#   for each in range(len(arr)):
#     currentSum+=arr[each]
#     if each >= k-1:
#       finalSum = max(currentSum, finalSum)
#       currentSum -= arr[currentIndex]
#       currentIndex+=1
#   return finalSum

#Attempt 3:
# Given an integer array nums
# find the contiguous subarray (containing at least one number) 
# which has the largest sum and return its sum.

# input: we are given subarray size k and array that contains integers that might includes negative integers
# output: return the subarray with size k that have the maximum sum

# initialize the windowStart = 0, currentSum = 0, finalSum = 0
# while windowStart < len(arr)-1: 
# currentSum += arr[windowStart]
#   if the windowStart > k:
#       update the finalSum by taking the maximum among the currentSum and the finalSum
#       currentSum -= arr[windowStart]
#       windoeStart +=1

#edge case: if the array is empty or the size of k is 0, return 0
def max_sub_array_of_size_k(k, arr):
  if arr == [] or k == 0:
    return 0
  
  windowStart = 0
  currentSum = 0
  finalSum = 0
  for each in range(len(arr)):
    currentSum += arr[each]
    if each >= k-1:
      finalSum = max(finalSum, currentSum)
      currentSum -= arr[windowStart]
      windowStart +=1
  return finalSum


def main():
  print("Maximum sum of a subarray of size K: " + str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])))
  #sum1 = [2, 1, 5] sum2 = [1, 5, 1] sum3 = [5, 1, 3] ... sumx = [i, i+1, i+2]
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

