# Problem Statement #
# Given an array of sorted numbers and a target sum,\
# find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair)
# such that they add up to the given target.
# Psuedocode
""" 
if empty array, return empty array
initiate left pointer at index zero and right pointer at index array length - 1
sum left pointer and right pointer
if sum = target, return left ptr, right ptr in array format
if sum > target, decrement rt ptr
if sum < target, increment left ptr
do all if above while left < rt
"""

def pair_with_targetsum(arr, target_sum):
  leftPtr = 0
  rightPtr = len(arr)-1
  if (arr == []): # single = is assign, == is compare
      return []
  while leftPtr < rightPtr:
    sum = arr[leftPtr] + arr[rightPtr]
    if sum == target_sum:
      return [leftPtr, rightPtr]
    if sum > target_sum:
      rightPtr = rightPtr - 1
    else:
      leftPtr = leftPtr + 1
  return

def main():
  print(pair_with_targetsum([1, 2, 3, 4, 6], 6))
  """ 
1 + 6 = 7 > target => decrement rt = 4
1 + 4 = 5 < target +> increment left = 2
2 + 4 = 6 = target, return [1, 3]
  """
  print(pair_with_targetsum([2, 5, 9, 11], 11))

main()



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
