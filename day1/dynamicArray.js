class DynamicArray {
    constructor() {
        this.capacity = 2;
        this.length = 0;
        this.data = new Array(this.capacity);
    }
    push(value) {
        if (this.length === this.capacity) {
            this._resize();
        }
        this.data[this.length] = value;
        this.length++;
    }
    _resize() {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];

        }
        this.data = newData;
    }
    get(index) {
        if (index < 0 || index > this.length) {
            throw new Error("index out of bounds");
        }
        return this.data[index];

    }
}
const arr = new DynamicArray();
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr.get(2));