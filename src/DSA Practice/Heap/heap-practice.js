class Heap {
  constructor() {
    this.heap = [5, 10, 20, 30];
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
}

let heapMin = new Heap();
console.log('initial', heapMin.heap);

heapMin.insertHeap(1);
console.log(heapMin.heap);
//heapMin.insertHeap(0);
//console.log("end", heapMin.heap);
