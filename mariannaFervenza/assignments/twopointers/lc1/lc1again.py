# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


# We are given an array (arr) anf a targetSum 
#the way we are going throught the rray is by pointers to the left and pointers to the right

#we will loop through the array with a while loop
#we need to get the sum of the elements in each pointer
# the sum need to be the exact same as the targetSum
# if the sum is not == to the targetSum then we need to move each pointer accordingly

#So if the sum > targetSum and we assume that the array is in increasing sorted array
#then we move the right pointer to the left

#if the sum < targetSum we need to move the left pointer to the right

#in case the there are no elements in the array to fulfill the targetSum we return the empty array

def targpoint(arr, targetSum):
    r = len(arr) - 1
    l = 0
    while(l<=r):
        sum = arr[r] + arr[l]
        if(sum == targetSum):
            return [l, r]
        elif(sum > targetSum):
            r -= 1
        elif(sum < targetSum):
            l += 1
        else:
            return []

def main():
    print(targpoint([2, 3, 4, 5, 6], 9))
    print(targpoint([6, 7, 8, 9, 10], 19))
    print(targpoint([], 9))

main()
        
        



