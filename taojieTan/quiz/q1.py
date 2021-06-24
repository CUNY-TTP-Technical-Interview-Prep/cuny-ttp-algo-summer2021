'''
Problem Statement

Given an array of positive numbers and a positive number ‘k,’ 
find the maximum sum of any contiguous subarray of size ‘k’.
'''

# input: an array with positive integers, a positive integer k  (k should be greater or equal to length of the array)
# output: a maximum sum
# edge case: k equals length of array => return sum of array

''' 
    example: [3, 5, 6, 1, 6, 7], k = 3   ==> return 14
             [1, 1, 1, 1, 1, 1], k = 4   ==> return 4
'''

'''
    Overview:
    Since we are asked to find the maximum sum of contiguous subarray, we can apply sliding window pattern to solve the problem.
    The size of window is k, and we initialize start and end variable to represent the size of sliding window.
    We move the window toward the right, and at the meantime, we sum the subarray and compare with current max sum.
    We adjust the sliding window by subtract the value at start index and add the value at end index.

    Pseudo code:
    First initialize start and end variables with 0, and max_sum with 0
    and initialize a temp variable to store temporary sum of subarray.
    for end smaller than the length of array, 
    we add the value of current index,
    when end - start + 1 is greater to k, we compare the temp sum with max_sum, and store the bigger value to max_sum.
    Then subtract the value at start index.
    We repeat the steps until end reaches the end of array.

'''
def maximum_sum_of_subarray(arr, k):
    start = 0
    max_sum = 0
    temp = 0
    for end in range(len(arr)):
        temp += arr[end]
        if end - start + 1 >= k:
            max_sum = max(max_sum, temp)
            temp -= arr[start]
            start += 1
    
    return max_sum
        
print(maximum_sum_of_subarray([3, 5, 6, 1, 6, 7],3))
print(maximum_sum_of_subarray([1, 1, 1, 1, 1, 1],4))
print(maximum_sum_of_subarray([1, 2, 3, 4, 5, 6],2))
print(maximum_sum_of_subarray([1, 2],2))


