import { IStack, IIterable } from "./interfaces";

class Stack<T> implements IStack<T> {
  private iterator: IIterable<T>;
  private length: number;

  constructor(...items: Array<T>) {
    this.length = 0;
    this.iterator = {} as IIterable<T>;
    items.forEach((item) => {
      this.push(item);
    });
  }

  push(item: T): void {
    this.iterator[this.length++] = item;
  }

  pop(): T | null {
    const { length } = this;
    return length ? this.iterator[length - 1] : null;
  }

  peek(): T | null {
    const { length } = this;
    if (length) {
      const item = this.iterator[length - 1];
      delete this.iterator[--this.length];
      return item;
    }
    return null;
  }

  getLength(): number {
    return this.length;
  }
}

export default Stack;
