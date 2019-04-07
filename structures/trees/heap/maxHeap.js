// implemented with an array beacuse access to indecies is required
// every parent is larger than both his children but sbilings don't have a hierarchy
// left child is at 2n+1 and right at 2n+2
// each parrent is at (n-1)/2
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    // to insert we first push the value to the array and than bubble the value to its place if should be a parrent
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    // checks if the parrent of the last element is greater than the element and if not -> swaps them -> therefore called bubble up
    // Ologn
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    // removes the root element, swaps it with the last element in the array and sinks it down
    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }
    // starting from root and checks if children are larger - if true the function swaps between the two and goes deeper to the children again
    //Ologn
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
    // we can to implement search which is On but it would be better to use BST instead of heap for searching
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



