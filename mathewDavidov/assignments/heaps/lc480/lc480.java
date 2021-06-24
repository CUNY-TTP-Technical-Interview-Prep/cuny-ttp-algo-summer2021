/**
 * Problem Statement:
 * Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.
 * 
 * Example 1:
 * Input: nums = [1, 2, -1, 3, 5], k = 2
 * Output: [1.5, 0.5, 1.0, 4.0]
 * Explanation: Lets consider all windows of size ‘2’:
 *   - [1, 2, -1, 3, 5] -> median is 1.5
 *   - [1, 2, -1, 3, 5] -> median is 0.5
 *   - [1, 2, -1, 3, 5] -> median is 1.0
 *   - [1, 2, -1, 3, 5] -> median is 4.0
 * 
 * Example 2:
 * Input: nums = [1, 2, -1, 3, 5], k = 3
 * Output: [1.0, 2.0, 3.0]
 * Explanation: Lets consider all windows of size ‘3’:
 *   - [1, 2, -1, 3, 5] -> median is 1.0
 *   - [1, 2, -1, 3, 5] -> median is 2.0
 *   - [1, 2, -1, 3, 5] -> median is 3.0
 * 
 * Edge cases:
 * k <= 0 -> return empty array
 * k > nums.length -> return empty array
 * null/empty input array -> return empty array
 * 
 * Use the general sliding window approach of size k
 * For each window, use the solution to median of data stream (LC 295) to retrieve the median
 * 
 * initialize a median finder class (acts as a priority queue that finds the median)
 * declare a double array for the medians
 * use the sliding window pattern:
 *   loop from 0 to nums.length:
 *     add the current number to the queue
 *     if the queue is the same size as k (we have a window):
 *       add the median of the current window to the result array
 *       remove the number at the start of window and increment the index
 * return the median array
 * 
 * Runtime: 
 * Time: The heap size is k. Removing a random element from a heap is O(k) - do it n times -> O(n * k)
 * Space: O(k)
 * 
 * Idea for `public boolean remove(int)` in median class helped by: 
 * https://leetcode.com/problems/sliding-window-median/discuss/158561/Easy-to-understand-Java-solution-using-2-Priority-Queues
 */
import java.util.*;

public class lc480 {
    public static double[] medianSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k > nums.length || k <= 0) {
            return new double[]{};
        }

        double[] medians = new double[nums.length - k + 1];
        MedianFinder pqueue = new MedianFinder();
        int windowStart = 0;

        for (int windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            pqueue.offer(nums[windowEnd]);

            if (pqueue.size() == k) {
                medians[windowStart] = pqueue.findMedian();
                pqueue.remove(nums[windowEnd + 1 - k]);
                windowStart++;
            }
        }

        return medians;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(medianSlidingWindow(new int[]{1, 2, -1, 3, 5}, 2)));
        System.out.println(Arrays.toString(medianSlidingWindow(new int[]{1, 2, -1, 3, 5}, 3)));
    }
}

class MedianFinder {
    private Queue<Integer> minHeap;
    private Queue<Integer> maxHeap;

    public MedianFinder() {
        minHeap = new PriorityQueue<>();
        maxHeap = new PriorityQueue<>(Collections.reverseOrder());
    }

    public void offer(int num) {
        minHeap.offer(num);
        maxHeap.offer(minHeap.poll());

        if (minHeap.size() < maxHeap.size()) {
            minHeap.offer(maxHeap.poll());
        }
    }

    public double findMedian() {
        if (minHeap.isEmpty() && maxHeap.isEmpty()) {
            return 0;
        }

        if (minHeap.size() == maxHeap.size()) {
            // To pass LC test cases it needs to be type casted to a long
            return ((long) minHeap.peek() + maxHeap.peek()) * 0.5;
        } else {
            return minHeap.peek();
        }
    }

    public int size() {
        return minHeap.size() + maxHeap.size();
    }

    public boolean remove(int num) {
        return minHeap.remove(num) || maxHeap.remove(num);
    }
}