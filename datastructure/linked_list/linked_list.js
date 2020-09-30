class Node {
  constructor(value = undefined, next = undefined) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head === undefined ? null : head;
    this.count = head === undefined ? 0 : 1;
  }

  /**
   * this method returns the node at index-1
   * @param {index of item} index
   */
  getNode(index) {
    if (index < 0 || index > this.count) {
      throw "Index out of bounds";
    }
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      node = node.next;
    }
    return node;
  }

  add(item) {
    let cur = this.head;
    let node = new Node(item);
    if (this.head == null) {
      this.head = node;
      this.count++;
    } else {
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
      this.count++;
    }
    return true;
  }

  insert(index, item) {
    if (index < 0 || index > this.count) {
      throw "Index out of bounds";
    }
    let node = new Node(item);
    if (index == 0) {
      let cur = this.head;
      node.next = cur;
      this.head = node;
    } else {
      let cur = this.getNode(index);
      node.next = cur.next;
      cur.next = node;
    }
    this.count++;
  }

  /**
   * this method removes the first occurence of an item in the linked list
   * @param {item to be removed} item
   */
  removeItem(item) {
    let cur = this.head;
    while (cur.next !== null && cur.next.value != item) {
      cur = cur.next;
    }
    if (cur.next === null) {
      return "Item not in list";
    }
    let removedItem = cur.next.value;
    cur.next = cur.next.next;
    this.count--;
    return removedItem;
  }

  /**
   * this method removes an item at index in the linked list
   * @param {index of item to be removed} index
   */
  removeAtIndex(index) {
    if (index < 0 || index >= this.count) {
      throw "Index out of bounds";
    }
    let cur = this.getNode(index);
    let item = cur.next;
    if (cur.next.next === null) {
      cur.next = null;
    } else {
      cur.next = cur.next.next;
    }
    this.count -= 1;
    return item;
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

let headNode = new Node(1);
let linkedList = new LinkedList(headNode);
linkedList.add(2);
linkedList.insert(linkedList.count, 3);
linkedList.insert(0, 4);
linkedList.insert(1, 5);
linkedList.insert(3, 9);
linkedList.printList();
console.log(linkedList.count);
linkedList.removeAtIndex(5);
linkedList.printList();
console.log(linkedList.count);
linkedList.removeAtIndex(5);
// linkedList.removeAtIndex(5);
// console.log(linkedList.removeItem(2));
// linkedList.printList();
// console.log(linkedList.count);
