# Problem Statement #/
# Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
'''
input: unsorted array
output: the min diff

step1: sort the array
step 2: loop the array and for each number we substract it from the target

step 3: like last question use two pointers alongside the selected value

Step 4: add them and compare saving the lesser diff

step 5: return the min diff

and 
'''


def triplet_sum_close_to_target(arr, target_sum):
    # TODO: Write your code here
    min_diff = float('inf')
    res_sum = -1  # response
    for i in range(len(arr)-2):
        start = arr[i+1]
        end = arr[len(arr)-1]
        while start < end:
            curr_sum = arr[i] + start + end
            curr_diff = abs(target_sum - curr_sum)
            if curr_diff < min_diff:
                res_sum = curr_sum
                min_diff = curr_diff
            if curr_sum < target_sum:
                start += 1
            if curr_sum > target_sum:
                end -= 1
            if curr_sum == target_sum:
                break

    return res_sum


def main():
    print(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
    print(triplet_sum_close_to_target([-3, -1, 1, 2], 1))
    print(triplet_sum_close_to_target([1, 0, 1, 1], 100))


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

#
