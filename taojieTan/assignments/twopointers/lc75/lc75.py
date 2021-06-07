# Problem Statement #

# Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

# The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

def dutch_flag_sort(arr):
  # TODO: Write your code here

# input: an unsorted integer array with only 0s, 1s, and 2s
# output: the same array with sorted integers (ascending order)
# edge case: empty array => return []

# since we need to sort the array in-place, we are not allowed to use any extra space => not sort method.
# we can apply two pointers to keep track of leftmost and rightmost indices in the array.
# we can use while loop to traverse through the array, if the current value is 0, we swap it with the value of leftmost position; 
# else if it is 2, we swap it with the value at the rightmost position, else if it is 1, we just skip it.
# this way, we put all 0s at the left, and all 2s at the right, 1 will automatically be at the middle after the loop

  left, right = 0, len(arr) - 1
  index = right

  while index >= left:
    if arr[index] == 0:
      temp = arr[left] 
      arr[left] = arr[index]
      arr[index] = temp
      left += 1
    elif arr[index] == 2:
      temp = arr[right] 
      arr[right] = arr[index]
      arr[index] = temp
      right -= 1
      index -= 1
    else:
      index -= 1
  return

def main():
  arr = [1, 0, 2, 1, 0]
  dutch_flag_sort(arr)
  print(arr)

  arr = [2, 2, 0, 1, 2, 0]
  dutch_flag_sort(arr)
  print(arr)

  arr = [2, 0, 2, 1, 0, 1, 1, 2, 2, 1, 0, 0, 0, 1, 1]
  dutch_flag_sort(arr)
  print(arr)

  arr = []
  dutch_flag_sort(arr)
  print(arr)

main()








# Solution
# -----
# def dutch_flag_sort(arr):
#   # all elements < low are 0, and all elements > high are 2
#   # all elements from >= low < i are 1
#   low, high = 0, len(arr) - 1
#   i = 0
#   while(i <= high):
#     if arr[i] == 0:
#       arr[i], arr[low] = arr[low], arr[i]
#       # increment 'i' and 'low'
#       i += 1
#       low += 1
#     elif arr[i] == 1:
#       i += 1
#     else:  # the case for arr[i] == 2
#       arr[i], arr[high] = arr[high], arr[i]
#       # decrement 'high' only, after the swap the number at index 'i' could be 0, 1 or 2
#       high -= 1

# -----

# Time complexity #
# The time complexity of the above algorithm will be O(N) as we are iterating the input array only once.

# Space complexity #
# The algorithm runs in constant space O(1).
