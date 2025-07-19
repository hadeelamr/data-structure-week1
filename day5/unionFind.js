class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill(0).map((_, index) => index); 
        this.rank = Array(size).fill(0); 
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); 
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return; 

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX] += 1;
        }
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
console.log("Connected 0 and 2:", uf.connected(0, 2)); 
console.log("Connected 0 and 3:", uf.connected(0, 3)); 
