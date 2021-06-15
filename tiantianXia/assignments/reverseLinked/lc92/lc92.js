// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

/**
 * inputs: 
 * @param {*} head : the head of linked list
 * @param {*} p: integer for the starting of the linked list
 * @param {*} q: integer for the end of the linked list
 * 
 * output:
 * @returns head: head of the reversed linked list
 * 
 * step 1: set previous, current, next: to initiate the pointer that can point to the current node and the node before and after
 * step 2: use while loop traverse all the node
 * step 3: compare if the node value is p run the while loop and start reverse the sub linked list
 * step 4: after reverse the linked list connect the node before reverse and the node after the reverse
 * 
 * variable current, previous, next to initiate the pointer that can point to the current node and previous node
 *          nodeBeforeP: store the node before the reverse
 *          nodeP: store the node for the first sub linked list that need to point to the node after the reverse
 * 
 * a while loop traverse all the node if the node is not null keep running
 *    compare if the current node value is equal to p
 *      store the current node to the nodeP that need to use after reverse
 *      store the previous node to the nodeBeforeP that need to use after reverse and point to the node before the reversed node
 *      
 *       while the current is not null and traverse the node between p to q value
 *            store the current.next node to next
 *            store the previous node to the current.next
 *            store the current to the previous
 *            store the next to the current
 *        end loop for reverse the sub linked list
 *        
 *        link the head of reversed list to nodeBeforeP
 *        link the end of the reversed sub linked list to current since the while loop end up with the next node of q
 *    end if 
 *  
 *    store the current to the previous
 *    update the current to the current.next
 */

const reverse_sub_list = function(head, p, q) {
  // TODO: Write your code here
  let next = null;
  let current = head;
  let previous = null;
  let nodeBeforeP = null;
  let nodeP = null;
  let count = 0;

  while(current !== null){

      if(current.value === p){
        nodeP = current;
        nodeBeforeP = previous;

        while(current !== null && count < 2){
          next = current.next;
          current.next = previous;
          previous = current;
          current  = next;

          if(current.value === q || count > 0){
            count ++;
          }
        }

        nodeBeforeP.next = previous;
        nodeP.next = current;

      }

      previous = current;
      current = current.next;
  }

  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)// 1, 2, 3, 4, 5
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`) // 1, 4, 3, 2, 5


// Solution
// -----
// function reverse_sub_list(head, p, q) {
//   if (p === q) {
//     return head;
//   }

//   // after skipping 'p-1' nodes, current will point to 'p'th node
//   let current = head,
//     previous = null;
//   let i = 0;
//   while (current !== null && i < p - 1) {
//     previous = current;
//     current = current.next;
//     i += 1;
//   }

//   // we are interested in three parts of the LinkedList, the part before index 'p',
//   // the part between 'p' and 'q', and the part after index 'q'
//   const last_node_of_first_part = previous;
//   // after reversing the LinkedList 'current' will become the last node of the sub-list
//   const last_node_of_sub_list = current;
//   let next = null; // will be used to temporarily store the next node

//   i = 0;
//   // reverse nodes between 'p' and 'q'
//   while (current !== null && i < q - p + 1) {
//     next = current.next; // 2  3
//     current.next = previous;// null 1
//     previous = current; // 1 2
//     current = next; // 2 3
//     i += 1;
//   }

//   // connect with the first part
//   if (last_node_of_first_part !== null) {
//     // 'previous' is now the first node of the sub-list
//     last_node_of_first_part.next = previous;
//     // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
//   } else {
//     head = previous;
//   }

//   // connect with the last part
//   last_node_of_sub_list.next = current;
//   return head;
// }

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).

/**
 * inputs:
 *  head: head of the linkedlist
 *  p: a vlue of the end of the sub linked list
 *  q: a value of the head of the sub linked list
 * 
 * out:
 *  head: the head of the linked list
 * 
 * step 1: ues while loop to travers all the node
 * setp 2: while found p, start sub while to reverse the sub linked list until found q
 * step 3: conect p to next conect q to previes
 * 
 * varible prev initial as null , current initial as head, next is head, before_p, 
 * 
 * while the current is not null traverse to the next
 *    if found the p start a while loop
 *       
 *      while current.value is not equal q run the loop
 *          let next become current.next
 *          let current.next become previous
 *          let previous become currnt
 *          let current become next
 * end loop
 * return head
 * 
 * edge case: if head is null => null
 *            
 *     
 */

//  const reverse_sub_list = function(head, p, q) {
//   // TODO: Write your code here
//   let previous = null;
//   let current = head;
//   let next = current.next;
//   let nodeBeforeP = null;
//   let nodeP = null;
//   let count = 0;

//   while(current !== null){

//     if(current.value === p){ // 2
//       nodeBeforeP = previous;
//       nodeP = current;
//       previous = null;

//       while(current !== null && count < 2 ){
//         next = current.next; //  3 4
//         current.next = previous; // 1 2
//         previous = current; // 2 3
//         current = next; // 3 4

//         if(current.value === q || count > 0){
//           count ++;
//         }
//       }
      
//       nodeBeforeP.next = previous;
//       nodeP.next = current;
//       break;

//     }else{

//     previous = current; // 1 4 5
//     current = current.next;// 2 5 null 
//     }

//   }

//   return head;
// };