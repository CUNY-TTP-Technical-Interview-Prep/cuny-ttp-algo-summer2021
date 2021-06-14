# Problem Statement #

# We are given an unsorted array containing numbers taken from the 
# range 1 to ‘n’. The array can have duplicates, which means some 
# numbers will be missing. Find all those missing numbers.

'''

GIVEN:
-The value begins from 1 to 'n' while index begins from 0
-Unsorted Array

RESULT:
-Return missing numbers



APPROACH # 1:
[2, 3, 1, 8, 2, 3, 5, 1]      #Array is unsorted

[1, 1, 2, 2, 3, 3, 5, 8]      #Sorting values with cyclic sort
  -There are duplicates for three values in array [1, 2, 3]
  -The array is missing values [4, 6, 7]
  -Easier to identify values that do not belong in their correct indices
  -Since the array starts from value 1, there should be 8 values within the array
   due to index position + 1

[1, 1, 2, 2, 3, 3, 5, 8]
  -index 4 is missing -> 3 + 1
  -index 6 is missing -> 5 + 1
  -index 7 is missing -> 6 + 1



APPROACH # 2 (Used)

[2, 3, 1, 8, 2, 3, 5, 1] 

1) Iterate through length of array with for loop
    -Initialize variable that subtracts 1 from every value in element of array
      -Subtracting indicates that the index has been visited
    -Convert the visited indices into negative value

2) Another iteration through array with for loop
    -Convert the negative values back into positive values
    -The indices with non-negative values will be 
     incremented by 1 (missing values from array)


***Main takeaway: use negative to distinguish between duplicate or not***

'''


def find_missing_numbers(nums):
  missingNumbers = []
  # TODO: Write your code here

  for i in range(len(nums)):        #1st iteration
    idx_pos = abs(nums[i]) - 1      #absolute value of elements in nums array - 1
    nums[idx_pos] = -abs(nums[idx_pos])      #absolute value ensures the number will be positive before converting to negative

  for i in range(len(nums)):        #2nd iteration
    if nums[i] < 0:
      nums[i] = -nums[i]        #makes the values positive again after being negative from 1st iteration
    else:
      missingNumbers.append(i + 1)         #adding 1 to indices that is positive value
    
  return missingNumbers

def main():
  print(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]))    #[4, 6, 7]
  print(find_missing_numbers([2, 4, 1, 2]))                #[3]
  print(find_missing_numbers([2, 3, 2, 1]))                #[4]


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
