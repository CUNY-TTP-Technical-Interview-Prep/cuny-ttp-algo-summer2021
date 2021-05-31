# CUNY TTP: Technical Interview Prep (Summer 2021)

Class Days: Mon - Thur

Class Times: 9am to 12pm EST 

Dates: June 1st (Tue) to June 30th (Wed)    

Lead Instructor: Christopher Linares - <cbluiux@gmail.com>

TA: Melissa Pastore - <melissa.pastore@gmail.com>

TA: Kirstie Rodriguez - <KirstieNRodriguez@gmail.com>

Slack Workspace: <https://cunyttp.slack.com/archives/C01433YF022> 

Office Hours : Wednesdays, 12pm - 1pm EST

## Repo Structure

- This README contains your syllabus
- The `assignments` folder is where you find the assigned classwork & homework for each day. Assignments are broken down into 1 of 16 patterns, furthermore, you will find subfolders with the week and day designation (*for example w1d1 stands for "week 1 day 1")
  
## Assignments

For any assignment where we ask you to solve a problem(s), please submit
your work to github using the directions below under
'submitting HW'.

## Submitting HW

To get setup to submit homework, **fork this repository**.

Then do the following when you do homework:

- Pull from my repository to your fork. There will be files in the
  correct location for the work to do that day. If you are submitting
  homework *due on* 6/5 (not assigned 6/5), for example, which is the
  1st day of the 2nd week of the bootcamp, then you would find the
  file at `week2/day1/assignment-name`. In general, the path for a
  file is `week#/day#/assignment-name`. The same is true for
  submitting classwork we did on 6/5. You would look for the correct
  file under `week2/day1/assignment-name`.
- Do the work.
- When you are ready to start comitting work to your fork, place your
  work in the appropriate file, and change it. Unless I say otherwise,
  you can submit your solutions as Javascript of C++ files. If you
  need to change the file extension of the file, that is fine. Just
  don't change the base name of the file. Example: you can change
  `implement-hash-table.cpp` to `implement-hash-table.js` 
  but not to `hash-tbl.cpp`. 
- Commit your changes, push them to your fork, and then submit a pull
  request from your fork against my repository.

## What if the problem is too hard? Can't solve it in time?

1. Spend 15-30 minutes trying to solve the problem if you are not able to, write and submit a
program containing the following:

	As comments:

	- a description of the approach(es) you thought of
	- a description of where you got stuck on these approaches. For
  		example:
    	- Was there a flaw in the approach you found and you had to think
      of a new one? What was the flaw? How did you try to get around
      it?
    	- Were you just unable to implement the approach? Which part(s)
      were you unable to implement, and why?

2. If you get stuck reverse engineer the existing solution and take a few moments to digest it. (*a few moments may take longer for leetcode hard)

	As code:

	- Type out the the program in your language by referencing the solution provided (2-3 times, No copy/pasting)
	- Reference leetcode discussion and reverse engineer a solution which fits most with your style.
		example:
		- If you seldom use higher order functions, then do not attempt to reverse engineer solutions which focus on these
		- If you prefer a certain implementation of a data-structure over another, please cater to your strengths

3. Move on to the next problem.
	
	As a mindset:
	- Many will struggle with the common coding patterns for the first few times they encounter them, it is extremely important to learn how to move on with the intentions of revisiting said topic at a later date.
		example:
		- While we were young we would be assigned tasks like brushing our teeth, bathing, etc... Our parents would surely not allow us 			to "attempt" to brush our teeth for 90 minutes in pursuit of perfection at this stage in our lives, instead, they would likely step in and "take over" to ensure that we got it done. The emphasis was never on getting it perfect in one singular session, but, achieving muscle memory and improvement of motor skills through repition.

## Course Overview
We will categorize coding interview problems into a set of 16 patterns. Each pattern will be a complete tool - consisting of data structures, algorithms, and analysis techniques. These tools will enable you to solve a specific category of problems. The goal is to develop an understanding of the underlying pattern, so that, we can apply that pattern to solve other problems.

Each problem not only maps to the same pattern but also presents different constraints. Overall, the course has around 125+ problems of varying difficulties. The problems solved under these patterns use a varied set of algorithmic techniques.

