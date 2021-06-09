# Problem Statement #
# Given an array of unsorted numbers and a target number, 
# find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
# If there are more than one such triplet, return the sum of the triplet with the smallest sum.

# input: array of unsorted number that includes negative, target sum may be negative
# output: the sum of three numbers in the array that is as close as possible to the target, <= target
# sorted the array
# initialize three pointers: a = index0, b = index a+1, c = len(arr)-1
# go through the loop from 0 to len(arr)-2 to prevent out of bounary (ex: if a = 2 in line 17)
# currentSum =  sum(a, b, c)
# closestSum = arr[0] + arr[1] + arr[2], exception if arr size < 3, then that case, add up all numbers in the array and return that num
# while b < c, currentSum = arr[a] + arr[b] + arr[c]
# if currentSum == target sum, return the targetSum
# else currentSum < target sum: increment b to the right
# else currentSum > target sum : decrement c to the left
# Then we also need to compare if targetsum - currentsum == targetsum - closestSum: abs(10 - 8) == abs(10-12)
#    if targetsum - currentsum < targetsum - closestSum: closestSum = currentSum

# second idea with minor change of having variable of difference replace targetsum- currentsum
# input: array of unsorted numbers that includes negative integers, target sum might also be negative
# output: return the sum of three integers that is closest to the target sum, prefer result sum <= target sum than >= target sum
# first by sort the array 
# then initialize a smallest difference variable as larger numbers such as infinite number
# Loop through the entire arr
# initialize three pointer as a = first index of the array, b = a+1 c = len(arr)-1, which is the last index of the arr 
# Then initialize variable current different that we want to constant update
# if the smallestDiff = 0, then that means the result sum is == target sum
# otherwise we want to continue loop through the entire arr and find smaller difference as possible
# edge cases: if the length of the arr is less than the 3, then we simply return the sum of all the int in the given arr

def triplet_sum_close_to_target(arr, target_sum):
  arr.sort()
  smallestDiff = math.inf
  if len(arr) < 3: #edge case if the len(Arr) < 3, then we can't have the sum of the triplet
    return sum(arr)
  
  for a in range(len(arr)-2):
    b = a+1
    c = len(arr)-1
    while b < c:
      currentDiff = target_sum - arr[a] - arr[b] - arr[c]
      if currentDiff == 0: #This means that targetSum == resultSum of a+b+c
        return target_sum

      if abs(currentDiff) < abs(smallestDiff) or (abs(currentDiff) == abs(smallestDiff) and currentDiff < smallestDiff):
        #Then te triplet sum is closer to the previous sum, update the difference
        smallestDiff = currentDiff

      if currentDiff > 0: #we want bigger numbers that could increase the sum
        b +=1
      else:
        c-=1 #then the currentDifference is < 0, we want smaller number that could lower the sum
  return target_sum - smallestDiff



    
    
  return -1


def main():
  print(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
  print(triplet_sum_close_to_target([-3, -1, 1, 2], 1))
  print(triplet_sum_close_to_target([1, 0, 1, 1], 100))


main()









# Solution
# -----
  # arr.sort()
  # smallest_difference = math.inf
  # for i in range(len(arr)-2):
  #   left = i + 1
  #   right = len(arr) - 1
  #   while (left < right):
  #     target_diff = target_sum - arr[i] - arr[left] - arr[right]
  #     if target_diff == 0:  # we've found a triplet with an exact sum
  #       return target_sum - target_diff  # return sum of all the numbers

  #     # the second part of the following 'if' is to handle the smallest sum when we have more than one solution
  #     if abs(target_diff) < abs(smallest_difference) or (abs(target_diff) == abs(smallest_difference) and target_diff > smallest_difference):
  #       smallest_difference = target_diff  # save the closest and the biggest difference

  #     if target_diff > 0:
  #       left += 1  # we need a triplet with a bigger sum
  #     else:
  #       right -= 1  # we need a triplet with a smaller sum

  # return target_sum - smallest_difference

# -----

# Time complexity #
# Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

# Space complexity #
# The above algorithm’s space complexity will be O(N), which is required for sorting.
