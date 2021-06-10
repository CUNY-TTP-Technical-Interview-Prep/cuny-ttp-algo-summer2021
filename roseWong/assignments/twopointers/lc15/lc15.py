# Problem Statement #
# Given an array of unsorted numbers
# find all unique triplets in it that add up to zero.

""" the following is a "reverse-engineer" of the given solution.  I was able to 
think of some key elements like sorting the array and searching for the "third figure"
to achieve a zero sum, I wasn't able to write out the full logic."""
#Reverse - engineer of given solution:

# sort the given array to make it easier to navigate
# initiate an empty array named "triplets". this will store the arrays of triplets that we find.
# if there are consecutive figures of equal value, skip the first one since we don't want
# duplicate values within each triplet.
# call function "search_pair" which will take the following arguments: the given array,
# the negative value of the current element (which will be the target_sum),
# the next index number (which will be the left pointer), and the array of triplets.
# following are the steps for the search-pair function:
# point right_ptr to end of array. left_ptr is already passed in to point to the element
# behind the current element
# As long as left pointer is less than right pointer, add the elements that left ptr and
# right ptr are pointing to and assign to current_sum
# if current_sum is equal to target_sum, it is a zero-sum triplet and can be appended to
# the triplet array
# increment left_ptr and decrement right_ptr
# as long as left_ptr is less than right_ptr:
#   if element at left_ptr is equal to the element before it, decrement left pointer
# as long as left_ptr is less than right_ptr:
#   if element at right_ptr is equal to the element after it, increment right pointer
# elif the target_sum > current_sum, increment left_ptr
# else, decrement right_ptr
# return triplets


def search_triplets(arr):

  triplets = []
  arr.sort()
  for i in range(len(arr)):
    if i > 0 and arr[i] == arr[i-1]:  # skip same element to avoid duplicate triplets
      continue
    search_pair(arr, -arr[i], i+1, triplets)
  return triplets


def search_pair(arr, target_sum, left_ptr, triplets):
  right_ptr = len(arr) - 1
  while(left_ptr < right_ptr):
    current_sum = arr[left_ptr] + arr[right_ptr]
    if current_sum == target_sum:  # found the triplet
      triplets.append([-target_sum, arr[left_ptr], arr[right_ptr]])
      left_ptr += 1
      right_ptr -= 1
      while left_ptr < right_ptr and arr[left_ptr] == arr[left_ptr - 1]:
        left_ptr += 1  # skip same element to avoid duplicate triplets
      while left_ptr < right_ptr and arr[right_ptr] == arr[right_ptr + 1]:
        right_ptr -= 1  # skip same element to avoid duplicate triplets
    elif target_sum > current_sum:
      left_ptr += 1  # we need a pair with a bigger sum
    else:
      right_ptr -= 1  # we need a pair with a smaller sum
  return triplets


def main():
  print(search_triplets([-3, 0, 1, 2, -1, 1, -2]))
  print(search_triplets([-5, 2, -1, -2, 3]))
  print(search_triplets([-5, 2]))
  print(search_triplets([-1, -1, -1, -1, -1]))



main()








# Solution
# -----
#   arr.sort()
#   triplets = []
#   for i in range(len(arr)):
#     if i > 0 and arr[i] == arr[i-1]:  # skip same element to avoid duplicate triplets
#       continue
#     search_pair(arr, -arr[i], i+1, triplets)

#   return triplets


# def search_pair(arr, target_sum, left_ptr, triplets):
#   right_ptr = len(arr) - 1
#   while(left < right):
#     current_sum = arr[left] + arr[right]
#     if current_sum == target_sum:  # found the triplet
#       triplets.append([-target_sum, arr[left], arr[right]])
#       left_ptr += 1
#       right_ptr -= 1
#       while left < right and arr[left] == arr[left - 1]:
#         left += 1  # skip same element to avoid duplicate triplets
#       while left < right and arr[right] == arr[right + 1]:
#         right -= 1  # skip same element to avoid duplicate triplets
#     elif target_sum > current_sum:
#       left += 1  # we need a pair with a bigger sum
#     else:
#       right -= 1  # we need a pair with a smaller sum

# -----

# Sorting the array will take O(N * logN). The searchPair() func will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

# Space complexity #
# Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
