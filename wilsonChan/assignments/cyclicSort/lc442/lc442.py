# Problem Statement #

# We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
# The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.


'''
Misc. Notes
-"without using extra space" (space constraint)          space O(n)
-range 1 to ‘n’       (focus on actual value inside array, not index)


OUTPUT:
[3, 4, 4, 5, 5]                 #[4,5]
[5, 4, 7, 2, 3, 5, 3]           #[3]

[3, 4, 4, , 70, 5, 5,100]       # not possible


Variables
-i = 0       (starting value and its value will change throughout)
    -The approach doesn't necessarily require initialization


Steps:
0) Manipulate the given input values
1) Iterate through the array with for loop
    -No need to initialize variable for this approach
    -In this approach, sorting the values isn't necessary since the problem
     is asking to return the duplicate values
2) The goal is to make the values negative
    -Easier to identify that there is a duplicate
      -If multiple negative values are discovered, it indicates that the
       value has already been seen
          -The duplicate values will share the same index reference and will
           be appended into duplicateNumbers empty array



QUESTION/ASSUMPTION:
-Will there be an empty array?
    -if statement to check if there is anything within the array
      -return []


'''



def find_all_duplicates(nums):
  # TODO: Write your code here
  duplicateNumbers = []
  for n in nums:
    if nums[abs(n)-1] > 0:                 #Use absolute value to ensure positive value before becoming negative
      nums[abs(n)-1] = -nums[abs(n)-1]     #Convert to negative
    else:
      duplicateNumbers.append(abs(n)) 
  return duplicateNumbers

def main():
  print(find_all_duplicates([3, 4, 4, 5, 5]))             #[4,5]
  print(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]))       #[5,3]


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
