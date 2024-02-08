// this is a modified queue
/* 
 * +---------+---------------+----
 * |Task 1   | Task 2        |  ...
 * |Priority | Less Priority |  ...
 * +---------+---------------+----
 */
// this queue sorts itself (insertion sort but dynamic)
/* terminology:
 * 
 * 1. data   - the entire queue's data
 * 2. item   - any item in the queue
 * 3. left   - first item added to the queue
 * 4. right  - last item added to the queue
 */

export class Queue {
  data = []; // array<Item> ideally

  constructor() {
    this.data = [];
  }

  left = () => this.data[0]; // as good as peek
  right = () => this.data[this.data.length - 1];

  push = item => {
    if (this.data.length == 0) {
      this.data.push(item);
      return;
    }
    let i = this.data.length - 1;
    while (i >= 0 && this.data[i].factor > item.factor) i--;
    this.data.splice(i + 1, 0, item);
  }

  peek = (index = 0) => this.data[index];
  pop = (index = 0) => this.data.pop(index);
  popRight = () => this.data.pop(); // equivalent to stack pop

  edit = (index, newValue) => {
    if (index < 0 || index >= this.data.length) {
      console.error('Index out of bounds.');
      return;
    }

    const oldFactor = this.data[index].factor;
    this.data[index].factor = newValue;

    // Sort in both directions
    let i = index - 1;
    while (i >= 0 && this.data[i].factor > newValue) i--;

    const insertIndexLeft = i + 1;

    i = index + 1;
    while (i < this.data.length && this.data[i].factor < newValue) i++;

    const insertIndexRight = i;

    const removedItem = this.pop(index);

    if (oldFactor > newValue) {
      this.data.splice(insertIndexLeft, 0, removedItem);
    } else {
      this.data.splice(insertIndexRight, 0, removedItem);
    }
  };
}