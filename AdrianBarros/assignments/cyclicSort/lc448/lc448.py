# Problem Statement #

# We are given an unsorted array containing numbers taken from the range 1 to n. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
'''
input: a list of numbers
output: a list of duplicates
step1: loop through the array checking if the number in the number+1 position is the same number
Step 2: conditional: IF current number is not curr+1 swap them
                      else keep going
step3: after that loop is done we go through the list one more time and if the index does not match add it to a list

return the list
time complexity: O(n), we run one loop that runs n times and the second one runs exactly the same
'''


def find_missing_numbers(nums):
    missingNumbers = []
    # TODO: Write your code here
    curr = 0
    while curr < len(nums):
        correct = nums[curr] - 1
        if nums[curr] != nums[correct]:
            nums[curr], nums[correct] = nums[correct], nums[curr]
        else:
            curr += 1
    for i in range(len(nums)):
        if nums[i] != i+1:
            missingNumbers.append(i+1)
    return missingNumbers


def main():
    print(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]))
    print(find_missing_numbers([2, 4, 1, 2]))
    print(find_missing_numbers([2, 3, 2, 1]))


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
