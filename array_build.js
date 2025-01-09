class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }
  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftElements(index);
    return item;
  }

  shiftElements(index) {
    for (let i = index; index < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new Array();
newArray.push("12");
newArray.push("13");
console.log(newArray.delete("13"));
console.log(newArray);
