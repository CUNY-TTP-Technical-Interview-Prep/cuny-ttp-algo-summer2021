# Problem Statement #

# Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

# input: two lists, each with disjoint intervals in ascending order. 
# output: intersection of intervals between these two lists.
# edge cases: 1. one or both lists are empty => return []
#             2. two lists are the same => return one of the list

'''
  example: 
  [[1, 3], [5, 6], [7, 9]]
  [[2, 3], [5, 7]]            ==> return [[2,3], [5,6], [7,7]]

  [[1, 3], [5, 6], [7, 9]]
  [[4, 5], [6, 7]]            ==> return [[5,5], [6,6], [7,7]]

  [[1, 3], [5, 6], [7, 9]]
  [[11, 15], [16, 17]]            ==> return [] 
'''
  
'''
  We can use a for loop to traverse the first list, and then use a while loop inside to traverse the second list,
  For each interval in the first list, we use it to compare every interval in the second list, 
  if the end interval of first list is smaller than the start interval of second list, we simply skip it and turn to next interval of the first list;
  else, we compare start intervals of both lists, and pick the larger value as the new start interval, 
  then we compare the end intervals of both lists, we pick the smaller end interval of as new end interval and insert it to result list,
  and if end interval of first list is greater or equal to the one of second list, we move to next interval of second list;
  else, we move to next interval of first list.
  We keep repeating the steps until we run out of for loop. 
  Next, we need to check if the last end interval of second list is equal to the last first interval of first list, 
  if yes, we insert the interval to result list.   

  Time complexity should be O(M+N), since we only traverse every element in both lists once.
  Space complexity should be O(N) for storing the result merged interval. 
'''

def merge(intervals_a, intervals_b):
  result = []
  start, end = 0, 1

  index = 0
  for i in range(len(intervals_a)):
    temp_a = intervals_a[i]

    while index < len(intervals_b):
      temp_b = intervals_b[index]

      if temp_a[end] < temp_b[start]:
        break
      else:
        start_interval = max(temp_b[start], temp_a[start])
        end_interval = min(temp_a[end], temp_b[end])

        if end_interval >= start_interval:
          result.append([start_interval, end_interval])

        if temp_a[end] >= temp_b[end]:
          index += 1
        else:
          break
    
    if index == len(intervals_b):
      break
          
  return result


def main():
  print("Intervals Intersection: " + str(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])))
  print("Intervals Intersection: " + str(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])))
  print("Intervals Intersection: " + str(merge([[1, 3], [5, 6], [7, 9]],  [[4, 5], [6, 7]])))
  print("Intervals Intersection: " + str(merge([[1, 3], [5, 6], [7, 9]],  [])))

  

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
# As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M), where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.

# Space complexity #
# Ignoring the space needed for the result list, the algorithm runs in constant space O(1).
