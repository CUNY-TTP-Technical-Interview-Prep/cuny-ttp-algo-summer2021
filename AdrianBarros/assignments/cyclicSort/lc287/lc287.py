# Problem Statement #

# We are given an unsorted array containing n+1 numbers taken from the range 1 to n. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.
'''
input: undorted array
ouput: int duplicate number

step1: loop through the array checking if every value is in position
        if are continue
    else:
    step2: check if they are equals to the value in their correct position, if they are means we already added that number(or that we found a value taht equals another)
          FINAL step  return that value
       ELSE swap them
edge case:
if it does not find a duplicate return -1
'''


def find_duplicate(nums):
  # TODO: Write your code here
    curr = 0
    while curr < len(nums):
        if nums[curr] != curr + 1:
            j = nums[curr] - 1
            if nums[curr] != nums[j]:
                nums[curr], nums[j] = nums[j], nums[curr]
            else:
                return nums[curr]
        else:
            curr += 1

    return -1


def main():
    print(find_duplicate([1, 4, 4, 3, 2]))
    print(find_duplicate([2, 1, 3, 3, 5, 4]))
    print(find_duplicate([2, 4, 1, 4, 4]))


main()


# Solution
# -----

# def find_duplicate(nums):
#   i = 0
#   while i < len(nums):
#     if nums[i] != i + 1:
#       j = nums[i] - 1
#       if nums[i] != nums[j]:
#         nums[i], nums[j] = nums[j], nums[i]  # swap
#       else:  # we have found the duplicate
#         return nums[i]
#     else:
#       i += 1

#   return -1

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# The algorithm runs in constant space O(1) but modifies the input array.
