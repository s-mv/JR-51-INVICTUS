import { Queue } from "./Queue.js";
import { Item } from "./Item.js";

let queue = new Queue();

queue.push(new Item(0, 0, 3));
queue.push(new Item(1, 0, 1));
queue.push(new Item(2, 0, 4));
queue.push(new Item(3, 0, 5));
queue.push(new Item(4, 0, 2));
queue.edit(2, 4);

let queueEquals = (a1, a2) => {
  if (a1.length != a2.length) return false;

  for (let i = 0; i < a1.length; i++)
    if (a1[i].factor != a2[i].factor) return false;

  return true;
}

let sorted = queue.data.sort((a, b) => b.factor - a.factor);

console.log(queueEquals(queue.data, sorted));