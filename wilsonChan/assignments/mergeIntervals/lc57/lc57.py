# Problem Statement #

# Given a list of non-overlapping intervals sorted by their start time, insert 
# a given interval at the correct position and merge all necessary intervals 
# to produce a list that has only mutually exclusive intervals.


'''
Given:
-Array of intervals
-Sorted by start time
-New interval to insert into existing intervals

Result:
-Merge the intervals


EXAMPLE:
Original: [[1, 3], [5, 7], [8, 12]]        Insert: [4, 6]

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 1-----3
             5-----7
                      8-------------12

          4-----6

Output: [1,3] [4,7] [8,12]


STEPS:
1) Iterate through given intervals with for loop
    -Compare new_interval variable with i (other elements/intervals witin array)
    -Edge Cases:
      -New interval within the range of other intervals
      -New interval's range is before and after other intervals

'''

def insert(intervals, new_interval):
  merged = []
  # TODO: Write your code here

  for i in intervals:

    if i[1] < new_interval[0]:
      merged.append(i)

    elif i[0] > new_interval[1]:
      merged.append(new_interval)
      new_interval = i

    elif i[1] >= new_interval[0] or i[0] <= new_interval[1]:
      new_interval[0] = min(i[0], new_interval[0])
      new_interval[1] = max(i[1], new_interval[1])

  merged.append(new_interval)

  return merged


def main():
  print("Intervals after inserting the new interval: " + str(insert([[1, 3], [5, 7], [8, 12]], [4, 6])))       #[[1, 3], [4, 7], [8, 12]]
  print("Intervals after inserting the new interval: " + str(insert([[1, 3], [5, 7], [8, 12]], [4, 10])))      #[[1, 3], [4, 12]]
  print("Intervals after inserting the new interval: " + str(insert([[2, 3], [5, 7]], [1, 4])))                #[[1, 4], [5, 7]]
  print("My exampe for inserting new interval: " + str(insert([[2,4], [3,6], [4,8], [7,12]], [3,9])))          #[[2, 12]]

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
