class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // Depth-First Search (DFS) - Recursive
    dfs(start, visited = new Set()) {
        if (!this.adjacencyList[start]) return;
        visited.add(start);
        console.log(start);
        for (let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        const visited = new Set();
        const queue = [start];

        while (queue.length) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex);
                for (let neighbor of this.adjacencyList[vertex]) {
                    queue.push(neighbor);
                }
            }
        }
    }
}

// ✅ Test
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

console.log("🔍 DFS from A:");
g.dfs("A");

console.log("\n🔁 BFS from A:");
g.bfs("A");
