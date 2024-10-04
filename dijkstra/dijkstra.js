class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

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

        // Create a distance object
        // Add all vertices and set to infinity, except for start, set 0
        // Create a priority queue:
        // Add vertex and distance to that
        // Create a previous object
        // Add all vertices and set to null
        let distanceObj = {};
        let queue = new PriorityQueue();
        let previous = {};
        const vertices = Object.keys(this.adjacencyList);

        vertices.forEach(vertex => {
            if(vertex !== start) distanceObj[vertex] = Infinity
            else distanceObj[vertex] = 0;
            queue.enqueue(vertex, distanceObj[vertex]);
            previous[vertex] = null;
        });

        while (Object.keys(queue).length > 0) {
            let popItem = queue.dequeue();
            let popVertex = popItem['val'];

            if(popVertex === dest) return distanceObj;

            this.adjacencyList[popVertex].forEach(adjVertex => {

                let distance = adjVertex['weight'] + distanceObj[popVertex];

                if(distance < distanceObj[adjVertex['node']]) {
                    distanceObj[adjVertex['node']] = distance;
                    previous[adjVertex['node']] = popVertex;
                    queue.enqueue(adjVertex['node'], distance)
                }

            })
        }

        
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


