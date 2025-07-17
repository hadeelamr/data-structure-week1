class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return "queue is empty";
        return this.items.shift();
    }
    front() {
        if (this.isEmpty()) return "queue is empty"
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items);

    }
}
const queue = new Queue();
queue.enqueue("Karam");
queue.enqueue("Omar");
queue.enqueue("Hadeel");
queue.enqueue("Zaina");
queue.print();
queue.dequeue();
queue.print();
