class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2) {
        // Option 1
        // let v2Index = this.adjacencyList[v1].indexOf(v2);
        // if (v2Index !== -1) this.adjacencyList[v1].splice(v2Index,1);

        // let v1Index = this.adjacencyList[v2].indexOf(v1);
        // if (v1Index !== -1) this.adjacencyList[v2].splice(v1Index,1);

        // Option 2
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
    }

    removeVertex(vertex) {
        for (let adjVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjVertex)
        }

        delete this.adjacencyList[vertex]
    }

    DFSRecursive(startNode) {
        let result = [];
        let visited = {};
        
        const traverse = function(graph, vertex) {
            if (!vertex) return null;

            result.push(vertex);
            visited[vertex] = true;

            graph.adjacencyList[vertex].forEach(adjVertex => {
                if (!visited[adjVertex]) return traverse(graph, adjVertex)
            })
        }
        traverse(this, startNode);
        return result
    }

    DFSIterative(vertex) {
        let result = [];
        let stack = [vertex];
        let visited = {};
        let popVertex;
        
        while (stack.length > 0) {
            popVertex = stack.pop();
            if (!visited[popVertex])
            {result.push(popVertex);
            visited[popVertex] = true;

            for (let i = 0; i < this.adjacencyList[popVertex].length; i++) {
                let adjVertex = this.adjacencyList[popVertex][i];
                if(!visited[adjVertex]) stack.push(adjVertex)
                }
            }
        }

        return result
    }

    BFS(vertex) {
        let queue = [vertex];
        let result = [];
        let visited = {};
        let popVertex;

        while(queue.length > 0) {
            popVertex = queue.pop();
            if (!visited[popVertex]) {
                result.push(popVertex);
                visited[popVertex] = true;
            }

            this.adjacencyList[popVertex].forEach(adjVertex => {
                if(!visited[adjVertex]) queue.unshift(adjVertex)
            })
        }
        return result
    }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.BFS('A'));