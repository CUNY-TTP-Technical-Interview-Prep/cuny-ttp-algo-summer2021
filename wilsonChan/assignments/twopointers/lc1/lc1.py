# Problem Statement #
# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

'''
***ISSUE***
lines 51 and 53 under elif are giving me issues. After running the code, it
returns a single index for each test case


print(pair_with_targetsum([1, 2, 3, 4, 6], 6))        #returns 3
print(pair_with_targetsum([2, 5, 9, 11], 11))         #returns 2
'''


'''
Given:
arr- sorted numbers
target- sum of numbers

Result:
returns- indices of two numbers that add up to target sum

Example: ([1, 2, 3, 4, 6], 6)
value pairs
(1,6) != 6
(1,4) != 6
(2,4) == 6

Steps: 
Initialize the variables start, end, current value
Use while loop to compare the start and end pointers (iterate through array)
  -Does start and end pointers = sum
    -Yes, return start and end indices
    -If current value is larger than sum, decrement end pointer
      -increment start pointer after end pointer (back and forth between the two pointers)

'''

def pair_with_targetsum(arr, target_sum):
  start = 0             #beginning of index (left)
  end = len(arr) - 1      #end of the index (right)
  current_value = 0     #sum of the start and end pointers

  if(len(arr) == 0):    #return empty array if there is nothing inside array
    return [-1, -1]

  while(start < end):
    current_value = arr[start] + arr[end]
    if current_value == target_sum:      #checks if initial indicies 
      [start, end]
    elif current_value > target_sum:
      return end - 1
    elif current_value >target_sum:
      return start + 1
  
  return [-1, -1]


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
