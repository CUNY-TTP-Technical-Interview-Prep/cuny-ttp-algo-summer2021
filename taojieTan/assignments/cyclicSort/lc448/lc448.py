# Problem Statement #

# We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

# input: an unsorted integer array from 1 to n
# output: an array with all missing integers 
# edge case: one element => return []

'''
  Since the numbers are between 1 to n, we can utilize the array indices to find missing numbers.
  
  One way to do it is: 
  use a while loop to traverse through the array, 
  check if the current value is equal to value on the index of current value - 1 (if nums[index] is equal to nums[nums[index] - 1])
  if no, we keep swaping these two values until they are equal,
  then we move to the next index and repeat the steps until we hits the last element of array. 
  After the while loop, we use another for loop to check if current value is equal to index + 1 (if nums[i] is equal to i + 1).
  Those that don't satisfy the condition are the missing numbers (i+1) and store them to result list.

  Time complexity: 0(N)   Space complexity: O(1) or O(N) when count the final result list.


  Another way to do it without swapping is: 
  store integers from 1 to n to set, and use the built in method set.difference to find all missing integers.
  Time complexity should be O(N) in average case  Space complexity: O(N) 


  Third way to do it without swapping is: 
  Since the integers are positive (1 to n), we can use a foor loop to traverse the array and set the current value negative and mark it as existed, 
  which means when finish the for loop, those with positive integers are the one missing. 
  
  for i in range of 0 to length of array,
  set index = absolute (current value of array) - 1 
  then negate the value in array based on index

  for i in range of 0 to length of array,
  if current value is greater than 0
  store i + 1 to result list

  Time complexity: O(N)   Space complexity: O(1) or O(N) when count the final result list.

'''
def find_missing_numbers(nums):
  for i in range(len(nums)):
    index = abs(nums[i]) - 1
    nums[index] = - abs(nums[index])
  
  return [i + 1 for i in range(len(nums)) if nums[i] > 0]

def main():
  print(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]))
  print(find_missing_numbers([2, 4, 1, 2]))
  print(find_missing_numbers([2, 3, 2, 1]))
  print(find_missing_numbers([1]))

main()




# Solution
# -----
# def find_missing_numbers(nums):
#   i = 0
#   while i < len(nums):
#     j = nums[i] - 1
#     if nums[i] != nums[j]:
#       nums[i], nums[j] = nums[j], nums[i]  # swap
#     else:
#       i += 1

#   missingNumbers = []

#   for i in range(len(nums)):
#     if nums[i] != i + 1:
#       missingNumbers.append(i + 1)

#   return missingNumbers

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# Ignoring the space required for the output array, the algorithm runs in constant space O(1).
