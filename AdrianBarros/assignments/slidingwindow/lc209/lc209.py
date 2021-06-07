import math

# inputs: int= s arr=[]
# output: int=n
# loop throu the arr
# window start, window end
# des> i = slide the window
# until the sum > des
# min num_i


def smallest_subarray_with_given_sum(s, arr):
    min_arr = float('inf')
    cur_arr, win_start, curr_val = 0

    # Step 1 Loop through the array
    for i in range(len(arr)):
        # step 2: add the value to the current sum and extend the size of the curr subarray
        curr_val += arr[i]
        cur_arr += 1
        # step 3 check if the value is what we are looking for
        if curr_val >= s:
            # step 4 update the min subarray value
            min_arr = min(min_arr, cur_arr)
            # Step 5 update the sub and value
            curr_val -= arr[win_start]
            win_start += 1
            cur_arr -= 1

    return min_arr


def main():
    print("Smallest subarray length: " +
          str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])))
    print("Smallest subarray length: " +
          str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])))
    print("Smallest subarray length: " +
          str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])))


# main():
# print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])))
# print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])))
#   print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])))

    # Solution
    # -----
    # window_sum = 0
    # min_length = math.inf
    # window_start = 0

    # for window_end in range(0, len(arr)):
    #   window_sum += arr[window_end]  # add the next element
    #   # shrink the window as small as possible until the 'window_sum' is smaller than 's'
    #   while window_sum >= s:
    #     min_length = min(min_length, window_end - window_start + 1)
    #     window_sum -= arr[window_start]
    #     window_start += 1
    # if min_length == math.inf:
    #   return 0
    # return min_length
