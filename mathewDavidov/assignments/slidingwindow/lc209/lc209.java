/*
Given an array of positive integers nums and a positive integer target, 
return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

edge:
arr.length > 0 || null
target > 0

currentSum, windowStart, minLength
for 0 - end
    currentSum += arr[windowEnd]

    while currentSum >= target
        minLength = min(minLength, windowEnd-windowStart+1)
        currentSum -= arr[windowStart]
        windowStart++;
*/

import java.util.*;

public class lc209 {
    public static int findMinSubArray(int target, int[] arr) {
        if (arr == null || arr.length == 0) {
            return 0;
        }

        int minLength = arr.length, currentSum = 0, windowStart = 0;

        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            currentSum += arr[windowEnd];

            while (currentSum >= target) {
                minLength = Math.min(minLength, windowEnd - windowStart + 1);
                currentSum -= arr[windowStart];
                windowStart++;
            }
        }

        return minLength;
    }

    public static void main(String[] args) {
        System.out.println(findMinSubArray(7, new int[] { 2, 1, 5, 2, 3, 2 }));
        System.out.println(findMinSubArray(7, new int[] { 2, 1, 5, 2, 8 }));
        System.out.println(findMinSubArray(8, new int[] { 3, 4, 1, 1, 6 }));
    }
}
