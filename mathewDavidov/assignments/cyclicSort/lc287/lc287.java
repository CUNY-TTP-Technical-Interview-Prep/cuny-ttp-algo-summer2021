
/**
 * Problem Statement: We are given an unsorted array containing ‘n+1’ numbers
 * taken from the range 1 to ‘n’. The array has only one duplicate but it can be
 * repeated multiple times. Find that duplicate number without using any extra
 * space. You are, however, allowed to modify the input array.
 * 
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 * 
 * Edge cases:
 * null / empty array -> return -1
 * one element -> return -1
 * 
 * Follow the cyclic sort algorithm almost exactly, but return the last element in the array.
 * The last number will be the duplicate number. 
 * (Note: if you change the swap pointer to nums[i] instead of nums[i] - 1, the duplicate is the first element in the array)
 * 
 * create a swap method
 * ---
 * initialize iterator to 0
 * while i is less than the length of the array:
 *   intialize j to nums[i] - 1
 *   if nums[i] != nums[j]:
 *     swap the indicies at i and j
 *   otherwise increment i
 * return the last element in the array (the duplicate)
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 */
import java.util.*;

public class lc287 {
    public static int findDuplicate(int[] nums) {
        if (nums == null || nums.length < 2) {
            return -1;
        }

        int i = 0;
        while (i < nums.length) {
            int j = nums[i] - 1;

            if (nums[i] != nums[j]) {
                swap(nums, i, j);
            } else {
                i++;
            }
        }

        return nums[nums.length - 1];
    }

    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 1, 4, 4, 3, 2 };
        System.out.println(findDuplicate(arr));
        System.out.println(Arrays.toString(arr));

        arr = new int[] { 2, 1, 3, 3, 5, 4 };
        System.out.println(findDuplicate(arr));
        System.out.println(Arrays.toString(arr));

        arr = new int[] { 2, 4, 1, 4, 4 };
        System.out.println(findDuplicate(arr));
        System.out.println(Arrays.toString(arr));

        arr = new int[] { 3, 1, 3, 4, 2 };
        System.out.println(findDuplicate(arr));
        System.out.println(Arrays.toString(arr));
    }
}
