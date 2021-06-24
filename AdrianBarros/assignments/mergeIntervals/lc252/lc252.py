# Problem Statement #

# Given an array of intervals representing N appointments, find out if a person can attend all the appointments.
'''
input: array of appointments [x,y]
output: Bool that represents if the person can attend all apoinments

Complicting is i1.end > i2.start
step1: sort it by the start interval
step2: loop through the array
conditional:
        IF i.[1] > i+1.[0] then we label that as a can not attend
                return false
        ELSE : continue
Step3: if gets to the end return true

Time Complexity O(nlogn + N) = O(nlogN)
space complexity O(1)
'''


def can_attend_all_appointments(intervals):
    # TODO: Write your code here
    intervals.sort()
    for i in range(len(intervals)-1):
        curr = intervals[i]
        next = intervals[i+1]
        if curr[1] > next[0]:
            return False
    return True


def main():
    print("Can attend all appointments: " +
          str(can_attend_all_appointments([[1, 4], [2, 5], [7, 9]])))  # false
    print("Can attend all appointments: " +
          str(can_attend_all_appointments([[6, 7], [2, 4], [8, 12]])))  # True
    print("Can attend all appointments: " +
          str(can_attend_all_appointments([[4, 5], [2, 3], [3, 6]])))  # Flase
    print("Can attend all appointments: " +
          str(can_attend_all_appointments([[1, 2], [2, 5], [7, 9]])))  # True


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
# The time complexity of the above algorithm is O(N*logN), where N is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN) since we need to sort them in the beginning.

# Space complexity #
# The space complexity of the above algorithm will be O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N) space.
