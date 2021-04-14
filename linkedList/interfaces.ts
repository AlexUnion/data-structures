export interface ILink<T> {
  data: T;
  next: null | ILink<T>;
}
