# Problem Statement #
# Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
import math
def triplet_sum_close_to_target(arr, target_sum):
  # TODO: Write your code here

  #input: an unsorted integer array (length is always greater than or equal to 3) and a target integer - (positive and/or negative)
  #output: the sum of three integers (not necessary if contiguous or not) 

  arr.sort()
  #initialize min_difference to keep track of the smallest difference the sum of triplet and the target
  min_difference = math.inf

  #initialize min_sum to keep track of the smaller sum if there are more than one triplet that is cloest to the target
  # min_sum = math.inf

  #loop through the array start from index zero to the third to last
  #sum value with index i, left, and right, and get the difference between the sum and the target
  #if it equals to zero, we just return the sum since difference of zero is the smallest one,
  #else, we have two outcome on the difference: positive or negative
  #if the difference is positive, it means the sum is smaller than the target; if negative, it is greater than the target.
  #there might also be cases where the absolute differences are equal between current difference and min_difference (we need to pick the smaller sum in this case => difference is positive)
  #we store the min_difference based on these three cases
  #after that we also need to shrink the left or right pointer toward the middle based on if the sum of triplet is greater or smaller than the target sum,
  #if smaller, we shift left pointer to the right; else, we shift right pointer to the left until both pointers hit
  #after finished the for loop, we will get the sum by subtracting the min_difference by target sum

  for i in range(len(arr)-2):
    left = i + 1
    right = len(arr) - 1
    while left < right:
      sum = arr[i] + arr[left] + arr[right]
      difference = target_sum - sum
      
      if difference == 0:
        return sum

      if abs(difference) < abs(min_difference) or (abs(difference) == abs(min_difference) and difference > min_difference):
        min_difference = difference
      
      if difference > 0:
        left += 1
      else:
        right -= 1

  return target_sum - min_difference


def main():
  print(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
  print(triplet_sum_close_to_target([-3, -1, 1, 2], 1))
  print(triplet_sum_close_to_target([1, 0, 1, 1], 100))
  print(triplet_sum_close_to_target([11, 20, -1, 10, -5, 14, 50, 90], 100))  
  print(triplet_sum_close_to_target([-1,0,1,1,55], 3))   

main()









# Solution
# -----
#   arr.sort()
#   smallest_difference = math.inf
#   for i in range(len(arr)-2):
#     left = i + 1
#     right = len(arr) - 1
#     while (left < right):
#       target_diff = target_sum - arr[i] - arr[left] - arr[right]
#       if target_diff == 0:  # we've found a triplet with an exact sum
#         return target_sum - target_diff  # return sum of all the numbers

#       # the second part of the following 'if' is to handle the smallest sum when we have more than one solution
#       if abs(target_diff) < abs(smallest_difference) or (abs(target_diff) == abs(smallest_difference) and target_diff > smallest_difference):
#         smallest_difference = target_diff  # save the closest and the biggest difference

#       if target_diff > 0:
#         left += 1  # we need a triplet with a bigger sum
#       else:
#         right -= 1  # we need a triplet with a smaller sum

#   return target_sum - smallest_difference

# -----

# Time complexity #
# Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

# Space complexity #
# The above algorithm’s space complexity will be O(N), which is required for sorting.
