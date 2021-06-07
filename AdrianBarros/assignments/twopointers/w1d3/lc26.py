# input list: []
# output: len arr: int
# restriction: in-place
# two pointerst one start and one at start+1
# while one stays in place for check
# the sec will check start==start+1 if true will len will be decrese by one
# else: first= sec sec+1
# if reach end will return the len(arr)

# O(n)


def removeDuplicates(arr):
    # step loop
    leng = len(arr)
    first = 0
    for second in range(1, len(arr)):
        # step 2 check dupl
        if arr[first] == arr[second]:
            leng -= 1
        # step 3 update the first pointer if not duplicate
        else:
            first = second
    return leng


print(removeDuplicates([]))
