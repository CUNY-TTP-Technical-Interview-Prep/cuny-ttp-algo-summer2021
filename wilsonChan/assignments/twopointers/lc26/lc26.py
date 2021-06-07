# Problem Statement #
# Given an array of sorted numbers, remove all duplicates from it. 
# You should not use any extra space; after removing the duplicates 
# in-place return the length of the subarray that has no duplicate in it.


'''
Given:
array- sorted numbers

Result:
return length of subarray with no duplicates


Steps:
Initialize the variable start
Iterate through array with while loop
  -if the starting index = ending index, remove the starting index
  -otherwise move to the next index to the right
Return the length of the whole array

'''

def remove_duplicates(arr):
  start = 0

  while start < len(arr):
    if arr[start] == arr[start - 1]:        #if the starting index == 
      arr.pop(start)
    else:
      start += 1
  return len(arr)


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
