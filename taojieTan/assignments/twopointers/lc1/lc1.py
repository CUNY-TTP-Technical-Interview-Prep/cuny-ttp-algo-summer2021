# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

def pair_with_targetsum(arr, target_sum):
  #input: an sorted integer array (positive and/or negative), a target sum integer 
  #output: a pair of indices 
  #edge cases: 1. empty array -> None
  #            2. no such pair adds up to the target sum -> None

  if len(arr) == 0:
    return None

  #initialize two pointers to keep track of indices position
  left_pointer, right_pointer = 0, len(arr) - 1

  #loop through the array from both sides toward the middle to find the pair 
  #initialize a temp_sum variable to keep track of the sum of leftmost and rightmost value
  #if temp_sum is equal to target_sum, we found the pair and just return the their indices
  #else if temp_sum is smaller than target_sum, it means the desired pair would possibly be on the right side of left_pointer -> left_pointer += 1
  #else if temp_sum is larger than target_sum, it means the desired pair would possibly be on the left side of right_pointer -> right_pointer -= 1
  #if we get out of the while loop without return the actual pair, it means there is no pair sum up to the target_sum, just return None

  while left_pointer < right_pointer:
    temp_sum =  arr[left_pointer] + arr[right_pointer]
    if temp_sum == target_sum:
       return [left_pointer, right_pointer]
    elif temp_sum > target_sum:
      right_pointer -= 1 
    else:
      left_pointer += 1

  return None


def main():
  print(pair_with_targetsum([1, 2, 3, 4, 6], 6))
  print(pair_with_targetsum([2, 5, 9, 11], 11))
  print(pair_with_targetsum([-12, -5, 0, 2, 9, 11], 4))
  print(pair_with_targetsum([-12, -5, 0, 2, 9, 11], 40))
  print(pair_with_targetsum([], 4))
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
