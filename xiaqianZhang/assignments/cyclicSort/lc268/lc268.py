# Problem Statement #

# We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
# Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

#Attempt 1 brainstorm but on the wrong track
# input: list of distinct integers from range 0-n
# output: return the missing number
# given n numbers, and the original length of the array is n+1
# increment a space in the given array with variable x
# while loop that swap the numbers if they are not on the right position, currentPtr = swapPtr, index 0 = num 0
# ignore the x during the swap, and it will gradually end up in some position while the other integers are located at the correct position
# return the index of where x located, that will be the missing integer

# Solution without using the cyclicSort
# original Sum = 0-4
#currentSum = the numbers given from the input array
#subtract the difference, that will be the missing number

# def find_missing_number(nums):
#   originalSum = 0
#   currentSum = 0

#   for each in range(len(nums)+1):
#     originalSum+=each

#   for each in range(len(nums)):
#     currentSum+=nums[each]
  
#   return originalSum - currentSum


#Solution with cyclicSort
# We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
# Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

def find_missing_number(nums):


def main():
  print(find_missing_number([4, 0, 3, 1])) #2 
  print(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]))

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

#   return nums
  
# -----

# Time complexity #
# The time complexity of the above algorithm is O(n). In the while loop, although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers and once a number is at its correct index, we will move on to the next number by incrementing i. In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n-1) + O(n) which is asymptotically equivalent to O(n).

# Space complexity #
# The algorithm runs in constant space O(1).
