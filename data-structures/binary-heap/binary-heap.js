class maxBinaryHeap {
    constructor() {
        this.values = []
    };

    insert(element) {
        this.values.push(element);
        if (this.values.length === 1) return this.values;
        
        this.bubbleUp();
        return this.values;
    };

    bubbleUp() {
        let currentIndex = this.values.length - 1; 
       
        while(currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1)/2);
            
            if (this.values[currentIndex] > this.values[parentIndex]) 
            [this.values[currentIndex], this.values[parentIndex]] = 
            [this.values[parentIndex], this.values[currentIndex]]
            else break;
        
            currentIndex = parentIndex;
        }
    };
    
    remove () {
        if (this.values.length === 0) return undefined;

        const root = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length === 0) return root;
        this.values[0] = end;

        this.sinkDown();
        return root;
    };

    sinkDown() {
        let currentIndex = 0;
        const length = this.values.length;
        const element = this.values[0];
        
            while (true) {
           
            let leftIndex = currentIndex*2 + 1;
            let rightIndex = currentIndex*2 + 2;
            let leftChild, rightChild;
            let swapIndex = null; 

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (element < leftChild) {
                    swapIndex = leftIndex;
                }
            };

            if (rightIndex < length) {
                rightChild = this.values[rightIndex];

                if((swapIndex !== null && rightChild > leftChild) ||
                   (swapIndex === null && rightChild > element))
                    swapIndex = rightIndex;
            };

            if(swapIndex === null) break;
            [this.values[currentIndex], this.values[swapIndex]] = 
            [this.values[swapIndex], this.values[currentIndex]];
            currentIndex = swapIndex;
        };
    }
};

let myHeap = new maxBinaryHeap();
myHeap.insert(100);
myHeap.insert(90);
myHeap.insert(70);
myHeap.insert(80);
myHeap.insert(500);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(200);
myHeap.insert(1);

console.log(myHeap.remove());
