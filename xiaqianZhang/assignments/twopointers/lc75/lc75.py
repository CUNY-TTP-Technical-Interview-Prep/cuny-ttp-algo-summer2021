# Problem Statement #

# Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

# The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

# -----Attempt One during the mock interview time
# input: array that only contains integer 0, 1, 2
# output: sorted array that didn't use the function of sorted
# initalize the position of lowerPointer = 0 and higherPointer = len(arr)-1 last index
# put all the 0s into the most left hand side
# put all the 2s into the most right hand side
# while loop when the index is <= higherPointer [2, 2, 1, 1, 0]
# if arr[i] == 0: swap of the index with the lowerPointer, move on to the next index and increment the lowerpointer
# if arr[i] == 1: i+=1
# if arr[i] == 2: swap of the index with the higherPointer, decrement the higherPointer

# def dutch_flag_sort(arr):
#   lowerPointer = 0
#   higherPointer = len(arr)-1
#   i = 0

#   if len(arr) == 0:
#     return arr
  
#   while i <= higherPointer:
#     if arr[i] == 0:
#       temp1 = arr[i]
#       arr[i] = arr[lowerPointer]
#       arr[lowerPointer] = temp1
#       i+=1
#       lowerPointer +=1
#       #
#     elif arr[i] == 1:
#       i+=1
#       #
#     else: # arr[i] == 2: [2, 2, 1, 1, 0]
#       temp = arr[i] #2
#       arr[i] = arr[higherPointer] #[0, 2, 1, 1, ]
#       arr[higherPointer] = temp #[0, 2, 1, 1, 2]
#       higherPointer-=1
#   return



# -----Attempt Two during the mock interview time#

# Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

# The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.
# input: array that only contains 0, 1, 2 integer variables
# output: return the sorted array without using sorted function and in O(n) times
# when we sorted, the order is from 0, 1, 2. Where all the 0s are on the left hand side, and all the 2s are on the right hand side
# initialize the lowerPointer = 0 [most left hand side]
# initialize the higherPointer = len(arr)-1 [most right hand side]
# When we loop through the array
# if the variable == 0: we want to move it to the left hand side, swap lowerPointer = variable, 
# after swap, we increment i+=1, increment lowerPointer+=1 since the current lowerPointer is 0 as we expected 
# if the variable == 1: we will ignore and increment index+=1
# if the variable == 2: swap the higherPointer = variable, decrement higherPointer-=1 since the current higherPointer is 2 as we expected
# edge cases: if the arr is empty/only 1 variable, we could just return the array

def dutch_flag_sort(arr):

  lowerPointer = 0
  higherPointer = len(arr)-1
  i = 0
  if len(arr) <= 1:
    return arr
  
  while i <= higherPointer:
    if arr[i] == 0:
      arr[i], arr[lowerPointer] = arr[lowerPointer], arr[i]
      lowerPointer+=1
      i+=1
    elif arr[i] == 1:
      i+=1
    else:
      arr[i], arr[higherPointer] = arr[higherPointer], arr[i]
      higherPointer-=1

  return 


def main():
  arr = [1, 0, 2, 1, 0]
  dutch_flag_sort(arr)
  print(arr)

  arr = [2, 2, 0, 1, 2, 0]
  dutch_flag_sort(arr)
  print(arr)

  arr = [0]
  dutch_flag_sort(arr)
  print(arr)

  arr = []
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
