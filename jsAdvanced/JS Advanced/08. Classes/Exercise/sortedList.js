class List {
    numbers = [];
    size = 0;

    add(element) {
        this.numbers.push(element);
        this.numbers.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index > this.numbers.length - 1) {
            throw new Error('Invalid index');
        }
        this.numbers.splice(index, 1);
        this.size--;
        return;
    }

    get(index) {
        if (index < 0 || index > this.numbers.length - 1) {
            throw new Error('Invalid index');
        }
        return this.numbers[index];
    }
}

//TESTING
let list = new List();
list.add(7);
list.add(6);
list.remove(0);
list.remove(0);
list.add(5);
console.log(list.get(0));
console.log(list.size);