def max_sub_array_of_size_k(k, arr):
    # variables
    win_start, win_end, max_sum, current_sum = 0
    # step 1 loop through the array
    for i in range(len(arr)):
        # step 2 get all k elements
        current_sum = arr[win_end]
        win_end += 1  # realize I could have used i but for clarity in my variables Ill keep it
        # Check if we have k values
        if win_end-win_start == k-1:
            # update the sum if necessary
            max_sum = max(max_sum, current_sum)
            # update the window start and curr sum
            current_sum -= arr[win_start]
            win_start += 1
    return max_sum


def main():
    print("Maximum sum of a subarray of size K: " +
          str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])))
    print("Maximum sum of a subarray of size K: " +
          str(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])))


main()


# bruteforce/naive approach
# -----
# def max_sub_array_of_size_k(k, arr):
#   max_sum = 0
#   window_sum = 0

#   for i in range(len(arr) - k + 1):
#     window_sum = 0
#     for j in range(i, i+k):
#       window_sum += arr[j]
#     max_sum = max(max_sum, window_sum)
#   return max_sum


# better approach
# -----
# def max_sub_array_of_size_k(k, arr):
#   max_sum , window_sum = 0, 0
#   window_start = 0

#   for window_end in range(len(arr)):
#     # add the next element
#     window_sum += arr[window_end]
#     # slide the window, we don't need to slide if we've not hit the required window size of 'k'
#     if window_end >= k-1:
#       max_sum = max(max_sum, window_sum)
#       # subtract the element going out
#       window_sum -= arr[window_start]
#       # slide the window ahead
#       window_start += 1
#   return max_sum
