export class Warehouse {
  cap = 0; // capacity >= len
  size = 0; // size is the number of items filled
  id = undefined;
  name = undefined;

  constructor(id, name, size, capacity = 50) {
    this.id = id;
    this.name = name;
    this.cap = capacity;
    this.size = size;
  }

  setID = id => { this.id = id; }
}
