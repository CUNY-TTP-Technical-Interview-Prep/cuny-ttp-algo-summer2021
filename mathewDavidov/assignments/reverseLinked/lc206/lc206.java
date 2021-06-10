/**
 * Problem Statement:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Example 2:
 * Input: head = []
 * Output: []
 * 
 * Edge cases:
 * Null head node -> return
 * Head points to null -> return head
 * 
 * Maintain three pointers to nodes in memory to reverse the list one node at a time
 * 
 * initialize a previous pointer to null
 * while the current pointer is not null:
 *   initialize a next pointer to the current's next
 *   point the current's next to the previous node
 *   assign the previous node to the current node
 *   assign the current node to the next node
 * return the previous pointer
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
}

public class lc206 {
    public static ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode previous = null;
        
        while (head != null) {
            ListNode next = head.next;
            head.next = previous;
            previous = head;
            head = next;
        }
        
        return previous;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(2);
        head.next = new ListNode(4);
        head.next.next = new ListNode(6);
        head.next.next.next = new ListNode(8);
        head.next.next.next.next = new ListNode(10);
      
        ListNode result = reverseList(head);
        System.out.println("Nodes of the reversed LinkedList are: ");
        while (result != null) {
            System.out.print(result.value + " ");
            result = result.next;
        }
    }
}
