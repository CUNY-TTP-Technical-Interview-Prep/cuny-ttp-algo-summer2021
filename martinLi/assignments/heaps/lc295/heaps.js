class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }
  peek() {
    return this.values[0] || null;
  }
  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;
    while (true) {
      let left = null;
      let right = null;
      let swap = null;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (this.comparator(left, this.values[index]) < 0) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (this.comparator(right, this.values[index]) < 0) {
          swap = rightIndex;
        }
      }
      if (swap === null) {
        break;
      }
      [
        this.values[index],
        (this.values[swap] = this.values[swap]),
        this.values[index],
      ];
      index = swap;
    }
  }
}
