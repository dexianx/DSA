class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let curHashArray = [];
    let keyHash = this._hash(key);
    curHashArray.push(key);
    curHashArray.push(value);
    this.data[keyHash] = curHashArray;
  }

  get(key) {
    let keyHash = this._hash(key);
    return this.data[keyHash][1];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
