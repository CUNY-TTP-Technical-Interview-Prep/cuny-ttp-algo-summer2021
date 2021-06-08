// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*
input: head pointer to a Linked-list
output: bool:true or false

Solution:
  Following Hare and Tortoise Algorithm, 
  I can implement a Fast: 2-step, and Slow: 1-step pointer system.
  I would move my fast pointer first; therefore if there is no cycle,
  that pointer will reach null first. But if there is a cycle,
  that pointer will eventually point to the same area in memory as the slow pointer.
  This effective proves that we have found a cycle.

  1. Initialize my fast and slow pointers, point them to head.
  2. Use a while loop to move my fast pointer by 2 steps, and slow pointer by 1 step.
  3. While loop will be infinite if there is cycle, else loop should end when fast or fast.next is null.
  4. at each iteration, check if the slow pointer and fast pointers point to the same memory location.
  5. if that's true, return true. if not, continue.
  6. If the loop ends and we never found a cycle, than the loop has no cycle. return false.

  edge: no node or head points to null or empty linked list => return false or throw error.
  edge: 

  Space complexity: o(1) or constant time. We are initiating the pointers and moving through already existing input.
  We are not allocating a dynamic amount of memory based on the input.

  Time Complexity: This is tricking as we are somewhere between O(n) and O(n^2) but not fully O(n**2)
  This is because if there is no cycle, it will reach the end at O(n)
  If there is a cycle, we will have to loop through that cycle until our two pointers meet.
  Depending on the size of the linked-list and we will revisit 1 or more nodes before fast catches up to slow.
  This is of course beyond O(n) for fast specifically but not fully O(n^2). So it remains O(n) since it isn't fully O(n^2)
*/

const has_cycle = function (head) {
  // TODO: Write your code here
  if (!head) return false;

  let slowPtr = head; // slowPtr points to head.
  let fastPtr = head; // fastPtr points to head.

  // checking if the faster pointer does not equal
  // null which means end of the linked list.
  // checking if the faster pointer itself isn't null.
  while (fastPtr !== null && fastPtr.next !== null) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
    if (slowPtr === fastPtr) return true;
  }

  return false;
  return false;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

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