We will start with a brief introduction of each pattern before jumping into the problems. Under each pattern, the first problem will explain the underlying pattern in detail to build the concepts that can be applied to later problems. The later problems will focus on the different constraints each problem presents and how our algorithm needs to change to handle them.

## Syllabus

### /// Week One ///

#### 06/01 (Tue):

- Intros, Icebreakers & "Hot Seat"
- Setup, Github & Expectations
- Technical Interviewing Intro & Discussion
- DSA Appendix Slides & Discussion
- Initial HackerRank Assesment
- Intro to "Sliding Window" Pattern: Lecture & Discussion
	- [] Maximum Sum Subarray of Size K (easy) LC #53

#### 06/02 (Wed):

- "Sliding Window" Continued: P2P Mock Interview ( Each Pair Choose One! )
  - [] Smallest Subarray with a given sum (easy): LC #209
  - [] Longest Substring with K Distinct Characters (medium): LC #340
  - [] Fruits into Baskets (medium): LC 904
- Intro to "Two Pointers" Pattern: Lecture & Discussion
  - [] Pair with Target Sum (easy): LC #1

#### 06/03 (Thur):

- "Two Pointers" Continued: P2P Mock Interview ( Each Pair Choose Two! )
  - [] Remove Duplicates (easy): LC #26
  - [] Squaring a Sorted Array (easy): LC #977
  - [] Triplet Sum to Zero (medium): LC #15
  - [] Triplet Sum Close to Target (medium): LC #16

### .
### /// Week Two ///

#### 06/07 (Mon):
- "Two Pointers" Continued: P2P Mock Interview ( Each Pair Choose One! )
  - [] Triplets with Smaller Sum (medium): LC #259
  - [] Subarrays with Product Less than a Target (medium): LC #713 
  - [] Dutch National Flag Problem (medium): LC #75
- Intro to "Fast & Slow Pointers" Pattern: Lecture & Discussion
  - [] LinkedList Cycle (easy): LC #141


#### 06/08 (Tues):
- "Fast & Slow Pointers" Continued: P2P Mock Interview ( Each Pair Choose One! )
  - [] Start of LinkedList Cycle (medium): LC #142 
  - [] Happy Number (medium): LC #202
  - [] Middle of the LinkedList (easy): LC #876 
- Intro to "Merge Intervals" Pattern: Lecture & Discussion
  - [] Merge Intervals (medium): LC #56

#### 06/09 (Wed):
- "Merge Intervals" Continued ( Each Pair Choose One! )
  - [] Insert Interval (medium): LC #57
  - [] Intervals Intersection (medium): LC #986 
  - [] Conflicting Appointments (medium): LC #252 
- Intro to "Cyclic Sort" Pattern: Lecture & Discussion
  - [] Cyclic Sort (easy)

#### 06/10 (Thur):
- "Cyclic Sort" Continued ( Each Pair Choose Two! )
  - [] Find the Missing Number (easy): LC #268 
  - [] Find all Missing Numbers (easy): LC #448 
  - [] Find the Duplicate Number (easy): LC #287 
  - [] Find all Duplicate Numbers (easy): LC #442 
- Intro to "In Place Reversal of a LL" Pattern: Lecture & Discussion
  - [] Reverse a LinkedList (easy): LC #206
  
### .
### /// Week Three ///

#### 06/14 (Mon):
- "In Place Reversal of a LL" Continued ( Each Pair Choose One! )
  - [] Reverse a LinkedList (easy): LC #206
  - [] Reverse a Sub-list (medium): LC #92
  - [] Reverse every K-element Sub-list (medium): LC #25 
- Intro to "Trees: BFS" Pattern & Discussion
  - [] Binary Tree Level Order Traversal (easy): LC #102


#### 06/15 (Tues):
- "Trees: BFS" Continued ( Each Pair Choose Two! )
  - [] Reverse Level Order Traversal (easy): LC #107
  - [] Zigzag Traversal (medium): LC #103
  - [] Level Averages in a Binary Tree (easy): LC #637 

