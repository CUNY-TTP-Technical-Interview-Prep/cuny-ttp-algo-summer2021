# Problem Statement #
# Given an array of unsorted numbers, find all unique triplets in it that add up to zero.


def search_triplets(arr):
    # TODO: Write your code here
    # input: an unsorted integer array (positive or/and negative)
    # output: an array with unique triplets eqauls to zero

    # edge cases: 1. length of array is smaller than 3 => return []
    #            2. only zero in the array => return [0, 0, 0]

    # initialize an array to store all unique triplets where the sum is equal to zero
    triplets = []

    # first sort the array in order to utilize the two pointers pattern
    arr.sort()

    # loop through the array from zero to third to last
    # first check if there exists cases where current value is equal to previous one, if so, skip it to prevent duplicate triplet;
    # if not, we initialize two pointers, left and right, to point to leftmost and rightmost value in the array
    # sum the three values with indices of i, leftmost, and rightmost, and check if it eqauls to zero.
    # if not, we have two cases:
    # 1.it is greater than zero, it means we need to shift right pointer toward left for smaller sum,
    # 2.it is smaller than zero, it means we need to shift left pointer toward right for larger sum.
    # if the sum is equal zero, we first append these value to result array,
    # and then we check if the next values are same as the ones pointed by left and right pointers
    # we skip the duplicate value to prevent storing duplicate triplet into result array.
    # and we also need to shrink both left and right pointers toward the middle.
    # when finish the for loop, we will get the final result

    for i in range(len(arr) - 2):
        if arr[i] == arr[i - 1] and i > 0:
            continue

        left = i + 1
        right = len(arr) - 1

        while left < right:
            sum = arr[i] + arr[left] + arr[right]
            if sum > 0:
                right -= 1
            elif sum < 0:
                left += 1
            else:
                triplets.append((arr[i], arr[left], arr[right]))
                while left < right and arr[left] == arr[left + 1]:
                    left += 1
                while left < right and arr[right] == arr[right - 1]:
                    right -= 1

                left += 1
                right -= 1

    return triplets


def main():
    print(search_triplets([-13, 0, 12, 2, -5, 1, -2, 3, -1, 5]))
    print(search_triplets([-3, 0, 1, 2, -1, 1, -2]))
    print(search_triplets([-5, 2, -1, -2, 3]))
    print(search_triplets([0, 0, 0, 0, 0]))
    print(search_triplets([0, 0]))
    print(search_triplets([]))


main()


# Solution
# -----
#   arr.sort()
#   triplets = []
#   for i in range(len(arr)):
#     if i > 0 and arr[i] == arr[i-1]:  # skip same element to avoid duplicate triplets
#       continue
#     search_pair(arr, -arr[i], i+1, triplets)

#   return triplets


# def search_pair(arr, target_sum, left, triplets):
#   right = len(arr) - 1
#   while(left < right):
#     current_sum = arr[left] + arr[right]
#     if current_sum == target_sum:  # found the triplet
#       triplets.append([-target_sum, arr[left], arr[right]])
#       left += 1
#       right -= 1
#       while left < right and arr[left] == arr[left - 1]:
#         left += 1  # skip same element to avoid duplicate triplets
#       while left < right and arr[right] == arr[right + 1]:
#         right -= 1  # skip same element to avoid duplicate triplets
#     elif target_sum > current_sum:
#       left += 1  # we need a pair with a bigger sum
#     else:
#       right -= 1  # we need a pair with a smaller sum

# -----

# Sorting the array will take O(N * logN). The searchPair() func will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

# Space complexity #
# Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
