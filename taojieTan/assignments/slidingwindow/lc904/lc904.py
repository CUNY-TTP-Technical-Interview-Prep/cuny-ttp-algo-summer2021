# Problem Statement #

# Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

# You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

# Write a function to return the maximum number of fruits in both baskets.

def fruits_into_baskets(fruits):
  #input: an array with only characters
  #output: return an integer 

  #edge cases: 1. empty array -> 0 

  #initialize a dictionary to represent the basket and keep track of the frequency of distinct characters
  basket = {}

  #initialize two window pointers to keep track of the size of the sliding window
  window_start = 0
  window_end = 0

  #initialize a max_fruits variable to keep track of the maximum number of fruits in the basket
  max_fruits = 0

  #loop through the array to store each character into basket
  #if the length of basket is greater than 2 which means we just picked a third type of fruit, 
  #we need to subtract the frequency of leftmost value (with window_start index) by one, 
  #and in the meanwhile shifting the window_start index to right
  #we keep subtracting until the length of basket is smaller or equal to two (use a while loop)
  #after break out of the inner while loop, we compare larger length 
  #after going through the entire array, we will get the final result of maximum length

  while window_end < len(fruits):
    rightmost_val = fruits[window_end]
    if rightmost_val in basket:
      basket[rightmost_val] += 1
    else:
      basket[rightmost_val] = 1

    while len(basket) > 2:
      leftmost_val = fruits[window_start]
      basket[leftmost_val] -= 1
      if basket[leftmost_val] == 0:
        del basket[leftmost_val]
      
      window_start += 1 

    max_fruits = max(max_fruits, window_end - window_start + 1)
    window_end += 1

  return max_fruits

def main():
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])))  
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']))) 
  print("Maximum number of fruits: " + str(fruits_into_baskets(['C', 'C', 'B', 'C', 'A', 'C'])))
  print("Maximum number of fruits: " + str(fruits_into_baskets([])))
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
