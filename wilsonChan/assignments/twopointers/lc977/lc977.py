# Problem Statement #
# Given a sorted array, create a new array containing squares of 
# all the numbers of the input array in the sorted order.


'''
Given: 
-sorted array (contains -/+ integers)

Result:
-squaring the numbers in sorted order


Example:
    Input: [-2, -1, 0, 2, 3]        square array -> sort
    Output: [0, 1, 4, 4, 9]


Variables:
-starting point
-end point
-pointer that moves throughout array
-squaring array


Steps / Tasks:
-Initialize the squared_array (output array) / starting point / ending point
-Ensure the element/values inside the array are positive with absolute value
-Square the elements When iterating through array
-Reverse the array to sort


Complexities:
Time: O(N) - Iterating from left to right inside given array, 
the numbers are sorted and squared

Space: O(N) - The size of the array varies since it's 
dependent on initial input

'''




def make_squares(arr):
  # TODO: Write your code here

  #Initializations
  squared_array = []
  left = 0
  right = len(arr) - 1

  #Sorting while iterating through array from left to right
  while left <= right:
    if abs(arr[left]) < abs(arr[right]):
      squared_array.append(arr[right]**2)
      right -= 1

    else:
      squared_array.append(arr[left]**2)
      left += 1
  
  #Reverse the array
  return squared_array[::-1]


def main():

  print("Squares: " + str(make_squares([-2, -1, 0, 2, 3])))
  print("Squares: " + str(make_squares([-3, -1, 0, 1, 2])))


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
