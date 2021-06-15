# Problem Statement

# Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we cant count 0s, 1s, and 2s to recreate the array

# The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.


'''
input: unsorted array
output: nothing

For this problem I am going to start declaring two pointers which purpose is to keep track the places of every 0s and 2s
Step 1 loop through the array keeping track of the first place a 2 appears 
Step 2: conditional
        IF number its 0 we can add it to the start of the array and change the pointer to indicate the end of the 0s
          update both the pointer and iterator
        IF its 1 just update
        IF 2 swap and update the ptr 2 
We do not return anything
'''


def dutch_flag_sort(arr):
    # TODO: Write your code here
    first_ptr = 0  # 0ptr
    last_ptr = len(arr)-1  # 2ptr
    curr = 0  # iterator
    while curr <= last_ptr:
        # IF number its 0 we can add it to the start of the array and change the pointer to indicate the end of the 0s
        # update both the pointer and iterator
        if arr[curr] == 0:
            arr[first_ptr], arr[curr] = arr[curr], arr[first_ptr]
            curr += 1
            first_ptr += 1
        # IF its 1 just update
        elif arr[curr] == 1:
            curr += 1
        # IF 2 swap and update the ptr 2
        else:
            arr[last_ptr], arr[curr] = arr[curr], arr[last_ptr]
            last_ptr -= 1

    return


def main():
    arr = [1, 0, 2, 1, 0]
    dutch_flag_sort(arr)
    print(arr)

    arr = [2, 2, 0, 1, 2, 0]
    dutch_flag_sort(arr)
    print(arr)


main()


# Solution
# -----
# def dutch_flag_sort(arr):
#   # all elements < low are 0, and all elements > high are 2
#   # all elements from >= low < i are 1
#   low, high = 0, len(arr) - 1
#   i = 0
#   while(i <= high):
#     if arr[i] == 0:
#       arr[i], arr[low] = arr[low], arr[i]
#       # increment 'i' and 'low'
#       i += 1
#       low += 1
#     elif arr[i] == 1:
#       i += 1
#     else:  # the case for arr[i] == 2
#       arr[i], arr[high] = arr[high], arr[i]
#       # decrement 'high' only, after the swap the number at index 'i' could be 0, 1 or 2
#       high -= 1

# -----

# Time complexity #
# The time complexity of the above algorithm will be O(N) as we are iterating the input array only once.

# Space complexity #
# The algorithm runs in constant space O(1).
