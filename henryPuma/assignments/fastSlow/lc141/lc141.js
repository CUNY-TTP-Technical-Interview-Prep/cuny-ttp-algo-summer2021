// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

// Precondition: 
// head: pointer to the start of the linked list
// Postcondition: 
// has_cycle returns a Boolean indicating whether or not the input linked list is a cycle

/* General Idea: Have 2 pointers start at head (slow && fast)
slow: iterates by 1 node,
fast: iterates by 2 nodes,
Eventually fast will traverse through the cycle faster and meet with slow at some arbitrary node,
If fast doesn't meet slow and reaches null or the next pointer for fast is null then return fals,
<=> we have reached the end of the linked list
*/
function has_cycle(head) {
  // Set both pointers at head position
  let slow = head, fast = head;
  // While the pointer that can look ahead the farthest can move at least one forwards
  while(fast && fast.next){
    slow = slow.next; // Move by 1
    fast = fast.next.next; // Move by 2
    // At some point when both pointers meet then we definently have a cycle somewhere fast was able to re-encounter the slow pointer
    if (fast === slow) return true; 
  }
  // Fast arrived at null, so there is no linked list 
  return false;
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`) // False

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`) // True

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`) // True













// Solution
// -----
// function has_cycle(head) {
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) {
//       return true; // found the cycle
//     }
//   }
//   return false;
// }
// -----

// Time Complexity #
// As we have concluded above, once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space Complexity #
// The algorithm runs in constant space O(1).
