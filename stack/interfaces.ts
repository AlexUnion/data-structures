export interface IStack<T> {
  push: (item: T) => void;
  pop: () => T | null; //return latest item from iterable without deleted
  peek: () => T | null; //delete latest item from iterable and return it
  getLength: () => number;
}

export interface IIterable<Y> {
  [key: number]: Y;
}
