/*
Stack follows the LIFO (LAST IN FIRST OUT) 
invariance:
- top: starts at index -1 and always points to the last element of the list
- count: always points to the next available/empty position in the stack array
*/
class StackArray {
  constructor(capacity) {
    if (capacity <= 0) throw "capacity have to be positive";
    this.stack = new Array(capacity).fill(null);
    this.count = 0;
    this.top = -1;
  }
  size() {
    return this.count;
  }
  isFull() {
    return this.size() >= this.stack.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  reset() {
    this.count = 0;
    this.top = -1;
  }

  push(item) {
    let hasSpace = !this.isFull();
    if (hasSpace) {
      this.top += 1;
      this.stack[this.top] = item;
      this.count += 1;
    }
    return hasSpace;
  }

  pop() {
    if (this.isEmpty()) throw "stack is empty";
    let item = this.stack[this.top];
    this.stack[this.top] = null;
    this.top -= 1;
    this.count -= 1;
    return item;
  }
}

let stackInstance = new StackArray(3);
stackInstance.push(4);
stackInstance.push(7);
stackInstance.push(1);
stackInstance.pop();
console.log(stackInstance.stack);
