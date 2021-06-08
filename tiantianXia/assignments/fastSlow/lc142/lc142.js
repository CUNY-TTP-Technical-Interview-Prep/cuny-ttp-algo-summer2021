// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

/**
 * input head: head of the linked list
 * 
 * output reuturn the node of the starting cycle
 * 
 * varibles: fastPrt, slowPrt to impelement the fast  and slow algorithm
 *          
 * 
 * step 1: find if cycle exist
 * step 2: find the lenght of the cycle
 * step 3: find the starting node based on the length 
 * 
 * while the fast is not null and the fast.next is not null
 *  update the slowPrt = slow.next
 *  update the fastPrt = fast.next.next
 * 
 *  if slow meet the fast pointer
 *    countPrt = slow
 *    lenght +=1
 * 
 *  if countPrt is not null and slow.next is the countPrt
 *    length ++;
 *    break;
 * if the fastprt is null then return null;
 *  
 *  reset slowpinter and fastprt to the head
 *  while the length is greater than 0
 *      move the fast pointer to the fast.next
 *      drecrement the lenght
 * 
 *  while fast is not null
 *      move slowpointer to slow.next
 *      move fastprt to fast .next
 *      if fast and slow meet
 *          return the node
 * 
 *    return head.
 * 
 * edge case if there is no cycle = > null
 *  */

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  // TODO: Write your code here
  let fastPrt = head;
  let slowPrt = head;

  while(fastPrt && fastPrt.next){
    slowPrt = slowPrt.next;
    fastPrt = fastPrt.next.next;

    if(slowPrt === fastPrt){
      slowPrt = head;

      while (fastPrt !== slowPrt){
        slowPrt = slowPrt.next;
        fastPrt = fastPrt.next;
      }
      return slowPrt;
    }
  }
  return null;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next // 3
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next // 4
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head // 1
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)



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
