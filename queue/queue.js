class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    enqueue(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        };
        return ++this.size;
    };

    dequeue(){
        if (this.size === 0) return null;
        let popItem = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = popItem.next;
            popItem.next = null;
        };
        this.size--;
        return popItem.val;
    }
};

let q = new Queue();
q.push('first');
q.push('second');
q.push('third');
q.push('forth');

q.pop();

