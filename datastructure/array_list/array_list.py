class ArrayList:
    def __init__(self, size=0):
        self.size = size
        self.array_list = [None] * self.size
        self.count = 0

    def __str__(self):
        print([str(item) for item in self.array_list])

    def count(self):  # pylint: disable=E0202
        return self.count + 1

    def is_full(self):
        return self.count + 1 == self.size

    def add(self, item):
        if self.count < self.size:
            self.array_list[self.count] = item
            self.count += 1
            return True
        else:
            return False

    def delete(self, index):
        if index < self.count and index >= 0:
            res = self.array_list[index]
            self.count -= 1
            for i in range(index, self.size):
                if (i == self.count):
                    self.array_list[i] = None
                    return res
                else:
                    self.array_list[i] = self.array_list[i+1]
        else:
            return False


if __name__ == "__main__":
    arr = ArrayList(5)
    arr.add(1)
    arr.add(3)
    arr.add(5)
    arr.add(6)
    arr.add(7)
    arr.delete(1)
    arr.delete(3)
    print([str(item) for item in arr.array_list])
