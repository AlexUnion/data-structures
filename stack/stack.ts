import { IStack } from "./interfaces";

class Stack<T> implements IStack<T> {
  private iterator: Array<T>;

  constructor(iterable?: Array<T>) {
    this.iterator = iterable ? [...iterable] : [];
  }

  push(item: T): void {
    this.iterator.push(item);
  }

  pop(): T | null {
    if (this.iterator.length) {
      return this.iterator.pop() as T;
    }
    return null;
  }

  peek(): T | null {
    const length = this.iterator.length;
    if (length) {
      return this.iterator[length - 1];
    }
    return null;
  }

  length(): number {
    return this.iterator.length;
  }
}
