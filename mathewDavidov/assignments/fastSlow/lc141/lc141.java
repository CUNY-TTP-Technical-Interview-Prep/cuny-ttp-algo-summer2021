/**
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it. There is a cycle in a linked list if there is some node in the
 * list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next
 * pointer is connected to. Note that pos is not passed as a parameter. Return
 * true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Edge cases:
 * null head -> false
 * head points to null -> false
 * 
 * Initialize fast and slow pointers that point to the head
 * Iterate while the fast pointer is not null and does not point to null (so we can reference the next's next)
 *   Move the fast pointer reference to its next next pointer
 *   Move the slow pointer reference to its next 
 *   If the references are equal (they both reference the same node), return true, as there is a cycle
 * Return false, as the fast pointer has hit a null reference, as there is no cycle
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 */

class ListNode {
    public int value = 0;
    ListNode next;

    ListNode(int value) {
        this.value = value;
        next = null;
    }
};

public class lc141 {
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }

        ListNode fast = head, slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast == slow) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        head.next.next.next.next.next = new ListNode(6);
        System.out.println("LinkedList has cycle: " + hasCycle(head));

        head.next.next.next.next.next.next = head.next.next;
        System.out.println("LinkedList has cycle: " + hasCycle(head));

        head.next.next.next.next.next.next = head.next.next.next;
        System.out.println("LinkedList has cycle: " + hasCycle(head));
    }
}
