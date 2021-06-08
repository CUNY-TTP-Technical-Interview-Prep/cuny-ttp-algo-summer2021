# Problem Statement #

# Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

# input: an integer (positive)
# output: a boolean value (True if it is a happy number, False otherwise)
# edge case: zero => False

# 2^2 + 3^2 = 10
# 1^2 + 0^2 = 1 => True

# 1^2 + 2^2 = 5 
# 5^2 = 25
# 2^2 + 5^2 = 29
# 2^2 + 9^2 = 85
# 8^2 + 5^2 = 89 
# 8^2 + 9^2 = 145 
# 1^2 + 4^2 + 5^2 = 42
# 4^2 + 2^2 = 20 
# 2^2 + 0^2 = 4
# 4^2 = 16
# 1^2 + 6^2 = 38
# 3^2 + 8^2 = 73
# 7^2 + 3^2 = 58
# 5^2 + 8^2 = 89 => reach the cycle and not equal 1 => False


# Given the integer, we will split the integer into each digit and sum the square of these digits
# We can apply the slow and fast pattern to check if there exists any cycle where sum is not equal 1.
# Each step (we can use a while loop), we use the 'slow' variable to keep track of its sum of the square of these digits once,
# at the same time, we also use 'fast' variable to keep track of its sum of the square of digits twice.
# if slow and fast are equal at some point and don't equal 1, we can assume the integer stucks in a cycle that never reaches 1 (break out of the while loop), and we return False.
# if slow equals 1, just return True.

def find_happy_number(num):
  # TODO: Write your code here
  slow = sum_each_square_digit(num)
  fast = sum_each_square_digit(slow)

  while slow != fast:
    if slow == 1:
      return True
    
    slow = sum_each_square_digit(slow)
    fast = sum_each_square_digit(fast)
    fast = sum_each_square_digit(fast) 

  return False if slow != 1 else True

def sum_each_square_digit(num):
  sum = 0
  for i in str(num):
    sum += int(i) ** 2
  
  return sum

def main():
  print(find_happy_number(23))
  print(find_happy_number(12))
  print(find_happy_number(19))
  print(find_happy_number(100))
  print(find_happy_number(0))
  print(find_happy_number(1))
  print(find_happy_number(2))
main()




# Solution
# -----
# def find_happy_number(num):
#   slow, fast = num, num
#   while True:
#     slow = find_square_sum(slow)  # move one step
#     fast = find_square_sum(find_square_sum(fast))  # move two steps
#     if slow == fast:  # found the cycle
#       break
#   return slow == 1  # see if the cycle is stuck on the number '1'


# def find_square_sum(num):
#   _sum = 0
#   while (num > 0):
#     digit = num % 10
#     _sum += digit * digit
#     num //= 10
#   return _sum

# -----

# Time Complexity #
# The time complexity of the algorithm is difficult to determine. However we know the fact that all unhappy numbers eventually get stuck in the cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4

# This sequence behavior tells us two things:

# 1. If the number N is less than or equal to 1000, then we reach the cycle or ‘1’ in at most 1001 steps.
# 2. For N > 1000, suppose the number has ‘M’ digits and the next number is ‘N1’. From the above Wikipedia link, we know that the sum of the squares of the digits of ‘N’ is at most 9^2M, or 81M (this will happen when all digits of ‘N’ are ‘9’).

# This means:

# 1. N1 < 81M
# 2. As we know M = log(N+1)
# 3. Therefore: N1 < 81 * log(N+1) => N1 = O(logN)

# This concludes that the above algorithm will have a time complexity of O(logN).

# Space Complexity #
# The algorithm runs in constant space O(1).