#### 06/16 (Wed):
- "Trees: BFS" Continued ( Each Pair Choose One! )
  - [] Minimum Depth of a Binary Tree (easy): LC #111 & LC #104 
  - [] Level Order Successor (easy)
  - [] Connect Level Order Siblings (medium): LC #117
- Intro to "Trees: DFS" Pattern & Discussion
  - [] Binary Tree Path Sum (easy): LC #112

#### 06/17 (Thur):
- "Trees: DFS" Continued ( Each Pair Choose Two! )
  - [] All Paths for a Sum (medium): LC #113 & LC #257 
  - [] Sum of Path Numbers (medium): LC #129
  - [] Path With Given Sequence (medium): LC #1430
  - [] Count Paths for a Sum (medium): LC #437

### .
### /// Week Four ///

#### 06/21 (Mon):
- Intro to "Heaps" Pattern & Discussion
  - [] Find the Median of a Number Stream (medium): LC #295
- "Heaps" Continued ( *No Luck This Time, Only One Problem To Choose From! )
  - [] Sliding Window Median (hard): LC #480
- Intro to "Subsets" Pattern & Discussion
  - [] Subsets (easy): LC #78

#### 06/22 (Tues):
- "Subsets" Continued ( Each Pair Choose One! )
  - [] Subsets With Duplicates (easy): LC #90
  - [] Permutations (medium): LC #46
  - [] String Permutations by changing case (medium): LC #784
- Intro to "Modified Binary Search" Pattern & Discussion
  - [] Order-agnostic Binary Search (easy)

#### 06/23 (Wed):
- "Modified Binary Search" Continued ( Each Pair Choose One! )
  - [] Ceiling of a Number (medium)
  - [] Next Letter (medium): LC #744
  - [] Number Range (medium): LC #34
- Intro to "Bitwise XOR" Pattern & Discussion
  - [] Single Number (easy): LC #136

#### 06/24 (Thur):
- Intro to "Top K Elements" Pattern & Discussion
  - [] Top 'K' Numbers (easy)
- Intro to "K-way Merge" Pattern & Discussion
  - [] Merge K Sorted Lists (medium): LC #23
- Intro to "Knapsack (Dynamic Programming)" Pattern & Discussion
  - [] 0/1 Knapsack (medium)
- Intro to "Topological Sort (Graphs)" Pattern & Discussion
  - [] Topological Sort (medium)



### .
### /// Week Five & Beyond /// --> Class is over, but, the work is just beginning!

#### /// Sliding Window ///
- [] No-repeat Substring (hard): LC #3
- [] Longest Substring with Same Letters after Replacement (hard)
- [] Longest Subarray with Ones after Replacement (hard): LC #424 
- [] Find Permutation (hard): LC #567 & LC #1004 
- [] Find String Anagrams (hard): LC #438
- [] Smallest Window Containing Substring (hard): LC #76
- [] Words Concatenation (hard): LC #30

#### /// Two Pointers ///
- [] Quadruple Sum to Target (medium): LC #18 
- [] Comparing Strings containing Backspaces (medium): LC #844 
- [] Minimum Window Sort (medium): LC #581

#### /// Fast & Slow Pointers ///
- [] Palindrome LinkedList (medium): LC #234
- [] Rearrange a LinkedList (medium): LC #143
- [] Cycle in a Circular Array (hard): LC #457

#### /// Merge Intervals ///
- [] Minimum Meeting Rooms (hard): LC #253
- [] Maximum CPU Load (hard)
- [] Employee Free Time (hard): LC #759

#### /// Cyclic Sort ///
- [] Find the Corrupt Pair (easy): LC #645
- [] Find the Smallest Missing Positive Number (medium): LC #41
- [] Find the First K Missing Positive Numbers (hard)

#### /// In Place Reversal of a LL ///
- [] Reverse Alternating K-element Sub-list (medium)
- [] Rotate a LinkedList (medium): LC #61

#### /// Trees: BFS ///
- [] Connect All Level Order Siblings (medium)
- [] Right View of a Binary Tree (easy): LC #199

#### /// Trees: DFS ///
- [] Tree Diameter (medium): LC #543
- [] Path with Maximum Sum (hard): LC #124

#### /// Heaps ///
- [] Maximize Capital (hard): LC #502
- [] Next Interval (hard): LC #436

