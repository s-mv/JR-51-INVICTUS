import { Queue } from "./Queue";
import { Warehouse } from "./Warehouse";

let made = false;

export let company = undefined;

// singleton
export class Company {
  warehouses = {};
  id = undefined;
  inflow = new Queue();
  outflow = new Queue();
  name = undefined;

  constructor(id, name, warehouses) {
    if (made) return company;

    this.id = id;
    this.name = name;
    this.warehouses = warehouses;
    return this;
  }

  setID = id => { this.id = id; }

  addWarehouse = (name, capacity) => {
    this.warehouses[name] = new Warehouse(name, capacity);
  }
}