# Problem Statement #

# Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
# input: unsorted list of intervals 
# output: return non overlap list of intervals if the intervals gets overlap, we merged, else we return the interval

#edge cases: if the len(interval) < 2: return the interval
# sorted by the first index of each intervals
# initialize the resultarray = [], start = intervals[0].start, end = intervals[0].end
# loop through the entire array starting from the second interval where (1, len(arr))
# initialize the variable interval = intervals[i]
# if intervals.start starts at interval[1] <= intervals[0], which is the end [1, 3] [2, 6] overlap
  # update the end = max(end, interval.end)
# else : when its overlap
  # push the interval into the resultarray, update start to the next start, start = interval.start, same as for end
#outside of the for loop, we need another push for the interval into the resultarray


#attempt 2: Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
#input: list of intervals that each contains two integers, unsorted
#output: return list of intervals that doesn't contains the overlapping
#edge case: if the len of the intervals are less than 2, then no need to compare/merge, just return the interval

#Since for each interval there will be two index, we call it [start, end]
# sort the interval by its start
#initalize the first interval in the list as start = intervals[0].start, end = intervals[0].end
# for loop that go through each interval in the list starting from the second interval in the list
#   interval = intervals[i] this creates a variable that gets update every time when we loop and compare
#   compare if interval.start (for the first loop, this stands for intervals[1].start) <= end  (this stands for intervals[0].end)
#      Then it means it overlap, we update the end by taking the max b/t intervals[i].end and intervals[i+1].end
#   else:
#      Merge them with the start and end
#      update the start and end

from __future__ import print_function


class Interval:
  def __init__(self, start, end):
    self.start = start
    self.end = end

  def print_interval(self):
    print("[" + str(self.start) + ", " + str(self.end) + "]", end='')

def merge(intervals):
  merged = []
  if len(intervals) < 2:
    return intervals
  
  intervals.sort(key = lambda x: x.start)
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



# def merge(intervals):
#   merged = []
  
#   if len(intervals) < 2:
#     return intervals
  
#   intervals.sort(key = lambda a: a.start)
#   start = intervals[0].start
#   end = intervals[0].end

#   for i in range(1, len(intervals)):
#     interval = intervals[i]
#     if interval.start <= end:
#       end = max(interval.end, end)
#     else:
#       merged.append(Interval(start, end))
#       start = interval.start
#       end = interval.end
  
#   merged.append(Interval(start, end))
#   return merged


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
#   # x = lambda a: a + 10 print(x(5)) 
#   intervals.sort(key=lambda x: x.start) 
#     # this is saying that for each interval, we only want to sort first index of the interval interval[0] 
#     # key is  A function to specify the sorting criteria(s)

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
#   mergedIntervals.append(Interval(start, end)) //when the overlap is not exists
#   return mergedIntervals

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
