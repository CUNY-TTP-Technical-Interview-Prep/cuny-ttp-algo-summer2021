#Problem Statement
#Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

'''
Input: array of positive numbers and given with a positive integer k
Output: return the max sum of continuous subarray with size of k

edge case: if the array is empty, return 0

initialize the startIndex = 0, currentSum = 0, maxSum = 0
loop through each index in the given array:
    append the value of the each index into the currentSum
    if each index is greater than the size of k-1 (that means the subarray is outside of the boundary, we want to continue move towards the next subarray)
        update the maxSum
        currentSum decrease the value by the startIndex, since we want to continue looping to next subarray without repeat calculation
        increment the startIndex by 1
return maxSum
'''

def maxSum_subarray_k(arr, k):
    startIndex = 0
    currentSum = 0
    maxSum = 0

    if len(arr) == 0:
        return 0
    
    for each in range(len(arr)):
        currentSum += arr[each]
        if each >= k-1:
            maxSum = max(maxSum, currentSum)
            currentSum -= arr[startIndex]
            startIndex += 1
    return maxSum


def main():
    print("Maximum sum of contiguous subarray of size k is: " + str(maxSum_subarray_k([1, 2, 3, 4, 4, 5, 6], 2)))
    print("Maximum sum of contiguous subarray of size k is: " + str(maxSum_subarray_k([], 2)))
    print("Maximum sum of contiguous subarray of size k is: " + str(maxSum_subarray_k([11, 2, 3, 4, 4, 5, 6], 3)))


main()
