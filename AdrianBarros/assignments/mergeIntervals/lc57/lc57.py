# Problem Statement #

# Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.


'''
# input sorted list by start
# output: list[] merged pairs

# Step 1 merging every pair WHILE comparing the new pair

# step2: Conditional
#     IF:  new[start] < sec[start]: merged or compare first with new
#     else: compare first with sec

# step3     if able: merge
#         else push curr  interval and update curr interval

# bool inserted:
# step 4 if inserted: do nothing else: compare
# step 5 push the last interval  && return

# time: complexity: O(n)
# if  sorting after new nlogn
# space: NR O(1)
'''


def insert(intervals, new_interval):
    merged = []
    # TODO: Write your code here
    merged_int = intervals[0]
    for i in range(len(intervals)):
        curr_int = intervals[i]
        # what I am essentially doing is using the fact they are sorted to check where should I merge the new interval
        if new_interval[0] > merged_int[0] and new_interval[0] <= curr_int[0]:
            if merged_int[1] > new_interval[0]:
                merged_int[1] = max(new_interval[1], merged_int[1])
            else:
                merged.append(merged_int)
                merged_int = new_interval
        # should have been the first thing we test if the new interval comes before the first in the list
        if new_interval[0] < merged_int[0]:
            if merged_int[0] > new_interval[1]:
                merged.append(new_interval)
            else:
                merged_int[0] = min(new_interval[0], merged_int[0])
                merged_int[1] = max(new_interval[1], merged_int[1])

      # After that we essentially do the same thing we would do if we did not have a new interval
        if merged_int[1] > curr_int[0]:
            merged_int[1] = max(merged_int[1], curr_int[1])
        else:
            merged.append(merged_int)
            merged_int = curr_int
    merged.append(merged_int)
    return merged


def main():
    print("Intervals after inserting the new interval: " +
          str(insert([[1, 3], [5, 7], [8, 12]], [4, 6])))
    print("Intervals after inserting the new interval: " +
          str(insert([[1, 3], [5, 7], [8, 12]], [4, 10])))
    print("Intervals after inserting the new interval: " +
          str(insert([[2, 3], [5, 7]], [1, 4])))


main()


# Solution
# -----
# def insert(intervals, new_interval):
#   merged = []
#   i, start, end = 0, 0, 1

#   # skip (and add to output) all intervals that come before the 'new_interval'
#   while i < len(intervals) and intervals[i][end] < new_interval[start]:
#     merged.append(intervals[i])
#     i += 1

#   # merge all intervals that overlap with 'new_interval'
#   while i < len(intervals) and intervals[i][start] <= new_interval[end]:
#     new_interval[start] = min(intervals[i][start], new_interval[start])
#     new_interval[end] = max(intervals[i][end], new_interval[end])
#     i += 1

#   # insert the new_interval
#   merged.append(new_interval)

#   # add all the remaining intervals to the output
#   while i < len(intervals):
#     merged.append(intervals[i])
#     i += 1
#   return merged

#   -----
