# Problem Statement #

# Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

# input: an unsorted integers list (positive or/and negative), a target sum
# output: the count of all triplets where each triplet is smaller than target
# edge case: 1. length of list is smaller than 3 => return 0
#            2. no triplet that is smaller than target => return 0 
#            3. the list has the same values (e.g: [1,1,1,1], 5) => return 3

'''
  The naive way to do it is to loop through the list three times to make sure 
  every triplet combination is checked to see if it is smaller than target => 0(N^3), which is very ineffecient.

  A better way to do is first sort the list O(N*log(N)) such that integers are in ascending order.
  Then we loop through the list from index zero to length of list minus 2, 
  and declare two pointers (one start from index + 1, and one from the end of list) to keep track of another two indices in the list to see if it is smaller than target.
  If yes, we count the triplet and we also know the rest of the values between these two pointers also have sum that is smaller than target since it is sorted.
  And then move the start pointer toward the right and check again if sum of triplet is smaller than target.
  Repeat the step until start pointer hits the end pointer. 
  If no, we move the end pointer toward the left until it is smaller than target. 
  Time complexity: O(N^2) Space complexity: O(N*log(N)) / O(1)
'''

def triplet_with_smaller_sum(arr, target):
  # TODO: Write your code here

  count = 0
  arr.sort()
  print(arr)
  for i in range(len(arr)-2):
    start = i+1
    end = len(arr) - 1  
    while start < end:
      sum = arr[i] + arr[start] + arr[end] 
      if sum >= target:
        end -= 1
      else:
        count += end - start
        start += 1

  return count

def main():
  print(triplet_with_smaller_sum([-1, 0, 2, 3], 3))
  print(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5)) 
  print(triplet_with_smaller_sum([-1, -4, 2, 0, 1, 5, 3, 4, 1 ], 5))
  print(triplet_with_smaller_sum([9, 5, -1, 3], 1)) 
  print(triplet_with_smaller_sum([-1, -4], 5)) 
  print(triplet_with_smaller_sum([], 5)) 

main()






# Solution
# -----
# def triplet_with_smaller_sum(arr, target):
#   arr.sort()
#   count = 0
#   for i in range(len(arr)-2):
#     count += search_pair(arr, target - arr[i], i)
#   return count


# def search_pair(arr, target_sum, first):
#   count = 0
#   left, right = first + 1, len(arr) - 1
#   while (left < right):
#     if arr[left] + arr[right] < target_sum:  # found the triplet
#       # since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
#       # left and right to get a sum less than the target sum
#       count += right - left
#       left += 1
#     else:
#       right -= 1  # we need a pair with a smaller sum
#   return count

# -----
# Time complexity #
# Sorting the array will take O(N * logN). The searchPair() will take O(N). So, overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

# Space complexity #
# The space complexity of the above algorithm will be O(N) which is required for sorting if we are not using an in-place sorting algorithm.
