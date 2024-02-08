export class Item {
  warehouse = undefined; // parent warehouse ID
  factor = undefined;
  constructor(id, warehouse, factor) {
    this.id = id;
    this.warehouse = warehouse;
    this.factor = factor;
  }
}