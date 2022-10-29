class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



//Alternate Solution 

class BinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        let position = this.heap.push(value) - 1;
        let parent = Math.floor((position - 1) / 2);
 
        while (value > this.heap[parent]) {
            this.swap(parent, position);
 
            position = parent;
            parent = Math.floor((position - 1) / 2);
        }
        return this.heap;
    }
    extractMax() {
        if (!this.heap.length) return;
 
        this.swap(0, this.heap.length - 1);
        const oldNode = this.heap.pop();
 
        //trikle down
        let parent = 0, childLeft = 1, childRight = 2;
        //Math.max returns NaN is one of the arguments is undefined
        let max = Math.max(this.heap[childLeft], this.heap[childRight] || -Infinity);
 
        while (this.heap[parent] < max) {
 
            let child = this.heap[childLeft] === max ? childLeft : childRight;
            this.swap(parent, child);
            parent = child;
 
            childLeft = parent * 2 + 1;
            childRight = parent * 2 + 2; 
            max = Math.max(this.heap[childLeft], this.heap[childRight] || -Infinity);
        }
        return oldNode;
    }
    swap(inx1, inx2) {
        [this.heap[inx1], this.heap[inx2]] = [this.heap[inx2], this.heap[inx1]];
    }
}
const heap = new BinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(44);
heap.insert(40);
heap.insert(9);
heap.insert(10);
heap.insert(45);


//Alternate Solution Again 

extractMax() {
        let n = 0;
        let temp = this.values[n];
        this.values[n] = this.values[this.values.length-1];
        this.values[this.values.length-1] = temp;
 
        let maxElem = this.values.pop();
        let swap;
 
        while(this.values[(2*n)+1] > this.values[n] || this.values[(2*n)+2] > this.values[n]) {
            if (this.values[(2*n)+1] > this.values[n] && this.values[(2*n)+2] > this.values[n]) {
                    if (this.values[(2*n)+1] > this.values[(2*n)+2]) swap = (2*n)+1;
                    else swap = (2*n)+2;
                }
            else if (this.values[(2*n)+1] > this.values[n]) swap = (2*n)+1;
            else swap = (2*n)+2;
 
            let temp = this.values[n];
            this.values[n] = this.values[swap];
            this.values[swap] = temp;
            n = swap;
        }
        return maxElem;
    }


