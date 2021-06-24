# Problem Statement #

# We are given an unsorted array containing n numbers taken from the range 1 to n. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.
'''
input: a list of values
output: a list of duplicates
step1: loop through the array
step2: start with the basics of a cyclic sort by comparing the current value to the value in the index that it should be
       this will actually prevent us from going in an infinite loop because if there a duplicate it will simply continue
step3: after it reaches the end I am going to go through the array checking if the value matches the index. Naturally if there is duplicates 
      they wont be. Add them to a list and return that

time complexity: O(n), Cyclic sort runs at O(n) and the loop to find duplicates runs at O(n), O(2n) = O(n)
'''


def find_all_duplicates(nums):
    duplicateNumbers = []
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
            duplicateNumbers.append(nums[i])
    return duplicateNumbers


def main():
    print(find_all_duplicates([3, 4, 4, 5, 5]))  # [4, 5]
    print(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]))  # [3, 5]


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
