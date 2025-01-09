// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //create a new node
    const node = new NewNode(value); // modularizing our code.
    //point the previous tail to the currrent node
    this.tail.next = node;
    //update the tail
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(value) {
    const node = new NewNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  // printList() {
  //   const array = [];
  //   let currrentNode = this.head;
  //   while (currrentNode != null) {
  //     array.push(currrentNode.value);
  //     currrentNode = currrentNode.next;
  //   }
  //   console.log(array);
  //   return array;
  // }
  printList() {
    console.dir(this.head, { depth: null });
    return this.head;
  }
  
  insert1(index, value) {
    //check params if it surpasses our current length count then just append
    if (index >= this.length) return this.append(value);

    let indexCount = 0;
    let currrentNode = this.head;
    let prevNode;
    while (currrentNode != null) {
      if (indexCount + 1 == index) {
        prevNode = currrentNode;
      }
      if (indexCount == index) {
        const node = new NewNode(value);
        node.next = currrentNode;
        prevNode.next = node;
      }
      indexCount++;
      currrentNode = currrentNode.next;
    }
  }

  traverseNodesForindex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert2(index, value) {
    //check params if it surpasses our current length count then just append to the end
    if (index >= this.length) return this.append(value);

    let node = new NewNode(value);
    let leader = this.traverseNodesForindex(index - 1); //get the leading index
    let holdingPointer = leader.next;

    leader.next = node;
    node.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    let leader = this.traverseNodesForindex(index - 1);
    leader.next = leader.next.next;
    this.length--;
  }

  reverseList() {
    //change the current head to the tail
    this.tail = this.head;
    // this.head.next = null
    let currentNode = this.head.next; //start the iteration from this place
    let previousNode = this.head;
    this.head.next = null;
    while (currentNode !== null) {
      if (currentNode.next === null) {
        this.head = currentNode; //make the previous tail the head
      }
      let nextNode = currentNode.next; //store the next node so when then .next of the current node is altered it doesn't really affect the iteration
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.append(5);
myLinkedList.printList();
myLinkedList.append(25);
myLinkedList.printList();

myLinkedList.prepend(29);
myLinkedList.printList();

myLinkedList.insert1(2, 20);
myLinkedList.insert2(2, 97);
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverseList();
myLinkedList.printList();
