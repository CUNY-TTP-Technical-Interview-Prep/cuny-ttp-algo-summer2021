# Problem Statement #

# We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

# input: an unsorted list with integers ranging from 0 to n and length of n
# output: an integer
# edge case: empty list => return -1

'''
 We can use a while loop swap each integer into its correct position (integer 1 will be on index 0, 2 will be on index 1, and so on)
 and we need to skip the integer zero. 
 After the while loop, the position where integer zero sits will be the missing integer (index + 1)
 We can use the for loop to traverse through the list to check the zero integer.
'''


def find_missing_number(nums):
  # TODO: Write your code here
  index = 0 

  while index < len(nums):
    if nums[index] != index + 1 and nums[index] != 0:
      correct_pos = nums[index] - 1
      nums[correct_pos], nums[index] = nums[index], nums[correct_pos]
    else:
      index += 1

  for i in range(len(nums)):
    if nums[i] == 0:
      return i+1

  return -1

def main():
  print(find_missing_number([4, 0, 3, 1])) 
  print(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]))
  print(find_missing_number([0, 1]))

main()




# Solution
# -----
# def find_missing_number(nums):
#   i, n = 0, len(nums)
#   while i < n:
#     j = nums[i]
#     if nums[i] < n and nums[i] != nums[j]:
#       nums[i], nums[j] = nums[j], nums[i]  # swap
#     else:
#       i += 1

#   # find the first number missing from its index, that will be our required number
#   for i in range(n):
#     if nums[i] != i:
#       return i

#   return n
  
# -----

# Time complexity #
# The time complexity of the above algorithm is O(n). In the while loop, although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers and once a number is at its correct index, we will move on to the next number by incrementing i. In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n-1) + O(n) which is asymptotically equivalent to O(n).

# Space complexity #
# The algorithm runs in constant space O(1).
