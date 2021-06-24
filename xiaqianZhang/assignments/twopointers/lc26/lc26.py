# Problem Statement #
# Given an unsorted array of numbers and a target ‘key’, 
# remove all instances of ‘key’ in-place and return the new length of the array.


def remove_duplicates(arr):
  return


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
