# Problem Statement #

# We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

# input: an unsorted integer array range from 1 to n
# output: an array with all duplicate numbers (appears twice)
# edge case: one element => return []

'''
  We can apply swapping to set values in its correct place in the array and find those that are not in correct place as duplicate numbers.

  First we use a while loop to traverse through the arrray, 
  check if current value is equal to the value on the index of current value (if nums[index] is equal to nums[nums[index]-1])
  if not, we swap these two values;
  else, we increment the index by one to keep traversing the array.

  When finish the while loop, we find values that are not equal to current index + 1 (if nums[i] != i + 1, append (nums[i]) )

'''

def find_all_duplicates(nums):
  duplicateNumbers = []
  index = 0

  while index < len(nums):
    temp = nums[index] 

    if temp != nums[temp - 1]:
      nums[index], nums[temp - 1] = nums[temp - 1], nums[index]
    else:
      index += 1
  
  for i in range(len(nums)):
    if nums[i] != i + 1:
      duplicateNumbers.append(nums[i])


  return duplicateNumbers

def main():
  print(find_all_duplicates([3, 4, 4, 5, 5]))
  print(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]))
  print(find_all_duplicates([1]))

main()



# Solution
# -----
# def find_all_duplicates(nums):
#   i = 0
#   while i < len(nums):
#     j = nums[i] - 1
#     if nums[i] != nums[j]:
#       nums[i], nums[j] = nums[j], nums[i]  # swap
#     else:
#       i += 1

#   duplicateNumbers = []
#   for i in range(len(nums)):
#     if nums[i] != i + 1:
#       duplicateNumbers.append(nums[i])

#   return duplicateNumbers

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
