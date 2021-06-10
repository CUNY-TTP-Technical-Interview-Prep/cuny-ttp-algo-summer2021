# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

##the array will have pointers right  (r) and left (l) 
##initialize the pointers (r == len(arr)) (l == 0)
##loop through array adding to check if the left element of the array
##and the right element of the array are bigger, less or equal to our target_sum

##if the sum is greater the our target_Sum then we shoulf move the right-most pointer to
##the left and check 

##if the sum is less than our target_Sum we should move the left-most pointer to the right
##and check again

##when we've reached a right pointer and a left pointer that give us the target_sum we
##should return the indices of the two numbers 

##As long as left is less than right we should keep looping
##otherwise return an empty array

##if the array is already empty we just return []

def pair_with_targetsum(arr, target_sum):
  r = len(arr) - 1 
  l = 0 
  while(l<r):
    sum = arr[l] + arr[r]
    if sum < target_sum:
      l += 1
    elif sum > target_sum:
      r -= 1
    else:
      return [l, r]
  return []


def main():
  print(pair_with_targetsum([1, 2, 3, 4, 6], 6))
  print(pair_with_targetsum([2, 5, 9, 11], 11))
  print(pair_with_targetsum([], 11))


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
