# Problem Statement #

# We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

# input: an unsorted list with integers ranging from 1 to n and length of n+1
# output: the duplicate integer in the list
# edge cases: 1. length of list is smaller than 2 => return 0

'''
 Since we are allowed to modify the list, we can first place each integer into correct position (integer 1 would be on index 0, 2 would be on index 1, and so on),
 and if we have another integer that needs to be swapped to the same position, it means we have duplicate integer. 

 We can use a while loop to traverse through the list, and check if each integer is in correct position, 
 if not, we swap it with the index equals to integer - 1, 
 and the meantime, we also need to check if the value in the index (integer - 1) has the same value as integer, 
 if it does, we find the duplicate and just return the integer; Else, we can swap them.
 If the integer already in the correct position, we increment the index to keep traversing the list. 

 we will return 0 if no duplicate found after the loop.
'''

def find_duplicate(nums):
  # TODO: Write your code here
  index = 0

  while index < len(nums):
    if nums[index] != index + 1:
      correct_pos = nums[index] - 1
      if nums[correct_pos] == nums[index]:
        return nums[index]
      else:
        nums[correct_pos], nums[index] = nums[index], nums[correct_pos]
    else:
      index += 1

  return -1

def main():
  print(find_duplicate([1, 4, 4, 3, 2]))
  print(find_duplicate([2, 1, 3, 3, 5, 4]))
  print(find_duplicate([2, 4, 1, 4, 4]))
  print(find_duplicate([2, 1, 3, 1, 5, 4]))
  print(find_duplicate([4, 1, 1, 1, 1]))
  print(find_duplicate([2, 1]))
  print(find_duplicate([1]))
  print(find_duplicate([]))


main()


# Solution
# -----

# def find_duplicate(nums):
#   i = 0
#   while i < len(nums):
#     if nums[i] != i + 1:
#       j = nums[i] - 1
#       if nums[i] != nums[j]:
#         nums[i], nums[j] = nums[j], nums[i]  # swap
#       else:  # we have found the duplicate
#         return nums[i]
#     else:
#       i += 1

#   return -1

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# The algorithm runs in constant space O(1) but modifies the input array.
