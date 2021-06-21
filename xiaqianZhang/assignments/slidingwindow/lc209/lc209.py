import math

# Given an array of positive integers nums and a positive integer target, 
# return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
# of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

#Attempt 3:
'''
Input: array of positive integers, positive integer target sum
Output: minimum length of continous subarray that have the sum >= targer sum

Edge case: if arr is empty or no such subarray, return 0

initliaze windowStart = 0, currentSum = 0, resultLength = math.inf
for loop that go through each index in the array:
    currentSum increased by the array index
    currentLength incremented by one if the currentSym increased by one array index
    while loop until if the currentSum is larger or equal than the targetSum
      check the subarray with the minimal length
        resultLength = minimum of the resultLength and the difference of the currentIndex - windowStart Index + 1 (ex: index 4 - 2 = 2, but there's 2, 3, 4 three numbers, so +1)
        currentSum decreemnt of the array index value
        windowStart incremented by one to continue looping and updating the currentSum
return the resultLength
'''
def smallest_subarray_with_given_sum(target, arr):
  windowStart = 0
  currentSum = 0
  resultLength = math.inf

  for each in range(len(arr)):
    currentSum += arr[each]
    while currentSum >= target:
      resultLength = min(resultLength, each - windowStart + 1)
      currentSum -= arr[windowStart]
      windowStart +=1
    
  if arr is [] or resultLength == math.inf:
    return 0
  return resultLength

def main():
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]))) # 5, 2 [2]
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]))) # 8 [1]
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]))) # 3, 4, 1 [3]


main()


# input: array with positive integers, target sum is positive integer
# output: minimum length of the subarray that have >= sum
# we want to loop through the array and get the currentSum by adding up the numbers
# while the currentSum is >= s
#  compare the min subarray length with the original length s and the currentSum's length, which is last index appear - first index appear +1
#  excluding the startingIndex's varible from the currentSum and increment the startingIndex by 1

# edge case, if s is infinite
# def smallest_subarray_with_given_sum(s, arr):
#   startIndex, currentSum = 0, 0
#   minLen = math.inf
#   for each in range(len(arr)):
#     currentSum += arr[each]
#     while currentSum >= s:
#       minLen = min(minLen, each - startIndex + 1) #index 2 - index 0 + 1 = len of 3
#       currentSum -= arr[startIndex]
#       startIndex += 1

#   if minLen == math.inf:
#     return 0
#   return minLen

















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
