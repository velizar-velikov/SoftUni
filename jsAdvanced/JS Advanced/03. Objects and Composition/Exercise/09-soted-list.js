function createSortedList() {
    return {
        nums: [],
        add(element) {
            this.nums.push(element);
            this.nums.sort((a, b) => a - b);
        },
        remove(index) {
            if (index < 0 || index > this.nums.length - 1) {
                throw new RangeError('Invalid index');
            }
            this.nums.splice(index, 1);
        },
        get(index) {
            if (index < 0 || index > this.nums.length - 1) {
                throw new RangeError('Invalid index');
            }
            return this.nums[index];
        },
        get size() {
            return this.nums.length;
        }

    }
}

//Tests
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);