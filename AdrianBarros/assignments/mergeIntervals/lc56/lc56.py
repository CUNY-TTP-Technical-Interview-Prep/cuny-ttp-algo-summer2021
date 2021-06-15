# Problem Statement

# Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

from __future__ import print_function


class Interval:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def print_interval(self):
        print("[" + str(self.start) + ", " + str(self.end) + "]", end='')


'''
input: array of pairs/intervals
output: array of merged intervals
step 1: sort the array using the first number of the interval
step 2: loop through the array initializing a copy of the first pair
    step 3: conditional
         IF curr_second > next_first: merge intervals [curr_first, max(next_second,curr_second)]
         ELSE: append current pair
###after thoughts we need to add the last interval at the end
FINAL return merged[]
'''


def merge(intervals):
    merged = []
    # TODO: Write your code here
    # step 1: sort the array using the first number of the interval
    intervals.sort(key=lambda x: x.start)

    # step 2: loop through the array initializing a copy of the first pair
    merged_int = intervals[0]  # decided to change the name from curr to merged
    for i in range(1, len(intervals)):  # starts from 1 bc we are using 0

        # step 3: conditional
        curr_int = intervals[i]
        if merged_int.end > curr_int.start:
            merged_int.end = max(merged_int.end, curr_int.end)
        else:
            merged.append(merged_int)
            merged_int = curr_int
    merged.append(merged_int)
    return merged


def main():
    print("Merged intervals: ", end='')
    for i in merge([Interval(1, 4), Interval(2, 5), Interval(7, 9)]):
        i.print_interval()
    print()

    print("Merged intervals: ", end='')
    for i in merge([Interval(6, 7), Interval(2, 4), Interval(5, 9)]):
        i.print_interval()
    print()

    print("Merged intervals: ", end='')
    for i in merge([Interval(1, 4), Interval(2, 6), Interval(3, 5)]):
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
