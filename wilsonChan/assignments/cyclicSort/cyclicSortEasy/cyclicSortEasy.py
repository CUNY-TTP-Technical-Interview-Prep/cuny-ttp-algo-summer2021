# Problem Statement #

# We are given an array containing ‘n’ objects. Each object, 
# when created, was assigned a unique number from 1 to ‘n’ based on 
# their creation sequence. This means that the object with sequence number 
# ‘3’ was created just before the object with sequence number ‘4’.

# Write a function to sort the objects in-place on their creation 
# sequence number in O(n) and without any extra space. For simplicity, 
# let’s assume we are passed an integer array containing only the 
# sequence numbers, though each number is actually an object.

'''

EXAMPLE:
[2, 6, 4, 3, 1, 5] -> input

[2, 6, 4, 3, 1, 5] -> swap 2 and 6
[6, 2, 4, 3, 1, 5] -> swap 6 and 5
[5, 2, 4, 3, 1, 6] -> swap 5 and 1
[1, 2, 4, 3, 5, 6] -> swap 4 and 3
[1, 2, 3, 4, 5, 6] -> done


STEPS:
1) Initialize current_value variable
2) While loop with the condition of start < length of array
3) j represents the value from current_value - 1      (gives you the correct index to reference)
    -this will match current_value to appropriate index in array
        ex: [2, 6, 4, 3, 1, 5]       
        element with value 4 would be on index 3 (4-1 =3)
4) If value in current_value index != next index position
    -swap value of current_value to and j
5) Otherwise increment to next index


COMPLEXITY:
Time: O(n)
Space: O(1) since the size of the array doesn't change

'''



def cyclic_sort(nums):
  # TODO: Write your code here

  current_value = 0

  while current_value < len(nums):
    j = nums[current_value] - 1               #value on starting index - 1 = gives you the proper index to reference
    if nums[current_value] != nums[j]:
      nums[current_value], nums[j] = nums[j], nums[current_value]    #swap values when the value of current_value doesn't match correct index
    else:
      current_value += 1           #continues if the value matches correct index

  return nums

def main():
  print(cyclic_sort([3, 1, 5, 4, 2]))
  print(cyclic_sort([2, 6, 4, 3, 1, 5]))
  print(cyclic_sort([1, 5, 6, 4, 3, 2]))


main()



# Solution
# -----
# def cyclic_sort(nums):
#   i = 0
#   while i < len(nums):
#     j = nums[i] - 1
#     if nums[i] != nums[j]:
#       nums[i], nums[j] = nums[j], nums[i]  # swap
#     else:
#       i += 1
#   return nums

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n). Although we are not incrementing the index i when swapping the numbers, this will result in more than ‘n’ iterations of the loop, but in the worst-case scenario, the while loop will swap a total of ‘n-1’ numbers and once a number is at its correct index, we will move on to the next number by incrementing i. So overall, our algorithm will take O(n) + O(n-1) which is asymptotically equivalent to O(n).

# Space complexity #
# The algorithm runs in constant space O(1).
