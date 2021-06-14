# Problem Statement #

# Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

# input: a list with positive integers, target integer
# output: an integer
# edge cases: 1. an empty list => return 0
#             2. a list with only 1's 
#             3. target integer smaller or equal to 1 => return 0

'''
  We can apply sliding window pattern to solve this problem. 
  We declare a product variable to keep track of the product of subarray, and start and end pointers to keep track of the size of sliding window.
  We then loop through the list the get the product of subarray ranging from start to end pointers. 
  Then we check if the product is greater or equal to the target integer, 
  while it is, we keep dividing the value from the start pointer, and shift the start pointer toward the right.    
  we add the interval from start to end pointers to the result. 
'''
def numSubarrayProductLessThanK(nums, k):
  # TODO: Write your code here
  count = 0
  product = 1
  start = 0
  
  for end in range(len(nums)):
    product *= nums[end]  

    if product >= k:
      while product >= k and start <= end:
        product /= nums[start]
        start += 1

    count += end - start + 1
    
  return count if k > 1 else 0

def main():
  print(numSubarrayProductLessThanK([2, 5, 3, 10], 30)) 
  print(numSubarrayProductLessThanK([8, 2, 6, 5], 50)) 

  # case where list only contains 1's
  print(numSubarrayProductLessThanK([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],5))
  
  # case where target integer is 1 
  print(numSubarrayProductLessThanK([1, 2, 6, 5], 1)) 

  #case where list is empty
  print(numSubarrayProductLessThanK([], 5)) 

main()












# Solution
# -----
# def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
#         l = 0
#         res = 0
#         product = 1

#         for r in range(len(nums)):
#             product *= nums[r]

#             if product >= k:
#                 while product >= k and l <= r:
#                     product /= nums[l]
#                     l += 1

#             res += r - l + 1

#         return res

# -----

