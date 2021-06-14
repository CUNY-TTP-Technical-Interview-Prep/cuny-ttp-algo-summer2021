# Problem Statement #

# Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

# input: a list containing lists with non-overlapping intervals (sorted by start), and a list with start and end intervals  
# output: a new list with non-overlapping intervals
# edge cases: 1. an empty list and a new interval => insert the new interval to empty list and return it
#             2. new interval doesn't overlap the list => insert it at the start/end of list and return it              
#             3. new interval overlaps all intervals in the list => insert it into new list and return it

# Let's call the start value of the new interval to be 'start', and the end value of the new interval to be 'end'.
# Since the initial list is sorted and non-overlapping, we don't need to worry about if there is overlapping intervals in the list nor arranging them. 
# We can loop through the list to first check: 1. if there are any intervals that are not overlapping the new interval and insert them into new list,
# 2. then we will compare the end value of new interval with each start value of rest of intervals to find the overlapping part. 
# We pick the smaller start value as the start of the overlapping part, and continue looping.
# Once we found the overlapping interval, we merge it and insert it into new list.
# 3. Then we can insert the rest of the intervals into the new list since they are non-overlapping. 
# We will get the final result after the loops.

def insert(intervals, new_interval):
  if len(intervals) == 0:
    return [new_interval]

  merged = []
  # TODO: Write your code here

  start_index, end_index = 0, 1
  index = 0


  while index < len(intervals):
    if new_interval[start_index] > intervals[index][end_index]:
      merged.append(intervals[index])
      index += 1
    else:
      break

  while index < len(intervals):
    if new_interval[end_index] >= intervals[index][start_index]:
      new_interval[start_index] = min(new_interval[start_index], intervals[index][start_index])
      new_interval[end_index] = max(new_interval[end_index], intervals[index][end_index])
      index += 1
      continue
    else:
      break

  merged.append(new_interval)

  while index < len(intervals):
    merged.append(intervals[index])
    index += 1

  return merged


def main():
  print("Intervals after inserting the new interval: " + str(insert([[1, 3], [5, 7], [8, 12]], [4, 6])))
  print("Intervals after inserting the new interval: " + str(insert([[1, 3], [5, 7], [8, 12], [15, 20]], [4, 10])))
  print("Intervals after inserting the new interval: " + str(insert([[2, 3], [5, 7]], [1, 4])))
  print("Intervals after inserting the new interval: " + str(insert([[-5, -2], [1, 3], [5, 10], [12, 15], [18, 20]], [6, 7])))
  print("Intervals after inserting the new interval: " + str(insert([], [6, 7])))
  print("Intervals after inserting the new interval: " + str(insert([[2, 3], [5, 7]], [10, 14])))
  print("Intervals after inserting the new interval: " + str(insert([[2, 3], [7, 9]], [4, 6])))
  print("Intervals after inserting the new interval: " + str(insert([[1, 5]], [2, 3])))
  print("Intervals after inserting the new interval: " + str(insert([[1,3],[6,9]], [2, 5])))

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

# Time complexity #
# As we are iterating through all the intervals only once, the time complexity of the above algorithm is O(N), where ‘N’ is the total number of intervals.

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals.
