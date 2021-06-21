# Problem Statement #

# Given an array of characters where each character represents a fruit tree, you are given two baskets, 
# and your goal is to put maximum number of fruits in each basket.
# The only restriction is that each basket can have only one type of fruit.

# You can start with any tree, but you can’t skip a tree once you have started. 
# You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

# Write a function to return the maximum number of fruits in both baskets.

'''
Input: array of character
Output: return the maximum of two unique characters in a row

initliaze windowStart = 0, maxNum = 0, countV = {}
for loop that go through each index value in array:
  check if the current index is not in the directionary:
    if it is not in the dic -> initalize the value as 0
    if it's in the dic -> increment the value by 1

    while loop that len of the dictionary is greater than 2:
      initliaze the index value for the windowStart index
      decrement the count of the windowStart index
      if the count is equal to 0:
        delete the key of the windoeStart in the dictionary
      
    increment the windowStart as it moves to next index 0 -> 1
  update the maxNum
return maxNum

'''
def fruits_into_baskets(fruits):
  windowStart = 0
  maxNum = 0
  countV = {}

  for each in range(len(fruits)):
    currentV = fruits[each]
    if currentV not in countV:
      countV[currentV] = 0
    countV[currentV] +=1

    while len(countV) > 2:
      initV = fruits[windowStart]
      countV[initV] -=1
      if countV[initV] == 0:
        del countV[initV]
      
      windowStart += 1
    maxNum = max(maxNum, each - windowStart + 1)
  return maxNum

def main():
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])))
  #ABA BCC CAC
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])))
  # BCBBC

main()




















# Solution
# -----
#   window_start = 0
#   max_length = 0
#   fruit_frequency = {}

#   # try to extend the range [window_start, window_end]
#   for window_end in range(len(fruits)):
#     right_fruit = fruits[window_end]
#     if right_fruit not in fruit_frequency:
#       fruit_frequency[right_fruit] = 0
#     fruit_frequency[right_fruit] += 1

#     # shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
#     while len(fruit_frequency) > 2:
#       left_fruit = fruits[window_start]
#       fruit_frequency[left_fruit] -= 1
#       if fruit_frequency[left_fruit] == 0:
#         del fruit_frequency[left_fruit]
#       window_start += 1  # shrink the window
#     max_length = max(max_length, window_end-window_start + 1)
#   return max_length
