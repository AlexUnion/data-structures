export interface INode {
  key: string;
  children: Array<INode>;
  addChild: (node: INode) => void;
  get: (key: string) => INode | undefined;
  isEmpty: () => boolean;
}
