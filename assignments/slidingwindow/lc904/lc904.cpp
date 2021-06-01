using namespace std;

#include <iostream>
#include <unordered_map>
#include <vector>

class MaxFruitCountOf2Types {
 public:
  static int findLength(const vector<char>& arr) {
    int maxLength = 0;
    // TODO: Write your code here
    return maxLength;
  }
};

int main(int argc, char* argv[]) {
  cout << "Maximum number of fruits: "
       << MaxFruitCountOf2Types::findLength(vector<char>{'A', 'B', 'C', 'A', 'C'}) << endl;
  cout << "Maximum number of fruits: "
       << MaxFruitCountOf2Types::findLength(vector<char>{'A', 'B', 'C', 'B', 'B', 'C'}) << endl;
}








// Solution
// -----
//     int windowStart = 0, maxLength = 0;
//     unordered_map<char, int> fruitFrequencyMap;
//     // try to extend the range [windowStart, windowEnd]
//     for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++) {
//       fruitFrequencyMap[arr[windowEnd]]++;
//       // shrink the sliding window, until we are left with '2' fruits in the frequency map
//       while ((int)fruitFrequencyMap.size() > 2) {
//         fruitFrequencyMap[arr[windowStart]]--;
//         if (fruitFrequencyMap[arr[windowStart]] == 0) {
//           fruitFrequencyMap.erase(arr[windowStart]);
//         }
//         windowStart++;  // shrink the window
//       }
//       maxLength = max(maxLength, windowEnd - windowStart + 1);
//     }
