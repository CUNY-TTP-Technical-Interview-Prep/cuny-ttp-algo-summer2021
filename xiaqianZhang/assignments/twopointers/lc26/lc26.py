# Problem Statement #
# Given an integer array nums sorted in non-decreasing order, 
# remove the duplicates in-place such that each unique element appears only once. 
# The relative order of the elements should be kept the same.

# Since it is impossible to change the length of the array in some languages, 
# you must instead have the result be placed in the first part of the array nums. 
# More formally, if there are k elements after removing the duplicates, 
# then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

# Return k after placing the final result in the first k slots of nums.

'''
Input: sorted array with some duplicates values
Output: return the length of update array that without any duplicates

Edge cases: if the array is empty, return 0

initialize nextIndex = 1
traverse through the array, check if the index i is the same as the index i+1:
  if they are not the same: we set the value at nextIndex = array[index i + 1]
  then increment the nextIndex
return the nextIndex, this will return the numbers of unique numbers 

'''
def remove_duplicates(arr):
  nextIndex = 1
  for each in range(len(arr)-1):
    if arr[each] != arr[each+1]:
      arr[nextIndex] = arr[each+1]
      nextIndex+=1
  return nextIndex


def main():
  print(remove_duplicates([2, 3, 3, 3, 6, 9, 9]))
  print(remove_duplicates([2, 2, 2, 11]))


main()









# Solution
# -----
#   # index of the next non-duplicate element
#   next_non_duplicate = 1

#   i = 1
#   while(i < len(arr)):
#     if arr[next_non_duplicate - 1] != arr[i]:
#       arr[next_non_duplicate] = arr[i]
#       next_non_duplicate += 1
#     i += 1

#   return next_non_duplicate

# -----

# Time Complexity #
# The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

# Space Complexity #
# The algorithm runs in constant space O(1).
