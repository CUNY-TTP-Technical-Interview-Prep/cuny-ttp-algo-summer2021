# CUNY TTP: Technical Interview Prep (Summer 2021)

Class Days: Mon - Thur

Class Times: 9am to 12pm EST 

Dates: June 1st (Tue) to June 30th (Wed)    

Lead Instructor: Christopher Linares - <cbluiux@gmail.com>

TA: Melissa Pastore - <melissa.pastore@gmail.com>

TA: Kirstie Rodriguez - <KirstieNRodriguez@gmail.com>

Slack Workspace: <https://cunyttp.slack.com/archives/C01433YF022> 

Office Hours : Wednesdays, 12pm - 1pm EST

## Course Overview
We will categorize coding interview problems into a set of 16 patterns. Each pattern will be a complete tool - consisting of data structures, algorithms, and analysis techniques. These tools will enable you to solve a specific category of problems. The goal is to develop an understanding of the underlying pattern, so that, we can apply that pattern to solve other problems.

Each problem not only maps to the same pattern but also presents different constraints. Overall, the course has around 125+ problems of varying difficulties. The problems solved under these patterns use a varied set of algorithmic techniques.

We will start with a brief introduction of each pattern before jumping into the problems. Under each pattern, the first problem will explain the underlying pattern in detail to build the concepts that can be applied to later problems. The later problems will focus on the different constraints each problem presents and how our algorithm needs to change to handle them.
  
## Assignments

- For any assignment where we ask you to solve a problem(s) or conduct mock technical interviews in class, please work in a code editor of choice and submit your work to github periodically throughout the day with descriptive comments
- The `assignments` folder is where you find the assigned classwork & homework for each day. Assignments are broken down into 1 of 16 patterns, furthermore, you will find subfolders with the week and day designation (*for example w1d1 stands for "week 1 day 1")

## Submitting Work

1. To get setup to submit homework & classwork, **fork & clone this repository**.
2. Pull from the **cuny-ttp-algo-summer2021** repository into your fork often as files will be updated 2-3 times per week. 
3. When you are ready to start comitting work to your fork, create a new folder with your name in camelCase (*example: christopherLinares) and copy the "assignments" folder and "README" file into your new folder. You can submit your solutions as Javascript, C++ OR Python files. Please don't change the base name of the file.
4. Please double check to ensure that you did **NOT** "cut & paste" these files, but, instead made fresh copies into the folder with your name
5. Please always make sure that you are working in your folder and not a classmates
6. Please attempt to commit early and commit often
7. We will strive for creating at minimum one PR to the CUNY-TTP-Technical-Interview-Prep Org on Github per day
8. Be vigilent of feedback/comments/change requests/etc on GitHub. Github is just as important as checking slack or email threads...
  
## Homework

### Expectations

- You will complete all algos listed in the syllabus on a weekly basis. 
- We will review your comments/high level overview & code to identify strengths and weaknesses within your understanding of each pattern.
- You will NOT complete your homework all in one shot & will NOT save. Attempting to master Data-structures and Algorithms requires constant exposure to these questions and solutions. You will create a PR through GitHub each night solving at minimum one problem which you were not able to solve during class time.

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

## Syllabus

### /// Week One ///

#### 06/01 (Tue):

- Intros, Icebreakers & "Hot Seat"
- Setup, Github & Expectations
- Technical Interviewing Intro & Discussion
- DSA Appendix Slides & Discussion
- Initial HackerRank Assesment
- Intro to "Sliding Window" Pattern: Lecture & Discussion
	- [x] Maximum Sum Subarray of Size K (easy) LC #53

#### 06/02 (Wed):

- "Sliding Window" Continued: P2P Mock Interview ( Each Pair Choose One! )
  - [x] Smallest Subarray with a given sum (easy): LC #209
  - [] Longest Substring with K Distinct Characters (medium): LC #340
  - [] Fruits into Baskets (medium): LC 904
