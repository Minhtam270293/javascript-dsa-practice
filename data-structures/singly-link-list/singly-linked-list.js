// Piece of data - val
// Reference to next node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    };

    push(val){
        let newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.length++;
        return this;
    };

    // traverse(){
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    pop(){
        let popItem = this.tail;
        
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.length--;
            this.head = null;
            this.tail = null;
            return popItem.val;
        } else {
            
            let previous = this.head;

            while (previous.next.next) {
                previous = previous.next
            };

            previous.next = null;
            this.tail = previous;
            this.length--;
            return popItem.val;
        }
    };

    shift() {
        
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        };
        return oldHead
    };

    unshift(val){
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        };
        this.length++;
        return this;
    }

    get(pos) {
        if (pos < 0 || pos >= this.length || typeof pos !== 'number') return null;
        if (pos === this.length - 1) return this.tail;
        let current = this.head;
        let i = 0;
        while (i < pos) {
                current = current.next;
                i++;
            };
        return current;
        }
    };

    set(index,value) {
        if (this.get(index) === null) return false;
        else {
            this.get(index).val = value;
            return true;
        }
    };

    insert(index,value) {

        if (index < 0 || index > this.length) return false;
        else {
            
            if (index === 0) {
                this.unshift(value);
            } else if (index === this.length) {
                this.push(value);
            } else {
                let newNode = new Node(value);
                let currentNode = this.get(index);
                this.get(index-1).next = newNode;
                newNode.next = currentNode;
                this.length++;
            };
            
            return true
        }
    };

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        else {
            if (index === this.length - 1) return this.pop();
            else if (index === 0) return this.shift();
            else {
                let previous = this.get(index-1);
                let current = this.get(index);
                previous.next = current.next;
                this.length--;
                return current
            }
        }
    };

    reverse() {
        if (!this.head || this.length === 1) return this;

        let preNode = null
        let currentNode = this.head;
        this.tail = currentNode;
        
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = preNode;
           
            preNode = currentNode;
            currentNode = nextNode;
        };
        this.head = preNode;
        return this;
    }
    
};

myList = new SinglyLinkList;
myList.push(25);
myList.push(50);

myList.reverse();