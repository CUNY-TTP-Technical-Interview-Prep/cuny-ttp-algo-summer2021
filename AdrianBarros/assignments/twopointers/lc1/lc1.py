# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

####First method I thought of(works too)########
# for this problem I want to prioritize speed over space
# so I am going to be using a dictionary
# Step 1: loop through the array Storing for each value check if the dictionary contains the necessary value to make the sum
# step 2: conditional
#  IF its there take the indecy of the the curr and desired value
#  IF NOT there I will be storing the curr value as the key and the indecy as the value in the dictionary


####Actually using two pointers########
# step 1: set two pointers in the front and Back of array
# Step 2: make a loop that will go until one of two things happen
#     Either we find the pair or the pointers are pointing to the same thing
# Step 3: choose which pointer moves
# Utilizing the order of the numbers
# IF the sum of both > target sum back pointer decreses -1
# IF the sum < target sum front pointer increseas+1


def pair_with_targetsum(arr, target_sum):
    # Step 1 assing pointers
    front = 0
    back = len(arr)-1
    # step 2
    while(front < back):
        cur_sum = arr[front]+arr[back]
        if cur_sum == target_sum:
            return[front, back]
        if cur_sum > target_sum:
            back -= 1
        else:
            front += 1
    # if not found return nothing
    return []


def main():
    print(pair_with_targetsum([1, 2, 3, 4, 6], 6))
    print(pair_with_targetsum([2, 5, 9, 11], 11))


main()


# Solution
# -----
#   left, right = 0, len(arr) - 1
#   while(left < right):
#     current_sum = arr[left] + arr[right]
#     if current_sum == target_sum:
#       return [left, right]

#     if target_sum > current_sum:
#       left += 1  # we need a pair with a bigger sum
#     else:
#       right -= 1  # we need a pair with a smaller sum
#   return [-1, -1]
