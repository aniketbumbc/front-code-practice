class Heap {
  constructor() {
    //this.heap = [5, 10, 20, 30];
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  insertHeap(val) {
    this.heap.push(val);
    const lastIndex = this.heap.length - 1;
    this.heapify(lastIndex);
  }

  heapify(index) {
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    // check if heap is not empty otherwise return null
    if (!this.heap.length) return null;

    let lastIndex = this.heap.length - 1;

    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

    this.heap.pop(); // removed last element

    this.heapifyDown(0);

    return this.heap[0];
  }

  heapifyDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    let n = this.heap.length;

    let smallest = index;

    if (leftIndex < n && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    if (rightIndex < n && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.heapifyDown(smallest);
    }
  }
}

let heapMin = new Heap();
//console.log("initial", heapMin.heap);

heapMin.insertHeap(5);
heapMin.insertHeap(20);
heapMin.insertHeap(4);
heapMin.insertHeap(10);
heapMin.insertHeap(1);
heapMin.insertHeap(0);
console.log(heapMin.extract());
console.log(heapMin.extract());

//heapMin.insertHeap(0);
console.log('end', heapMin);

// Heap Sort

const arrData = [7, 4, 2, 5, 1, 3, 10];

const heapSort = (arr) => {
  const n = arr.length;

  // maxHeap of array

  // Need run loop for n/2 because do not need leaf node whie MaxHeap
  //correctly skips leaf nodes (they have no children to compare). ✅

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // sort the array by reverse and hepify it
  /**
   * Swaps the root (max element) to the end ✅
   * Passes i as heap size, effectively shrinking the heap each iteration ✅
   */

  for (let i = n - 1; i > 0; i--) {
    // swap first with last
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i); // i need to pass heapsize reduce by n-1 each element
  }

  return arr;
};

const heapifyDown = (arr, i, n) => {
  let largest = i;

  const leftIndex = 2 * i + 1;
  const rightIndex = 2 * i + 2;

  if (leftIndex < n && arr[leftIndex] > arr[largest]) {
    largest = leftIndex;
  }

  if (rightIndex < n && arr[rightIndex] > arr[largest]) {
    largest = rightIndex;
  }

  if (largest !== i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    heapifyDown(arr, largest, n);
  }
};

console.log('ansL--- ', heapSort(arrData));
/**
 * Loop runs n - 1 times → O(n)
Each heapifyDown on a heap of size i → O(log n)
Total: O(n log n) ✅

kth-largest-element-in-an-array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);

    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.front();
};

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;

  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }

  return null;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue();

  for (const ele of stones) {
    pq.enqueue(ele);
  }

  while (pq.size() > 1) {
    let y = pq.dequeue();
    let x = pq.dequeue();

    if (y - x > 0) {
      pq.enqueue(y - x);
    }
  }

  return pq.dequeue() || 0;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const tempObj = {};

  for (const ele of nums) {
    tempObj[ele] ? (tempObj[ele] += 1) : (tempObj[ele] = 1);
  }
  let pq = new MinPriorityQueue((x) => x.freq);
  for (key in tempObj) {
    pq.push({ val: key, freq: tempObj[key] });
    if (pq.size() > k) {
      pq.pop();
    }
  }

  return pq.toArray().map((ele) => Number(ele.val));
};
