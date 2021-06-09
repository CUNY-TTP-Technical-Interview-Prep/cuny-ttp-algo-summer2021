/**
 * Problem Statement:
 * Given an array arr of unsorted numbers and a target sum, 
 * count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
 * Write a function to return the count of such triplets.
 * 
 * Example:
 * [-1, 4, 2, 1, 3], target = 5
 * sort [-1, 1, 2, 3, 4]
 * Triplets:
 * [-1, 1, 2]
 * [-1, 1, 3]
 * [-1, 1, 4]
 * [-1, 2, 3]
 * 
 * Edge cases:
 * empty array -> return -1
 * array with less than or 3 elements -> add and see if they're less than target (if so, we found 1 triplet; otherwise 0)
 * no triplet -> return 0
 * 
 * initialize count
 * handle edge cases of null, empty, less than three
 * Sort the array
 * for loop from 0 to the end - 2:
 *   the current index is the first pointer
 *   initialize index + 1 as the second pointer
 *   initialize arr.length - 1 as the third pointer
 *   while left < right:
 *     add all three pointers
 *     if the sum is less than the target:
 *       add to our count: right - left (we can increment by right - left because 
 *       any triplet less than right and greater than left will give us another sum < terget)
 *       increment left
 *     otheriwse decrement right
 * 
 * return count
 * 
 * Runtime:
 * Time: O(n^2)
 * Space: O(1)
 */

import java.util.*;
import java.util.stream.*;

public class lc259 {
    public static int searchTriplets(int[] arr, int target) {
        int count = -1;

        if (arr == null || arr.length == 0) {
            return count;
        }

        if (arr.length <= 3) {
            return IntStream.of(arr).sum() < 3 ? 1 : 0;
        }

        count = 0;

        Arrays.sort(arr);

        for (int i = 0; i < arr.length - 2; i++) {
            int left = i + 1;
            int right = arr.length - 1;

            while (left < right) {
                if (arr[i] + arr[left] + arr[right] < target) {
                    count += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }

        return count;
    }

    public static void main(String[] args) {
        int[] arr = { -1, 0, 2, 3 };
        System.out.println("count " + searchTriplets(arr, 3));

        int[] arr2 = { -1, 4, 2, 1, 3 };
        System.out.println("count " + searchTriplets(arr2, 5));

        int[] arr3 = { -1, 2, 1 };
        System.out.println("count " + searchTriplets(arr3, 5));

        int[] arr4 = {};
        System.out.println("count " + searchTriplets(arr4, 5));
    }
}