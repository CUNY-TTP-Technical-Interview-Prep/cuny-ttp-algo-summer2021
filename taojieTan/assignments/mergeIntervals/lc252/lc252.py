# Problem Statement #

# Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

# input: an array with intervals (unsorted)
# output: a boolean value 
# edge cases: 1. empty array => return False
#             2. all intervals are the same (e.g. [[1,1], [1,1], [1,1]]) => return False
#             3. if each end interval is right on the start interval of next interval (e.g. [[1,2], [2,3], [3,4]])  => return True

'''
  Basically, we are asked to find any overlap interval, if there is one, we simply return False.
  
  We first sort the array, and we traverse through each interval to check 
  if the end interval of current element is greater to the start interval of next element, if yes, we found an overlap and return False.
  Time complexity will be O(N*Log(N)) and space complexity is O(1).

'''

def can_attend_all_appointments(intervals):

  if not intervals:
    return False
  
  start, end = 0, 1
  intervals.sort()
  print(intervals)

  for i in range(len(intervals) - 1):
    curr_interval = intervals[i]
    next_interval = intervals[i+1]

    if curr_interval[end] > next_interval[start]:
      return False
  

  return True


def main():
  print("Can attend all appointments: " + str(can_attend_all_appointments([[1, 4], [2, 5], [7, 9]])))
  print("Can attend all appointments: " + str(can_attend_all_appointments([[6, 7], [2, 4], [8, 12]])))
  print("Can attend all appointments: " + str(can_attend_all_appointments([[4, 5], [2, 3], [3, 6]])))
  print("Can attend all appointments: " + str(can_attend_all_appointments([[3, 4], [1, 3], [4, 6]])))
  print("Can attend all appointments: " + str(can_attend_all_appointments([])))



main()




# Solution
# -----
# def can_attend_all_appointments(intervals):
#   intervals.sort(key=lambda x: x[0])
#   start, end = 0, 1
#   for i in range(1, len(intervals)):
#     if intervals[i][start] < intervals[i-1][end]:
#       # please note the comparison above, it is "<" and not "<="
#       # while merging we needed "<=" comparison, as we will be merging the two
#       # intervals having condition "intervals[i][start] == intervals[i - 1][end]" but
#       # such intervals don't represent conflicting appointments as one starts right
#       # after the other
#       return False
#   return True

#   -----

# Time complexity #
# The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN) since we need to sort them in the beginning.

# Space complexity #
# The space complexity of the above algorithm will be O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N) space.
