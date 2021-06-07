# Problem Statement
# Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

# input: arr []
# output: arr []^2
# the problem allows negative numbers hence we have to find a way that those results are in oder at the end without sorting the array again
# Step1: set a front and back pointer
# Step 2: square both numbers and compare them
# Step3: conditional
# IF front > right add front to the array and add pointer+1
# ELSE add back to the array and substract back pointer-1


def make_squares(arr):
    squares = []
    # TODO: Write your code here
    # Step 1
    front = 0
    back = len(arr)-1
    while front <= back:
        # Step 2: square both numbers and compare them
        left_sq = arr[front] * arr[front]
        right_sq = arr[back] * arr[back]
        # Step3: conditional
        if left_sq > right_sq:
            squares.append(left_sq)
            front += 1
        else:
            squares.append(right_sq)
            back -= 1
    return squares


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
