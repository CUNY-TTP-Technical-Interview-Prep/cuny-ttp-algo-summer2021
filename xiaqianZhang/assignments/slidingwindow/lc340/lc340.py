# Problem Statement #

# Given a string, find the length of the longest substring in it with no more than K distinct characters.
# You can assume that K is less than or equal to the length of the given string.
'''
input: string and k that is target unique characters
output: return longest length of substring that contains target k

initialize windowStart = 0 start at index 0, resultLen = 0
initliaze a directionary to count the current appearence of the unique characters
for each index value in the string:
  check if the current unique characters is in the dictionary:
  if not append the unique characters into the dictionary by set its count as 0
  else if the character is in the dict then increment its count by 1

  After we are getting the numbers of unique charater's count in the directionary:
    while the unique characters in the uniqueV is greater than k distinct required characters:
      initlize the unique charater for the windowStart index, starts with index 0's value
      decrement the count of the value that position at windowStart index
      if the count of the windoeStart index is 0:
        then delete the key from the dictionary
      
      increment the windowStart by 1
    after this while loop, then update the longest length
return resultLen

'''
def longest_substring_with_k_distinct(str1, k):
  windowStart = 0
  resultLen = 0
  uniqueV = {}
  for each in range(len(str1)):
    currentV = str1[each]
    if currentV not in uniqueV:
      uniqueV[currentV] = 0
    uniqueV[currentV]+=1
    
    while len(uniqueV) > k:
      startV = str1[windowStart]
      uniqueV[startV] -= 1
      if uniqueV[startV] == 0:
        del uniqueV[startV]
      
      windowStart+=1
    
    resultLen = max(resultLen, each - windowStart + 1)
  return resultLen

def main():
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 2)))
  # "araa" length of 4
  # araa -> raa -> aac -> ac -> ci
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 1)))
  # "aa" length of 2
  # a -> r -> aa -> c -> i
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 3)))
  # "cbbeb" "bbebi" length of 5
  # cbbeb -> bbebi -> bebi -> ebi -> bi -> i


main()


















# Solution
# -----
  # window_start = 0
  # max_length = 0
  # char_frequency = {}

  # # in the following loop we'll try to extend the range [window_start, window_end]
  # for window_end in range(len(str1)):
  #   right_char = str1[window_end]
  #   if right_char not in char_frequency:
  #     char_frequency[right_char] = 0
  #   char_frequency[right_char] += 1

  #   # shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
  #   while len(char_frequency) > k:
  #     left_char = str1[window_start]
  #     char_frequency[left_char] -= 1
  #     if char_frequency[left_char] == 0:
  #       del char_frequency[left_char]
  #     window_start += 1  # shrink the window
  #   # remember the maximum length so far
  #   max_length = max(max_length, window_end-window_start + 1)
  # return max_length
