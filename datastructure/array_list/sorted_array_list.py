class SortedArrayList:
    def __init__(self, size=0):
        self.size = size
        self.array_list = [None] * self.size
        self.count = 0

    def __str__(self):
        print([str(item) for item in self.array_list])

    def is_full(self):
        return self.count == self.size

    def add(self, item):
        has_space_left = not self.is_full()
        if has_space_left:
            # find position
            position = 0
            for i in range(0, self.count):
                if(self.array_list[i] < item):
                    position += 1
                else:
                    break
            for j in range(self.count - 1, position - 1, -1):
                self.array_list[j + 1] = self.array_list[j]
            self.array_list[position] = item
            self.count += 1
        return has_space_left

    def delete(self, index):
        valid_index = index >= 0 and index < self.count
        if valid_index:
            for i in range(index, self.size):
                if i == self.count - 1:
                    self.array_list[i] = None
                    break
                else:
                    self.array_list[i] = self.array_list[i+1]
            self.count -= 1
        return valid_index

    def __contain__(self, item):
        left = 0
        right = self.count
        while (left <= right):
            mid = left + ((right - left)//2)
            if (self.array_list[mid] == item):
                return True
            elif (self.array_list[mid] > item):
                right = mid - 1
            else:
                left = mid + 1
        return False


if __name__ == "__main__":
    arr = SortedArrayList(7)
    arr.add(3)
    arr.add(1)
    arr.add(5)
    arr.add(7)
    arr.add(6)
    arr.add(0)
    arr.add(10)
    arr.delete(0)
    print(arr.__contain__(1))
    print([str(item) for item in arr.array_list])
