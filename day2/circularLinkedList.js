class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head; 
    } else {
      this.tail.next = newNode;
      newNode.next = this.head; 
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    const values = [];
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    do {
      values.push(current.value);
      current = current.next;
    } while (current !== this.head); 

    console.log("Circular List:", values);
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const list = new CircularLinkedList();
list.append("Karam");
list.append("Hadeel ");
list.append("Omar");

list.print(); 
