# Problem Statement #
# Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.


def remove_duplicates(arr, key):
  #input: an unsorted integer array (positive and/or negative), an integer key
  #output: the length of the new array

  #edge cases: empty array -> return 0

  #initialize left_pointer and right_pointer to keep track of swrapped indices
  left_pointer = 0
  right_pointer =  len(arr) - 1

  #initialize a counter to keep track of numbers of instance of key in the array
  sameValCount = 0
        
  #loop through the array to perform the following:
  #first, check if the leftmost value is equal to key
  #if yes, swrap the leftmost value with the rightmost value, and shift the right_pointer to the left by one
  #else, keep shifting the left_pointer
  #we break out the while loop when left_pointer is greater than right_pointer, which means we already went all value
  
  while left_pointer <= right_pointer:
    if arr[left_pointer] == key:
        temp = arr[right_pointer]
        arr[right_pointer] = key
        arr[left_pointer] = temp
        right_pointer -= 1
        sameValCount += 1
    else:
        left_pointer += 1

  #then we pop every value that is equal to key (perform this step if we want to return an new array without instances of key) 
  while sameValCount > 0:
      arr.pop()
      sameValCount -= 1 

  return len(arr)


def main():
  print(remove_duplicates([-2, 10, -3, -3, 16, 9, -3, 9], -3))
  print(remove_duplicates([2, 12, 2, -11], 2)) 
  print(remove_duplicates([10], 10)) 
  print(remove_duplicates([10, -5, 2, 2, 11], 4)) 
  print(remove_duplicates([], 4))
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