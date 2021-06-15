# Problem Statement #


'''
input: arr[] len=n
output: int the missing number
the numbers are sequential


step 1: start with a pointer 
step 2: start arrenging the numbers from the first
       If number is in range and is not in correct position swap
       elIF means its in position and swap
step 3 loop again to find the one out of order
return the indece that does not match


edge case:
if not number missing: return -1
'''


def find_missing_number(nums):
    # TODO: Write your code here
    # step 1: start with a pointer
    ptr = 0
    ran = len(nums)  # range of array
    # step 2: start arrenging the numbers from the start cyclical
    while ptr < ran:
        curr = nums[ptr]
        if nums[ptr] < ran and nums[ptr] != nums[curr]:
            nums[ptr], nums[curr] = nums[curr], nums[ptr]
        else:
            ptr += 1

    for i in range(len(nums)):
        if nums[i] != i:
            return i

    return -1


def main():
    print(find_missing_number([4, 0, 3, 1]))
    print(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]))
    print(find_missing_number([2, 0, 3, 1]))  # expected -1 //runs correctly


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
