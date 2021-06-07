

# input: arr []
# output: array of two values [int,int]
# restriction: you cannot skip to the next fruit once you start with a particlar fruit

# Step 1 loop Through the array with an extending window
# Step 2 firts Conditional
# If we've seen the fruit: continue
# else add one to the counter, add it to a dic and we follow the next step
# Step 3 extend the window with a conditional
# IF current fruit == the fruit we looking for add counter 1
# ELSE continue
# Step 4 store the final number to an array
# LAST Step: return largest 2 numbers


def fruits_into_baskets(fruits):
    dic = {}
    fruit_nums = []
    # Step1: loop through the array opening the window when necessary
    for i in range(len(fruits)):
        cur_fruit = fruits[i]
        # Step 2 firts Conditional
        # If we've seen the fruit: continue
        if cur_fruit not in dic:
            dic[fruits[i]] = i
            cur_num = 1
            # Step 3 extend the window from i+1
            for j in range(i+1, len(fruits)):
                if cur_fruit == fruits[j]:
                    cur_num += 1
                else:
                    continue
            # Step 4 store the final number to an array
            # DISCLAIMER: array is not necessary but I am anticipating a follow up question to return the X bigger numbers
            # the last step has to be change a bit to do that
            fruit_nums.append(cur_num)
    # FINAL STEP
    first_max = max(fruit_nums)
    fruit_nums.remove(first_max)
    sec_max = max(fruit_nums)
    return [first_max, sec_max]


def main():
    print("Maximum number of fruits: " +
          str(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])))
    print("Maximum number of fruits: " +
          str(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])))


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
