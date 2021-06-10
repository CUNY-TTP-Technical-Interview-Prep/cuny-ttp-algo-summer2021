/**
 * Problem Statement:
 * Given a non-empty, singly linked list with head node head, return a middle node of a linked list.
 * If there are two middle nodes, return the second middle node.
 * 
 * Example:
 * Input: [1,2,3,4,5]
 * Output: Node 3 from this list (Serialization: [3,4,5])
 * The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 * Note that we returned a ListNode object ans, such that:
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 * 
 * Input: [1,2,3,4,5,6]
 * Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * [1,2,3,4,5,6]
 * fast - 1 -> 3 -> 5 -> null
 * slow - 1 -> 2 -> 3 -> 4
 * 
 * Edge cases:
 * Null node -> null
 * One node -> return the node (it's the middle)
 * 
 * initialize a slow pointer that references the head
 * initialize a fast pointer that references the head
 * loop while fast isn't null or its next isn't null:
 *   change fast to its nexts next pointer
 *   change slow to its next pointer
 * return the slow pointer
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

public class lc876 {
    public static ListNode middleNode(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        ListNode fast = head, slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        System.out.println("Middle Node: " + middleNode(head).value);
      
        head.next.next.next.next.next = new ListNode(6);
        System.out.println("Middle Node: " + middleNode(head).value);
      
        head.next.next.next.next.next.next = new ListNode(7);
        System.out.println("Middle Node: " + middleNode(head).value);
    }
}
