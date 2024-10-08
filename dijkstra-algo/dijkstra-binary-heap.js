class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
};

class PriorityQueue {
    constructor() {
        this.values = []
    };

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        if (this.values.length === 1) return this.values;
        this.bubbleUp();
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    findShortestPath (start, dest) {

        let distanceObj = {};
        let queue = new PriorityQueue();
        let previous = {};
        let popItem;
        let popVertex;
        let path = [];
        const vertices = Object.keys(this.adjacencyList);

        vertices.forEach(vertex => {
            if(vertex !== start) distanceObj[vertex] = Infinity
            else distanceObj[vertex] = 0;
            queue.enqueue(vertex, distanceObj[vertex]);
            previous[vertex] = null;
        });

        while (queue.values.length > 0) {
            popItem = queue.dequeue();
            popVertex = popItem['value'];

            if(popVertex === dest) {

                while(previous[popVertex]) {
                    path.push(popVertex);
                    popVertex = previous[popVertex];
                }
                break;
            };

            if(popVertex ||  distanceObj[popVertex] !== Infinity) {            
                this.adjacencyList[popVertex].forEach(adjVertex => {

                let distance = adjVertex['weight'] + distanceObj[popVertex];

                if(distance < distanceObj[adjVertex['node']]) {
                    distanceObj[adjVertex['node']] = distance;
                    previous[adjVertex['node']] = popVertex;
                    queue.enqueue(adjVertex['node'], distance)
                }
            })}
        }
        return path.concat(popVertex).reverse();
        
        }
}

let g = new WeightedGraph();
g.addVertex("Haven");
g.addVertex("Necro");
g.addVertex("Academy");
g.addVertex("Dungeon");
g.addVertex("Fortress");
g.addVertex("Haven");
g.addVertex("Orc");

g.addEdge("Academy", "Necro", 2);
g.addEdge("Academy", "Orc", 4);
g.addEdge("Necro", "Dungeon", 2);
g.addEdge("Necro", "Fortress", 4);
g.addEdge("Dungeon", "Fortress", 1);
g.addEdge("Dungeon", "Haven", 3);
g.addEdge("Fortress", "Haven", 1);
g.addEdge("Orc", "Haven", 3);

console.log(g.findShortestPath('Necro', 'Orc'));