class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        const bucket = this.table[index];
        const found = bucket.find(item => item[0] === key);
        if (found) {
            found[1] = value;
        } else {
            bucket.push([key, value]);
        }
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) return v;
            }
        }
        return undefined;
    }

    display() {
        this.table.forEach((bucket, i) => {
            console.log(i, bucket);
        });
    }
}

const ht = new HashTable();
ht.set("apple", 100);
ht.set("banana", 200);
ht.set("apricot", 300);
ht.display();
console.log("Value for apple:", ht.get("apple"));