#### /// Subsets ///
- [] Balanced Parentheses (hard): LC #22
- [] Unique Generalized Abbreviations (hard): LC #320 
- [] Evaluate Expression (hard): LC #241
- [] Structurally Unique Binary Search Trees (hard): LC #95
- [] Count of Structurally Unique Binary Search Trees (hard): LC #96

#### /// Modified Binary Search ///
- [] Search in a Sorted Infinite Array (medium): LC #702 
- [] Minimum Difference Element (medium): LC #658 (k == 1) 
- [] Bitonic Array Maximum (easy)
- [] Search Bitonic Array (medium)
- [] Search in Rotated Array (medium): LC #33 & LC #81
- [] Rotation Count (medium): LC #153 & LC #154

#### /// Bitwise XOR /// --> Low Chances of
- [] Two Single Numbers (medium): LC #260 
- [] Complement of Base 10 Number (medium): LC #476 
- [] Problem Statement (hard): LC #832

#### /// Top "K" Elements ///
- [] Kth Smallest Number (easy): LC #215
- [] 'K' Closest Points to the Origin (easy): LC #973
- [] Connect Ropes (easy): LC #1167
- [] Top 'K' Frequent Numbers (medium): LC #347
- [] Frequency Sort (medium): LC #451
- [] Kth Largest Number in a Stream (medium): LC #703
- [] 'K' Closest Numbers (medium): LC #658
- [] Maximum Distinct Elements (medium)
- [] Sum of Elements (medium)
- [] Rearrange String (hard): LC #767
- [] Rearrange String K Distance Apart (hard): LC #358
- [] Scheduling Tasks (hard): LC #621
- [] Frequency Stack (hard): LC #895

#### /// K-Way Merge ///
- [] Kth Smallest Number in M Sorted Lists (Medium)
- [] Kth Smallest Number in a Sorted Matrix (Hard): LC #378
- [] Smallest Number Range (Hard): LC #632
- [] Problem K Pairs with Largest Sums (Hard): LC $373

#### /// Knapsack (Dynamic Programming) ///
- [] Equal Subset Sum Partition (medium): LC #416 
- [] Subset Sum (medium)
- [] Minimum Subset Sum Difference (hard) 
- [] Count of Subset Sum (hard)
- [] Target Sum (hard): LC #494

#### /// Topological Sort (Graphs) ///
- [] Tasks Scheduling (medium): LC #207
- [] Tasks Scheduling Order (medium): LC #210
- [] All Tasks Scheduling Orders (hard): LC #210 (output all possible solutions)
- [] Alien Dictionary (hard): LC #269
- [] Reconstructing a Sequence (hard): LC #444
- [] Minimum Height Trees (hard): LC #310





### Slides & Resources

### Homework

Homework1

1. p2p problems. **Due 1/2.** Remember to submit work 1/3, after p2p
   finishes.
    - `p2p-problem-1`
    - `p2p-problem-2`

Please create a gist containing your solutions or attempt at designing solutions. At the top of your code, make a comment with your name, your group, and the two problem names. This will be the system starting Wednesday night, with p2p 3. Slack Elise your code by 7pm the night before you act as interviewer, so I can be sure you worked on the problems yourself. 

Homework2

1. p2p problems. **Due 1/6.** Remember to submit work 1/7, after p2p
   finishes.
    - `p2p-problem-1`
    - `p2p-problem-2`
