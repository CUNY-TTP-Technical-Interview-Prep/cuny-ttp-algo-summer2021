# Problem Statement #

# Given a set with distinct elements, find all of its distinct subsets.

'''
Given:
-Set with distinct elements

Result:
-Find all distinct subsets

Example:
Input:  [3, 6, 9]
Output: [[], [3], [6], [9], [3,6], [3,9], [6,9], [3,6,9]]

Variables:
-array to store distinct subsets
-nums   (given array)



Steps / Tasks:
(Iterative approach)
-Initialize subsets to empty array (store subsets)
-Use for loop to iterate through array
  -Add one number/element at a time to 
   empty subset array


Edge case:
-Are there given elements?
  -if not, return [[]]


Complexities
Time: O(n) - Iterating through a fixed array

Space: O(2^n) - Since the the size of result/output array 
is larger than initial array. The size grows exponentially

'''


def find_subsets(nums):
  subsets = []
  # TODO: Write your code here

  if (len(nums) == 0):          #Edge case
    return

  subsets = [[]]

  for n in nums:
    subsets += [ s + [n] for s in subsets]

  return subsets


def main():

  print("Here is the list of subsets: " + str(find_subsets([1, 3])))
  print("Here is the list of subsets: " + str(find_subsets([1, 5, 3])))
  
  #My examples
  print("list of subsets: " + str(find_subsets([])))
  print("list of subsets: " + str(find_subsets([3, 6, 9])))


main()
