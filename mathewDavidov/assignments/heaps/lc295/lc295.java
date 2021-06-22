/**
 * Problem Statement:
 * Design a class to calculate the median of a number stream. The class should have the following two methods:
 *   1. addNum(int num): stores the number in the class
 *   2. findMedian(): returns the median of all numbers inserted in the class
 * If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.
 * 
 * Example:
 * MedianFinder medianFinder = new MedianFinder();
 * medianFinder.addNum(1);    // arr = [1]
 * medianFinder.addNum(2);    // arr = [1, 2]
 * medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
 * medianFinder.addNum(3);    // arr[1, 2, 3]
 * medianFinder.findMedian(); // return 2.0
 * 
 * Edge cases:
 * No elements in either queue -> return 0
 * 
 * declare two heaps - a min and max heap
 * addNum:
 *   add the number to the min heap
 *   poll the front element from the min heap and it to the max heap
 *   if the min heap size is less than max heap:
 *     poll the front element from the max heap and it to the min heap
 * 
 * findMedian:
 *   handle edge case of zero elements
 *   if both heaps are the same size, return the average of the front element of both heaps
 *   otherwise, return the front element of the min heap
 * 
 * Runtime:
 * Time for addNum: O(log n)
 * Time for findMedian: O(1)
 * Space: O(n)
 * 
 * Logic for addNum helped by: https://leetcode.com/problems/find-median-from-data-stream/discuss/74047/JavaPython-two-heap-solution-O(log-n)-add-O(1)-find/77111
 */
import java.util.*;

class MedianFinder {
    private Queue<Integer> minHeap;
    private Queue<Integer> maxHeap;

    public MedianFinder() {
        minHeap = new PriorityQueue<>();
        maxHeap = new PriorityQueue<>((i1, i2) -> i2 - i1);
    }

    public void addNum(int num) {
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
            return (minHeap.peek() + maxHeap.peek()) / 2.0;
        } else {
            return minHeap.peek();
        }
    } 

    public static void main(String[] args) {
        MedianFinder medianFinder;
        medianFinder.addNum(3);
        medianFinder.addNum(1);
        System.out.println("The median is: " + medianFinder.findMedian());
        medianFinder.addNum(5);
        System.out.println("The median is: " + medianFinder.findMedian());
        medianFinder.addNum(4);
        System.out.println("The median is: " + medianFinder.findMedian());
    }
}