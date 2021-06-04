# Problem Statement #
# Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

def make_squares(arr):
  # TODO: Write your code here

  #input: sorted integer array (positive and/or negative)
  #output: a new integer array

  #edge case: empty array -> []
  
  #initialize two pointers to keep track of both the leftmost and rightmost indices in the array
  leftmost_pointer = 0
  rightmost_pointer = len(arr) - 1

  #initialize an array store the square of each integer, 
  #and an index variable to keep track of the highest index in result 
  squares = [0 for i in range(len(arr))]
  highest_index = len(squares) - 1


  #loop through the array, get the square of both leftmost and rightmost integers 
  #then compare which one is larger, 
  #if the leftmost is larger, then we store the leftmost value into the result at the highest index and shift the leftmost pointer to the right.
  #else, we store the rightmost value into the result at the highest index and shift the rightmost pointer to the left.
  #in the meanwhile, we update the highest_index by subtracting it by one
  #we keep shrinking the pointers from both side toward the middle until we hit the last integer in the array

  while leftmost_pointer <= rightmost_pointer:
    leftmost_val = arr[leftmost_pointer] ** 2
    rightmost_val = arr[rightmost_pointer] ** 2

    if leftmost_val > rightmost_val:
      squares[highest_index] = leftmost_val
      leftmost_pointer += 1
    else:
      squares[highest_index] = rightmost_val
      rightmost_pointer -= 1
    
    highest_index -= 1

  return squares


def main():
  print("Squares: " + str(make_squares([ 1, 5, 10, 21, 30]))) 
  print("Squares: " + str(make_squares([-2, -1, 0, 2, 3])))
  print("Squares: " + str(make_squares([-13, -11, -5, -1, 0])))
  print("Squares: " + str(make_squares([2])))
  print("Squares: " + str(make_squares([])))
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
