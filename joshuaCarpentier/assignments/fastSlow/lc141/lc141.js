// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

/**
 * Input: Starting from the head we have a fast and slow pointer
 * 
 * then as we iterate through the linked list we are changing the values of each pointer to the point that they are moving at different rates 
 * the fast pointer moves two spots while the slow moves one spot ahead meaning that the fast pointer includes some recursion 
 * 
 * and as we move towards the end we set the last pointer of the linked list to another part of the linked list 
 * specifically where the fast pointer would be meaning if we have for example :
 * 
 * 3 2 0 4
 * 
 * 3 -> 2 -> 0 -> null
 * 
 * slow
 * fast
 * 3 -> 2 -> 0 -> null
 * 
 *    slow
 *         fast 
 * 3 -> 2 -> 0 -> null
 * 
 * fast moves at 2 spot so if loop it should end up a 2 so we pointer at 2
 * 
 *         slow
 *               fast 
 * 3 -> 2 -> 0 -> |
 *      /\        |
 *      ||        |
 *      ||________| 
 *     fast
 * 
 * so we can loop through the linked list until fast and slow pointers
 * match position 
 * 
 * 
 * output: and return true if the match else false
 */

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function(head) {
  let slow = head,
      fast = head;

      while (fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast){
          return true;
        }
      }

// dont necessarly need to have else when just returning boolean value
  return false
}

// head is global vairiable since were not declaring with keywords like
// let, const, or var which isnt recommend 
console.log(head = new Node(1)) // adding intial node 
console.log(head.next = new Node(2))
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(head)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)


// Time Complexity #
// As we have concluded above, once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space Complexity #
// The algorithm runs in constant space O(1).
