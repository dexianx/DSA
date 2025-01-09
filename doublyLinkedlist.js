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
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //create a new node
    const node = new NewNode(value); // modularizing our code.

    //point our previous to our tail
    node.prev = this.tail;

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

    //assign the prev of the head to be changed to the new head
    this.head.prev = node;

    this.head = node;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currrentNode = this.head;
    while (currrentNode != null) {
      array.push(currrentNode.value);
      currrentNode = currrentNode.next;
    }
    console.log(array);
    return array;
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
    let leader = this.traverseNodesForindex(index - 1); //get the leading index (index before the actual index)
    let holdingPointer = leader.next;

    leader.next = node;
    node.prev = leader
    node.next = holdingPointer;
    node.next.prev = node
    this.length++;
    return this.printList();
  }

  remove(index) {
    let leader = this.traverseNodesForindex(index - 1);
    leader.next = leader.next.next;
    leader.next.prev = leader
    this.length--;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.append(28);
myDoublyLinkedList.append(30);
myDoublyLinkedList.append(31);
myDoublyLinkedList.append(30);
myDoublyLinkedList.append(10);

myDoublyLinkedList.prepend(27);
myDoublyLinkedList.printList();

myDoublyLinkedList.prepend(88);
myDoublyLinkedList.printList();

myDoublyLinkedList.prepend(99);
myDoublyLinkedList.printList();

myDoublyLinkedList.prepend(21);

myDoublyLinkedList.printList();

myDoublyLinkedList.insert2(3, 810)

myDoublyLinkedList.remove(3, 810)

myDoublyLinkedList.printList();
