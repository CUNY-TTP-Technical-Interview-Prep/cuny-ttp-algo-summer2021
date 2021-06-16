// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

// Precondition: 
// head: head node of linked list, this needs to be preserved
// Postcondition:
// cycleNode: node where the cycle begins

/* General idea: 
Check first if cycle exists,
if it does then compute its length,
afterwards set 2 pointers (ptr1 && ptr2) to the head where 
ptr2 moves inside the cycle and ptr1 stays at the head ptr,
finally, move bother pointers forward (ptr = ptr.next),
eventually ptr1 will arrive at the cycle start and ptr2 will have finished the remaining cycle iteration 
and have met ptr1 at the start
if not then return head
 */ 
function find_cycle_start(head){
  let slow = head, fast = head, cycleLength = 0;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      // Both pointers met somewhere at the same node, we know this is a cycle for sure
      // Doesn't matter which pointer you pass
      cycleLength = getCycleLength(slow); 
      break;
    }
  }
  // Additional helper function that returns the pointer
  return findCycleStart(head, cycleLength);;
};

function getCycleLength(head){
  // Start at the head and we anticipate that eventually we will come back to the head pointer
  let length = 0, curr = head;
  // Risky while loop, but we are certain we will terminate whenever we iterate throughout the first cycle iteration
  while(true){
    curr = curr.next;
    length++;
    if (curr === head)  return length;; // When we come back to the head, we know we have reached the end of the cycle
  }
 return length;
}

function findCycleStart(head, cycleLength){
  // Start both pointers at the head 
  let pointer1 = head, pointer2 = head;
  // Move pointer2 inside the cycle, so that it can eventually intersect pointer1
  while (cycleLength--) {
    pointer2 = pointer2.next;
  }
  // Move both pointers forward until pointer1 gets to start cycle, and pointer2 finished cycle iteration and meets pointer1
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  // Return either pointer
  return pointer2;
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head















// Solution
// -----
// function find_cycle_start(head) {
//   cycle_length = 0;
//   // find the LinkedList cycle
//   let slow = head,
//     fast = head;
//   while ((fast !== null && fast.next !== null)) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) { // found the cycle
//       cycle_length = calculate_cycle_length(slow);
//       break;
//     }
//   }
//   return find_start(head, cycle_length);
// }


// function calculate_cycle_length(slow) {
//   let current = slow,
//     cycle_length = 0;
//   while (true) {
//     current = current.next;
//     cycle_length += 1;
//     if (current === slow) {
//       break;
//     }
//   }
//   return cycle_length;
// }


// function find_start(head, cycle_length) {
//   let pointer1 = head,
//     pointer2 = head;
//   // move pointer2 ahead 'cycle_length' nodes
//   while (cycle_length > 0) {
//     pointer2 = pointer2.next;
//     cycle_length -= 1;
//   }
//   // increment both pointers until they meet at the start of the cycle
//   while (pointer1 !== pointer2) {
//     pointer1 = pointer1.next;
//     pointer2 = pointer2.next;
//   }

//   return pointer1;
// }

// -----

// Time Complexity #
// As we know, finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). Also, as we saw in the above algorithm, we will need O(N) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

// Space Complexity #
// The algorithm runs in constant space O(1).
