class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    removeFromHead() {
        if (!this.head) return "List is empty";
        const removed = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
        this.length--;
        return removed.value;
    }

    printForward() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log("Forward:", values);
    }

    printBackward() {
        let current = this.tail;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.prev;
        }
        console.log("Backward:", values);
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const list = new DoublyLinkedList();
list.append("Karam");
list.append(" Hadeel");
list.append("Omar");

list.printForward();
list.printBackward();
console.log("Removed:", list.removeFromHead());
list.printForward(); 
