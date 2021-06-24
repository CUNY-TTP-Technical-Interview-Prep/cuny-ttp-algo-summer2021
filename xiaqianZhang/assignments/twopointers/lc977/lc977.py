# Problem Statement #
# Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

'''
Input: array of integers that includes negative values
Output: return the new sorted array that contains squares of each integers of the original array

edge case: if the array is empty, return []

Only iterating the array for once so the running time should be O(N):
everynumber that is less than 0 should be times by -1 [2, 1, 0, 2, 3]

startIndex = 0
lastIndex = len(arr) - 1
initliaze a result squared array = []
while startIndex < lastIndex: when they are not meet
  check if the squared of the startIndex > squared of the lastIndex: [-3, 2] -> [9, 4]
    so the original value at the lastIndex should be the largest value, then if the square of the startIndex is larger than, then this startIndex should be the largest
    squared array.insert(0, arr[startIndex]) decreasing order?
    increment the startIndex

  if the squared lastIndex is larger than the startIndex:
    then the lastIndex's value is still the largest, append it into the squared array
    decrement the lastIndex
  
  if they are the same, append startIndex, then increment the startIndex

'''
def make_squares(arr):
  squares = []
  startIndex = 0
  lastIndex = len(arr) -1
  if len(arr) == 0:
    return []
  
  while startIndex <= lastIndex:
    
    if arr[startIndex] ** 2 > arr[lastIndex] ** 2:
      squares.insert(0, arr[startIndex] ** 2)
      startIndex+=1
    else:
      squares.insert(0, arr[lastIndex] ** 2)
      lastIndex-=1
  return squares


def main():

  print("Squares: " + str(make_squares([-2, -1, 0, 2, 3])))
  print("Squares: " + str(make_squares([-3, -1, 0, 1, 2])))
  #[, 4, 9]
  print("Squares: " + str(make_squares([])))
  print("Squares: " + str(make_squares([-3, -1, 0, 0, 1, 2])))


main()








# Solution
# -----
#   n = len(arr)
#   squares = [0 for x in range(n)]
#   highestSquareIdx = n - 1
#   left, right = 0, n - 1
#   while left <= right:
#     leftSquare = arr[left] * arr[left]
#     rightSquare = arr[right] * arr[right]
#     if leftSquare > rightSquare:
#       squares[highestSquareIdx] = leftSquare
#       left += 1
#     else:
#       squares[highestSquareIdx] = rightSquare
#       right -= 1
#     highestSquareIdx -= 1

#   return squares

#   -----

#   Time complexity #
# The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

# Space complexity #
# The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
