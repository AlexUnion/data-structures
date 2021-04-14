import { ILink } from "./interfaces";

class Link<T> implements ILink<T> {
  data;
  next;

  constructor(data: T, next: null | ILink<T> = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: null | ILink<T>;
  tail: null | ILink<T>;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  private find(data: T): ILink<T> | undefined {
    let current = this.head;

    while (current) {
      if (current.data === data) return current;
      current = current.next;
    }

    return undefined;
  }

  has(data: T): boolean {
    return Boolean(this.find(data));
  }

  append(data: T) {
    const node: ILink<T> = new Link(data, null);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  appendAfter(origin: T, data: T) {
    const current = this.find(origin);

    if (!current) {
      throw new Error("This link is missing");
    }

    const next = current.next;
    const node: ILink<T> = new Link(data, next);
    current.next = node;
  }

  prepend(data: T) {
    const node: ILink<T> = new Link<T>(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  toArray(): Array<T> {
    const outArr: Array<T> = [];
    let current = this.head;

    while (current) {
      outArr.push(current.data);
      current = current.next;
    }

    return outArr;
  }
}

export default LinkedList;
