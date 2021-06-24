# Problem Statement #
# Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

# We have a sorted array and we need to return the square
# To do that we need to loop through each value of the array array


# squares[pow(index, 2)]  # pow(arr[left],2)


def make_squares(arr):

    # n = len(arr)
    # squares = [0 for x in range(n)]
    # highestSquareIdx = n - 1
    # left, right = 0, n - 1
    # while left <= right:
    #     leftSquare = arr[left] * arr[left]
    #     rightSquare = arr[right] * arr[right]
    #     if leftSquare > rightSquare:
    #         squares[highestSquareIdx] = leftSquare
    #         left += 1
    #     else:
    #         squares[highestSquareIdx] = rightSquare
    #         right -= 1
    #     highestSquareIdx -= 1

    # return squares

    length = len(arr)
    squares = [0 for x in range(length)]
    # TODO: Write your code here
    greatestIndex = length - 1
    left = 0  # first element in the array
    right = length - 1  # last element of the array

    while left <= right:  # loop to bring them closer and closer to each other while squaring them

        leftSquare = arr[left] * arr[left]  # pow(arr[left], 2)
        rightSquare = arr[right] * arr[right]  # pow(arr[right], 2)

        if leftSquare > rightSquare:

            squares[greatestIndex] = leftSquare
            left += 1

        else:

            squares[greatestIndex] = rightSquare
            right -= 1

        greatestIndex -= 1

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

#   Time complexity #
# The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

# Space complexity #
# The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
