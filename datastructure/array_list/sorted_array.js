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
      let position = 0;
      for (let i = 0; i < this.count; i++) {
        if (this.array[i] < item) {
          position += 1;
        } else {
          break;
        }
      }
      for (let i = this.count - 1; i > position - 1; i--) {
        this.array[i + 1] = this.array[i];
      }
      this.array[position] = item;
      this.count += 1;
      return true;
    } else {
      return false;
    }
  }

  customDelete(index) {
    if (index < this.count && index >= 0) {
      for (let i = index; i < this.count - 1; i++) {
        this.array[i] = this.array[i + 1];
        if (i + 1 == this.count - 1) {
          this.array[i + 1] = null;
          break;
        }
      }
      this.count -= 1;
      return true;
    } else {
      return false;
    }
  }

  contain(item) {
    let left = 0;
    let right = this.count;
    while (left < right) {
      let mid = Math.floor((right - left) / 2); // check the calculation
      if (this.array[mid] == item) {
        return true;
      } else if (item < this.array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
}

let arr = new CustomArray(5);
arr.customAdd(3);
arr.customAdd(5);
arr.customAdd(1);
arr.customAdd(2);
console.log(arr.contain(2));
console.log(arr.array);
