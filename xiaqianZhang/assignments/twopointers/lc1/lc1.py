# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

#Attempt 2
'''
Input: list of integers and target Sum integer
Output: index of the two numbers in the list that have the sum as the target sum
edge case: if the array is empty, return null

initliaze two variables, two pointer that one starts from index 0, another starts at the end of the array
  while the left pointer is smaller than the right pointer:
    initliaze a currentSum that is the sum of the start and end
    check if the currentSum is:
      equal as the target: return the index of start and end
      smaller than the target: move the start index rightwards because the currentSum is too small
      less than 0: move the end index leftwards since the currentSum is too large
'''

def pair_with_targetsum(arr, target):
  start = 0
  end = len(arr)-1
  while start < end:
    currentSum = arr[start] + arr[end]
    if target == currentSum:
      return [start, end]
    elif currentSum < target:
      start+=1
    else:
      end-=1
  return []


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




















# Solution
# -----
#   left, right = 0, len(arr) - 1
#   while(left < right):
#     current_sum = arr[left] + arr[right]
#     if current_sum == target_sum:
#       return [left, right]

#     if target_sum > current_sum:
#       left += 1  # we need a pair with a bigger sum
#     else:
#       right -= 1  # we need a pair with a smaller sum
#   return [-1, -1]
