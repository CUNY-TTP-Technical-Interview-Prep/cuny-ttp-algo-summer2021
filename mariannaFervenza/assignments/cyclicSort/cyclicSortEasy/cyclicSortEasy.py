# Problem Statement #

# We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

# Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.


# we have an array 
#position 0, arr[i] = 0
# goes from 1 to n
#arr[0] = 3 --> arr[i] - 1 --> arr[0] - 1 = 3 - 1 = 2 --> j
# arr[i] swapped with arr[j]
#when we have arr[i] = 1 we can i++
# after it's swapped we can move on to the next element
# 3, 5, 1
# 1, 5, 3
# if arr[i] != arr[j] --> swap
# else
# i++
# then we'd check arr[]
 
def cyclic_sort(nums):
  # TODO: Write your code here
  i = 0
  while(i < len(nums)):
    j = nums[i] - 1
    if(nums[i] != nums[j]):
      nums[i], nums[j] = nums[j], nums[i]
    else:
      i +=1
    
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
# The time complexity of the above algorithm is O(n). Although we are not incrementing the index i when swapping the numbers, this will result in more than ‘n’ iterations of the loop, but in the worst-case scenario, the while loop will swap a total of ‘n-1’ numbers and once a number is at its correct index, we will move on to the next number by incrementing i. So overall, iour algorithm will take O(n) + O(n-1) which is asymptotically equivalent to O(n).

# Space complexity #
# The algorithm runs in constant space O(1).
