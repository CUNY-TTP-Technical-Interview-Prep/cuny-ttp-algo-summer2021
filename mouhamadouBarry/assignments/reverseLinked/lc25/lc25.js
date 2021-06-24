// Problem Statement #

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
/*
  Input: 
    -A linked list
    -A k integer
  Output:
    Every k sub-list of the linked list should reversed

  Variables:
    Count - A counter
    head - points to the 
    size -  size of the linked list

  Logic:
    use the for loop to iterate through the linked list 

    The head pointer assigned to the end of the linked
    Then go in reverse order

[[3,2,1],[4,5,6],[7,8]]
head = 7
decrease the pointer 

[8,7],6,5,4,3,2,1
*/
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

const reverse_every_k_elements = function(head, k) {
  // TODO: Write your code here

 
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)

//---------------------------My initial work-------------------------------------------------------------
  //This is to reverse the list   

  // while (current !== null) {
  //   next = current.next;
  //   current.next = previous;
  //   previous = current;
  //   current = next;
  // }
//THIS DOES NOT WORK. I have to section them off first and then reverse the order. NOT THE OTHER WAY AROUND
  //---------------------The next thing I should do is---
  //next is slpit them up
  //if the list is odd we take the mod/reminder of the size and w.e we are left with is the first sub-list
  // return previous; 
    //There can only be one
  // return head;

//-------------------------------END OF MY INITIAL WORK--------------------------------------------------

// Solution
// -----
// function reverse_every_k_elements(head, k) {
//   if (k <= 1 || head === null) {
//     return head;
//   }

//   let current = head,
//     previous = null;
//   while (true) {
//     const last_node_of_previous_part = previous;
//     // after reversing the LinkedList 'current' will become the last node of the sub-list
//     const last_node_of_sub_list = current;
//     let next = null; // will be used to temporarily store the next node
//     let i = 0;
//     while (current !== null && i < k) { // reverse 'k' nodes
//       next = current.next;
//       current.next = previous;
//       previous = current;
//       current = next;
//       i += 1;
//     }

//     // connect with the previous part
//     if (last_node_of_previous_part !== null) {
//       last_node_of_previous_part.next = previous;
//     } else {
//       head = previous;
//     }
//     // connect with the next part
//     last_node_of_sub_list.next = current;

//     if (current === null) {
//       break;
//     }
//     previous = last_node_of_sub_list;
//   }
//   return head;
// }

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).


/*--------------------------MY OLD WORK---------------------------- 




 if (k <= 1 || head === null) {
    return head;
  }

  let current = head
  let previous = null
  while (current != null) {
    let next = null; // will be used to temporarily store the next node
    let i = 0;
    while (i < k) { // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i ++;
    }
    
  }
  return head;




*/