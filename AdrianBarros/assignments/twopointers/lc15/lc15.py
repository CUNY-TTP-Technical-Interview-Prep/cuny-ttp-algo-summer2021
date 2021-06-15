# Problem Statement #
# Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
'''
input: array unsorted
output a list of triplets

Step 1: we sort the array
Step 2: we loop the array and for each non reapeated value we will look for their other two
Step 3: we will move this process to another funtion for simplisity
Step 4: due to the nature of matematics to make a sum to 0 we can also calculate 1st + 2st = -(3rd)
        so will apply the twp pointer approach to find the pair that equals -i or current number
    we basically make this a two sum problem
Step 5: add it to the array 
Final: return 

'''


def search_triplets(arr):
    triplets = []
    # TODO: Write your code here
    # Step 1: we sort the array
    arr.sort()
    # Step 2: we loop the array and for each non reapeated value we will look for their other two
    for i in range(len(arr)):
        # make sure that we do not use repeted numbers
        if i > 0 and arr[i] == arr[i-1]:
            continue
        else:
            # Step 3: we force this question into a sum of 2
            findPair(arr, -arr[i], i+1, triplets)
    return triplets


def findPair(arr, target, start, triplets):
    end = len(arr)-1
    while start < end:  # make sure they do not touch
        curr_sum = arr[start] + arr[end]
        if curr_sum > target:
            end -= 1
        if curr_sum < target:
            start += 1
        if curr_sum == target:
            # Step 5: add it to the array
            triplets.append([-target, arr[start], arr[end]])
            start += 1
            end -= 1
            # we move the first pointer and skipping repeats
            while start < end and arr[start] == arr[start-1]:
                start += 1
            # same thing with sec ptr
            while start < end and arr[end] == arr[end+1]:
                end -= 1


def main():
    print(search_triplets([-3, 0, 1, 2, -1, 1, -2]))
    print(search_triplets([-5, 2, -1, -2, 3]))


main()


# Solution
# -----
#   arr.sort()
#   triplets = []
#   for i in range(len(arr)):
#     if i > 0 and arr[i] == arr[i-1]:  # skip same element to avoid duplicate triplets
#       continue
#     search_pair(arr, -arr[i], i+1, triplets)

#   return triplets


# def search_pair(arr, target_sum, left, triplets):
#   right = len(arr) - 1
#   while(left < right):
#     current_sum = arr[left] + arr[right]
#     if current_sum == target_sum:  # found the triplet
#       triplets.append([-target_sum, arr[left], arr[right]])
#       left += 1
#       right -= 1
#       while left < right and arr[left] == arr[left - 1]:
#         left += 1  # skip same element to avoid duplicate triplets
#       while left < right and arr[right] == arr[right + 1]:
#         right -= 1  # skip same element to avoid duplicate triplets
#     elif target_sum > current_sum:
#       left += 1  # we need a pair with a bigger sum
#     else:
#       right -= 1  # we need a pair with a smaller sum

# -----

# Sorting the array will take O(N * logN). The searchPair() func will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

# Space complexity #
# Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
