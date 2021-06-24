'''
Problem Statement
Given an array of positive numbers and a positive number k, find the maximum sum of any contiguous subarray of size k.
'''

'''
input: unsorted array + int
output: max sum
step1: start declaring two pointers
step2: loop through the array adding all the k numbers
step3: compare with the last max number and keep going
setp4: substract the first pointer to it and move both pointers
step5: return the max value


time complexity O(n+n) = O(n) two Separate loops but we only go over the whole loop once
space complexity: O(1)

edge cases: 
not as much as an edge case as a follow up question is what if we add neg numbers in the array:
        then we change max from 0 to -inf
what is if the array is empty or the number is 0 or neg
            return 0
'''


def max_sum_sub(arr, num):
    if not arr or num < 1:
        return 0
    ptr1 = ptr2 = 0
    max_sum = 0
    curr_sum = 0
    for i in range(num):
        curr_sum += arr[i]
        ptr2 += 1

    max_sum = curr_sum

    while ptr2 < len(arr):
        curr_sum -= arr[ptr1]
        ptr1 += 1
        curr_sum += arr[ptr2]
        max_sum = max(max_sum, curr_sum)
        ptr2 += 1
    return max_sum


print(max_sum_sub([1, 2, 3, 4, 5, 6], 3))  # 15
print(max_sum_sub([100, 90, 18, 4, 5, 6], 2))  # 190
