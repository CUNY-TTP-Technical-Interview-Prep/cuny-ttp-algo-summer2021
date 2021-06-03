/**
 * Problem Statement: Given an array of unsorted numbers and a target number,
 * find a triplet in the array whose sum is as close to the target number as
 * possible, return the sum of the triplet. If there are more than one such
 * triplet, return the sum of the triplet with the smallest sum.
 * 
 * Example: 
 * Input: nums = [-1, 2, 1, -4], target = 1. 
 * Output: 2 
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * Edge cases:
 * array null -> largest integer value
 * array size less than 3 -> sum elements and return (this is the closest you can get to the target)
 * target not found -> closest sum found so far
 * 
 * Variables:
 * closestSum
 * 
 * sort the array
 * loop i from 0 - nums.length - 2 
 *   Left pointer will be i + 1 
 *   Right pointer will be nums.length - 1 
 *   while left < right: 
 *     currentSum will be nums[i] + nums[left] + nums[right] 
 *     if currentSum equal to the target, return the target sum 
 *     if currentSum is less than the target, increment left pointer 
 *     if currentSum is greater than the target, decrement the right pointer 
 *     keep track of the closest sum to the target (if tie, choose the smaller sum):
 *       min(abs(target - currentSum) ? abs(target - closestSum))
 * 
 * return closestSum
 * 
 * Runtime: 
 * Time: O(n^2)
 * Space: O(1)
 */
import java.util.*;
import java.util.stream.*;

public class lc16 {
    public static int threeSumClosest(int[] nums, int target) {
        if (nums == null) {
            return Integer.MAX_VALUE;
        }

        // If the length is smaller than 3, return the sum of the elements in the array (stream syntax)
        if (nums.length <= 3) {
            return IntStream.of(nums).sum();
        }

        Arrays.sort(nums);
        int closestSum = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < nums.length - 2; i++) {
            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {
                int currentSum = nums[i] + nums[left] + nums[right];

                if (currentSum == target) {
                    return currentSum;
                } else if (currentSum < target) {
                    left++;
                } else {
                    right--;
                }

                if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                    closestSum = currentSum;
                } else if (Math.abs(target - currentSum) == Math.abs(target - closestSum)) {
                    // This will take the smaller element if the difference is the same
                    // e.g. target = 4, closest will be 3 instead of 5
                    closestSum = Math.min(closestSum, currentSum);
                }
            }
        }

        return closestSum;
    }

    public static void main(String[] args) {
        System.out.println(threeSumClosest(new int[] { -2, 0, 1, 2 }, 2));
        System.out.println(threeSumClosest(new int[] { -3, -1, 1, 2 }, 1));
        System.out.println(threeSumClosest(new int[] { 1, 0, 1, 1 }, 100));
        System.out.println(threeSumClosest(new int[] { 2, 1 }, 9));
        System.out.println(threeSumClosest(new int[] { }, 9));
        System.out.println(threeSumClosest(null, 9));
    }
}