2. Read intro material on hash tables
   [here](https://leetcode.com/explore/learn/card/hash-table/) **Due
   1/6.** Read up until the problem "design a hash set", and do not do
   it.
3. Read the [lists review
   packet](https://drive.google.com/open?id=1Ro83seOpzj7Yz4gcWz84qxg3CGhiArT8uB_xB9onZO0), if you need a refresher on arrays, or linked lists. **Due 1/9.** 
4. Do [Kth largest element in an
   array](https://leetcode.com/problems/kth-largest-element-in-an-array/).
   **Due 1/9.** `kth-largest`.

Homework3

1. Read solutions for p2p 2 problems. **Due tk.**
2. Find an *easy* question on LC from the category for *strings* or
   *arrays*. Solve it, and write at least 3 edge cases to present to an
   interviewee and at least 2 hints to help an interviewee follow
   along with your solution to the problem. If you have trouble coming
   up with at least 3 edge cases and 2 hints by tonight, message me on
   slack with the link to your question, a summary of your algorithm,
   your edge cases, and your hints. We'll figure something out. **Due
   tk.**. Submit this in the same way we've asked you to [submit
   answers to p2p
   problems] Please create a gist containing your solutions or attempt at designing solutions. At the top of your code, make a comment with your name, your group, and the two problem names. This will be the system starting Wednesday night, with p2p 3. Slack Elise your code by 7pm the night before you act as interviewer, so I can be sure you worked on the problems yourself. 

Homework4  

1. p2p problems for p2p 3. **Due tk.** 
Please create a gist containing your solutions or attempt at designing solutions. At the top of your code, make a comment with your name, your group, and the two problem names. This will be the system starting Wednesday night, with p2p 3. Slack Elise your code by 7pm the night before you act as interviewer, so I can be sure you worked on the problems yourself. 
    - `p2p-problem-1`
    - `p2p-problem-2`

Homework5  

1. Implement dutch national flag partitioning for a linked list, this
   is on Hacker Rank. You will receive an invite. *Check your spam for
   the invite if you can't find it, and reach out to me or Elise!* **Due
   tk.**
2. Stacks+queues unit pre-reading <https://drive.google.com/open?id=1MN29NToPCiKZy2_Sg_A7xuR2_BbKaIv-zXEGEkzpc6g>. **Due tk **
3. Stacks+queues unit intro question, "Implement Max Stack". This is
   on Hacker Rank. **Due tk.**
4. Trees unit pre-reading. Review slides on trees, the representation as
   a data structure and **many important definitions** I will use in
   class.
   <https://docs.google.com/presentation/d/1ONw1IU8wVmXGKuK6yUfPti6f2q9603CYQyCrjT7QQMk/edit?usp=sharing>.
   **Due tk.**

Homework6 

1. Hacker Rank problem `braces`. You will recieve an invite. **Due
   tk.**
2. [Backspace string
   compare](https://leetcode.com/problems/backspace-string-compare/).
   **Due tk.** `backspace-string-compare`.

Homework7 

1. p2p problems for p2p 4. You must do these problems and read the
   answers in the same night. **Due tk.**

Homework8  

1. p2p problems for p2p 5. **Due tk.**
2. If you took a mock interview with a Bloomberg engineer today,
   *please fill out [this
   survey](https://docs.google.com/forms/d/e/1FAIpQLSfKCfYaRXMKL80BEdYPIN4ckdPGF7q3S0eOz9OGFsU0F3cjrw/viewform)*.
   If you haven't done so already. **Due tk.**

Homework9 

1. Read [Recursion pre-work packet](https://drive.google.com/open?id=137-FK-Y2DYqpTkSb5yHm8wHoVEPQ8bh2). **Due tk.**
2. Finish these problems from class. **Due tk.**
    - <https://leetcode.com/problems/binary-tree-level-order-traversal/>
    - <https://leetcode.com/problems/populating-next-right-pointers-in-each-node/>

Homework10  

1. p2p problems for p2p 6. **Due tk.**

Homework11

1. Read solutions to p2p problems for p2p 6. **Due tk.**
2. Spend 1 hour working on problems from either the Recursion Day 1
   Slides or Recursion Day 2 slides. They are linked in the classwork
   section under the dates 1/20 and 1/21. **Due tk.**

Homework12  

1. p2p problems for p2p 7. **Due tk.**
2. Find your own problem for p2p 7! You can pick any problem you want
   from LeetCode. Solve it, write at least 3 edge cases and 2 hints to
   present to an interviewee when they're trying to solve your
   problem.  If you have trouble coming
   up with at least 3 edge cases and 2 hints by tonight, message me on
   slack with all of the below items. We'll figure something out.
   **Due 1/23.** Submit this as a gist to Elise. You don't have to
   submit a pull request for this. Don't bite off more than you can
   chew! 
    - the link to your question
    - your program (if you have one)
    - a summary of your algorithm
    - your edge cases
    - and your hints.  