- Intro to "Two Pointers" Pattern: Lecture & Discussion
  - [x] Pair with Target Sum (easy): LC #1

#### 06/03 (Thur):

- "Two Pointers" Continued: P2P Mock Interview ( Each Pair Choose Two! )
  - [x] Remove Duplicates (easy): LC #26
  - [] Squaring a Sorted Array (easy): LC #977
  - [] Triplet Sum to Zero (medium): LC #15
  - [] Triplet Sum Close to Target (medium): LC #16

### .
### /// Week Two ///

#### 06/07 (Mon):
- "Two Pointers" Continued: P2P Mock Interview ( Each Pair Choose One! )
  - [] Triplets with Smaller Sum (medium): LC #259
  - [x] Subarrays with Product Less than a Target (medium): LC #713 
  - [] Dutch National Flag Problem (medium): LC #75
- Intro to "Fast & Slow Pointers" Pattern: Lecture & Discussion
  - [x] LinkedList Cycle (easy): LC #141


#### 06/08 (Tues):
- "Fast & Slow Pointers" Continued: P2P Mock Interview ( Each Pair Choose One! )
  - [] Start of LinkedList Cycle (medium): LC #142 
  - [x] Happy Number (medium): LC #202
  - [] Middle of the LinkedList (easy): LC #876 
- Intro to "Merge Intervals" Pattern: Lecture & Discussion
  - [x] Merge Intervals (medium): LC #56

#### 06/09 (Wed):
- "Merge Intervals" Continued ( Each Pair Choose One! )
  - [x] Insert Interval (medium): LC #57
  - [] Intervals Intersection (medium): LC #986 
  - [] Conflicting Appointments (medium): LC #252 
- Intro to "Cyclic Sort" Pattern: Lecture & Discussion
  - [x] Cyclic Sort (easy)

#### 06/10 (Thur):
- "Cyclic Sort" Continued ( Each Pair Choose Two! )
  - [x] Find the Missing Number (easy): LC #268 
  - [] Find all Missing Numbers (easy): LC #448 
  - [] Find the Duplicate Number (easy): LC #287 
  - [] Find all Duplicate Numbers (easy): LC #442 
- Intro to "In Place Reversal of a LL" Pattern: Lecture & Discussion
  - [x] Reverse a LinkedList (easy): LC #206
  
### .
### /// Week Three ///

#### 06/14 (Mon):
- "In Place Reversal of a LL" Continued ( Each Pair Choose One! )
  - [x] Reverse a LinkedList (easy): LC #206
  - [x] Reverse a Sub-list (medium): LC #92
  - [] Reverse every K-element Sub-list (medium): LC #25 
- Intro to "Trees: BFS" Pattern & Discussion
  - [x] Binary Tree Level Order Traversal (easy): LC #102


#### 06/15 (Tues):
- "Trees: BFS" Continued ( Each Pair Choose Two! )
  - [] Reverse Level Order Traversal (easy): LC #107
  - [] Zigzag Traversal (medium): LC #103
  - [x] Level Averages in a Binary Tree (easy): LC #637 

#### 06/16 (Wed):
- "Trees: BFS" Continued ( Each Pair Choose One! )
  - [x] Minimum Depth of a Binary Tree (easy): LC #111 & LC #104 
  - [] Level Order Successor (easy)
  - [] Connect Level Order Siblings (medium): LC #117
- Intro to "Trees: DFS" Pattern & Discussion
  - [x] Binary Tree Path Sum (easy): LC #112

#### 06/17 (Thur):
- "Trees: DFS" Continued ( Each Pair Choose Two! )
  - [x] All Paths for a Sum (medium): LC #113 & LC #257 
  - [] Sum of Path Numbers (medium): LC #129
  - [] Path With Given Sequence (medium): LC #1430
  - [] Count Paths for a Sum (medium): LC #437

### .
### /// Week Four ///

#### 06/21 (Mon):
- Intro to "Heaps" Pattern & Discussion
  - [x] Find the Median of a Number Stream (medium): LC #295
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
