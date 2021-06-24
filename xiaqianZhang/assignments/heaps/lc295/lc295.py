# Problem Statement #

# Design a class to calculate the median of a number stream. The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

      
class MedianOfAStream:
  def __init__(self):
    self.heapList = []
    self.currentSize = 0

  def insert_num(self, num):
    self.heapList.append(num)
    self.currentSize += 1
    currentIndex = self.currentSize - 1 #insert the number at the end of the array
    parentIndex = abs(currentIndex - 1) // 2
    # if the parent value are greater than the current value, we want to swap
    while currentIndex > 0 and self.heapList[parentIndex] > self.heapList[currentIndex]:
      self.heapList[parentIndex], self.heapList[currentIndex] = self.heapList[currentIndex], self.heapList[parentIndex]
      currentIndex = parentIndex
      parentIndex = abs(currentIndex - 1) // 2
    
    return -1

  def find_median(self):
    if self.heapList is []:
      return None

    #start of by getting the median index
    med = self.currentSize // 2
    med1 = self.currentSize // 2 - 1
    if self.currentSize % 2 == 0:
      return (self.heapList[med] + self.heapList[med1]) / 2
    else:
      return self.heapList[med]

  # Attempt 1
  # def __init__(self):
  #     self.heapList = []
  #     self.currentSize = 0

  # def insert_num(self, num):
  #  self.heapList.append(num)
  #  self.currentSize += 1
  #  currentNode = (self.currentSize -1) #currentIndex
  #  parentNode = abs(currentNode-1) // 2 #parentIndex
  #  while currentNode > 0 and self.heapList[parentNode] > self.heapList[currentNode]: #larger value to the end of the array
  #    self.heapList[parentNode], self.heapList[currentNode] = self.heapList[currentNode], self.heapList[parentNode]
  #    currentNode = parentNode #now the currentNode is swap as the parentNode's value
  #    parentNode = (currentNode - 1) // 2 #update the parentNode as the currentNode's parent (like original parent's parent)

  #  return -1

  # def find_median(self):
  #   if self.heapList is []:
  #     return None
    
  #   med = self.currentSize // 2 # since we are looking for the index, we want int, so use //
  #   med1 = self.currentSize // 2 - 1
  #   if self.currentSize % 2 == 0:
  #     return (self.heapList[med] + self.heapList[med1]) / 2 # since here we are looking for med, we could have float /
  #   else:
  #     return self.heapList[med]


def main():
  medianOfAStream = MedianOfAStream()
  # []
  medianOfAStream.insert_num(3)
  # [3]
  medianOfAStream.insert_num(1)
  # [1, 3]
  print("The median is: " + str(medianOfAStream.find_median()))
  # 2
  medianOfAStream.insert_num(5)
  print("The median is: " + str(medianOfAStream.find_median()))
  medianOfAStream.insert_num(4)
  # index 4 -1 // 2, so the parent is 5, swap becomes [1, 3, 4, 5]
  print("The median is: " + str(medianOfAStream.find_median()))


main()
