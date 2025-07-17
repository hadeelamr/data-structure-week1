class StackArray {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        console.log(this.stack.join(" -> "));
    }
}

const stack = new StackArray();
stack.push(5);
stack.push(10);
stack.push(15);

stack.printStack(); 
console.log("Top:", stack.peek()); 

console.log("Popped:", stack.pop());
stack.printStack(); 
