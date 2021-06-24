# Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of #size ‘k’.


# So we are given an array of k = [positive numbers]
# and we are given a variable k = "integer that is the size of the array"
# We need to find the max sum of of this subarrays with size k

def maxSub(arr, k):
    length = len(arr)
    index = 0

    if length == 0:
        return 0

    result = 0
    maxSum = result
    while index >= k:

        maxSum += arr[index] - arr[index - k]
        result = max(result, maxSum)

        return result

    if length < k:
        return "Invalid code"


def main():
    arr = [2, 4, 6, 7, 8, 10, 20]
    k = 4
    print(maxSub(arr, k))
    arr1 = []
    k1 = 1
    print(maxSub(arr1, k1))
    arr2 = [5, 10, 15, 25]
    k2 = 3
    print(maxSub(arr2, k2))


main()
