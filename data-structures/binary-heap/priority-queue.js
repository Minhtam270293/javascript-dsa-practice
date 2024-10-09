class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
};

class priorityQueue {
    constructor() {
        this.values = []
    };

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        if (this.values.length === 1) return this.values;
        this.bubbleUp();
        return this.values;
    };

    bubbleUp() {
        let currentIndex = this.values.length - 1; 
        const newEle = this.values[currentIndex];
       
        while(currentIndex > 0) {
            
            let parentIndex = Math.floor((currentIndex - 1)/2);
            let parentNode = this.values[parentIndex];
            
            if (newEle.priority < parentNode.priority) 
            [this.values[currentIndex], this.values[parentIndex]] = 
            [this.values[parentIndex], this.values[currentIndex]]
            else break;
        
            currentIndex = parentIndex;

        }
    };
    
    dequeue () {
        if (this.values.length === 0) return undefined;

        const rootNode = this.values[0];
        const endNode = this.values.pop();
        
        if (this.values.length === 0) return rootNode;
        this.values[0] = endNode;

        this.sinkDown();
        return rootNode;
    };

    sinkDown() {
        let currentIndex = 0;
        const length = this.values.length;
        const elePriority = this.values[0].priority;
        
            while (true) {
           
            let leftIndex = currentIndex*2 + 1;
            let rightIndex = currentIndex*2 + 2;
            let leftChildPriority, rightChildPriority;
            let swapIndex = null; 

            if (leftIndex < length) {
                leftChildPriority = this.values[leftIndex].priority;
                if (elePriority > leftChildPriority) {
                    swapIndex = leftIndex;
                }
            };

            if (rightIndex < length) {
                rightChildPriority = this.values[rightIndex].priority;

                if((swapIndex !== null && rightChildPriority < leftChildPriority) ||
                   (swapIndex === null && rightChildPriority < elePriority))
                    swapIndex = rightIndex;
            };

            if(swapIndex === null) break;
            [this.values[currentIndex], this.values[swapIndex]] = 
            [this.values[swapIndex], this.values[currentIndex]];
            currentIndex = swapIndex;
        };
    }
};

let myList = new priorityQueue();

myList.enqueue('phu - kstd', 4);
myList.enqueue('minh - audit', 1);
myList.enqueue('ngoc - dod', 5);
myList.enqueue('luan - sai lech', 6);
myList.enqueue('long - xxcl', 7);
myList.enqueue('ce - xxuong', 8);

myList.dequeue();
myList.dequeue();
myList.dequeue();
myList.dequeue();

