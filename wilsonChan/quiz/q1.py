
# Problem Statement
# Given an array of positive numbers and a positive number ‘k,’ 
# find the maximum sum of any contiguous subarray of size ‘k’.


'''
Given:
-array with positive numbers
-positive number 'k'

Result:
-find max sum

Variables:
-pointer the will iterate through array (current)
    -current will begin from the starting element on the left of array
-takes in the total sum of the array (max_sum)
-array with given numbers (whole_array)



Example:
k = 3
[2, 4, 1, 7, 3, 11]
         [7, 3, 11]     

#largest sum with window size 3
output: 21



Steps:
(Brute Force Approach - having a working solution before improving)
-Initialize the the variables current
-Utilize two for loops
    1) determine the length of the whole array
    2) add the numbers inside window
        -variable current is the size of window (index - [index-k])
        -use the max method to add up numbers inside window

Edge case:
-Is there an array or 'k' number
    -return 0

'''


def max_sum(whole_array, k):

    #Edge case
    if not whole_array or k == 0 :
        return 0


    #Initialize starting variables
    current = 0
    max_sum = 0

    #1st loop: loop through
    for number in range(k):
        max_sum += whole_array[number]

    #2nd loop: find highest sum based on window
    for number in range(k):
        current += whole_array[number] - whole_array[number - k]
        max_sum = max(current, max_sum)
    return max_sum





def main():
    print("Max sum based on size k: " + str())


