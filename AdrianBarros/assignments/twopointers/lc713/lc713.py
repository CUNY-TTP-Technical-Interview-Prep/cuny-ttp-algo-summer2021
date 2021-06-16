# Problem Statement #

# Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

# input: arr[] && target
# output:
'''
follow up questions:
by definition can 1 number be a subarray?
are we just counting the subarrays?
'''
'''
because we are dealing with positive numbers we do not have to worry about diving for 0
hence we can baically have a slidding window approach with a number and a ptr follwing it
step 1: loop through the array 
Step 2: for each number multiply the next one to the curr number
        IF not what we are looking for (product < k) we will loop moving the start until either we get something or it touches the curr num
        ELSE we add all the sub arrays into the response
return res

'''




from typing import List
def find_subarrays(self, nums: List[int], k: int) -> int:
    res = 0
    # initialize the start of the subarray and the product as 1 for us to multiply more numbers into it
    start = 0
    product = 1
    # TODO: Write your code here
    # step 1: loop through the array
    for i in range(len(nums)):
        # Step 2: for each number multiply the next one to the curr number
        product *= nums[i]
        if product >= k:
            while product >= k and start <= i:
                product /= nums[start]
                start += 1
        # adding all the subarrays into the responce
        res += i - start + 1

    return res


def main():
    print(find_subarrays(0, [2, 5, 3, 10], 30))  # expected 6
    print(find_subarrays(0, [8, 2, 6, 5], 50))  # expected 7
    print(find_subarrays(0, [1, 2, 3, 4], 50))  # expected 10


main()


# Solution
# -----
# def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
#         l = 0
#         res = 0
#         product = 1

#         for r in range(len(nums)):
#             product *= nums[r]

#             if product >= k:
#                 while product >= k and l <= r:
#                     product /= nums[l]
#                     l += 1

#             res += r - l + 1

#         return res

# -----
