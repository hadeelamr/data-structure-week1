class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const popped = this.top;
        this.top = this.top.next;
        this.size--;
        return popped.value;
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    printStack() {
        let current = this.top;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek());
stack.printStack(); 

console.log("Popped:", stack.pop()); 
stack.printStack();
