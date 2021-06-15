# Problem Statement #

# Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
'''
input : two separate arrays of intervals
output : the points where they intersect

step 1: first we have to traverse both arrays
step 2: check if any of them intersect
step 3: store that intersection into the result
added step: we update the smallest value of the second values
Step 4: repeat until we do not have any other intersection

final return all the intersections
'''


def merge(intervals_a, intervals_b):
    result = []
    # TODO: Write your code here
    ptr_a = ptr_b = 0
    first = 0
    second = 1
    # step 1: first we have to traverse both arrays
    while ptr_a < len(intervals_a) and ptr_b < len(intervals_b):
        # step 2: check if any of them intersect
        a_overlap_b = intervals_a[ptr_a][first] >= intervals_b[ptr_b][
            first] and intervals_a[ptr_a][first] <= intervals_b[ptr_b][second]
    # we check Exactly the same way to b
        b_overlap_a = intervals_b[ptr_b][first] >= intervals_a[ptr_a][
            first] and intervals_b[ptr_b][first] <= intervals_a[ptr_a][second]
        # if any of these is true we will store the intersection
        # else continue
        if (a_overlap_b or b_overlap_a):
            # step 3: store that intersection into the result
            result.append([max(intervals_a[ptr_a][first], intervals_b[ptr_b][first]), min(
                intervals_a[ptr_a][second], intervals_b[ptr_b][second])])
        if intervals_a[ptr_a][second] < intervals_b[ptr_b][second]:
            ptr_a += 1
        else:
            ptr_b += 1

    return result


def main():
    print("Intervals Intersection: " +
          str(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])))
    print("Intervals Intersection: " +
          str(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])))


main()


# Solution
# -----
# def merge(intervals_a, intervals_b):
#   result = []
#   i, j, start, end = 0, 0, 0, 1

#   while i < len(intervals_a) and j < len(intervals_b):
#     # check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
#     a_overlaps_b = intervals_a[i][start] >= intervals_b[j][start] and \
#                    intervals_a[i][start] <= intervals_b[j][end]

#     # check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
#     b_overlaps_a = intervals_b[j][start] >= intervals_a[i][start] and \
#                    intervals_b[j][start] <= intervals_a[i][end]

#     # store the the intersection part
#     if (a_overlaps_b or b_overlaps_a):
#       result.append([max(intervals_a[i][start], intervals_b[j][start]), min(
#         intervals_a[i][end], intervals_b[j][end])])

#     # move next from the interval which is finishing first
#     if intervals_a[i][end] < intervals_b[j][end]:
#       i += 1
#     else:
#       j += 1

#   return result

# -----

# Time complexity #
# As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M), where N and M are the total number of intervals in the input arrays respectively.

# Space complexity #
# Ignoring the space needed for the result list, the algorithm runs in constant space O(1).
