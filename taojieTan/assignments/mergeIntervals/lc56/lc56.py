# Problem Statement #

# Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

# input: a list containing lists where each list has two integers (positive and negative) representing interval
# output: a new list containing lists with only mutually exclusive intervals
# edge cases: 1. empty list => return []
#             2. a list with only one list inside => return original list
#             3. no overlapping intervals => return original list

# we can apply sort method tp sort the list by 'start' value (let's call it start) of each element in ascending order,
# after sorted, we get the smallest starting interval.
# Then we create 'end' variable to keep track of the end interval.
# We use a for loop to traverse the list and compare the start value of each element with end variable.
# If the end variable is greater or equal to the start value of the current element, it means these two intervals overlap,
# so we compare the current end value and the end value of current element and update end to be the larger value between them.
# Else, it means these two intervals don't overlap, so we append the current start and end values to result list,
# and update start and end values to be the values of current element.
# After the for loop, we will get the final result list with mutually exclusive intervals

from __future__ import print_function


class Interval:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def print_interval(self):
        print("[" + str(self.start) + ", " + str(self.end) + "]", end="")


def merge(intervals):
    merged = []
    # TODO: Write your code here
    if len(intervals) < 2:
        return intervals

    # sort Interval objects by start variable in ascending order
    intervals.sort(key=lambda x: x.start)

    start = intervals[0].start
    end = intervals[0].end

    for i in range(1, len(intervals)):
        interval = intervals[i]
        if interval.start <= end:
            end = max(end, interval.end)
        else:
            merged.append(Interval(start, end))
            start = interval.start
            end = interval.end

    merged.append(Interval(start, end))

    return merged


def main():
    print("Merged intervals: ", end="")
    for i in merge([Interval(1, 4), Interval(2, 5), Interval(7, 9)]):
        i.print_interval()
    print()

    print("Merged intervals: ", end="")
    for i in merge([Interval(6, 7), Interval(2, 4), Interval(5, 9)]):
        i.print_interval()
    print()

    print("Merged intervals: ", end="")
    for i in merge([Interval(1, 4), Interval(2, 6), Interval(3, 5)]):
        i.print_interval()
    print()

    print("Merged intervals: ", end="")
    for i in merge(
        [
            Interval(-2, 0),
            Interval(5, 7),
            Interval(-1, 5),
            Interval(10, 23),
            Interval(1, 6),
            Interval(13, 19),
            Interval(4, 5),
        ]
    ):
        i.print_interval()
    print()

    # case where list is empty
    print("Merged intervals: ", end="")
    for i in merge([]):
        i.print_interval()
    print()

    # case where list has only one element
    print("Merged intervals: ", end="")
    for i in merge([Interval(-1, 14)]):
        i.print_interval()
    print()


main()


# Solution
# -----
# def merge(intervals):
#   if len(intervals) < 2:
#     return intervals

#   # sort the intervals on the start time
#   intervals.sort(key=lambda x: x.start)

#   mergedIntervals = []
#   start = intervals[0].start
#   end = intervals[0].end
#   for i in range(1, len(intervals)):
#     interval = intervals[i]
#     if interval.start <= end:  # overlapping intervals, adjust the 'end'
#       end = max(interval.end, end)
#     else:  # non-overlapping interval, add the previous internval and reset
#       mergedIntervals.append(Interval(start, end))
#       start = interval.start
#       end = interval.end

#   # add the last interval
#   mergedIntervals.append(Interval(start, end))
#   return mergedIntervals

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
