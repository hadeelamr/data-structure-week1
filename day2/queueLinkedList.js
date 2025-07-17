class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;

    }
    dequeue() {
        if (!this.front) return "queue is empty"
        const removed = this.front;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.length--;
        return removed.value;
    }
    peek() {
        return this.front ? this.front.value : "queue is empty";
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    print() {
        let current = this.front;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values);
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
console.log(queue.peek());

