/**
 * Problem Statement:
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’, 
 * reverse the LinkedList from position ‘p’ to ‘q’.
 * 
 * Example 1:
 * 1 -> 2 -> 3 -> 4 -> 5
 * p = 2, q = 4
 * 
 * 1 -> 4 -> 3 -> 2 -> 5
 * 
 * Edge cases:
 * null head / one element -> return
 * p comes after q -> return head
 * 
 * initialize a dummy node to before the beginning of the list (to have a reference at the end to return)
 * loop from 0 to p - 1
 *   move the pointer forward (this is where we reverse the list from)
 * reverse the list:
 *   initialize a reference to the reverse node
 *   initialize a reference to the current node (previous' next)
 *   loop from 0 to q - p + 1 times:
 *     // (follow the same logic as 206)
 *     initialize a reference to the next node to the current's next node
 *     assign the current's next node to the reverse node
 *     point the reverse node to the current node
 *     point the current node to the next node
 *   point the previous' next next to current
 *   point the previous next to reverse
 *   return the head
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 */

public class lc92 {
    public static ListNode reverseBetween(ListNode head, int p, int q) {
        if (head == null || head.next == null || p > q) {
            return head;
        }

        ListNode beforeList = new ListNode(0);
        beforeList.next = head;
        // e.g. before -> 1 -> 2 -> 3

        ListNode previous = beforeList;

        for (int i = 0; i < p - 1; i++) {
            previous = previous.next;
        }

        ListNode current = previous.next;
        ListNode reverse = null;
        
        for (int i = 0; i < q - p + 1; i++) {
            ListNode next = current.next;
            current.next = reverse;
            reverse = current;
            current = next;
        }
        
        previous.next.next = current;
        previous.next = reverse;

        return beforeList.next;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        ListNode result = reverseBetween(head, 2, 4);
        System.out.println("Nodes of the reversed LinkedList are: ");
        while (result != null) {
            System.out.println(result.value);
            result = result.next;
        }
    }
}

class ListNode {
    public int value = 0;
    ListNode next;

    ListNode(int value) {
        this.value = value;
        next = null;
    }
}
