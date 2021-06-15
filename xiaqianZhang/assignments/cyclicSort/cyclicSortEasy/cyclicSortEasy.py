# Problem Statement #

# We are given an array containing ‘n’ objects. Each object, when created, 
# was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
# This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

# Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. 
# For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, 
# though each number is actually an object.

# input: unsorted list of object that is in incrementing order by 1, start from 1, ex: 1, 2, 3,...6
# output: sorted list
# edges case: if the len of the list <2: return the list
# intialize the currPtr = 0
# while loop while the currPtr is less than the len of the arr
#  intialize another pointer as the swapPtr =  arr[currentPtr] -1
#  currentPtr = 0, arr[currentPtr] = 1 
#  currentPtr = 1, arr[currentPtr] = 2
# if the currentPtr != swapPtr: swap
# else then the currentPtr is having the right object number, we will increment the currentPtr and moves on to the next


# def cyclic_sort(nums):
#   if len(nums) < 2:
#     return nums
  
#   currPtr = 0
#   while currPtr < len(nums):
#     swapPtr = nums[currPtr] - 1
#     if nums[currPtr]!= nums[swapPtr]:
#       nums[currPtr], nums[swapPtr] = nums[swapPtr], nums[currPtr]
#     else:
#       currPtr+=1
#   return nums

# Problem Statement Attempt 2#

# We are given an array containing ‘n’ objects. Each object, when created, 
# was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
# This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

# Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. 
# For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, 
# though each number is actually an object.

#Input: unsorted list that contains distinct integers from 1 to n
#Output: return sorted list
# edge case: if the len(arr) < 2: example if only contains only 1 integers, return the arr since we don't need to sorted
# initialize a currPtr position at index 0
# while we looping through the nums, we want to check if each nums[i] is position at i-1
# if no: having a swapPtr that is = to num[i-1], then swap the variable
# if yes: i++
#return the sorted list

def cyclic_sort(nums):
  if len(nums) < 2:
    return nums
  currPtr = 0
  while currPtr < len(nums):
    swapPtr = nums[currPtr]-1
    if nums[currPtr] != nums[swapPtr]:
      nums[currPtr], nums[swapPtr] = nums[swapPtr], nums[currPtr]
    else:
      currPtr+=1
  return nums

def main():
  print(cyclic_sort([3, 1, 5, 4, 2])) 
  #currPtr = 0, swapPtr = 2 
  #[5, 1, 3, 4, 2] swapPtr = 4 
  #[2, 1, 3, 4, 5] swapPtr = 1
  #[1, 2, 3, 4, 5] swapPtr = 0 
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
