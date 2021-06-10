// Problem Statement #

// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

using namespace std;

#include <iostream>
#include <cmath>


class ListNode {
 public:
  int value = 0;
  ListNode *next;

  ListNode(int value) {
    this->value = value;
    next = nullptr;
  }
};

class MiddleOfLinkedList {
 public:
  // Precondition: 
  // The parameter: head: a non null head pointer of a singly linked listed

  // Post condition:
  // return ListNode: the middle node of the linked list 

  // function listLength(): takes in the head pointer -> returns the int length of the linked list

  // 1 2 3 4 5 6 LENGTH = 6 return 4    LENGTH/2 = 3     1 2 3 4 LENGTH/2 = 2         EVEN LISTS
  // 1 2 3 4 5 6 7 LENGTH = 7 return 4  FLOOR(LENGTH/2) = 3.5  1 2 3 4 5  LENGTH = 5   FLOOR(5/2) = 2

  static ListNode *findMiddle(ListNode *head) {
    int length = listLength(head); // Get the length of the list
    int stopPoint = length%2==0 ? length/2 : floor(length/2); // Computes the middle of the list based on if length is even or odd

    int i = 0; // Current index location
    ListNode *curr = head; // Point to current head so that we can iterate the linked list

    while (i < stopPoint) { // While we haven't approached the middle
      curr = curr->next;
      i++;
    }
    return curr; // Return the middle position of the linked list
  }

  static int listLength(ListNode* head){
    ListNode* curr = head;
    int count = 0;
    // 1 ,2 3 4 5
    while(curr->next != NULL){
      curr = curr->next;
      count++;
    }
    return count;
  }
};

int main(int argc, char *argv[]) {
  ListNode *head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);
  cout << "Middle Node: " << MiddleOfLinkedList::findMiddle(head)->value << endl; // 1 2 3 4 5 --> 3

  head->next->next->next->next->next = new ListNode(6);
  cout << "Middle Node: " << MiddleOfLinkedList::findMiddle(head)->value << endl;// 1 2 3 4 5 6 --> 4

  head->next->next->next->next->next->next = new ListNode(7);
  cout << "Middle Node: " << MiddleOfLinkedList::findMiddle(head)->value << endl; // 1 2 3 4 5 6 7 --> 4
}



// Solution
// -----
// class MiddleOfLinkedList {
//  public:
//   static ListNode *findMiddle(ListNode *head) {
//     ListNode *slow = head;
//     ListNode *fast = head;
//     while (fast != nullptr && fast->next != nullptr) {
//       slow = slow->next;
//       fast = fast->next->next;
//     }

//     return slow;
//   }
// };

// -----
// Time complexity #
// The above algorithm will have a time complexity of O(N) where ‘N’ is the number of nodes in the LinkedList.

// Space complexity #
// The algorithm runs in constant space O(1).
