/**
 * attributes: front, rear, count
 */
class QueueArray {
  constructor(size) {
    this.queue = new Array(capacity).fill(null);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  isFull() {
    return this.rear >= this.queue.length;
  }

  isEmpty() {
    return this.count == 0;
  }

  /**
   * Checks if queue is full
   * add item to the rear
   * increase rear, count
   * @param {*} item
   */
  add(item) {
    if (!this.isFull()) {
      this.queue[this.rear] = item;
      this.rear += 1;
      this.count += 1;
    }
    return this.isFull;
  }

  /**
   * checks if the queue is empty
   * serve the item in the front
   * increase front
   * decrease count
   * return item
   */
  serve() {
    if (!this.isEmpty()) {
      item = this.queue[this.front];
      this.front += 1;
      this.count -= 1;
      return item;
    }
    return this.isEmpty();
  }
}
