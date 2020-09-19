class CustomArray {
  constructor(size) {
    this.array = new Array(size).fill(null);
    this.count = 0;
    this.size = size;
  }

  isFull() {
    return this.size == this.count;
  }
  customAdd(item) {
    if (!this.isFull()) {
      this.array[this.count] = item;
      this.count += 1;
      return true;
    } else {
      return false;
    }
  }

  customDelete(index) {
    //check for valid index
    if (index < this.count && index >= 0) {
      // shift left
      for (let i = index; i < this.count - 1; i++) {
        if (i + 1 == this.count - 1) {
          this.array[i + 1] = null;
        } else {
          this.array[i] = this.array[i + 1];
        }
      }
      //decrease count
      this.count -= 1;
      //return element
      return true;
    } else {
      //return false
      return false;
    }
  }
}

let arr = new CustomArray(5);
arr.customAdd(1);
arr.customAdd(2);
arr.customAdd(3);
console.log(arr.array);
arr.customDelete(1);
console.log(arr.array);
