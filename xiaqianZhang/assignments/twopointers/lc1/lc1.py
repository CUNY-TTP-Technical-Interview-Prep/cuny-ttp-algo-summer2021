# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

#Attempt 3
'''
Input: sorted array that may contain negative integers
Output: return the index of two integers that have the same sum as the target sum

Edge case: if the array is empty, return 0
intialize two index:
startIndex = 0
lastIndex = len(arr) - 1

while startIndex less than the lastIndex, that means these two index are not meeting each other:
  check if the sum of these two index are equal to the targetSum:
    if so, return the startIndex and lastIndex as array pair
    if the sum of these two index are smaller than the targetSum:
      increment the startIndex by 1, since the array is sorted, startIndex starts with the smaller numbers
    since our currentsum is smaller than the target Sum, we want to increase the current sum size
    else if the current sum is larger than the targetSum:
      decrement the lastIndex, since lastIndex is larger value, we want to lower the current Sum

'''

def pair_with_targetsum(arr, target):
  startIndex = 0
  lastIndex = len(arr) - 1
  if len(arr) == 0:
    return []

  while startIndex < lastIndex:
    if arr[startIndex] + arr[lastIndex] == target:
      return [startIndex, lastIndex]
    elif arr[startIndex] + arr[lastIndex] < target:
      startIndex += 1
    else:
      lastIndex -= 1

def main():
  print(pair_with_targetsum([1, 2, 3, 4, 6], 6))
  print(pair_with_targetsum([2, 5, 9, 11], 11))
  print(pair_with_targetsum([], 11))


main()


# input: sorted list that may including negative numbers, target sum that may be negative
# output: pair of index that the numbers added up to the target sum
# edge cases: empty array, sum not found -> return empty array
# left index that initialize starting at arr[0]
# right index that initialize at the end of arr = len(arr)-1
# loop through the array while left integer < right integer
# currentSum = left int + right int
#   check if currentSum == targetSum Yes-> return the index where both int located
#   if currentSum < targetSum -> increment the left index
#   if currentSum > targetSum -> decrement the right index
# if loop through the entire list and can't found any index that added up to target Sum, return []


# def pair_with_targetsum(arr, target_sum):
#   leftIndex = 0
#   rightIndex = len(arr)-1
#   while leftIndex < rightIndex:
#     currentSum = arr[leftIndex] + arr[rightIndex]
#     if currentSum == target_sum:
#       return [leftIndex, rightIndex]

#     elif currentSum < target_sum:
#       leftIndex +=1
    
#     else:
#       rightIndex -=1

#   return []
















