# Problem Statement #

# Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

'''

***Works properly on leetcode***

NameError: name 'merge' is not defined         
    (test cases not working, unresolved syntax error)



[Interval(6, 7), Interval(2, 4), Interval(5, 9)]
2 3 4 5 6 7 8 9
        6 7 (ignore)
2   4
       5      9

OUTPUT: (2,4) (5,9)


Left: [(2,4) (5, 9) (6,7)]     2,5,6
Right: [(2,4) (6,7) (5,9)]    4,7,9
Output: [(2,4) (5, 9)]



***I'm using 'pair' and 'interval' interchangeably***

VARIABLES
-current start        (index 0 of the first pair in array) left
-current end          (index 1 of the first pair in array) right
-merged               (storing overlap)
-final end            (index 1 of the last pair in array)


APPROACH/STEPS:

-Sort the intervals before proceeding
-Initialize variable merged with empty array
-Iterate through given array with for loop
  -Create if statement that add intervals to the empty merged array
  -Since the merged array is no longer empty, initialize 
   current_start, current_end, and final_end
  -if the final_end (right value of last pair in array) is greater than
   the current_start (left value of first pair)    #overlap
      -return the highest value between final_end and current_end
          -return interval if no overlap

'''




from __future__ import print_function


class Interval:
  def __init__(self, start, end):
    self.start = start
    self.end = end

  def print_interval(self):
    print("[" + str(self.start) + ", " + str(self.end) + "]", end='')


  def merge(intervals):
  # TODO: Write your code here
    merged = []

    intervals.sort()        #sort method alone makes time complexity O(n log n)

    for i in range(len(intervals)):
      if merged == []:
        merged.append(intervals[i])      #starts off by appending index 0 when array is empty
      
      else:
        current_start = intervals [i][0]
        current_end = intervals [i][1]
        final_end = merged [-1][1]

        if final_end >= current_start:
          merged[-1][1] = max(final_end,current_end)       #takes highest value between the two variables
        else:
          merged.append(intervals[i])

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
#     if interval.start <= end:  # overlapping intervals, adjust the 'end'        Left: [(2,4) (5, 9) (6,7)]     2,5,6          7 is less than 9
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
