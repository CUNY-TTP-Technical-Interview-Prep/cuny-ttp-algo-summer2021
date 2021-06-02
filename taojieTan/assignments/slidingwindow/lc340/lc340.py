# Problem Statement #

# Given a string, find the length of the longest substring in it with no more than K distinct characters.

# You can assume that K is less than or equal to the length of the given string.

def longest_substring_with_k_distinct(str1, k):
# TODO: Write code here
    #input: positive integer k, a string
    #output: longest length of substring with no more than k distinct characters

    if k == 0: 
      return 0

    #initialize window_start and window_end to keep track of size of sliding window
    window_start = 0
    window_end = 0

    #initialize a dictionary to keep track of occurrence of each character in subarray
    char_occurrence = {}

    #initialize max_length to keep track of longer length of subarray with no more than k distinct characters
    max_length = 0

    #loop through the string to store occurrence of each character into char_occurrence
    #if the occurrence of characters in char_occurrence is greater than k, 
    #decrement the occurrence of the leftmost character in window by one until it is smaller or equal than k 
    #in the meanwhile, shrink the size of sliding window by increment window_start index by one
    #when finish the inner while loop, we choose larger length by compareing current max_length with size of sliding window
    #we break out of the outter while loop when window_end hits end of the string 
    while window_end < len(str1):
      rightmost_char = str1[window_end]

      if rightmost_char in char_occurrence:
        char_occurrence[rightmost_char] += 1 
      else:
        char_occurrence[rightmost_char] = 1
      
      while len(char_occurrence) > k:
        leftmost_char = str1[window_start]
        char_occurrence[leftmost_char] -= 1

        if char_occurrence[leftmost_char] == 0:
          del char_occurrence[leftmost_char]

        window_start += 1

      max_length = max(max_length, window_end - window_start + 1)
      window_end += 1

    return max_length


def main():
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 2)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 1)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 3)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("stringcc", 2)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("", 3)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 0)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("ccccccc", 3)))

main()


















# Solution
# -----
#   window_start = 0
#   max_length = 0
#   char_frequency = {}

#   # in the following loop we'll try to extend the range [window_start, window_end]
#   for window_end in range(len(str1)):
#     right_char = str1[window_end]
#     if right_char not in char_frequency:
#       char_frequency[right_char] = 0
#     char_frequency[right_char] += 1

#     # shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
#     while len(char_frequency) > k:
#       left_char = str1[window_start]
#       char_frequency[left_char] -= 1
#       if char_frequency[left_char] == 0:
#         del char_frequency[left_char]
#       window_start += 1  # shrink the window
#     # remember the maximum length so far
#     max_length = max(max_length, window_end-window_start + 1)
#   return max_length
