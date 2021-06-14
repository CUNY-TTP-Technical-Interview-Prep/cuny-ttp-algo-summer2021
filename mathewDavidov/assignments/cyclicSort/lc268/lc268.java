
/**
 * Problem Statement:
 * We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
 * Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.
 * 
 * Example 1:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
 * 2 is the missing number in the range since it does not appear in nums.
 * 
 * Follow the logic for cyclic sort but ignore the number that will go out of bounds (i.e. when nums[i] = N)
 * Therefore, almost all of the numbers will be in there place.
 * At the end, loop through every index. If the number at that index is not equal to the index, that is the missing number.
 * 
 * [3, 0, 1]
 * [0, 3, 1]
 * [0, 1, 3]
 * 
 * Edge cases:
 * null / empty -> return 0
 * 
 * initialize iterator to 0
 * while iterator is less than the length of the array:
 *   initialize a pointer j to nums[i]
 *   if j is not out of bounds and nums[i] != i:
 *     swap nums[i] and nums[j]
 *   otherwise increment i
 * 
 * loop from 0 to the length of the array
 *   if nums[i] is not equal to i:
 *     we have a missing number, return i
 * 
 * return arr.length
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 */

import java.util.*;

public class lc268 {
    public static int missingNumber(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int iterator = 0;
        while (iterator < nums.length) {
            int swapPointer = nums[iterator];
            if (swapPointer != nums.length && nums[iterator] != iterator) {
                swap(nums, iterator, swapPointer);
            } else {
                iterator++;
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i) {
                return i;
            }
        }

        return nums.length;
    }

    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        System.out.println(missingNumber(new int[] { 4, 0, 3, 1 }));
        System.out.println(missingNumber(new int[] { 8, 3, 5, 2, 4, 6, 0, 1 }));
        System.out.println(missingNumber(new int[] {}));
        System.out.println(missingNumber(new int[] { 0 }));
        System.out.println(missingNumber(new int[] { 1 }));
    }
}
